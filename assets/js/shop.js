// shop.js - Enhanced Shop page functionality with cart management
class ShopManager {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentView = "grid";
        this.filters = {
            category: "all",
            price: "all",
            search: "",
            sort: "featured"
        };

        this.cart = this.loadCartFromStorage();
        this.init();
    }

    init() {
        this.loadProducts();
        this.setupEventListeners();
        this.handleURLParams();
        this.updateTranslations();
        this.updateCartDisplay();
        this.setupCartSync();
    }

    // Enhanced Cart Management Methods
    setupCartSync() {
        // Listen for cart updates from header or other components
        window.addEventListener('cartUpdated', () => {
            this.refreshCartFromStorage();
        });

        // Listen for storage events from other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === 'souvenir-cart') {
                this.refreshCartFromStorage();
            }
        });
    }

    refreshCartFromStorage() {
        const previousCartCount = this.getCartItemCount();
        this.cart = this.loadCartFromStorage();
        const newCartCount = this.getCartItemCount();
        
        // Only update if cart actually changed
        if (previousCartCount !== newCartCount) {
            this.updateCartDisplay();
            this.renderProducts(); // Re-render to update cart badges and buttons
        }
    }

    loadCartFromStorage() {
        try {
            const cartData = localStorage.getItem('souvenir-cart');
            return cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            return [];
        }
    }

    saveCartToStorage() {
        try {
            localStorage.setItem('souvenir-cart', JSON.stringify(this.cart));
            
            // Trigger events for other components
            window.dispatchEvent(new CustomEvent('cartUpdated'));
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'souvenir-cart',
                newValue: JSON.stringify(this.cart)
            }));
            
        } catch (error) {
            console.error('Error saving cart to storage:', error);
            this.showToast('Error saving cart data', 'error');
        }
    }

    updateCartDisplay() {
        const totalItems = this.getCartItemCount();
        const cartCount = document.querySelector('.cart-count');
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            // Add animation for count changes
            if (parseInt(cartCount.textContent) !== totalItems) {
                cartCount.classList.add('pulse');
                setTimeout(() => cartCount.classList.remove('pulse'), 300);
            }
        }

        // Update header cart if headerManager exists
        if (window.headerManager) {
            window.headerManager.refreshCartFromStorage();
        }
    }

    // Enhanced Add to Cart with Quantity Management
    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            this.showToast('Product not found', 'error');
            return false;
        }

        if (!product.inStock) {
            this.showToast('This product is out of stock', 'error');
            return false;
        }

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: quantity,
                inStock: product.inStock
            });
        }

        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showCartNotification(product.name, 'added');
        
        // Update the specific product card
        this.updateProductCardCartState(productId);
        
        return true;
    }

    removeFromCart(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.showCartNotification(item.name, 'removed');
            
            // Update the product card
            this.updateProductCardCartState(productId);
        }
    }

    increaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.showCartNotification(item.name, 'updated');
            
            // Update the product card
            this.updateProductCardCartState(productId);
        }
    }

    decreaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.saveCartToStorage();
                this.updateCartDisplay();
                this.showCartNotification(item.name, 'updated');
            } else {
                this.removeFromCart(productId);
            }
            
            // Update the product card
            this.updateProductCardCartState(productId);
        }
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.showCartNotification(item.name, 'updated');
            
            // Update the product card
            this.updateProductCardCartState(productId);
        }
    }

    getCartItem(productId) {
        return this.cart.find(item => item.id === productId);
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.renderProducts(); // Re-render to remove all cart badges
        this.showToast('Cart cleared successfully', 'info');
    }

    // Enhanced Product Card with Cart Controls
    createProductCard(product) {
        const discount = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

        const isListView = this.currentView === "list";
        const cardClass = isListView ? "product-card list-view" : "product-card";

        // Check cart status
        const cartItem = this.cart.find(item => item.id === product.id);
        const inCart = cartItem ? true : false;
        const cartQuantity = cartItem ? cartItem.quantity : 0;

        return `
            <div class="${cardClass}" data-product-id="${product.id}">
                ${product.featured ? `<span class="product-badge">${this.getTranslatedText("shop.badge.featured")}</span>` : ""}
                ${!product.inStock ? `<span class="product-badge out-of-stock">${this.getTranslatedText("shop.badge.outOfStock")}</span>` : ""}
                ${inCart ? `<span class="product-badge in-cart">${cartQuantity} in Cart</span>` : ""}
                
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    ${inCart ? `
                        <div class="cart-controls-overlay">
                            <div class="cart-controls">
                                <button class="cart-control-btn decrease-qty" data-product-id="${product.id}" title="Decrease Quantity">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="cart-quantity-display">${cartQuantity}</span>
                                <button class="cart-control-btn increase-qty" data-product-id="${product.id}" title="Increase Quantity">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button class="cart-control-btn remove-from-cart" data-product-id="${product.id}" title="Remove from Cart">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="product-info">
                    <span class="product-category">${this.getTranslatedText(`categories.${product.category}`)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `
                            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                            <span class="discount">-${discount}%</span>
                        ` : ""}
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn-add-cart ${inCart ? 'in-cart' : ''}" 
                                data-product-id="${product.id}" 
                                ${!product.inStock ? "disabled" : ""}>
                            <i class="fas ${inCart ? 'fa-shopping-bag' : 'fa-cart-plus'}"></i>
                            ${inCart ? this.getTranslatedText("shop.button.viewCart") : 
                              product.inStock ? this.getTranslatedText("shop.button.addToCart") : 
                              this.getTranslatedText("shop.badge.outOfStock")}
                        </button>
                        <button class="btn-quick-view" data-product-id="${product.id}">
                            <i class="fas fa-eye"></i>
                            ${this.getTranslatedText("shop.button.quickView")}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Enhanced Event Listeners for Cart Controls
    addProductCardEventListeners() {
        // Add to cart / View cart functionality
        document.querySelectorAll(".btn-add-cart").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                const inCart = this.cart.find(item => item.id === productId);
                
                if (inCart) {
                    // If already in cart, navigate to cart page or show cart
                    this.showToast('Item already in cart. Use quantity controls to adjust.', 'info');
                    // Alternatively, you could scroll to cart or open cart preview
                    if (window.headerManager) {
                        document.getElementById('cartToggle')?.click();
                    }
                } else {
                    this.addToCart(productId);
                }
            });
        });

        // Quick view functionality
        document.querySelectorAll(".btn-quick-view").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.showQuickView(productId);
            });
        });

        // Cart quantity controls (for products already in cart)
        document.querySelectorAll(".increase-qty").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.increaseQuantity(productId);
                e.stopPropagation();
            });
        });

        document.querySelectorAll(".decrease-qty").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.decreaseQuantity(productId);
                e.stopPropagation();
            });
        });

        document.querySelectorAll(".remove-from-cart").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.removeFromCart(productId);
                e.stopPropagation();
            });
        });

        // Product image click - show cart controls if item is in cart
        document.querySelectorAll(".product-image-container").forEach(container => {
            container.addEventListener('click', (e) => {
                if (e.target.classList.contains('product-image')) {
                    const productCard = e.target.closest('.product-card');
                    const productId = parseInt(productCard.dataset.productId);
                    const inCart = this.cart.find(item => item.id === productId);
                    
                    if (inCart) {
                        // Toggle cart controls visibility
                        const overlay = container.querySelector('.cart-controls-overlay');
                        if (overlay) {
                            overlay.classList.toggle('active');
                        }
                    }
                }
            });
        });
    }

    // Update specific product card when cart state changes
    updateProductCardCartState(productId) {
        const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
        if (productCard) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                // Re-render just this product card
                const newCardHTML = this.createProductCard(product);
                productCard.outerHTML = newCardHTML;
                
                // Re-attach event listeners to the new card
                const newCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
                if (newCard) {
                    this.addEventListenersToCard(newCard);
                }
            }
        }
    }

    addEventListenersToCard(card) {
        const productId = parseInt(card.dataset.productId);
        
        // Add to cart button
        const addCartBtn = card.querySelector('.btn-add-cart');
        if (addCartBtn) {
            addCartBtn.addEventListener('click', (e) => {
                const inCart = this.cart.find(item => item.id === productId);
                if (inCart) {
                    this.showToast('Item already in cart. Use quantity controls to adjust.', 'info');
                } else {
                    this.addToCart(productId);
                }
            });
        }

        // Quick view button
        const quickViewBtn = card.querySelector('.btn-quick-view');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', () => {
                this.showQuickView(productId);
            });
        }

        // Cart controls
        const increaseBtn = card.querySelector('.increase-qty');
        const decreaseBtn = card.querySelector('.decrease-qty');
        const removeBtn = card.querySelector('.remove-from-cart');

        if (increaseBtn) {
            increaseBtn.addEventListener('click', (e) => {
                this.increaseQuantity(productId);
                e.stopPropagation();
            });
        }

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', (e) => {
                this.decreaseQuantity(productId);
                e.stopPropagation();
            });
        }

        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                this.removeFromCart(productId);
                e.stopPropagation();
            });
        }
    }

    // Enhanced Quick View with Cart Controls
    createQuickViewContent(product) {
        const discount = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

        const cartItem = this.cart.find(item => item.id === product.id);
        const inCart = cartItem ? true : false;
        const cartQuantity = cartItem ? cartItem.quantity : 0;

        return `
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${inCart ? `
                        <div class="quick-view-cart-controls">
                            <h4>Cart Controls</h4>
                            <div class="quantity-controls">
                                <button class="qty-btn decrease" data-product-id="${product.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display">${cartQuantity}</span>
                                <button class="qty-btn increase" data-product-id="${product.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="btn btn-danger remove-item" data-product-id="${product.id}">
                                <i class="fas fa-trash"></i> Remove from Cart
                            </button>
                        </div>
                    ` : ''}
                </div>
                <div class="quick-view-details">
                    <h2>${product.name}</h2>
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                    
                    <div class="product-price large">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `
                            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                            <span class="discount">-${discount}%</span>
                        ` : ""}
                    </div>
                    
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-meta">
                        <div class="meta-item">
                            <strong>${this.getTranslatedText("shop.quickView.artisan")}:</strong> ${product.artisan}
                        </div>
                        <div class="meta-item">
                            <strong>${this.getTranslatedText("shop.quickView.availability")}:</strong> 
                            <span class="${product.inStock ? "in-stock" : "out-of-stock"}">
                                ${product.inStock ? this.getTranslatedText("shop.quickView.inStock") : this.getTranslatedText("shop.quickView.outOfStock")}
                            </span>
                        </div>
                        ${inCart ? `
                            <div class="meta-item">
                                <strong>In Cart:</strong> 
                                <span class="cart-quantity-badge">${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}</span>
                            </div>
                        ` : ""}
                    </div>
                    
                    <div class="quick-view-actions">
                        ${!inCart ? `
                            <button class="btn btn-primary btn-large add-to-cart-quickview" data-product-id="${product.id}" ${!product.inStock ? "disabled" : ""}>
                                <i class="fas fa-cart-plus"></i>
                                ${this.getTranslatedText("shop.button.addToCart")}
                            </button>
                        ` : `
                            <button class="btn btn-success btn-large" onclick="window.location.href='/cart'">
                                <i class="fas fa-shopping-cart"></i>
                                View Cart
                            </button>
                        `}
                        <button class="btn btn-secondary">
                            <i class="fas fa-heart"></i>
                            ${this.getTranslatedText("shop.button.wishlist")}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Enhanced Quick View Event Listeners
    setupQuickViewEventListeners() {
        // Add to cart from quick view
        document.querySelectorAll('.add-to-cart-quickview').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.addToCart(productId);
                document.getElementById('quickViewModal').style.display = 'none';
            });
        });

        // Quantity controls in quick view
        document.querySelectorAll('.quick-view-cart-controls .increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.increaseQuantity(productId);
                this.updateQuickViewContent(productId);
            });
        });

        document.querySelectorAll('.quick-view-cart-controls .decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.decreaseQuantity(productId);
                this.updateQuickViewContent(productId);
            });
        });

        document.querySelectorAll('.quick-view-cart-controls .remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                this.removeFromCart(productId);
                document.getElementById('quickViewModal').style.display = 'none';
            });
        });
    }

    updateQuickViewContent(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const content = document.getElementById("quickViewContent");
            content.innerHTML = this.createQuickViewContent(product);
            this.setupQuickViewEventListeners();
        }
    }

    showCartNotification(productName, action = 'added') {
        const messages = {
            added: `${productName} added to cart!`,
            removed: `${productName} removed from cart`,
            updated: `Cart updated successfully`
        };

        const notification = document.createElement('div');
        notification.className = `cart-notification ${action}`;
        notification.innerHTML = `
            <i class="fas ${action === 'added' ? 'fa-check-circle' : 
                          action === 'removed' ? 'fa-trash-alt' : 
                          'fa-sync-alt'}"></i>
            <span>${messages[action]}</span>
        `;

        const toastStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${action === 'added' ? 'var(--deep-teal)' : 
                        action === 'removed' ? '#dc3545' : 
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

    // Product Loading and Management
    async loadProducts() {
        try {
            this.showLoadingState();

            // In a real application, this would be an API call
            // For demo purposes, we'll use mock data
            this.products = await this.fetchMockProducts();
            this.applyFilters();
        } catch (error) {
            console.error("Error loading products:", error);
            this.showErrorState();
        }
    }

    async fetchMockProducts() {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return [
            {
                id: 1,
                name: "Silver Ankh Necklace",
                category: "jewelry",
                price: 89.99,
                originalPrice: 109.99,
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Handcrafted silver necklace featuring the ancient Egyptian Ankh symbol, symbolizing life and eternity.",
                featured: true,
                inStock: true,
                artisan: "Ahmed Hassan",
                tags: ["necklace", "silver", "ankh", "egyptian"]
            },
            {
                id: 2,
                name: "Hand-painted Pottery Vase",
                category: "pottery",
                price: 45.5,
                originalPrice: null,
                image: "./assets/img/pottery.png",
                description: "Beautiful clay vase with traditional Egyptian motifs hand-painted by master artisans.",
                featured: true,
                inStock: true,
                artisan: "Mohamed Ibrahim",
                tags: ["vase", "pottery", "hand-painted", "decorative"]
            },
            {
                id: 3,
                name: "Leather Handbag",
                category: "leather",
                price: 120.0,
                originalPrice: 150.0,
                image: "./assets/img/leather.png",
                description: "Elegant leather handbag with intricate Egyptian patterns, perfect for daily use.",
                featured: false,
                inStock: true,
                artisan: "Fatima Ali",
                tags: ["handbag", "leather", "accessory", "pattern"]
            },
            {
                id: 4,
                name: "Traditional Kilim Rug",
                category: "rugs",
                price: 250.0,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Handwoven kilim rug with traditional geometric patterns from Upper Egypt.",
                featured: true,
                inStock: true,
                artisan: "Hassan Mahmoud",
                tags: ["rug", "kilim", "handwoven", "traditional"]
            },
            {
                id: 5,
                name: "Egyptian Cotton Scarf",
                category: "cotton",
                price: 35.0,
                originalPrice: 45.0,
                image: "./assets/img/fashion.jpg",
                description: "Luxurious Egyptian cotton scarf with delicate embroidery, lightweight and breathable.",
                featured: false,
                inStock: true,
                artisan: "Aisha Mohamed",
                tags: ["scarf", "cotton", "embroidery", "accessory"]
            },
            {
                id: 6,
                name: "Gold Cartouche Pendant",
                category: "jewelry",
                price: 199.99,
                originalPrice: 249.99,
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Exquisite gold pendant with personalized hieroglyphic cartouche, made to order.",
                featured: true,
                inStock: false,
                artisan: "Ahmed Hassan",
                tags: ["pendant", "gold", "cartouche", "personalized"]
            },
            {
                id: 7,
                name: "Ceramic Coffee Set",
                category: "pottery",
                price: 75.0,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Traditional Egyptian coffee set with hand-painted blue patterns.",
                featured: false,
                inStock: true,
                artisan: "Mohamed Ibrahim",
                tags: ["coffee set", "ceramic", "hand-painted"]
            },
            {
                id: 8,
                name: "Leather Journal",
                category: "leather",
                price: 28.5,
                originalPrice: 35.0,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Handmade leather journal with Egyptian motifs, perfect for writing and sketching.",
                featured: false,
                inStock: true,
                artisan: "Fatima Ali",
                tags: ["journal", "leather", "notebook", "writing"]
            },
            {
                id: 9,
                name: "Silver Scarab Bracelet",
                category: "jewelry",
                price: 65.0,
                originalPrice: 80.0,
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Elegant silver bracelet featuring the sacred scarab beetle symbol.",
                featured: true,
                inStock: true,
                artisan: "Ahmed Hassan",
                tags: ["bracelet", "silver", "scarab", "jewelry"]
            },
            {
                id: 10,
                name: "Handwoven Cotton Blanket",
                category: "cotton",
                price: 120.0,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Soft and warm cotton blanket with traditional Egyptian patterns.",
                featured: false,
                inStock: true,
                artisan: "Aisha Mohamed",
                tags: ["blanket", "cotton", "handwoven", "home"]
            }
        ];
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById("mainSearchInput").addEventListener("input", (e) => {
            this.filters.search = e.target.value;
            this.applyFilters();
        });

        document.querySelector(".search-btn").addEventListener("click", () => {
            this.applyFilters();
        });

        // Filter functionality
        document.getElementById("categoryFilter").addEventListener("change", (e) => {
            this.filters.category = e.target.value;
            this.applyFilters();
            this.updateActiveFilters();
        });

        document.getElementById("priceFilter").addEventListener("change", (e) => {
            this.filters.price = e.target.value;
            this.applyFilters();
            this.updateActiveFilters();
        });

        // Sort functionality
        document.getElementById("sortOptions").addEventListener("change", (e) => {
            this.filters.sort = e.target.value;
            this.applyFilters();
        });

        // View toggle
        document.querySelectorAll(".view-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.setView(e.target.closest(".view-btn").dataset.view);
            });
        });

        // Reset filters
        document.getElementById("resetFilters").addEventListener("click", () => {
            this.resetFilters();
        });

        // Modal functionality
        this.setupModal();
    }

    applyFilters() {
        let filtered = [...this.products];

        // Apply search filter
        if (this.filters.search) {
            const searchTerm = this.filters.search.toLowerCase();
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
            );
        }

        // Apply category filter
        if (this.filters.category !== "all") {
            filtered = filtered.filter(
                (product) => product.category === this.filters.category
            );
        }

        // Apply price filter
        if (this.filters.price !== "all") {
            filtered = filtered.filter((product) => {
                const price = product.price;
                switch (this.filters.price) {
                    case "0-50":
                        return price <= 50;
                    case "50-100":
                        return price > 50 && price <= 100;
                    case "100-200":
                        return price > 100 && price <= 200;
                    case "200-500":
                        return price > 200 && price <= 500;
                    case "500+":
                        return price > 500;
                    default:
                        return true;
                }
            });
        }

        // Apply sorting
        filtered = this.sortProducts(filtered, this.filters.sort);

        this.filteredProducts = filtered;
        this.currentPage = 1;
        this.renderProducts();
        this.updatePagination();
        this.updateProductCount();
    }

    sortProducts(products, sortBy) {
        switch (sortBy) {
            case "newest":
                return [...products].sort((a, b) => b.id - a.id);
            case "price-low":
                return [...products].sort((a, b) => a.price - b.price);
            case "price-high":
                return [...products].sort((a, b) => b.price - a.price);
            case "name":
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case "featured":
            default:
                return [...products].sort((a, b) =>
                    b.featured === a.featured ? 0 : b.featured ? -1 : 1
                );
        }
    }

    renderProducts() {
        const grid = document.getElementById("productsGrid");
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        if (productsToShow.length === 0) {
            this.showNoResultsState();
            return;
        }

        this.hideLoadingState();
        this.hideNoResultsState();

        grid.innerHTML = productsToShow
            .map((product) => this.createProductCard(product))
            .join("");

        // Add event listeners to new product cards
        this.addProductCardEventListeners();
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

    setView(view) {
        this.currentView = view;

        // Update active view button
        document.querySelectorAll(".view-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.view === view);
        });

        // Update products grid class
        const grid = document.getElementById("productsGrid");
        grid.className = view === "list" ? "products-grid list-view" : "products-grid";

        // Re-render products with new view
        this.renderProducts();
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        const pagination = document.getElementById("pagination");

        if (totalPages <= 1) {
            pagination.innerHTML = "";
            return;
        }

        let paginationHTML = "";

        // Previous button
        paginationHTML += `
            <button class="pagination-btn ${this.currentPage === 1 ? "disabled" : ""}" 
                    onclick="shopManager.previousPage()" ${this.currentPage === 1 ? "disabled" : ""}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        // Page numbers
        paginationHTML += '<div class="pagination-numbers">';

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 1 && i <= this.currentPage + 1)) {
                paginationHTML += `
                    <button class="pagination-number ${i === this.currentPage ? "active" : ""}" 
                            onclick="shopManager.goToPage(${i})">
                        ${i}
                    </button>
                `;
            } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
                paginationHTML += '<span class="pagination-ellipsis">...</span>';
            }
        }

        paginationHTML += "</div>";

        // Next button
        paginationHTML += `
            <button class="pagination-btn ${this.currentPage === totalPages ? "disabled" : ""}" 
                    onclick="shopManager.nextPage()" ${this.currentPage === totalPages ? "disabled" : ""}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        pagination.innerHTML = paginationHTML;
    }

    goToPage(page) {
        this.currentPage = page;
        this.renderProducts();
        this.updatePagination();

        // Scroll to top of products
        document.querySelector(".products-section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        if (this.currentPage < totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    }

    updateActiveFilters() {
        const activeFilters = document.getElementById("activeFilters");
        let filtersHTML = "";

        if (this.filters.category !== "all") {
            filtersHTML += `
                <div class="filter-tag">
                    Category: ${this.getCategoryName(this.filters.category)}
                    <button class="remove" onclick="shopManager.removeFilter('category')">&times;</button>
                </div>
            `;
        }

        if (this.filters.price !== "all") {
            filtersHTML += `
                <div class="filter-tag">
                    Price: ${this.filters.price}
                    <button class="remove" onclick="shopManager.removeFilter('price')">&times;</button>
                </div>
            `;
        }

        activeFilters.innerHTML = filtersHTML;
    }

    removeFilter(filterType) {
        this.filters[filterType] = "all";

        // Update select elements
        document.getElementById(`${filterType}Filter`).value = "all";

        this.applyFilters();
        this.updateActiveFilters();
    }

    getTranslatedText(key) {
        if (window.translations && window.translations[window.currentLang] && window.translations[window.currentLang][key]) {
            return window.translations[window.currentLang][key];
        }
        return key; // Fallback to key if translation not found
    }

    resetFilters() {
        this.filters = {
            category: "all",
            price: "all",
            search: "",
            sort: "featured"
        };

        // Update UI elements
        document.getElementById("categoryFilter").value = "all";
        document.getElementById("priceFilter").value = "all";
        document.getElementById("sortOptions").value = "featured";
        document.getElementById("mainSearchInput").value = "";

        this.applyFilters();
        this.updateActiveFilters();
    }

    setupModal() {
        const modal = document.getElementById("quickViewModal");
        const closeBtn = document.querySelector(".close-modal");

        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    showQuickView(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    // إنشاء الـ modal خارجياً وإضافته مباشرة للـ body
    this.createExternalModal(product);
}

createExternalModal(product) {
    // منع التمرير في الخلفية
    document.body.style.overflow = 'hidden';
    
    // إنشاء عنصر الـ modal
    const modal = document.createElement('div');
    modal.className = 'external-modal';
    modal.id = 'externalQuickViewModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(10px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: modalFadeIn 0.3s ease forwards;
    `;

    // إنشاء محتوى الـ modal
    modal.innerHTML = this.createModalContent(product);
    
    // إضافة الـ modal للـ body مباشرة
    document.body.appendChild(modal);
    
    // إعداد event listeners
    this.setupExternalModalEvents(modal);
}

