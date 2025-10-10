// Contact page specific JavaScript
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

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            // Close all other answers
            document.querySelectorAll(".faq-answer").forEach((item) => {
                if (item !== answer && item.classList.contains("active")) {
                    item.classList.remove("active");
                    item.previousElementSibling.classList.remove("active");
                }
            });

            // Toggle current answer
            question.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });

    // Contact form submission
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح');
                return;
            }

            // Here you would normally send the form data to a server
            // For this example, we'll just show an alert
            alert("شكراً لتواصلكم معنا! سنقوم بالرد على رسالتكم في أقرب وقت ممكن.");
            contactForm.reset();
        });
    }

    // Contact details hover effects
    const contactDetails = document.querySelectorAll('.contact-detail');
    contactDetails.forEach(detail => {
        detail.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        detail.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Team member hover effects
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});