/**
 * Portfolio Enhancement Script
 * Adds active navigation highlighting, smooth interactions, and animations
 */

(function() {
  'use strict';

  // Highlight active navigation link based on current page
  function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a:not(.socials a)');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // Enhance external links to open in new tab with security
  function setupExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
      const linkUrl = new URL(link.href);
      if (linkUrl.hostname !== window.location.hostname && !link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .stat-card, .testimonial-card, .skill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }

  // Add smooth scroll behavior for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Add parallax effect to header
  function setupParallax() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      header.style.transform = `translateY(${rate}px)`;
    });
  }

  // Animate stats numbers
  function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element) => {
      const target = element.textContent;
      const numericPart = parseInt(target.replace(/\D/g, ''));
      const suffix = target.replace(/[\d,]/g, '');
      
      if (isNaN(numericPart)) return;
      
      let current = 0;
      const increment = numericPart / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericPart) {
          element.textContent = numericPart + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + suffix;
        }
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    statNumbers.forEach(stat => observer.observe(stat));
  }

  // Initialize all enhancements when DOM is ready
  function init() {
    highlightActiveNav();
    setupExternalLinks();
    animateOnScroll();
    setupSmoothScroll();
    // setupParallax(); // Commented out as it can affect readability
    animateStats();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
