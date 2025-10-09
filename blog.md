---
layout: default
title: Blog
---

<header class="page-header">
    <span class="page-marker">[1]</span>
    <h1>Blog</h1>
    <p class="intro">Thoughts on engineering, mathematics, finance, and life.</p>
</header>

<section class="blog-posts">
    {% for post in site.posts %}
    <article class="blog-post-item">
        <div class="post-date">{{ post.date | date: "%B %Y" }}</div>
        <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
    {% endfor %}
</section>
