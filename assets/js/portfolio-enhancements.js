/**
 * Portfolio Enhancement Script
 * Adds active navigation highlighting and smooth interactions
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

  // Initialize all enhancements when DOM is ready
  function init() {
    highlightActiveNav();
    setupExternalLinks();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
