---
layout: post
title: The duct-tape and strings approach to software is unfairly maligned
author: shirish
categories:
  - engineering
  - architecture
  - leadership
image: assets/images/jenga.png
image_description: Image generated using Gemini AI. Will be replaced soon.
---
The "duct-tape and strings" approach to building software prioritizes functionality and rapid iteration. That comes at the cost of design perfection and technical debt. It stresses the heck out of proponents of careful planning. But it's a valid approach to real-world pressures and can lead to successful results.

Imagine spending days and nights over months, working on the perfect software app. You architected every component and anticipated every future need. Meanwhile, the deadlines pass by and a competitor releases a technically inferior product. It happens to meet the general market needs. Your app's not even released, and you're already playing catch-up. The pursuit of perfect software is admirable, but the reality is different. Software engineers are limited by urgent business needs, limited resources, and a rapidly changing market. A perfectly written application is an intractable ideal these days, and much less of a North Star.

I realized 'just ok' is a viable option a few years ago during a software pilot project I worked on. My squad created the pilot to show the potential of a new technology. It wasn't meant to be a permanent 'real' app. It quickly captured the attention of management. Deliver urgently, came the instruction. The team chose to launch the system in its proof-of-concept form. We knew it wasn't perfect, but it had created immediate value. It was an unusual decision for our generally orthodox company. The project was successfully delivered. After immediately delivering the business-critical functionality, we eventually improved the underlying infrastructure.

This "duct-tape and strings" approach -- which so many of us are right to be suspicious of -- isn't inherently bad. It's a tool within our toolbox, with its own set of advantages and disadvantages. We'll now examine the benefits and drawbacks of the "duct-tape and strings" philosophy, and see how we might leverage both approaches. 

To begin with, the approach offers several advantages:

* **Focus on core functionality:** By clearly defining basic requirements, teams can prioritize basic features and avoid feature creep. This ensures the system delivers its core value.
* **Meeting business needs:** Building to in-demand spec aligns the product with specific business objectives. It delivers tangible benefits from the outset.
* **Validate ideas quickly:** Launching a "good enough" version allows for timely user feedback and market validation. This saves time and resources on features that might not work for the target audience.
* **Lower initial investment:** This approach allows for focusing on important features first, reducing initial development costs. We avoid aiming for a full-on solution at the start.
* **Respond to market needs:** Adapting and iterating quickly based on user feedback and market trends allows teams to stay ahead of the curve and remain competitive.
* **Capture early adopters:** Companies that move fast can attract early adopters. They gain access to users who are willing to provide feedback and contribute to the product's growth.

Consequently, carefully-architected, slow-built systems have the following downsides.

* **Long development timelines:** Extensive planning and construction can significantly extend development timelines. Teams might potentially miss market windows or delay critical features.
* **Potential missed market opportunities:** In fast-moving industries, waiting for a perfect system can mean losing ground to competitors. They could adopt agile approaches and adapt to changing market needs more quickly.
* **Limited room for iteration:** Strict adherence to a pre-defined plan can leave little room for adapting to feedback and user needs.

Of course, the iterative software development cycle has its downsides. Our approach comes with these possible challenges:

* **Technical debt:** The use of temporary solutions tends to accumulate "tech debt". This leads to a maintenance burden and potentially jeopardizes long-term system stability. Google's popular Google Reader product is reported to have been abandoned because it had accumulated too much technical debt. The work to fix the infrastructure was so tremendous that nobody wanted to work on it.

  Tech debt can manifest in different ways:

  * **Complex codebase:** Cobbled-together solutions can lead to convoluted and hard-to-understand code. This increases maintenance costs and hindering     future development.
  * **Integration challenges:** Integrating new features or functionalities into a system cobbled together with workarounds can become increasingly difficult and time-consuming.
  * **Hidden bugs and vulnerabilities:** Shortcuts and quick fixes can introduce hidden bugs and vulnerabilities. That could hurt system stability and security in the long run.

  It can be managed in the following ways.

  * **Pay it back consistently:** Dedicate time and resources to gradually address accumulated technical debt. Prevent it from spiraling out of control.
  * **Prioritize critical issues:** Focus on addressing technical debt that impacts system performance, security, or maintainability first.
  * **Refactor strategically:** As the system changes, implement planned refactoring to improve code quality and structure.

* **Security concerns:** Shortcuts and workarounds can introduce security vulnerabilities if not carefully addressed. They can be mitigated in the following ways:
  * **Prioritize security from the start:** Even when adopting an iterative approach, security should be a core concern. Implement best practices and conduct regular security assessment from the start. For example, it's a bad idea to expose production database to uncredentialed users. Why then should the addition of LLM technology to the team's stack change that consideration? Think two steps ahead on how attackers might try to undermine your system.
  * **Stay updated:** Ensure all software components are kept up-to-date with the latest security patches.
  * **Perform rigorous testing:** Implement thorough security testing throughout the development process to identify and address vulnerabilities before deployment.

* **Maintainability issues:** Complex cobbled-together systems can be harder to maintain and debug in the long run.
* **Disjointed customer experience:** Customers can feel left behind due to the rapid pace of development, and want a more stable experience.

The choice between these two approaches isn't always black and white. , the best solution lies in a balanced approach that makes use of the strengths of both philosophies. The most important consideration is to understand your needs, and what your goals are. As a philosopher said: find yourself, and it'll all become clearer.

Here are some companies that successfully used the "duct-tape and strings" approach to 'win':

* **Dropbox:** Started with a simple prototype focusing on core functionality (file syncing). They iterated based on user feedback to become a large player in the cloud storage market.
* **Airbnb:** Began as a simple website connecting home-sharing individuals. They focused on functionality over design, and scaled based on user traction.
* **Instagram:** Launched with a limited set of features, prioritized usability and user engagement over advanced editing tools. Eventually became a household appliance.

Not all systems are ideal candidates for the "duct-tape and strings" approach. This philosophy would not be suitable for systems that need high security, reliability, or scalability.

Importantly, we should also consider that speed to market isn't a guaranteed winner. Product finish and customer preferences play a huge part in the calculus. Apple wasn't the first to enter the mp3 player market with its iPod devices. Yet, in a short few years, it drove Microsoft's Zune -- the first mover -- out of business. Then it repeated the move with the iPhone, displacing 'serious' phone makers in short order. Tesla wasn't the first electric car in America either. Again, it quickly became the first successful American mass-market EV manufacturer.

Leonardo's (of Vinci, the famous one) first flying machine was an ungainly contraption of wood and canvas. It boinged and jumped before crashing spectacularly. Was it a failure? Definitely. In terms of achieving sustained flight. But within that "duct-tape and strings" contraption lay the seeds of revolution. It may not have led to immediate invention of human flight, but it set us on the path. It inspired the right people. Which would not have helped Leonardo's patrons. But you can accelerate the process within your team.

The imperfect "duct-tape and strings" system is not an architectural marvel. It will creak, groan, and occasionally require over-night troubleshooting. But it creates path for rapid response, quick adaptation, and immediate market validation. Messy prototypes the rough drafts for software. They are imperfect first steps that set the path for better long-term products.