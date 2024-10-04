---
layout: post
title:  "Infrastructure management: from chaos to Cloudformation CDK to confusion"
author: shirish
categories: [ engineering, software, cloudformation, terraform]
image: "assets/images/cfn.jpg"
---
Our team decided to use Amazon's infrastructure-management tooling versus other available tooling a while back. We are now reconsidering the decision.

### Introduction

Our team -- a small group with self-managed infrastructure within our AWS account -- began our DevOps journey in 2018. Tooling then was less mature than it is now, the options were limited. A combination that might now seem like a mishmash of tools now was, as I like to call it, the Holy Trinity of CloudOps. Ansible, CloudFormation, and Helm. They formed a complex and sometimes frustrating ecosystem. Ansible wasn't designed for infrastructure provisioning the way we were using, it felt unwieldy. The templating language was confusing, and often collided with Helm's templating language. There were times where we were templating out the same file in two separate languages, in Helm and in Ansible. CloudFormation's uses YAML files, it lacks the ease of use and maintainability of object-oriented languages. Pre-deploy object validation was near impossible (it was all yaml files after all). We were still in relative dark ages.

Enter AWS CDK. It felt like a gift from the gods. It promised to unify our infrastructure management with a familiar programming language -- Typescript. We were excited by the possibility of using code to manage our AWS resources.

Our initial eagerness faded as we encountered documentation shortcomings. The CDK documentation often assumes a deep understanding of CloudFormation, leaving out details regarding resource behavior. This lack of clarity has led to frustrating discoveries, such as the unexpected deletion and recreation of node groups within EKS clusters due to name changes. These "footguns" show the risks of relying too much on CDK for infrastructure management. Teams need a deeper understanding of the underlying CloudFormation constructs. And therein lies the crux. CDK is the same old cloudformation castle, dark and creaky, with a fresh coat of paint. Spooky ghosts sneaking glances at you from behind the paintings are only to be expected.

CDK's stateless nature brings another class of challenges. Unlike tools like Terraform, CDK lacks the ability to track the actual state of deployed infrastructure. This lack of awareness makes it difficult to understand the impact of changes. It has led to unintended modifications and lengthy recovery processes from unforeseen errors. Some of our stack recoveries and deletions can take hours because cloudformation has no understanding of the state of the resources. It's quite frustrating for us in the infrastructure squad, small changes take forever to test and deploy. In recent times, we have begun looking for replacements for CDK.

We have also started doubting Amazon's commitment to CDK. Some AWS teams have used Terraform in code examples in their own repos. If the AWS teams can't be bothered to put out examples in their group's infrastructure language, should we trust it? We fear CDK doesn't have internal support and satisfaction anymore. We want to avoid a future where its development and support diminishes or even ceases altogether.

### Evaluating Alternatives to AWS CDK

We have explored multiple options to replace CDK. Pulumi offers an interesting option. Unfortunately, its pricing structure doesn't align with our needs. Widespread adoption is a basic metric we use to judge infrastructure management tools. Tools with more users generally have better documentation, wider community support, and easier access to support engineers. Terraform has emerged as a most serious contender to CDK based on those factors. Most infrastructure teams seem to be either on CDK, or on Terraform.

### Making the Decision: CDK vs. Terraform

Before committing to a potential shift from CDK to Terraform, our team will evaluate several key factors. Figuring out what Terraform's learning curve is like, is important. Onboarding developers new to Terraform will require training and familiarization. We're also figuring out how to do a gradual rollout with Terraform. The idea is to start new projects on Terraform, and migrate existing stacks incrementally. It will let us do a controlled transition with minimal disruptions.

Terraform's pricing structure will play an important role in our final decision. While Terraform open-source and free to use, the associated cloud resources required for running it (e.g., S3 buckets for state storage) incur standard AWS charges. We need to assess the long-term sustainability of these costs within our budget.

Community support for Terraform is what will make or break it for terraform. While CDK has Amazon's backing, Terraform has a significantly larger and more established community. This broader user base means more documentation, tutorials, and forums posts. But then, CDK still has the massive AWS developer community for support.

The decision to move from CDK needs weighing the potential trade-offs. Terraform offers state management, seamless import of existing resources, and a broader community. But there's a learning curve associated with new adoption. Then there's the potential loss of integration with the broader AWS ecosystem that CDK has.

We have not committed to our move away from the CDK world. When the murmurs of dissent reach a crescendo in our ragtag infrastructure squad, we might eventually migrate.

### Lessons Learned: Beyond the Toolset

This has reminded us that we need to be careful about choosing a vendor-specific tool for critical infrastructure management. Free tools from large vendors are tempting, but the lack of service-level agreements (SLAs) creates uncertainty around long-term support and viability. There is value in prioritizing technical merit and established community support over convenience when choosing software libraries.

__Royalty-free stock image above from [Pexels](https://www.pexels.com/).__