createModalContent(product) {
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const cartItem = this.cart.find(item => item.id === product.id);
    const inCart = cartItem ? true : false;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    return `
        <div class="external-modal-content" style="
            background: white;
            border-radius: 16px;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            transform: scale(0.9);
            animation: modalScaleIn 0.3s ease 0.1s forwards;
        ">
            <button class="external-close-btn" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 1.5rem;
                color: #6c757d;
                z-index: 10;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            ">&times;</button>
            
            <div class="external-modal-body" style="padding: 2rem;">
                ${this.createQuickViewContent(product)}
            </div>
        </div>
    `;
}

setupExternalModalEvents(modal) {
    // زر الإغلاق
    const closeBtn = modal.querySelector('.external-close-btn');
    closeBtn.addEventListener('click', () => {
        this.closeExternalModal();
    });

    // الإغلاق عند النقر خارج المحتوى
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            this.closeExternalModal();
        }
    });

    // الإغلاق بمفتاح Escape
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));
    
    // إعداد event listeners للتحكم في العربة داخل الـ modal
    this.setupQuickViewEventListeners();
}

handleEscapeKey(e) {
    if (e.key === 'Escape') {
        this.closeExternalModal();
    }
}

closeExternalModal() {
    const modal = document.getElementById('externalQuickViewModal');
    if (modal) {
        // إضافة animation للخروج
        modal.style.animation = 'modalFadeOut 0.3s ease forwards';
        modal.querySelector('.external-modal-content').style.animation = 'modalScaleOut 0.3s ease forwards';
        
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            // إعادة تفعيل التمرير
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            
            // إزالة event listener
            document.removeEventListener('keydown', this.handleEscapeKey);
        }, 300);
    }
}

