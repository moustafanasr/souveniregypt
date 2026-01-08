// auth.js - Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeAuthForms();
    initializePasswordToggle();
    initializePasswordStrength();
    initializeSocialAuth();
});

function initializeAuthForms() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.auth-btn');
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    const rememberMe = form.querySelector('#rememberMe').checked;

    // Show loading state
    setButtonLoading(submitBtn, true);

    // Simulate API call
    setTimeout(() => {
        // For demo purposes - always succeed
        const success = true; // In real app, this would be from API response
        
        if (success) {
            // Store login state
            localStorage.setItem('souvenir-user-loggedin', 'true');
            localStorage.setItem('souvenir-user-email', email);
            localStorage.setItem('souvenir-user-remember', rememberMe.toString());
            
            // Update header state
            if (window.headerManager) {
                window.headerManager.showLoggedInState();
            }
            
            showAuthNotification('Login successful! Redirecting...', 'success');
            
            // Redirect to account page
            setTimeout(() => {
                window.location.href = './my-account.html';
            }, 1500);
        } else {
            showAuthNotification('Invalid email or password. Please try again.', 'error');
            setButtonLoading(submitBtn, false);
        }
    }, 2000);
}

function handleRegister(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.auth-btn');
    const firstName = form.querySelector('#firstName').value;
    const lastName = form.querySelector('#lastName').value;
    const email = form.querySelector('#regEmail').value;
    const password = form.querySelector('#regPassword').value;
    const confirmPassword = form.querySelector('#confirmPassword').value;
    const agreeTerms = form.querySelector('#agreeTerms').checked;
    const newsletter = form.querySelector('#newsletter').checked;

    // Validate passwords match
    if (password !== confirmPassword) {
        showAuthNotification('Passwords do not match. Please try again.', 'error');
        return;
    }

    // Validate terms agreement
    if (!agreeTerms) {
        showAuthNotification('Please agree to the Terms of Service and Privacy Policy.', 'error');
        return;
    }

    // Show loading state
    setButtonLoading(submitBtn, true);

    // Simulate API call
    setTimeout(() => {
        // For demo purposes - always succeed
        const success = true; // In real app, this would be from API response
        
        if (success) {
            // Store user data
            const userData = {
                firstName,
                lastName,
                email,
                newsletter,
                joined: new Date().toISOString()
            };
            
            localStorage.setItem('souvenir-user-data', JSON.stringify(userData));
            localStorage.setItem('souvenir-user-loggedin', 'true');
            
            // Update header state
            if (window.headerManager) {
                window.headerManager.showLoggedInState();
            }
            
            showAuthNotification('Account created successfully! Welcome to Souvenir Egypt.', 'success');
            
            // Redirect to account page
            setTimeout(() => {
                window.location.href = './my-account.html';
            }, 2000);
        } else {
            showAuthNotification('Registration failed. Please try again.', 'error');
            setButtonLoading(submitBtn, false);
        }
    }, 2000);
}

function initializePasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

function initializePasswordStrength() {
    const passwordInput = document.getElementById('regPassword');
    if (!passwordInput) return;

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        updatePasswordStrengthDisplay(strength);
    });
}

function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    return Math.min(strength, 4);
}

function updatePasswordStrengthDisplay(strength) {
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    if (!strengthFill || !strengthText) return;
    
    strengthFill.setAttribute('data-strength', strength);
    
    const messages = {
        0: 'Very Weak',
        1: 'Weak',
        2: 'Fair', 
        3: 'Good',
        4: 'Strong'
    };
    
    strengthText.textContent = messages[strength];
}

function initializeSocialAuth() {
    document.querySelectorAll('.btn-social').forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('btn-google') ? 'google' : 'facebook';
            handleSocialAuth(provider);
        });
    });
}

function handleSocialAuth(provider) {
    showAuthNotification(`Connecting with ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`, 'info');
    
    // Simulate social auth
    setTimeout(() => {
        // For demo purposes - always succeed
        localStorage.setItem('souvenir-user-loggedin', 'true');
        localStorage.setItem('souvenir-user-provider', provider);
        
        // Update header state
        if (window.headerManager) {
            window.headerManager.showLoggedInState();
        }
        
        showAuthNotification(`Connected with ${provider.charAt(0).toUpperCase() + provider.slice(1)} successfully!`, 'success');
        
        // Redirect to account page
        setTimeout(() => {
            window.location.href = './my-account.html';
        }, 1500);
    }, 2000);
}

function setButtonLoading(button, loading) {
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

function showAuthNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.auth-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `auth-notification auth-notification-${type}`;
    notification.innerHTML = `
        <div class="auth-notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#auth-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'auth-notification-styles';
        styles.textContent = `
            .auth-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideInRight 0.3s ease;
                border-left: 4px solid #6c757d;
                max-width: 400px;
            }
            
            .auth-notification-success {
                border-left-color: #28a745;
            }
            
            .auth-notification-error {
                border-left-color: #dc3545;
            }
            
            .auth-notification-info {
                border-left-color: #17a2b8;
            }
            
            .auth-notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem 1.5rem;
            }
            
            .auth-notification i {
                font-size: 1.2rem;
            }
            
            .auth-notification-success i {
                color: #28a745;
            }
            
            .auth-notification-error i {
                color: #dc3545;
            }
            
            .auth-notification-info i {
                color: #17a2b8;
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Check if user is already logged in
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('souvenir-user-loggedin') === 'true';
    const currentPath = window.location.pathname;
    
    // If user is logged in and trying to access auth pages, redirect to account
    if (isLoggedIn && (currentPath.includes('login') || currentPath.includes('register'))) {
        window.location.href = './my-account.html';
        return;
    }
    
    // If user is not logged in and trying to access account pages, redirect to login
    if (!isLoggedIn && currentPath.includes('account/')) {
        window.location.href = './login.html';
        return;
    }
}

// Initialize auth status check
checkAuthStatus();

// Make functions available globally
window.auth = {
    handleLogin,
    handleRegister,
    showAuthNotification,
    checkAuthStatus
};