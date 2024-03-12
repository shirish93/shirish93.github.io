---
layout: post
title:  "Upgrading a Kubernetes Cluster: A Journey of Resilience and Learning"
author: sal
categories: [ engineering, software, cloudformation, infrastructure, kubernetes ]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*0upfXtjqscQ5NQfN.png"
featured: false
hidden: false
---

A tale of unmitigated blast radius, in this essay I discuss how I broke one of our developer environments and our recovery attempts.

### Introduction

Maintaining up-to-date software systems is paramount for security, performance, and access to the latest features. This essay chronicles our team's experience navigating the complexities of upgrading a Kubernetes cluster, highlighting the challenges encountered, the valuable lessons learned, and the importance of resilience in the face of unforeseen obstacles. We were out of internal development environment for about half a day, but discovered several potential issues with our workflow and coding practices, that makes us more resilient to future failures.

### The Impetus for Modernization

Our motivation for the upgrade stemmed from a confluence of factors. Our Kubernetes cluster, hosted on Amazon Elastic Kubernetes Service (EKS), neared its end-of-life (EOL) stage. This posed significant security and support concerns, leaving our systems vulnerable and hindering access to critical security patches. Additionally, staying current with Kubernetes versions offered a multitude of benefits beyond security. These included access to new features for streamlined development, cost optimizations through improved resource utilization, and the ability to explore emerging technologies for a competitive edge.

### Embarking on the Upgrade Journey: Challenges and Hurdles

However, implementing the upgrade was not without its hurdles. To sync the balance of version compatibilities across various components presented a significant challenge. The release schedule of AWS updates, can sometimes be relatively slow. This, coupled with delays in the development and deployment of company-approved Amazon Machine Images (AMIs), made the upgrade even trickier. We had been pushing out thee upgrade process in the past because we were resource constrained, and an upgrade of such complexity needed at least a few engineers looking into it. We needed to take a strategic approach, to balance the need for modernization with the realities of our development environment and resource limitations.

