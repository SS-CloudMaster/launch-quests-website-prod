// ============================================
// LAUNCH QUESTS - FIXED APP.JS
// All Issues Fixed:
// 1. Services Dropdown Menu Fixed
// 2. Content Loading Fixed
// 3. Dark Mode Background Fix
// ============================================

let currentPage = 'home';

// ============================================
// FIXED: Page Navigation System
// ============================================
window.showPage = function showPage(pageName) {
  console.log('Loading page:', pageName);
  
  // Get all pages
  const allPages = document.querySelectorAll('.page-content');
  
  // Hide all pages with proper display
  allPages.forEach(page => {
    page.style.display = 'none';
    page.classList.add('hidden');
  });
  
  // Show specific page
  const pageElement = document.getElementById(`page-${pageName}`);
  
  if (pageElement) {
    pageElement.style.display = 'block';
    pageElement.classList.remove('hidden');
    currentPage = pageName;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
    
    // Trigger reveal animations
    setTimeout(() => {
      const revealElements = pageElement.querySelectorAll('.reveal');
      revealElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 50);
      });
    }, 100);
    
  } else {
    console.error('Page not found:', `page-${pageName}`);
  }
};

// ============================================
// Set up navigation links
// ============================================
function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (!link.hasAttribute('data-listener-attached')) {
      link.setAttribute('data-listener-attached', 'true');
      link.addEventListener('click', (e) => {
      const page = link.getAttribute('data-page');
// If nav-link has a dropdown (next sibling .dropdown-menu), let the dropdown handler manage clicks
      const hasDropdown = link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown-menu');

    if (page && !hasDropdown) {
        e.preventDefault();
        // don't call stopPropagation() here — allow dropdown handlers / document handlers to run
        window.showPage(page);
    } else if (!page && hasDropdown) {
        // Let the dropdown click handler take over (we already handle it in setupDropdowns)
        e.preventDefault();
    }
  });
    }
  });
}

window.setupNavigation = setupNavigation;

// ============================================
// FIXED: Services Dropdown Menu
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const servicesBtn = document.querySelector('.nav-dropdown-toggle');
  const navDropdown = servicesBtn?.closest('.nav-dropdown');
  
  if (servicesBtn && navDropdown) {
    servicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const menu = navDropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) {
        const menu = navDropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.style.display = 'none';
        }
      }
    });
    
    // Close when clicking a dropdown item
    const items = navDropdown.querySelectorAll('.dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const page = item.getAttribute('data-page');
        if (page) {
          window.showPage(page);
        }
        
        const menu = navDropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.style.display = 'none';
        }
      });
    });
  }
});

// ============================================
// FIXED: Dark Mode Toggle with Background
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const html = document.documentElement;

let currentTheme = 'light';

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    
    if (isDark) {
      // Dark Mode
      document.body.style.backgroundColor = '#0a0e27';
      document.body.style.color = '#ffffff';
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
      currentTheme = 'dark';
    } else {
      // Light Mode
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0a0e27';
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
      currentTheme = 'light';
    }
    
    // Update all page backgrounds
    document.querySelectorAll('.page-content').forEach(page => {
      if (isDark) {
        page.style.backgroundColor = '#0a0e27';
        page.style.color = '#ffffff';
      } else {
        page.style.backgroundColor = '#ffffff';
        page.style.color = '#0a0e27';
      }
    });
    
    console.log('Theme switched to:', isDark ? 'DARK' : 'LIGHT');
  });
}

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu?.classList.add('active');
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
  });
}

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
  });
});

// ============================================
// Sticky Navigation
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar?.classList.add('sticky');
  } else {
    navbar?.classList.remove('sticky');
  }
  lastScroll = currentScroll;
});

// ============================================
// Progress Bar
// ============================================
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  if (progressBar) {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }
});

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// Service Toggle (Accordion)
// ============================================
const serviceToggles = document.querySelectorAll('.service-toggle');

serviceToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const arrow = toggle.querySelector('svg');
    
    if (content) {
      // Close all other services
      document.querySelectorAll('.service-content').forEach(service => {
        if (service !== content && !service.classList.contains('hidden')) {
          service.classList.add('hidden');
          const otherToggle = document.querySelector(`[data-target="${service.id}"]`);
          if (otherToggle) {
            const otherArrow = otherToggle.querySelector('svg');
            if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Toggle current service
      content.classList.toggle('hidden');
      if (arrow) {
        if (content.classList.contains('hidden')) {
          arrow.style.transform = 'rotate(0deg)';
        } else {
          arrow.style.transform = 'rotate(180deg)';
        }
      }
    }
  });
});

// ============================================
// Testimonials Carousel
// ============================================
let currentTestimonial = 0;
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const totalTestimonials = 5;

