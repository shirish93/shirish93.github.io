---
comments: true
last_modified_at: '2024-03-13 20:40:09'
layout: page
permalink: /fermentland
title: Shirish Pokharel's Adventures in Fermentland
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
This is my "Adventures in Fermentland" journal. My observations, thoughts and ongoing experiments with fermentation are documented here, mostly for my own reference.
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