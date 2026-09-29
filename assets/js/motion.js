// Lightweight scroll-reveal. No dependencies. Respects prefers-reduced-motion.
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll(
      'main section:not(.hero) .entry, main .card, main .numbers-grid .num-item, ' +
      'main .pull-quote, main .big-quote, main .track, main .gallery-grid figure'
    );
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 6, 5) * 0.06) + 's';
      io.observe(el);
    });
  });
})();
