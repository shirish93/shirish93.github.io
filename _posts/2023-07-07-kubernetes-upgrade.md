---
layout: post
title:  "A tale of the treacherous task of Kubernetes upgrade"
author: shirish
categories: [ engineering, software, cloudformation, infrastructure, kubernetes ]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*0upfXtjqscQ5NQfN.png"
---

This is a tale of unmitigated blast radius, in this essay I discuss how I broke one of our developer environments and the ensuing recovery attempts by our team that uncovered several unrelated issues.

### Introduction

Keeping one's software dependencies and libraries up-to-date is important not just for the access to the latest features, but also for security, and performance gains. This essay chronicles our team's experience navigating the complexities of upgrading a Kubernetes cluster. We will discuss the challenges encountered, the lessons learned, and how resilience in the face of unforeseen obstacles is so important for software engineers. In the end, our team was out of internal development environment for about half a day, but we discovered several potential issues with our workflow and programming practices, and those discoveries have made us more resilient to future failures.

### The Impetus for Modernization

Our motivation for the upgrade stemmed from a confluence of factors. Our Kubernetes cluster, hosted on Amazon Elastic Kubernetes Service (EKS), neared its end-of-life (EOL) stage. This posed significant security and support concerns, not to mention increased support costs, leaving our systems vulnerable and hindering access to critical security patches. Additionally, staying current with Kubernetes versions offered a multitude of benefits beyond security. These included access to new features for streamlined development, cost optimizations through improved resource utilization, and the ability to explore new features offered in newer versions of kubernetes.

However, implementing the upgrade was not without its hurdles. To sync the version compatibilities across various components was a significant challenge. The release schedule of AWS updates for Kubernetes is quite slow compared to mainline releases. This, coupled with delays in the development and deployment of company-approved Amazon Machine Images (AMIs), made the upgrade trickier. We had been pushing out the upgrade process in the past because we were resource constrained, and an upgrade of such complexity needed at least a few engineers looking into it. We needed to take a strategic approach, to balance the need for modernization with the realities of our development environment and resource limitations.

