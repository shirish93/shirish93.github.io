---
layout: post
title:  "The tasks LLM's are good at, and the tasks they're sh**t at: a personal review"
author: shirish
categories: [ ai, llm, collaboration]
featured: false
hidden: false
image: "assets/images/stupid-robot.png"
---

Here's the story of how I became an LLM convert. LLM's can be quite good at some tasks, and awful at others, and being able to create a clear distinction between the two modes is critical. This essay discusses the aras of opportunities of LLM's for personal use, and how we might grow as employees using LLM's.

## The Rise of Personal LLMs: A Shift in Human-Machine Collaboration

The sterile fluorescent lights of the lecture hall buzzed overhead, casting a studious glow on the sea of students hunched over laptops. We were delving into the intricacies of engineering leadership, deciphering the philosophies of industry titans and academics alike. My mind hummed with its own nascent theory, a unique perspective shaped by my experiences, yet I struggled to navigate the labyrinth of frameworks and competing ideas. How could I structure my thoughts? Where would I begin presenting my argument?

Enter Gemini, the LLM, my unlikely partner in this journey of intellectual exploration. Initially skeptical, I tentatively fed it my jumbled collection of vague connections and emerging questions. What followed was impressive. Gemini didn't simply offer regurgitated facts or predefined models - it became a sounding board, reflecting my ideas back in a clearer, more structured light. It prodded me with questions I hadn't considered, revealing blind spots and pushing me to explore deeper into nuances I'd deemed insignificant. In doing so, it acted as a catalyst, forcing me to articulate my thoughts with precision, identify key concepts, and map out a compelling narrative.

The process wasn't seamless. There were moments of frustration, grappling with Gemini's limitations in understanding the human nuances of leadership or the complexities of my specific arguments. However, it forced me to refine my own understanding, rephrase my thoughts with clarity, and  sharpen the core tenets of my philosophy. With each iteration, my essay evolved, not just in structure but also in depth and conviction[^1].

[^1]: [Here]({% post_url 2024-01-01-leadership-styles %}) is the final essay that came off the collaboration.

The final paper bore little resemblance to my initial, fragmented thoughts. It presented a cogent, well-defined theory, engaging with established frameworks and offering a distinct perspective. The credit doesn't solely lie with me; Gemini played an important role, acting as a thought-provoking companion, and a relentless questioner. This experience proved to me the potential of LLMs as tools for knowledge exploration, that could allow us to us to articulate our unique ideas with clarity and confidence.

## Personal LLMs: Bridging the Knowledge Gap

Technical skills allow people to automate tasks, but require significant time and expertise to develop. Web searches offer readily available information, but lack interactivity and personalized context. Online courses and textbooks, while important for gaining knowledge, come with high investment costs and limited accessibility.

Personal LLMs are emerging as a bridge, addressing these limitations. Unlike technical automation requiring programming skills, LLMs empower individuals with basic computer literacy to automate tedious tasks without programming knowledge. They surpass simple web searches by understanding user context and offering interactive, personalized responses. Compared to online courses, LLMs provide a cost-effective "try-before-you-buy" experience, enabling individuals to sample the benefits of guided learning before committing to larger investments. In essence, LLMs act as intelligent assistants, simplifying technical tasks and guiding individuals towards greater learning opportunities. Or an easy solution, depending on their needs.

These LLMs don't operate in isolation. Powerful tools like Hugging Face's Transformers library serve as the bridge, allowing developers to easily integrate these programs into other applications. Imagine wanting to add an LLM-powered writing assistant to your word processor - with Transformers, it's just a few lines of code away!

## Stepping Out of the Shadows: Comparing LLMs to Existing Solutions

While LLMs hold immense potential, understanding their relative strengths and weaknesses compared to existing solutions is vital. Let's dive into a three-way comparison:

**Automation of Tedious Tasks**

* Traditional methods: Scripting languages like Python require technical expertise and time investment. Online tutorials offer guidance, but often lack personalized approaches.
* LLMs: Powerful tools like Copilot can automate tasks through simple instructions, democratizing automation for less technical individuals. However, relying solely on LLMs might lead to a less robust understanding of the underlying processes.
* Human experts: Offer tailored, efficient solutions but come at a higher cost and may not be readily available.
* Verdict: LLMs provide an accessible entry point to automation, but combining them with human expertise can lead to optimal results.

**Information Retrieval and Navigation**

* Traditional methods: Search engines like Google offer vast information, but require precise queries and often lead to information overload. Specialized databases provide targeted information, but require prior knowledge of their structure.
* LLMs: Can understand user context and intent, offering personalized search results and summarizing complex information. However, their factual accuracy can be uneven, and navigating large datasets might still require human intervention.
* Human experts: Offer nuanced understanding of information and can guide users through complex topics, but their availability and cost can be limiting factors.
* Verdict: LLMs excel at navigating information based on user context, but combining them with human expertise ensures accuracy and deeper understanding.

**Guidance and Coaching**

* Traditional methods: Online courses and books offer structured learning, but lack personalized feedback and adaptability. Human mentors provide individualized guidance, but are often expensive and limited in availability.
* LLMs: Can act as personal coaches, adapting their guidance based on user progress and offering feedback. However, they lack the emotional intelligence and real-world experience of human mentors.
* Human experts: Offer holistic guidance, emotional support, and real-world context, but their accessibility can be limited.
* Verdict: LLMs provide a scalable and accessible form of guidance, but combining them with human mentors delivers a more comprehensive and supportive learning experience.

