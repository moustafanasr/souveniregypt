// language-switcher-auth.js - Language switching functionality for auth pages
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

        // Auth Pages
        "auth.welcome": "Welcome Back",
        "auth.login.subtitle": "Sign in to your account to continue shopping",
        "auth.email": "Email Address",
        "auth.email.placeholder": "Enter your email",
        "auth.password": "Password", 
        "auth.password.placeholder": "Enter your password",
        "auth.remember": "Remember me",
        "auth.forgot": "Forgot Password?",
        "auth.signin": "Sign In",
        "auth.signing": "Signing In...",
        "auth.or": "Or continue with",
        "auth.google": "Continue with Google",
        "auth.facebook": "Continue with Facebook",
        "auth.noaccount": "Don't have an account?",
        "auth.create": "Create account",

        // Register Page
        "auth.create.account": "Create Account",
        "auth.join": "Join our community of craft lovers",
        "auth.firstname": "First Name",
        "auth.firstname.placeholder": "Enter your first name",
        "auth.lastname": "Last Name",
        "auth.lastname.placeholder": "Enter your last name",
        "auth.confirm.password": "Confirm Password",
        "auth.confirm.placeholder": "Confirm your password",
        "auth.agree": "I agree to the",
        "auth.terms": "Terms of Service",
        "auth.and": "and",
        "auth.privacy": "Privacy Policy",
        "auth.newsletter": "Subscribe to our newsletter for updates and offers",
        "auth.create.btn": "Create Account",
        "auth.creating": "Creating Account...",
        "auth.haveaccount": "Already have an account?",
        "auth.signin.link": "Sign in",

        // Account Pages
        "account.dashboard": "Account Dashboard",
        "account.welcome": "Welcome back, {name}! Here's your account overview.",
        "account.orders": "My Orders",
        "account.addresses": "My Addresses",
        "account.details": "Account Details",
        "account.wishlist": "Wishlist",
        "account.logout": "Logout",

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

        // Auth Pages
        "auth.welcome": "Bentornato",
        "auth.login.subtitle": "Accedi al tuo account per continuare lo shopping",
        "auth.email": "Indirizzo Email",
        "auth.email.placeholder": "Inserisci la tua email",
        "auth.password": "Password",
        "auth.password.placeholder": "Inserisci la tua password", 
        "auth.remember": "Ricordami",
        "auth.forgot": "Password dimenticata?",
        "auth.signin": "Accedi",
        "auth.signing": "Accesso in corso...",
        "auth.or": "Oppure continua con",
        "auth.google": "Continua con Google",
        "auth.facebook": "Continua con Facebook",
        "auth.noaccount": "Non hai un account?",
        "auth.create": "Crea account",

        // Register Page
        "auth.create.account": "Crea Account",
        "auth.join": "Unisciti alla nostra community di amanti dell'artigianato",
        "auth.firstname": "Nome",
        "auth.firstname.placeholder": "Inserisci il tuo nome",
        "auth.lastname": "Cognome",
        "auth.lastname.placeholder": "Inserisci il tuo cognome",
        "auth.confirm.password": "Conferma Password",
        "auth.confirm.placeholder": "Conferma la tua password",
        "auth.agree": "Accetto i",
        "auth.terms": "Termini di Servizio",
        "auth.and": "e la",
        "auth.privacy": "Privacy Policy",
        "auth.newsletter": "Iscriviti alla nostra newsletter per aggiornamenti e offerte",
        "auth.create.btn": "Crea Account",
        "auth.creating": "Creazione account...",
        "auth.haveaccount": "Hai già un account?",
        "auth.signin.link": "Accedi",

        // Account Pages
        "account.dashboard": "Dashboard Account",
        "account.welcome": "Bentornato, {name}! Ecco una panoramica del tuo account.",
        "account.orders": "I Miei Ordini",
        "account.addresses": "I Miei Indirizzi", 
        "account.details": "Dettagli Account",
        "account.wishlist": "Lista Desideri",
        "account.logout": "Esci",

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

        // Auth Pages
        "auth.welcome": "Bon retour",
        "auth.login.subtitle": "Connectez-vous à votre compte pour continuer vos achats",
        "auth.email": "Adresse Email",
        "auth.email.placeholder": "Entrez votre email",
        "auth.password": "Mot de passe",
        "auth.password.placeholder": "Entrez votre mot de passe",
        "auth.remember": "Se souvenir de moi",
        "auth.forgot": "Mot de passe oublié?",
        "auth.signin": "Se connecter",
        "auth.signing": "Connexion en cours...",
        "auth.or": "Ou continuer avec",
        "auth.google": "Continuer avec Google",
        "auth.facebook": "Continuer avec Facebook",
        "auth.noaccount": "Vous n'avez pas de compte?",
        "auth.create": "Créer un compte",

        // Register Page
        "auth.create.account": "Créer un Compte",
        "auth.join": "Rejoignez notre communauté d'amateurs d'artisanat",
        "auth.firstname": "Prénom",
        "auth.firstname.placeholder": "Entrez votre prénom",
        "auth.lastname": "Nom de famille",
        "auth.lastname.placeholder": "Entrez votre nom de famille",
        "auth.confirm.password": "Confirmer le mot de passe",
        "auth.confirm.placeholder": "Confirmez votre mot de passe",
        "auth.agree": "J'accepte les",
        "auth.terms": "Conditions d'utilisation",
        "auth.and": "et la",
        "auth.privacy": "Politique de confidentialité",
        "auth.newsletter": "Abonnez-vous à notre newsletter pour les mises à jour et offres",
        "auth.create.btn": "Créer un Compte",
        "auth.creating": "Création de compte...",
        "auth.haveaccount": "Vous avez déjà un account?",
        "auth.signin.link": "Se connecter",

        // Account Pages
        "account.dashboard": "Tableau de Bord",
        "account.welcome": "Bon retour, {name}! Voici un aperçu de votre compte.",
        "account.orders": "Mes Commandes",
        "account.addresses": "Mes Adresses",
        "account.details": "Détails du Compte",
        "account.wishlist": "Liste de Souhaits",
        "account.logout": "Déconnexion",

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

        // Auth Pages
        "auth.welcome": "مرحباً بعودتك",
        "auth.login.subtitle": "سجل الدخول إلى حسابك لمتابعة التسوق",
        "auth.email": "البريد الإلكتروني",
        "auth.email.placeholder": "أدخل بريدك الإلكتروني",
        "auth.password": "كلمة المرور",
        "auth.password.placeholder": "أدخل كلمة المرور",
        "auth.remember": "تذكرني",
        "auth.forgot": "نسيت كلمة المرور؟",
        "auth.signin": "تسجيل الدخول",
        "auth.signing": "جاري تسجيل الدخول...",
        "auth.or": "أو تابع باستخدام",
        "auth.google": "المتابعة مع جوجل",
        "auth.facebook": "المتابعة مع فيسبوك",
        "auth.noaccount": "ليس لديك حساب؟",
        "auth.create": "إنشاء حساب",

        // Register Page
        "auth.create.account": "إنشاء حساب",
        "auth.join": "انضم إلى مجتمع عشاق الحرف اليدوية",
        "auth.firstname": "الاسم الأول",
        "auth.firstname.placeholder": "أدخل اسمك الأول",
        "auth.lastname": "اسم العائلة",
        "auth.lastname.placeholder": "أدخل اسم عائلتك",
        "auth.confirm.password": "تأكيد كلمة المرور",
        "auth.confirm.placeholder": "أكد كلمة المرور",
        "auth.agree": "أوافق على",
        "auth.terms": "شروط الخدمة",
        "auth.and": "و",
        "auth.privacy": "سياسة الخصوصية",
        "auth.newsletter": "اشترك في نشرتنا الإخبارية للتحديثات والعروض",
        "auth.create.btn": "إنشاء حساب",
        "auth.creating": "جاري إنشاء الحساب...",
        "auth.haveaccount": "لديك حساب بالفعل؟",
        "auth.signin.link": "تسجيل الدخول",

        // Account Pages
        "account.dashboard": "لوحة التحكم",
        "account.welcome": "مرحباً بعودتك، {name}! هذه نظرة عامة على حسابك.",
        "account.orders": "طلباتي",
        "account.addresses": "عناويني",
        "account.details": "تفاصيل الحساب",
        "account.wishlist": "قائمة الرغبات",
        "account.logout": "تسجيل الخروج",

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
                // Handle dynamic content like welcome messages
                let translation = translations[lang][key];
                if (key === 'account.welcome' && element.dataset.user) {
                    translation = translation.replace('{name}', element.dataset.user);
                }
                element.textContent = translation;
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
        'en': 'Login - SOUVENIR Egyptian Handcrafts',
        'it': 'Accesso - SOUVENIR Artigianato Egiziano',
        'fr': 'Connexion - SOUVENIR Artisanat Égyptien',
        'ar': 'تسجيل الدخول - سوفينير الحرف اليدوية المصرية'
    };
    
    // Determine page type for more accurate titles
    const path = window.location.pathname;
    
    if (path.includes('register') || path.includes('signup')) {
        titles.en = 'Create Account - SOUVENIR Egyptian Handcrafts';
        titles.it = 'Crea Account - SOUVENIR Artigianato Egiziano';
        titles.fr = 'Créer un Compte - SOUVENIR Artisanat Égyptien';
        titles.ar = 'إنشاء حساب - سوفينير الحرف اليدوية المصرية';
    } else if (path.includes('account') || path.includes('profile')) {
        titles.en = 'My Account - SOUVENIR Egyptian Handcrafts';
        titles.it = 'Il Mio Account - SOUVENIR Artigianato Egiziano';
        titles.fr = 'Mon Compte - SOUVENIR Artisanat Égyptien';
        titles.ar = 'حسابي - سوفينير الحرف اليدوية المصرية';
    }
    
    document.title = titles[lang] || titles['en'];
    
    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            'en': 'Sign in to your SOUVENIR account to shop authentic Egyptian handcrafts.',
            'it': 'Accedi al tuo account SOUVENIR per acquistare autentici artigianati egiziani.',
            'fr': 'Connectez-vous à votre compte SOUVENIR pour acheter des artisanats égyptiens authentiques.',
            'ar': 'سجل الدخول إلى حسابك في سوفينير للتسوق للحرف اليدوية المصرية الأصيلة.'
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
    // Update any dynamic content specific to auth pages
    updateFormLabels();
    updateAuthButtons();
}

