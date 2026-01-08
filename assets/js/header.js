// header.js - Enhanced header functionality for all pages with real-time cart sync
class HeaderManager {
    constructor() {
        this.cart = [];
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupCart();
        this.setupUserSession();
        this.setupActiveNavigation();
        this.setupScrollEffect();
        this.setupCartSync();
    }

    setupMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileMenu && navMenu) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.main-nav') && navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    setupDropdowns() {
        // Language dropdown
        const languageToggle = document.getElementById('languageToggle');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageToggle || languageDropdown) {
            languageToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
                this.closeOtherDropdowns('language');
            });

            // Language selection
            document.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });
        }

        // User dropdown
        const userToggle = document.getElementById('userToggle');
        const userMenu = document.getElementById('userMenu');

        if (userToggle && userMenu) {
            userToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                userMenu.classList.toggle('show');
                this.closeOtherDropdowns('user');
                
                // Refresh cart when user menu opens (in case it was updated elsewhere)
                if (userMenu.classList.contains('show')) {
                    this.refreshCartFromStorage();
                }
            });
        }

        // Cart dropdown
        const cartToggle = document.getElementById('cartToggle');
        const cartPreview = document.getElementById('cartPreview');

        if (cartToggle && cartPreview) {
            cartToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                cartPreview.classList.toggle('show');
                this.closeOtherDropdowns('cart');
                
                // Always refresh cart data when dropdown opens
                if (cartPreview.classList.contains('show')) {
                    this.refreshCartFromStorage();
                }
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });

        // Close dropdowns on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllDropdowns();
            }
        });
    }

    closeOtherDropdowns(current) {
        const dropdowns = {
            language: document.getElementById('languageDropdown'),
            user: document.getElementById('userMenu'),
            cart: document.getElementById('cartPreview')
        };

        Object.entries(dropdowns).forEach(([key, dropdown]) => {
            if (key !== current && dropdown) {
                dropdown.classList.remove('show');
            }
        });
    }

    closeAllDropdowns() {
        document.querySelectorAll('.language-dropdown, .user-menu, .cart-preview').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        if (mobileMenu && navMenu && navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    switchLanguage(lang) {
    // Update current language display
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }

    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });

    // Trigger global language switch
    if (window.switchLanguage) {
        window.switchLanguage(lang);
    } else {
        console.warn('Global switchLanguage function not found');
        // Fallback: update translations manually
        this.updateHeaderTranslations(lang);
    }
}

