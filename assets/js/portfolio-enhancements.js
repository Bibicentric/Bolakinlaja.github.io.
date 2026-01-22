/**
 * Portfolio Enhancement Script
 * Adds active navigation highlighting, smooth interactions, animations, and visual enhancements
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
    const elements = document.querySelectorAll('.project-card, .stat-card, .testimonial-card, .photo-card, .project-card-hover');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 50);
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

  // Animated counter for statistics
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateValue = (element, start, end, duration) => {
      const range = end - start;
      const increment = range / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          element.textContent = formatNumber(end, element.dataset.suffix || '');
          clearInterval(timer);
        } else {
          element.textContent = formatNumber(Math.floor(current), element.dataset.suffix || '');
        }
      }, 16);
    };
    
    const formatNumber = (num, suffix) => {
      if (suffix.includes('K')) {
        return Math.floor(num) + 'K+';
      } else if (suffix.includes('$')) {
        return '$' + Math.floor(num) + 'K+';
      } else if (suffix.includes('+')) {
        return Math.floor(num) + '+';
      }
      return Math.floor(num);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const text = target.textContent;
          const numMatch = text.match(/\d+/);
          
          if (numMatch) {
            const endValue = parseInt(numMatch[0]);
            target.dataset.suffix = text;
            animateValue(target, 0, endValue, 2000);
          }
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  // Image lightbox functionality
  function setupLightbox() {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <img src="" alt="Enlarged image">
      </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Add click handlers to gallery images
    const imageSelectors = '.photo-card img, .gallery-item img, .about-hero-image img, .timeline-item-enhanced img, .project-image-container img';
    document.querySelectorAll(imageSelectors).forEach(img => {
      img.style.cursor = 'pointer';
      img.setAttribute('tabindex', '0');
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Enlarged image';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close lightbox
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
  
  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // Initialize all enhancements
  function init() {
    highlightActiveNav();
    setupExternalLinks();
    animateOnScroll();
    animateCounters();
    setupLightbox();
    setupSmoothScroll();
    
    console.log('Portfolio enhancements loaded successfully!');
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
