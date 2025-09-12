// Launch Quests Website JavaScript - Professional Single Page Application

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeFormHandling();
    initializeAnimations();
    initializeInteractiveElements();
    createScrollIndicator();
    manageFocusAccessibility();
    
    console.log('Launch Quests website initialized successfully');
});

// Smooth Navigation System
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                scrollToSection(targetId.substring(1));
                updateActiveNavLink(this);
                closeMobileMenu();
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', throttle(updateActiveNavOnScroll, 100));
    
    // Set initial active nav link
    updateActiveNavOnScroll();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.pageYOffset + navbarHeight + 100;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    if (navMenu && mobileToggle) {
        const isOpen = navMenu.classList.contains('mobile-open');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

function openMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    if (navMenu && mobileToggle) {
        navMenu.classList.add('mobile-open');
        mobileToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    if (navMenu && mobileToggle) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Scroll Effects
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', throttle(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar scroll effect
        if (scrollTop > 100) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
        
        // Update scroll indicator
        updateScrollIndicator();
        
        // Trigger animations for elements coming into view
        triggerScrollAnimations();
        
        lastScrollTop = scrollTop;
    }, 16)); // ~60fps
}

function updateScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        indicator.style.width = scrolled + '%';
    }
}

function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
}

// Form Handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    const leadMagnetForm = document.getElementById('leadMagnetForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
    
    if (leadMagnetForm) {
        leadMagnetForm.addEventListener('submit', handleLeadMagnetSubmission);
    }
    
    // Add real-time validation
    addFormValidation();
}

function handleContactFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    if (!validateContactForm(formObject)) {
        return;
    }
    
    submitContactForm(e.target, formObject);
}

function handleLeadMagnetSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    if (!validateLeadForm(formObject)) {
        return;
    }
    
    submitLeadMagnetForm(e.target, formObject);
}

function validateContactForm(formData) {
    const required = ['firstName', 'lastName', 'email'];
    return validateFormFields(formData, required, 'contactForm');
}

function validateLeadForm(formData) {
    const required = ['name', 'email'];
    return validateFormFields(formData, required, 'leadMagnetForm');
}

function validateFormFields(formData, required, formId) {
    let isValid = true;
    
    // Clear previous error states
    const form = document.getElementById(formId);
    if (form) {
        form.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error');
        });
    }
    
    required.forEach(field => {
        if (!formData[field] || formData[field].trim() === '') {
            let input = document.getElementById(field);
            if (!input && formId === 'leadMagnetForm') {
                input = document.getElementById('lead' + field.charAt(0).toUpperCase() + field.slice(1));
            }
            if (input) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    // Validate email format
    const emailField = formData.email;
    if (emailField && !isValidEmail(emailField)) {
        let emailInput = document.getElementById('email');
        if (!emailInput && formId === 'leadMagnetForm') {
            emailInput = document.getElementById('leadEmail');
        }
        if (emailInput) {
            emailInput.classList.add('error');
            isValid = false;
        }
    }
    
    if (!isValid) {
        showFormMessage('Please fill in all required fields correctly.', 'error', formId);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitContactForm(form, formData) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showFormMessage('✓ Thank you! Your audit request has been received. We\'ll contact you within 24 hours to schedule your free consultation.', 'success', 'contactForm');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any error states
        form.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error');
        });
        
        // Track conversion (in real app, you'd send to analytics)
        console.log('Contact form submitted:', formData);
    }, 2000);
}

function submitLeadMagnetForm(form, formData) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Downloading...';
    submitBtn.disabled = true;
    
    // Simulate download process
    setTimeout(() => {
        // Trigger the download first
        triggerDownload();
        
        // Then show success message
        showFormMessage('✓ Success! Check your email for the CRM Setup Checklist. The download should start automatically.', 'success', 'leadMagnetForm');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any error states
        form.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error');
        });
        
        // Track conversion
        console.log('Lead magnet downloaded:', formData);
    }, 1500);
}

