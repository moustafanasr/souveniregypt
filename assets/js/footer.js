// footer.js - Footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Social media links interaction
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Current year for copyright
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `© ${currentYear} Souvenir Egypt.Store. All rights reserved.`;
    }
});