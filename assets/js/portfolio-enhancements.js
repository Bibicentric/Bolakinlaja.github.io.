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

  // Animate elements on scroll with stagger effect
  function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .stat-card, .testimonial-card, .photo-card, .project-card-hover, .project-card-enhanced');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Array.from(elements).indexOf(entry.target) * 100;
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
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
  
  // Add 3D tilt effect on project cards
  function setup3DTiltEffect() {
    const cards = document.querySelectorAll('.project-card-enhanced, .project-card-hover');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
  
  // Add scroll progress indicator
  function setupScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    // Add CSS for progress bar
    const style = document.createElement('style');
    style.textContent = `
      .scroll-progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.05);
        z-index: 9999;
      }
      .scroll-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
        width: 0%;
        transition: width 0.1s ease;
      }
    `;
    document.head.appendChild(style);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      const fill = document.querySelector('.scroll-progress-fill');
      if (fill) {
        fill.style.width = progress + '%';
      }
    });
  }
  
  // Add ripple effect on card click
  function setupRippleEffect() {
    const cards = document.querySelectorAll('.project-card-enhanced, .project-card-hover, .cta-button, button');
    
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          top: ${y}px;
          left: ${x}px;
          pointer-events: none;
          animation: ripple-animation 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-animation {
        from {
          transform: scale(0);
          opacity: 1;
        }
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Enhanced filter functionality for projects
  function setupProjectFilters() {
    const pills = document.querySelectorAll('.nav-pill');
    
    pills.forEach(pill => {
      pill.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active from all
        pills.forEach(p => p.classList.remove('active'));
        
        // Add active to clicked
        this.classList.add('active');
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 100);
      });
    });
    
    // Add CSS for active state
    const style = document.createElement('style');
    style.textContent = `
      .nav-pill {
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .nav-pill.active {
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      }
      .nav-pill:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Parallax effect for images
  function setupParallaxEffect() {
    const images = document.querySelectorAll('.project-image-container img, .hero img');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const rate = scrolled * 0.3;
          img.style.transform = `translateY(${rate * 0.1}px)`;
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
    setup3DTiltEffect();
    setupScrollProgress();
    setupRippleEffect();
    setupProjectFilters();
    setupParallaxEffect();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
