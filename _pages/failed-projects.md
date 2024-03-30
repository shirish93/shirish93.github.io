---
layout: page
title: Shirish Pokharel Failed Ideas blog
permalink: /failed-projects
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
This 'blog' will be about all of the projects I've work on that have failed. I've already written them, just needs proper formatting and uploading, and it's taking a lot longer than I anticipated. Friends, family, acquaintances and random strangers who somehow(???) stumbled into this website: I beg of you, have some patience and wait until I get around to uploading the relevant pages.
</p>


{% if page.url == "/failed-projects" %}

</div>
</div>
<section class="recent-posts">
<div class="row listrecent">
    {% for post in site.failedprojects %}
            {% include postbox.html %}
    {% endfor %}
</div>
</section>

{% endif %}
