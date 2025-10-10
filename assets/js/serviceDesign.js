// Service Design Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Design Page Initialized');

    // Initialize animations
    initDesignAnimations();
    
    // Initialize interactive elements
    initDesignInteractiveElements();
    
    // Initialize GSAP animations if available
    initDesignGSAPAnimations();
});

function initDesignAnimations() {
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

function initDesignInteractiveElements() {
    // Add hover effects to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1.1)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1)';
            }
        });
    });

    // Add click handlers for feature items
    const featureItems = document.querySelectorAll('.service-features li');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Benefit cards interaction
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Portfolio items interaction (if portfolio section is uncommented)
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initDesignGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing design animations');
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.from('.page-hero-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        // Service content animation
        gsap.from('.service-content', {
            scrollTrigger: {
                trigger: '.service-detail',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Process steps animation
        gsap.from('.process-step', {
            scrollTrigger: {
                trigger: '.process-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 40,
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
        
        // Portfolio items animation (if portfolio section is uncommented)
        gsap.from('.portfolio-item', {
            scrollTrigger: {
                trigger: '.portfolio-section',
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
    } else {
        console.log('GSAP not available, using basic animations');
    }
}

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDesignScript);
} else {
    initDesignScript();
}

function initDesignScript() {
    console.log('Service Design page script initialized');
    
    // Additional design-specific functionality
    initDesignSpecificFeatures();
}

function initDesignSpecificFeatures() {
    // Add any service design specific functionality here
    
    // Example: Design consultation form handler
    const designForm = document.getElementById('design-consultation-form');
    if (designForm) {
        designForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Design consultation form submitted');
        });
    }
    
    // Add loading states for design service buttons
    const designButtons = document.querySelectorAll('.btn-primary');
    designButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
                
                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = originalText;
                }, 2000);
            }
        });
    });
    
    // Process steps counter animation
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((number, index) => {
        number.style.animationDelay = `${index * 0.2}s`;
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initDesignAnimations,
        initDesignInteractiveElements,
        initDesignGSAPAnimations
    };
}