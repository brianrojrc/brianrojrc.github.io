---
layout: default
title: Home
---
<div class="contact-email">brianroj [at] pm [dot] me</div>

<header>
    <h1 class="name">Brian Rojas</h1>
</header>

<section id="about">
    <h2>About</h2>
    <p>I'm an Electrical Engineering & CS + Math student at <a href="https://www.ucf.edu/" target="_blank" style="color: var(--accent-color); font-weight: 600;">UCF</a> with interests in machine learning, quantitative finance, and robotics. I'm particularly drawn to volatility trading and the intersection of physics and financial markets.</p>
    <p>Outside academics, I explore iOS security research, nutrition, and philosophy. Currently, I work as an ML undergraduate researcher at UCF, focusing on neural network development.</p>
</section>

<section id="projects">
    <h2>Projects</h2>
    
    <div class="project-item">
        <div class="item-title">Volatility Surface Forecasting with ConvLSTM</div>
        <img src="/assets/images/vol-surface.gif" alt="Volatility Surface Forecast Animation" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">ConvLSTM neural network forecasting S&P 500 implied volatility surfaces 30 days ahead, achieving 23% lower MSE than GARCH baseline. Implements spatial-temporal modeling of the vol surface across strike and maturity dimensions with custom loss functions for no-arbitrage constraints.</p>
    </div>
    
    <div class="project-item">
        <div class="item-title">Deep Learning for Intraday Volatility Prediction</div>
        <img src="/assets/images/trading-model.png" alt="GRU Trading Model Architecture" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Training GRU + HAR + GARCH-residual hybrid models on SPY/QQQ realized variance, order book imbalance, and higher moments (skewness, kurtosis) to predict intraday volatility. Combines econometric volatility decomposition with deep learning for improved forecasting accuracy.</p>
    </div>
    
    <div class="project-item">
        <div class="item-title">Ultra-Low Latency ML Inference Pipeline</div>
        <img src="/assets/images/inference-pipeline.gif" alt="Real-time Inference Pipeline" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Deploying PyTorch → ONNX → TensorRT inference pipeline on a $200 VPS, processing L2 order flow and SEC EDGAR sentiment for position sizing and SPX option timing signals. Optimized for sub-millisecond latency using GPU acceleration and zero-copy memory transfers.</p>
    </div>
    
    <div class="project-item">
        <div class="item-title">ML-Enhanced Hierarchical Risk Parity</div>
        <img src="/assets/images/hrp-portfolio.png" alt="HRP Portfolio Construction" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Portfolio construction using Hierarchical Risk Parity with ML-forecasted covariance matrices. Replaces historical covariance estimates with predicted volatility and correlation from neural networks, improving out-of-sample Sharpe ratio by 0.4 over traditional mean-variance optimization.</p>
    </div>
    
    <div class="project-item">
        <div class="item-title">Multi-Armed Bandit for Algorithmic Trading</div>
        <img src="/assets/images/bandit-performance.png" alt="Bandit Algorithm Performance" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Implementing and comparing reinforcement learning algorithms (UCB, Thompson Sampling, Gradient Bandit) for strategy selection in non-stationary markets. Explores contextual bandits with market regime features for adaptive strategy allocation.</p>
    </div>
    
    <div class="project-item">
        <div class="item-title">iOS PAC Bypass Research</div>
        <img src="/assets/images/pac-research.png" alt="iOS PAC Architecture" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Security research exploring pointer authentication codes in iOS kernel exploitation. Investigating mitigation bypass techniques and memory corruption primitives on ARM64e architecture.</p>
    </div>
</section>

<section id="experience">
    <h2>Experience</h2>
    
    <div class="work-item">
        <div class="item-header">
            <div class="item-title">Undergraduate Research Assistant</div>
            <div class="item-date">Sept 2025 – Present</div>
        </div>
        <div class="item-subtitle">University of Central Florida</div>
        <img src="/assets/images/gnn-architecture.png" alt="Graph Neural Network Architecture" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Building graph neural network transformers pre-trained on order book data and 1M+ robot contact graphs. Investigating transfer learning between financial market microstructure and robotic manipulation tasks through shared graph representations.</p>
    </div>
    
    <div class="work-item">
        <div class="item-header">
            <div class="item-title">Machine Learning Engineer</div>
            <div class="item-date">Aug 2025 – Oct 2025</div>
        </div>
        <div class="item-subtitle">NASA SUITS</div>
        <img src="/assets/images/nasa-suits-architecture.png" alt="NASA SUITS Multi-Agent System" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        <p class="item-description">Architected a local offline AI assistant for EVA spacesuits on lunar missions using BitNet 1.58-bit quantized models and Model Context Protocol. Built a multi-agent system with Microsoft Speech SDK integration, featuring management, mission planning, telemetry monitoring, and procedural guidance agents that enable astronauts to query oxygen levels and repair procedures without ground communications. Tested in simulated HIVE environments.</p>
    </div>
</section>

<section id="education">
    <h2>Education</h2>
    
    <div class="work-item">
        <div class="item-header">
            <div class="item-title">B.Sc. Computer Engineering with Mathematics Minor</div>
            <div class="item-date">2025 – 2027</div>
        </div>
        <div class="item-subtitle">University of Central Florida</div>
    </div>
    
    <div class="work-item">
        <div class="item-header">
            <div class="item-title">A.A. Engineering & Finance</div>
            <div class="item-date">2022 – 2025</div>
        </div>
        <div class="item-subtitle">Indian River State College</div>
    </div>
</section>

<section id="writing">
    <h2>Writing</h2>
    <p>I occasionally write about my interests and thoughts. <a href="/blog" style="color: var(--accent-color);">Read my blog →</a></p>
</section>
