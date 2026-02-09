// language-switcher-about.js - Language switching functionality for about page

// Extend translations for about page
const aboutTranslations = {
    en: {
        // About Page Specific
        "about.hero.title": "Our Story",
        "about.hero.subtitle": "Preserving Egyptian Heritage Through Authentic Handcrafts",
        
        "about.story.title": "The Souvenir Egypt Journey",
        "about.story.p1": "Founded in 2020, Souvenir Egypt Store began as a passion project to preserve and promote Egypt's rich artisanal heritage. What started as a small initiative to support local craftsmen has grown into a platform connecting master artisans with appreciative audiences worldwide.",
        "about.story.p2": "Our mission is simple yet profound: to safeguard traditional Egyptian crafts while providing sustainable livelihoods for artisans. Each piece in our collection represents centuries of skill, cultural significance, and personal stories of the hands that created them.",
        "about.story.p3": "We work directly with artisans across Egypt, from the bustling workshops of Cairo's Khan El Khalili to remote villages in Upper Egypt, ensuring fair compensation and preserving techniques passed down through generations.",
        "about.story.image": "Egyptian Craftsmanship",
        
        "about.mission.title": "Our Mission",
        "about.mission.text": "To preserve and promote authentic Egyptian craftsmanship while creating sustainable economic opportunities for artisans and sharing Egypt's cultural heritage with the world.",
        
        "about.vision.title": "Our Vision",
        "about.vision.text": "To become the global gateway to authentic Egyptian handcrafts, recognized for excellence in craftsmanship, cultural preservation, and ethical business practices.",
        
        "about.values.title": "Our Values",
        "about.values.text": "Authenticity, sustainability, craftsmanship, community empowerment, and cultural preservation guide everything we do.",
        
        "about.impact.title": "Our Impact",
        "about.impact.subtitle": "Making a difference in the lives of Egyptian artisans and preserving cultural heritage",
        "about.impact.artisans": "Artisans Supported",
        "about.impact.products": "Products Created",
        "about.impact.countries": "Countries Reached",
        "about.impact.workshops": "Workshops Conducted",
        
        "about.team.title": "Meet Our Team",
        "about.team.subtitle": "The passionate individuals behind Souvenir Egypt",
        "about.team.founder": "Founder & Creative Director",
        "about.team.director": "Artisan Relations Director",
        "about.team.quality": "Quality Control Manager",
        "about.team.bio1": "With over 15 years of experience in Egyptian crafts, Hany founded Souvenir Egypt to bridge traditional artisans with global markets.",
        "about.team.bio2": "Sarah works directly with artisans across Egypt, ensuring fair practices and helping develop new designs that honor tradition.",
        "about.team.bio3": "Ahmed ensures every piece meets our high standards of craftsmanship, working closely with artisans to perfect their techniques.",
        
        "about.why.title": "Why Choose Souvenir Egypt",
        "about.why.authentic": "Authentic Handcrafts",
        "about.why.authentic.desc": "Every piece is genuinely handmade by skilled Egyptian artisans using traditional techniques.",
        "about.why.fair": "Fair Trade Practices",
        "about.why.fair.desc": "We ensure artisans receive fair compensation and work in safe, sustainable environments.",
        "about.why.delivery": "Hotel Delivery",
        "about.why.delivery.desc": "We deliver directly to your hotel in Egypt, making souvenir shopping convenient for travelers.",
        "about.why.worldwide": "Worldwide Shipping",
        "about.why.worldwide.desc": "We ship globally, bringing authentic Egyptian crafts to your doorstep anywhere in the world.",
        "about.why.gifts": "Perfect Gifts",
        "about.why.gifts.desc": "Our pieces make unique, meaningful gifts that carry stories of Egyptian heritage.",
        "about.why.heritage": "Cultural Preservation",
        "about.why.heritage.desc": "Your purchase helps preserve ancient crafts and support artisan communities.",
        
        "about.cta.title": "Join Our Journey",
        "about.cta.text": "Every purchase supports Egyptian artisans and helps preserve our rich cultural heritage for future generations.",
        "about.cta.shop": "Shop Collections",
        "about.cta.artisans": "Meet Artisans"
    },
    
    it: {
        // About Page Specific - Italian
        "about.hero.title": "La Nostra Storia",
        "about.hero.subtitle": "Preservare il Patrimonio Egiziano Attraverso l'Artigianato Autentico",
        
        "about.story.title": "Il Viaggio di Souvenir Egypt",
        "about.story.p1": "Fondata nel 2020, Souvenir Egypt Store è nata come un progetto di passione per preservare e promuovere il ricco patrimonio artigianale egiziano. Ciò che è iniziato come una piccola iniziativa per sostenere gli artigiani locali si è trasformato in una piattaforma che connette maestri artigiani con un pubblico consapevole in tutto il mondo.",
        "about.story.p2": "La nostra missione è semplice ma profonda: salvaguardare le arti tradizionali egiziane fornendo al contempo mezzi di sussistenza sostenibili agli artigiani. Ogni pezzo della nostra collezione rappresenta secoli di abilità, significato culturale e storie personali delle mani che li hanno creati.",
        "about.story.p3": "Lavoriamo direttamente con gli artigiani in tutto l'Egitto, dai laboratori vivaci del Khan El Khalili del Cairo ai villaggi remoti dell'Alto Egitto, garantendo un compenso equo e preservando le tecniche tramandate di generazione in generazione.",
        "about.story.image": "Artigianato Egiziano",
        
        "about.mission.title": "La Nostra Missione",
        "about.mission.text": "Preservare e promuovere l'artigianato egiziano autentico, creando opportunità economiche sostenibili per gli artigiani e condividendo il patrimonio culturale egiziano con il mondo.",
        
        "about.vision.title": "La Nostra Visione",
        "about.vision.text": "Diventare il portale globale per l'artigianato egiziano autentico, riconosciuto per l'eccellenza nella maestria, la preservazione culturale e le pratiche commerciali etiche.",
        
        "about.values.title": "I Nostri Valori",
        "about.values.text": "Autenticità, sostenibilità, maestria, responsabilizzazione della comunità e preservazione culturale guidano tutto ciò che facciamo.",
        
        "about.impact.title": "Il Nostro Impatto",
        "about.impact.subtitle": "Fare la differenza nella vita degli artigiani egiziani e preservare il patrimonio culturale",
        "about.impact.artisans": "Artigiani Supportati",
        "about.impact.products": "Prodotti Creati",
        "about.impact.countries": "Paesi Raggiunti",
        "about.impact.workshops": "Laboratori Condotti",
        
        "about.team.title": "Incontra il Nostro Team",
        "about.team.subtitle": "Gli appassionati individui dietro Souvenir Egypt",
        "about.team.founder": "Fondatore & Direttore Creativo",
        "about.team.director": "Direttore Relazioni Artigiani",
        "about.team.quality": "Responsabile Controllo Qualità",
        "about.team.bio1": "Con oltre 15 anni di esperienza nell'artigianato egiziano, Hany ha fondato Souvenir Egypt per collegare gli artigiani tradizionali con i mercati globali.",
        "about.team.bio2": "Sarah lavora direttamente con gli artigiani in tutto l'Egitto, garantendo pratiche eque e aiutando a sviluppare nuovi design che onorano la tradizione.",
        "about.team.bio3": "Ahmed si assicura che ogni pezzo soddisfi i nostri elevati standard di maestria, lavorando a stretto contatto con gli artigiani per perfezionare le loro tecniche.",
        
        "about.why.title": "Perché Scegliere Souvenir Egypt",
        "about.why.authentic": "Artigianato Autentico",
        "about.why.authentic.desc": "Ogni pezzo è autenticamente fatto a mano da abili artigiani egiziani utilizzando tecniche tradizionali.",
        "about.why.fair": "Pratiche di Commercio Equo",
        "about.why.fair.desc": "Ci assicuriamo che gli artigiani ricevano un compenso equo e lavorino in ambienti sicuri e sostenibili.",
        "about.why.delivery": "Consegna in Hotel",
        "about.why.delivery.desc": "Consegniamo direttamente al tuo hotel in Egitto, rendendo lo shopping di souvenir conveniente per i viaggiatori.",
        "about.why.worldwide": "Spedizione Mondiale",
        "about.why.worldwide.desc": "Spediamo in tutto il mondo, portando l'artigianato egiziano autentico a casa tua ovunque tu sia.",
        "about.why.gifts": "Regali Perfetti",
        "about.why.gifts.desc": "I nostri pezzi sono regali unici e significativi che portano storie del patrimonio egiziano.",
        "about.why.heritage": "Preservazione Culturale",
        "about.why.heritage.desc": "Il tuo acquisto aiuta a preservare le antiche arti e sostenere le comunità artigiane.",
        
        "about.cta.title": "Unisciti al Nostro Viaggio",
        "about.cta.text": "Ogni acquisto sostiene gli artigiani egiziani e aiuta a preservare il nostro ricco patrimonio culturale per le generazioni future.",
        "about.cta.shop": "Acquista Collezioni",
        "about.cta.artisans": "Incontra Artigiani"
    },
    
    fr: {
        // About Page Specific - French
        "about.hero.title": "Notre Histoire",
        "about.hero.subtitle": "Préserver le Patrimoine Égyptien à Travers l'Artisanat Authentique",
        
        "about.story.title": "Le Voyage de Souvenir Egypt",
        "about.story.p1": "Fondée en 2020, Souvenir Egypt Store a commencé comme un projet de passion pour préserver et promouvoir le riche patrimoine artisanal égyptien. Ce qui a commencé comme une petite initiative pour soutenir les artisans locaux est devenu une plateforme connectant des maîtres artisans à un public reconnaissant dans le monde entier.",
        "about.story.p2": "Notre mission est simple mais profonde : sauvegarder les métiers traditionnels égyptiens tout en offrant des moyens de subsistance durables aux artisans. Chaque pièce de notre collection représente des siècles de compétence, de signification culturelle et d'histoires personnelles des mains qui les ont créées.",
        "about.story.p3": "Nous travaillons directement avec des artisans dans toute l'Égypte, des ateliers animés du Khan El Khalili du Caire aux villages reculés de la Haute-Égypte, assurant une rémunération équitable et préservant les techniques transmises de génération en génération.",
        "about.story.image": "Artisanat Égyptien",
        
        "about.mission.title": "Notre Mission",
        "about.mission.text": "Préserver et promouvoir l'artisanat égyptien authentique tout en créant des opportunités économiques durables pour les artisans et en partageant le patrimoine culturel égyptien avec le monde.",
        
        "about.vision.title": "Notre Vision",
        "about.vision.text": "Devenir la porte d'entrée mondiale vers l'artisanat égyptien authentique, reconnu pour l'excellence de l'artisanat, la préservation culturelle et les pratiques commerciales éthiques.",
        
        "about.values.title": "Nos Valeurs",
        "about.values.text": "Authenticité, durabilité, savoir-faire, autonomisation de la communauté et préservation culturelle guident tout ce que nous faisons.",
        
        "about.impact.title": "Notre Impact",
        "about.impact.subtitle": "Faire une différence dans la vie des artisans égyptiens et préserver le patrimoine culturel",
        "about.impact.artisans": "Artisans Soutenus",
        "about.impact.products": "Produits Créés",
        "about.impact.countries": "Pays Atteints",
        "about.impact.workshops": "Ateliers Conduits",
        
        "about.team.title": "Rencontrez Notre Équipe",
        "about.team.subtitle": "Les passionnés derrière Souvenir Egypt",
        "about.team.founder": "Fondateur & Directeur Créatif",
        "about.team.director": "Directeur Relations Artisans",
        "about.team.quality": "Responsable Contrôle Qualité",
        "about.team.bio1": "Avec plus de 15 ans d'expérience dans l'artisanat égyptien, Hany a fondé Souvenir Egypt pour relier les artisans traditionnels aux marchés mondiaux.",
        "about.team.bio2": "Sarah travaille directement avec les artisans à travers l'Égypte, garantissant des pratiques équitables et aidant à développer de nouveaux designs qui honorent la tradition.",
        "about.team.bio3": "Ahmed s'assure que chaque pièce répond à nos normes élevées de savoir-faire, travaillant étroitement avec les artisans pour perfectionner leurs techniques.",
        
        "about.why.title": "Pourquoi Choisir Souvenir Egypt",
        "about.why.authentic": "Artisanat Authentique",
        "about.why.authentic.desc": "Chaque pièce est authentiquement faite à la main par des artisans égyptiens qualifiés utilisant des techniques traditionnelles.",
        "about.why.fair": "Pratiques de Commerce Équitable",
        "about.why.fair.desc": "Nous veillons à ce que les artisans reçoivent une rémunération équitable et travaillent dans des environnements sûrs et durables.",
        "about.why.delivery": "Livraison à l'Hôtel",
        "about.why.delivery.desc": "Nous livrons directement à votre hôtel en Égypte, rendant l'achat de souvenirs pratique pour les voyageurs.",
        "about.why.worldwide": "Livraison Mondiale",
        "about.why.worldwide.desc": "Nous livrons dans le monde entier, apportant l'artisanat égyptien authentique à votre porte n'importe où dans le monde.",
        "about.why.gifts": "Cadeaux Parfaits",
        "about.why.gifts.desc": "Nos pièces font des cadeaux uniques et significatifs qui portent des histoires du patrimoine égyptien.",
        "about.why.heritage": "Préservation Culturelle",
        "about.why.heritage.desc": "Votre achat aide à préserver les anciens métiers et à soutenir les communautés d'artisans.",
        
        "about.cta.title": "Rejoignez Notre Voyage",
        "about.cta.text": "Chaque achat soutient les artisans égyptiens et aide à préserver notre riche patrimoine culturel pour les générations futures.",
        "about.cta.shop": "Acheter les Collections",
        "about.cta.artisans": "Rencontrer les Artisans"
    }
};

