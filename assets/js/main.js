function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Close mobile menu when clicking nav links
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.getElementById('navLinks');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks && menuToggle && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});