function triggerDownload() {
    // Create a more realistic PDF download simulation
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Title (CRM Setup Checklist for Startups)
/Producer (Launch Quests)
/Author (Launch Quests)
/CreationDate (D:20240909000000)
>>
endobj
2 0 obj
<<
/Type /Catalog
/Pages 3 0 R
>>
endobj
3 0 obj
<<
/Type /Pages
/Kids [4 0 R]
/Count 1
>>
endobj
4 0 obj
<<
/Type /Page
/Parent 3 0 R
/MediaBox [0 0 612 792]
/Contents 5 0 R
>>
endobj
5 0 obj
<<
/Length 54
>>
stream
BT
/F1 12 Tf
100 700 Td
(CRM Setup Checklist for Startups) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000108 00000 n 
0000000158 00000 n 
0000000215 00000 n 
0000000315 00000 n 
trailer
<<
/Size 6
/Root 2 0 R
>>
startxref
420
%%EOF`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CRM-Setup-Checklist-Launch-Quests.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

function showFormMessage(message, type, formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    // Remove existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-${type}`;
    messageDiv.innerHTML = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        text-align: center;
        font-weight: 500;
        ${type === 'success' ? `
            background-color: rgba(33, 128, 141, 0.1);
            border: 1px solid rgba(33, 128, 141, 0.2);
            color: var(--color-success);
        ` : `
            background-color: rgba(255, 84, 89, 0.1);
            border: 1px solid rgba(255, 84, 89, 0.2);
            color: var(--color-error);
        `}
    `;
    
    // Insert at the beginning of the form
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto-hide after 7 seconds
    setTimeout(() => {
        if (messageDiv && messageDiv.parentNode) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => messageDiv.remove(), 500);
        }
    }, 7000);
}

function addFormValidation() {
    const inputs = document.querySelectorAll('.form-control');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateSingleField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });
}

function validateSingleField(input) {
    const value = input.value.trim();
    const isRequired = input.hasAttribute('required');
    
    if (isRequired && !value) {
        input.classList.add('error');
        return false;
    }
    
    if (input.type === 'email' && value && !isValidEmail(value)) {
        input.classList.add('error');
        return false;
    }
    
    input.classList.remove('error');
    return true;
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
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for grouped elements
                const parent = entry.target.parentNode;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(child => 
                        child.classList.contains('fade-in-up')
                    );
                    siblings.forEach((sibling, index) => {
                        setTimeout(() => {
                            sibling.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatableElements = document.querySelectorAll(`
        .service-card,
        .pricing-card,
        .case-study-card,
        .testimonial-card,
        .stat-card,
        .value-item,
        .hero-stats .stat-item
    `);
    
    animatableElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up:not(.animate-in)');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
            element.classList.add('animate-in');
        }
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Add ripple effect to buttons
    addRippleEffect();
    
    // Add hover effects to cards
    addCardHoverEffects();
    
    // Add floating animations
    enhanceFloatingElements();
    
    // Add typing animation to hero title
    addTypingAnimation();
}

function addRippleEffect() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
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
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
}

function addCardHoverEffects() {
    const cards = document.querySelectorAll('.service-card, .pricing-card, .case-study-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

function enhanceFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Add random rotation and movement variations
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
        
        // Add mouse interaction
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'translateY(-20px) rotate(10deg) scale(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
        });
    });
}

function addTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        const highlightMatch = text.match(/<span class="highlight">(.*?)<\/span>/);
        
        if (highlightMatch) {
            const beforeHighlight = text.substring(0, text.indexOf('<span'));
            const highlightText = highlightMatch[1];
            const afterHighlight = text.substring(text.indexOf('</span>') + 7);
            
            heroTitle.innerHTML = beforeHighlight + '<span class="highlight"></span>' + afterHighlight;
            
            const highlightSpan = heroTitle.querySelector('.highlight');
            
            // Type out the highlighted text
            let i = 0;
            const typeWriter = () => {
                if (i < highlightText.length) {
                    highlightSpan.innerHTML += highlightText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }
}

// Global Functions for Button Actions
window.bookAudit = function() {
    console.log('Book Audit button clicked'); // Debug log
    
    // First scroll to contact section
    scrollToSection('contact');
    
    // Focus the first input after scrolling
    setTimeout(() => {
        const firstInput = document.getElementById('firstName');
        if (firstInput) {
            firstInput.focus();
            firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            console.log('First input focused'); // Debug log
        } else {
            console.log('First input not found'); // Debug log
        }
    }, 800);
};

window.scrollToSection = scrollToSection;

// Utility Functions
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Accessibility and Focus Management
function manageFocusAccessibility() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Performance Optimization
function optimizePerformance() {
    // Lazy load images when implemented
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    preloadCriticalResources();
}

function preloadCriticalResources() {
    // Preload fonts
    const fontLinks = [
        'https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2'
    ];
    
    fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .form-control.error {
        border-color: var(--color-error) !important;
        box-shadow: 0 0 0 3px rgba(255, 84, 89, 0.1) !important;
    }
    
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--color-brand-orange) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

console.log('Launch Quests website fully loaded and optimized');