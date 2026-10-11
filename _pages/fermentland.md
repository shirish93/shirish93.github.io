---
comments: true
last_modified_at: '2026-10-10 20:34:12'
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
    {% assign sorted_blogs = site.fermentland | sort: "last_modified_at" | reverse %}
    {% for post in sorted_blogs %}
            {% include postbox.html %}
    {% endfor %}
</div>
</div>
</section>

{% endif %}