function showTestimonial(index) {
  currentTestimonial = index;
  if (testimonialsTrack) {
    const offset = -index * 100;
    testimonialsTrack.style.transform = `translateX(${offset}%)`;
  }
  
  // Update dots
  testimonialDots.forEach((dot, i) => {
    if (i === index) {
      dot.style.backgroundColor = 'var(--accent)';
    } else {
      dot.style.backgroundColor = 'var(--text-secondary)';
    }
  });
}

if (testimonialDots.length > 0) {
  testimonialDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      showTestimonial(index);
    });
  });
  
  // Auto-scroll testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// ============================================
// Contact Form Submission with WhatsApp Integration
// ============================================
function setupContactForm(formId, messageId) {
  const contactForm = document.getElementById(formId);
  const formMessage = document.getElementById(messageId);
  
  if (contactForm && !contactForm.hasAttribute('data-listener-attached')) {
    contactForm.setAttribute('data-listener-attached', 'true');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name') || 'Not provided';
      const email = formData.get('email') || 'Not provided';
      const phone = formData.get('phone') || 'Not provided';
      const company = formData.get('company') || 'Not provided';
      const service = formData.get('service') || 'Not provided';
      const message = formData.get('message') || 'Not provided';
      
      // Get current timestamp
      const timestamp = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      
      // Format WhatsApp message
      const whatsappNumber = '917204148390'; // +91 72041 48390
      const whatsappMessage = `🆕 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏢 *Company:* ${company}
🎯 *Service Interested:* ${service}

💬 *Message:*
${message}

🕒 *Submitted:* ${timestamp}
📍 *Source:* Launch Quests Website

---_Please respond to this ASAP!_`;
      
      // URL encode the message
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Show success message
      if (formMessage) {
        formMessage.classList.remove('hidden');
        formMessage.innerHTML = `
          <div style="padding: 16px; background: #25D366; color: white; border-radius: 8px; margin-top: 16px; text-align: center;">
            <strong>✓ Almost Done!</strong><br>
            Opening WhatsApp now...<br>
            <small>Please click "Send" in WhatsApp to complete your submission.</small>
          </div>
        `;
        
        // Hide message after 8 seconds
        setTimeout(() => {
          formMessage.classList.add('hidden');
        }, 8000);
      }
      
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 500);
      
      // Clear form after WhatsApp opens
      setTimeout(() => {
        contactForm.reset();
      }, 1000);
      
      console.log('✓ Contact form submitted - WhatsApp opened');
    });
  }
}


// Setup forms on page load
setupContactForm('contact-form', 'form-message');
setupContactForm('newsletter-form', 'newsletter-message');
setupContactForm('contact-form-page', 'form-message-page');

// ============================================
// Newsletter Form
// ============================================
function setupNewsletterForm(formId) {
  const newsletterForm = document.getElementById(formId);
  
  if (newsletterForm && !newsletterForm.hasAttribute('data-listener-attached')) {
    newsletterForm.setAttribute('data-listener-attached', 'true');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      const successDiv = document.createElement('div');
      successDiv.style.cssText = 'padding: 12px; background: #4caf50; color: white; border-radius: 6px; margin-top: 12px; text-align: center;';
      successDiv.innerHTML = '✓ Subscribed successfully! Check your inbox.';
      
      newsletterForm.parentElement.appendChild(successDiv);
      newsletterForm.reset();
      
      setTimeout(() => {
        successDiv.remove();
      }, 5000);
      
      console.log('Newsletter subscription:', email);
    });
  }
}

