---
layout: page
title: Ideas Journal
permalink: /ideas
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
This is my ideas journal!
</p>
<p>
I've put lots of time and effort into thinking through them. Feel free to steal them if you wish. I'd like it if you gave me the credit, and reached out to me for collaboration. I can be reached at <a href="mailto:innovation@shirish.me">innovation@shirish.me</a>.
</p>
<p>
Feb 2025 Note: I created a mess a year ago by assuming genAI would be a useful assistant in writing these essays and expanding my ideas. I was terribly wrong. Even the worst piece of my writing is better than the trite, boring, repetitive slop that LLM's generate. I'm not linking them here for the moment. This feature WILL be back soon.
</p>
<p>
Oct 2025 Note: I undid all the AI slop, summarized them all, and changed the title of this section from "Steal this Ideas / Ideas Blog" to Ideas Journal. It'll be a living document, where I'll keep moving things around, keep adding the ideas as them come in!
</p>
<p>
May 2026 Note: I removed all the slop images from this section. It hurt because I had spent significant portion of my time three years ago generating them. But it's okay. I'll survive. There was very limited intentionality in those from me. They looked great and I spent a long time learning the prompts, but I learned nothing. The lesson is to not be a chump and run off with the hottest fad ever. I'll eventually get around to putting hand-drawn illustrations here. I've been taking art classes recently.</p>

</div>
</div>


{% if page.url == "/ideas" %}
<section class="recent-posts">
<div class="row listrecent">
    {% for post in site.ideas %}
            {% include postbox.html %}
    {% endfor %}
</div>
</section>
{% endif %}


