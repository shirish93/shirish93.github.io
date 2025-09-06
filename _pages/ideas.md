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
<p>
Feb 2025 Note: I created a mess a year ago by assuming genAI would be a useful assistant in writing these essays and expanding my ideas. I was terribly wrong. Even the worst piece of my writing is better than the trite, boring, repetitive slop that LLM's generate. I'm not linking them here for the moment. This feature WILL be back soon.
</p>

</div>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
{% for post in site.ideas %}
  <div class="col">
    <div class="card h-100 shadow-sm">
      {% if post.image %}
      <a href="{{ post.url | absolute_url }}">
        <img src="{{ post.image | absolute_url }}" class="card-img-top" alt="{{ post.title }}">
      </a>
      {% endif %}
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content | strip_html | truncatewords: 25 }}</p>
        <a href="{{ post.url | absolute_url }}" class="btn btn-outline-primary mt-auto">Read More &raquo;</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
