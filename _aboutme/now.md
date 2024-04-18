---
layout: summary
title:  "What am I up to this very moment?"
author: shirish
categories: [ now ]
permalink: /now
---

Since I do not have any social media accounts, this is where I intend to post my professional and personal updates. I believe everything one puts on social media is 'public' by default, and any semblance of privacy is an illusion we are misled into buying into. And so if there's something I feel comfortable sharing with a group, that'll go here.

In the coming days and months, I'll create template so that each individual entries I post here will appear as a 'social media post', stylistically, so the experience of viewing this will feel more 'authentic'. Ask me about how I feel about the importance of placemaking, and the absolute focus companies should put towards the concept of 'digital spaces' in terms of their similarity in perception to physical spaces.

In this space, I will talk about the following, so be prepared!

<link href="{{ site.url }}/assets/css/tooltip.css" rel="stylesheet">

<div class="message tooltip-left">
This is my latest message, on date so and so
</div>

<div class="message tooltip-right">
  <div class='cont'>
  Happy to share with the world that I just had a burrito, and let me tell you, oh what a burrito it was, one of the best burritos ever!
  </div>
  <div class="img">
    <img src="https://www.shirish.me/assets/images/profile/4.jpg">
  </div>
<div class="date-box">-Shirish on Jan 12, 2023 from Seattle, WA</div>
</div>

{% for update in site.data.updates %}
<div class="message tooltip-right">
  <div class='cont'>
  {{update.content}}
  </div>
  {% if update.image %}
  <div class="img">
    <img src="{{update.image}}">
  </div>
  {% endif %}
<div class="date-box">-Shirish on {{ update.date | default: "now" | date: "%B %d, %Y" }} from {{ update.location | default: Seattle, WA }}</div>
</div>
{% endfor %}



What am I up to right now, over the course of the last two weeks or so?
  * Talk about hobbies progress.
    * Walking? How is it going? New Routes? New discoveries? New experiences?
    * Fermentation. What's new there? Found any cool new options, made discoveries etc?
    * Plants, hydroponics etc, done any new cool things there?
    * Reading, read any new books recently? What did I think about them?
    * Any updates on art?
  * Talk about writing progress formal
  * Talk about work progress.
  * Volunteering updates
  * Activism updates
  * Talk about the weather and how it's influencing my choices
