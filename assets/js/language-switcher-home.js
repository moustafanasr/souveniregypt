// language-switcher-home.js - Language switching functionality for home page
let currentLang = localStorage.getItem('preferred-language') || 'en';

const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.collections": "Collections",
        "nav.featured": "Featured",
        "nav.artisans": "Artisans",
        "nav.guarantee": "Guarantee",
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
        
        // Hero Section
        "hero.subtitle": "SHOP AUTHENTIC",
        "hero.title": "Egyptian Handcrafts",
        "hero.tagline": "SOUVENIR, AUTHENTIC Egyptian Handcraft",
        "hero.description": "Bring a piece of authentic Egyptian Handcraft to your home. Handmade with love by Egyptian artisans.",
        "hero.shop": "SHOP NOW",
        "hero.artisans": "MEET THE ARTISANS",
        
        // Categories
        "categories.title": "Our Collections",
        "categories.jewelry": "Jewelry",
        "categories.pottery": "Pottery",
        "categories.leather": "Leather Products",
        "categories.rugs": "Rugs & Kilims",
        "categories.cotton": "Egyptian Cotton",
        
        // Delivery
        "delivery.title": "WILL BE DELIVERED TO YOUR HOTEL OF YOUR STAY IN EGYPT OR SHIPPED HOME • CAN BE ORDERED AS A GIFT",
        "delivery.link": "VIEW SHIPPING OPTIONS & DETAILS →",
        
        // Featured Products
        "featured.title": "Featured Products",
        "featured.product1.name": "Silver Ankh Necklace",
        "featured.product2.name": "Hand-painted Pottery Vase",
        "featured.product3.name": "Leather Handbag",
        "featured.product4.name": "Traditional Kilim Rug",
        
        // Testimonials
        "testimonials.title": "What Our Customers Say",
        "testimonials.text1": "The silver cartouche I bought is absolutely stunning! The craftsmanship is exceptional and it arrived beautifully packaged. Will definitely order again!",
        "testimonials.text2": "I ordered the Egyptian cotton towels as gifts for my family. The quality is outstanding and everyone loved them. The shipping was faster than expected!",
        "testimonials.text3": "The pottery vase I purchased is even more beautiful in person. It's the centerpiece of my living room now. Thank you for such a unique and high-quality product!",
        
        // Artisans
        "artisans.title": "MEET THE ARTISANS",
        "artisans.subtitle": "Handcrafted with Heart",
        "artisans.bio1": "Master jeweler with 25 years of experience creating intricate gold and silver pieces inspired by ancient Egyptian designs.",
        "artisans.bio2": "Textile artist specializing in handwoven Egyptian cotton and traditional embroidery techniques passed down through generations.",
        "artisans.bio3": "Pottery master creating beautiful clay vessels using techniques dating back to ancient Egyptian civilizations.",
        "artisans.button": "Read Their Stories",
        
        // Guarantee
        "guarantee.title": "SOUVENIR EGYPT STORE GUARANTEE",
        "guarantee.quality": "Quality Handmade",
        "guarantee.quality.desc": "Authentic crafts made with centuries-old techniques.",
        "guarantee.shipping": "International Shipping",
        "guarantee.shipping.desc": "We deliver our treasures worldwide.",
        "guarantee.gift": "Perfect Gift Idea",
        "guarantee.gift.desc": "A unique and memorable present for loved ones.",
        
        // Newsletter
        "newsletter.title": "Stay Connected",
        "newsletter.subtitle": "Subscribe to our newsletter for exclusive offers, new arrivals, and stories from our artisans.",
        "newsletter.placeholder": "Your email address",
        "newsletter.button": "SUBSCRIBE",
        
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
        "nav.featured": "In Evidenza",
        "nav.artisans": "Artigiani",
        "nav.guarantee": "Garanzia",
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
        
        // Hero Section
        "hero.subtitle": "ACQUISTA AUTENTICO",
        "hero.title": "Artigianato Egiziano",
        "hero.tagline": "SOUVENIR, AUTENTICO Artigianato Egiziano",
        "hero.description": "Porta a casa un pezzo di autentico artigianato egiziano. Realizzato a mano con amore dagli artigiani egiziani.",
        "hero.shop": "ACQUISTA ORA",
        "hero.artisans": "INCONTRA GLI ARTIGIANI",
        
        // Categories
        "categories.title": "Le Nostre Collezioni",
        "categories.jewelry": "Gioielli",
        "categories.pottery": "Ceramica",
        "categories.leather": "Prodotti in Pelle",
        "categories.rugs": "Tappeti & Kilim",
        "categories.cotton": "Cotone Egiziano",
        
        // Delivery
        "delivery.title": "CONSEGNATO AL TUO HOTEL IN EGITTO O SPEDITO A CASA • PUÒ ESSERE ORDINATO COME REGALO",
        "delivery.link": "VISUALIZZA OPZIONI E DETTAGLI DI SPEDIZIONE →",
        
        // Featured Products
        "featured.title": "Prodotti in Evidenza",
        "featured.product1.name": "Collana Ankh in Argento",
        "featured.product2.name": "Vaso in Ceramica Dipinto a Mano",
        "featured.product3.name": "Borsa a Mano in Pelle",
        "featured.product4.name": "Tappeto Kilim Tradizionale",
        
        // Testimonials
        "testimonials.title": "Cosa Dicono i Nostri Clienti",
        "testimonials.text1": "Il cartiglio d'argento che ho acquistato è assolutamente splendido! La maestria è eccezionale ed è arrivato splendidamente imballato. Ordinerò sicuramente di nuovo!",
        "testimonials.text2": "Ho ordinato gli asciugamani in cotone egiziano come regali per la mia famiglia. La qualità è eccezionale e tutti li hanno adorati. La spedizione è stata più veloce del previsto!",
        "testimonials.text3": "Il vaso in ceramica che ho acquistato è ancora più bello di persona. Ora è il pezzo centrale del mio soggiorno. Grazie per un prodotto così unico e di alta qualità!",
        
        // Artisans
        "artisans.title": "INCONTRA GLI ARTIGIANI",
        "artisans.subtitle": "Realizzato a Mano con il Cuore",
        "artisans.bio1": "Maestro orafo con 25 anni di esperienza nella creazione di pezzi intricati in oro e argento ispirati ai disegni dell'antico Egitto.",
        "artisans.bio2": "Artista tessile specializzata in cotone egiziano tessuto a mano e tecniche di ricamo tradizionali tramandate di generazione in generazione.",
        "artisans.bio3": "Maestro ceramista che crea bellissimi vasi in argilla utilizzando tecniche che risalgono alle antiche civiltà egizie.",
        "artisans.button": "Leggi le Loro Storie",
        
        // Guarantee
        "guarantee.title": "GARANZIA SOUVENIR EGYPT STORE",
        "guarantee.quality": "Qualità Artigianale",
        "guarantee.quality.desc": "Manufatti autentici realizzati con tecniche secolari.",
        "guarantee.shipping": "Spedizione Internazionale",
        "guarantee.shipping.desc": "Consegniamo i nostri tesori in tutto il mondo.",
        "guarantee.gift": "Idea Regalo Perfetta",
        "guarantee.gift.desc": "Un regalo unico e memorabile per i propri cari.",
        
        // Newsletter
        "newsletter.title": "Rimani Connesso",
        "newsletter.subtitle": "Iscriviti alla nostra newsletter per offerte esclusive, nuovi arrivi e storie dei nostri artigiani.",
        "newsletter.placeholder": "Il tuo indirizzo email",
        "newsletter.button": "ISCRIVITI",
        
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
        "nav.featured": "En Vedette",
        "nav.artisans": "Artisans",
        "nav.guarantee": "Garantie",
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
        
        // Hero Section
        "hero.subtitle": "ACHETEZ AUTHENTIQUE",
        "hero.title": "Artisanat Égyptien",
        "hero.tagline": "SOUVENIR, AUTHENTIQUE Artisanat Égyptien",
        "hero.description": "Apportez une pièce d'artisanat égyptien authentique chez vous. Fait main avec amour par des artisans égyptiens.",
        "hero.shop": "ACHETEZ MAINTENANT",
        "hero.artisans": "RENCONTREZ LES ARTISANS",
        
        // Categories
        "categories.title": "Nos Collections",
        "categories.jewelry": "Bijoux",
        "categories.pottery": "Poterie",
        "categories.leather": "Produits en Cuir",
        "categories.rugs": "Tapis & Kilims",
        "categories.cotton": "Coton Égyptien",
        
        // Delivery
        "delivery.title": "LIVRÉ À VOTRE HÔTEL EN ÉGYPTE OU EXPÉDIÉ À DOMICILE • PEUT ÊTRE COMMANDÉ COMME CADEAU",
        "delivery.link": "VOIR LES OPTIONS ET DÉTAILS D'EXPÉDITION →",
        
        // Featured Products
        "featured.title": "Produits en Vedette",
        "featured.product1.name": "Collier Ankh en Argent",
        "featured.product2.name": "Vase en Poterie Peint à la Main",
        "featured.product3.name": "Sac à Main en Cuir",
        "featured.product4.name": "Tapis Kilim Traditionnel",
        
        // Testimonials
        "testimonials.title": "Ce Que Disent Nos Clients",
        "testimonials.text1": "Le cartouche en argent que j'ai acheté est absolument magnifique ! Le savoir-faire est exceptionnel et il est arrivé magnifiquement emballé. Je commanderai certainement à nouveau !",
        "testimonials.text2": "J'ai commandé les serviettes en coton égyptien comme cadeaux pour ma famille. La qualité est exceptionnelle et tout le monde les a adorées. L'expédition a été plus rapide que prévu !",
        "testimonials.text3": "Le vase en poterie que j'ai acheté est encore plus beau en personne. C'est maintenant la pièce maîtresse de mon salon. Merci pour un produit si unique et de haute qualité !",
        
        // Artisans
        "artisans.title": "RENCONTREZ LES ARTISANS",
        "artisans.subtitle": "Fait Main avec le Cœur",
        "artisans.bio1": "Maître joaillier avec 25 ans d'expérience dans la création de pièces complexes en or et argent inspirées des dessins de l'Égypte ancienne.",
        "artisans.bio2": "Artiste textile spécialisée dans le coton égyptien tissé à la main et les techniques de broderie traditionnelles transmises de génération en génération.",
        "artisans.bio3": "Maître potier créant de magnifiques récipients en argile utilisant des techniques remontant aux anciennes civilisations égyptiennes.",
        "artisans.button": "Lisez Leurs Histoires",
        
        // Guarantee
        "guarantee.title": "GARANTIE SOUVENIR EGYPT STORE",
        "guarantee.quality": "Qualité Artisanale",
        "guarantee.quality.desc": "Artisanat authentique réalisé avec des techniques séculaires.",
        "guarantee.shipping": "Expédition Internationale",
        "guarantee.shipping.desc": "Nous livrons nos trésors dans le monde entier.",
        "guarantee.gift": "Idée Cadeau Parfaite",
        "guarantee.gift.desc": "Un cadeau unique et mémorable pour vos proches.",
        
        // Newsletter
        "newsletter.title": "Restez Connecté",
        "newsletter.subtitle": "Abonnez-vous à notre newsletter pour des offres exclusives, les nouvelles arrivées et les histoires de nos artisans.",
        "newsletter.placeholder": "Votre adresse email",
        "newsletter.button": "S'ABONNER",
        
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
        "nav.featured": "مميز",
        "nav.artisans": "الحرفيين",
        "nav.guarantee": "الضمان",
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
        
        // Hero Section
        "hero.subtitle": "تسوق الأصالة",
        "hero.title": "الحرف اليدوية المصرية",
        "hero.tagline": "سوفينير، الحرف اليدوية المصرية الأصيلة",
        "hero.description": "احضر قطعة من الحرف اليدوية المصرية الأصيلة إلى منزلك. مصنوعة يدوياً بحب من قبل الحرفيين المصريين.",
        "hero.shop": "تسوق الآن",
        "hero.artisans": "تعرف على الحرفيين",
        
        // Categories
        "categories.title": "مجموعاتنا",
        "categories.jewelry": "المجوهرات",
        "categories.pottery": "الفخار",
        "categories.leather": "المنتجات الجلدية",
        "categories.rugs": "السجاد والكليم",
        "categories.cotton": "القطن المصري",
        
        // Delivery
        "delivery.title": "سيتم التوصيل إلى فندق إقامتك في مصر أو الشحن إلى المنزل • يمكن طلبه كهدية",
        "delivery.link": "عرض خيارات وتفاصيل الشحن →",
        
        // Featured Products
        "featured.title": "المنتجات المميزة",
        "featured.product1.name": "قلادة عنخ فضية",
        "featured.product2.name": "إناء فخاري مرسوم يدوياً",
        "featured.product3.name": "حقيبة يد جلدية",
        "featured.product4.name": "سجادة كليم تقليدية",
        
        // Testimonials
        "testimonials.title": "ما يقوله عملاؤنا",
        "testimonials.text1": "الخرطوشة الفضية التي اشتريتها رائعة! الحرفية استثنائية ووصلت بشكل جميل ومغلف. سأطلب بالتأكيد مرة أخرى!",
        "testimonials.text2": "لقد طلبت مناشف القطن المصري كهدايا لعائلتي. الجودة استثنائية والجميع أحبها. الشحن كان أسرع مما توقعت!",
        "testimonials.text3": "الإناء الفخاري الذي اشتريته أكثر جمالاً في الواقع. إنه الآن قطعة مركزية في غرفة معيشتي. شكراً لمنتج فريد وعالي الجودة كهذا!",
        
        // Artisans
        "artisans.title": "تعرف على الحرفيين",
        "artisans.subtitle": "مصنوع يدوياً بقلب",
        "artisans.bio1": "صائغ محترف بخبرة 25 عاماً في صنع قطع معقدة من الذهب والفضة مستوحاة من التصميمات المصرية القديمة.",
        "artisans.bio2": "فنانة نسيج متخصصة في القطن المصري المنسوج يدوياً وتقنيات التطريز التقليدية الموروثة عبر الأجيال.",
        "artisans.bio3": "سيد فخاري يصنع أواني طينية جميلة باستخدام تقنيات تعود إلى الحضارات المصرية القديمة.",
        "artisans.button": "اقرأ قصصهم",
        
        // Guarantee
        "guarantee.title": "ضمان متجر سوفينير مصر",
        "guarantee.quality": "جودة الصنع اليدوي",
        "guarantee.quality.desc": "حرف أصلية مصنوعة بتقنيات عمرها قرون.",
        "guarantee.shipping": "شحن دولي",
        "guarantee.shipping.desc": "نقوم بتوصيل كنوزنا حول العالم.",
        "guarantee.gift": "فكرة هدية مثالية",
        "guarantee.gift.desc": "هدية فريدة ولا تنسى للأحباء.",
        
        // Newsletter
        "newsletter.title": "ابق على اتصال",
        "newsletter.subtitle": "اشترك في نشرتنا الإخبارية للحصول على عروض حصرية، ووصول منتجات جديدة، وقصص من حرفيينا.",
        "newsletter.placeholder": "عنوان بريدك الإلكتروني",
        "newsletter.button": "اشتراك",
        
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
    
    // Update dynamic content
    updateDynamicContent();
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
    
    console.log(`Language switched to: ${lang}`);
}

