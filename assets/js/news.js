// News page specific JavaScript
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

    // News filter functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const newsCards = document.querySelectorAll(".news-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            
            // Add active class to clicked button
            button.classList.add("active");
            
            const filterValue = button.textContent.trim();

            // Filter news cards
            newsCards.forEach((card) => {
                if (filterValue === "جميع الأخبار") {
                    card.style.display = "block";
                    setTimeout(() => card.classList.add("animated"), 50);
                } else {
                    const newsSource = card.querySelector(".news-source");
                    if (newsSource && newsSource.textContent.includes(filterValue)) {
                        card.style.display = "block";
                        setTimeout(() => card.classList.add("animated"), 50);
                    } else {
                        card.style.display = "none";
                    }
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

    // News card hover effects
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
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