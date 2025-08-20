---
layout: post
title: What's the ROI on your genAI deployments?
author: shirish
categories:
  - engineering
  - ai
  - genai
featured: true
hidden: true
image: assets/images/genai-roi.jpg
---
A friend in Seattle started developing a nice b2b software two years ago. The idea was decent, and he had done fair bit of market research. They released the beta version last year. Sales was slow, but it was picking up. They went out soliciting for feedback, to expand their market reach. Somebody said they should add AI.

My friend spent a year adding a genAI-powered chatbot. It was fine, a small veneer of custom prompt over chatGPT chat. Turns out nobody actually wanted it. It was meant as a suggestion in anticipation of customer requests. The small cadre of customers wished for a way to remove the chatbox entirely. He doesn't have much to show for the year of time and money he invested in the feature. 

"Companies Are Pouring Billions Into A.I., It Has Yet to Pay Off" [wrote](https://www.nytimes.com/2025/08/13/business/ai-business-payoff-lags.html) the New York Times a week ago. "That's a game changer", they quote a person then quickly adds that the shift will take at least five years. Some game-changer, huh? Nobody in the article seems to know where the returns will come from. The article brings up the JPMorgan Chase claim that their employees are saving four hours weekly "on basic business tasks" thanks to their business chatbot. It's not made clear what brought about the 10% productivity gain.

Companies seem to be FOMOing their way into genAI. They understand that if they don't jump into the Gen AI hype cycle, they'll be left behind. That their competitors will, all of a sudden, gobble up the market, powered by AI. An executive I know describes genAI as "Rocket Boosters for our Business". Somebody else said it was a "momentous point in history". There's no clear reason to believe if any of that's true.
<aside class="pquote">
    <blockquote>
		<b>Vent Part I of III.</b>
        <p> The Amazon Kindle Scribe is my favorite gadget. I have written 5k pages on it in the last two years.The large e-ink screen, and warm front-light make it easy on the eyes. The device has many hardcore fans. </p>
         <p> The most requested Scribe feature is a dual split screen mode where you have an open notebook on one half, and a book on the other. Another request is split screen mode for ebooks. Amazon has not implemented either.</p>
    </blockquote>
</aside>
Companies like the ones quoted have been sold the need to 'invest' in GenAI. They have seen the demos and fantastic productivity claims made by genAI vendors. The seemingly valuable outcomes are never specifically quantified, and never qualified. Where exactly will the proclaimed growth in revenue / savings come from? And will the associated development costs and maintenance expenses be covered? You don't hear answers to those questions much. The numbers are often based on fantasy 'agents saved' numbers. The relationship between those numbers and reality is the same as that between :rocket-ship::rocket-ship::rocket-ship: emojis and ...rocket...ships...

After wading through hundreds of such articles I have identified two classes of 'real' benefits. First: automating customer support. Second: a better search engine to search within existing knowledge bases of the company. And neither case justifies the often ridiculous price tags that come with those systems.
<aside class="pquote">
    <blockquote>
		<b>Vent Part II of III.</b>
        <p> What they have implemented is an AI feature that summarizes upto 10 pages of notebook writing. </p>
         <p>I'm fairly engaged with the Scribe community, and nobody I know uses the feature. No one has wanted, after writing for hours, for their content to be summarized in fake-handwriting on a new page. People who want to summarize text don't spend hours handwriting it first.</p>
    </blockquote>
</aside>

I haven't met a single person here in Seattle whose non-Ai company has had a positive RoI (return on Investment) with GenAI product integration[^4]. I have asked around. I genuinely, really want to know where the gains will come from. I'm open -- no, I'm eager -- to find a single counter-example. I find it likely that besides in very few industries with low-hanging fruits that can leverage genAI/LLM's to improve their products, the juice is not there. No positive RoI, no significant expense reduction, no serious revenue increase.

<figure style="float: left; width: 50%; margin-right: 20px; margin-bottom: 20px;">
    <img src="../assets/images/thumbnails/falling-house.webp" 
         width="100%" 
         alt="A hand-drawn image of a talktative dude." 
         style="max-width: 100%; display: block; border: 1px solid #ddd;">
    <figcaption style="text-align: center; font-size: 0.9em; margin-top: 5px; 
                      border: 1px solid #ddd; padding: 8px;">
        AI claims and infrastructure are like this house. Held on stilts and ready to collapse at a moment's notice.
    </figcaption>
</figure>

We've mistaken the forest for the trees. Executives have tricked themselves by misunderstanding the jagged frontier of generative AI. Ethan Mollick writes about it [here](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged) . Generative AI's capabilities are very 'jagged' -- the models are _quite_ good at certain tasks, and very poor at others. The distinction is difficult to understand clearly. However, the genAi salespeople and the media hype-sters have sold us on the furthest edge of the frontier. They've forgotten to inform that the jagged frontier goes allll the way back too. They don't tell their customers that most of their tasks lie in the less-exciting backwaters. For those, generative Ai models are no good. When I say 'no good', I don't mean they'll never be able to accomplish a given task. What I mean is, they're not at all worth the investment. It doesn't make sense to have each internal search call cost $10. I'm not making the number up, that is the order of what a system like that could cost with initial development expenses and TCO. And that's one of the simpler, more successful use cases of LLM's and genAI.

<aside class="pquote">
    <blockquote>
		<b>Vent Part III of III.</b>
        <p>The feature is executed by the classic "ai magic" button that takes up precious screen real estate. I'm fairly certain this was implemented due to management guidance to be 'ai-first'. What an unfortunate misalignment in what the customers want and what management wants! </p>
    </blockquote>
</aside>

I'm disappointed that the genAI hammer is used to nail down every problem. It's like using a bulldozer to hammer nails into the wall, because the bulldozer salesperson was really persuasive! Unfortunately that's the approach I see a teams taking. LLM's are often wrong tools for the job, and will never get a positive RoI compared to the simpler alternatives. I wish folks looked to solving problems using any technology available. If that were LLM's or genAI, so be it, but often it turns out not to be.

Upper management have been sold genAI as the general solution to all their problems. Anil Dash[^2] calls it the "[Gen AI Virus](https://www.anildash.com/2025/04/30/ai_first_is_the_new_return_to_office/)" , where vendors capture the management mindshare against the interest of their organizations[^3].  No wonder then, that 95% of AI projects [turn out to be value negative](https://www.theregister.com/2025/08/18/generative_ai_zero_return_95_percent). I so want to talk to the 5% success, and verify if they're properly accounting all the costs. I want to believe! Give me a reason! Resource-hungry, expensive, processing is being deployed in situations where it is not needed at all. Such solutions are costlier, and inefficient compared to alternatives, and never make back the original investment. Not just that, often they're resource sinks, and the best thing organizations can do is dump such projects!

If you're looking to go on a Gen AI journey integrating random LLM-based solutions into your product, be sure you understand that you will need to make it value positive. You don't want to be on the chopping block later because your costs have ballooned up with no justification!

AI Mass delusion Event: https://www.theatlantic.com/technology/archive/2025/08/ai-mass-delusion-event/683909/

[^2]: I disagree with Anil's opinion on Return to Office policy, something he compares AI mania to, though. See this [piece]({% post_url 2025-08-12-return-to-office %}) on why I think RTO policies actually make sense.

[^3]: I have a slightly different interpretation. I believe large language models and generative models are optimized (unintentionally) for demoing purposes, and selling to executives. It's a side-effect that they happen to work as well as they do for other tasks. The current AI interest is driven by hundreds of billions spent in optimizing for 'executive agreeableness'.

[^4]: I have talked to senior folks at MSFT and AMZN. I have talked to their customers. I have talked to hot startups. Those AI features aren't the big money-makers the AI vendors want you to believe they are. If you disagree, please let me know, I'll add an exception here!