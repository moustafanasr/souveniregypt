// header.js - JavaScript for header functionality only
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // Initialize dropdown functionality
    initDropdowns();
});

// Dropdown functionality for both desktop and mobile
function initDropdowns() {
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdownMenu = this.closest('li').querySelector('.dropdown-menu');
            if (!dropdownMenu) return;
            
            const isVisible = dropdownMenu.style.display === 'block';
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // Reset all other icons
            document.querySelectorAll('.dropdown-icon').forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current dropdown
            if (isVisible) {
                dropdownMenu.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                dropdownMenu.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-links > li:has(.dropdown-menu)')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            
            document.querySelectorAll('.dropdown-icon').forEach(icon => {
                icon.style.transform = 'rotate(0deg)';
            });
        }
    });
    
    // Prevent closing when clicking inside dropdown menu
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}