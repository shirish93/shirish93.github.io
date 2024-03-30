---
layout: page
title: Shirish Pokharel Failed Ideas blog
permalink: /failed-projects
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
The following essays are post-mortems of projects I've worked on that have failed. I've gone back through the years and unearthed some of my dearest ideas that were almost successful, yet fell short. Feel free to reach out if you'd like detailed proposal documents and other information about the projects. I'd also be happy to work with anyone interested in implementing some of these ideas. While they may not have worked out for me, I believe they haven't failed as concepts.
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