function updatePageMetadata(lang) {
    const titles = {
        'en': 'SOUVENIR - Authentic Egyptian Handcraft',
        'it': 'SOUVENIR - Autentico Artigianato Egiziano',
        'fr': 'SOUVENIR - Authentique Artisanat Égyptien',
        'ar': 'سوفينير - الحرف اليدوية المصرية الأصيلة'
    };
    
    document.title = titles[lang] || titles['en'];
    
    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            'en': 'Authentic Egyptian handcrafts and souvenirs. Handmade with love by Egyptian artisans.',
            'it': 'Autentici artigianati e souvenir egiziani. Realizzati a mano con amore dagli artigiani egiziani.',
            'fr': 'Authentiques artisanats et souvenirs égyptiens. Faits main avec amour par des artisans égyptiens.',
            'ar': 'حرف يدوية وتذكارات مصرية أصلية. مصنوعة يدوياً بحب من قبل الحرفيين المصريين.'
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
    // Update any dynamic content specific to home page
    // This can be expanded based on home page specific needs
    updateHomeSpecificContent();
}

function updateHomeSpecificContent() {
    // Update any home page specific dynamic content
    // For example: featured products, testimonials, etc.
    // This function can be expanded as needed
}

// // Setup dropdown functionality
// function setupDropdownFunctionality() {
//     const languageToggle = document.getElementById('languageToggle');
//     const languageDropdown = document.getElementById('languageDropdown');

