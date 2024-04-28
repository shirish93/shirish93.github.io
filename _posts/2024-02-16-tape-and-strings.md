---
layout: post
title:  "In defence of the duct-Tape and strings approach to software development"
author: shirish
categories: [ engineering, architecture, leadership]
featured: false
hidden: false
image: "assets/images/complicated.jpg"
---
The "duct-tape and strings" approach to building software systems prioritizes functionality and rapid iteration over achieving design perfection. While it might raise eyebrows among proponents of careful planning, it's borne out of real-world pressure and can lead to successful outcomes.

## The Pragmatism of Imperfection
Imagine pouring your heart and soul into crafting the perfect software system, architecting every component and anticipating every future need. Meanwhile the urgency of the project passes you buy, and a competitor releases a technically inferior product that happens to meet the exact market needs. The pursuit of perfection is admirable, but the reality for us in the trenches is different. As software engineers we find ourselves facing urgent business needs, limited resources, and rapidly changing landscapes. In these situations, the ideal of a perfectly built system can feel less like a guiding light and more like an increasingly irrelevant tower of babel, ready to collapse under its own glorious weight.

Let's take an example from a project I worked some years ago. We worked on a pilot project that started as a proof of concept of a new technology. Initially designed to showcase the potential of a new technology, it quickly captured the attention of management and stakeholders. Faced with an urgent need to deliver, the team opted to launch the system in its proof-of-concept form, knowing it wasn't perfect but recognizing its immediate value. This decision, while unusual for the generally orthodox company, proved successful. The business need and critical functionality was satisfied, and the team iterated and improved the underlying infrastructure.

The "duct-tape and strings" approach -- which so many of us are right to be suspicious of -- isn't inherently bad; it's a tool within our toolbox, with its own set of advantages and disadvantages. This essay will explore into these considerations, examining the rationale behind building to spec, exploring the benefits and drawbacks of the "duct-tape and strings" philosophy, and discussing how we can leverage both approaches to achieve better results.

The "build to spec" approach involves carefully defining the system's requirements, designing its architecture, and then constructing each component according to plan. This method offers several advantages:

* **Focus on core functionality:** By clearly defining requirements, teams can prioritize essential features and avoid feature creep, ensuring the system delivers its core value effectively.
* **Meeting business needs:** Building to spec aligns the system with specific business objectives and ensures it delivers tangible benefits from the outset.
* **Quicker time-to-market:** While thorough planning might seem time-consuming initially, it often leads to faster development cycles and earlier launches due to fewer rework and unforeseen challenges, and clear engineering direction.
* **Validate ideas quickly:** Launching a "good enough" version allows for real-world user feedback and market validation, saving time and resources on features that might not resonate with the target audience.

* **Lower initial investment:** Instead of aiming for a comprehensive solution upfront, this approach allows for focusing on essential features first, reducing initial development costs.
* **Respond to market needs:** Being able to adapt and iterate quickly based on user feedback and market trends enables companies to stay ahead of the curve and remain competitive.
* **Capture early adopters:** Companies that move fast can attract early adopters who are willing to provide valuable feedback and contribute to the system's growth.

Additionally, the carefully-architected, slow-built systems also have the following downsides.

* **Lengthy development timelines:** Extensive planning and construction can significantly extend development timelines, potentially missing market windows or delaying crucial functionality.
* **Potential missed market opportunities:** In fast-paced industries, waiting for a perfect system can mean losing ground to competitors who adopt agile approaches and adapt to changing market needs more quickly.
* **Limited room for iteration:** Strict adherence to a pre-defined plan can leave little room for adapting to real-world feedback and user needs, potentially resulting in a system that misses the mark.

However, the pragmatism of 'build it now' strategy also comes with challenges:

* **Technical debt:** The use of temporary solutions tends to accumulate "tech debt," creating a maintenance burden and potentially jeopardizing long-term system stability. Google's popular Google Reader product is reported to have been abandoned because it had accumulated so much technical debt in infrastructure that no team or engineer was willing to work on it anymore.
* **Security concerns:** Shortcuts and workarounds can introduce security vulnerabilities if not carefully addressed.
* **Maintainability issues:** Complex cobbled-together systems can be harder to maintain and debug in the long run.
* **Disjointed customer experience:** Customers can feel left behind due to the rapid pace of development, and desire a more stable experience.

