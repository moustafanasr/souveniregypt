// cart.js - Shopping Cart functionality
class CartManager {
    constructor() {
        this.cart = [];
        this.recommendedProducts = [];
        this.init();
    }

    init() {
        this.loadCart();
        this.renderCart();
        this.loadRecommendedProducts();
        this.setupEventListeners();
        this.updateCartDisplay();
    }

    loadCart() {
        try {
            const cartData = localStorage.getItem('souvenir-cart');
            this.cart = cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            this.cart = [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('souvenir-cart', JSON.stringify(this.cart));
            // Trigger cart update event for other components
            window.dispatchEvent(new CustomEvent('cartUpdated'));
        } catch (error) {
            console.error('Error saving cart:', error);
            this.showNotification('Error saving cart data', 'error');
        }
    }

    renderCart() {
        const container = document.getElementById('cartItemsContainer');
        const itemsCount = document.getElementById('cartItemsCount');
        const emptyState = document.querySelector('.empty-cart-state');
        
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fas fa-shopping-bag"></i>
                    <h3 data-key="cart.empty">Your cart is empty</h3>
                    <p data-key="cart.emptyDescription">Start shopping to add items to your cart</p>
                    <a href="shop.html" class="btn btn-primary" data-key="cart.startShopping">Start Shopping</a>
                </div>
            `;
            
            if (itemsCount) itemsCount.textContent = '0 items';
            if (emptyState) emptyState.style.display = 'block';
            this.updateOrderSummary();
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        container.innerHTML = this.cart.map((item, index) => this.createCartItemHTML(item, index)).join('');
        
        if (itemsCount) {
            const totalItems = this.getTotalItems();
            itemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
        }

        this.updateOrderSummary();
        this.attachCartItemEventListeners();
        this.updateTranslations();
    }

    createCartItemHTML(item, index) {
        return `
            <div class="cart-item" data-product-id="${item.id}" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                     onerror="this.src='./assets/img/placeholder-product.jpg'">
                
                <div class="cart-item-details">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <div class="cart-item-category">${this.getCategoryName(item.category)}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                </div>
                
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-product-id="${item.id}" 
                                title="Decrease quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase" data-product-id="${item.id}" 
                                title="Increase quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <button class="remove-item-btn" data-product-id="${item.id}" 
                            title="Remove from cart">
                        <i class="fas fa-trash"></i>
                        <span data-key="cart.remove">Remove</span>
                    </button>
                    
                    <div class="cart-item-total">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            </div>
        `;
    }

    attachCartItemEventListeners() {
        // Quantity decrease buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.decreaseQuantity(productId);
            });
        });

        // Quantity increase buttons
        document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.increaseQuantity(productId);
            });
        });

        // Remove item buttons
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.removeItem(productId);
            });
        });
    }

    increaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            this.saveCart();
            this.renderCart();
            this.showNotification(`${item.name} quantity updated`, 'success');
        }
    }

    decreaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.saveCart();
                this.renderCart();
                this.showNotification(`${item.name} quantity updated`, 'success');
            } else {
                this.removeItem(productId);
            }
        }
    }

    removeItem(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            // Add removal animation
            const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);
            if (cartItem) {
                cartItem.classList.add('removing');
                setTimeout(() => {
                    this.cart = this.cart.filter(item => item.id !== productId);
                    this.saveCart();
                    this.renderCart();
                    this.showNotification(`${item.name} removed from cart`, 'info');
                }, 300);
            } else {
                this.cart = this.cart.filter(item => item.id !== productId);
                this.saveCart();
                this.renderCart();
                this.showNotification(`${item.name} removed from cart`, 'info');
            }
        }
    }

    updateOrderSummary() {
        const subtotal = this.getSubtotal();
        const shipping = this.calculateShipping(subtotal);
        const tax = this.calculateTax(subtotal);
        const total = subtotal + shipping + tax;

        // Update DOM elements
        const subtotalElement = document.getElementById('subtotalAmount');
        const shippingElement = document.getElementById('shippingAmount');
        const taxElement = document.getElementById('taxAmount');
        const totalElement = document.getElementById('totalAmount');
        const checkoutBtn = document.getElementById('checkoutBtn');

        if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        if (shippingElement) shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;

        // Enable/disable checkout button
        if (checkoutBtn) {
            checkoutBtn.disabled = this.cart.length === 0;
        }
    }

    getSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    calculateShipping(subtotal) {
        // Free shipping for orders over $100
        return subtotal >= 100 ? 0 : 15;
    }

    calculateTax(subtotal) {
        // 10% tax rate
        return subtotal * 0.1;
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCategoryName(categoryKey) {
        const categoryMap = {
            jewelry: "Jewelry",
            pottery: "Pottery",
            leather: "Leather Products",
            rugs: "Rugs & Kilims",
            cotton: "Egyptian Cotton"
        };
        return categoryMap[categoryKey] || categoryKey;
    }

    async loadRecommendedProducts() {
        try {
            // Simulate API call - in real app, this would fetch from backend
            this.recommendedProducts = await this.fetchRecommendedProducts();
            this.renderRecommendedProducts();
        } catch (error) {
            console.error('Error loading recommended products:', error);
        }
    }

    async fetchRecommendedProducts() {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return [
            {
                id: 11,
                name: "Gold Scarab Earrings",
                category: "jewelry",
                price: 75.0,
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Beautiful gold earrings featuring the sacred scarab symbol."
            },
            {
                id: 12,
                name: "Ceramic Oil Lamp",
                category: "pottery",
                price: 35.0,
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Traditional Egyptian oil lamp with hand-painted designs."
            },
            {
                id: 13,
                name: "Leather Wallet",
                category: "leather",
                price: 45.0,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Handcrafted leather wallet with Egyptian motifs."
            },
            {
                id: 14,
                name: "Cotton Table Runner",
                category: "cotton",
                price: 28.0,
                image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Elegant Egyptian cotton table runner with traditional patterns."
            }
        ];
    }

    renderRecommendedProducts() {
        const container = document.getElementById('recommendedGrid');
        if (!container || this.recommendedProducts.length === 0) return;

        container.innerHTML = this.recommendedProducts.map(product => `
            <div class="recommended-product">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='./assets/img/placeholder-product.jpg'">
                <div class="recommended-product-info">
                    <h4>${product.name}</h4>
                    <div class="recommended-product-price">$${product.price.toFixed(2)}</div>
                    <button class="btn-add-recommended" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                        <span data-key="cart.addToCart">Add to Cart</span>
                    </button>
                </div>
            </div>
        `).join('');

        // Attach event listeners to recommended product buttons
        document.querySelectorAll('.btn-add-recommended').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.addRecommendedProduct(productId);
            });
        });

        this.updateTranslations();
    }

    addRecommendedProduct(productId) {
        const product = this.recommendedProducts.find(p => p.id === productId);
        if (!product) return;

        // Check if product already exists in cart
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: 1,
                inStock: true
            });
        }

        this.saveCart();
        this.renderCart();
        this.showNotification(`${product.name} added to cart!`, 'success');
    }

    setupEventListeners() {
        // Checkout button
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.proceedToCheckout();
            });
        }

        // Listen for cart updates from other components
        window.addEventListener('cartUpdated', () => {
            this.loadCart();
            this.renderCart();
        });

        // Listen for storage events (updates from other tabs)
        window.addEventListener('storage', (e) => {
            if (e.key === 'souvenir-cart') {
                this.loadCart();
                this.renderCart();
            }
        });
    }

    proceedToCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty', 'error');
            return;
        }

        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }

    updateCartDisplay() {
        // Update header cart count
        const totalItems = this.getTotalItems();
        const cartCount = document.querySelector('.cart-count');
        
        if (cartCount) {
            cartCount.textContent = totalItems;
        }

        // Update header cart preview if headerManager exists
        if (window.headerManager) {
            window.headerManager.refreshCartFromStorage();
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `cart-notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                          type === 'error' ? 'fa-exclamation-circle' : 
                          'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        const toastStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? 'var(--deep-teal)' : 
                        type === 'error' ? '#dc3545' : 
                        '#ffc107'};
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

        notification.style.cssText = toastStyle;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = "slideOutRight 0.3s ease forwards";
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    updateTranslations() {
        // This will be handled by the language switcher
        if (window.updatePageTranslations) {
            window.updatePageTranslations();
        }
    }

    // Public method to clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.renderCart();
        this.showNotification('Cart cleared successfully', 'info');
    }

    // Public method to get cart data
    getCartData() {
        return [...this.cart];
    }
}

// Initialize cart manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
});

// Global cart functions
window.getCartData = () => {
    return window.cartManager ? window.cartManager.getCartData() : [];
};

window.clearCart = () => {
    if (window.cartManager) {
        window.cartManager.clearCart();
    }
};