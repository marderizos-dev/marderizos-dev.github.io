// Toggle navbar visibility on mobile
document.addEventListener('DOMContentLoaded', function() {
    const navbarFavicon = document.querySelector('.navbar-favicon');
    const navLinks = document.getElementById('nav-links');

    navbarFavicon.addEventListener('click', function() {
        navLinks.classList.toggle('visible');
    });

    const navbarFaviconMobile = document.querySelector('.navbar-mobile .navbar-favicon');
    const navLinksMobile = document.querySelector('.navbar-mobile .nav-links');

    if (navbarFaviconMobile) {
        navbarFaviconMobile.addEventListener('click', function() {
            navLinksMobile.classList.toggle('visible');
        });
    }
});

function toggleMobileMenu() {
    const mobileLinks = document.getElementById('mobile-links');
    mobileLinks.classList.toggle('show');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobile-links').classList.remove('show');
        });
    });
});

// Close mobile menu when scrolling
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.getElementById('mobile-links').classList.remove('show');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
