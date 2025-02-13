---
layout: page
title: Shirish Pokharel's Adventures in Fermentland
permalink: /fermentland
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
This is my "Adventures in Fermentland" blog. As you can see, I've drafted the outlines, but need to expand on the pieces, and properly format them etc. It's taken a lot longer than I anticipated, and so my original timeline has been messed up. Please be patient.
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