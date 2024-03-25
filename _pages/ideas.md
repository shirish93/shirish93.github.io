---
layout: page
title: Steal these ideas!
permalink: /ideas
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>
Here's a list of proposals, ready to be worked on!
</p>
<p>
I've put lots of time and effort into thinking through them. Feel free to steal them if you wish.
</p>
<p>
Content has been written, the process of upload takes a long time, it turns out. Please be patient.
</p>
{% if page.url == "/ideas" %}

<!-- Featured
================================================== -->
<section class="recent-posts">
    <div class="section">
        <h2><span>All ideas</span></h2>
    </div>
    <div class="row">

    {% for post in site.categories.ideas %}

            {% include postbox.html %}

    {% endfor %}

    </div>
</section>

{% endif %}
<div class="bottompagination">
<div class="pointerup"><i class="fa fa-caret-up"></i></div>

</div>

