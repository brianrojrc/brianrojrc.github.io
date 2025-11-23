---
layout: default
title: Blog
---

<header class="page-header">
    <h1>Blog</h1>
    <p class="intro">My thoughts on machine learning, finance, and technology.</p>
</header>

<section class="blog-list">
    {% for post in site.posts %}
    <article class="blog-post-item">
        <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
        <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        {% if post.excerpt %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        {% endif %}
    </article>
    {% endfor %}
</section>
