// Service Consulting Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Consulting Page Initialized');

    // Initialize animations
    initAnimations();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize GSAP animations if available
    initGSAPAnimations();
});

function initAnimations() {
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Add delay for staggered animation
                    const index = Array.from(animateElements).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Add animation to hero text
    const heroTitle = document.querySelector('.page-hero-title');
    if (heroTitle) {
        heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    }
    
    // Initialize pulse animations
    const pulseElements = document.querySelectorAll('.pulse');
    pulseElements.forEach(el => {
        el.style.animation = 'pulse 2s infinite';
    });
    
    // Initialize floating animations
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
        el.style.animation = 'floating 3s ease-in-out infinite';
    });
}

function initInteractiveElements() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for feature items
    const featureItems = document.querySelectorAll('.service-features li');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing advanced animations');
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.from('.page-hero-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        // Service cards staggered animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.consulting-services',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Approach steps animation
        gsap.from('.approach-step', {
            scrollTrigger: {
                trigger: '.approach-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            stagger: 0.3,
            ease: "power2.out"
        });
        
        // Benefits cards animation
        gsap.from('.benefit-card', {
            scrollTrigger: {
                trigger: '.benefits-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.15,
            ease: "power2.out"
        });
    } else {
        console.log('GSAP not available, using basic animations');
    }
}

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScript);
} else {
    initScript();
}

function initScript() {
    console.log('Service Consulting page script initialized');
    
    // Additional page-specific functionality can be added here
    initPageSpecificFeatures();
}

function initPageSpecificFeatures() {
    // Add any service consulting specific functionality here
    
    // Example: Consultation form handler (if you add a form later)
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Consultation form submitted');
        });
    }
    
    // Add loading states for buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
                
                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = 'اطلب الخدمة الآن <i class="fas fa-arrow-left"></i>';
                }, 2000);
            }
        });
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAnimations,
        initInteractiveElements,
        initGSAPAnimations
    };
}