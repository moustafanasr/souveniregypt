// Service Marketing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Marketing Page Initialized');

    // Initialize marketing animations
    initMarketingAnimations();
    
    // Initialize interactive elements
    initMarketingInteractiveElements();
    
    // Initialize GSAP animations if available
    initMarketingGSAPAnimations();
    
    // Initialize strategy tabs
    initStrategyTabs();
});

function initMarketingAnimations() {
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

function initMarketingInteractiveElements() {
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

    // Success cards interaction
    const successCards = document.querySelectorAll('.success-card');
    successCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
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

    // Market points interaction (if markets section is uncommented)
    const marketPoints = document.querySelectorAll('.market-point');
    marketPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
            this.style.boxShadow = '0 0 0 15px rgba(215, 178, 74, 0.4)';
        });
        
        point.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
            this.style.boxShadow = '0 0 0 10px rgba(215, 178, 74, 0.3)';
        });
    });
}

function initStrategyTabs() {
    const strategyTabs = document.querySelectorAll('.strategy-tab');
    
    strategyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            strategyTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all strategy items
            document.querySelectorAll('.strategy-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected strategy item
            const tabId = this.getAttribute('data-tab');
            const targetItem = document.getElementById(tabId);
            if (targetItem) {
                targetItem.classList.add('active');
                
                // Add animation to the newly active item
                targetItem.style.animation = 'fadeIn 0.5s ease';
            }
        });
    });
}

function initMarketingGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('GSAP and ScrollTrigger available, initializing marketing animations');
        
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
                trigger: '.marketing-intro',
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
        
        // Services cards animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-section',
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
        
        // Success cards animation
        gsap.from('.success-card', {
            scrollTrigger: {
                trigger: '.success-section',
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
        
        // Strategy section animation
        gsap.from('.strategy-container', {
            scrollTrigger: {
                trigger: '.strategy-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 40,
            opacity: 0,
            ease: "power2.out"
        });
    } else {
        console.log('GSAP not available, using basic animations');
    }
}

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMarketingScript);
} else {
    initMarketingScript();
}

function initMarketingScript() {
    console.log('Service Marketing page script initialized');
    
    // Additional marketing-specific functionality
    initMarketingSpecificFeatures();
}

function initMarketingSpecificFeatures() {
    // Add any service marketing specific functionality here
    
    // Example: Marketing consultation form handler
    const marketingForm = document.getElementById('marketing-consultation-form');
    if (marketingForm) {
        marketingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Marketing consultation form submitted');
        });
    }
    
    // Add loading states for marketing service buttons
    const marketingButtons = document.querySelectorAll('.btn-primary');
    marketingButtons.forEach(button => {
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
    
    // Animate success numbers
    const successNumbers = document.querySelectorAll('.success-number');
    successNumbers.forEach(number => {
        const targetValue = parseInt(number.textContent);
        let currentValue = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= targetValue) {
                            currentValue = targetValue;
                            clearInterval(timer);
                        }
                        number.textContent = Math.floor(currentValue) + (number.textContent.includes('%') ? '%' : '+');
                    }, 16);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(number);
    });
}

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMarketingAnimations,
        initMarketingInteractiveElements,
        initMarketingGSAPAnimations,
        initStrategyTabs
    };
}