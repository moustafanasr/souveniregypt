// Homepage specific JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Initialize smooth scroll first
    if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
    }
    
    // Homepage animation code
    const animatedElements = document.querySelectorAll(
        ".product-item, .service-item, .testimonial-item, .about-text, .about-image"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    animatedElements.forEach((el) => {
        el.style.opacity = "0";
        observer.observe(el);
    });

    // Service items hover effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Product items hover effects
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Update smooth scrolling for navigation links to work with smooth scrollbar
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement && typeof scrollbar !== 'undefined') {
                // Use smooth scrollbar if available
                scrollbar.scrollIntoView(targetElement, {
                    offsetTop: -80,
                    alignToTop: true
                });
            } else if (targetElement) {
                // Fallback to normal smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});