function updateFormLabels() {
    // Update form labels and placeholders that might not have data-key attributes
    const emailLabel = document.querySelector('label[for="email"]');
    const passwordLabel = document.querySelector('label[for="password"]');
    
    if (emailLabel && !emailLabel.hasAttribute('data-key')) {
        emailLabel.textContent = translations[currentLang].auth.email;
    }
    if (passwordLabel && !passwordLabel.hasAttribute('data-key')) {
        passwordLabel.textContent = translations[currentLang].auth.password;
    }
}

function updateAuthButtons() {
    // Update auth buttons that might need dynamic text
    const submitButtons = document.querySelectorAll('.auth-btn .btn-text');
    submitButtons.forEach(btn => {
        const form = btn.closest('form');
        if (form && form.id === 'loginForm') {
            btn.textContent = translations[currentLang].auth.signin;
        } else if (form && form.id === 'registerForm') {
            btn.textContent = translations[currentLang]['auth.create.btn'];
        }
    });
}

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

// Add RTL specific styles for auth pages
function addRTLStyles() {
    if (!document.querySelector('#rtl-auth-styles')) {
        const styles = document.createElement('style');
        styles.id = 'rtl-auth-styles';
        styles.textContent = `
            .rtl .auth-container {
                direction: rtl;
            }
            
            .rtl .auth-form {
                text-align: right;
            }
            
            .rtl .form-group {
                direction: rtl;
            }
            
            .rtl .form-check {
                direction: rtl;
                text-align: right;
            }
            
            .rtl .form-check-label {
                margin-right: 0.5rem;
                margin-left: 0;
            }
            
            .rtl .auth-links {
                direction: rtl;
                text-align: right;
            }
            
            .rtl .social-login {
                direction: rtl;
            }
            
            .rtl .divider {
                direction: rtl;
            }
            
            .rtl .input-icon {
                left: auto;
                right: 1rem;
            }
            
            .rtl .toggle-password {
                left: 1rem;
                right: auto;
            }
            
            .rtl .form-row {
                direction: rtl;
            }
            
            .rtl .checkbox-container {
                direction: rtl;
                text-align: right;
            }
            
            .rtl .auth-footer {
                direction: rtl;
                text-align: center;
            }
            
            /* Header RTL adjustments for auth pages */
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
                .rtl .auth-container {
                    padding: 1.5rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Setup dropdown functionality
// function setupDropdownFunctionality() {
//     const languageToggle = document.getElementById('languageToggle');
//     const languageDropdown = document.getElementById('languageDropdown');

//     if (languageToggle && languageDropdown) {
//         languageToggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             languageDropdown.classList.toggle('show');
//         });

//         // Close dropdown when clicking outside
//         document.addEventListener('click', (e) => {
//             if (!e.target.closest('.language-switcher-dropdown')) {
//                 languageDropdown.classList.remove('show');
//             }
//         });

//         // Close dropdown on escape key
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'Escape') {
//                 languageDropdown.classList.remove('show');
//             }
//         });
//     }
// }

// Make functions globally available
window.currentLang = currentLang;
window.switchLanguage = switchLanguage;
window.translations = translations;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { switchLanguage, currentLang, translations };
}