// language-switcher-cart.js - Language switching functionality for cart page
let currentLang = 'en';

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

        // Cart Page
        "cart.title": "Shopping Cart",
        "cart.items": "Your Items",
        "cart.empty": "Your cart is empty",
        "cart.emptyDescription": "Start shopping to add items to your cart",
        "cart.startShopping": "Start Shopping",
        "cart.remove": "Remove",
        "cart.orderSummary": "Order Summary",
        "cart.subtotal": "Subtotal",
        "cart.shipping": "Shipping",
        "cart.tax": "Tax",
        "cart.total": "Total",
        "cart.shippingNotice": "Free shipping on orders over $100",
        "cart.proceedCheckout": "Proceed to Checkout",
        "cart.continueShopping": "Continue Shopping",
        "cart.security": "Secure checkout guaranteed",
        "cart.hotelDelivery": "Hotel Delivery Available",
        "cart.hotelDeliveryDesc": "We can deliver your order directly to your hotel in Egypt",
        "cart.learnMore": "Learn More",
        "cart.recommended": "You Might Also Like",
        "cart.addToCart": "Add to Cart",
        "cart.itemsCount": "items",

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

        // Cart Page
        "cart.title": "Carrello",
        "cart.items": "I Tuoi Articoli",
        "cart.empty": "Il tuo carrello è vuoto",
        "cart.emptyDescription": "Inizia a fare acquisti per aggiungere articoli al carrello",
        "cart.startShopping": "Inizia a Fare Acquisti",
        "cart.remove": "Rimuovi",
        "cart.orderSummary": "Riepilogo Ordine",
        "cart.subtotal": "Subtotale",
        "cart.shipping": "Spedizione",
        "cart.tax": "Tasse",
        "cart.total": "Totale",
        "cart.shippingNotice": "Spedizione gratuita per ordini superiori a $100",
        "cart.proceedCheckout": "Procedi al Checkout",
        "cart.continueShopping": "Continua gli Acquisti",
        "cart.security": "Checkout sicuro garantito",
        "cart.hotelDelivery": "Consegna in Hotel Disponibile",
        "cart.hotelDeliveryDesc": "Possiamo consegnare il tuo ordine direttamente al tuo hotel in Egitto",
        "cart.learnMore": "Scopri di Più",
        "cart.recommended": "Potrebbe Piacerti Anche",
        "cart.addToCart": "Aggiungi al Carrello",
        "cart.itemsCount": "articoli",

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

        // Cart Page
        "cart.title": "Panier",
        "cart.items": "Vos Articles",
        "cart.empty": "Votre panier est vide",
        "cart.emptyDescription": "Commencez vos achats pour ajouter des articles au panier",
        "cart.startShopping": "Commencer les Achats",
        "cart.remove": "Supprimer",
        "cart.orderSummary": "Récapitulatif de Commande",
        "cart.subtotal": "Sous-total",
        "cart.shipping": "Livraison",
        "cart.tax": "Taxes",
        "cart.total": "Total",
        "cart.shippingNotice": "Livraison gratuite pour les commandes supérieures à 100$",
        "cart.proceedCheckout": "Passer à la Caisse",
        "cart.continueShopping": "Continuer les Achats",
        "cart.security": "Paiement sécurisé garanti",
        "cart.hotelDelivery": "Livraison à l'Hôtel Disponible",
        "cart.hotelDeliveryDesc": "Nous pouvons livrer votre commande directement à votre hôtel en Égypte",
        "cart.learnMore": "En Savoir Plus",
        "cart.recommended": "Vous Aimerez Aussi",
        "cart.addToCart": "Ajouter au Panier",
        "cart.itemsCount": "articles",

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
    }
};

function switchLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not supported`);
        return;
    }
    
    currentLang = lang;
    
    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Update current language display
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
    
    // Update dynamic content
    updateDynamicContent();
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
    
    console.log(`Language switched to: ${lang}`);
}

function updatePageMetadata(lang) {
    const titles = {
        'en': 'Shopping Cart - SOUVENIR Egyptian Handcrafts',
        'it': 'Carrello - SOUVENIR Artigianato Egiziano',
        'fr': 'Panier - SOUVENIR Artisanat Égyptien'
    };
    
    document.title = titles[lang] || titles['en'];
    
    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            'en': 'Review your shopping cart and proceed to checkout. Authentic Egyptian handcrafts and souvenirs.',
            'it': 'Rivedi il tuo carrello e procedi al checkout. Autentici artigianati e souvenir egiziani.',
            'fr': 'Revoyez votre panier et passez à la caisse. Artisanats et souvenirs égyptiens authentiques.'
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
    // Update cart items count text
    updateCartItemsCount();
    
    // Update cart manager if exists
    if (window.cartManager) {
        window.cartManager.updateTranslations();
    }
}

function updateCartItemsCount() {
    const itemsCount = document.getElementById('cartItemsCount');
    if (itemsCount && window.cartManager) {
        const totalItems = window.cartManager.getTotalItems();
        const itemsText = translations[currentLang]?.cart?.itemsCount || 'items';
        itemsCount.textContent = `${totalItems} ${itemsText}`;
    }
}

// Initialize language switcher
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
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        localStorage.setItem('preferred-language', option.dataset.lang);
    });
});

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadLanguagePreference();
    
    // Add RTL styles if needed
    addRTLStyles();
    
    // Listen for cart updates to refresh translations
    window.addEventListener('cartUpdated', function() {
        updateCartItemsCount();
    });
});

// Add RTL specific styles
function addRTLStyles() {
    if (!document.querySelector('#rtl-cart-styles')) {
        const styles = document.createElement('style');
        styles.id = 'rtl-cart-styles';
        styles.textContent = `
            .rtl .breadcrumb {
                flex-direction: row-reverse;
            }
            
            .rtl .summary-row {
                flex-direction: row-reverse;
            }
            
            .rtl .cart-item-controls {
                align-items: flex-start;
            }
            
            .rtl .quantity-controls {
                flex-direction: row-reverse;
            }
            
            .rtl .checkout-actions {
                direction: rtl;
            }
            
            .rtl .security-notice,
            .rtl .shipping-notice {
                flex-direction: row-reverse;
            }
            
            .rtl .hotel-delivery-link {
                flex-direction: row-reverse;
            }
            
            .rtl .remove-item-btn {
                flex-direction: row-reverse;
            }
            
            .rtl .recommended-product-info {
                direction: rtl;
            }
            
            .rtl .btn-add-recommended {
                flex-direction: row-reverse;
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