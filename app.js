// Launch Quests Website JavaScript
// Professional 4-page website functionality

// Global variables
let currentTestimonial = 0;
const totalTestimonials = 3;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Launch Quests Website...');
    initializeNavigation();
    initializeMobileMenu();
    initializeTestimonials();
    initializeFormHandling();
    initializeScrollEffects();
    initializeAnimations();
    console.log('Launch Quests Website initialized successfully!');
});

// Navigation System
function initializeNavigation() {
    console.log('Initializing navigation...');
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const ctaButtons = document.querySelectorAll('[data-page]');
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb span[data-page]');
    
    console.log('Found nav links:', navLinks.length);
    console.log('Found CTA buttons:', ctaButtons.length);
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav link clicked:', this.getAttribute('data-page'));
            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                navigateToPage(targetPage);
                updateActiveNav(this);
                closeMobileMenu();
            }
        });
    });
    
    // Handle CTA button clicks
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('CTA button clicked:', this.getAttribute('data-page'));
            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                navigateToPage(targetPage);
                updateActiveNavByPage(targetPage);
                closeMobileMenu();
            }
        });
    });
    
    // Handle breadcrumb clicks
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Breadcrumb clicked:', this.getAttribute('data-page'));
            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                navigateToPage(targetPage);
                updateActiveNavByPage(targetPage);
            }
        });
    });
    
    console.log('Navigation initialized successfully');
}

function navigateToPage(targetPage) {
    console.log('Navigating to page:', targetPage);
    const pages = document.querySelectorAll('.page');
    const targetPageElement = document.getElementById(targetPage);
    
    if (!targetPageElement) {
        console.error('Target page not found:', targetPage);
        return;
    }
    
    // Hide all pages immediately
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // Show target page immediately
    targetPageElement.classList.add('active');
    targetPageElement.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger page-specific animations
    setTimeout(() => {
        triggerPageAnimations(targetPageElement);
    }, 100);
    
    console.log('Successfully navigated to:', targetPage);
}

function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveNavByPage(targetPage) {
    const correspondingNavLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
    if (correspondingNavLink) {
        updateActiveNav(correspondingNavLink);
    }
}

// Mobile Menu
function initializeMobileMenu() {
    console.log('Initializing mobile menu...');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Mobile toggle clicked');
            toggleMobileMenu();
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close when pressing escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
        
        console.log('Mobile menu initialized successfully');
    } else {
        console.log('Mobile menu elements not found');
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    const isOpen = navMenu.classList.contains('mobile-open');
    console.log('Toggle mobile menu, currently open:', isOpen);
    
    navMenu.classList.toggle('mobile-open');
    mobileToggle.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    if (navMenu && mobileToggle) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
    }
}

// Testimonials Carousel
function initializeTestimonials() {
    console.log('Initializing testimonials...');
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!testimonials.length) {
        console.log('No testimonials found');
        return;
    }
    
    console.log('Found testimonials:', testimonials.length);
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        if (!document.querySelector('.testimonials-carousel:hover')) {
            nextTestimonial();
        }
    }, 5000);
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Previous testimonial clicked');
            prevTestimonial();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Next testimonial clicked');
            nextTestimonial();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Testimonial indicator clicked:', index);
            showTestimonial(index);
        });
    });
    
    console.log('Testimonials initialized successfully');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = currentTestimonial === 0 ? totalTestimonials - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
}

function showTestimonial(index) {
    console.log('Showing testimonial:', index);
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    currentTestimonial = index;
}

// Form Handling
function initializeFormHandling() {
    console.log('Initializing form handling...');
    const contactForm = document.getElementById('contactForm');
    const scheduleBtn = document.getElementById('scheduleConsultation');
    
    if (contactForm) {
        console.log('Contact form found');
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Real-time field validation
        const fields = contactForm.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.addEventListener('blur', validateField);
            field.addEventListener('input', clearFieldError);
        });
    } else {
        console.log('Contact form not found');
    }
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Schedule consultation clicked');
            navigateToPage('contact');
            updateActiveNavByPage('contact');
            
            setTimeout(() => {
                const firstInput = document.getElementById('firstName');
                if (firstInput) {
                    firstInput.focus();
                    firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        });
    }
    
    console.log('Form handling initialized');
}

