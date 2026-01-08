// home.js - Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            let message;
            
            if (window.currentLang === 'en') {
                message = `Thank you for subscribing with ${email}! You'll receive our newsletter soon.`;
            } else if (window.currentLang === 'it') {
                message = `Grazie per esserti iscritto con ${email}! Riceverai presto la nostra newsletter.`;
            } else if (window.currentLang === 'fr') {
                message = `Merci de vous être abonné avec ${email} ! Vous recevrez bientôt notre newsletter.`;
            }
            
            alert(message);
            this.reset();
        });
    }
    
    // Category card interactions - Complete navigation logic
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Define category URLs mapping
    const categoryUrls = {
        'jewelry': '/shop/jewelry',
        'pottery': '/shop/pottery', 
        'leather': '/shop/leather',
        'rugs': '/shop/rugs',
        'cotton': '/shop/cotton'
    };
    
    // Define category data for analytics and tracking
    const categoryData = {
        'jewelry': {
            id: 'cat-jewelry',
            name: 'Jewelry',
            products: 42
        },
        'pottery': {
            id: 'cat-pottery', 
            name: 'Pottery',
            products: 28
        },
        'leather': {
            id: 'cat-leather',
            name: 'Leather Products',
            products: 35
        },
        'rugs': {
            id: 'cat-rugs',
            name: 'Rugs & Kilims',
            products: 19
        },
        'cotton': {
            id: 'cat-cotton',
            name: 'Egyptian Cotton',
            products: 56
        }
    };

    categoryCards.forEach(card => {
        // Add click event for navigation
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent.trim().toLowerCase();
            const categoryKey = getCategoryKey(categoryName);
            
            // Track category click for analytics
            trackCategoryClick(categoryKey, categoryData[categoryKey]?.name);
            
            // Navigate to category page
            navigateToCategory(categoryKey);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            enhanceCardHover(this);
        });
        
        card.addEventListener('mouseleave', function() {
            resetCardHover(this);
        });
        
        // Add keyboard navigation support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Function to get category key from text
    function getCategoryKey(categoryName) {
        const keyMap = {
            'jewelry': 'jewelry',
            'pottery': 'pottery',
            'leather products': 'leather',
            'leather': 'leather',
            'rugs & kilims': 'rugs',
            'rugs': 'rugs',
            'egyptian cotton': 'cotton',
            'cotton': 'cotton'
        };
        
        return keyMap[categoryName] || categoryName;
    }
    
    // Function to navigate to category page
    function navigateToCategory(categoryKey) {
        const url = categoryUrls[categoryKey];
        
        if (url) {
            // Show loading state
            showCategoryLoading(categoryKey);
            
            // Simulate API call or page transition
            setTimeout(() => {
                // In a real application, this would be:
                // window.location.href = url;
                
                // For demo purposes, show a message
                showCategoryRedirectMessage(categoryData[categoryKey]?.name);
                
                // Alternatively, you can use:
                // window.open(url, '_self');
                
            }, 500);
        } else {
            console.warn(`No URL found for category: ${categoryKey}`);
            // Fallback to shop page
            window.location.href = '/shop';
        }
    }
    
    // Function to track category clicks for analytics
    function trackCategoryClick(categoryKey, categoryName) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'select_category', {
                'category_name': categoryName,
                'category_id': categoryKey
            });
        }
        
        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'ViewCategory', {
                content_name: categoryName,
                content_category: 'Handcrafts',
                content_ids: [categoryKey]
            });
        }
        
        // Custom analytics
        console.log(`Category clicked: ${categoryName} (${categoryKey})`);
        
        // Store in session for user behavior tracking
        sessionStorage.setItem('last_category_viewed', categoryKey);
        sessionStorage.setItem('last_category_viewed_time', new Date().toISOString());
    }
    
    // Function to enhance card hover effect
    function enhanceCardHover(card) {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        card.style.zIndex = '10';
        
        // Add pulse animation to image
        const image = card.querySelector('.category-image');
        if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        }
        
        // Add background color change
        card.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
    }
    
    // Function to reset card hover effect
    function resetCardHover(card) {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        card.style.zIndex = '1';
        card.style.background = 'white';
        
        const image = card.querySelector('.category-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    }
    
    // Function to show loading state
    function showCategoryLoading(categoryKey) {
        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'category-loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Loading ${categoryData[categoryKey]?.name}...</p>
        `;
        
        // Add styles for loading overlay
        if (!document.querySelector('#category-loading-styles')) {
            const styles = document.createElement('style');
            styles.id = 'category-loading-styles';
            styles.textContent = `
                .category-loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(10, 62, 99, 0.95);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    color: white;
                    font-family: 'Poppins', sans-serif;
                }
                
                .loading-spinner {
                    width: 50px;
                    height: 50px;
                    border: 4px solid rgba(215, 163, 74, 0.3);
                    border-top: 4px solid var(--desert-gold);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .category-loading-overlay p {
                    font-size: 1.2rem;
                    color: var(--desert-gold);
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(loadingOverlay);
        
        // Remove loading after navigation (in real app, this would be after page load)
        setTimeout(() => {
            if (document.body.contains(loadingOverlay)) {
                document.body.removeChild(loadingOverlay);
            }
        }, 1500);
    }
    
    // Function to show redirect message (for demo purposes)
    function showCategoryRedirectMessage(categoryName) {
        const message = `Navigating to ${categoryName} collection...\n\nIn a real application, this would redirect to:\n/shop/${categoryName.toLowerCase().replace(' & ', '-').replace(' ', '-')}`;
        
        // You can choose to show an alert or a more elegant notification
        if (window.confirm(message + '\n\nClick OK to continue (demo mode)')) {
            // In real app: window.location.href = `/shop/${categoryName.toLowerCase()}`
            console.log(`Would navigate to: /shop/${categoryName.toLowerCase()}`);
        }
        
        // Alternative: Show a toast notification
        showToast(`Redirecting to ${categoryName} collection`);
    }
    
    // Function to show toast notification
    function showToast(message) {
        // Remove existing toast if any
        const existingToast = document.querySelector('.category-toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'category-toast';
        toast.textContent = message;
        
        // Add toast styles
        if (!document.querySelector('#toast-styles')) {
            const styles = document.createElement('style');
            styles.id = 'toast-styles';
            styles.textContent = `
                .category-toast {
                    position: fixed;
                    bottom: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--dark-blue);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    z-index: 1000;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.9rem;
                    animation: slideUp 0.3s ease, slideDown 0.3s ease 2.7s forwards;
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateX(-50%) translateY(100px);
                    }
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(toast);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 3000);
    }
    
    // Initialize category quick view (optional feature)
    initializeQuickView();
    
    function initializeQuickView() {
        // Add quick view buttons to category cards
        categoryCards.forEach(card => {
            const quickViewBtn = document.createElement('button');
            quickViewBtn.className = 'quick-view-btn';
            quickViewBtn.innerHTML = '<i class="fas fa-eye"></i> Quick View';
            quickViewBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click event
                const categoryName = card.querySelector('h3').textContent.trim();
                showQuickView(categoryName);
            });
            
            card.appendChild(quickViewBtn);
        });
        
        // Add quick view styles
        if (!document.querySelector('#quick-view-styles')) {
            const styles = document.createElement('style');
            styles.id = 'quick-view-styles';
            styles.textContent = `
                .quick-view-btn {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--desert-gold);
                    color: var(--dark-blue);
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    cursor: pointer;
                    opacity: 0;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }
                
                .category-card:hover .quick-view-btn {
                    opacity: 1;
                    transform: translateX(-50%) translateY(-5px);
                }
                
                .quick-view-btn:hover {
                    background: var(--dark-blue);
                    color: var(--desert-gold);
                }
            `;
            document.head.appendChild(styles);
        }
    }
    
    function showQuickView(categoryName) {
        // In a real application, this would fetch category data and show a modal
        console.log(`Quick view for: ${categoryName}`);
        
        // Example quick view modal content
        const quickViewContent = {
            'Jewelry': {
                description: 'Handcrafted jewelry inspired by ancient Egyptian designs',
                featuredProducts: 12,
                priceRange: '$25 - $500'
            },
            'Pottery': {
                description: 'Traditional Egyptian pottery with modern craftsmanship',
                featuredProducts: 8,
                priceRange: '$15 - $200'
            },
            'Leather Products': {
                description: 'Premium leather goods with authentic Egyptian patterns',
                featuredProducts: 15,
                priceRange: '$30 - $350'
            },
            'Rugs & Kilims': {
                description: 'Handwoven rugs and kilims with traditional patterns',
                featuredProducts: 6,
                priceRange: '$80 - $800'
            },
            'Egyptian Cotton': {
                description: 'Luxurious Egyptian cotton textiles and clothing',
                featuredProducts: 20,
                priceRange: '$20 - $300'
            }
        };
        
        const content = quickViewContent[categoryName];
        if (content) {
            const message = `
                ${categoryName} Collection\n
                ${content.description}\n
                Featured Products: ${content.featuredProducts}\n
                Price Range: ${content.priceRange}
            `;
            
            alert(message); // In real app, show a modal instead
        }
    }
});