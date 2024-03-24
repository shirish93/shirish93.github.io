---
layout: post
title:  "A Kubernetes Odyssey in setting up the NVIDIA GPU drivers and time-slicing"
author: sal
categories: [ infrastructure, data-science, kubernetes]
featured: false
hidden: false
---

This essay chronicles an unexpected adventure in implementing GPU time slicing on our EKS cluster. What began as a seemingly straightforward task – installing the gpu-operator – blossomed into a multifaceted exploration that unearthed challenges, refined processes, and ultimately yielded substantial benefits across our infrastructure.

**The Initial Hurdle: A Charting Error**

My goal was simple: the ticket said 'install the nvidia gpu operator and the time slicing addon-on into our EKS GPU cluster'. I headed to the NVIDIA official website, and they had instructions for exactly my requirements. How fortuitous, I thought, it'd be a done in a day or two.

Armed with clear instructions from the NVIDIA website, I embarked on the mission, starting with the seemingly simple task of installing the gpu-operator resource. Following the provided Helm installation steps meticulously, I encountered the first roadblock – a failed installation.  Delving deeper, I discovered the culprit: the Helm chart contained 20 resources with Docker repository references pointing to NVIDIA's registry.  These references needed modification to work with Liberty Mutual's Docker proxy.  This seemingly minor adjustment, however, was just the first obstacle on this uncharted course.

**Deeper into the Helm Chart: Incompatibility and Inconsistency**

Undeterred, I examined the Helm chart further. The binaries it attempted to install were UBI binaries – a format incompatible with our Amazon Linux-based nodes.  Swiftly modifying the binaries for compatibility, I was surprised to find the issue persist.  Puzzled, I turned to the Kubernetes event logs, uncovering the root cause: the minimum required glibc version for several resources was 2.27, exceeding the 2.26 version present in our Amazon Linux nodes.

**The Glibc Maze: Seeking Alternative Paths**

Confronted with this limitation, I explored online solutions, many suggesting "alternative" glibc installations or "shimmed" versions.  Recognizing the potential disruption such modifications could cause to core system libraries, I opted for a different path: transitioning our base AMI to a newer Amazon Linux version with the requisite glibc update.

Navigating the world of AMIs presented its own challenges. Liberty-approved options were limited.  Fortunately, serendipity and Vijay's invaluable guidance led me to the GDS CAAS team's solution.  Through Dave's (Moore) intervention, I connected with Nick from CAAS, who revealed their successful utilization of Ubuntu base images, a solution that bypassed similar glibc-related issues they had encountered.  Furthermore, I discovered Liberty IT's plans for a future migration away from Amazon Linux towards Ubuntu, presenting a pivotal turning point. We would embrace Ubuntu, paving the way for enabling GPU time slicing in the cluster – albeit with new challenges on the horizon.

**The Ubuntu Migration: Challenges and a Synchronized Upgrade**

The decision to migrate to Ubuntu base images presented a fresh set of hurdles.  Our cloud-init scripts, customized for Amazon Linux, required a complete overhaul to manage GPU driver setup for Ubuntu.  Additionally, the inherent architectural differences between the two operating systems demanded careful consideration.  While navigating these complexities alongside Nick from CAAS, a crucial discovery surfaced. Their team was actively developing Kubernetes 1.24 Ubuntu AMIs.  Recognizing an opportunity, I proposed a synchronized upgrade to both the operating system and Kubernetes version, capitalizing on the existing momentum for change. Additionally, considering the end-of-life status of our current Kubernetes version (v1.23), the upgrade offered enhanced security and stability. Driven by the unwavering need to guarantee driver installation success, I forged ahead with the Ubuntu image specifically designed for Kubernetes v1.24.

**The Labyrinth of Drivers and Libraries: A Trial by Fire**

The next logical step involved installing the requisite GPU drivers and libraries onto the Ubuntu image via the cloud-init script.  However, obtaining clear and concise instructions proved to be a time-consuming endeavor.  Three arduous days ensued, characterized by relentless research and pleas for assistance within various infrastructure channels before achieving meaningful progress. This victory, however, was short-lived.

