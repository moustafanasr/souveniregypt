// Services Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Services Page Initialized');

    // Initialize services animations
    initServicesAnimations();
    
    // Initialize interactive elements
    initServicesInteractiveElements();
    
    // Initialize GSAP animations if available
    initServicesGSAPAnimations();
    
    // Initialize FAQ accordion
    initFAQAccordion();
});

function initServicesAnimations() {
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

function initServicesInteractiveElements() {
    // Service cards interaction
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Testimonial cards interaction
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Process steps interaction
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1.1)';
                number.style.background = 'var(--color-secondary)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            const number = this.querySelector('.step-number');
            if (number) {
                number.style.transform = 'scale(1)';
                number.style.background = 'var(--color-primary)';
            }
        });
    });

    // Service buttons interaction
    const serviceButtons = document.querySelectorAll('.btn-primary');
    serviceButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(item => {
                    if (item !== answer && item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.previousElementSibling.classList.remove('active');
                        item.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current answer
                this.classList.toggle('active');
                answer.classList.toggle('active');
                
                // Rotate icon
                if (icon) {
                    if (this.classList.contains('active')) {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
                
                // Smooth height transition
                if (answer.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
            });
        });

        // Open first FAQ by default
        if (faqQuestions.length > 0) {
            const firstQuestion = faqQuestions[0];
            const firstAnswer = firstQuestion.nextElementSibling;
            const firstIcon = firstQuestion.querySelector('i');
            
            firstQuestion.classList.add('active');
            firstAnswer.classList.add('active');
            firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
            if (firstIcon) {
                firstIcon.style.transform = 'rotate(180deg)';
            }
        }
    }
}

function initServicesGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing services animations');
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.from('.page-hero-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        // Service cards animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
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
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Testimonial cards animation
        gsap.from('.testimonial-card', {
            scrollTrigger: {
                trigger: '.testimonials-section',
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
        
        // FAQ items animation
        gsap.from('.faq-item', {
            scrollTrigger: {
                trigger: '.faq-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    } else {
        console.log('GSAP not available, using basic animations');
    }
}

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesScript);
} else {
    initServicesScript();
}

function initServicesScript() {
    console.log('Services page script initialized');
    
    // Additional services-specific functionality
    initServicesSpecificFeatures();
}

function initServicesSpecificFeatures() {
    // Add any services-specific functionality here
    
    // Example: Service filtering functionality (if needed in future)
    const serviceFilterButtons = document.querySelectorAll('.service-filter');
    if (serviceFilterButtons.length > 0) {
        serviceFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                serviceFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter services based on category
                const filterValue = this.getAttribute('data-filter');
                filterServices(filterValue);
            });
        });
    }
    
    // Add loading states for service buttons
    const serviceActionButtons = document.querySelectorAll('.btn-primary');
    serviceActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التوجيه...';
                
                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = originalText;
                }, 1500);
            }
        });
    });
    
    // Service features highlight on hover
    const serviceFeatures = document.querySelectorAll('.service-features li');
    serviceFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(215, 178, 74, 0.05)';
            this.style.paddingRight = '15px';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.paddingRight = '10px';
        });
    });
}

// Service filtering function (for future use)
function filterServices(category) {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initServicesAnimations,
        initServicesInteractiveElements,
        initServicesGSAPAnimations,
        initFAQAccordion,
        filterServices
    };
}