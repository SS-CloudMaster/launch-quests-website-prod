// Launch Quests Enhanced Portfolio JavaScript with Social Proof Elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Remove loading class to enable animations
    document.body.classList.remove('loading');
    
    // Animated counters for portfolio statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    // Handle different number formats
                    if (target === 25) {
                        counter.textContent = Math.floor(current) + '+';
                    } else if (target === 50) {
                        counter.textContent = Math.floor(current) + '+';
                    } else if (target === 10) {
                        counter.textContent = Math.floor(current) + '+';
                    } else if (target === 95) {
                        counter.textContent = Math.floor(current) + '%';
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    // Final values
                    if (target === 25) {
                        counter.textContent = '25+';
                    } else if (target === 50) {
                        counter.textContent = '50+';
                    } else if (target === 10) {
                        counter.textContent = '10+';
                    } else if (target === 95) {
                        counter.textContent = '95%';
                    }
                }
            };
            
            // Add animation class
            counter.parentElement.classList.add('count-animation');
            updateCounter();
        });
    }

    // Testimonial Carousel Functionality
    function initializeTestimonialCarousel() {
        const carousel = document.querySelector('.quote-carousel');
        if (!carousel) return;

        const cards = carousel.querySelectorAll('.quote-card');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentSlide = 0;

        function showSlide(index) {
            // Remove active class from all cards and dots
            cards.forEach(card => card.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Add active class to current card and dot
            if (cards[index]) {
                cards[index].classList.add('active');
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
            
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % cards.length;
            showSlide(next);
        }

        function prevSlide() {
            const prev = (currentSlide - 1 + cards.length) % cards.length;
            showSlide(prev);
        }

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-advance carousel every 8 seconds
        setInterval(nextSlide, 8000);

        // Initialize with first slide
        showSlide(0);
    }

    // Video Testimonial Placeholder Interaction
    function initializeVideoTestimonials() {
        const videoPlaceholders = document.querySelectorAll('.video-placeholder');
        
        videoPlaceholders.forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                // Simulate video play
                const playButton = this.querySelector('.play-button');
                const overlay = this.querySelector('.video-overlay');
                
                if (playButton && overlay) {
                    // Add loading state
                    playButton.innerHTML = '⏳';
                    playButton.style.transform = 'translate(-50%, -50%) scale(0.8)';
                    
                    setTimeout(() => {
                        showNotification('Video testimonial would play here in a real application!', 'info');
                        playButton.innerHTML = '▶';
                        playButton.style.transform = 'translate(-50%, -50%) scale(1)';
                    }, 1000);
                }
            });
        });
    }

    // Client Logo Hover Effects with Project Details
    function initializeClientLogoInteractions() {
        const clientLogoCards = document.querySelectorAll('.client-logo-card');
        
        clientLogoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const industry = this.getAttribute('data-industry');
                const project = this.getAttribute('data-project');
                
                // Animate the card
                this.style.transform = 'translateY(-12px) scale(1.02)';
                
                // Show detailed info in hover state
                const hoverInfo = this.querySelector('.client-hover-info');
                if (hoverInfo) {
                    hoverInfo.style.opacity = '1';
                    hoverInfo.style.transform = 'translateY(10px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                
                const hoverInfo = this.querySelector('.client-hover-info');
                if (hoverInfo) {
                    hoverInfo.style.opacity = '0';
                    hoverInfo.style.transform = 'translateY(-10px)';
                }
            });
            
            // Click for more interaction
            card.addEventListener('click', function() {
                const industry = this.getAttribute('data-industry');
                const project = this.getAttribute('data-project');
                showNotification(`${industry} - ${project}: Click to view full case study!`, 'info');
            });
        });
    }

    // Social Proof Animations
    function animateSocialProofElements() {
        // Animate client thumbnails in stats
        const clientThumbs = document.querySelectorAll('.client-thumb');
        clientThumbs.forEach((thumb, index) => {
            setTimeout(() => {
                thumb.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    thumb.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });

        // Animate star ratings
        const ratingDisplays = document.querySelectorAll('.rating-display .stars');
        ratingDisplays.forEach(rating => {
            const stars = rating.textContent;
            rating.textContent = '';
            
            for (let i = 0; i < stars.length; i++) {
                setTimeout(() => {
                    rating.textContent += stars[i];
                }, i * 100);
            }
        });
    }

    // Trust Signals Animation
    function initializeTrustSignals() {
        const trustItems = document.querySelectorAll('.trust-item');
        
        trustItems.forEach((item, index) => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                
                const icon = this.querySelector('.trust-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(5deg)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                
                const icon = this.querySelector('.trust-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        // Certification items hover effects
        const certItems = document.querySelectorAll('.cert-item');
        certItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                const icon = this.querySelector('.cert-icon');
                if (icon) {
                    icon.style.transform = 'rotate(10deg)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                const icon = this.querySelector('.cert-icon');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    // Client Journey Timeline Animation
    function initializeClientJourney() {
        const journeyItems = document.querySelectorAll('.journey-item');
        
        journeyItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.6s ease-out';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }, 100);
        });

        // Timeline items animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.addEventListener('mouseenter', function() {
                const content = this.querySelector('.timeline-content');
                const marker = this.querySelector('.timeline-marker');
                
                if (content) {
                    content.style.transform = 'scale(1.02)';
                    content.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.2)';
                }
                
                if (marker) {
                    marker.style.transform = 'translateX(-50%) scale(1.2)';
                    marker.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const content = this.querySelector('.timeline-content');
                const marker = this.querySelector('.timeline-marker');
                
                if (content) {
                    content.style.transform = 'scale(1)';
                    content.style.boxShadow = 'none';
                }
                
                if (marker) {
                    marker.style.transform = 'translateX(-50%) scale(1)';
                    marker.style.boxShadow = 'none';
                }
            });
        });
    }

    // Enhanced Client Showcase Interactions
    function initializeClientShowcases() {
        const showcases = document.querySelectorAll('.client-showcase');
        
        showcases.forEach(showcase => {
            const testimonialCard = showcase.querySelector('.client-testimonial-card');
            const authorAvatar = showcase.querySelector('.author-avatar');
            
            showcase.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-6px)';
                
                if (testimonialCard) {
                    testimonialCard.style.borderLeftColor = 'var(--orange-accent)';
                    testimonialCard.style.borderLeftWidth = '6px';
                }
                
                if (authorAvatar) {
                    authorAvatar.style.transform = 'scale(1.1)';
                    authorAvatar.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.4)';
                }
            });
            
            showcase.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                
                if (testimonialCard) {
                    testimonialCard.style.borderLeftColor = 'var(--orange-primary)';
                    testimonialCard.style.borderLeftWidth = '4px';
                }
                
                if (authorAvatar) {
                    authorAvatar.style.transform = 'scale(1)';
                    authorAvatar.style.boxShadow = 'none';
                }
            });
            
            // Click to expand testimonial (simulation)
            if (testimonialCard) {
                testimonialCard.addEventListener('click', function() {
                    const blockquote = this.querySelector('blockquote');
                    const authorName = this.querySelector('.author-name').textContent;
                    
                    if (blockquote) {
                        showNotification(`Full testimonial from ${authorName} would expand here!`, 'info');
                        this.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            this.style.transform = 'scale(1)';
                        }, 200);
                    }
                });
            }
        });
    }

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger counter animation when stats come into view
                if (entry.target.classList.contains('stats-grid')) {
                    setTimeout(() => {
                        animateCounters();
                        animateSocialProofElements();
                    }, 300);
                }
                
                // Trigger client journey animations
                if (entry.target.classList.contains('client-journey')) {
                    setTimeout(() => {
                        initializeClientJourney();
                    }, 500);
                }
                
                // Add staggered animation for grids
                if (entry.target.classList.contains('services-grid')) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fade-in-up');
                        }, index * 150);
                    });
                }
                
                if (entry.target.classList.contains('trust-grid')) {
                    const items = entry.target.querySelectorAll('.trust-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('fade-in-up');
                        }, index * 100);
                    });
                }
                
                if (entry.target.classList.contains('client-logos-grid')) {
                    const logos = entry.target.querySelectorAll('.client-logo-card');
                    logos.forEach((logo, index) => {
                        setTimeout(() => {
                            logo.classList.add('fade-in-up');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.stats-grid, .client-showcase, .services-grid, .trust-grid, .client-logos-grid, .contact-content, .client-journey, .testimonial-formats, .journey-stats'
    );
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Enhanced hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Contact form handling with enhanced validation
    const contactForm = document.querySelector('.consultation-form');
    
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('.form-control');
        
        // Real-time validation
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear errors immediately on input for better UX
                clearFieldError(this);
                
                // Real-time email validation only when there's content
                if (this.type === 'email' && this.value.length > 0) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        showFieldError(this, 'Please enter a valid email address');
                    }
                }
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear all previous errors before validation
            const allFieldErrors = this.querySelectorAll('.field-error');
            allFieldErrors.forEach(error => error.remove());
            
            // Reset field styles
            formInputs.forEach(input => {
                input.style.borderColor = '';
                input.style.boxShadow = '';
            });
            
            // Validate all required fields
            let isValid = true;
            const requiredFields = ['name', 'email', 'message'];
            
            requiredFields.forEach(fieldName => {
                const field = this.querySelector(`[name="${fieldName}"]`);
                if (field && !validateField(field)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showNotification('Please fix the errors in the form before submitting.', 'error');
                // Focus on first invalid field
                const firstError = this.querySelector('.field-error');
                if (firstError) {
                    const invalidField = firstError.closest('.form-group').querySelector('.form-control');
                    if (invalidField) {
                        invalidField.focus();
                    }
                }
                return;
            }
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Submit button animation
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<span style="opacity: 0.7;">Sending...</span>';
            submitBtn.disabled = true;
            submitBtn.style.cursor = 'not-allowed';
            
            // Simulate API call with success message
            setTimeout(() => {
                showNotification(
                    '🎉 Thank you for your consultation request! We\'ll get back to you within 24 hours. Join our growing list of satisfied clients!',
                    'success'
                );
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.cursor = 'pointer';
                
                // Clear any remaining field errors
                const fieldErrors = this.querySelectorAll('.field-error');
                fieldErrors.forEach(error => error.remove());
                
                // Reset field styles
                formInputs.forEach(input => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                });
                
                // Update social proof counter (simulation)
                setTimeout(() => {
                    updateSocialProofCounters();
                }, 2000);
            }, 2000);
        });
    }

    // Form validation functions
    function validateField(field) {
        if (!field) return true;
        
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        const fieldLabel = field.closest('.form-group').querySelector('.form-label').textContent;
        
        // Always clear existing errors first
        clearFieldError(field);
        
        // Check if field is required
        const isRequired = field.hasAttribute('required') || ['name', 'email', 'message'].includes(fieldName);
        
        if (isRequired && !value) {
            showFieldError(field, `${fieldLabel} is required`);
            return false;
        }
        
        // Skip further validation if field is empty and not required
        if (!value && !isRequired) {
            return true;
        }
        
        // Field-specific validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        if (fieldName === 'name' && value && value.length < 2) {
            showFieldError(field, 'Name must be at least 2 characters long');
            return false;
        }
        
        if (fieldName === 'message' && value && value.length < 10) {
            showFieldError(field, 'Please provide more details about your project (at least 10 characters)');
            return false;
        }
        
        return true;
    }

    function showFieldError(field, message) {
        if (!field) return;
        
        field.style.borderColor = '#ef4444';
        field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        // Remove existing error message
        const existingError = field.closest('.form-group').querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        errorEl.textContent = message;
        errorEl.style.cssText = `
            color: #ef4444;
            font-size: 12px;
            margin-top: 4px;
            display: block;
            opacity: 0;
            transform: translateY(-5px);
            transition: all 0.2s ease;
        `;
        field.closest('.form-group').appendChild(errorEl);
        
        // Animate in
        setTimeout(() => {
            errorEl.style.opacity = '1';
            errorEl.style.transform = 'translateY(0)';
        }, 10);
    }

    function clearFieldError(field) {
        if (!field) return;
        
        field.style.borderColor = '';
        field.style.boxShadow = '';
        const errorEl = field.closest('.form-group').querySelector('.field-error');
        if (errorEl) {
            errorEl.style.opacity = '0';
            errorEl.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                errorEl.remove();
            }, 200);
        }
    }

    // Social Proof Counter Updates (simulation)
    function updateSocialProofCounters() {
        const happyClientsText = document.querySelector('.happy-clients');
        if (happyClientsText) {
            happyClientsText.style.transform = 'scale(1.1)';
            happyClientsText.textContent = 'Join 26+ satisfied clients';
            setTimeout(() => {
                happyClientsText.style.transform = 'scale(1)';
            }, 300);
        }
    }

    // Dropdown select element styling fix
    const projectTypeSelect = document.querySelector('#project_type');
    if (projectTypeSelect) {
        projectTypeSelect.addEventListener('change', function() {
            if (this.value) {
                this.style.color = 'var(--text-primary)';
            } else {
                this.style.color = 'var(--text-muted)';
            }
        });
        
        // Initial style
        if (!projectTypeSelect.value) {
            projectTypeSelect.style.color = 'var(--text-muted)';
        }
    }

    // Advanced notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            hideNotification(notification);
        });
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';
        
        notification.innerHTML = `
            <div class="notification__content">
                <div class="notification__icon">${icon}</div>
                <div class="notification__message">${message}</div>
                <button class="notification__close" aria-label="Close notification">×</button>
            </div>
        `;
        
        // Add notification styles if not exist
        addNotificationStyles();
        
        // Add to document
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            hideNotification(notification);
        });
        
        // Auto hide after 6 seconds for success messages, 4 seconds for others
        const autoHideTime = type === 'success' ? 6000 : 4000;
        setTimeout(() => {
            hideNotification(notification);
        }, autoHideTime);
    }

    function hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    function addNotificationStyles() {
        if (document.querySelector('#notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 24px;
                right: 24px;
                z-index: 10000;
                min-width: 350px;
                max-width: 500px;
                padding: 0;
                border-radius: 12px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                transform: translateX(100%);
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                overflow: hidden;
                backdrop-filter: blur(10px);
            }
            
            .notification--success {
                background: var(--surface-dark);
                border: 1px solid var(--orange-primary);
            }
            
            .notification--error {
                background: var(--surface-dark);
                border: 1px solid #ef4444;
            }
            
            .notification--info {
                background: var(--surface-dark);
                border: 1px solid var(--orange-accent);
            }
            
            .notification__content {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 20px;
            }
            
            .notification__icon {
                flex-shrink: 0;
                font-size: 20px;
                margin-top: 2px;
            }
            
            .notification__message {
                flex: 1;
                color: var(--text-primary);
                font-size: 14px;
                line-height: 1.5;
                margin-top: 1px;
            }
            
            .notification__close {
                flex-shrink: 0;
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }
            
            .notification__close:hover {
                background-color: rgba(255, 255, 255, 0.1);
                color: var(--text-primary);
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            @media (max-width: 480px) {
                .notification {
                    left: 16px;
                    right: 16px;
                    min-width: auto;
                    max-width: none;
                    transform: translateY(-100%);
                }
                
                .notification.show {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Enhanced button interactions with ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.disabled) return;
            
            // Create ripple
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
                animation: buttonRipple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    if (!document.querySelector('#button-ripple-styles')) {
        const rippleStyles = document.createElement('style');
        rippleStyles.id = 'button-ripple-styles';
        rippleStyles.textContent = `
            @keyframes buttonRipple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyles);
    }

    // Contact link interactions with social proof
    const contactLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const type = this.href.startsWith('mailto:') ? 'email' : 'phone';
            const action = type === 'email' ? 'Opening email client...' : 'Initiating call...';
            const socialProof = type === 'email' ? 'Join 25+ clients who trust us!' : 'Available 24/7 for your success!';
            showNotification(`${action} ${socialProof}`, 'info');
        });
    });

    // Initialize all interactive components
    function initializeAllComponents() {
        initializeTestimonialCarousel();
        initializeVideoTestimonials();
        initializeClientLogoInteractions();
        initializeTrustSignals();
        initializeClientShowcases();
        
        // Initialize staggered animations for hero elements
        const heroElements = document.querySelectorAll('.hero .brand-logo, .hero .brand-tagline, .hero .hero__title, .hero .client-ticker');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fade-in-up');
            }, index * 300 + 500);
        });
    }

    // Performance optimization and final setup
    function initializeLazyFeatures() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            initializeAllComponents();
        } else {
            // Simplified initialization for users who prefer reduced motion
            initializeTestimonialCarousel();
            initializeClientLogoInteractions();
        }
    }

    // Initialize when page is fully loaded
    window.addEventListener('load', function() {
        initializeLazyFeatures();
        
        // Add loaded class for any final CSS transitions
        document.body.classList.add('loaded');
        
        // Show welcome notification after everything loads
        setTimeout(() => {
            showNotification('Welcome to Launch Quests! Explore our client success stories and see how we can help transform your business.', 'info');
        }, 1500);
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Escape key closes notifications
        if (e.key === 'Escape') {
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => hideNotification(notification));
        }
        
        // Arrow keys for testimonial carousel
        if (e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('.carousel-btn.prev');
            if (prevBtn && document.activeElement.closest('.quote-carousel')) {
                prevBtn.click();
                e.preventDefault();
            }
        }
        
        if (e.key === 'ArrowRight') {
            const nextBtn = document.querySelector('.carousel-btn.next');
            if (nextBtn && document.activeElement.closest('.quote-carousel')) {
                nextBtn.click();
                e.preventDefault();
            }
        }
    });

    // Utility functions for external access
    window.LaunchQuestsPortfolio = {
        showNotification: showNotification,
        animateCounters: animateCounters,
        updateSocialProof: updateSocialProofCounters,
        initializeCarousel: initializeTestimonialCarousel,
        scrollToSection: function(sectionId) {
            const section = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        },
        getPortfolioStats: function() {
            return {
                totalClients: '25+',
                projectsCompleted: '50+',
                industriesCovered: '10+',
                clientSatisfaction: '95%',
                clientRetention: '90%',
                avgProjectSuccess: '98%'
            };
        },
        getClientTestimonials: function() {
            return [
                {
                    client: 'IdentityInterio',
                    author: 'Priya Sharma',
                    role: 'Digital Marketing Manager',
                    rating: 5,
                    text: 'Launch Quests quickly identified and resolved our website performance issues. Their technical expertise and proactive maintenance approach has kept our site running smoothly.'
                },
                {
                    client: 'VendorBazaar', 
                    author: 'Rajesh Kumar',
                    role: 'Founder & CEO',
                    rating: 5,
                    text: 'Launch Quests built our entire e-commerce platform from the ground up. Their attention to detail and understanding of our business needs resulted in a robust, scalable marketplace.'
                },
                {
                    client: 'FiscalEye',
                    author: 'Dr. Ananya Gupta',
                    role: 'CTO',
                    rating: 5,
                    text: 'The Launch Quests team delivered an exceptional AI-powered platform that has revolutionized how we approach financial management. Their technical expertise in AI/ML is outstanding.'
                }
            ];
        }
    };

    // Enhanced console welcome message
    console.log(`
    🚀 Launch Quests Enhanced Portfolio with Social Proof
    
    ✨ Featured Success Stories:
    • IdentityInterio - 40% faster loading, 25% mobile traffic increase
    • VendorBazaar - 500+ products, 50+ vendors onboarded  
    • FiscalEye - 80% process automation, 60% time savings
    
    📊 Social Proof Highlights:
    • 25+ Happy Clients with proven results
    • 95% Client Satisfaction Rate (5-star ratings)
    • 90% Client Retention Rate
    • 50+ Successful Projects completed
    • 10+ Industries served across sectors
    
    🎯 Trust Signals:
    • 100% Satisfaction Guarantee
    • < 2 Hour Response Time  
    • Enterprise-Grade Security
    • 24/7 Technical Support
    • AWS, Google Cloud, Azure Certified
    
    📧 Contact: solutions@launchquests.com
    📱 Phone: +91 72041 48390
    
    Enhanced with interactive testimonials, client journey timeline,
    and comprehensive social proof elements for maximum impact.
    `);

    // Easter egg: Client success sequence
    let successSequence = [];
    const clientSequence = ['KeyC', 'KeyL', 'KeyI', 'KeyE', 'KeyN', 'KeyT']; // C-L-I-E-N-T
    
    document.addEventListener('keydown', function(e) {
        successSequence.push(e.code);
        
        if (successSequence.length > clientSequence.length) {
            successSequence.shift();
        }
        
        if (successSequence.length === clientSequence.length && 
            successSequence.every((code, index) => code === clientSequence[index])) {
            showNotification('🎉 Client success mode activated! Showcasing our proven track record.', 'success');
            
            // Trigger special animations
            animateCounters();
            animateSocialProofElements();
            
            console.table({
                'Client Success Rate': '100%',
                'Project Delivery': 'Always On Time',
                'Client Satisfaction': '⭐⭐⭐⭐⭐ (5/5)',
                'Technical Excellence': 'Industry Leading',
                'Support Quality': '24/7 Premium',
                'Innovation Level': 'Cutting Edge',
                'Business Impact': 'Transformational'
            });
            successSequence = [];
        }
    });

});

// Service Worker registration for enhanced performance
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('✅ Service Worker support detected - Ready for PWA features');
    });
}

// Performance monitoring and social proof metrics
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
                console.log(`⚡ Portfolio Performance Metrics:
                    Total Load Time: ${loadTime}ms
                    DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms
                    First Paint: ${Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0)}ms
                    
                    🎯 Performance Rating: ${loadTime < 2000 ? 'Excellent' : loadTime < 3000 ? 'Good' : 'Needs Optimization'}
                    📈 User Experience: Optimized for client showcase and social proof
                `);
            }
        }, 1000);
    });
}