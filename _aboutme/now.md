---
layout: summary
title:  "What am I up to this very moment?"
author: shirish
categories: [ now ]
permalink: /now
---

<link href="{{ site.url }}/assets/css/tooltip.css" rel="stylesheet">
{% for update in site.data.updates %}
<div class="message tooltip-{% cycle 'left', 'right' %}">
  <div class='cont'>
  {{update.content}}
  </div>
  {% if update.image %}
  <div class="img">
    <img src="{{update.image}}">
  </div>
  {% endif %}
<div class="date-box">-Shirish on {{ update.date | default: "now" | date: "%B %d, %Y" }} from {{ update.location | default: "Seattle, WA" }}</div>
</div>
{% endfor %}




With no social media presence, this is where I will post my professional and personal updates. Everything one puts on social media should be considered 'public' by default, and any semblance of privacy is an illusion we are misled buying into. If there's something I feel comfortable sharing in social media, that'll go here.

I have lovingly hand-crafted css+html+jekyll templates for the post above so that each individual entries I post here appear as a 'social media post', stylistically, the goal is to make the experience of viewing this will feel more 'authentic'. Ask me about the importance of placemaking, and why companies should focus on the concept of 'digital spaces' in terms of their similarity in perception to physical spaces.

In this space, I will talk about the following:
What am I up to right now, over the course of the last two weeks or so?
  * Talk about hobbies progress.
    * Walking? How is it going? New Routes? New discoveries? New experiences?
    * Fermentation. What's new there? Found any cool new options, made discoveries etc?
    * Plants, hydroponics etc, done any new cool things there?
    * Reading, read any new books recently? What did I think about them? Quick reviews that I might not want to post in the other section.
    * Any updates on the artistic side?
  * Writing progress
  * Work updates.
  * Volunteering updates
  * Activism updates
  * The weather and how it's influencing my choices