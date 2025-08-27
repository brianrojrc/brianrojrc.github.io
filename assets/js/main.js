function initMathAnimation() {
    const mathSymbols = [
        '∫', '∂f/∂x', 'σ²', '∇', 'dW', 'π', '∞', 'Σ', 'λ', '∆', 
        'E[X]', '∂²V/∂S²', 'ℝ', '∮', 'θ', 'lim', '∀', '∃', '≈', '∴',
        'log', 'exp', 'sin', 'cos', 'dx', 'dy', 'μ', 'ρ', 'φ', 'ψ'
    ];
    
    const mathBackground = document.querySelector('.math-background');
    if (!mathBackground) return;
    
    function createMathSymbol() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        
        const symbol = document.createElement('div');
        symbol.className = 'math-symbol';
        symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.animationDuration = (20 + Math.random() * 15) + 's';
        symbol.style.fontSize = (18 + Math.random() * 14) + 'px';
        
        mathBackground.appendChild(symbol);
        
        setTimeout(() => {
            if (symbol.parentNode) {
                symbol.parentNode.removeChild(symbol);
            }
        }, 35000);
    }
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createMathSymbol(), i * 2000);
    }
    
    setInterval(createMathSymbol, 3000);
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    initMathAnimation();
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 500);
});
