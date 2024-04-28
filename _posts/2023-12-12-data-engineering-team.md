---
layout: post
title:  "How our squad integrated data scientists and software engineers"
author: shirish
categories: [ engineering, leadership, teamwork ]
image: "assets/images/teamwork2.png"
featured: true
hidden: true
---

We learned an important lessons after integrating data scientists and software engineers into a unified team as we tested different team structures and planning regimen. This essay takes us through the journey of that discovery.

### Introduction
Every tech company grapples with the challenge of optimizing engineering resource allocation while maintaining a clear workflow and plan. This becomes particularly complex when data scientists are involved, as their needs don't align directly to those of traditional software engineers. In our team at Solaria Labs, we experimented a few structures before stabilizing on the final form of the team. I will walk you throw our journey of getting to the best configuration for team composition with engineers and data scientists in it. 

We initially adopted a structure where both data scientists and software engineers collaborated within the same squad, working on same Jira board and working as members of a combined squad. However, this initial approach, while well-intentioned, unearthed some unforeseen complexities.

The primary issue surfaced in the form of misaligned timelines and workflows between data scientists and software engineers. Data science projects inherently involve exploratory phases and require flexibility to iterate on models and analyze data. This requires a certain degree of fluidity in their work schedule. Conversely, software engineering projects typically adhere to a more structured approach with well-defined deadlines and milestones. This fundamental difference in workflow created inefficiencies within the squad structure. Engineers found themselves frequently pulled away from core tasks to address the immediate needs of data scientists, leading to a cycle of "flood and drought" in their workload. Periods of intense partnership with data scientists on specific projects would be followed by stretches with minimal direct engagement, creating an uneven distribution of work and a sense of inefficiency. The daily standups didn't appear to be useful for data science, because for long stretches their would be few updates worth talking about.

Initially, we underestimated the impact of this "seasonality" in the workload distribution. Our previous experience with smaller teams, where the cyclical nature of data science work was less pronounced, had not fully prepared us for the amplified issue with a larger team. A surge in infrastructure issues further complicated the situation. Engineers found themselves entangled in tasks not directly related to their core responsibilities, such as adding resources to the EKS (kubernetes) cluster used by data scientists or keeping it updated with the latest features. This additional burden made it difficult to assess the true effectiveness of the squad structure, delaying our decision to implement a different approach.

Despite the unforeseen challenges, the initial squad structure did offer some lessons. One positive outcome was the creation of stronger relationships between data scientists and engineers. Working closely within the same unit encouraged collaboration and knowledge sharing. Data scientists gained a deeper understanding of software development, while engineers developed a better appreciation for the everyday experimentations that data science did. This understanding paved the way for a more surgical approach to teamwork in the future.

Recognizing the challenges posed by the initial squad structure, we embarked on a comprehensive evaluation process to identify a more effective solution. This process involved several key steps:

1. Identifying the Bottlenecks: We analyzed work allocation patterns within the squad. This involved tracking time spent on various tasks and projects by both data scientists and engineers. The analysis revealed that a significant portion of the engineers' time was being devoted to tasks related to infrastructure management and supporting data scientists' immediate needs. These tasks, while necessary, were often not directly aligned with the engineers' core competencies and hindered their ability to focus on longer-term software development goals.

2. Aligning Work with Goals: We revisited our overall strategic goals and aligned them with the specific needs of both data science and engineering teams. This involved prioritizing core functionalities, making sure we were not working on projects that didn't align with vision, and ensuring our projects had the manpower needed.

3. Incubating Tewmwork Beyond Squads: We recognized the value of cooperation between data scientists and engineers, but needed a more structured approach that minimized disruptions to individual workflows. This led to the exploration of alternative models that helped collaboration while ensuring efficient task completion.

Through this thorough evaluation process, we identified the need for a more specialized team structure. This new approach involved dividing the engineering team into two distinct units:

1. Infrastructure Team: This team would focus solely on managing and maintaining the data science infrastructure, including the EKS kubernetes cluster and related technologies. This dedicated focus would allow them to develop deep expertise in these areas, ensuring optimal performance and scalability of the data science environment.
2. Data Science Enablement Team: This team would comprise engineers who would work closely with data scientists to understand their specific needs and provide technical support throughout the data science project lifecycle. This targeted joint effort would ensure that data scientists receive the necessary technical assistance without disrupting the engineers' focus on core software development tasks.

The implementation of this new structure required closely working with stakeholders such as data scientists, engineering leads, and representatives from the enterprise teams who relied on the data science function. Clear communication and coordination was important to ensure a smooth transition and effective workflow across the different teams.

The implementation of the specialized team structure yielded several positive outcomes, both immediate and long-term.

1. Enhanced Resource Allocation and Efficiency: Dividing the engineering team into specialized units facilitated a more efficient allocation of resources. The infrastructure team's dedicated focus on infrastructure management led to a significant reduction in the time engineers spent on these tasks, freeing them to focus on core software development efforts. The data science enablement team, in turn, provided targeted technical support to data scientists, allowing them to work more independently and efficiently. This clear separation of responsibilities streamlined the workflow and contributed to overall team productivity.

2. Deeper Teamwork and Knowledge Sharing: While the initial squad structure aimed to create a collaborative environment, the new approach alloweed for a more structured and focused form of work. The data science enablement team served as a bridge between data scientists and engineers, facilitating communication and knowledge sharing without disrupting individual workflows. Data scientists benefited from the engineers' expertise in software development, while engineers gained a deeper understanding of the data science process and the value it brings to the organization. This synergy fueled innovation and problem-solving across the teams.

3. Improved Project Turnaround Times: The streamlined workflow and efficient resource allocation contributed to a noticeable reduction in project turnaround times. Data scientists received timely and focused technical support, enabling them to progress through the exploration and development phases of their projects more efficiently. Additionally, software engineers were empowered to focus on long-term development goals, leading to faster completion of core functionalities and features.

4. A Model for Future Growth: This experience served as an important learning opportunity, providing us with a blueprint for future team structure optimization. We gained an understanding of the unique working styles and needs of data scientists and engineers. This knowledge will inform our approach to team structure and running joint efforts as we scale our data science efforts and integrate them further with our overall engineering function.

Our journey with different team structures has been interesting. It didn't get us where we wanted to end up at right away, but this has been a learning experience. Our current structure has given us a more effective  resource allocation, workflow optimization, and overall efficiency. We are taking the  learnings to optimize our team structures elsewhere and create an encouraging environment for innovation in data science and engineering.

__Royalty-free stock image above from [Pexels](https://www.pexels.com/).__