// Merge translations with existing ones
function initializeAboutPageLanguage() {
    // Load existing translations from main language switcher
    const mainLangSwitcher = window.languageSwitcher || {};
    let translations = mainLangSwitcher.translations || {};
    
    // Merge about page translations
    Object.keys(aboutTranslations).forEach(lang => {
        if (!translations[lang]) translations[lang] = {};
        Object.assign(translations[lang], aboutTranslations[lang]);
    });
    
    // Update window translations
    window.translations = translations;
    
    // Initialize language if not already done
    if (!window.currentLang) {
        window.currentLang = localStorage.getItem('preferred-language') || 'en';
    }
    
    // Apply translations for about page
    applyAboutPageTranslations(window.currentLang);
}

function applyAboutPageTranslations(lang) {
    const langData = window.translations?.[lang];
    if (!langData) return;
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = langData[key];
            } else if (element.tagName === 'IMG') {
                element.alt = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for main language switcher to load
    setTimeout(() => {
        initializeAboutPageLanguage();
        
        // Listen for language changes
        window.addEventListener('languageChanged', function(e) {
            applyAboutPageTranslations(e.detail.language);
        });
    }, 100);
    
    // Setup language dropdown
    setupLanguageDropdown();
});

function setupLanguageDropdown() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isShowing = languageDropdown.classList.contains('show');
            
            // Close all other dropdowns first
            closeAllDropdowns();
            
            if (!isShowing) {
                languageDropdown.classList.add('show');
                // Update chevron icon
                const chevron = languageToggle.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = 'rotate(180deg)';
                }
            }
        });

        // Handle language selection
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                
                // Update active class
                document.querySelectorAll('.lang-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                
                // Update current language display
                const currentLangElement = document.querySelector('.current-lang');
                if (currentLangElement) {
                    currentLangElement.textContent = lang.toUpperCase();
                }
                
                // Trigger language change
                if (window.switchLanguage) {
                    window.switchLanguage(lang);
                } else {
                    // Fallback: update page manually
                    applyAboutPageTranslations(lang);
                    localStorage.setItem('preferred-language', lang);
                }
                
                closeLanguageDropdown();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher-dropdown')) {
                closeLanguageDropdown();
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLanguageDropdown();
            }
        });
    }
}

function closeLanguageDropdown() {
    const languageDropdown = document.getElementById('languageDropdown');
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageDropdown) {
        languageDropdown.classList.remove('show');
    }
    
    if (languageToggle) {
        const chevron = languageToggle.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
        }
    }
}

function closeAllDropdowns() {
    closeLanguageDropdown();
    
    // Close other dropdowns if they exist
    const userMenu = document.getElementById('userMenu');
    const cartPreview = document.getElementById('cartPreview');
    
    if (userMenu) userMenu.classList.remove('show');
    if (cartPreview) cartPreview.classList.remove('show');
}