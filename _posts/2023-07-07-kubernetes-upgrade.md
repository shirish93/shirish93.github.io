---
layout: post
title:  "A tale of the treacherous task of Kubernetes upgrade"
author: shirish
categories: [ engineering, software, cloudformation, infrastructure, kubernetes ]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*0upfXtjqscQ5NQfN.png"
---

This is a tale of unmitigated blast radius in networking. I broke two of our developer environments the second day of joining the infrastructure squad. We discovered several potential issues with our workflow and engineering practices. Let me explain how that happened, and what we did to fix it. We'll also discuss what our squad did to avoid repeating the situation. 

### The Impetus for Modernization

We were upgrading our kubernetes clusters for multiple reasons. Keeping software dependencies up-to-date is important for security mitigation and performance gains.  The Kubernetes cluster, hosted on Amazon Elastic Kubernetes Service (EKS), was  on a version nearing its end-of-life (EOL). This posed considerable security and support concerns, and the associated increased support costs. Our infrastructure was vulnerable and we'd stopped getting critical security patches. Upgrading to newer kubernetes versions would also get us new features we wanted to test out.

Implementing the upgrade was long-winded and complicated. Syncing version compatibilities across different kubernetes addons was... challenging. The release schedule of AWS Kubernetes is  slow compared to mainline releases. Our engineering org had been running late on releasing company-approved Amazon Machine Images (AMIs) too. The confluence of the two factors made the upgrade even more complicated. We had been pushing out the upgrade process in the past because we were resource constrained. An upgrade so complex needed at least a few engineers working on it. We had to balance the need for modernization with the realities of resource limitations. We needed to upgrade, but the complexity was delaying the implementation.

