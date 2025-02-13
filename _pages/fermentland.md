---
layout: page
title: Shirish Pokharel's Fermentland blog
permalink: /fermentland
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
This page will go to my "Adventures in Fermentland" blog which has already been written, needs to be properly formatted and uploaded. The uploading process takes  a lot longer than I anticipated, and so the website upgrade process has been slower than I hoped. Please be patient.
</p>

<p>
As a dare to myself, I'm dumping all of my notes/drafts/rough works that I've worked on over the last year. I MUST complete these by the month-end (Feb 2025) or else it's gonna look comical, isn't it?

</p>

{% if page.url == "/fermentland" %}

</div>
</div>
<section class="recent-posts">
<div class="row listrecent">
    {% for post in site.fermentland %}
            {% include postbox.html %}
    {% endfor %}
</div>
</section>

{% endif %}