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
        
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
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
        if (isOpen) closeMobileMenu();
        else openMobileMenu();
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
        
        if (scrollTop > 100) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
        
        updateScrollIndicator();
        triggerScrollAnimations();
        lastScrollTop = scrollTop;
    }, 16));
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

// =======================
// Form Handling (Updated for Lambda POST)
// =======================
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    const leadMagnetForm = document.getElementById('leadMagnetForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
    
    if (leadMagnetForm) {
        leadMagnetForm.addEventListener('submit', handleLeadMagnetSubmission);
    }
    
    addFormValidation();
}

function handleContactFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    
    if (!validateContactForm(formObject)) return;
    
    postContactForm(e.target, formObject);
}

async function postContactForm(form, formData) {
    const API_URL = "https://7wi6kahqb3.execute-api.ap-south-1.amazonaws.com";
    const SECRET_TOKEN = "LQ_x7T9dE"; // Match your Lambda token

    const payload = {
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        email: formData.email || '',
        phone: formData.phone || '',
        company: formData.company || '',
        service: formData.service || '',
        message: formData.message || ''
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-lq-token': SECRET_TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
            showFormMessage(
                '✓ Thank you! Your audit request has been received. We will contact you within 24 hours.',
                'success',
                'contactForm'
            );
            form.reset();
            form.querySelectorAll('.form-control').forEach(input => input.classList.remove('error'));
            console.log('Contact form submitted:', formData);
        } else {
            showFormMessage('Error: ' + (data.message || 'Unknown error'), 'error', 'contactForm');
        }
    } catch (err) {
        showFormMessage('Network error: ' + err.message, 'error', 'contactForm');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function handleLeadMagnetSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    
    if (!validateLeadForm(formObject)) return;
    
    submitLeadMagnetForm(e.target, formObject);
}

// =======================
// Validation & Helpers
// =======================
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
    const form = document.getElementById(formId);
    if (form) form.querySelectorAll('.form-control').forEach(input => input.classList.remove('error'));
    
    required.forEach(field => {
        if (!formData[field] || formData[field].trim() === '') {
            let input = document.getElementById(field);
            if (!input && formId === 'leadMagnetForm') {
                input = document.getElementById('lead' + field.charAt(0).toUpperCase() + field.slice(1));
            }
            if (input) input.classList.add('error');
            isValid = false;
        }
    });
    
    const emailField = formData.email;
    if (emailField && !isValidEmail(emailField)) {
        let emailInput = document.getElementById('email');
        if (!emailInput && formId === 'leadMagnetForm') emailInput = document.getElementById('leadEmail');
        if (emailInput) emailInput.classList.add('error');
        isValid = false;
    }
    
    if (!isValid) showFormMessage('Please fill in all required fields correctly.', 'error', formId);
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =======================
// Rest of your SPA code remains the same
// (Animations, interactive elements, accessibility, scroll, performance optimizations, etc.)
// =======================

console.log('Launch Quests website fully loaded and optimized');
