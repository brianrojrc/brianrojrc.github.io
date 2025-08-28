---
layout: default
title: Blog
---

<section class="hero">
    <h1>Blog</h1>
    <p class="description">
        Thoughts on technology, mathematics, finance, and the lessons learned along the way.
    </p>
</section>

<section class="fade-in">
    <div class="grid">
        {% for post in site.posts %}
        <article class="card">
            <div class="timeline-date">{{ post.date | date: "%B %Y" }}</div>
            <h3><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--text-primary);">{{ post.title }}</a></h3>
            <p>{{ post.excerpt }}</p>
            <a href="{{ post.url | relative_url }}" style="color: var(--accent); text-decoration: none; font-weight: 500; margin-top: 12px; display: inline-block;">Read more →</a>
        </article>
        {% endfor %}
    </div>
</section>