The choice between these two approaches isn't always black and white. Often, the best solution lies in a balanced approach that makes use of the strengths of both philosophies. The most important consideration is to understand your needs, and understand clearly what your goals are. As a philosopher said: find yourself, and it'll all become clearer. By prioritizing core functionality and iterating based on feedback, companies can launch systems significantly faster than those aiming for perfection from the start.

Here are some real-world examples of companies that successfully utilized the "duct-tape and strings" approach to gain a competitive edge:

* **Dropbox:** Started with a simple prototype focusing on core functionality (file syncing) and iterated based on user feedback to become a dominant player in the cloud storage market.
* **Airbnb:** Began as a simple website connecting home-sharing individuals, focusing on functionality over design, and rapidly scaled based on user traction.
* **Instagram:** Launched with a limited set of features, prioritizing usability and user engagement over advanced editing tools, and became a cultural phenomenon.

However, it's crucial to acknowledge that not all systems are ideal candidates for the "duct-tape and strings" approach. This philosophy might not be suitable for systems requiring high security, reliability, or scalability.

Additionally, it's important to also consider that speed to market isn't a guaranteed winner, product finish and customer preferences play a huge part in the calculus. Apple wasn't the first to enter the mp3 player market with its iPod devices, yet in very short few years, it drove Microsoft's Zune -- the first mover -- out of business. Then it repeated the move with the iPhone, displacing 'serious' phone makers in short order. Tesla wasn't the first electric car in America either, yet it quickly became the first successful American mass-market EV manufacturer.

### Drawbacks and Tradeoffs: Tech Debt and Security Concerns

While the "duct-tape and strings" philosophy boasts undeniable advantages, it's important to acknowledge its inherent drawbacks and tradeoffs.

#### Tech Debt
As systems evolve through quick iterations and workarounds, they can accumulate "tech debt." Technical shortcuts, temporary solutions, and design flaws accumulate over time, often due to the pressure to prioritize speed over long-term maintainability.

Tech debt can manifest in various ways:

* **Complex codebases:** Cobbled-together solutions can lead to convoluted and hard-to-understand code, increasing maintenance costs and hindering future development.
* **Integration challenges:** Integrating new features or functionalities into a system cobbled together with workarounds can become increasingly difficult and time-consuming.
* **Hidden bugs and vulnerabilities:** Shortcuts and quick fixes can introduce hidden bugs and vulnerabilities that may impact system stability and security in the long run.

#### Managing tech debt

* **Pay it back consistently:** Dedicate time and resources to gradually address accumulated technical debt, preventing it from spiraling out of control.
* **Prioritize critical issues:** Focus on addressing technical debt impacting system performance, security, or maintainability first.
* **Refactor strategically:** As the system evolves, implement planned refactoring initiatives to improve code quality and structure.

#### Security Concerns
The very nature of the "duct-tape and strings" approach, with its reliance on workarounds and shortcuts, can introduce security vulnerabilities. These vulnerabilities can be exploited by malicious actors, potentially compromising sensitive data or system functionality.

#### Mitigating security risks:

* **Prioritize security from the start:** Even when adopting an iterative approach, security should be a core concern, implementing best practices and conducting regular security assessments. For example, you wouldn't normally expose your prod database to uncredentialed users. Why then should the addition of LLM technology to your stack change that consideration? Think two steps ahead on how attackers might try to undermine your system.
* **Stay updated:** Ensure all software components are kept up-to-date with the latest security patches.
* **Perform rigorous testing:** Implement thorough security testing throughout the development process to identify and address vulnerabilities before deployment.

## Conclusion: Ode to the Imperfect Prototype

Leonardo's (of Vinci, the famous one) first flying machine, an ungainly contraption of wood and canvas, teetered precariously before crashing spectacularly. Was it a failure? Certainly, in terms of achieving sustained flight. But within that "duct-tape and strings" contraption lay the seeds of revolution, the spark that ignited humanity's airborne dreams. It may not have led to immediate invention of human flight, but it set us on the path. It inspired the right people.

The imperfect, "duct-tape and strings" system might not be an architectural marvel. It will creak, groan, and occasionally require frantic troubleshooting. But within its cobbled-together functionality it holds potential for rapid response, agile adaptation, and quick market validation. Messy prototypes, the rough drafts of the software world, are imperfect first steps that rapidly pave way for products towards working long-term solutions.

__Photo by Antoni Shkraba: https://www.pexels.com/photo/complex-press-in-a-graphic-design-studio-6620985/.__