---
layout: post
title: Software infrastructure and databases workshop for interns and new engineers
author: shirish
categories:
  - infrastructure
  - llm
  - collaboration
  - workshop
featured: false
hidden: false
image: assets/images/training.jpg
image_description: Royalty-free stock image above from [Pexels](https://www.pexels.com/). Human-created, AFAIK.
---

This is the syllabus I originally designed to train Hack.diversity fellows for a 8-week workship (1 hour weekly classes, 2 hours of expected assignment load) to help them perform well on their internship/co-op interviews. I've worked on this with the engineer I mentor with the organization, and will be proposing this workshop for entry-level software engineers to the Liberty Mutual IT organization.

Structure of the sessions:
    1. Making sure homework has been completed. (15 mins)
    2. Topic of conversation. (40 mins)
    3. Quick intro to the homework from the session. (5 mins)
    4. (Optional) Q&A

0. Introduction to the workshop, the curriculum, expected work and other matters
  Topics:
    1. Ice-breaker
    2. Overview of the  audience and learning goals to understand the relevance of the workshop to their specific needs and aspirations.
    3. My story and experiences as a mentor and someone working in the tech industry.
    4. I'll hold you accountable and make sure you've done your homework!

  Homework:
    1. Research what docker is, what containers are, and why people use it.
    2. How is docker implemented (hint: cgroups) and how are docker containers different from virtual machines?

1. Docker, containers, virtualization

  Homework
    1. Install docker on your machine and 'docker pull' and 'docker run' something fun or useful (or anything at all!)
    2. Find out what use cases companies use docker for, and what benefits they see. Find a real use case of Docker in the industry.
      2.5 Why would anybody use "Docker for developer's development environment"? What are the upsides and the downsides?
    3. Dockerize your application, aka run it inside a docker container and see if you get any benefits out of it.
    4. Dockerize somebody else's application, from github or wherever, and see how that works out.

  Topics:
    0. Intro to containers and docker...
    1. Benefits of using Docker: speed, efficiency, consistency, and portability.
      improving development speed, simplifying deployment processes, and facilitating collaboratio
    2. Virtual machines vs Docker containers.
    3. Docker files, images, and containers.
    3. Common use cases for Docker in development and production environments.
    4. Troubleshooting common Docker issues.
    

2. Build and deployment pipelines, commit tools, linters prettiers, code reviews

  Topics:
      0. Introduction to the software lifecycle from dev machine to prod, the build and deploy pipelines, and deployment environments.
      1. Introduction to Continuous Integration and Continuous Delivery (CI/CD).
      2. Different types of CI/CD pipelines and their benefits.
      3. Introduction to version control systems (VCS) like Git and common workflows.
      4. Using code linters and formatters to maintain code quality.
      5. Understanding the importance of code reviews and best practices for providing constructive feedback.
        * improving development speed, simplifying deployment processes, and facilitating joint effort, not just finding errors
        * this is how engineers are trained!
      6. Different deployment rollout strategies, their comparative strengths and weaknesses

  Homework:

      Set up a local Git repository and practice basic commands like commit, push, and pull.
      Create a pull request with a code change and respond to code review feedback.
      Explore a CI/CD tool and create a simple pipeline for building and testing an application. Github actions.
      Identify a couple of deployment strategies, their strengths and weaknesses, and when you might want to use them specifically.

3. Networking (with people, not computers!)
 
    Homework:
      1. Identify 5 people who would be helpful towards your career goals from among the mentors.
      2. Identify how you want to 'shape conversation' with them, understand the importance of shaping conversations.
      3. Identify 3 different themes you want your conversations to have, and align them to your potential mentors, and take the conversations in those directions.
      4. Ask for a small(ish) favor from somebody, hold somebody accountable, and/or ask them to hold you accountable towards a goal.
        eg, My mentee and the syllabus.

    Topics:
      1. Why network with people?
      2. Is networking gross or is it important?
      3. Rejection and why it's important to be rejected.
        *  learning opportunities and growth mindset associated with facing rejection
      4. What to talk to people about when you don't know what to talk about.
      5. Utilizing online platforms like LinkedIn for professional networking.
      6. Expanding your circle, far and wide.

4. Databases, migrations, and why engineers run away!
  Topics:
      1. Introduction to different types of databases (relational, NoSQL, etc.) and their strengths and weaknesses.
      2. Writing basic SQL queries to interact with relational databases.
      3. Understanding database migrations and how to manage them effectively.
        a. Why are migrations needed?
        b. How does one go about undoing migrations?
      4. Strategies for overcoming common fears associated with working with databases.
         Why are so many engineers fearful of database and migrations???
      5. More on data loss prevention, troubleshooting queries, and managing schema changes.
        * examples of data breaches or security incidents and the importance of data security practices in mitigating such risks.

  Homework:
      1. Choose a simple database schema and practice writing SQL queries to CRUD (create, read, update, delete) data.
      2. Research and present on a specific database technology used in a popular open-source project.
      3. Identify different migration deployment strategies, how are migrations 'undone'

5. Learning to navigate the workplace power structure

  Topics:
      0. The importance of understanding the workplace power structure and tapping to it.
      1. Building professional relationships with colleagues and managers.
      2. Effective communication: written, verbal, and non-verbal.
      3. Understanding company culture and navigating office dynamics.
      4. Navigating upwards. Tips on effectively communicating with managers, advocating for ideas, and navigating office politics .
      4. Strategies for advocating for yourself and your ideas.
      5. Setting boundaries and maintaining a healthy work-life balance.
        * identifying personal signs of burnout,
        * time management strategies
        * utilizing resources available
      6. Asking questions, understanding the organization, and thinking in terms of 'is this how I would do if I ran this place?'
        * Why is the organization the way it is? How could it be different? Can it be changed? How?
        * What parts of the org structure and decisionmaking process is good?
        * What parts would you change? Why?
        * "What lessons would I take from this place if I was building a competing product?"

  Homework:
      1. Do a self-assessment of your communication skills and identify areas for improvement.
      2. Role-play a scenario where you need to advocate for yourself or your team in a professional setting.
      3. Research and present on a successful leader in the tech industry and their leadership style.
      4. In an organization you're working with, try to understand who manages whom, who makes the final decisions, who has veto powers etc.
          * Identify the 'sister groups', identify the decisionmaking process: is it top-down or bottom-up?
          * How might you be able to leverage your strengths to influence your organization?

6. What am I working towards exactly? Business value of your work. Asking for requirements.

  Topics:
      1. Understanding the bigger picture and how your individual work contributes to the overall business goals.
      2. Identifying key stakeholders and their expectations.
      3. Importance of clear and concise communication when asking for requirements.
      4. Techniques for effective requirement gathering through active listening and open-ended questions.
      5. Dealing with ambiguity and incomplete information.
      6. 10-minute case study.
           * brainstorming activity where participants work together to identify the business value of a hypothetical product or service
           * I give them a project, they figure out business value...
      7. Research and the 'mom test'...
           * open-ended questions (with examples)
           * active listening techniques
           * avoid biased or leading questions.
      8. Questions to ask:
          A. What is the value being generated / created?
          B. How is the customer / business benefitting from these changes?
          C. What is the minimum amount of time and money that can be put into this? Do we NEED to spend all this time?
          D. Are there features or requests that can be rejected? Should we focus on other more rewarding processes?
          E. How does the payback for this idea/product work?    

  Homework:
      1. Research different requirement gathering techniques and choose one to practice in a mock scenario.
      2. If given a homework / friend comes with a business idea, ask these questions:
          A. What is the value being generated / created?
          B. How is the customer / business benefitting from these changes?
          C. What is the minimum amount of time and money that can be put into this? Do we NEED to spend all this time?
          D. Are there features or requests that can be rejected? Should we focus on other more rewarding processes?
          E. How does the payback for this idea/product work?
    
7. Llms and the future of software engineering

  Topics:
      Introduction to Machine Learning (ML) and its potential impact on software engineering.
      Exploring Low-code/No-code (LL/NC) platforms and their implications for the future of development.
      Discussing the changing skillset required for software engineers in the future.
      Encouraging continuous learning and staying up-to-date with the latest trends in the industry.

  Homework:
      Choose an ML application or LL/NC platform and research its potential impact on software development.
      Attend a webinar or workshop on a new technology relevant to the future of software engineering.
      Write a blog post on your thoughts about the future of software engineering and the skills needed to thrive in it

__Photo by Pixabay: https://www.pexels.com/photo/chess-piece-260024/__