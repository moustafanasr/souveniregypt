// language-switcher-my-orders.js - Enhanced Language switching functionality for My Orders page
const ordersTranslations = {
    en: {
        // Page Title and Header
        "orders.title": "My Orders",
        "orders.subtitle": "View and manage your order history",
        
        // Sidebar Navigation
        "sidebar.dashboard": "Dashboard",
        "sidebar.orders": "My Orders",
        "sidebar.addresses": "My Addresses",
        "sidebar.details": "Account Details",
        "sidebar.wishlist": "Wishlist",
        "sidebar.logout": "Logout",
        
        // Filters
        "orders.filter.status": "Filter by Status:",
        "orders.filter.sort": "Sort by:",
        "orders.filter.all": "All Orders",
        "orders.filter.pending": "Pending",
        "orders.filter.processing": "Processing",
        "orders.filter.shipped": "Shipped",
        "orders.filter.delivered": "Delivered",
        "orders.filter.cancelled": "Cancelled",
        "orders.sort.newest": "Newest First",
        "orders.sort.oldest": "Oldest First",
        "orders.sort.priceHigh": "Price: High to Low",
        "orders.sort.priceLow": "Price: Low to High",
        
        // Order Information
        "orders.orderId": "Order #",
        "orders.placedOn": "Placed on",
        "orders.quantity": "Quantity",
        "orders.total": "Total",
        
        // Order Status
        "orders.status.pending": "Pending",
        "orders.status.processing": "Processing",
        "orders.status.shipped": "Shipped",
        "orders.status.delivered": "Delivered",
        "orders.status.cancelled": "Cancelled",
        
        // Action Buttons
        "orders.viewDetails": "View Details",
        "orders.reorder": "Reorder",
        "orders.downloadInvoice": "Download Invoice",
        "orders.trackOrder": "Track Order",
        "orders.cancelOrder": "Cancel Order",
        
        // Empty State
        "orders.empty.title": "No Orders Yet",
        "orders.empty.description": "You haven't placed any orders. Start shopping to see your orders here.",
        "orders.empty.shop": "Start Shopping",
        
        // Notifications
        "orders.notification.reorder": "Items added to cart for reordering!",
        "orders.notification.cancelled": "Order cancelled successfully",
        "orders.notification.invoice": "Invoice downloaded successfully!",
        "orders.notification.tracking": "Tracking information not available yet",
        "orders.notification.generating": "Generating invoice..."
    },
    it: {
        // Page Title and Header
        "orders.title": "I Miei Ordini",
        "orders.subtitle": "Visualizza e gestisci la cronologia degli ordini",
        
        // Sidebar Navigation
        "sidebar.dashboard": "Dashboard",
        "sidebar.orders": "I Miei Ordini",
        "sidebar.addresses": "I Miei Indirizzi",
        "sidebar.details": "Dettagli Account",
        "sidebar.wishlist": "Lista Desideri",
        "sidebar.logout": "Esci",
        
        // Filters
        "orders.filter.status": "Filtra per Stato:",
        "orders.filter.sort": "Ordina per:",
        "orders.filter.all": "Tutti gli Ordini",
        "orders.filter.pending": "In Attesa",
        "orders.filter.processing": "In Elaborazione",
        "orders.filter.shipped": "Spedito",
        "orders.filter.delivered": "Consegnato",
        "orders.filter.cancelled": "Annullato",
        "orders.sort.newest": "Più Recenti",
        "orders.sort.oldest": "Più Vecchi",
        "orders.sort.priceHigh": "Prezzo: Alto a Basso",
        "orders.sort.priceLow": "Prezzo: Basso ad Alto",
        
        // Order Information
        "orders.orderId": "Ordine #",
        "orders.placedOn": "Effettuato il",
        "orders.quantity": "Quantità",
        "orders.total": "Totale",
        
        // Order Status
        "orders.status.pending": "In Attesa",
        "orders.status.processing": "In Elaborazione",
        "orders.status.shipped": "Spedito",
        "orders.status.delivered": "Consegnato",
        "orders.status.cancelled": "Annullato",
        
        // Action Buttons
        "orders.viewDetails": "Visualizza Dettagli",
        "orders.reorder": "Riordina",
        "orders.downloadInvoice": "Scarica Fattura",
        "orders.trackOrder": "Traccia Ordine",
        "orders.cancelOrder": "Annulla Ordine",
        
        // Empty State
        "orders.empty.title": "Nessun Ordine",
        "orders.empty.description": "Non hai effettuato nessun ordine. Inizia a fare acquisti per vedere i tuoi ordini qui.",
        "orders.empty.shop": "Inizia Acquisti",
        
        // Notifications
        "orders.notification.reorder": "Articoli aggiunti al carrello per il riordino!",
        "orders.notification.cancelled": "Ordine annullato con successo",
        "orders.notification.invoice": "Fattura scaricata con successo!",
        "orders.notification.tracking": "Informazioni di tracking non ancora disponibili",
        "orders.notification.generating": "Generazione fattura in corso..."
    },
    fr: {
        // Page Title and Header
        "orders.title": "Mes Commandes",
        "orders.subtitle": "Affichez et gérez votre historique de commandes",
        
        // Sidebar Navigation
        "sidebar.dashboard": "Tableau de Bord",
        "sidebar.orders": "Mes Commandes",
        "sidebar.addresses": "Mes Adresses",
        "sidebar.details": "Détails du Compte",
        "sidebar.wishlist": "Liste de Souhaits",
        "sidebar.logout": "Déconnexion",
        
        // Filters
        "orders.filter.status": "Filtrer par Statut:",
        "orders.filter.sort": "Trier par:",
        "orders.filter.all": "Toutes les Commandes",
        "orders.filter.pending": "En Attente",
        "orders.filter.processing": "En Traitement",
        "orders.filter.shipped": "Expédié",
        "orders.filter.delivered": "Livré",
        "orders.filter.cancelled": "Annulé",
        "orders.sort.newest": "Plus Récent",
        "orders.sort.oldest": "Plus Ancien",
        "orders.sort.priceHigh": "Prix: Élevé à Bas",
        "orders.sort.priceLow": "Prix: Bas à Élevé",
        
        // Order Information
        "orders.orderId": "Commande #",
        "orders.placedOn": "Passée le",
        "orders.quantity": "Quantité",
        "orders.total": "Total",
        
        // Order Status
        "orders.status.pending": "En Attente",
        "orders.status.processing": "En Traitement",
        "orders.status.shipped": "Expédié",
        "orders.status.delivered": "Livré",
        "orders.status.cancelled": "Annulé",
        
        // Action Buttons
        "orders.viewDetails": "Voir Détails",
        "orders.reorder": "Commander à Nouveau",
        "orders.downloadInvoice": "Télécharger Facture",
        "orders.trackOrder": "Suivre Commande",
        "orders.cancelOrder": "Annuler Commande",
        
        // Empty State
        "orders.empty.title": "Aucune Commande",
        "orders.empty.description": "Vous n'avez passé aucune commande. Commencez vos achats pour voir vos commandes ici.",
        "orders.empty.shop": "Commencer les Achats",
        
        // Notifications
        "orders.notification.reorder": "Articles ajoutés au panier pour recommander!",
        "orders.notification.cancelled": "Commande annulée avec succès",
        "orders.notification.invoice": "Facture téléchargée avec succès!",
        "orders.notification.tracking": "Informations de suivi pas encore disponibles",
        "orders.notification.generating": "Génération de la facture..."
    },
    ar: {
        // Page Title and Header
        "orders.title": "طلباتي",
        "orders.subtitle": "عرض وإدارة سجل طلباتك",
        
        // Sidebar Navigation
        "sidebar.dashboard": "لوحة التحكم",
        "sidebar.orders": "طلباتي",
        "sidebar.addresses": "عناويني",
        "sidebar.details": "تفاصيل الحساب",
        "sidebar.wishlist": "قائمة الرغبات",
        "sidebar.logout": "تسجيل الخروج",
        
        // Filters
        "orders.filter.status": "تصفية حسب الحالة:",
        "orders.filter.sort": "ترتيب حسب:",
        "orders.filter.all": "جميع الطلبات",
        "orders.filter.pending": "قيد الانتظار",
        "orders.filter.processing": "قيد المعالجة",
        "orders.filter.shipped": "تم الشحن",
        "orders.filter.delivered": "تم التوصيل",
        "orders.filter.cancelled": "ملغى",
        "orders.sort.newest": "الأحدث أولاً",
        "orders.sort.oldest": "الأقدم أولاً",
        "orders.sort.priceHigh": "السعر: من الأعلى للأدنى",
        "orders.sort.priceLow": "السعر: من الأدنى للأعلى",
        
        // Order Information
        "orders.orderId": "طلب #",
        "orders.placedOn": "تم الطلب في",
        "orders.quantity": "الكمية",
        "orders.total": "المجموع",
        
        // Order Status
        "orders.status.pending": "قيد الانتظار",
        "orders.status.processing": "قيد المعالجة",
        "orders.status.shipped": "تم الشحن",
        "orders.status.delivered": "تم التوصيل",
        "orders.status.cancelled": "ملغى",
        
        // Action Buttons
        "orders.viewDetails": "عرض التفاصيل",
        "orders.reorder": "إعادة الطلب",
        "orders.downloadInvoice": "تحميل الفاتورة",
        "orders.trackOrder": "تتبع الطلب",
        "orders.cancelOrder": "إلغاء الطلب",
        
        // Empty State
        "orders.empty.title": "لا توجد طلبات",
        "orders.empty.description": "لم تقم بأي طلبات بعد. ابدأ التسوق لترى طلباتك هنا.",
        "orders.empty.shop": "ابدأ التسوق",
        
        // Notifications
        "orders.notification.reorder": "تم إضافة العناصر إلى سلة التسوق لإعادة الطلب!",
        "orders.notification.cancelled": "تم إلغاء الطلب بنجاح",
        "orders.notification.invoice": "تم تحميل الفاتورة بنجاح!",
        "orders.notification.tracking": "معلومات التتبع غير متاحة بعد",
        "orders.notification.generating": "جاري إنشاء الفاتورة..."
    }
};

