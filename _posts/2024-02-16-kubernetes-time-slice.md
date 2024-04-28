---
layout: post
title:  "A Kubernetes Odyssey in setting up the NVIDIA GPU drivers and time-slicing"
author: shirish
categories: [ infrastructure, data-science, kubernetes]
featured: false
hidden: false
image: "assets/images/gpu.jpg"
---

This essay narrates an unexpected adventure in implementing GPU time slicing on our EKS kubernetes cluster. What began as a seemingly straightforward task – installing the gpu-operator – turned into a long-lasting exploration that uncovered challenges, helped us refine our processes, and ultimately led to substantial benefits om our infrastructure.

**The Initial Hurdle: A Charting Error**

My goal was simple: the ticket said 'install the nvidia gpu operator and the time slicing addon-on into our EKS GPU cluster'. I headed to the NVIDIA official website, and they had instructions for exactly my requirements. How fortuitous, I thought, it'd be a done in a day or two.

Armed with clear instructions from the NVIDIA website, I embarked on the mission, starting with the seemingly simple task of installing the gpu-operator resource. Following the provided Helm installation steps meticulously, I encountered the first roadblock – a failed installation.  Digging deeper, I discovered the culprit: the Helm chart contained 20 resources with Docker repository references pointing to NVIDIA's registry.  These references needed modification to work with Liberty Mutual's Docker proxy.  This seemingly minor adjustment, was just the first obstacle on this uncharted course.

**Deeper into the Helm Chart: Incompatibility and Inconsistency**

Undeterred, I examined the Helm chart further. The binaries it attempted to install were UBI binaries – a format incompatible with our Amazon Linux-based nodes.  After modifying the binaries for compatibility, I was surprised to find the issue persist.  Puzzled, I turned to the Kubernetes event logs, uncovering the root cause: the minimum required glibc version for several resources was 2.27, exceeding the 2.26 version present in our Amazon Linux nodes.

**The Glibc Maze: Seeking Alternative Paths**

To workaround the AMI limitation, I explored online solutions, many suggested "alternative" glibc installations or "shimmed" versions.  Shimming a system library is a potentially disruptive change that we would need to maintain for ever, so I opted for a different path: transitioning our base AMI to a newer Amazon Linux version with the requisite glibc update.

Navigating the world of AMIs presented its own challenges. Liberty-approved options were limited.  Fortunately, serendipity and my manager's invaluable guidance led me to the GDS CAAS (or internal container-as-a-service) team's solution.  A solution engineer in our group connected me with one of the engineers from CAAS. I discovered from the team that they were using Ubuntu base images, a solution that bypassed similar glibc-related issues they had encountered.  I also found out that Liberty IT's plans for a future migration away from Amazon Linux towards Ubuntu. What a fortuitous happenstance, we were taking a forward-looking path just like that! We would embrace Ubuntu, it was decided, paving the way for  GPU time slicing in the cluster.

**The Ubuntu Migration: Challenges and a Synchronized Upgrade**

Migrating to Ubuntu base images presented a fresh set of hurdles.  Our cloud-init scripts, customized for Amazon Linux, required a complete overhaul to manage GPU driver setup for Ubuntu.  Additionally, the  architectural differences between the two operating systems needed close tinkering around installing the right versions of libraries, the gpu driver and library compatibility, and so forth.  While navigating these complexities alongside Nick from CAAS, we found that their team was actively developing Kubernetes 1.24 Ubuntu AMIs (we were a couple of versions behind). I saw an opportunity, and proposed a synchronized upgrade to both the operating system and Kubernetes version, capitalizing on the existing momentum for change. Considering the end-of-life status of our current Kubernetes version (v1.23), the upgrade offered better security and stability. I forged ahead with the Ubuntu image specifically designed for Kubernetes v1.24. At this point, I wasn't thinking about the gpu operator anymore, we needed an EKS version upgrade, and an AMI upgrade to a different architecture. They were both pretty large changes.

**The Labyrinth of Drivers and Libraries: A Trial by Fire**

The next step involved installing the requisite GPU drivers and libraries onto the Ubuntu image via the cloud-init script.  However, obtaining clear and concise instructions proved to be a time-consuming and frustrating. After several painful and long days that invovled relentless research and pleas for assistance to infrastructure channels on Slack, I made some progress. The drivers appered to be installing. Finally! This victory, however, was short-lived.

