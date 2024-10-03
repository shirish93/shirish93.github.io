---
layout: post
title:  "What's next for AI? My predictions for the next 10 years"
author: shirish
categories: [ ai, llm, engineering]
featured: false
image: "assets/images/llm.jpg"
hidden: false
---
Explainable AI, optical AI, analog AI, and meta-learning. I predict the culmination of optimizing massive generative models will result generative AI being turned into a commodity, and these four areas will be the next frontiers of innovation in machine learning.

## Introduction

Machine learning and Artificial Intelligence (AI)  -- often used interchangeably[^1] -- have undeniably changed the world. From revolutionizing healthcare diagnostics to powering supervised-driving cars, AI is a part of our lives. But even as such applications proliferate, an even more advanced future awaits us. I believe it will be driven by advancements in these areas: Optical AI, Analog Computing, Meta-Learning, and Explainable AI. Each of these fields holds great potential in pushing the boundaries of what's possible and redefining the impact -- and meaning -- of what artificial intelligence even means.

[^1]: There is a long and contentious argument among academics about the meaning, and the differences between the meanings of the words. We'll skip all of that for the purpose of this essay.

My fascination with cutting-edge technologies began with Optical AI. A friend in Boston who works at a photo-electronics (photonics) company explained to me how they're creating hardware and software that runs completely on light (instead of electricity). Imagine a transparent sheet of glass-like material integrated into everyday objects that instantly recognizes and classifies anything placed in front of it – a child's toy, a rare bird in flight, or even a medical anomaly. This is the promise of Optical AI, where light itself performs complex computations, eliminating the need for power-hungry and complex electronics. The vision was intoxicating. I wondered what other similar technologies might be on the horizon.

While the concept of light-based computation is captivating, current limitations include difficulty in implementing complex non-linear operations, which deep learning models depend on. Advances in materials science and novel optical architectures are needed to overcome these limitations. Challenges in integrating these systems with existing electronic infrastructure might be considerable to make them seamless for end usage.

Beyond speed and efficiency, Analog Computing is a fundamentally different approach to processing information. By using the continuous nature of physical processes like voltages and currents, or even physical movement[^2], analog machines promise great speed and energy efficiency. Noise and scalability are currently big challenges, but progress is being made in specializing them systems for specific tasks, optimizing their gains. Imagine dedicated devices for real-time image processing, financial fraud detection, or scientific simulations! And they all operate with minimal power consumption. Soon, they could surpass the speed of general-purpose digital computers too!. Here is an [example](https://www.youtube.com/watch?v=_CwUuyN6NTE) of what the future might look like.

[^2]: Mechanical computers have a surprisingly long history, specially their use in warfare. They were used for [guidance systems](https://en.wikipedia.org/wiki/Mark_I_Fire_Control_Computer) [mostly](https://en.wikipedia.org/wiki/Rangekeeper).

Despite thd speed and energy efficiency, noise and precision are issues to be solved for analog computers. Good error correction algorithms and precise and reliable control of analog signals are still being developed. That is to ensure that the computations are accurate and reproducible. Scaling these classes of machines to solve large scale problems while not letting the complexity get out of hand is yet another opportunity to improve on.

But what if these models could not only make inferences but learn how to learn itself? This is the idea behind Meta-Learning. This field aims to give advanced models the ability to adapt and improve with minimal data. The hope is to get the process to reflect how humans learn new skills by building upon existing knowledge. This would open doors to tackling entirely new challenges and accelerating genAI's progress in fields where data is scarce or constantly evolving. However, it's important to note that meta-learning doesn't seek to replicate human learning in its entirety. Rather, the aim is to extract core principles that can improve the model's own learning abilities. Here's an early [paper](https://arxiv.org/abs/2306.11644) on what these meta-learning systems might look like.

The ability to "learn to learn" holds incredible promise. Rather unfortunately, current algorithms still rely on human guidance in defining tasks and selecting the right learning strategies. Developing autonomous and generalizable meta-learning approaches able to adapt to diverse scenarios without human intervention is a big hurdle. Plus, biases and errors in the training data used for meta-learning algorithms could be amplified. That would lead to unintended, potentially disastrous consequences. The old axiom of 'garbage in, garbage out' still applies, specially with these dark-box systems. It's difficult to validate for every output with the current technology.

For which, there's Explainable AI, addressing a critical concern – the opacity of current deep learning models. Often working as "black boxes," with no clear explanation of why a certain choice was made, these models deliver impressive results but leave us wondering "how" and "why." Explainable AI aims to [demystify](https://arxiv.org/abs/2309.01029 "A survey paper for explainable AI research") these processes. The aim is to make such models transparent, interpretable, and ultimately, more trustworthy. This would lead to trust in AI-driven decisions, and improve our models by letting us understand the internal workings of these systems

Providing explanations for AI decisions is important. Even more important is understanding what constitutes a "good" explanation. How we might translate the explanations into human-understandable terms is a challenge. We must ensuring that explanations are not misleading or easily manipulated. For that what we need is careful design and evaluation of explainability methods themselves.

As we stand at the edge of these advancements, it's difficult to predict where we'll go from here. These are just a few visions of the potential of these converging fields. Navigating to the future responsibly requires careful consideration of ethical implications. It's important to keep in mind the equitable access to these advancements, mitigate potential biases, and safeguard against misuse.

__<a href="https://www.freepik.com/free-vector/robotic-process-automation-illustration_21743709.htm#fromView=search&page=1&position=28&uuid=14852b8d-0772-4624-97fc-6cf3a5b513be">Image by freepik</a>.__