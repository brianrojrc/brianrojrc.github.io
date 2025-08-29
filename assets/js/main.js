// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth > 968) {
        mobileMenu.classList.remove('open');
    }
});

// Font toggle functionality (your existing code)
function toggleFont() {
    const body = document.body;
    const currentFont = body.getAttribute('data-font');
    
    if (currentFont === 'mono') {
        body.removeAttribute('data-font');
        localStorage.setItem('font-preference', 'sans');
    } else {
        body.setAttribute('data-font', 'mono');
        localStorage.setItem('font-preference', 'mono');
    }
}

// Load saved font preference
document.addEventListener('DOMContentLoaded', () => {
    const savedFont = localStorage.getItem('font-preference');
    if (savedFont === 'mono') {
        document.body.setAttribute('data-font', 'mono');
    }
});
