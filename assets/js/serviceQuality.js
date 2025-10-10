// Service Quality Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Quality Page Initialized');

    // Initialize quality animations
    initQualityAnimations();
    
    // Initialize interactive elements
    initQualityInteractiveElements();
    
    // Initialize GSAP animations if available
    initQualityGSAPAnimations();
    
    // Initialize process timeline
    initProcessTimeline();
});

function initQualityAnimations() {
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
        heroTitle.style.animation = 'fadeInUp 1s ease-out';
    }
}

function initQualityInteractiveElements() {
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

    // Certification items interaction
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Process content interaction
    const processContents = document.querySelectorAll('.process-content');
    processContents.forEach(content => {
        content.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        content.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Intro image 3D effect
    const introImage = document.querySelector('.intro-image');
    if (introImage) {
        introImage.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateY(0)';
        });
        
        introImage.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(-5deg)';
        });
    }
}

function initProcessTimeline() {
    // Add click handlers for process items
    const processItems = document.querySelectorAll('.process-item');
    processItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            processItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Scroll to center the active item
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        });
    });

    // Add hover effects to process dots
    const processDots = document.querySelectorAll('.process-dot');
    processDots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 0 0 15px rgba(215, 178, 74, 0.3)';
        });
        
        dot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 0 10px rgba(215, 178, 74, 0.2)';
        });
    });
}

function initQualityGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing quality animations');
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.from('.page-hero-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        // Intro content animation
        gsap.from('.intro-content', {
            scrollTrigger: {
                trigger: '.quality-intro',
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
            stagger: 0.15,
            ease: "power2.out"
        });
        
        // Process items animation
        gsap.from('.process-item', {
            scrollTrigger: {
                trigger: '.process-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            x: -50,
            opacity: 0,
            stagger: 0.3,
            ease: "power2.out"
        });
        
        // Certification items animation
        gsap.from('.cert-item', {
            scrollTrigger: {
                trigger: '.certification-section',
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
    document.addEventListener('DOMContentLoaded', initQualityScript);
} else {
    initQualityScript();
}

function initQualityScript() {
    console.log('Service Quality page script initialized');
    
    // Additional quality-specific functionality
    initQualitySpecificFeatures();
}

function initQualitySpecificFeatures() {
    // Add any service quality specific functionality here
    
    // Example: Quality consultation form handler
    const qualityForm = document.getElementById('quality-consultation-form');
    if (qualityForm) {
        qualityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Quality consultation form submitted');
        });
    }
    
    // Add loading states for quality service buttons
    const qualityButtons = document.querySelectorAll('.btn-primary');
    qualityButtons.forEach(button => {
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
    
    // Animate process numbers
    const processNumbers = document.querySelectorAll('.process-number');
    processNumbers.forEach(number => {
        number.style.opacity = '0.2';
        number.style.transition = 'opacity 0.3s ease';
        
        const parentContent = number.closest('.process-content');
        if (parentContent) {
            parentContent.addEventListener('mouseenter', function() {
                number.style.opacity = '0.5';
            });
            
            parentContent.addEventListener('mouseleave', function() {
                number.style.opacity = '0.2';
            });
        }
    });
    
    // Certification links interaction
    const certLinks = document.querySelectorAll('.cert-link');
    certLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(-5px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initQualityAnimations,
        initQualityInteractiveElements,
        initQualityGSAPAnimations,
        initProcessTimeline
    };
}