setupNewsletterForm('newsletter-form');
setupNewsletterForm('newsletter-form-page');

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#!') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// ============================================
// Ripple Effect on Buttons
// ============================================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
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
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Case Study Modal
// ============================================
function openCaseStudyModal(caseId) {
  const modal = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-case-content');
  
  const caseStudies = {
    1: {
      title: 'Healthcare Clinic - Lead Generation Explosion',
      client: 'MediCare Plus Clinic',
      industry: 'Healthcare',
      stat: '+175% Patient Leads',
      challenge: 'Struggling to fill appointment slots despite excellent service.',
      solution: 'Targeted Facebook ads + WhatsApp automation + email sequences.',
      results: ['Patient inquiries: 15 → 41 per month', '175% lead growth', '85% appointment booking rate', '450% ROI'],
      timeline: '6 months',
      services: ['Digital Marketing', 'WhatsApp Automation', 'Email'],
      testimonial: '"Launch Quests transformed our patient acquisition." - Dr. Sharma'
    },
    2: {
      title: 'E-Commerce Store - Revenue Scaling',
      client: 'StyleHub E-Store',
      industry: 'E-Commerce',
      stat: '+₹45L Annual Revenue',
      challenge: 'Slow website with poor mobile experience.',
      solution: 'Website rebuild + conversion optimization + Google Shopping ads.',
      results: ['Revenue: ₹20L → ₹65L annually', '40% cart abandonment reduction', '300% mobile growth', '+25% AOV'],
      timeline: '8 months',
      services: ['Web Development', 'Digital Marketing', 'Paid Ads'],
      testimonial: '"Sales tripled. Best investment we\'ve made." - Priya, CEO'
    },
    3: {
      title: 'Real Estate - Deal Closure Boost',
      client: 'Prime Properties',
      industry: 'Real Estate',
      stat: '+38% Deal Closure Rate',
      challenge: 'Slow follow-up and poor lead organization.',
      solution: 'Custom CRM + lead scoring + automation.',
      results: ['Closure rate: 18% → 25%', '4hr to 15min response time', '200% tracking efficiency', '+35% productivity'],
      timeline: '4 months',
      services: ['CRM Solutions', 'Email Automation', 'Lead Scoring'],
      testimonial: '"Close deals 40% faster now." - Rajesh, Managing Director'
    },
    4: {
      title: 'SaaS Startup - User Growth',
      client: 'CloudScale SaaS',
      industry: 'SaaS',
      stat: '10x Customer Growth',
      challenge: 'Limited visibility and low conversion.',
      solution: 'SEO strategy + landing pages + retargeting.',
      results: ['Users: 100 → 1,000 in 12 months', '800% organic traffic', '1.5% → 6.2% conversion', '60% CAC reduction'],
      timeline: '12 months',
      services: ['Digital Marketing', 'Web Development', 'SEO'],
      testimonial: '"500+ qualified leads from SEO alone." - Amit, Founder'
    },
    5: {
      title: 'Consulting Firm - Retention Excellence',
      client: 'Strategic Insights',
      industry: 'Consulting',
      stat: '+92% Client Retention',
      challenge: 'High acquisition cost but poor retention.',
      solution: 'Customer success automation + engagement sequences.',
      results: ['Retention: 65% → 92%', '3x client lifetime value', '+45% referrals', '+60% upsells'],
      timeline: '8 months',
      services: ['CRM Solutions', 'Email Automation', 'Customer Success'],
      testimonial: '"Predictable recurring revenue now." - Neha, Partner'
    },
    6: {
      title: 'Digital Agency - Operations Automation',
      client: 'Creative Minds Agency',
      industry: 'Agency',
      stat: '50% Admin Time Saved',
      challenge: '30+ hours weekly on manual tasks.',
      solution: 'Automated dashboards + CI/CD + billing automation.',
      results: ['Admin time: 30 → 15 hours/week', '+40% delivery speed', '+2 client capacity', '+25% satisfaction'],
      timeline: '3 months',
      services: ['IT Infrastructure', 'Workflow Automation', 'DevOps'],
      testimonial: '"Freed up team for creative work." - Vikram, CEO'
    }
  };
  
  const study = caseStudies[caseId];
  if (!study) return;
  
  if (modalContent) {
    modalContent.innerHTML = `
      <div style="padding: 24px;">
        <h2>${study.title}</h2>
        <p><strong>Client:</strong> ${study.client} (${study.industry})</p>
        <p><strong>Key Metric:</strong> ${study.stat}</p>
        <p><strong>Challenge:</strong> ${study.challenge}</p>
        <p><strong>Solution:</strong> ${study.solution}</p>
        <p><strong>Timeline:</strong> ${study.timeline}</p>
        <p><strong>Testimonial:</strong> ${study.testimonial}</p>
        <button onclick="closeModal()" class="btn-primary" style="margin-top: 16px;">Close</button>
      </div>
    `;
  }
  
  if (modal) {
    modal.classList.remove('hidden');
  }
};

function closeModal() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('case-study-modal');
  if (e.target === modal) {
    closeModal();
  }
});

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupContactForm('contact-form', 'form-message');
  setupNewsletterForm('newsletter-form');
});

// ============================================
// Browser Back/Forward Button Support
// ============================================
(function() {
  // Store original showPage function
  const originalShowPage = window.showPage;
  
  // Override showPage to update browser history
  window.showPage = function(pageName) {
    // Call original showPage
    originalShowPage(pageName);
    
    // Update URL hash and browser history
    if (window.history && window.history.pushState) {
      window.history.pushState(
        { page: pageName }, 
        document.title, 
        `#${pageName}`
      );
    }
  };
  
  // Listen for browser back/forward button clicks
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
      // Navigate using the stored page from history
      originalShowPage(event.state.page);
    } else {
      // Fallback: check URL hash
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== '') {
        originalShowPage(hash);
      } else {
        originalShowPage('home');
      }
    }
  });
  
  // Handle initial page load from URL hash
  window.addEventListener('DOMContentLoaded', () => {
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && initialHash !== '') {
      originalShowPage(initialHash);
    }
  });
})();

console.log('✓ Launch Quests App.js Loaded Successfully');