From early grammar checkers like Dr.Gram to the open-source spirit of NLTK, we see a consistent theme: AI empowering individuals and nurturing innovation in the realm of language. LLMs represent the next chapter in this story, holding the potential to revolutionize not just writing, but how we interact with information, learn new skills, and navigate our daily lives.

However, responsible development demands acknowledging and addressing potential threats. These extend beyond simple comparisons of strengths and weaknesses, encompassing broader societal concerns like:

* **Bias and Fairness:** LLMs trained on biased data can perpetuate and amplify existing societal inequalities. Imagine an LLM used for hiring decisions unintentionally favoring resumes with specific keywords reflecting unconscious biases. Mitigating this requires diverse training data, responsible development practices, and ongoing monitoring.

* **Misinformation and Disinformation:** LLM-generated content, with its inherent fluency, could fuel the spread of fake news and propaganda. Imagine an LLM creating articles indistinguishable from legitimate news sources, manipulating public opinion. Combating this necessitates robust fact-checking mechanisms, user education on identifying AI-generated content, and promoting algorithmic transparency.

* **Job Displacement:** Automation through LLMs could disrupt certain industries, leading to job losses. Imagine an LLM automating tasks currently performed by customer service representatives or data entry clerks. Mitigating this requires proactive workforce reskilling initiatives, social safety nets, and exploring the potential for LLMs to create new job opportunities.

* **Privacy and Security:** LLMs trained on personal data raise privacy concerns. Imagine an LLM used in customer service unknowingly revealing sensitive information about user interactions. Protecting privacy requires strong data anonymization techniques, clear user consent procedures, and robust security measures.

## Addressing Potential Threats and Charting a Course for Responsible Development

While unlikely, considering worst-case scenarios helps guide responsible development. Imagine an LLM used for malicious purposes, manipulating public opinion or even creating deepfakes indistinguishable from reality. Amelioration involves establishing ethical guidelines for LLM development, leading to international cooperation, and promoting public awareness of these potential risks.

Remember, addressing these threats is a shared responsibility. Industry, governments, academia, and users all have a role to play in ensuring LLMs are developed and used ethically and responsibly. Open dialogue, continuous evaluation, and proactive mitigation strategies are essential for harnessing the immense potential of LLMs while safeguarding society from potential harms.

Here, we list specific threats and explore potential solutions:

**Bias and Fairness:**

1. **Diverse Training Data:**  LLMs must be trained on massive datasets that reflect the rich tapestry of human language and experiences. This necessitates actively combating data bias by incorporating underrepresented voices and perspectives.

2. **Algorithmic Auditing:**  Regular audits should be conducted to identify and mitigate potential biases within LLM algorithms. Transparency in model development and evaluation is important for building trust.

3. **Human Oversight:**  LLMs should be used in conjunction with human oversight, particularly when dealing with sensitive tasks like hiring or loan approvals. Human judgment can help mitigate bias and ensure fair outcomes.

**Misinformation and Disinformation:**

1. **Fact-Checking Mechanisms:**  Robust fact-checking systems should be implemented to verify the accuracy of LLM-generated content. Joint efforts between LLM developers and fact-checking organizations are essential.

2. **User Education:**  Educational campaigns can equip users with the critical thinking skills necessary to evaluate the credibility of information encountered online, particularly content generated by LLMs.

3. **Algorithmic Transparency:**  Understanding how LLMs generate text is critical for identifying potential biases and misinformation. Efforts to promote algorithmic transparency will empower users to make informed judgments about the information they consume.

**Job Displacement:**

1. **Reskilling Initiatives:**  Proactive workforce reskilling programs can equip individuals with the skills necessary to thrive in an LLM-driven economy. This may involve training programs focused on data analysis, critical thinking, and human-computer cooperation.

2. **Social Safety Nets:**  Measures should be implemented to support individuals who might be displaced by LLM automation. This could include unemployment benefits, retraining programs, and social safety nets.

3. **Exploring New Opportunities:**  LLMs have the potential to create new job opportunities in fields like LLM development, data analysis, and human-AI collaboration. Identifying and capitalizing on these opportunities is important.

**Privacy and Security:**

1. **Data Anonymization:**  Techniques like data anonymization can be employed to protect user privacy while still enabling LLMs to learn from vast datasets.

2. **User Consent:**  Clear and informed user consent should be obtained before collecting and using personal data for LLM training. Transparency about data usage is essential. 

3. **Robust Security Measures:**  Robust security measures must be implemented to safeguard user data from unauthorized access or breaches. This includes regular security audits and updates.


### **Technological Advancements:**

Imagine LLMs as accessible as smartphones, their power harnessed through intuitive interfaces and user-friendly tools. Advancements in model scalability, making LLMs like chatGPT or Gemini available to the average person are not distant dreams. However, separating genuine progress from overinflated promises within the LLM landscape is important. We must remain grounded in rigorous testing, focusing on objective metrics and real-world impact. Open-sourcing models will allow users to separate genuine breakthroughs from fleeting trends.

__Image by <a href="https://www.freepik.com/free-vector/flat-robot-collection-with-different-poses_1576714.htm#query=stupid%20robot&position=3&from_view=keyword&track=ais&uuid=006c7d73-d299-4adf-9d6f-5e92697a3a9a">Freepik</a>__