// Initialize orders translations
function initOrdersTranslations() {
    if (!window.translations) {
        window.translations = {};
    }
    
    // Merge orders translations with existing translations
    Object.keys(ordersTranslations).forEach(lang => {
        if (!window.translations[lang]) {
            window.translations[lang] = {};
        }
        window.translations[lang] = {
            ...window.translations[lang],
            ...ordersTranslations[lang]
        };
    });
}

// Update orders page specific translations
function updateOrdersTranslations(lang) {
    const translations = window.translations[lang] || window.translations.en;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[key]) {
            if (element.placeholder) {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Update sidebar navigation (which doesn't have data-key attributes)
    updateSidebarTranslations(lang);
    
    // Update page title and meta description
    updateOrdersPageMetadata(lang);
    
    // Update text direction for RTL languages
    updateTextDirection(lang);
}

function updateSidebarTranslations(lang) {
    const translations = window.translations[lang] || window.translations.en;
    
    // Map sidebar items to translation keys
    const sidebarMap = {
        'Dashboard': 'sidebar.dashboard',
        'My Orders': 'sidebar.orders',
        'My Addresses': 'sidebar.addresses',
        'Account Details': 'sidebar.details',
        'Wishlist': 'sidebar.wishlist',
        'Logout': 'sidebar.logout'
    };
    
    // Update sidebar navigation text
    document.querySelectorAll('.account-nav .nav-item').forEach(item => {
        const textNode = Array.from(item.childNodes).find(node => 
            node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );
        
        if (textNode) {
            const originalText = textNode.textContent.trim();
            const translationKey = sidebarMap[originalText];
            
            if (translationKey && translations[translationKey]) {
                textNode.textContent = ' ' + translations[translationKey] + ' ';
            }
        }
    });
}

function updateOrdersPageMetadata(lang) {
    const titles = {
        'en': 'My Orders - SOUVENIR EGYPT STORE',
        'it': 'I Miei Ordini - SOUVENIR EGYPT STORE',
        'fr': 'Mes Commandes - SOUVENIR EGYPT STORE',
        'ar': 'طلباتي - متجر سوفينير مصر'
    };
    
    document.title = titles[lang] || titles['en'];
    
    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            'en': 'View and manage your order history at SOUVENIR EGYPT STORE. Track your purchases and download invoices.',
            'it': 'Visualizza e gestisci la cronologia degli ordini su SOUVENIR EGYPT STORE. Traccia i tuoi acquisti e scarica le fatture.',
            'fr': 'Affichez et gérez votre historique de commandes sur SOUVENIR EGYPT STORE. Suivez vos achats et téléchargez des factures.',
            'ar': 'عرض وإدارة سجل طلباتك في متجر سوفينير مصر. تتبع مشترياتك وقم بتحميل الفواتير.'
        };
        metaDescription.setAttribute('content', descriptions[lang] || descriptions['en']);
    }
}

