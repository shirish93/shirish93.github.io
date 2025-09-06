---
layout: post
title: Things to do before starting your big GenAI project
author: shirish
categories:
  - engineering
  - ai
  - genai
featured: true
hidden: true
image: assets/images/innotrap_br.png
image_description: GenAI can be a tricky monster. Watch out for their evil ways! Lovingly illustrated on my Kindle scribe.
---
You've heard the warnings. You've read up on the importance of [figuring out your ROI]({% post_url 2025-08-19-roi-on-genai %}) before starting on your journey. The calculations show a positive return on investment for your project. Now what? Where lie the monsters? Here! Look here!

Things you need to consider before you start working on that genAI project in your company
### Understand what the problem you're trying to solve actually is

Does your genAI solution really, really solve the actual problem? Or are you trying to solve the problem because you really really want to deploy genAI tool? Has management told you. it's an 'ai-first' company now, and you just need an excuse? If it's the latter, make sure you don't dig yourself too deep. You do want to show exciting results. Be ready to show positive business value even after the ai eagerness has faded away. Start with manageable, low-cost implementations.

If it's the former, make sure you've evaluated all existing 'classic' machine learning techniques. They're often a magnitude faster in speed, several times cheaper, and easier to understand. You don't lose that much out in performance either. There are some very limited use cases where genAI might be the better, value-positive solution. Make sure you are confident your use case is one of them!
<aside class="pquote">
    <blockquote>
		<b>Security! Security! Security!</b>
        <p> I can't stress this enough. You don't want to be one person whose project helped exfiltrate all of customer data to evil hackers </p>
         <p>Think data security REALLY carefully. You can't let the users' 'agents' access to any data the user themselves don't have access to. "AI Instructions" are just vibes, they're not security guarantees. Use your AD groups and permissions to manage access, not instructions to the agent.</p>
    </blockquote>
</aside>
### Understand what  your metrics are, and how you'll validate your success

Come up with a hypothesis, and test it, before the first engineering work starts. For example, maybe your hypothesis is: genAI is going to make internal knowledge base searches 30% quicker, and 40% more relevant. Clearly define, with measurable numbers, what 'quicker' and 'more relevant', in this case. You shouldn't spend 2 years into the project before you look into validating your hypothesis. You want to have tested your hypothesis before you invest millions in the project's infrastructure, front-end and back-end systems. Find your target customers, and validate your hypothesis before a single production-ready line of code is written. 

Confirm your theories before actually going in. Maybe there's more interesting/direct problems to be solved! You might end up discovering something unexpected!

{% raw %}
<figure style="float: left; width: 50%; margin-right: 20px; margin-bottom: 20px;">
    <img src="../assets/images/thumbnails/falling-house.webp" 
         width="100%" 
         alt="Kindle scribe illustration." 
         style="max-width: 100%; display: block; border: 1px solid #ddd;">
    <figcaption style="text-align: center; font-size: 0.9em; margin-top: 5px; 
                      border: 1px solid #ddd; padding: 8px;">
        You'll discover in few short months your system architecture looks like this. Fear not, that's only expected in rapidly-evolving fields. Illustrated lovingly hand-crafted on my Kindle Scribe. 
    </figcaption>
</figure>
{% endraw %}
### Talk to the customers, figure out what they actually need! 

This is very similar to the first point, except the focus is on understanding the customer need. What your customers want and what they need could be entirely different things. Talk to the customers, and look into their workflow to understand what it is that you need to solve.

For example, your customer tells you they need genAI because it'll make their lives easier. You start asking questions. Turns out they've been told by their management that AI is the solution. All they want is a faster / more relevant document search engine. At that point, you could implement a 'lighter' 'ai' system that costs $0.05 per search instead of $2 a pop with a full-n end-to-end system. I'm not suggesting you completely undermine genAI if that's in the requirement. Instead, consider doing it in a price-effective way by using the best possible appropriate technology.
<aside class="pquote">
    <blockquote>
		<b>About that Henry Ford quote...</b>
        <p> "If I'd asked my customers what they wanted, they'd say a faster horse," goes the oft-quoted Henry Ford koan. Unless you are an equivalent of car manufacturer in 1904, it probably won't apply for you.</p>
         <p>Additionally, the number of American automakers that went bankrupt in the first 3 decades of 1900's was in the thousands. You'd probably done better in the earlier decades if you HAD produced faster horses.</p>
         <p>You cannot lifehack your way out of understanding the customer need. Asking chatGPT about your product is not the same.</p>
    </blockquote>