function handleFormSubmission(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    console.log('Form data:', formObject);
    
    // Validate all fields
    if (!validateForm(formObject)) {
        console.log('Form validation failed');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    console.log('Simulating form submission...');
    
    // Simulate form submission
    setTimeout(() => {
        showFormSuccess();
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        console.log('Form submission completed');
    }, 2000);
}

function validateForm(formData) {
    const required = ['firstName', 'lastName', 'email'];
    let isValid = true;
    
    // Clear previous errors
    clearAllFieldErrors();
    
    required.forEach(field => {
        if (!formData[field] || formData[field].trim() === '') {
            const input = document.getElementById(field);
            if (input) {
                showFieldError(input, 'This field is required');
                isValid = false;
            }
        }
    });
    
    // Email validation
    if (formData.email && !isValidEmail(formData.email)) {
        const emailInput = document.getElementById('email');
        if (emailInput) {
            showFieldError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

function clearFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.style.borderColor = '';
}

function clearAllFieldErrors() {
    const errorElements = document.querySelectorAll('.field-error');
    errorElements.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('.form-control');
    fields.forEach(field => {
        field.style.borderColor = '';
    });
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: var(--color-error);
        font-size: 0.875rem;
        margin-top: 0.25rem;
        padding: 0.25rem 0;
    `;
    errorDiv.textContent = message;
    
    field.style.borderColor = 'var(--color-error)';
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormSuccess() {
    // Create success message
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.style.cssText = `
        background: #D4EDDA;
        color: #155724;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid #C3E6CB;
        animation: slideInUp 0.5s ease-out;
    `;
    
    successDiv.innerHTML = `
        <strong>Success!</strong> Your message has been sent successfully. We'll get back to you within 2 hours.
    `;
    
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                successDiv.remove();
            }, 500);
        }
    }, 5000);
}

// Scroll Effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar scroll effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Animation System
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animate-in');
                entry.target.classList.add('animated');
                
                // Special animations for different elements
                if (entry.target.classList.contains('service-card')) {
                    animateServiceCard(entry.target);
                }
                
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatableElements = document.querySelectorAll(`
        .service-card,
        .case-study-card,
        .value-card,
        .service-detail-card,
        .stat-item,
        .hero-stats,
        .testimonial-card,
        .product-card
    `);
    
    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

function animateServiceCard(card) {
    const features = card.querySelectorAll('.service-features li');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.animation = 'slideInUp 0.3s ease-out forwards';
        }, index * 100);
    });
}

function animateCounter(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    if (!numberElement) return;
    
    const finalNumber = numberElement.textContent;
    const hasPlus = finalNumber.includes('+');
    const targetNumber = parseInt(finalNumber.replace('+', ''));
    
    if (isNaN(targetNumber)) return;
    
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;
    
    function updateCounter() {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (targetNumber - startValue) * easeOutQuart);
        
        numberElement.textContent = current + (hasPlus ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    updateCounter();
}

// Page-specific animations
function triggerPageAnimations(pageElement) {
    // Add staggered animations to elements
    const animatableElements = pageElement.querySelectorAll(`
        .service-module,
        .value-card,
        .case-study-card,
        .contact-item
    `);
    
    animatableElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-in');
        }, index * 100);
    });
}

// Button interaction effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        createRippleEffect(e);
    }
});

function createRippleEffect(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Arrow key navigation for carousel
    if (document.querySelector('.testimonials-carousel:focus-within')) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevTestimonial();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextTestimonial();
        }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add custom CSS animations
const customAnimations = `
    @keyframes slideInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    .keyboard-navigation *:focus-visible {
        outline: 2px solid var(--color-primary) !important;
        outline-offset: 2px;
    }
`;

// Inject custom animations
const styleSheet = document.createElement('style');
styleSheet.textContent = customAnimations;
document.head.appendChild(styleSheet);

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Export functions for external use if needed
window.LaunchQuestsWebsite = {
    navigateToPage,
    showTestimonial,
    nextTestimonial,
    prevTestimonial,
    closeMobileMenu
};