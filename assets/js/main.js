// Add to assets/js/main.js

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
