// Service Training specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll first
    if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
    }

    // Animation on scroll for service training page
    const animateElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Add additional animation classes based on element type
                if (entry.target.classList.contains('program-card')) {
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(el => {
        // Set initial state for animation
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Program cards hover effects
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('animated')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
            this.style.boxShadow = 'var(--shadow)';
        });
    });

    // Benefit cards hover effects
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });

    // Process steps animation and hover effects
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        // Staggered animation delay
        step.style.transitionDelay = `${index * 0.2}s`;
        
        // Hover effect for process steps
        step.addEventListener('mouseenter', function() {
            const stepNumber = this.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.transform = 'scale(1.15) rotate(5deg)';
                stepNumber.style.boxShadow = '0 10px 25px rgba(110, 63, 32, 0.4)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            const stepNumber = this.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.transform = 'scale(1) rotate(0)';
                stepNumber.style.boxShadow = '0 5px 15px rgba(110, 63, 32, 0.3)';
            }
        });
    });

    // Service image animation and interaction
    const serviceImage = document.querySelector('.service-image');
    if (serviceImage) {
        serviceImage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotate(2deg)';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        serviceImage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) rotate(0)';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });

        // Click effect for service image
        serviceImage.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) scale(1)';
            }, 150);
        });
    }

    // Service features list interaction
    const serviceFeatures = document.querySelectorAll('.service-features li');
    serviceFeatures.forEach((feature, index) => {
        feature.style.transitionDelay = `${index * 0.1}s`;
        
        feature.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.background = 'var(--gradient-secondary)';
                icon.style.color = 'white';
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.background = 'rgba(110, 63, 32, 0.1)';
                icon.style.color = 'var(--color-secondary)';
            }
        });
    });

    // Program features interaction
    const programFeatures = document.querySelectorAll('.program-features li');
    programFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.paddingRight = '15px';
            this.style.background = 'rgba(215, 178, 74, 0.05)';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.3)';
                icon.style.color = 'var(--color-primary)';
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.paddingRight = '0';
            this.style.background = 'transparent';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = 'var(--color-secondary)';
            }
        });
    });

    // Add click handlers for program cards to show more details
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            const programTitle = this.querySelector('.program-title').textContent;
            const programPrice = this.querySelector('.program-price').textContent;
            const programDuration = this.querySelector('.program-duration-text').textContent;
            
            // Create a simple modal or alert with program details
            showProgramDetails(programTitle, programPrice, programDuration);
        });
    });

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(215, 178, 74, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 6px 20px rgba(215, 178, 74, 0.4)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (typeof scrollbar !== 'undefined') {
                    // Use smooth scrollbar if available
                    scrollbar.scrollIntoView(targetElement, {
                        offsetTop: -80,
                        alignToTop: true
                    });
                } else {
                    // Fallback to normal smooth scroll
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.classList.add('loaded');
        });
        
        // Check if image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
            img.classList.add('loaded');
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
        }
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            
            // Animate hamburger icon
            const icon = this.querySelector('i');
            if (icon) {
                if (!isVisible) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Adjust mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navLinks.style.display = 'flex';
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            width: 0;
            height: 3px;
            background: var(--gradient-secondary);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    createScrollProgress();

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Tab key navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add GSAP animations if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        initGSAPAnimations();
    }

    // Performance optimization: Lazy load non-critical elements
    const lazyLoadElements = () => {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.src = element.dataset.src;
                    element.classList.remove('lazy');
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    };
    lazyLoadElements();

    // Add error handling for images
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.opacity = '1';
            this.alt = 'Image not available';
            console.warn('Image failed to load:', this.src);
        });
    });

    // Initialize all components
    initAllComponents();
});

// GSAP Animations
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate service content on scroll
    gsap.from('.service-text', {
        scrollTrigger: {
            trigger: '.service-detail',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });

    gsap.from('.service-image', {
        scrollTrigger: {
            trigger: '.service-detail',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Animate program cards sequentially
    gsap.from('.program-card', {
        scrollTrigger: {
            trigger: '.programs-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate process steps
    gsap.from('.process-step', {
        scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Animate benefit cards
    gsap.from('.benefit-card', {
        scrollTrigger: {
            trigger: '.benefits-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });

    // Animate CTA section
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Floating animation for service image
    gsap.to('.service-image', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// Program details modal function
function showProgramDetails(title, price, duration) {
    // Create a simple modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: var(--border-radius);
        text-align: center;
        max-width: 500px;
        width: 90%;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: var(--color-primary); margin-bottom: 20px;">${title}</h3>
        <p style="color: var(--color-text); margin-bottom: 15px;"><strong>المدة:</strong> ${duration}</p>
        <p style="color: var(--color-primary); font-size: 1.3rem; font-weight: bold; margin-bottom: 25px;">${price}</p>
        <p style="color: #666; margin-bottom: 30px;">للتسجيل في هذا البرنامج أو الحصول على مزيد من المعلومات، يرجى التواصل معنا.</p>
        <button class="btn btn-primary" onclick="closeModal(this)">تواصل معنا</button>
        <button class="btn btn-secondary" onclick="closeModal(this)" style="margin-right: 15px;">إغلاق</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}

// Close modal function
function closeModal(element) {
    const modal = element.closest('div[style*="position: fixed"]');
    if (modal) {
        modal.style.opacity = '0';
        const content = modal.querySelector('div');
        if (content) {
            content.style.transform = 'scale(0.9)';
        }
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
}

// Initialize all components
function initAllComponents() {
    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove loading spinner if exists
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    });

    // Add resize debouncer
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Re-initialize components that depend on window size
            if (typeof scrollbar !== 'undefined') {
                scrollbar.update();
            }
        }, 250);
    });

    // Add print styles
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });

    // Error boundary for the script
    try {
        // Additional initialization code can go here
        console.log('Service Training JS initialized successfully');
    } catch (error) {
        console.error('Error initializing Service Training JS:', error);
    }
}

// Utility functions
const ServiceTrainingUtils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Format price for display
    formatPrice: function(price) {
        return price.replace(/\d+/g, num => new Intl.NumberFormat('ar-EG').format(num));
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initServiceTraining: function() {
            document.addEventListener('DOMContentLoaded', function() {
                // Re-export main initialization
            });
        },
        utils: ServiceTrainingUtils
    };
}

// Fallback for older browsers
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported, falling back to basic animations');
    document.addEventListener('DOMContentLoaded', function() {
        const animateElements = document.querySelectorAll('.animate');
        animateElements.forEach(el => {
            el.classList.add('animated');
        });
    });
}