Around this time, security researchers released details of the 'Leaky Vessel' [vulnerability](https://snyk.io/blog/leaky-vessels-docker-runc-container-breakout-vulnerabilities/) a critical vulnerability in the "runC" container runtime, that served as a wake-up call for us, highlighting the urgency of the situation. This vulnerability had the potential to compromise the security of our systems, potentially exposing them to malicious actors and data breaches. The consequences were severe, immediate action was needed to mitigate the risk. This vulnerability was a  reminder that must eventually pay security dues, either through constant upgrades, or by having one's systems compromised. Teams neeed to be proactively addressing potential security gaps before they materialize into real-world threats.

### A Multi-Faceted Upgrade Approach

With the urgency established, our team meticulously planned a multi-step approach to navigate the upgrade process. Because the components in our Kubernetes ecosystem were so interconnected, we devised a strategy that addressed each element and its interaction with other pieces:

* **Istio:** Given the significant age of our Istio version, a direct upgrade to the latest Kubernetes version was not feasible. To ensure compatibility, we implemented a multi-step upgrade process, carefully migrating through two intermediate Istio versions before reaching the desired state.
* **Kubernetes:** Similar to Istio, the Kubernetes version also underwent multiple upgrades to ensure seamless compatibility with the other components within the cluster.
* **Calico:** The Calico network policy engine, another component of our Kubernetes setup, was also upgraded in a phased manner, adhering to the established compatibility requirements.
* **Amazon Machine Images (AMIs):** Upgrading the underlying AMIs was essential to unlock the latest features and security patches offered by the newer versions.
* **Runtime Environments:** The runtime environments for our Python and JavaScript Lambda functions, which played a vital role in our deployment process, were also upgraded to ensure compatibility with the updated system.

We created and maintained a comprehensive compatibility chart to remind ourselves what was compatible with what, and what specific order of upgrades would get us to the upgrades least painfully. Notably, the significant age of our Istio version meant we had to take a multi-upgrade approach: upgrading directly to the latest Kubernetes version would have resulted in compatibility issues. We incrementally migrated through two intermediate Istio versions before reaching the desired state. To facilitate a controlled and phased rollout of upgrades across different environments and clusters (nine in total), we implemented a new "upgrade version" feature in our code. This feature enabled us to control the upgrade process, ensuring minimal disruption to our development and production workflows.

### Unexpected Encounters and Unforeseen Challenges

Despite our careful planning, the upgrade wasn't without unexpected challenges. The initial stages of the upgrade unfolded as planned, but there were occasionally curveballs. More specifically, these complications tested our adaptability and resilience:

* **CDK Deployment Limitations:** The AWS Cloud Development Kit (CDK), a popular infrastructure-as-code tool we use to manage our infrastructure, presented anossie. CDK restrictions prevented us from performing simultaneous changes to the Kubernetes version and AMIs. This limitation made us create an additional step, requiring us to rename our node groups, introducing an unexpected wrinkle into our carefully crafted upgrade plan. The renaming of the node group was a solution I'd accidentally discovered a couple of weeks previously: doing so completely deletes the existing nodegroup, and recreates a new one with the exact properties of the replaced group. We effectively deleted all the nodes of our clusters, and migrated our workload to new nodes after draining the running ones to account for this issue.

* **Lambda Runtime Incompatibility:** Our Python and JavaScript Lambda functions, encountered compatibility issues with the upgraded runtime environments. These functions, responsible for orchestrating deployments and managing infrastructure changes, are essential parts of our infrastructure code and run deployments within the aws ecosystem. The unexpected incompatibility necessitated an unplanned switch from the "amd64" runtime architecture to "arm64." While this workaround resolved the immediate compatibility issue, it highlighted the importance of thorough testing and comprehensive compatibility checks throughout the upgrade process.

The true test of our resilience emerged shortly after successfully navigating these initial hurdles. As we basked in the imagined success of the upgrade, something came up that threatened to undo everything:

* **Deployment Failures:** Our engineers had observed failures in deployments initiated from scratch for a few weeks approaching the upgrade. This unexpected behavior indicated potential compatibility issues, prompting us to investigate further. Upon closer examination, we assumed that the Calico network policy engine, a  component responsible for network security within the cluster, remained on an un-upgraded version, and that was causing the deployment issues. This incompatibility, coupled with the changes introduced during the upgrade process, appeared to be the culprit behind the observed deployment failures.

This seemingly isolated incident would snowball into a cascade of interconnected problems, demanding urgent attention and a daylong all-hands debugging session. The next part of this essay looks into this series of interconnected errors and the  steps we took to recover and ensure the successful completion of the upgrade process.


### A Cascade of Interconnected Errors and the Road to Recovery

The seemingly straightforward deployment failure triggered by the un-upgraded Calico version unraveled into a series of related challenges, pushing our team's resilience to the test.

* **Unintended Reversal:** Our company's internal "RADAR" system, designed to safeguard our infrastructure, inadvertently rolled back the newly upgraded AMIs to their previous versions. This rollback, triggered by a misconfiguration, resulted in both development environments (dev and dev2) crashing. Our developers were now unable to test their applications in our internal infrastructure, because the kubernetes pods were 'thrashing'.

* **Lambda Deployment Bug:** While investigating the deployment failures, we discovered a long-standing bug within the Lambda function responsible for deploying software. This bug, present for an extended period, would allow the Lambda to function flawlessly during the initial deployment but inexplicably fail on subsequent deployments. It had been uncaught for so long because the initial success masked its existence. We discovered that our infrastructure pipeline, while otherwise robust was 'eating up' errors bubbled up in the lambda deployment functions, and we would have to make our deploys break if the lambda functions broke.

* **DockerHub Dependency:** An additional layer of complexity became apparent when we discovered that our application sidecars, including Istio and Calico, were inadvertently referencing the external DockerHub repository instead of our internal proxy for container image downloads. This oversight, likely stemming from an earlier configuration change, resulted in excessive load on the DockerHub endpoints, exceeding usage limits and preventing successful image downloads.

Faced with this cascade of errors, we took the following steps to address the situation:

* **Restoring Node Groups:** Recognizing the unintended rollback triggered by RADAR, we reverted the node group changes, effectively restoring the previous Kubernetes and AMI versions. This action brought both development environments back online, mitigating the immediate service disruption.

* **Lambda Function Fixes:** We addressed the long-standing bug within the Lambda deployment function, ensuring its consistent functionality across all deployment iterations. Additionally, we rectified the image pull issue within the sidecars by manually modifying deployments, DaemonSets, and ConfigMaps to utilize the correct internal proxy. This approach eliminated the reliance on external repositories and prevented future timeout issues.

* **Enhanced Communication and Future-Proofing Measures:** Recognizing the potential for human error and miscommunication, we implemented stricter partnership practices, emphasizing the importance of clear communication and documenting key decisions. Furthermore, we established a ticketing system to track and address potential issues identified during the upgrade process. To mitigate future dependencies on external vendors, we initiated a project to migrate container image downloads entirely to our internal proxy, eliminating reliance on external services with potentially less stringent security controls.

* **Improved unit tests for all code including lambda fucntions:** The discovery that we were 'eating' our lambda failures led to serious discussions within the team about the need for more rigorous testing. As a result, our engineers stood up test harnesses and wrote unit tests that tested functionality across all parts of the deployment code, including lambda functions. So now we can locally test our lambda functions (thanks to mocked aws objects), before deploying, confident that any failure will be promptly bubbled up as an error and we'll be immediately notified.

In this essay we have hopefully impressed upon the reader the complex nature of infrastructure management. We discussed the importance of meticulous planning, comprehensive testing, and adaptability in the face of unforeseen circumstances. The process was quite challenging and stressful, but the  lessons learned and the enhanced infrastructure security posture instilled a sense of accomplishment made our team stronger and more confident of our own code.

__Open source image above from [kubernetes.io](https://kubernetes.io/).__