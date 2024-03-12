---
layout: post
title:  "Infrastructure Management: From Chaos to Cloudformation to Confusion"
author: sal
categories: [ engineering, software, cloudformation, terraform ]
image: "assets/images/cfn.jpg"
featured: true
hidden: true
---
Our team decided to use Amazon's infrastructure-management tooling versus other available tooling a while back. We are now reconsidering the decision.

### Introduction

Our team -- a small group with self-managed infrastrucutre inside AWS -- began our DevOps journey in 2018. Tooling then was a lot less mature than it is now, and options were limited. What might now look like a tangled mess of tools now was essential, or as I like to call it: the Holy Trinity of CloudOps: Ansible, CloudFormation, and Helm. They each served a purpose, but formed a complex and error-prone ecosystem. Ansible, not designed for infrastructure provisioning the way we were using, felt clunky and unwieldy. The templating language was confusing, and often collided with Helm's templating language -- there were times where we were templating out the same file in two separate languages, in Helm and in Ansible. CloudFormation's reliance on YAML files meant sacrificing the clarity and maintainability offered by modern object-oriented programming languages. Pre-deploy object validation was near impossible, even in the heydey of Software development. We were still in relative dark ages.

Enter AWS CDK, a seemingly divine solution promising to unify our infrastructure management under the banner of familiar programming languages. We were captivated by the possibility of leveraging the power and maintainability of code to manage our AWS resources.

However, our initial euphoria began to fade as we encountered documentation shortcomings. The CDK documentation often assumes a profound understanding of CloudFormation, leaving crucial details regarding resource behavior unexplicated. This lack of clarity has led to unforeseen consequences, such as the unexpected deletion and recreation of entire node groups within EKS clusters due to seemingly innocuous name changes. These "footguns" have highlighted the potential pitfalls of relying solely on CDK for infrastructure management without a deeper understanding of the underlying CloudFormation constructs. And therein lies the crux: CDK is the same old cloudformation castle, dark and creaky, but with a fresh coat of paint and open-plan kitchen. Spooky ghosts sneaking glances at you from behind the paintings are only to be expected.

Additionally, CDK's stateless nature presents a significant challenge. Unlike tools like Terraform, CDK lacks the ability to track the actual state of deployed infrastructure. This lack of awareness makes it difficult to understand the impact of changes, potentially leading to unintended modifications or lengthy recovery processes from unforeseen errors. Some of our stack recoveries and deletions can take hours because cloudformation has no understanding of the state of the resources, quite a frustrating experience for us in the infrastrucutre team as small changes are quite lengthy to test and deploy. These limitations, coupled with the documentation gaps, have prompted us to re-evaluate our commitment to CDK.

### Evaluating Alternatives to AWS CDK

In search of an alternative to CDK's shortcomings, we gave explored various options. While Pulumi offered an intriguing prospect, its pricing structures didn't align with our needs. In the world of infrastructure management tools, widespread adoption plays a crucial role. Tools with larger user bases tend to benefit from better documentation, wider community support, and easier access to experienced engineers. Based on these considerations, Terraform has emerged as the most compelling contender due to its dominant market share within the Infrastructure as Code (IaC) landscape in recent times.

In addition, concerns have arisen in recent times regarding Amazon's commitment to CDK based on their use of Terraform in code examples on their own repos. If the AWS teams can't be bothered to put out examples in their group's infrastructure langauge, should we trust it? We suspect that Amazon's internal teams might not be fully satisfied with CDK, potentially leading to a future where its development and support diminishes or even ceases altogether. This potential obsolescence of CDK has necessacited exploring alternative options, such as Terraform, to ensure future-proof infrastructure management.

### Making the Decision: CDK vs. Terraform

Before committing to a potential shift from CDK to Terraform, our team will need to carefully evaluate several key factors. Understanding the learning curve associated with Terraform is crucial. Onboarding developers new to Terraform will require investment in training and familiarization with its syntax and concepts. We must also determine whether a gradual rollout, starting with new projects and migrating existing stacks incrementally, is feasible. This approach would allow for a controlled transition with minimal disruption.

Additionally, Terraform's pricing structure deserves thorough analysis. While Terraform itself is open-source and free to use, the associated cloud resources required for running it (e.g., S3 buckets for state storage) incur standard AWS charges. We need to assess the long-term sustainability of these costs within our budget.

Finally, community support for Terraform is a vital consideration. While CDK benefits from the backing of Amazon, Terraform boasts a significantly larger and more established community. This broader user base translates to a wealth of available documentation, tutorials, and forums, potentially offering more readily accessible assistance compared to CDK. However, it is important to acknowledge that CDK can still leverage the vast AWS developer community for support, albeit potentially to a lesser extent.

Ultimately, the decision to move from CDK also requires weighing the potential trade-offs. While Terraform offers state management, seamless import of existing resources, and a broader community, we must acknowledge the learning curve associated with adoption and the potential loss of integration with the broader AWS ecosystem that CDK enjoys.

We have not committed to our move away from the CDK world, but the murmurs of dissent are rising without our ragtag group of infrastructure engineers, and it might just reach a crescendo, and we will eventually migrate.

### Lessons Learned: Beyond the Toolset

Beyond the specifics of CDK and Terraform, this experience has highlighted the importance of exercising caution when relying solely on vendor-specific tools for critical infrastructure management. While free tools from large vendors can be tempting, the lack of robust financial commitment and service-level agreements (SLAs) introduces a degree of uncertainty regarding their long-term support and viability. There is quite a bit of value in prioritizing technological merit and established community support over convenience factors when choosing tools for managing essential infrastructure.