**Unearthing a Hidden Bug and Unforeseen Consequences**

While in the midst of installing the final driver, a critical issue emerged – the nodes were running out of disk space. Resorting to SSH access, I discovered a crucial missing piece: Liberty's SSM access wasn't enabled by default within our base infrastructure code.  Consulting Confluence, I identified the necessary IAM policies, which I manually attached to the relevant node roles.  Access finally granted, I examined the nodes, only to discover that the driver installation had consumed the entirety of the allocated 20GB root drive space. However, our infrastructure code supposedly configured a 100GB volume to be mounted on the root directory – so where was the remaining space disappearing to?

This perplexing situation ultimately led to the unearthing of a latent bug within our infrastructure code. The 100GB volume was never actually being mounted to the intended mountpoint, effectively rendering it unusable for all clusters utilizing the code. This serendipitous discovery presented a new challenge: identifying the correct mountpoint. After scouring AWS documentation and enduring a few initial missteps, I located the appropriate mountpoint. However, a further hurdle arose – the primary volume's mountpoint wasn't a parametrized variable within the code. To rectify this, I proposed a pull request in the eks-cdk library, successfully introducing the missing parameter and providing the correct value. Finally, the drivers installed successfully!

**Network Disruption: A Port Conflict and a Community Rescue**

While the cluster successfully formed and the nodes functioned, an error surfaced within the gateways, indicating significant network disruptions. Further investigation, aided by guidance from the Slack community, revealed a conflict: CoreDNS, responsible for DNS resolution within the cluster, was unable to start due to systemd-resolvd, a service managing DNS resolution on Ubuntu, occupying the same port (53). This meant CoreDNS could never launch, crippling intra-cluster communication.

After consulting with Vijay, two potential solutions emerged: disabling the daemon or altering CoreDNS to utilize a different port. While disabling the daemon seemed less complex, I initially attempted modifying the CoreDNS port. This endeavor, however, proved time-consuming and ultimately problematic. Receding from this approach, we opted for the simpler solution – disabling the systemd-resolvd service. With this adjustment, CoreDNS successfully launched, restoring proper DNS resolution within the cluster.

**The Name Game: Addressing Helm Manifestation Challenges**

Throughout this journey, I had successfully installed resources manually into the cluster's sandbox account from my machine. However, replicating this process within the cdk Helm manifests presented a new obstacle. Our resource names, exceeding the 64-character limit imposed by Helm, resulted in installation failures. To circumvent this limitation, manual naming of the releases became necessary. While this addressed the immediate issue, the hardcoded names posed another challenge – the deployments lacked idempotence, meaning they couldn't be reliably redeployed in the same state. This necessitated further refinements – once the cleanup process is complete, the release names will be dynamically generated based on deployment IDs.

**A Temporary Setback and a Glimmer of Hope**

Yet another hurdle emerged when the Helm installation encountered a 503 service unavailable error while attempting to download binaries from the NVIDIA website. This presented a significant challenge, as the cdk Helm manifests lacked the capability to handle authentication, a requirement for downloading NVIDIA binaries.

Frustration mounting, I resorted to an unconventional approach: destroying the cluster and forcing a complete reinstallation. Surprisingly, this unorthodox method proved successful – the installation completed without errors, and the desired resources, including the gpu-operator, were present with GPU time slicing enabled!

However, the saga wasn't quite over. The base image we utilized wasn't readily available in the newly migrated Solaria AWS accounts, and publishing the images would require significant effort. Consequently, a collaborative plan with the GDS team is being formulated to ensure image availability before merging all changes to the main codebase.

**A Testament to Collaboration and Innovation**

This arduous journey is a testament to the unwavering spirit of innovation and collaboration  within our team. By embracing challenges, employing creativity, and actively seeking assistance, we were able to overcome obstacles, unearth and rectify underlying issues, to achive our goal. To install the GPU time-slicing in our EKS cluster.


__Royalty-free stock image above from [Pexels](https://www.pexels.com/).__