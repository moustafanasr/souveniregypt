// Language Switcher for Artisans Page

document.addEventListener('DOMContentLoaded', function() {
    // Language data
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.shop': 'Shop',
            'nav.artisans': 'Artisans',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.login': 'Login',
            'nav.register': 'Register',
            'nav.cart': 'Shopping Cart',
            'nav.emptyCart': 'Your cart is empty',
            'nav.viewCart': 'View Cart',
            'nav.checkout': 'Checkout',
            'nav.total': 'Total:',
            
            // Hero Section
            'artisans.hero.title': 'Meet Our Master Artisans',
            'artisans.hero.subtitle': 'Discover the talented hands and passionate hearts behind every Souvenir Egypt piece. Each artisan brings generations of tradition and personal creativity to their craft.',
            
            // Categories
            'artisans.categories.all': 'All Artisans',
            'artisans.categories.leather': 'Leather Craft',
            'artisans.categories.jewelry': 'Jewelry',
            'artisans.categories.pottery': 'Pottery',
            'artisans.categories.textiles': 'Textiles',
            
            // Sections
            'artisans.leather.title': 'Master Leather Artisans',
            'artisans.leather.subtitle': 'Preserving traditional leathercraft with modern elegance',
            'artisans.jewelry.title': 'Master Jewelry Artisans',
            'artisans.jewelry.subtitle': 'Where heritage meets contemporary design in precious metals',
            
            // Buttons
            'artisans.viewProducts': 'View Products',
            'artisans.share': 'Share',
            'artisans.readMore': 'Read Full Story',
            'artisans.readLess': 'Read Less',
            
            // CTA
            'artisans.cta.title': 'Support Egyptian Craftsmanship',
            'artisans.cta.text': 'Every purchase supports these talented artisans and helps preserve Egypt\'s rich craft heritage for future generations.',
            'artisans.cta.shop': 'Shop All Products',
            'artisans.cta.more': 'Meet More Artisans',
            
            // Footer
            'footer.description': 'Bringing authentic Egyptian handcrafts to the world. Each piece tells a story of heritage, craftsmanship, and timeless beauty.',
            'footer.shop': 'SHOP',
            'footer.help': 'HELP',
            'footer.contact': 'CONTACT',
            'footer.shipping': 'Shipping Information',
            'footer.returns': 'Returns & Exchanges',
            'footer.size': 'Size Guide',
            'footer.faq': 'FAQs',
            'footer.contactUs': 'Contact Us',
            'footer.payment': 'PAYMENT METHODS'
        },
        
        it: {
            // Navigation
            'nav.home': 'Home',
            'nav.shop': 'Collezioni',
            'nav.artisans': 'Artigiani',
            'nav.about': 'Chi Siamo',
            'nav.contact': 'Contatti',
            'nav.login': 'Accedi',
            'nav.register': 'Registrati',
            'nav.cart': 'Carrello',
            'nav.emptyCart': 'Il tuo carrello è vuoto',
            'nav.viewCart': 'Vedi Carrello',
            'nav.checkout': 'Checkout',
            'nav.total': 'Totale:',
            
            // Hero Section
            'artisans.hero.title': 'Incontra i Nostri Maestri Artigiani',
            'artisans.hero.subtitle': 'Scopri le mani talentuose e i cuori appassionati dietro ogni pezzo Souvenir Egypt. Ogni artigiano porta generazioni di tradizione e creatività personale nel suo mestiere.',
            
            // Categories
            'artisans.categories.all': 'Tutti gli Artigiani',
            'artisans.categories.leather': 'Arte del Cuoio',
            'artisans.categories.jewelry': 'Gioielli',
            'artisans.categories.pottery': 'Ceramica',
            'artisans.categories.textiles': 'Tessuti',
            
            // Sections
            'artisans.leather.title': 'Maestri Artigiani del Cuoio',
            'artisans.leather.subtitle': 'Preservando l\'arte tradizionale del cuoio con eleganza moderna',
            'artisans.jewelry.title': 'Maestri Artigiani dei Gioielli',
            'artisans.jewelry.subtitle': 'Dove il patrimonio incontra il design contemporaneo nei metalli preziosi',
            
            // Buttons
            'artisans.viewProducts': 'Vedi Prodotti',
            'artisans.share': 'Condividi',
            'artisans.readMore': 'Leggi la Storia Completa',
            'artisans.readLess': 'Leggi Meno',
            
            // CTA
            'artisans.cta.title': 'Sostieni l\'Artigianato Egiziano',
            'artisans.cta.text': 'Ogni acquisto sostiene questi talentuosi artigiani e aiuta a preservare il ricco patrimonio artigianale egiziano per le generazioni future.',
            'artisans.cta.shop': 'Acquista Tutti i Prodotti',
            'artisans.cta.more': 'Incontra Altri Artigiani',
            
            // Footer
            'footer.description': 'Portiamo l\'artigianato egiziano autentico in tutto il mondo. Ogni pezzo racconta una storia di patrimonio, maestria e bellezza senza tempo.',
            'footer.shop': 'NEGOZIO',
            'footer.help': 'AIUTO',
            'footer.contact': 'CONTATTI',
            'footer.shipping': 'Informazioni sulla Spedizione',
            'footer.returns': 'Resi e Cambi',
            'footer.size': 'Guida alle Taglie',
            'footer.faq': 'FAQ',
            'footer.contactUs': 'Contattaci',
            'footer.payment': 'METODI DI PAGAMENTO'
        },
        
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.shop': 'Collections',
            'nav.artisans': 'Artisans',
            'nav.about': 'À Propos',
            'nav.contact': 'Contact',
            'nav.login': 'Connexion',
            'nav.register': 'S\'inscrire',
            'nav.cart': 'Panier',
            'nav.emptyCart': 'Votre panier est vide',
            'nav.viewCart': 'Voir le Panier',
            'nav.checkout': 'Paiement',
            'nav.total': 'Total :',
            
            // Hero Section
            'artisans.hero.title': 'Rencontrez Nos Maîtres Artisans',
            'artisans.hero.subtitle': 'Découvrez les mains talentueuses et les cœurs passionnés derrière chaque pièce Souvenir Egypt. Chaque artisan apporte des générations de tradition et une créativité personnelle à son métier.',
            
            // Categories
            'artisans.categories.all': 'Tous les Artisans',
            'artisans.categories.leather': 'Art du Cuir',
            'artisans.categories.jewelry': 'Bijoux',
            'artisans.categories.pottery': 'Poterie',
            'artisans.categories.textiles': 'Textiles',
            
            // Sections
            'artisans.leather.title': 'Maîtres Artisans du Cuir',
            'artisans.leather.subtitle': 'Préservant l\'artisanat traditionnel du cuir avec une élégance moderne',
            'artisans.jewelry.title': 'Maîtres Artisans Joailliers',
            'artisans.jewelry.subtitle': 'Où le patrimoine rencontre le design contemporain dans les métaux précieux',
            
            // Buttons
            'artisans.viewProducts': 'Voir les Produits',
            'artisans.share': 'Partager',
            'artisans.readMore': 'Lire l\'Histoire Complète',
            'artisans.readLess': 'Lire Moins',
            
            // CTA
            'artisans.cta.title': 'Soutenez l\'Artisanat Égyptien',
            'artisans.cta.text': 'Chaque achat soutient ces artisans talentueux et aide à préserver le riche patrimoine artisanal égyptien pour les générations futures.',
            'artisans.cta.shop': 'Voir Tous les Produits',
            'artisans.cta.more': 'Rencontrer Plus d\'Artisans',
            
            // Footer
            'footer.description': 'Apportant l\'artisanat égyptien authentique au monde. Chaque pièce raconte une histoire de patrimoine, de savoir-faire et de beauté intemporelle.',
            'footer.shop': 'BOUTIQUE',
            'footer.help': 'AIDE',
            'footer.contact': 'CONTACT',
            'footer.shipping': 'Informations de Livraison',
            'footer.returns': 'Retours et Échanges',
            'footer.size': 'Guide des Tailles',
            'footer.faq': 'FAQ',
            'footer.contactUs': 'Contactez-nous',
            'footer.payment': 'MOYENS DE PAIEMENT'
        }
    };

    // DOM Elements
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');

    // Get current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('souvenir_lang') || 'en';

    // Initialize language
    function initLanguage() {
        // Set active language
        langOptions.forEach(option => {
            if (option.dataset.lang === currentLang) {
                option.classList.add('active');
                currentLangSpan.textContent = currentLang.toUpperCase();
            } else {
                option.classList.remove('active');
            }
        });
        
        // Apply translations
        applyTranslations(currentLang);
        
        // Set up event listeners
        setupLanguageSwitcher();
    }

    // Apply translations
    function applyTranslations(lang) {
        const langData = translations[lang];
        
        if (!langData) return;
        
        // Find all elements with data-key attribute
        const translatableElements = document.querySelectorAll('[data-key]');
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });
        
        // Update page direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
        
        // Save language preference
        localStorage.setItem('souvenir_lang', lang);
    }

    // Setup language switcher
    function setupLanguageSwitcher() {
        // Toggle dropdown
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // Language selection
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.dataset.lang;
                
                // Update active state
                langOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update current language display
                currentLangSpan.textContent = selectedLang.toUpperCase();
                
                // Apply translations
                applyTranslations(selectedLang);
                
                // Close dropdown
                languageDropdown.classList.remove('show');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('show');
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                languageDropdown.classList.remove('show');
            }
        });
    }

    // Get translation for specific key
    function getTranslation(key, lang = currentLang) {
        return translations[lang]?.[key] || key;
    }

    // Initialize
    initLanguage();

    // Make functions available globally
    window.souvenirLang = {
        get current() {
            return currentLang;
        },
        set current(lang) {
            if (translations[lang]) {
                currentLang = lang;
                applyTranslations(lang);
            }
        },
        translate: getTranslation
    };
});