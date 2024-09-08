---
layout: post
title:  "How our squad integrated data scientists and software engineers"
author: shirish
categories: [ engineering, leadership, teamwork ]
image: "assets/images/teamwork2.png"
featured: true
hidden: true
---

Our team integrated data scientists and engineers into a single team. We learned important lessons as we tested different team structures and planning regimen. This essay takes us through our journey.

### Introduction
Software teams struggle with maintaining a clear long-term product vision while resourcing the teamm apprpriately. This becomes even trickier when data scientists are involved. Their needs and workflow don't align with that of software engineers. In our team at Solaria Labs, we have experimented with a few structures. We discovered there's no 'ideal' prescribable final form. The structure depends on the needs of a project. This essay will walk through our journey of experimenting with different 'hybrid' team structures.

Data scientists and software engineers worked within the same squad in the first iteration. They shared a Jira board, backlog, and joined the same meetings. We unearthed some complexities in this initial approach.

The primary issue was that data scientists and software engineers work on different timelines and work 'chukns'. Data science projects involve exploratory phases and require flexibility to iterate on models. This requires a fluidity in their work schedule. Software engineering projects are typically more structured with well-defined deadlines and milestones. It's often quite predictable. This fundamental difference in workflow created inefficiencies within the squad structure. Engineers found themselves frequently pulled away from core tasks to address the immediate needs of data scientists. This lead to a cycle of "flood and drought" in their workload. Periods of intense partnership on specific projects would be followed by stretches with minimal direct engagement. This created uneven distribution of work and a sense of inefficiency. The daily standups were unsuitable for data science. For long stretches they would have few updates worth talking about.

We initially underestimated the impact of this "seasonality" in the workload. We had done a similar smaller-scale collaboration between data science and engineering. The cyclical nature of engagement was less pronounced. That had left us unprepared for the amplified issue with a larger team. A surge in infrastructure issues further complicated the situation. Engineers found themselves entangled in tasks not directly related to their core responsibilities. They were constantly engaging in adding resources to the EKS (kubernetes) cluster used by data scientists or keeping it updated with the latest features. This additional burden made it difficult to assess the true effectiveness of the squad structure. That delayed our decision to implement a different approach.

The initial squad structure had positive outcomes. One was the stronger relationships between data scientists and engineers. Working closely within the same unit encouraged collaboration and knowledge sharing. Data scientists gained a deeper understanding of software development process. I remember a data scientist telling me -- "I know understand why infrastructure projects take so long!". Engineers developed an appreciation for the experimentations that data science did. This understanding led the way for a more directed approach in the future.

We decided to restructure our teams to create a more working relationship. This process involved several steps:

1. Identifying bottlenecks: We analyzed work patterns in the squad. We tracked time spent on various tasks  by both data scientists and engineers. The analysis showed engineers were spending too much time in infrastructure management and tech support. While necessary, they were not directly in the engineers' core competencies. That slowed focus on longer-term software development goals.

2. Aligning work with long-term goals: We revisited our strategic goals. This involved prioritizing core functionalities. We deprioritized tasks that didn't align with shared vision, and allocated sufficient engineers. This meant pausing the work on some of our initiatives.

3. Exploring teamwork beyond squads: We recognized the value of cooperation between data scientists and engineers. A more structured approach that minimized disruptions to individual workflows was needed. We looked into reorganizing team structures.

Through the evaluation process, we identified the need for a more specialized team structure. This new approach involved dividing the engineering team into two distinct units:

1. Infrastructure Team: This team would focus solely on managing and maintaining the data science infrastructure, including the EKS kubernetes cluster and related technologies. It would allow them to develop deep expertise in these areas. It would eventually lead improved performance and scalability in infrastructure for GPU apps.

2. Data Science Enablement Team: This team would include engineers who would work closely with data scientists. They would identify their specific needs and provide technical support. That way data scientists receive technical assistance without disrupting the engineers' focus on software development.

### Outcomes

1. Enhanced Resource Allocation and Efficiency: Dividing the engineering team into specialized units was a more efficient allocation of resources. The infrastructure team's dedicated focus on infrastructure management led quicker completions. The data science enablement team, in turn, provided targeted technical support to data scientists. This let them  work more independently and efficiently. The clear separation of responsibilities streamlined the workflow and contributed to overall team productivity.

2. Deeper Teamwork and Knowledge Sharing: The new approach alloweed for a more structured and focused form of work. The data science enablement team served as a bridge between data scientists and engineers. They simplified technical communication and knowledge sharing without disrupting workflows.

3. Improved Project Turnaround Times: The streamlined workflow contributed to reduction in project turnaround times. Data scientists received timely and focused technical support. They were able to iterate and experiment faster. Software engineers were empowered to focus on long-term development goals, leading to faster completion of core functionalities and features.

Our experiment with hybrid team structures has been interesting. It didn't get us to our destination right away, but it has been a learning experience. Our current structure has given us better efficiency and faster turnaround. We are taking the lessons from this experiment to provide guidance to the rest of the organization with team structures. We foresee closer collaboration between data scientists and engineers in our company. Our learnings will allow the organization to rapidly iterate over potential options.