// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize about page
    initAboutPage();
});

function initAboutPage() {
    // Initialize animations
    initStatsCounter();
    initScrollAnimations();
    initTeamHoverEffects();
    initFeatureCards();
    
    // Add smooth scrolling for internal links
    initSmoothScrolling();
    
    // Add loading animations
    initLoadingAnimations();
}

// Statistics Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    if (!statNumbers.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-count'));
                animateCounter(statNumber, target);
                observer.unobserve(statNumber);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = Math.floor(duration / target);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.story-content, .mission-vision-grid, .impact-stats, .team-grid, .features-grid, .cta-content'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => observer.observe(element));
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Team Member Hover Effects
function initTeamHoverEffects() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        });
    });
}

// Feature Cards Animation
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1)';
            icon.style.background = 'var(--dark-blue)';
            
            const iconElement = icon.querySelector('i');
            if (iconElement) {
                iconElement.style.color = 'var(--desert-gold)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1)';
            icon.style.background = 'var(--desert-gold)';
            
            const iconElement = icon.querySelector('i');
            if (iconElement) {
                iconElement.style.color = 'var(--dark-blue)';
            }
        });
    });
}

// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
    // Smooth scroll for anchor links within the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            // Check if it's an internal link (not external URL)
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Loading Animations
function initLoadingAnimations() {
    // Add loading class to images for fade-in effect
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Check if image is already loaded
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.classList.add('loading');
            img.addEventListener('load', function() {
                this.classList.remove('loading');
                this.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                this.classList.remove('loading');
                this.classList.add('error');
                console.error('Failed to load image:', this.src);
            });
        }
    });
    
    // Add CSS for image loading animations
    const imageStyles = document.createElement('style');
    imageStyles.textContent = `
        img.loading {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        img.loaded {
            opacity: 1;
            animation: fadeIn 0.5s ease;
        }
        
        img.error {
            opacity: 0.5;
            filter: grayscale(100%);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(imageStyles);
}

// Page load animation
window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
    
    // Add CSS for page load animation
    const pageStyle = document.createElement('style');
    pageStyle.textContent = `
        .page-loaded .about-hero {
            animation: slideDown 1s ease;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(pageStyle);
});

// Make functions available globally
window.aboutPage = {
    init: initAboutPage,
    animateStats: initStatsCounter,
    initScrollAnimations: initScrollAnimations
};