// main.js - Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Souvenir Egypt Store initialized');
    
    // Initialize all core functionality
    initializeCoreFeatures();
    
    // Initialize enhanced navigation
    initializeEnhancedNavigation();
    
    // Initialize performance monitoring
    initializePerformanceMonitoring();
});

function initializeCoreFeatures() {
    // Initialize smooth scroll
    if (typeof initSmoothScroll === 'function') {
        try {
            const scrollbar = initSmoothScroll();
            window.scrollbar = scrollbar; // Make scrollbar globally available
            
            // Initialize scroll to top button
            if (typeof setupScrollToTop === 'function') {
                setupScrollToTop();
            }
        } catch (error) {
            console.warn('Smooth scroll initialization failed:', error);
            initializeFallbackScroll();
        }
    } else {
        initializeFallbackScroll();
    }
    
    // Initialize language switcher
    if (typeof switchLanguage === 'function') {
        // Get saved language from localStorage or default to English
        const savedLang = localStorage.getItem('preferred-language') || 'en';
        switchLanguage(savedLang);
        
        // Save language preference when changed
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                localStorage.setItem('preferred-language', btn.dataset.lang);
            });
        });
    }
    
    // Initialize smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize lazy loading for images
    initializeLazyLoading();
}

function initializeFallbackScroll() {
    console.log('Using fallback scroll behavior');
    document.body.style.overflow = 'auto';
    
    // Initialize native scroll to top
    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add("active");
            } else {
                scrollTopBtn.classList.remove("active");
            }
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scrollToElement(targetElement);
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

function scrollToElement(element) {
    const offset = 70; // Header height
    const targetPosition = element.offsetTop - offset;
    
    if (window.scrollbar) {
        // Use smooth scrollbar if available
        window.scrollbar.scrollTo(0, targetPosition, 800);
    } else {
        // Use native smooth scrolling
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
}

function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && navMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('nav ul');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (navMenu) {
        navMenu.classList.remove('show');
    }
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

function initializeLazyLoading() {
    // Simple lazy loading implementation
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

function initializeEnhancedNavigation() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            highlightActiveNavigation(event.state.section);
        }
    });
    
    // Update active navigation on scroll
    if (window.scrollbar) {
        window.scrollbar.addListener((status) => {
            updateActiveNavigationOnScroll(status.offset.y);
        });
    } else {
        window.addEventListener('scroll', () => {
            updateActiveNavigationOnScroll(window.scrollY);
        });
    }
    
    // Add category view tracking
    window.addEventListener('beforeunload', function() {
        const lastCategory = sessionStorage.getItem('last_category_viewed');
        if (lastCategory) {
            trackCategoryViewTime(lastCategory);
        }
    });
}

function updateActiveNavigationOnScroll(scrollPosition) {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = 70;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    highlightActiveNavigation(currentSection);
}

function highlightActiveNavigation(activeSection) {
    // Remove active class from all navigation items
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    const activeLink = document.querySelector(`nav a[href="#${activeSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function trackCategoryViewTime(categoryKey) {
    const viewStartTime = sessionStorage.getItem('last_category_viewed_time');
    if (viewStartTime) {
        const viewDuration = new Date() - new Date(viewStartTime);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'category_view_time', {
                'category_id': categoryKey,
                'view_duration': Math.round(viewDuration / 1000) // in seconds
            });
        }
        
        // Log for debugging
        console.log(`Time spent on ${categoryKey}: ${Math.round(viewDuration / 1000)} seconds`);
    }
}

function initializePerformanceMonitoring() {
    // Monitor page performance
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                
                console.log(`Page Load Time: ${loadTime}ms`);
                console.log(`DOM Ready Time: ${domReadyTime}ms`);
                
                // Send to analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'timing_complete', {
                        'name': 'page_load',
                        'value': loadTime,
                        'event_category': 'Load Performance'
                    });
                }
            }, 0);
        });
    }
    
    // Monitor largest contentful paint
    if ('PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('LCP:', entry);
                }
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.warn('PerformanceObserver not supported:', e);
        }
    }
}

// Error boundary for unhandled errors
window.addEventListener('error', function(e) {
    console.error('Unhandled error:', e.error);
    
    // Send to error tracking service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error?.message || 'Unknown error',
            'fatal': false
        });
    }
});

// Make utility functions globally available
window.utils = {
    scrollToElement,
    closeMobileMenu,
    switchLanguage: window.switchLanguage
};