// Projects Filter Functionality
(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeProjectsFilter();
  });

  function initializeProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) {
      return; // Exit if no filter buttons or project cards found
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleFilterClick(this, filterButtons, projectCards);
      });

      // Keyboard accessibility
      button.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFilterClick(this, filterButtons, projectCards);
        }
      });
    });

    // Initialize with all projects visible
    showAllProjects(projectCards);
  }

  function handleFilterClick(clickedButton, allButtons, projectCards) {
    const filterValue = clickedButton.getAttribute('data-filter');

    // Update active state on buttons
    allButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-pressed', 'true');

    // Update URL hash
    if (filterValue !== 'all') {
      history.replaceState(null, null, `#${filterValue}`);
    } else {
      history.replaceState(null, null, window.location.pathname);
    }

    // Filter projects
    filterProjects(filterValue, projectCards);

    // Announce to screen readers
    announceFilterChange(filterValue, projectCards);
  }

  function filterProjects(filterValue, projectCards) {
    let visibleCount = 0;
    let visibleIndex = 0;

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      
      // Show/hide based on filter
      if (filterValue === 'all' || category === filterValue) {
        card.classList.remove('hidden');
        // Stagger animation with consistent timing for visible cards only
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, visibleIndex * 50);
        visibleCount++;
        visibleIndex++;
      } else {
        card.classList.add('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
      }
    });

    // Handle empty state
    handleEmptyState(visibleCount);
  }

  function showAllProjects(projectCards) {
    projectCards.forEach(card => {
      card.classList.remove('hidden');
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }

  function handleEmptyState(visibleCount) {
    const container = document.querySelector('.projects-grid-container');
    let emptyMessage = container.querySelector('.no-projects-message');

    if (visibleCount === 0) {
      if (!emptyMessage) {
        emptyMessage = document.createElement('div');
        emptyMessage.className = 'no-projects-message';
        emptyMessage.innerHTML = `
          <i class="fas fa-folder-open"></i>
          <p>No projects found in this category.</p>
        `;
        container.appendChild(emptyMessage);
      }
    } else {
      if (emptyMessage) {
        emptyMessage.remove();
      }
    }
  }

  function announceFilterChange(filterValue, projectCards) {
    const visibleCards = Array.from(projectCards).filter(card => !card.classList.contains('hidden'));
    const count = visibleCards.length;
    
    const filterNames = {
      'all': 'All Projects',
      'workforce': 'Workforce & Talent Pipelines',
      'research': 'Research, Insight & Knowledge Creation',
      'innovation': 'Innovation, Technology & Infrastructure',
      'community': 'Community, Partnerships & Industry Engagement'
    };

    const message = `Showing ${count} project${count !== 1 ? 's' : ''} in ${filterNames[filterValue] || filterValue}`;
    
    // Create or update live region for screen readers
    let liveRegion = document.getElementById('filter-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'filter-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
  }

  // Optional: Add URL hash support for deep linking
  function initializeHashSupport() {
    const hash = window.location.hash.substring(1);
    const validFilters = ['all', 'workforce', 'research', 'innovation', 'community'];
    
    if (validFilters.includes(hash)) {
      const targetButton = document.querySelector(`.filter-pill[data-filter="${hash}"]`);
      if (targetButton) {
        targetButton.click();
      }
    }
  }

  // Initialize hash support after DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeHashSupport();
  });

})();
