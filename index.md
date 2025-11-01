---
layout: default
title: Home
---

<div class="contact-email">brianroj [at] pm [dot] me</div>

## About

I'm an EE & CS + Math student at UCF specializing in machine learning for quantitative finance.  
I'm drawn to the intersection of deep learning and trading systems—where predictive modeling meets real-time constraints and market dynamics.

I approach quantitative trading as a research problem first and do it for fun.  

Currently working as an ML undergrad researcher at UCF, focusing on building and training neural network models.

---

## What I'm Working On

**Deep Learning for Trading Strategies**  
Training GRU + HAR + GARCH-residual models on 1-minute SPY/QQQ realized variance, order book imbalance, and kurtosis to predict 1–22 day volatility — achieving 17% lower RMSE vs. GJR-GARCH in purged walk-forward validation.

**Ultra-Low Latency ML Infrastructure**  
Deploying PyTorch → ONNX → TensorRT inference on a $200 VPS, processing L2 order flow and SEC EDGAR sentiment in <40ms — powering live vol-targeted position sizing and SPX option timing signals.

---

## Experience

**University of Central Florida**  
Orlando, FL  
August 2025 – Present  
Undergraduate Research Assistant  

Developed and fine-tuned neural network architectures (e.g., GRU + attention) for time-series forecasting in financial markets, achieving 17% RMSE reduction vs. GARCH baselines on SPY/QQQ datasets.  
Collaborated on low-latency ML pipelines using PyTorch → ONNX → TensorRT, processing high-frequency order book data for real-time volatility regime detection.  
Contributed to open-source repos on equity vol modeling, emphasizing purged walk-forward validation and SHAP explainability for production-grade deployment.

**NASA SUITS**  
Houston, TX (Virtual Collaboration with SpaceX Integration)  
August 2025 – October 2025  
Machine Learning Engineer  

Engineered a local, offline AI chat assistant for EVA spacesuits during lunar missions, enabling astronauts to query oxygen levels and repair procedures mid-spacewalk without ground comms — integrated with SpaceX Dragon telemetry feeds for simulations.  
Implemented end-to-end voice pipeline.  
Designed system prompts for mission-phase awareness (egress/repair/ingress), ensuring hallucination-free responses.  
Tested in simulated HIVE environments, reducing query resolution time by 40% vs. manual checks.

---

## Projects

**Volatility Surface Forecasting**  
Neural network system for modeling and forecasting volatility surfaces in options markets.  
Handles high-dimensional option data and learns complex surface dynamics across strikes and expirations.

**Low-Latency Trading Infrastructure**  
High-performance order execution system built in Rust and C++ with microsecond-level latency.  
Designed for processing market data streams and executing strategies in real time.

**iOS PAC Bypass Research**  
Security research exploring pointer authentication codes in iOS kernel exploitation.  
Investigating memory safety mechanisms and potential vulnerabilities.

---

## Goals

Build RL-driven ML systems that predict market dynamics.  
Run a solo lab fusing research and execution where turning data into alpha and autonomy.

