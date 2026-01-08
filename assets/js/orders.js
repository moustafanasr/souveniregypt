// orders.js - Enhanced Orders management functionality
class OrdersManager {
    constructor() {
        this.orders = [];
        this.filteredOrders = [];
        this.filters = {
            status: 'all',
            sort: 'newest'
        };
        this.init();
    }

    init() {
        this.loadOrders();
        this.setupEventListeners();
        this.applyFilters();
        this.updateTranslations();
        this.setupUserSession();
    }

    setupUserSession() {
        // Check if user is logged in and update sidebar
        const isLoggedIn = localStorage.getItem('souvenir-user-loggedin') === 'true';
        if (isLoggedIn) {
            this.updateUserInfo();
            this.showLoggedInState();
        } else {
            this.showLoggedOutState();
        }
    }

    updateUserInfo() {
        const userData = JSON.parse(localStorage.getItem('souvenir-user-data') || '{}');
        const userName = document.querySelector('.user-profile .user-name');
        const userEmail = document.querySelector('.user-profile .user-email');
        
        if (userName && userData.name) {
            userName.textContent = userData.name;
        }
        if (userEmail && userData.email) {
            userEmail.textContent = userData.email;
        }
    }

    showLoggedInState() {
        // Show profile links in sidebar
        const profileLink = document.querySelector('#profileLink');
        const ordersLink = document.querySelector('#ordersLink');
        const logoutBtn = document.querySelector('#logoutBtn');
        
        if (profileLink) profileLink.style.display = 'flex';
        if (ordersLink) ordersLink.style.display = 'flex';
        if (logoutBtn) logoutBtn.style.display = 'flex';
    }

    showLoggedOutState() {
        // Redirect to login if not authenticated
        setTimeout(() => {
            if (!localStorage.getItem('souvenir-user-loggedin')) {
                window.location.href = 'login.html';
            }
        }, 1000);
    }

    loadOrders() {
        // Try to load from localStorage first, then use mock data
        try {
            const savedOrders = localStorage.getItem('souvenir-user-orders');
            if (savedOrders) {
                this.orders = JSON.parse(savedOrders);
            } else {
                // Mock data that matches the HTML structure
                this.orders = this.getMockOrders();
                this.saveOrdersToStorage();
            }
        } catch (error) {
            console.error('Error loading orders:', error);
            this.orders = this.getMockOrders();
        }

        this.filteredOrders = [...this.orders];
    }

    getMockOrders() {
        return [
            {
                id: 'SOU-2024-001',
                date: '2024-01-15',
                status: 'delivered',
                items: [
                    {
                        name: 'Silver Ankh Necklace',
                        price: 89.99,
                        quantity: 1,
                        image: 'assets/img/jewelry.jpeg',
                        category: 'jewelry'
                    },
                    {
                        name: 'Hand-painted Pottery Vase',
                        price: 45.50,
                        quantity: 2,
                        image: 'assets/img/pottery.png',
                        category: 'pottery'
                    }
                ],
                total: 189.99,
                shippingAddress: {
                    name: 'John Doe',
                    street: '123 Main St',
                    city: 'Cairo',
                    country: 'Egypt'
                },
                trackingNumber: 'TRK123456789'
            },
            {
                id: 'SOU-2024-002',
                date: '2024-01-10',
                status: 'shipped',
                items: [
                    {
                        name: 'Traditional Kilim Rug',
                        price: 250.00,
                        quantity: 1,
                        image: 'assets/img/Kilimandcarpet.png',
                        category: 'rugs'
                    }
                ],
                total: 250.00,
                shippingAddress: {
                    name: 'John Doe',
                    street: '123 Main St',
                    city: 'Cairo',
                    country: 'Egypt'
                },
                trackingNumber: 'TRK987654321'
            },
            {
                id: 'SOU-2024-003',
                date: '2024-01-05',
                status: 'processing',
                items: [
                    {
                        name: 'Leather Handbag',
                        price: 120.00,
                        quantity: 1,
                        image: 'assets/img/leather.png',
                        category: 'leather'
                    }
                ],
                total: 120.00,
                shippingAddress: {
                    name: 'John Doe',
                    street: '123 Main St',
                    city: 'Cairo',
                    country: 'Egypt'
                }
            }
        ];
    }

    saveOrdersToStorage() {
        try {
            localStorage.setItem('souvenir-user-orders', JSON.stringify(this.orders));
        } catch (error) {
            console.error('Error saving orders:', error);
        }
    }

