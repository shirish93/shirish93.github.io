---
layout: page
title: Steal these ideas!
permalink: /ideas
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
Here's a list of proposals, ready to be worked on! These are the ideas I believe will change the way people live and interact with their social and physical environments. These ideas are meant to preserve and promote local culture, architecture and cuisines, while economically benefitting the communities implementing them.
</p>
<p>
I've put lots of time and effort into thinking through them. Feel free to steal them if you wish. I'd like it if you gave me the credit, and reached out to me for collaboration. I can be reached at <a href="mailto:innovation@shirish.me">innovation@shirish.me</a>.
</p>
<p>
Some of the following proposals are on the rougher side to read. I'm cleaning them up as you read this. The posts will also get a nicer look with header images. This is still a work in progress.
</p>


{% if page.url == "/ideas" %}

</div>
</div>
<section class="recent-posts">
<div class="row listrecent">
    {% for post in site.ideas %}
            {% include postbox.html %}
    {% endfor %}
</div>
</section>

{% endif %}
