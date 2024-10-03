---
layout: post
title:  "The risk of production, customer-facing LLM's let lose"
author: shirish
categories: [ ai, llm, collaboration]
featured: false
hidden: false
image: "assets/images/stupid-robot.png"
---

Readers of technology-adjacent news might remember the recent case where a Canadian passenger, Jake Moffatt, sued Air Canada after its online chatbot misinformed him about bereavement fares, costing him hundreds of dollars? [Air Canada ended up losing the case](https://www.washingtonpost.com/travel/2024/02/18/air-canada-airline-chatbot-ruling/), and now must stand by the commitment made by its AI agents. This incident, a real-world example of the potential dangers of relying on untested and poorly implemented technology in critical situations, serves as a cautionary tale in the rapidly evolving landscape of generative AI and Large Language Models (LLMs). These powerful language models, capable of generating almost human-quality text and engaging in complex reasoning, hold great potential. However, the Air Canada example forces us to ask the critical question: can we truly trust LLMs in situations where accuracy, safety, and ethical considerations are of fundamental importance?

Moffatt's experience highlights the potential pitfalls of trusting information provided by chatbot. He relied on the airline's chatbot for critical information about bereavement fares, only to discover later that the provided information was inaccurate, leading to financial loss. This incident raises concerns about the inherent limitations of such AI-powered systems and the potential for misinformation, especially when dealing with sensitive topics and critical decisions.

To build trust in LLMs for critical applications, rigorous testing, transparency, and explainability mechanisms are important. In Moffatt's case, the lack of clear disclaimers or warnings about the chatbot's limitations contributed to his reliance on potentially inaccurate information. Additionally, ensuring transparency in the training data and decision-making processes of LLMs would allow for better understanding and identification of potential biases. Ultimately, responsible development and deployment of LLMs require a multi-pronged approach, encompassing technical solutions, ethical guidelines, and regulatory frameworks. As the Air Canada case shows us, the consequences of neglecting these steps can be significant, both for individuals and for the reputation of the technology itself.

When venturing into the technical depths of LLMs, teams should focus on considering specific questions regarding accuracy and safety to protect themselves from potential liability or loss.

__Metrics for LLM Performance__: Evaluating LLM performance in critical scenarios goes beyond traditional accuracy metrics. Task-specific measures like diagnostic accuracy in healthcare or legal document summarization precision become crucial. Additionally, assessing factual consistency and ensuring alignment with ethical guidelines is of foremost importance.

__Mitigating Risks__:  Addressing safety concerns demands a multifaceted approach. 
    1. Adversarial training can help LLMs identify and resist malicious inputs.
    2. Human-in-the-loop systems ensure human oversight and control over critical decisions. 
    3.Robust monitoring and auditing procedures are essential to detect and address potential biases or errors.

Generative AI and LLM's are constantly evolving, teams should focus on staying abreast of the latest advancements. New architectures, training methods, and evaluation metrics are emerging every week, shaping the capabilities and limitations of these models. Learning continuously, and adaptating to these new methods are essential for responsibly deploying LLM's for critical scenarios.

Technical considerations are interwoven with ethical and societal concerns. Striking a balance between maximizing LLM potential and safeguarding against risks requires a holistic approach that prioritizes trust and responsible development. While the focus often falls on AI tools, the human element remains central to critical decision-making. Teams should understand that the issue of AI is not a technical issue with technical solutions, but one that requires societal and communal problem-solving. They must consider the following human-oriented points.

__Collaboration and Communication__: Designing interfaces that facilitate clear communication and understanding of LLM outputs is essential. Operators and support agents must understand what's happening in their systems, and how problems might be ameliorated. Teams deploying and managing the applications must work tightly together, with transparency, to have a realistic and accurate understanding of the strengths and weaknesses of the deployed systems.

__Human Oversight and Control__: While LLMs provide interesting observation on underlying data and support, the ultimate responsibility for critical decisions rests with humans. Mechanisms for human oversight and control must be clearly defined and implemented to ensure accountability and ethical decision-making. "It wasn't our fault, the AI did it" is NEVER the answer to customer problems, or regulator's concerns.

__Building Trust and Confidence__: Ultimately, trust in LLMs for critical scenarios hinges on transparency, explainability, and demonstrably ethical development and deployment. By engaging in open conversation internally and with customers, and establishing clear ethical guidelines, we can generate trust and harness the potential of LLMs safely.

We must remind ourselves of all the times technology has failed companies and their customers, causing not just great financial losses, but loss of human health and life too. The allure of technology can sometimes blind one from its potential pitfalls. History offers important lessons in the dangers of overreliance on untested or poorly implemented systems. Let's explore two cautionary tales:

__The Therac-25 Tragedy__: This radiation therapy machine malfunction led to patient deaths due to software flaws and inadequate testing. It serves as a stark reminder of the critical need for rigorous testing, quality assurance, and robust programming in life-or-death situations. More details [here](https://en.wikipedia.org/wiki/Therac-25).

__The Airline AI Fiasco__: As mentioned earlier, an airline's attempt to implement an AI chatbot resulted in disastrous outcomes, highlighting the importance of responsible development, considering ethical implications, and avoiding hype-driven decisions.

Learning from these past mistakes is essential to navigate the LLM landscape responsibly and avoid repeating tragic outcomes. While companies can protect themselves using above means, we must also create a robust safeguard as an industry, and as society. For that we should consider formalizing the following LLM deployment strategy and mindset.

1. Prioritize Human-in-the-Loop Systems: LLMs make it easy to analyze data, but critical decisions should ultimately involve human judgment and oversight. Designing systems that facilitate clear communication and understanding between humans and LLMs should be of the highest priority.

2. Create an Ethical Development Culture: Just like engineering ethics is an important part of 'physical' engineering education and practice, it should be true for AI engineering as well. From design to deployment, ethical considerations must be integrated throughout the LLM development process. This includes addressing potential biases, ensuring data privacy, and developing clear ethical guidelines for responsible use. Our actions could have negative consequences for the targeted customers or society in general, and we should be mindful of the implications.

3. Invest in Explainable AI Research: Demystifying LLM decision-making processes is key to building trust and facilitating human oversight. Continued research on explainable AI and interpretable models is essential for responsible deployment.

4. Strengthen Regulatory Frameworks: Clear regulations addressing data privacy, algorithmic bias, and accountability are necessary to guide ethical development and deployment of LLMs, especially in sensitive domains like healthcare, finance, and national security.

5. Promote Open Conversation and Collaboration: A multi-stakeholder approach involving technologists, ethicists, policymakers, and the public is vital for shaping the future of LLMs responsibly. Open dialogue and honest communication can help identify potential risks, develop ethical guidelines, and ensure their use benefits society.

### The threat post by responsibly-deployed genAI

We have discussed the potential risks and downsides of improperly-deployed LLM models until this point. But what, if any, might be threats posed by deployment of LLM's in geenral from a technical perspective, and how might we be able to address those. We will discuss two points that are of some concern.

1. The Saturation of LLM-Generated Content: As LLM's advance, their ability to create realistic and persuasive content increases. This raises concerns about the potential saturation of online spaces with synthetically generated text, images, and audio. This phenomenon could pose challenges for discerning genuine information from fabricated content, and potentially impact critical areas like news media, creative industries, and even personal interactions. [Dead internet theory](https://en.wikipedia.org/wiki/Dead_Internet_theory) might become a reality!

2. Measuring Human Abilities in the LLM Age: LLMs possess the ability to mimic human language and creative outputs, potentially impacting how we assess critical skills like thinking, writing, and critical analysis. In an education system increasingly incorporating LLMs, concerns arise about the ability to distinguish genuine understanding from machine-generated outputs, posing challenges for evaluating and nurturing genuine human abilities. The value of genuine human interactions might go down, and thus the perceived need of cooperating with other humans, as people get more addicted to spending time with and socializing with their idealized version of friends and partners that are LLM-generated.

Here are some ways we mimght nagivate these challenges?

__Developing Detection Techniques__ : Advancements in AI and machine learning can be leveraged to create tools capable of identifying and flagging LLM-generated content.
__Promoting Media Literacy__: Educating the public on the capabilities and limitations of LLMs is important to encourage critical thinking and discernment skills in navigating online information.
__Redefining Assessment Strategies__: Adapting evaluation methods in education and other fields to account for the presence of LLMs is essential to ensure accurate assessment of genuine human skills and understanding.

### Conclusion: Embracing the Future with Responsibility

LLMs stand at the edge of revolutionizing multiple fields, offering potential for progress that's been unreachable until now. However, wielding this power requires acknowledging and addressing the inherent limitations and potential risks. By prioritizing ethical considerations, encourages human-centered development, and continuously adapting to the evolving technical and legal landscape, we can unlock the potential of LLMs.

__Image by <a href="https://www.freepik.com/free-vector/flat-robot-collection-with-different-poses_1576714.htm#query=stupid%20robot&position=3&from_view=keyword&track=ais&uuid=006c7d73-d299-4adf-9d6f-5e92697a3a9a">Freepik</a>__