// تحديث دالة setupQuickViewEventListeners للعمل مع الـ modal الخارجي
setupQuickViewEventListeners() {
    // Add to cart from quick view
    document.querySelectorAll('.add-to-cart-quickview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            this.addToCart(productId);
            this.closeExternalModal();
        });
    });

    // Quantity controls in quick view
    document.querySelectorAll('.quick-view-cart-controls .increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            this.increaseQuantity(productId);
            this.updateExternalQuickViewContent(productId);
        });
    });

    document.querySelectorAll('.quick-view-cart-controls .decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            this.decreaseQuantity(productId);
            this.updateExternalQuickViewContent(productId);
        });
    });

    document.querySelectorAll('.quick-view-cart-controls .remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.productId);
            this.removeFromCart(productId);
            this.closeExternalModal();
        });
    });
}

updateExternalQuickViewContent(productId) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
        const modalBody = document.querySelector('.external-modal-body');
        if (modalBody) {
            modalBody.innerHTML = this.createQuickViewContent(product);
            this.setupQuickViewEventListeners();
        }
    }
}

    showLoadingState() {
        const loadingState = document.getElementById("loadingState");
        const noResults = document.getElementById("noResults");
        const productsGrid = document.getElementById("productsGrid");

        if (loadingState) loadingState.style.display = "block";
        if (noResults) noResults.style.display = "none";
        if (productsGrid) productsGrid.innerHTML = "";
    }

    hideLoadingState() {
        const loadingState = document.getElementById("loadingState");
        if (loadingState) loadingState.style.display = "none";
    }

    showNoResultsState() {
        const noResults = document.getElementById("noResults");
        const productsGrid = document.getElementById("productsGrid");
        const pagination = document.getElementById("pagination");

        if (noResults) noResults.style.display = "block";
        if (productsGrid) productsGrid.innerHTML = "";
        if (pagination) pagination.innerHTML = "";
        this.hideLoadingState();
    }

    hideNoResultsState() {
        const noResults = document.getElementById("noResults");
        if (noResults) noResults.style.display = "none";
    }

    showErrorState() {
        console.error("Failed to load products");
        this.showToast("Error loading products. Please try again.", "error");
    }

    showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast-notification ${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        const toastStyle = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? 'var(--deep-teal)' : type === 'error' ? '#dc3545' : '#ffc107'};
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
        `;

        toast.style.cssText = toastStyle;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = "slideOutRight 0.3s ease forwards";
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    updateProductCount() {
        const count = this.filteredProducts.length;
        console.log(`Showing ${count} products`);
    }

    handleURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get("category");

        if (category && this.isValidCategory(category)) {
            this.filters.category = category;
            const categoryFilter = document.getElementById("categoryFilter");
            if (categoryFilter) {
                categoryFilter.value = category;
            }
            this.applyFilters();
            this.updateActiveFilters();
        }
    }

    isValidCategory(category) {
        return ["jewelry", "pottery", "leather", "rugs", "cotton"].includes(category);
    }

    updateTranslations() {
        window.addEventListener("languageChanged", () => {
            this.renderProducts();
            this.updateActiveFilters();
        });
    }
}

// Initialize shop manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    window.shopManager = new ShopManager();
});

// Enhanced global cart functions
window.addToCart = (product) => {
    if (window.shopManager) {
        return window.shopManager.addToCart(product.id || product);
    }
    return false;
};

window.getCart = () => {
    return window.shopManager ? window.shopManager.cart : [];
};

window.clearCart = () => {
    if (window.shopManager) {
        window.shopManager.clearCart();
    }
};

window.refreshCart = () => {
    if (window.shopManager) {
        window.shopManager.refreshCartFromStorage();
    }
};

// New global functions for cart management
window.increaseQuantity = (productId) => {
    if (window.shopManager) {
        window.shopManager.increaseQuantity(productId);
    }
};

window.decreaseQuantity = (productId) => {
    if (window.shopManager) {
        window.shopManager.decreaseQuantity(productId);
    }
};

window.removeFromCart = (productId) => {
    if (window.shopManager) {
        window.shopManager.removeFromCart(productId);
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ShopManager;
}