// smooth-scroll.js - Smooth scrollbar functionality with auto-wrapper creation
let scrollbar;

// Add CSS styles for smooth scroll wrapper
function addSmoothScrollStyles() {
    const styles = `
        body {
            font-family: "Cairo", "Tahoma", sans-serif;
            color: var(--color-text);
            line-height: 1.6;
            background-color: var(--color-background);
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: fixed;
        }

        /* Smooth Scroll Container */
        #smooth-wrapper {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        #smooth-content {
            will-change: transform;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Create smooth scroll wrapper and move body content into it
function createSmoothScrollWrapper() {
    // Check if wrapper already exists
    if (document.getElementById('smooth-wrapper')) {
        return; // Wrapper already exists
    }
    
    // Create the wrapper elements
    const smoothWrapper = document.createElement('div');
    smoothWrapper.id = 'smooth-wrapper';
    
    const smoothContent = document.createElement('div');
    smoothContent.id = 'smooth-content';
    
    // Move all body children into the smooth-content div
    while (document.body.firstChild) {
        smoothContent.appendChild(document.body.firstChild);
    }
    
    // Append the wrapper structure to body
    smoothWrapper.appendChild(smoothContent);
    document.body.appendChild(smoothWrapper);
    
    console.log('Smooth scroll wrapper created successfully');
}

function initSmoothScroll() {
    // Add the required CSS styles first
    addSmoothScrollStyles();
    
    // Create the smooth scroll wrapper structure
    createSmoothScrollWrapper();
    
    try {
        scrollbar = Scrollbar.init(document.querySelector("#smooth-wrapper"), {
            damping: 0.07,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
        
        document.body.style.overflow = "hidden";
        console.log('Smooth scrollbar initialized successfully');
        return scrollbar;
    } catch (e) {
        console.error("Smooth scrollbar failed, using normal scroll");
        document.body.style.overflow = "auto";
        return null;
    }
}

function setupScrollToTop() {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (!scrollTopBtn) return;

    if (scrollbar) {
        scrollbar.addListener((status) => {
            if (status.offset.y > 500) {
                scrollTopBtn.classList.add("active");
            } else {
                scrollTopBtn.classList.remove("active");
            }
        });

        scrollTopBtn.addEventListener("click", function () {
            scrollbar.scrollTo(0, 0, 800);
        });
    } else {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add("active");
            } else {
                scrollTopBtn.classList.remove("active");
            }
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

// Make functions globally available
window.initSmoothScroll = initSmoothScroll;
window.setupScrollToTop = setupScrollToTop;