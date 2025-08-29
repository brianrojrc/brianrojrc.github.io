---
layout: default
title: Home
---

<div class="main-content">
    <div class="profile-section">
        <div class="profile-header">
            <h1>Brian Rojas</h1>
            <p class="tagline">Electrical Engineering & CS + Mathematics</p>
            <div class="profile-bio">
                I combine advanced mathematics, machine learning, and low‑level systems programming to tackle 
                problems in both financial markets and security research. 
            </div>
            <div class="profile-links">
                <a href="mailto:brianroj@pm.me">Email</a>
                <a href="https://www.linkedin.com/in/brian-rojas-9b0b5237a" target="_blank">LinkedIn</a>
                <a href="/blog">Blog</a>
            </div>
        </div>

        <div class="news-section">
            <h2>news</h2>
            <div class="news-item">
                <div class="news-date">Aug 28, 2025</div>
                <div class="news-content">
                    New blog post on <a href="/blog">book recommendations</a> that helped me
                </div>
            </div>
            <div class="news-item">
                <div class="news-date">Oct 14, 2024</div>
                <div class="news-content">
                    Started research on PAC bypass techniques for iOS kernel exploitation
                </div>
            </div>
            <div class="news-item">
                <div class="news-date">Jun 23, 2025</div>
                <div class="news-content">
                  I have developed an artificial neural network driven volatility arbitrage 
                  strategy using LSTMs to forecast short term deviations between realized and implied vol.
                </div>
            </div>
        </div>

        <div class="posts-section">
            <h2>latest posts</h2>
            {% for post in site.posts limit:5 %}
            <div class="post-item">
                <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
                <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
            </div>
            {% endfor %}
        </div>

        <div class="publications-section">
            <h2>selected projects</h2>
            <div class="publication-item">
                <div class="publication-title">iOS PAC Bypass Research</div>
                <div class="publication-details">
                    Researching to bypass PAC in iOS kernel exploitation.
                </div>
            </div>
            <div class="publication-item">
                <div class="publication-title">Volatility Forecasting</div>
                <div class="publication-details">
                    Machine learning system for forecasting volatility surfaces in options markets. 
                    Built with Python, TensorFlow.
                </div>
            </div>
            <div class="publication-item">
                <div class="publication-title">Low-Latency Trading Infrastructure</div>
                <div class="publication-details">
                    High-performance trading system built in Rust and C++ for sub-microsecond order execution.
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar">
        
        <div class="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> brianroj [at] pm [dot] me</p>
            <p><strong>Location:</strong> Orlando, Florida</p>
            <p><strong>University:</strong> University Of Central Florida </p>
            <p><strong>Major:</strong> Computer Engineering & Mathematics</p>
        </div>
    </div>
</div>
