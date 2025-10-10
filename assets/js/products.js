// Products page specific JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Animation on scroll
    const animateElements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    animateElements.forEach((el) => {
        observer.observe(el);
    });

    // Products filter functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            // Get filter value
            const filterValue = button.getAttribute("data-filter");

            // Filter products
            productCards.forEach((card) => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.classList.add("animated");
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = this.querySelector(".newsletter-input");
            const email = emailInput.value.trim();

            if (email) {
                // Here you would normally send the email to your server
                alert("شكراً لك! تم اشتراكك في النشرة الإخبارية بنجاح.");
                emailInput.value = "";
            }
        });
    }

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Filter button hover effects
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'var(--color-primary)';
                this.style.color = 'var(--color-light)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--color-primary)';
            }
        });
    });
});