// Fallback translation function for header
updateHeaderTranslations(lang) {
    const headerTranslations = {
        en: {
            "nav.home": "Home",
            "nav.collections": "Collections",
            "nav.artisans": "Artisans",
            "nav.about": "About",
            "nav.contact": "Contact",
            "nav.cart": "Shopping Cart",
            "nav.emptyCart": "Your cart is empty",
            "nav.total": "Total",
            "nav.viewCart": "View Cart",
            "nav.checkout": "Checkout",
            "nav.login": "Login",
            "nav.register": "Register",
            "nav.profile": "My Profile",
            "nav.orders": "My Orders",
            "nav.logout": "Logout"
        },
        it: {
            "nav.home": "Home",
            "nav.collections": "Collezioni",
            "nav.artisans": "Artigiani",
            "nav.about": "Chi Siamo",
            "nav.contact": "Contatto",
            "nav.cart": "Carrello",
            "nav.emptyCart": "Il tuo carrello è vuoto",
            "nav.total": "Totale",
            "nav.viewCart": "Vedi Carrello",
            "nav.checkout": "Checkout",
            "nav.login": "Accedi",
            "nav.register": "Registrati",
            "nav.profile": "Mio Profilo",
            "nav.orders": "I Miei Ordini",
            "nav.logout": "Esci"
        },
        fr: {
            "nav.home": "Accueil",
            "nav.collections": "Collections",
            "nav.artisans": "Artisans",
            "nav.about": "À Propos",
            "nav.contact": "Contact",
            "nav.cart": "Panier",
            "nav.emptyCart": "Votre panier est vide",
            "nav.total": "Total",
            "nav.viewCart": "Voir le Panier",
            "nav.checkout": "Paiement",
            "nav.login": "Connexion",
            "nav.register": "S'inscrire",
            "nav.profile": "Mon Profil",
            "nav.orders": "Mes Commandes",
            "nav.logout": "Déconnexion"
        }
    };

    const translations = headerTranslations[lang] || headerTranslations.en;
    
    // Update header elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

    setupCart() {
        // Load initial cart from localStorage
        this.refreshCartFromStorage();
        
        // Setup cart auto-refresh
        this.setupCartAutoRefresh();
    }

    setupCartSync() {
        // Listen for cart updates from other components
        window.addEventListener('cartUpdated', () => {
            this.refreshCartFromStorage();
        });

        // Listen for storage events (updates from other tabs)
        window.addEventListener('storage', (e) => {
            if (e.key === 'souvenir-cart') {
                this.refreshCartFromStorage();
            }
        });
    }

    setupCartAutoRefresh() {
        // Refresh cart every 2 seconds to catch external updates
        setInterval(() => {
            this.refreshCartFromStorage();
        }, 2000);
    }

    refreshCartFromStorage() {
        const previousCartCount = this.getCartItemCount();
        this.loadCartFromStorage();
        const newCartCount = this.getCartItemCount();
        
        // Only update display if cart actually changed
        if (previousCartCount !== newCartCount || this.hasCartChanged()) {
            this.updateCartDisplay();
        }
    }

    hasCartChanged() {
        // Compare current cart with what's in storage
        const storageCart = this.loadCartFromStorage(true); // Get without setting
        return JSON.stringify(this.cart) !== JSON.stringify(storageCart);
    }

    loadCartFromStorage(silent = false) {
        try {
            const cartData = localStorage.getItem('souvenir-cart');
            const newCart = cartData ? JSON.parse(cartData) : [];
            
            if (!silent) {
                this.cart = newCart;
            }
            
            return newCart;
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            if (!silent) {
                this.cart = [];
            }
            return [];
        }
    }

    saveCartToStorage() {
        try {
            localStorage.setItem('souvenir-cart', JSON.stringify(this.cart));
            
            // Trigger storage event for other tabs
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'souvenir-cart',
                newValue: JSON.stringify(this.cart)
            }));
            
            // Trigger custom event for other components
            window.dispatchEvent(new CustomEvent('cartUpdated'));
            
        } catch (error) {
            console.error('Error saving cart to storage:', error);
            this.showNotification('Error saving cart data', 'error');
        }
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const cartItemsCount = document.querySelector('.cart-items-count');
        const totalAmount = document.querySelector('.total-amount');
        const cartItems = document.getElementById('cartItems');

        const totalItems = this.getCartItemCount();
        const totalPrice = this.getCartTotal();

        // Update cart count badge
        if (cartCount) {
            cartCount.textContent = totalItems;
            // Add animation for count changes
            if (parseInt(cartCount.textContent) !== totalItems) {
                cartCount.classList.add('pulse');
                setTimeout(() => cartCount.classList.remove('pulse'), 300);
            }
        }

        // Update cart items count text
        if (cartItemsCount) {
            cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
        }

        // Update total amount
        if (totalAmount) {
            totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
        }

        // Update cart items list
        if (cartItems) {
            this.renderCartItems(cartItems);
        }

        // Update cart buttons state
        this.updateCartButtonsState();
    }

    renderCartItems(container) {
        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p data-key="nav.emptyCart">Your cart is empty</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='./assets/img/placeholder-product.jpg'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-meta">
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                        <div class="cart-item-quantity-controls">
                            <button class="quantity-btn minus" data-product-id="${item.id}">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn plus" data-product-id="${item.id}">+</button>
                        </div>
                    </div>
                    <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" data-product-id="${item.id}" title="Remove item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        // Add event listeners
        this.addCartItemEventListeners(container);
    }

    addCartItemEventListeners(container) {
        // Remove buttons
        container.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.removeFromCart(productId);
            });
        });

        // Quantity controls
        container.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.decreaseQuantity(productId);
            });
        });

        container.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.increaseQuantity(productId);
            });
        });
    }

    updateCartButtonsState() {
        const checkoutBtn = document.querySelector('.cart-actions .btn-primary');
        const viewCartBtn = document.querySelector('.cart-actions .btn-secondary');
        
        if (checkoutBtn) {
            checkoutBtn.disabled = this.cart.length === 0;
        }
        if (viewCartBtn) {
            viewCartBtn.disabled = this.cart.length === 0;
        }
    }

    getCartItem(productId) {
        return this.cart.find(item => item.id === productId);
    }

    addToCart(product) {
        if (!product || !product.id) {
            console.error('Invalid product data:', product);
            return false;
        }

        const existingItem = this.getCartItem(product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name || 'Unknown Product',
                price: product.price || 0,
                image: product.image || './assets/img/placeholder-product.jpg',
                category: product.category || 'general',
                quantity: 1,
                inStock: product.inStock !== false
            });
        }

        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showCartNotification(product.name || 'Product', 'added');
        
        return true;
    }

    removeFromCart(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.showCartNotification(item.name, 'removed');
        }
    }

    increaseQuantity(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            item.quantity += 1;
            this.saveCartToStorage();
            this.updateCartDisplay();
        }
    }

    decreaseQuantity(productId) {
        const item = this.getCartItem(productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.saveCartToStorage();
                this.updateCartDisplay();
            } else {
                this.removeFromCart(productId);
            }
        }
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.getCartItem(productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCartToStorage();
            this.updateCartDisplay();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showNotification('Cart cleared successfully', 'info');
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    showCartNotification(productName, action = 'added') {
        const messages = {
            added: `${productName} added to cart!`,
            removed: `${productName} removed from cart`,
            updated: `Cart updated`
        };

        const notification = document.createElement('div');
        notification.className = `cart-notification ${action}`;
        notification.innerHTML = `
            <i class="fas ${action === 'added' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${messages[action] || messages.added}</span>
        `;

        const notificationStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${action === 'added' ? 'var(--deep-teal)' : '#ffc107'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;

        notification.style.cssText = notificationStyle;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    setupUserSession() {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('souvenir-user-loggedin') === 'true';
        
        if (isLoggedIn) {
            this.showLoggedInState();
        } else {
            this.showLoggedOutState();
        }

        // Setup logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }
    }

    showLoggedInState() {
        const loginLinks = document.querySelectorAll('[href="login.html"], [href="register.html"]');
        const userLinks = document.querySelectorAll('#profileLink, #ordersLink, #logoutBtn');
        
        loginLinks.forEach(link => link.style.display = 'none');
        userLinks.forEach(link => link.style.display = 'flex');

        const userName = document.querySelector('.user-name');
        const userStatus = document.querySelector('.user-status');
        
        if (userName) userName.textContent = 'Welcome Back!';
        if (userStatus) userStatus.textContent = 'View your profile and orders';
    }

    showLoggedOutState() {
        const loginLinks = document.querySelectorAll('[href="login.html"], [href="register.html"]');
        const userLinks = document.querySelectorAll('#profileLink, #ordersLink, #logoutBtn');
        
        loginLinks.forEach(link => link.style.display = 'flex');
        userLinks.forEach(link => link.style.display = 'none');

        const userName = document.querySelector('.user-name');
        const userStatus = document.querySelector('.user-status');
        
        if (userName) userName.textContent = 'Welcome Guest';
        if (userStatus) userStatus.textContent = 'Sign in to your account';
    }

    logout() {
        localStorage.setItem('souvenir-user-loggedin', 'false');
        this.showLoggedOutState();
        this.closeAllDropdowns();
        this.showNotification('Logged out successfully', 'success');
    }

    setupActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index2.html';
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage.includes('shop') && linkHref.includes('shop'))) {
                link.classList.add('active');
            }
        });
    }

    setupScrollEffect() {
        let lastScrollY = window.scrollY;
        const header = document.querySelector('header');
        
        if (!header) return;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Background effect
            if (currentScrollY > 100) {
                header.style.background = 'rgba(10, 62, 99, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'var(--dark-blue)';
                header.style.backdropFilter = 'blur(10px)';
            }
            
            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    showNotification(message, type = 'info') {
        console.log(`${type}: ${message}`);
        // You can implement a more sophisticated notification system here
    }

    // Public method to force cart refresh
    refreshCart() {
        this.refreshCartFromStorage();
    }

    // Public method to get current cart
    getCart() {
        return [...this.cart]; // Return copy to prevent direct modification
    }
}

// Initialize header manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.headerManager = new HeaderManager();
});

// Global cart functions
window.addToCart = (product) => {
    if (window.headerManager) {
        return window.headerManager.addToCart(product);
    }
    return false;
};

window.getCart = () => {
    return window.headerManager ? window.headerManager.getCart() : [];
};

window.clearCart = () => {
    if (window.headerManager) {
        window.headerManager.clearCart();
    }
};

window.refreshCart = () => {
    if (window.headerManager) {
        window.headerManager.refreshCart();
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeaderManager;
}