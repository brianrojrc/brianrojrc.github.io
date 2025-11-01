---
layout: default
title: Blog
---

<header class="page-header">
    <h1>Blog</h1>
    <p class="intro">My thoughts on academia and life.</p>
</header>

<section class="blog-list">
    {% for post in site.posts %}
    <article class="blog-post-item">
        <div class="item-header">
            <div class="item-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
            <div class="item-date">{{ post.date | date: "%B %Y" }}</div>
        </div>
        {% if post.excerpt %}
        <p class="item-description">{{ post.excerpt | strip_html | truncate: 180 }}</p>
        {% endif %}
    </article>
    {% endfor %}
</section>
