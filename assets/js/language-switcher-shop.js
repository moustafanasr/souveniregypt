// language-switcher-shop.js - Language switching functionality for shop page
let currentLang = localStorage.getItem('preferred-language') || 'en';

const translations = {
    en: {
        // Navigation
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
        "nav.logout": "Logout",

        // Shop Page
        "shop.title": "Our Collections",
        "shop.subtitle": "Discover authentic Egyptian handcrafts, each piece telling a story of heritage and craftsmanship.",
        "shop.search.placeholder": "Search products...",
        "shop.search.button": "Search",
        "shop.filter.category": "Category",
        "shop.filter.price": "Price Range",
        "shop.filter.all": "All",
        "shop.sort.title": "Sort By",
        "shop.sort.featured": "Featured",
        "shop.sort.newest": "Newest",
        "shop.sort.priceLow": "Price: Low to High",
        "shop.sort.priceHigh": "Price: High to Low",
        "shop.sort.name": "Name: A to Z",
        "shop.loading": "Loading products...",
        "shop.noResults.title": "No products found",
        "shop.noResults.message": "Try adjusting your search or filters to find what you're looking for.",
        "shop.noResults.reset": "Reset Filters",
        "shop.button.addToCart": "Add to Cart",
        "shop.button.quickView": "Quick View",
        "shop.badge.featured": "Featured",
        "shop.badge.outOfStock": "Out of Stock",
        "shop.quickView.addToCart": "Add to Cart",
        "shop.quickView.wishlist": "Add to Wishlist",
        "shop.quickView.availability": "Availability",
        "shop.quickView.inStock": "In Stock",
        "shop.quickView.outOfStock": "Out of Stock",
        "shop.quickView.artisan": "Artisan",

        // Categories
        "categories.jewelry": "Jewelry",
        "categories.pottery": "Pottery",
        "categories.leather": "Leather Products",
        "categories.rugs": "Rugs & Kilims",
        "categories.cotton": "Egyptian Cotton",

        // Footer
        "footer.description": "Bringing authentic Egyptian handcrafts to the world. Each piece tells a story of heritage, craftsmanship, and timeless beauty.",
        "footer.shop": "SHOP",
        "footer.help": "HELP",
        "footer.shipping": "Shipping Information",
        "footer.returns": "Returns & Exchanges",
        "footer.size": "Size Guide",
        "footer.faq": "FAQs",
        "footer.contact": "Contact Us",
        "footer.payment": "PAYMENT METHODS"
    },
    it: {
        // Navigation
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
        "nav.logout": "Esci",

        // Shop Page
        "shop.title": "Le Nostre Collezioni",
        "shop.subtitle": "Scopri autentici artigianati egiziani, ogni pezzo racconta una storia di patrimonio e maestria.",
        "shop.search.placeholder": "Cerca prodotti...",
        "shop.search.button": "Cerca",
        "shop.filter.category": "Categoria",
        "shop.filter.price": "Fascia di Prezzo",
        "shop.filter.all": "Tutti",
        "shop.sort.title": "Ordina Per",
        "shop.sort.featured": "In Evidenza",
        "shop.sort.newest": "Più Recenti",
        "shop.sort.priceLow": "Prezzo: Crescente",
        "shop.sort.priceHigh": "Prezzo: Decrescente",
        "shop.sort.name": "Nome: A alla Z",
        "shop.loading": "Caricamento prodotti...",
        "shop.noResults.title": "Nessun prodotto trovato",
        "shop.noResults.message": "Prova ad aggiustare la tua ricerca o i filtri per trovare quello che stai cercando.",
        "shop.noResults.reset": "Reimposta Filtri",
        "shop.button.addToCart": "Aggiungi al Carrello",
        "shop.button.quickView": "Anteprima",
        "shop.badge.featured": "In Evidenza",
        "shop.badge.outOfStock": "Esaurito",
        "shop.quickView.addToCart": "Aggiungi al Carrello",
        "shop.quickView.wishlist": "Aggiungi alla Lista Desideri",
        "shop.quickView.availability": "Disponibilità",
        "shop.quickView.inStock": "Disponibile",
        "shop.quickView.outOfStock": "Esaurito",
        "shop.quickView.artisan": "Artigiano",

        // Categories
        "categories.jewelry": "Gioielli",
        "categories.pottery": "Ceramica",
        "categories.leather": "Prodotti in Pelle",
        "categories.rugs": "Tappeti & Kilim",
        "categories.cotton": "Cotone Egiziano",

        // Footer
        "footer.description": "Portando l'autentico artigianato egiziano nel mondo. Ogni pezzo racconta una storia di patrimonio, maestria e bellezza senza tempo.",
        "footer.shop": "NEGOZIO",
        "footer.help": "AIUTO",
        "footer.shipping": "Informazioni Spedizione",
        "footer.returns": "Resi & Cambi",
        "footer.size": "Guida Taglie",
        "footer.faq": "FAQ",
        "footer.contact": "Contattaci",
        "footer.payment": "METODI DI PAGAMENTO"
    },
    fr: {
        // Navigation
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
        "nav.logout": "Déconnexion",

        // Shop Page
        "shop.title": "Nos Collections",
        "shop.subtitle": "Découvrez des artisanats égyptiens authentiques, chaque pièce racontant une histoire de patrimoine et de savoir-faire.",
        "shop.search.placeholder": "Rechercher des produits...",
        "shop.search.button": "Rechercher",
        "shop.filter.category": "Catégorie",
        "shop.filter.price": "Fourchette de Prix",
        "shop.filter.all": "Tous",
        "shop.sort.title": "Trier Par",
        "shop.sort.featured": "En Vedette",
        "shop.sort.newest": "Plus Récents",
        "shop.sort.priceLow": "Prix: Croissant",
        "shop.sort.priceHigh": "Prix: Décroissant",
        "shop.sort.name": "Nom: A à Z",
        "shop.loading": "Chargement des produits...",
        "shop.noResults.title": "Aucun produit trouvé",
        "shop.noResults.message": "Essayez d'ajuster votre recherche ou vos filtres pour trouver ce que vous cherchez.",
        "shop.noResults.reset": "Réinitialiser les Filtres",
        "shop.button.addToCart": "Ajouter au Panier",
        "shop.button.quickView": "Aperçu Rapide",
        "shop.badge.featured": "En Vedette",
        "shop.badge.outOfStock": "En Rupture",
        "shop.quickView.addToCart": "Ajouter au Panier",
        "shop.quickView.wishlist": "Ajouter à la Liste de Souhaits",
        "shop.quickView.availability": "Disponibilité",
        "shop.quickView.inStock": "En Stock",
        "shop.quickView.outOfStock": "En Rupture",
        "shop.quickView.artisan": "Artisan",

        // Categories
        "categories.jewelry": "Bijoux",
        "categories.pottery": "Poterie",
        "categories.leather": "Produits en Cuir",
        "categories.rugs": "Tapis & Kilims",
        "categories.cotton": "Coton Égyptien",

        // Footer
        "footer.description": "Apportant l'artisanat égyptien authentique au monde. Chaque pièce raconte une histoire de patrimoine, de savoir-faire et de beauté intemporelle.",
        "footer.shop": "BOUTIQUE",
        "footer.help": "AIDE",
        "footer.shipping": "Informations Livraison",
        "footer.returns": "Retours & Échanges",
        "footer.size": "Guide des Tailles",
        "footer.faq": "FAQ",
        "footer.contact": "Contactez-nous",
        "footer.payment": "MOYENS DE PAIEMENT"
    },
    ar: {
        // Navigation
        "nav.home": "الرئيسية",
        "nav.collections": "المجموعات",
        "nav.artisans": "الحرفيين",
        "nav.about": "من نحن",
        "nav.contact": "اتصل بنا",
        "nav.cart": "سلة التسوق",
        "nav.emptyCart": "سلة التسوق فارغة",
        "nav.total": "المجموع",
        "nav.viewCart": "عرض السلة",
        "nav.checkout": "الدفع",
        "nav.login": "تسجيل الدخول",
        "nav.register": "إنشاء حساب",
        "nav.profile": "ملفي",
        "nav.orders": "طلباتي",
        "nav.logout": "تسجيل الخروج",

        // Shop Page
        "shop.title": "مجموعاتنا",
        "shop.subtitle": "اكتشف الحرف اليدوية المصرية الأصيلة، كل قطعة تحكي قصة تراث وحرفية.",
        "shop.search.placeholder": "ابحث في المنتجات...",
        "shop.search.button": "بحث",
        "shop.filter.category": "الفئة",
        "shop.filter.price": "نطاق السعر",
        "shop.filter.all": "الكل",
        "shop.sort.title": "ترتيب حسب",
        "shop.sort.featured": "مميز",
        "shop.sort.newest": "الأحدث",
        "shop.sort.priceLow": "السعر: من الأقل للأعلى",
        "shop.sort.priceHigh": "السعر: من الأعلى للأقل",
        "shop.sort.name": "الاسم: من أ إلى ي",
        "shop.loading": "جاري تحميل المنتجات...",
        "shop.noResults.title": "لم يتم العثور على منتجات",
        "shop.noResults.message": "حاول تعديل البحث أو الفلاتر للعثور على ما تبحث عنه.",
        "shop.noResults.reset": "إعادة تعيين الفلاتر",
        "shop.button.addToCart": "أضف إلى السلة",
        "shop.button.quickView": "معاينة سريعة",
        "shop.badge.featured": "مميز",
        "shop.badge.outOfStock": "غير متوفر",
        "shop.quickView.addToCart": "أضف إلى السلة",
        "shop.quickView.wishlist": "أضف إلى قائمة الرغبات",
        "shop.quickView.availability": "التوفر",
        "shop.quickView.inStock": "متوفر",
        "shop.quickView.outOfStock": "غير متوفر",
        "shop.quickView.artisan": "الحرفي",

        // Categories
        "categories.jewelry": "المجوهرات",
        "categories.pottery": "الفخار",
        "categories.leather": "المنتجات الجلدية",
        "categories.rugs": "السجاد والكليم",
        "categories.cotton": "القطن المصري",

        // Footer
        "footer.description": "جلب الحرف اليدوية المصرية الأصيلة إلى العالم. كل قطعة تحكي قصة تراث، وحرفية، وجمال خالد.",
        "footer.shop": "تسوق",
        "footer.help": "مساعدة",
        "footer.shipping": "معلومات الشحن",
        "footer.returns": "الإرجاع والاستبدال",
        "footer.size": "دليل المقاسات",
        "footer.faq": "الأسئلة الشائعة",
        "footer.contact": "اتصل بنا",
        "footer.payment": "طرق الدفع"
    }
};

function switchLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not supported`);
        return;
    }
    
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update active option for dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Update current language display for dropdown
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update page title and direction
    updatePageMetadata(lang);
    
    // Update HTML direction for RTL languages
    updateTextDirection(lang);
    
    // Update dynamic content (product cards, etc.)
    updateDynamicContent();
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
    
    console.log(`Language switched to: ${lang}`);
}

function updatePageMetadata(lang) {
    const titles = {
        'en': 'Shop - SOUVENIR Egyptian Handcrafts',
        'it': 'Negozio - SOUVENIR Artigianato Egiziano',
        'fr': 'Boutique - SOUVENIR Artisanat Égyptien',
        'ar': 'المتجر - سوفينير الحرف اليدوية المصرية'
    };
    
    document.title = titles[lang] || titles['en'];
    
    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            'en': 'Shop authentic Egyptian handcrafts and souvenirs. Handmade with love by Egyptian artisans.',
            'it': 'Acquista autentici artigianati e souvenir egiziani. Realizzati a mano con amore dagli artigiani egiziani.',
            'fr': 'Achetez des artisanats et souvenirs égyptiens authentiques. Faits main avec amour par des artisans égyptiens.',
            'ar': 'تسوق الحرف اليدوية والتذكارات المصرية الأصيلة. مصنوعة يدوياً بحب من قبل الحرفيين المصريين.'
        };
        metaDescription.setAttribute('content', descriptions[lang] || descriptions['en']);
    }
}

function updateTextDirection(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.body.classList.remove('rtl');
    }
}

function updateDynamicContent() {
    // Update product cards if shop manager exists
    if (window.shopManager) {
        window.shopManager.renderProducts();
        window.shopManager.updateActiveFilters();
    }
    
    // Update any other dynamic content
    updateFilterOptions();
    updateSortOptions();
}

function updateFilterOptions() {
    // Update filter select options
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        Array.from(categoryFilter.options).forEach(option => {
            const key = option.getAttribute('data-key');
            if (key && translations[currentLang] && translations[currentLang][key]) {
                option.textContent = translations[currentLang][key];
            }
        });
    }
    
    const sortOptions = document.getElementById('sortOptions');
    if (sortOptions) {
        Array.from(sortOptions.options).forEach(option => {
            const key = option.getAttribute('data-key');
            if (key && translations[currentLang] && translations[currentLang][key]) {
                option.textContent = translations[currentLang][key];
            }
        });
    }
}

function updateSortOptions() {
    // Update sort options text
    const sortSelect = document.getElementById('sortOptions');
    if (sortSelect) {
        const options = sortSelect.querySelectorAll('option');
        options.forEach(option => {
            const key = option.getAttribute('data-key');
            if (key && translations[currentLang] && translations[currentLang][key]) {
                option.textContent = translations[currentLang][key];
            }
        });
    }
}

// // Setup dropdown functionality
// function setupDropdownFunctionality() {
//     const languageToggle = document.getElementById('languageToggle');
//     const languageDropdown = document.getElementById('languageDropdown');

//     if (languageToggle || languageDropdown) {
//         languageToggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             const isShowing = languageDropdown.classList.contains('show');
            
//             // Close all other dropdowns first
//             closeAllDropdowns();
            
//             if (!isShowing) {
//                 languageDropdown.classList.add('show');
//                 // Update chevron icon
//                 const chevron = languageToggle.querySelector('.fa-chevron-down');
//                 if (chevron) {
//                     chevron.style.transform = 'rotate(180deg)';
//                 }
//             }
//         });

//         // Handle language selection
//         document.querySelectorAll('.lang-option').forEach(option => {
//             option.addEventListener('click', (e) => {
//                 e.stopPropagation();
//                 const lang = option.dataset.lang;
//                 switchLanguage(lang);
//                 closeLanguageDropdown();
//             });
//         });

//         // Close dropdown when clicking outside
//         document.addEventListener('click', (e) => {
//             if (!e.target.closest('.language-switcher-dropdown')) {
//                 closeLanguageDropdown();
//             }
//         });

//         // Close dropdown on escape key
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'Escape') {
//                 closeLanguageDropdown();
//             }
//         });
//     }
// }

// // Close language dropdown
// function closeLanguageDropdown() {
//     const languageDropdown = document.getElementById('languageDropdown');
//     const languageToggle = document.getElementById('languageToggle');
    
//     if (languageDropdown) {
//         languageDropdown.classList.remove('show');
//     }
    
//     if (languageToggle) {
//         const chevron = languageToggle.querySelector('.fa-chevron-down');
//         if (chevron) {
//             chevron.style.transform = 'rotate(0deg)';
//         }
//     }
// }

// // Close all dropdowns
// function closeAllDropdowns() {
//     closeLanguageDropdown();
    
//     // Close other dropdowns if they exist
//     const userMenu = document.getElementById('userMenu');
//     const cartPreview = document.getElementById('cartPreview');
    
//     if (userMenu) userMenu.classList.remove('show');
//     if (cartPreview) cartPreview.classList.remove('show');
// }

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Initialize dropdown language switcher
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        switchLanguage(option.dataset.lang);
    });
});

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLang);
}

// Save language preference when changed
document.querySelectorAll('.lang-btn, .lang-option').forEach(element => {
    element.addEventListener('click', () => {
        localStorage.setItem('preferred-language', element.dataset.lang);
    });
});

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadLanguagePreference();
    
    // Add RTL styles if needed
    addRTLStyles();
    
    // Setup dropdown functionality
    setupDropdownFunctionality();
});

// Add RTL specific styles
function addRTLStyles() {
    if (!document.querySelector('#rtl-shop-styles')) {
        const styles = document.createElement('style');
        styles.id = 'rtl-shop-styles';
        styles.textContent = `
            .rtl .search-box-large i {
                left: auto;
                right: 1rem;
            }
            
            .rtl .search-box-large input {
                padding: 12px 2.5rem 12px 0;
            }
            
            .rtl .search-btn {
                border-radius: 8px 0 0 8px;
            }
            
            .rtl .search-box-large {
                flex-direction: row-reverse;
            }
            
            .rtl .filter-sort-controls {
                direction: rtl;
            }
            
            .rtl .product-actions {
                direction: rtl;
            }
            
            .rtl .pagination-btn:first-child i {
                transform: rotate(180deg);
            }
            
            .rtl .pagination-btn:last-child i {
                transform: rotate(180deg);
            }
            
            .rtl .close-modal {
                right: auto;
                left: 1rem;
            }
            
            .rtl .header-actions {
                direction: rtl;
            }
            
            .rtl .search-box i {
                left: auto;
                right: 1rem;
            }
            
            .rtl .search-box input {
                padding: 0.5rem 2.5rem 0.5rem 1rem;
            }
            
            .rtl .cart-count {
                right: auto;
                left: -5px;
            }
            
            .rtl .product-badge {
                left: auto;
                right: 1rem;
            }
            
            .rtl .quick-view-grid {
                direction: rtl;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Make functions globally available
window.currentLang = currentLang;
window.switchLanguage = switchLanguage;
window.translations = translations;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { switchLanguage, currentLang, translations };
}