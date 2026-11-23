/* Almost Surely — main.js */

(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  var toggle = document.querySelector('.nav-mobile-toggle');
  var menu = document.querySelector('.nav-mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      menu.setAttribute('aria-hidden', !open);
    });
  }

  /* --- Auto TOC generation --- */
  var tocLinks = document.getElementById('toc-links');
  var content = document.getElementById('post-content');
  if (tocLinks && content) {
    var headings = content.querySelectorAll('h2, h3');
    if (headings.length > 1) {
      var fragment = document.createDocumentFragment();
      headings.forEach(function (h, i) {
        if (!h.id) h.id = 'heading-' + i;
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        if (h.tagName === 'H3') a.classList.add('toc-h3');
        fragment.appendChild(a);
      });
      tocLinks.appendChild(fragment);
    } else {
      var toc = document.getElementById('post-toc');
      if (toc) toc.style.display = 'none';
    }
  }

  /* --- TOC active state on scroll --- */
  if (tocLinks && content) {
    var links = tocLinks.querySelectorAll('a');
    var headingEls = content.querySelectorAll('h2[id], h3[id]');
    if (links.length && headingEls.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = tocLinks.querySelector('a[href="#' + entry.target.id + '"]');
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0% -70% 0%' });
      headingEls.forEach(function (h) { observer.observe(h); });
    }
  }

  /* --- Mobile TOC toggle --- */
  var tocEl = document.getElementById('post-toc');
  if (tocEl && window.innerWidth <= 860) {
    var tocLabel = tocEl.querySelector('.toc-label');
    if (tocLabel) {
      tocLabel.style.cursor = 'pointer';
      tocLabel.addEventListener('click', function () {
        tocEl.classList.toggle('toc-open');
      });
    }
  }

  /* --- Writing page filter chips --- */
  var chips = document.querySelectorAll('.filter-chip');
  var postRows = document.querySelectorAll('.post-row[data-category]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var cat = chip.dataset.category;
      postRows.forEach(function (row) {
        if (!cat || cat === 'all') {
          row.style.display = '';
        } else {
          row.style.display = row.dataset.category === cat ? '' : 'none';
        }
      });
      /* Show/hide year groups that become empty */
      document.querySelectorAll('.year-group').forEach(function (group) {
        var visible = group.querySelectorAll('.post-row:not([style*="none"])');
        group.style.display = visible.length ? '' : 'none';
      });
    });
  });

})();
