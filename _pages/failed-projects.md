---
layout: page
title: Shirish Pokharel Failed Ideas blog
permalink: /failed-projects
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
The following essays are post-mortems of the projects I've work on that have failed. I have gone back through the years and unearthed some of my dearest ideas that were so close to success, and yet so far. Feel free to reach out to me if you want detailed proposal documents and other information about the projects. I'd also be more than happy to work with anyone interested in implementing some of those ideas. I believe while they may not have worked out for me, they've failed as concepts.
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
