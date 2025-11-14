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
    const elements = document.querySelectorAll('.project-card, .stat-card, .testimonial-card, .skill, .what-card, .impact-card, .timeline-item, .approach-item');
    
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
    const statNumbers = document.querySelectorAll('.stat-number, .impact-number');
    
    const animateNumber = (element) => {
      const target = element.getAttribute('data-target') || element.textContent;
      const numericPart = parseInt(target.toString().replace(/\D/g, ''));
      const suffix = target.toString().replace(/[\d,]/g, '');
      
      if (isNaN(numericPart)) return;
      
      let current = 0;
      const increment = numericPart / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericPart) {
          element.textContent = numericPart.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString() + suffix;
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

  // Add interactive hover effects for project cards
  function addProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card, .feature-card, .module-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Add progress bar animations for impact metrics
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const progress = bar.getAttribute('data-progress');
          bar.style.width = progress + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      bar.style.width = '0%';
      bar.style.transition = 'width 1.5s ease-out';
      observer.observe(bar);
    });
  }

  // Add click-to-reveal sections
  function setupRevealSections() {
    const revealTriggers = document.querySelectorAll('[data-reveal-trigger]');
    
    revealTriggers.forEach(trigger => {
      trigger.style.cursor = 'pointer';
      trigger.addEventListener('click', function() {
        const targetId = this.getAttribute('data-reveal-trigger');
        const target = document.getElementById(targetId);
        
        if (target) {
          target.classList.toggle('revealed');
          const icon = this.querySelector('.reveal-icon');
          if (icon) {
            icon.style.transform = target.classList.contains('revealed') 
              ? 'rotate(180deg)' 
              : 'rotate(0deg)';
          }
        }
      });
    });
  }

  // Add floating animation to key elements
  function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
      element.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
    });
  }

  // Add interactive tooltips
  function setupTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', function(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'rgba(0, 0, 0, 0.9)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '0.5rem 1rem';
        tooltip.style.borderRadius = '0.5rem';
        tooltip.style.fontSize = '0.875rem';
        tooltip.style.zIndex = '1000';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.whiteSpace = 'nowrap';
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        
        this._tooltip = tooltip;
      });
      
      element.addEventListener('mouseleave', function() {
        if (this._tooltip) {
          this._tooltip.remove();
          this._tooltip = null;
        }
      });
    });
  }

  // Add particle effect for celebration
  function createParticleEffect(element) {
    const colors = ['#2563eb', '#8b5cf6', '#22c55e', '#f59e0b'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '8px';
      particle.style.height = '8px';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      
      const rect = element.getBoundingClientRect();
      particle.style.left = (rect.left + rect.width / 2) + 'px';
      particle.style.top = (rect.top + rect.height / 2) + 'px';
      
      document.body.appendChild(particle);
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 100 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
      ], {
        duration: 1000 + Math.random() * 500,
        easing: 'cubic-bezier(0, .9, .57, 1)'
      }).onfinish = () => particle.remove();
    }
  }

  // Add celebration effect to high-impact metrics
  function addCelebrationEffects() {
    const celebrationElements = document.querySelectorAll('[data-celebrate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => createParticleEffect(entry.target), 500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    celebrationElements.forEach(el => observer.observe(el));
  }

  // Add scroll to top button
  function addScrollToTopButton() {
    // Create button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Style the button
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--brand-navy), var(--brand-teal));
      color: white;
      border: none;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'flex';
        scrollBtn.style.animation = 'fadeInUp 0.3s ease';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.1)';
      this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
  }

  // Enhance navigation links with active section highlighting
  function enhanceNavigation() {
    const sections = document.querySelectorAll('[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + entry.target.id) {
              link.style.background = 'linear-gradient(135deg, var(--accent-gold), var(--brand-teal))';
              link.style.color = 'white';
              link.style.transform = 'scale(1.05)';
            } else if (link.style.background) {
              link.style.background = '';
              link.style.color = '';
              link.style.transform = '';
            }
          });
        }
      });
    }, { threshold: 0.3 });
    
    sections.forEach(section => observer.observe(section));
  }

  // Initialize all enhancements when DOM is ready
  function init() {
    highlightActiveNav();
    setupExternalLinks();
    animateOnScroll();
    setupSmoothScroll();
    // setupParallax(); // Commented out as it can affect readability
    animateStats();
    addProjectCardEffects();
    animateProgressBars();
    setupRevealSections();
    addFloatingAnimation();
    setupTooltips();
    addCelebrationEffects();
    addScrollToTopButton();
    enhanceNavigation();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
