// Artisans Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const artisanCards = document.querySelectorAll('.artisan-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter artisans
            artisanCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.3s ease';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Read more/less functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storySection = this.closest('.artisan-story');
            const fullStory = storySection.querySelector('.full-story');
            const storyPreview = storySection.querySelector('.story-preview');
            
            if (fullStory.classList.contains('expanded')) {
                // Collapse
                fullStory.classList.remove('expanded');
                storyPreview.style.display = 'block';
                this.innerHTML = 'Read Full Story <i class="fas fa-chevron-down"></i>';
                this.classList.remove('active');
                
                // Scroll to the beginning of the story
                storySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Expand
                fullStory.classList.add('expanded');
                storyPreview.style.display = 'none';
                this.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
                this.classList.add('active');
                
                // Scroll to show the expanded content
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Share functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const artisanName = this.dataset.artisan;
            const artisanCard = this.closest('.artisan-card');
            const artisanFullName = artisanCard.querySelector('h3').textContent;
            const artisanTitle = artisanCard.querySelector('.artisan-title').textContent;
            const pageUrl = window.location.href;
            
            // Create share text
            const shareText = `Check out ${artisanFullName}, ${artisanTitle} on Souvenir Egypt Store! ${pageUrl}`;
            
            // Try Web Share API first
            if (navigator.share) {
                navigator.share({
                    title: `${artisanFullName} - Souvenir Egypt Artisan`,
                    text: shareText,
                    url: pageUrl
                }).catch(console.error);
            } else {
                // Fallback to copy to clipboard
                navigator.clipboard.writeText(shareText).then(() => {
                    // Show success message
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    this.style.background = 'var(--deep-teal)';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.background = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    // Fallback to prompt
                    prompt('Copy this link to share:', shareText);
                });
            }
        });
    });
    
    // Image error handling
    const artisanImages = document.querySelectorAll('.artisan-image img');
    
    artisanImages.forEach(img => {
        img.addEventListener('error', function() {
            // Set a fallback image
            this.src = 'assets/img/artisans/default.jpg';
        });
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.title;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
    
    // Add CSS for tooltips
    const tooltipStyle = document.createElement('style');
    tooltipStyle.textContent = `
        .tooltip {
            position: absolute;
            background: var(--dark-blue);
            color: white;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.85rem;
            z-index: 9999;
            pointer-events: none;
            white-space: nowrap;
        }
        
        .tooltip::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid var(--dark-blue);
        }
    `;
    document.head.appendChild(tooltipStyle);
});