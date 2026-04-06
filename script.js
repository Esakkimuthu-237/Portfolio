document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
    
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileMenu.classList.add("open");
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenu.classList.remove("open");
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }

    menuBtn.addEventListener("click", toggleMenu);
    
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(isMenuOpen) toggleMenu();
        });
    });

    // 2. Sticky Navbar & Active Link
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Scroll Reveal Animation
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Play once
            }
        });
    }, observerOptions);
    
    fadeUpElements.forEach(el => observer.observe(el));

    // 4. Blob Follow Cursor
    const blob = document.getElementById("blob");
    
    document.body.onpointermove = event => { 
        const { clientX, clientY } = event;
        
        // Use animation for smooth movement tracking
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    }
});
