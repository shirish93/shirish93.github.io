---
layout: post
title:  "What's next for AI? My predictions for the next 10 years"
author: sal
categories: [ ai, llm, engineering]
featured: false
image: "assets/images/llm.jpg"
hidden: false
---
Explainable AI, optical AI, analog AI, and meta-learning. I predict the culmination of optimizing massive generative models will result generative AI being turned into a commodity, and these four areas will be the next frontiers of innovation in machine learning.

## Introduction

Machine learning and Artificial Intelligence (AI)  -- often used interchangeably[^1] -- have undeniably changed our world. From revolutionizing healthcare diagnostics to powering guided-driving cars, AI has weaved itself into the fabric of our lives. But even as AI applications proliferate, wan even more advanced future awaits us, driven by advancements in several key areas: Optical AI, Analog Computing, Meta-Learning, and Explainable AI. Each of these fields holds great potential in pushing the boundaries of what's possible and redefining the impact -- and meaning -- of what artificial intelligence even means.

[^1]: There is a long and contentious argument among academics about the meaning, and the differences between the meanings of the words. We'll skip all of that for the purpose of this essay.

My fascination with cutting-edge technologies began with Optical AI. A friend in Boston who works at a photo-electronics (photonics) company explained to me how they're creating hardware and software that are completely run a light. Imagine a transparent sheet of glass-like material integrated into everyday objects that instantly recognizes and classifies anything placed in front of it – a child's toy, a rare bird in flight, or even a medical anomaly. This is the captivating vision of Optical AI, where light itself performs complex computations, eliminating the need for power-hungry, and complex electronics. I was entranced by this vision of post-electronic world, and sought to understand other, similar technologies.

While the concept of light-based computation is captivating, current limitations include difficulty in implementing complex non-linear operations, which form the backbone of deep learning models. Advances in materials science and novel optical architectures are necessary to overcome these limitations. Challenges in integrating these systems with existing electronic infrastructure might be considerable to make them seamless for end usage.

Beyond speed and efficiency, Analog Computing offers a fundamentally different approach to processing information. By harnessing the continuous nature of physical phenomena like voltages and currents, or even physical movement[^2], analog systems promise unparalleled speed and energy efficiency. While noise and scalability pose challenges, the future lies in specializing these systems for specific tasks, maximizing their advantages. Imagine dedicated devices for real-time image processing, financial fraud detection, or scientific simulations – all operating with minimal power consumption and potentially surpassing the speed of conventional computers. Here is an [example](https://www.youtube.com/watch?v=_CwUuyN6NTE) of what the future might look like, with computers being mostly out of the picture in learning-inference process of machine learning.

[^2]: Mechanical computers have a surprisingly long history, specially their use in warfare. They were used for [guidance systems](https://en.wikipedia.org/wiki/Mark_I_Fire_Control_Computer) [mostly](https://en.wikipedia.org/wiki/Rangekeeper).

Despite the allure of speed and energy efficiency, noise and precision remain significant hurdles. Implementing robust error correction mechanisms and developing techniques for reliable control of analog signals are critical for ensuring the accuracy and reproducibility of computations. Scaling these systems to tackle large-scale problems while maintaining manageable complexity is another significant challenge.

But what if AI could not only process information but also learn how to learn itself? This is the essence of Meta-Learning. This captivating field aims to equip AI systems with the ability to adapt and improve with minimal data, similar to how humans learn new skills by building upon existing knowledge. This opens doors to tackling entirely new challenges and potentially accelerating AI's progress in fields where data is scarce or constantly evolving. However, it's crucial to remember that meta-learning doesn't seek to replicate human learning in its entirety; rather, it seeks to extract core principles that can enhance AI's own learning capabilities. Here's an early [paper](https://arxiv.org/abs/2306.11644) on what these meta-learning systems might look like.

It's also important to remember that while the ability to "learn to learn" holds immense promise, current algorithms still rely on significant human guidance in defining tasks and selecting appropriate learning strategies. Developing more autonomous and generalizable meta-learning approaches capable of adapting to diverse scenarios without extensive human intervention is a big hurdle. Plus, potential biases and errors in the training data used for meta-learning algorithms might be amplified, leading to unintended, potentially disastrous consequences. The old axiom of 'garbage in, garbage out' still applies, and with these dark-box systems, it's difficult to validate for every output within existing frameworks.

Finally, there's Explainable AI, addressing a critical concern – the opacity of current deep learning models. Often working as "black boxes," with no clear explanation of why a certain choice was made, these models deliver impressive results but leave us wondering "how" and "why." Explainable AI aims to [demystify](https://arxiv.org/abs/2309.01029 "A survey paper for explainable AI research") these processes, making such models transparent, interpretable, and ultimately, more trustworthy. This would engender trust in AI-driven decisions and unlock further innovation by allowing us to understand the internal workings of these systems

Despite that, while providing explanations for AI decisions is crucial, understanding what constitutes a "good" explanation and how to translate complex machine learning processes into human-understandable terms remains a challenge. Ensuring that explanations are not misleading or easily manipulated is a whole different ball game that needs careful design and evaluation of explainability methods.

As we stand at the edge of these advancements, it's difficult to predict with certainty the precise direction we're heading towards. However, by peering through the lens of these cutting-edge fields, we can envision a world brimming with possibilities:

Imagine schools powered by Explainable AI, transforming learning by making complex concepts more accessible and fostering a deeper understanding of how students learn. Personalized teaching plans could be tailored to individual needs, enabling students to learn at their own pace and grasp even the most challenging subjects.

Or a healthcare system revolutionized by Optical AI and meta-learning, leading to real-time diagnostics at point of care and personalized treatment plans informed by well-trained model that has stands on the shoulder of all human knowledge and continuously adapts to new medical discoveries. This could pave the way for earlier interventions, improved efficacy, and better patient outcomes.

These are just a few visions of the potential of these converging fields. Navigating this future responsibly requires careful consideration of ethical implications. It's important to keep in mind the equitable access to these advancements, mitigate potential biases, and safeguard against misuse. Transparency, collaboration, and responsible development are a must to harnessing these technologies if we want to ensure a fair and democratic future.

__<a href="https://www.freepik.com/free-vector/robotic-process-automation-illustration_21743709.htm#fromView=search&page=1&position=28&uuid=14852b8d-0772-4624-97fc-6cf3a5b513be">Image by freepik</a>.__