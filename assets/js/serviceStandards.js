// Service Standards Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Standards Page Initialized');

    // Initialize standards animations
    initStandardsAnimations();
    
    // Initialize interactive elements
    initStandardsInteractiveElements();
    
    // Initialize GSAP animations if available
    initStandardsGSAPAnimations();
    
    // Initialize process steps
    initProcessSteps();
});

function initStandardsAnimations() {
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

function initStandardsInteractiveElements() {
    // Standard cards interaction
    const standardCards = document.querySelectorAll('.standard-card');
    standardCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
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

    // Service features interaction
    const serviceFeatures = document.querySelectorAll('.service-features li');
    serviceFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(215, 178, 74, 0.05)';
            this.style.paddingRight = '15px';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.paddingRight = '18px';
        });
    });

    // Service image interaction
    const serviceImage = document.querySelector('.service-image');
    if (serviceImage) {
        serviceImage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        serviceImage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

function initProcessSteps() {
    // Add hover effects to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1.1)';
                number.style.boxShadow = '0 8px 20px rgba(110, 63, 32, 0.4)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1)';
                number.style.boxShadow = '0 5px 15px rgba(110, 63, 32, 0.3)';
            }
        });

        // Add click functionality to process steps
        step.addEventListener('click', function() {
            // Remove active class from all steps
            processSteps.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked step
            this.classList.add('active');
            
            // Scroll to center the active step
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        });
    });

    // Add animation to process line
    const processLine = document.querySelector('.process-steps::before');
    if (processLine) {
        // This would be handled by CSS, but we can add additional JS if needed
    }
}

function initStandardsGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing standards animations');
        
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
        
        // Standard cards animation
        gsap.from('.standard-card', {
            scrollTrigger: {
                trigger: '.standards-section',
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
        
        // Benefit cards animation
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
        
        // Process steps animation
        gsap.from('.process-step', {
            scrollTrigger: {
                trigger: '.process-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.3,
            ease: "power2.out"
        });
    } else {
        console.log('GSAP not available, using basic animations');
    }
}

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStandardsScript);
} else {
    initStandardsScript();
}

function initStandardsScript() {
    console.log('Service Standards page script initialized');
    
    // Additional standards-specific functionality
    initStandardsSpecificFeatures();
}

function initStandardsSpecificFeatures() {
    // Add any service standards specific functionality here
    
    // Example: Standards consultation form handler
    const standardsForm = document.getElementById('standards-consultation-form');
    if (standardsForm) {
        standardsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Standards consultation form submitted');
        });
    }
    
    // Add loading states for standards service buttons
    const standardsButtons = document.querySelectorAll('.btn-primary');
    standardsButtons.forEach(button => {
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
    
    // Animate standard cards on hover
    const standardCards = document.querySelectorAll('.standard-card');
    standardCards.forEach(card => {
        const header = card.querySelector('.standard-header');
        if (header) {
            card.addEventListener('mouseenter', function() {
                header.style.background = 'var(--gradient-secondary)';
            });
            
            card.addEventListener('mouseleave', function() {
                header.style.background = 'var(--gradient-primary)';
            });
        }
    });
    
    // Benefit icons animation
    const benefitIcons = document.querySelectorAll('.benefit-icon');
    benefitIcons.forEach(icon => {
        icon.style.transition = 'all 0.4s ease';
    });
    
    // Process numbers animation
    const processNumbers = document.querySelectorAll('.step-number');
    processNumbers.forEach(number => {
        number.style.transition = 'all 0.3s ease';
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initStandardsAnimations,
        initStandardsInteractiveElements,
        initStandardsGSAPAnimations,
        initProcessSteps
    };
}