**Unearthing a Hidden Bug and Unforeseen Consequences**

While installing the final driver, a critical issue appeared – our machine nodes were running out of disk space. After running SSH access into the nodes (which itself was quite a process as we didn't have the correct permissions to allow ssh access), I discovered the missing piece: Liberty's SSM access wasn't enabled by default within our base infrastructure code.  Consulting our internal knowledge base (Confluence), I identified the necessary IAM policies, which I manually attached to the relevant node roles.  Access finally granted, I examined the nodes, only to discover that the driver installation had consumed the entirety of the allocated 20GB root drive space. However, our infrastructure code supposedly configured a 100GB volume to be mounted on the root directory – so where was the remaining space disappearing to?

This situation ultimately led to the unearthing of a latent bug within our infrastructure code. The 100GB volume was never actually being mounted to the intended mountpoint, effectively rendering it unusable for all clusters utilizing the code. This serendipitous discovery presented a new challenge: identifying the correct mountpoint. After scouring AWS documentation and enduring a few initial missteps, I located the appropriate mountpoint. However, a further hurdle arose – the primary volume's mountpoint wasn't a parametrized variable within the code. To rectify this, I proposed a pull request in the internal eks-cdk library, successfully introducing the missing parameter and providing the correct value. Finally, the drivers installed successfully!

**Network Disruption: A Port Conflict and a Community Rescue**

While the cluster successfully formed and the nodes functioned, an error appeared in the cluster Netowrk gateways, indicating network disruptions. Further investigation, aided by guidance from the Slack community, revealed a conflict: CoreDNS, responsible for DNS resolution within the cluster, was unable to start due to systemd-resolvd, a service managing DNS resolution on Ubuntu, occupying the same port (53). This meant CoreDNS could never launch, crippling intra-cluster communication.

After consulting with my lead, two potential solutions emerged: disabling the daemon or altering CoreDNS to utilize a different port. While disabling the daemon seemed less complex, I initially attempted modifying the CoreDNS port. This endeavor, however, proved time-consuming and ultimately problematic. Receding from this approach, we opted for the simpler solution – disabling the systemd-resolvd service. With this adjustment, CoreDNS successfully launched, restoring proper DNS resolution within the cluster.

**The Name Game: Addressing Helm Manifestation Challenges**

Throughout this journey, I had successfully installed resources manually into the cluster's sandbox account from my machine. However, replicating this process within the cdk Helm manifests presented a new obstacle. Our resource names, exceeding the 64-character limit imposed by Helm, resulted in installation failures. To circumvent this limitation, manual naming of the releases became necessary. While this addressed the immediate issue, the hardcoded names posed another challenge – the deployments lacked idempotence, meaning they couldn't be reliably redeployed in the same state. This necessitated further refinements – once the cleanup process is complete, the release names would be dynamically generated based on deployment IDs.

**A Temporary Setback and a Glimmer of Hope**

Yet another hurdle emerged when the Helm installation encountered a 503 service unavailable error while attempting to download binaries from the NVIDIA website. This presented a significant challenge, as the cdk Helm manifests lacked the capability to handle authentication, a requirement for downloading NVIDIA binaries.

Frustration mounting, I resorted to an unconventional approach: destroying the cluster and forcing a complete reinstallation. Surprisingly, this unorthodox method proved successful – the installation completed without errors, and the desired resources, including the gpu-operator, were present with GPU time slicing enabled!

However, the saga wasn't quite over. The base image we utilized wasn't readily available in the newly migrated Solaria AWS accounts, and publishing the images would require significant effort. Consequently, a collaborative plan with the GDS team is being formulated to ensure image availability before merging all changes to the main codebase. A year later after this initiative, and we are still not yet at Prod deployment readiness, though to be fair we haven't had the need to deploy to prod immediately.

**A Testament to Collaboration and Innovation**

This incredible journey is a testament to the unwavering spirit of relentless collaboration  within our team. We embraced challenges, employed creative ways out of difficult holes, and actively sought assistance from other teams, and were able to overcome obstacles. We unearthed and rectifed underlying issues while doing all of that. Just to install the GPU time-slicing in our EKS cluster. Which we later ended up bit completely requiring as our needs didn't quite fit what was on the offer, but that's a tale for a different day!


__Photo by 洋榤 郭: https://www.pexels.com/photo/black-and-red-computer-motherboard-2399840/.__