function updateTextDirection(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
        
        // Add RTL specific styles for orders page
        addRTLStyles();
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.body.classList.remove('rtl');
        
        // Remove RTL styles if they exist
        removeRTLStyles();
    }
}

function addRTLStyles() {
    if (!document.querySelector('#rtl-orders-styles')) {
        const styles = document.createElement('style');
        styles.id = 'rtl-orders-styles';
        styles.textContent = `
            /* RTL specific styles for My Orders page */
            .rtl .account-layout {
                direction: rtl;
            }
            
            .rtl .account-sidebar {
                text-align: right;
            }
            
            .rtl .user-profile {
                text-align: right;
            }
            
            .rtl .account-nav .nav-item {
                text-align: right;
                justify-content: flex-end;
            }
            
            .rtl .account-nav .nav-item i {
                margin-left: 1rem;
                margin-right: 0;
            }
            
            .rtl .order-count,
            .rtl .wishlist-count {
                margin-left: 0;
                margin-right: auto;
            }
            
            .rtl .account-header {
                text-align: right;
            }
            
            .rtl .orders-filter {
                text-align: right;
            }
            
            .rtl .filter-group {
                text-align: right;
            }
            
            .rtl .order-header {
                text-align: right;
            }
            
            .rtl .order-meta {
                text-align: right;
            }
            
            .rtl .order-items {
                text-align: right;
            }
            
            .rtl .order-item {
                flex-direction: row-reverse;
                text-align: right;
            }
            
            .rtl .item-details {
                text-align: right;
                margin-right: 1rem;
                margin-left: 0;
            }
            
            .rtl .order-footer {
                text-align: right;
                flex-direction: row-reverse;
            }
            
            .rtl .order-actions {
                justify-content: flex-start;
            }
            
            .rtl .empty-state {
                text-align: right;
            }
            
            @media (max-width: 768px) {
                .rtl .order-item {
                    flex-direction: column;
                    text-align: center;
                }
                
                .rtl .order-footer {
                    flex-direction: column;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

function removeRTLStyles() {
    const rtlStyles = document.querySelector('#rtl-orders-styles');
    if (rtlStyles) {
        rtlStyles.remove();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initOrdersTranslations();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    updateOrdersTranslations(savedLang);
    
    // Listen for language changes from header
    window.addEventListener('languageChanged', (e) => {
        updateOrdersTranslations(e.detail.language);
    });
    
    // Setup language switcher event listeners
    setupLanguageSwitcher();
});

// function setupLanguageSwitcher() {
//     // Language dropdown functionality
//     const languageToggle = document.getElementById('languageToggle');
//     const languageDropdown = document.getElementById('languageDropdown');
    
//     if (languageToggle && languageDropdown) {
//         languageToggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             languageDropdown.classList.toggle('show');
//         });
        
//         // Language selection
//         document.querySelectorAll('.lang-option').forEach(option => {
//             option.addEventListener('click', (e) => {
//                 e.stopPropagation();
//                 const lang = option.dataset.lang;
                
//                 // Update active state
//                 document.querySelectorAll('.lang-option').forEach(opt => {
//                     opt.classList.remove('active');
//                 });
//                 option.classList.add('active');
                
//                 // Update current language display
//                 const currentLang = document.querySelector('.current-lang');
//                 if (currentLang) {
//                     currentLang.textContent = lang.toUpperCase();
//                 }
                
//                 // Switch language
//                 if (window.switchLanguage) {
//                     window.switchLanguage(lang);
//                 } else {
//                     // Fallback if global switchLanguage is not available
//                     updateOrdersTranslations(lang);
//                     localStorage.setItem('preferred-language', lang);
//                 }
                
//                 // Close dropdown
//                 languageDropdown.classList.remove('show');
//             });
//         });
        
//         // Close dropdown when clicking outside
//         document.addEventListener('click', () => {
//             languageDropdown.classList.remove('show');
//         });
//     }
// }

// Make functions available globally
window.updateOrdersTranslations = updateOrdersTranslations;
window.ordersTranslations = ordersTranslations;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateOrdersTranslations, ordersTranslations };
}