Around this time, security researchers released details of the 'Leaky Vessel' [vulnerability](https://snyk.io/blog/leaky-vessels-docker-runc-container-breakout-vulnerabilities/) a critical vulnerability in the "runC" container runtime, that served as a wake-up call for us, highlighting the urgency of the situation. This vulnerability had the potential to compromise the security of our systems, potentially exposing them to malicious actors and data breaches. The potential consequences were severe, immediate action was needed to mitigate the risk. This vulnerability was a stark reminder of the fact that you have to eventually pay your security dues, either through constant upgrades, or by having your data compromised. Teams neeed to be proactively addressing potential security gaps before they materialize into real-world threats.

### A Multi-Faceted Upgrade Approach

With the urgency established, our team meticulously planned a multi-faceted approach to navigate the upgrade process. Recognizing the interconnected nature of the various components within our Kubernetes ecosystem, we devised a comprehensive strategy that addressed each element:

* **Istio:** Given the significant age of our Istio version, a direct upgrade to the latest Kubernetes version was not feasible. To ensure compatibility, we implemented a multi-step upgrade process, carefully migrating through two intermediate Istio versions before reaching the desired state.
* **Kubernetes:** Similar to Istio, the Kubernetes version also underwent multiple upgrades to ensure seamless compatibility with the other components within the cluster.
* **Calico:** The Calico network policy engine, another crucial component of our Kubernetes setup, was also upgraded in a phased manner, adhering to the established compatibility requirements.
* **Amazon Machine Images (AMIs):** Upgrading the underlying AMIs was essential to unlock the latest features and security patches offered by the newer versions.
* **Runtime Environments:** The runtime environments for our Python and JavaScript Lambda functions, which played a vital role in our deployment process, were also upgraded to ensure compatibility with the updated system.

Throughout this process, we created and maintained a comprehensive compatibility chart to remind ourselves what was compatible with what, and what specific order of upgrades would get us to the upgrades least painfully. Notably, the significant age of our Istio version meant we had to take a multi-upgrade approach: upgrading directly to the latest Kubernetes version would have resulted in compatibility issues. We incrementally migrated through two intermediate Istio versions before reaching the desired state. To facilitate a controlled and phased rollout of upgrades across different environments (nine in total), we implemented a new "upgrade version" feature in our code. This feature enabled us to control the upgrade process, ensuring minimal disruption to our development and production workflows.

### Unexpected Encounters and Unforeseen Challenges

Despite our meticulous planning and careful execution, the path to modernization wasn't without unforeseen challenges. The initial stages of the upgrade unfolded as planned, but there were occasionally curveballs. More specifically, these complications tested our adaptability and resilience:

* **CDK Deployment Limitations:** The AWS Cloud Development Kit (CDK), a popular infrastructure-as-code tool we use to manage our infrastructure, presented an unexpected hurdle. CDK restrictions prevented us from performing simultaneous changes to the Kubernetes version and AMIs. This limitation necessitated an additional step, requiring us to rename our node groups, introducing an unexpected wrinkle into our carefully crafted upgrade plan. The renaming of the node group was a solution I'd accidentally discovered a couple of weeks previously: doing so completely deletes the existing nodegroup, and recreates a new one with the exact properties of the replaced group. We effectively deleted all the nodes of our clusters, and migrated our workload to new nodes after draining the running ones to account for this issue.

* **Lambda Runtime Incompatibility:** Our Python and JavaScript Lambda functions, which play a critical role in the deployment process, encountered compatibility issues with the upgraded runtime environments. These functions, responsible for orchestrating deployments and managing infrastructure changes, are essential parts of our infrastructure code. The unexpected incompatibility necessitated an unplanned switch from the "amd64" runtime architecture to "arm64." While this workaround resolved the immediate compatibility issue, it highlighted the importance of thorough testing and comprehensive compatibility checks throughout the upgrade process.

The true test of our resilience emerged shortly after successfully navigating these initial hurdles. As we basked in the perceived success of the upgrade, a critical issue surfaced, threatening to unravel our progress:

* **Deployment Failures:** Our engineers had observed failures in deployments initiated from scratch a few weeks approaching the upgrade. This unexpected behavior indicated potential compatibility issues, prompting us to investigate further. Upon closer examination, we assumed that the Calico network policy engine, a crucial component responsible for network security within the cluster, remained on an un-upgraded version, and that was causing the deployment issues. This incompatibility, coupled with the changes introduced during the upgrade process, appeared to be the culprit behind the observed deployment failures.

This seemingly isolated incident would snowball into a cascade of interconnected problems, demanding urgent attention and a daylong all-hands debugging session. The next part of this essay delves into this series of interconnected errors and the crucial steps we took to recover and ensure the successful completion of the upgrade process.


### A Cascade of Interconnected Errors and the Road to Recovery

The seemingly straightforward deployment failure triggered by the un-upgraded Calico version unraveled into a series of interconnected challenges, pushing our team's resilience to the test.

* **Unintended Reversal:** Our internal "radar" system, designed to safeguard our infrastructure, inadvertently rolled back the newly upgraded AMIs to their previous versions. This rollback, triggered by a misconfiguration, resulted in both development environments (dev and dev2) crashing. Our developers were now unable to test their applications in our internal infrastructure, because the kubernetes pods were 'thrashing'.

* **Lambda Deployment Bug:** While investigating the deployment failures, we unearthed a long-standing bug within the Lambda function responsible for deploying software. This bug, present for an extended period, would allow the Lambda to function flawlessly during the initial deployment but inexplicably fail on subsequent deployments. It had been uncaught for so long because the initial success masked its existence. We discovered that our infrastructure pipeline, while otherwise robust was 'eating up' errors bubbled up in the lambda deployment functions, and we would have to make our deploys break if the lambda functions broke.

* **DockerHub Dependency:** An additional layer of complexity emerged when we discovered that our application sidecars, including Istio and Calico, were inadvertently referencing the external DockerHub repository instead of our internal proxy for container image downloads. This oversight, likely stemming from an earlier configuration change, resulted in excessive load on the DockerHub endpoints, exceeding usage limits and preventing successful image downloads.

Faced with this cascade of interconnected errors, our team swiftly mobilized to address the situation:

* **Restoring Node Groups:** Recognizing the unintended rollback triggered by our "radar" system, we promptly reverted the node group changes, effectively restoring the previous Kubernetes and AMI versions. This action brought both development environments back online, mitigating the immediate service disruption.

* **Lambda Function Fixes:** We addressed the long-standing bug within the Lambda deployment function, ensuring its consistent functionality across all deployment iterations. Additionally, we rectified the image pull issue within the sidecars by manually modifying deployments, DaemonSets, and ConfigMaps to utilize the correct internal proxy. This approach eliminated the reliance on external repositories and prevented future timeout issues.

* **Enhanced Communication and Future-Proofing Measures:** Recognizing the potential for human error and miscommunication, we implemented stricter collaboration practices, emphasizing the importance of clear communication and documenting key decisions. Furthermore, we established a ticketing system to track and address potential issues identified during the upgrade process. To mitigate future dependencies on external vendors, we initiated a project to migrate container image downloads entirely to our internal proxy, eliminating reliance on external services with potentially less stringent security controls.

The journey highlighs the intricate nature of infrastructure management, emphasizing the importance of meticulous planning, comprehensive testing, and adaptability in the face of unforeseen circumstances. While the process presented its fair share of challenges, the valuable lessons learned and the enhanced infrastructure security posture instilled a sense of accomplishment and fortified our team's resolve to navigate future


__Open source image above from [kubernetes.io](https://kubernetes.io/).__