    setupEventListeners() {
        // Status filter
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.filters.status = e.target.value;
                this.applyFilters();
            });
        }

        // Sort filter
        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.filters.sort = e.target.value;
                this.applyFilters();
            });
        }

        // Reorder buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.reorder-btn')) {
                const orderCard = e.target.closest('.order-card');
                const orderId = orderCard.dataset.orderId;
                this.reorderItems(orderId);
            }

            // Track order buttons
            if (e.target.closest('.track-btn')) {
                const orderCard = e.target.closest('.order-card');
                const orderId = orderCard.dataset.orderId;
                this.trackOrder(orderId);
            }

            // Cancel order buttons
            if (e.target.closest('.cancel-btn')) {
                const orderCard = e.target.closest('.order-card');
                const orderId = orderCard.dataset.orderId;
                this.cancelOrder(orderId);
            }

            // Download invoice buttons
            if (e.target.closest('.invoice-btn')) {
                const orderCard = e.target.closest('.order-card');
                const orderId = orderCard.dataset.orderId;
                this.downloadInvoice(orderId);
            }

            // Logout buttons
            if (e.target.closest('.logout-btn')) {
                this.logout();
            }
        });

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.updateTranslations();
        });

        // Listen for cart updates
        window.addEventListener('cartUpdated', () => {
            this.updateOrderCounts();
        });
    }

    applyFilters() {
        let filtered = [...this.orders];

        // Apply status filter
        if (this.filters.status !== 'all') {
            filtered = filtered.filter(order => order.status === this.filters.status);
        }

        // Apply sorting
        filtered = this.sortOrders(filtered, this.filters.sort);

        this.filteredOrders = filtered;
        this.renderOrders();
        this.updateEmptyState();
    }

    sortOrders(orders, sortBy) {
        switch (sortBy) {
            case 'newest':
                return orders.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'oldest':
                return orders.sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'price-high':
                return orders.sort((a, b) => b.total - a.total);
            case 'price-low':
                return orders.sort((a, b) => a.total - b.total);
            default:
                return orders;
        }
    }

    renderOrders() {
        const container = document.querySelector('.orders-container');
        const emptyState = document.getElementById('emptyOrdersState');

        if (!container) return;

        if (this.filteredOrders.length === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        container.innerHTML = this.filteredOrders.map(order => this.createOrderCard(order)).join('');

        // Update translations for newly rendered content
        this.updateTranslations();
    }

    createOrderCard(order) {
        const statusClass = `status-${order.status}`;
        const statusIcon = this.getStatusIcon(order.status);
        const statusText = this.getStatusText(order.status);
        const formattedDate = this.formatDate(order.date);

        return `
            <div class="order-card" data-order-id="${order.id}" data-status="${order.status}">
                <div class="order-header">
                    <div class="order-meta">
                        <h3 class="order-id" data-key="orders.orderId">Order #${order.id}</h3>
                        <span class="order-date" data-key="orders.placedOn">${formattedDate}</span>
                    </div>
                    <div class="order-status ${statusClass}">
                        <i class="${statusIcon}"></i>
                        <span data-key="orders.status.${order.status}">${statusText}</span>
                    </div>
                </div>

                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <img src="${item.image}" alt="${item.name}" class="item-image" onerror="this.src='assets/img/placeholder-product.jpg'">
                            <div class="item-details">
                                <h4>${item.name}</h4>
                                <p class="item-price">$${item.price.toFixed(2)}</p>
                                <p class="item-quantity" data-key="orders.quantity">Quantity: ${item.quantity}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="order-footer">
                    <div class="order-total">
                        <strong data-key="orders.total">Total: $${order.total.toFixed(2)}</strong>
                    </div>
                    <div class="order-actions">
                        ${this.getActionButtons(order)}
                    </div>
                </div>
            </div>
        `;
    }

    getStatusIcon(status) {
        const icons = {
            pending: 'fas fa-clock',
            processing: 'fas fa-cog',
            shipped: 'fas fa-shipping-fast',
            delivered: 'fas fa-check-circle',
            cancelled: 'fas fa-times-circle'
        };
        return icons[status] || 'fas fa-question-circle';
    }

    getStatusText(status) {
        const statusMap = {
            pending: 'Pending',
            processing: 'Processing',
            shipped: 'Shipped',
            delivered: 'Delivered',
            cancelled: 'Cancelled'
        };
        return statusMap[status] || status;
    }

    getActionButtons(order) {
        const baseButtons = `
            <a href="order-details.html?order=${order.id}" class="btn btn-primary">
                <span data-key="orders.viewDetails">View Details</span>
            </a>
        `;

        switch (order.status) {
            case 'delivered':
                return `
                    <button class="btn btn-outline reorder-btn">
                        <i class="fas fa-redo"></i>
                        <span data-key="orders.reorder">Reorder</span>
                    </button>
                    <button class="btn btn-outline invoice-btn">
                        <i class="fas fa-download"></i>
                        <span data-key="orders.downloadInvoice">Download Invoice</span>
                    </button>
                    ${baseButtons}
                `;
            case 'shipped':
                return `
                    <button class="btn btn-outline track-btn">
                        <i class="fas fa-map-marker-alt"></i>
                        <span data-key="orders.trackOrder">Track Order</span>
                    </button>
                    ${baseButtons}
                `;
            case 'processing':
                return `
                    <button class="btn btn-outline cancel-btn">
                        <i class="fas fa-times"></i>
                        <span data-key="orders.cancelOrder">Cancel Order</span>
                    </button>
                    ${baseButtons}
                `;
            default:
                return baseButtons;
        }
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    reorderItems(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        // Add all items from the order to the cart
        let itemsAdded = 0;
        order.items.forEach(item => {
            if (window.addToCart) {
                const success = window.addToCart({
                    id: this.generateProductId(item.name),
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    category: item.category
                });
                if (success) itemsAdded++;
            }
        });

        if (itemsAdded > 0) {
            this.showNotification(`${itemsAdded} items added to cart for reordering!`, 'success');
            
            // Redirect to cart page after a delay
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 1500);
        }
    }

    trackOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order || !order.trackingNumber) {
            this.showNotification('Tracking information not available yet', 'info');
            return;
        }

        // In a real app, this would open a tracking modal or redirect to carrier website
        this.showNotification(`Tracking number: ${order.trackingNumber}`, 'info');
        
        // Simulate opening tracking page
        const trackingUrl = `https://tracking.example.com/track/${order.trackingNumber}`;
        window.open(trackingUrl, '_blank');
    }

    cancelOrder(orderId) {
        if (!confirm('Are you sure you want to cancel this order?')) {
            return;
        }

        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        // Update order status
        order.status = 'cancelled';
        this.saveOrdersToStorage();
        
        // Re-render the orders
        this.applyFilters();
        
        this.showNotification('Order cancelled successfully', 'success');
    }

    downloadInvoice(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        // Show loading state
        this.showNotification('Generating invoice...', 'info');
        
        // Simulate PDF generation delay
        setTimeout(() => {
            const invoiceContent = this.generateInvoiceContent(order);
            this.downloadPDF(invoiceContent, `${order.id}-invoice.pdf`);
            this.showNotification('Invoice downloaded successfully!', 'success');
        }, 2000);
    }

    generateInvoiceContent(order) {
        // This would generate actual PDF content in a real application
        return `
            SOUVENIR EGYPT STORE - INVOICE
            ================================
            
            Invoice: ${order.id}
            Date: ${this.formatDate(order.date)}
            Status: ${this.getStatusText(order.status)}
            
            SHIPPING ADDRESS:
            ${order.shippingAddress.name}
            ${order.shippingAddress.street}
            ${order.shippingAddress.city}, ${order.shippingAddress.country}
            
            ORDER ITEMS:
            ${order.items.map(item => 
                `• ${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
            ).join('\n')}
            
            ORDER TOTAL: $${order.total.toFixed(2)}
            
            Thank you for your purchase!
            SOUVENIR EGYPT STORE
            www.souveniregypt.store
        `;
    }

    downloadPDF(content, filename) {
        // Simple text file download for demo purposes
        // In a real app, use a PDF generation library like jsPDF
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    generateProductId(productName) {
        // Simple hash function for demo purposes
        return Math.abs(productName.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0));
    }

    updateEmptyState() {
        const emptyState = document.getElementById('emptyOrdersState');
        const ordersContainer = document.querySelector('.orders-container');
        
        if (!emptyState || !ordersContainer) return;

        if (this.filteredOrders.length === 0) {
            emptyState.style.display = 'block';
            ordersContainer.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            ordersContainer.style.display = 'block';
        }
    }

    updateOrderCounts() {
        const orderCount = document.querySelector('.order-count');
        if (orderCount) {
            orderCount.textContent = this.orders.length;
        }
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('souvenir-user-loggedin');
            localStorage.removeItem('souvenir-user-data');
            window.location.href = 'login.html';
        }
    }

    updateTranslations() {
        // This will be handled by the language switcher
        if (window.updatePageTranslations) {
            window.updatePageTranslations();
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.order-notification').forEach(notification => {
            notification.remove();
        });

        const notification = document.createElement('div');
        notification.className = `order-notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                          type === 'error' ? 'fa-exclamation-circle' : 
                          'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

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
}

// Initialize orders manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ordersManager = new OrdersManager();
});