Around this time, security researchers released details of the 'Leaky Vessel' [vulnerability](https://snyk.io/blog/leaky-vessels-docker-runc-container-breakout-vulnerabilities/) a critical vulnerability in the "runC" container runtime. It was a wake-up call for us. This vulnerability could potentially compromise the security of our applications.  We could be exposed to malicious actors and data breaches. The consequences were severe, immediate action was needed to mitigate the risk. It was a reminder that we must eventually pay security dues, either through upgrades, or by having one's systems compromised. Proactively patching potential security gaps before they turn into real-world threats is the only way to avoid compromises.

We had the urgency now, all additional engineers were ready for upgrade. Our team carefully planned a multi-step approach for the upgrade. Because the Kubernetes addons were so interconnected, we sketched a rough strategy that mapping relationships between them:

* **Istio:** Our Istio version was old. A direct upgrade to the latest version was not feasible. To ensure compatibility, we implemented a multi-step upgrade process. We had to carefully migrate through two intermediate Istio versions before reaching the final version.
* **Kubernetes:** Similar to Istio, the Kubernetes version also underwent multiple upgrades. Jumping more than one version is not recommended, to ensure compatibility with the addons.
* **Calico:** The Calico network policy engine, another addon, was also upgraded in a phased manner. We had a compatibility chart setup that we followed, one step at a time.
* **Amazon Machine Images (AMIs):** Upgrading the AMIs was needed to receive the latest features and security patches.
* **Runtime Environments:** We use Python and Javascript lambda functions for our infrastructure deployment. The runtime environments for those were also upgraded to latest versions.

We created and maintained a detailed compatibility chart. It was to remind ourselves what was compatible with what. The chart was the guide for the specific order of upgrades to do the upgrades least painfully. Notably, the significant age of our Istio version meant we had to take a multi-upgrade approach. Upgrading directly to the latest Kubernetes version would have resulted in compatibility issues. We incrementally migrated through two intermediate Istio versions before reaching the desired state. To do a controlled and phased rollout of upgrades across different environments and nine EKS clusters, we implemented an "upgrade version" feature in our code. This feature let us to control the upgrade process. The idea was to minimize disruption to our development and production environments.

We planned carefully, but the upgrade wasn't without spanner in the gears. The initial part of the upgrade went as planned, but there were occasional curve-balls. These were the biggest complications we encountered.

* **CDK Deployment Limitations:** The AWS Cloud Development Kit (CDK), is a popular infrastructure-as-code library we use to manage our clusters. CDK restrictions wouldn't let us make simultaneous changes to Kubernetes version and upgrade AMI. This limitation made us create an additional step, and that made us rename our node groups. Renaming node group was a solution I'd accidentally discovered a couple of weeks previously. Renaming a node group completely deletes the existing nodegroup, and creates one with the exact properties of the replaced group. We deleted all the nodes in our clusters, and migrated our workload to new nodes after draining the running ones to account for this issue.

* **Lambda Runtime Incompatibility:** Our Python and JavaScript lambda functions ran into compatibility issues with the upgraded runtime environments. These functions orchestrate and manage deployments and infrastructure changes. This incompatibility led us to switch from the "amd64" runtime architecture to "arm64." This resolved the immediate compatibility issue. However, we were reminded to test for runtime compatibility in future releases. We hadn't considered it a variable previously.

As we basked in the success of the upgrade, something threatened to undo everything.

Our engineers had observed failures in deployments initiated from scratch for a few weeks approaching the upgrade. This unexpected behavior indicated potential compatibility issues. On closer examination, we assumed that the Calico network policy engine had remained on an older version, causing the deployment issues. We guessed the incompatibility would go away once we upgraded Calico.

This seemingly isolated incident would snowball into a cascade of interconnected problems, however. We would spend an entire day with the full squad debugging and un-borking our clusters. We had to spend considerable time and effort debugging the errors. Here's what happened, and how we fixed the issues.

Our company's internal "RADAR" system, designed to safeguard our infrastructure, rolled back the newly upgraded AMIs to their previous versions. It was due to a misconfiguration in the AMI we weren't expecting. We didn't create or own the AMI. This rollback, triggered by a misconfiguration, resulted in both development environments (dev and dev2) crashing. Our developers were now unable to test their applications in our internal infrastructure, because the kubernetes pods were 'thrashing'.

While investigating the deployment failures, we discovered a long-standing bug within the Lambda function responsible for deploying infrastructure. This bug, present since early on, would allow the Lambda to function flawlessly during the initial deployment but inexplicably fail on subsequent deployments. It had been uncaught for so long because the initial success masked its existence. We discovered that our infrastructure pipeline was 'eating up' errors bubbled up in the lambda deployment functions. We weren't throwing exceptions anywhere! Our deploys would all break if the lambda functions broke.

We found that our application sidecars, including Istio and Calico, were referencing the external DockerHub repository instead of internal proxy for container images. This led to excessive load on the DockerHub endpoints, exceeding usage limits and preventing successful image downloads. Calico wouldn't start, istio wouldn't start, the cluster would keep 'thrashing'. We were DDOS'ing DockerHub unintentionally!

We took the following steps to address the situation:

* **Restoring Node Groups:** Recognizing the unintended rollback triggered by RADAR, we reverted the node group changes. That effectively restored the previous Kubernetes and AMI versions. This brought both development environments back online, fixing service disruption.

* **Lambda Function Fixes:** We fixed the long-lived bug in the Lambda function. We also added unit tests to test our Lambda functions. Finally, we created Cloudformation triggers, so that lambda failures would break Cloudformation deployments. We hadn't done that before. We temporarily fixed the image pull issue in the sidecars by manually editing deployments, DaemonSets, and ConfigMaps to use the internal proxy. This removed the reliance on external repositories. No more future timeouts for us!

* **Better Communication and Future-Proofing Measures:** Some of the issues had been caused by lack of clear communication within the squad. We implemented stricter practices, focusing on documenting key decisions. We created dozens of JIRA tickets to track and address the issues discovered during the upgrade process. To avoid future dependencies on external resources, we began a project to migrate container image downloads entirely to our internal proxy.

* **Improved unit tests for all code including lambda functions:** The discovery that we were 'eating' our lambda failures led to serious discussions within the team. We needed more rigorous testing! Our engineers stood up test harnesses and wrote unit tests that tested functionality across all parts of the deployment code, including lambda functions. We can now locally test our lambda functions (thanks to mocked aws objects), before deploying. This gives us confidence that any failure will be promptly bubbled up as an error.

__Open source image above from [kubernetes.io](https://kubernetes.io/).__