</aside>

Maybe the customers just need a clear understanding of team vision from their leadership? Perhaps they require a quicker database, but are unable to technically frame their needs, and feel like AI might be the solution. If you go with a solution in hand, you won't have the best solution to their problems. You'll have a solution that may or may not address their needs, and likely be suboptimal.
### Analyze the cost-benefit tradeoffs before you decide to go all-in. 

Maybe genAI is the solution to your specific solution! 

Except, what if, 95% of your problems can be solved in 10% of the budget it'd take you to deploy genAI. Did you fully consider the alternatives? Did you evaluate the cost versus rewards? Are you sure if you initiative is ever going to be revenue positive?

As has been the theme of this piece, choose the most appropriate technology, not the most happening.
### Evaluate if you can use similar tools in stead of, or in parallel with genAI! 

Maybe you can distill larger, expensive models to become much faster and cheaper! 
Maybe you can use genAI to train a specific classifier, which might not be as exciting or 'ai', but gets you your desired output! Perhaps you have a simple usecase which can do with a local ai model!

You don't have to implement it like everybody else is doing! And you definitely don't need to put a f*king chat interface in front of all of your systems[^1]!

[^1]: There's a long rant coming in a few weeks on this. Why does every. single. freaking. app. Have to be chat interface? I thought we'd moved from the CLI in the 80's? My theory is, it's because that was the chatGPT ui, and nobody's thought of any better. I've seen a few alternatives, but more on that in the upcoming piece!

Even if you're implementing a genAI system, it doesn't have to be the fanciest / priciest option. 
### Security, security, security!

Have you secured your application vis-a-vis the genAI system? Have you got the permissions and _authorization_ right? Are you sure? Super duper sure? There's no way there's an 'escalation of privilege' attack on your data that can be run? Did you know that the 'prompt injection attack' doesn't have a fix yet, and many serious security researchers think [the current genAI implementation can never fix it](https://www.schneier.com/blog/archives/2025/08/we-are-still-unable-to-secure-llms-from-malicious-inputs.html)?
<aside class="pquote">
    <blockquote>
		<b>About those genAI costs...</b>
        <p> Be prepared to have your costs amortized to between $4 and $10 to begin with. It'll reduce with scale, but not very much. Unlike 'traditional' software, additional genAI costs aren't marginal, they're pretty linear. Be prepared for a sticker shock in the medium term.</p>
    </blockquote>
</aside>
Make sure your users can't access data they couldn't get without AI. Make sure the 'agent' that works on their behalf cannot access privileged resources either. You can't expose a higher-privilege search index either. You want to get this right. The upside of your project is probably not Earth-shattering. The downsides of customer data compromise can be massive. You don't want to end up as a case study in security fail. Every user / agent on their behalf needs access strictly only to resources they need, and nothing more. No 'cheating', no trusting your 'genAI employee' to not reveal their secrets. Attackers will 100% [figure out the technique](https://www.schneier.com/blog/archives/2025/08/subverting-aiops-systems-through-poisoned-input-data.html) to exfiltrate that data. You can bet on that!

<aside class="pquote">
    <blockquote>
		<b>On debugging and maintaining non-deterministic systems long-term</b>
        <p> Maintenance and debugging will be hell. Be prepared to question the wisdom of your original implementation 3 months into the project. In six months, you're going to be quite mad you're expected to re-embed your data and re-spend 10's of k's every few months.</p>
        <p>There are no standard patterns of implementation. It's a guarantee you'll make a suboptimal architecture decision. Things are moving so fast, be prepared to redo the system in nine months.</p>
    </blockquote>
</aside>

#### Make sure you're not throwing out structured data

Don't throw the 'structured' nature of your data out, only to end up letting genAI treat it as unstructured data, and then figure it out. You already know how it's organized, and the relationship between different elements! Use it to your advantage! Use classical NLP algorithms where possible! Don't throw out the only comparative advantage you have, which is the understanding of your own data, to surrender to somebody who knows nothing about your domain!

Brainstorm with your data scientists on how you might leverage the structure of your documents instead of going the cookie-cutter RAG pattern way.

### Consider if you'd still implement it if this was all quite technical and rally really boring, and nobody else was excited about it. 

Imagine as if we were talking about a new database algorithm, or a very specific technique to make gradual gains in efficiency/speed. Would you be as excited? Would the cost-benefit analysis be the same?

Two years down the line, when you have to maintain this system, you don't want to find yourself in a morass of frustration and confusion. The excitement is going to fade away, but the business value remains.