//     if (languageToggle && languageDropdown) {
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

// Add RTL specific styles for home page
function addRTLStyles() {
    if (!document.querySelector('#rtl-home-styles')) {
        const styles = document.createElement('style');
        styles.id = 'rtl-home-styles';
        styles.textContent = `
            /* Home page specific RTL styles */
            .rtl .hero-content {
                direction: rtl;
                text-align: right;
            }
            
            .rtl .categories-grid {
                direction: rtl;
            }
            
            .rtl .featured-products {
                direction: rtl;
            }
            
            .rtl .testimonials-container {
                direction: rtl;
            }
            
            .rtl .artisans-grid {
                direction: rtl;
            }
            
            .rtl .guarantee-cards {
                direction: rtl;
            }
            
            .rtl .newsletter-form {
                direction: rtl;
                text-align: right;
            }
            
            /* Header RTL adjustments for home page */
            .rtl .header-actions {
                direction: rtl;
            }
            
            .rtl .language-switcher-dropdown {
                margin-right: 0;
                margin-left: 1rem;
            }
            
            .rtl .language-dropdown {
                right: auto;
                left: 0;
            }
            
            .rtl .lang-option {
                text-align: right;
            }
            
            @media (max-width: 768px) {
                .rtl .hero-content {
                    padding: 1.5rem;
                }
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