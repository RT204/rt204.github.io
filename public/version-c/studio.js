(() => {
  'use strict';
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const safeText = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const savedMotion = () => { try { return localStorage.getItem('version-c-motion'); } catch { return null; } };
  let motion = !reducedMotion.matches && savedMotion() !== 'off';
  function updateMotion() {
    root.dataset.motion = motion ? 'on' : 'off';
    document.querySelectorAll('.motion-toggle').forEach(button => {
      button.disabled = reducedMotion.matches;
      button.setAttribute('aria-pressed', String(motion));
      button.setAttribute('aria-label', reducedMotion.matches ? 'Reduced motion enabled by device preference' : `${motion ? 'Pause' : 'Play'} decorative animation`);
      button.textContent = motion ? 'Ⅱ' : '▷';
      button.title = button.getAttribute('aria-label');
    });
  }
  updateMotion();
  document.querySelectorAll('.motion-toggle').forEach(button => button.addEventListener('click', () => {
    motion = !motion;
    try { localStorage.setItem('version-c-motion', motion ? 'on' : 'off'); } catch { /* Storage is optional. */ }
    updateMotion();
  }));
  reducedMotion.addEventListener('change', () => {
    motion = !reducedMotion.matches && savedMotion() !== 'off';
    updateMotion();
  });

  function initializeFilters() {
    const buttons = [...document.querySelectorAll('[data-filter]')];
    const cards = [...document.querySelectorAll('.project-card[data-category]')];
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(other => {
        other.classList.toggle('active', button === other);
        other.setAttribute('aria-pressed', String(button === other));
      });
      let count = 0;
      cards.forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) {
          count += 1;
          card.classList.add('is-visible');
        }
      });
      const status = document.querySelector('#filter-status');
      if (status) status.textContent = `Showing ${count} ${button.dataset.filter === 'all' ? '' : `${button.dataset.filter} `}project${count === 1 ? '' : 's'}.`;
    }));
  }

  const projects = window.engineeringProjects;
  if (document.body.dataset.page === 'projects' && projects) {
    const container = document.querySelector('#case-study');
    const keys = Object.keys(projects);
    const key = new URLSearchParams(window.location.search).get('project');
    if (!key) {
      container.innerHTML = `<div class="library-heading"><p class="eyebrow">SELECTED WORK / 01 — 04</p><h1>Engineering projects.</h1><p>Design requirements, CAD, fabrication, and results from my internships, robotics team, and personal projects.</p></div><div class="work-grid">${keys.map(id => {
        const project = projects[id];
        return `<a class="project-card" href="?project=${id}"><div class="project-shot shot-${id === 'robots' ? 'robot' : id}"><img src="../assets/${project.hero}" alt="${safeText(project.heroAlt)}"><span class="shot-index">${project.number} / ${safeText(project.company)}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="project-meta"><span>${safeText(project.company)}</span><span>${safeText(project.date)}</span></div><h3>${safeText(project.name)}</h3><span class="card-role">${safeText(project.role)}</span><p>${safeText(project.cardSummary)}</p><ul class="card-details">${project.cardDetails.map(detail => `<li>${safeText(detail)}</li>`).join('')}</ul><div class="project-tags">${project.tools.slice(0,3).map(tool => `<span>${safeText(tool)}</span>`).join('')}</div><span class="card-read">View project <span aria-hidden="true">↗</span></span></a>`;
      }).join('')}</div>`;
    } else if (!Object.hasOwn(projects, key)) {
      document.title = 'Project not found — Ray Toma';
      container.innerHTML = '<div class="library-heading"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Project not found.</h1><p><a class="inline-link" href="./">Browse all engineering projects ↗</a></p></div>';
    } else {
      const project = projects[key];
      const next = keys[(keys.indexOf(key) + 1) % keys.length];
      const photo = ['baler', 'sdvx'].includes(key);
      document.title = `${project.name} — Ray Toma`;
      document.querySelector('meta[name="description"]').content = project.deck;
      container.innerHTML = `
        <div class="case-heading"><div><p class="eyebrow">CASE STUDY ${project.number} / ${safeText(project.category).toUpperCase()}</p><h1>${safeText(project.title)}</h1></div><p class="case-deck">${safeText(project.deck)}</p></div>
        <dl class="case-specs"><div><dt>CONTEXT</dt><dd>${safeText(project.company)}</dd></div><div><dt>MY ROLE</dt><dd>${safeText(project.role)}</dd></div><div><dt>WHEN</dt><dd>${safeText(project.date)}</dd></div><div><dt>WHERE</dt><dd>${safeText(project.location)}</dd></div></dl>
        <div class="case-hero"><div class="case-hero-image${photo ? ' is-photo' : ''}"><img${project.rotate ? ' class="rotate-image"' : ''} src="../assets/${project.hero}" alt="${safeText(project.heroAlt)}"></div><aside class="hero-measure"><p class="eyebrow">THE WORK, AT A GLANCE</p><div><strong>${safeText(project.metric)}</strong><p>${safeText(project.metricLabel)}</p></div><div class="project-tags">${project.tools.map(tool => `<span>${safeText(tool)}</span>`).join('')}</div></aside></div>
        <div class="case-narrative"><section><p class="eyebrow">01 / OBJECTIVE</p><h2>Design requirements</h2><p>${safeText(project.summary)}</p></section><section><p class="eyebrow">02 / MY CONTRIBUTION</p><h2>My contribution</h2><p>${safeText(project.contribution)}</p></section></div>
        <section class="case-process" aria-label="Design and fabrication process"><p class="eyebrow">03 / APPROACH</p><div class="process-grid">${project.process.map(([title, description], index) => `<article class="process-step"><span>0${index + 1}</span><h3>${safeText(title)}</h3><p>${safeText(description)}</p></article>`).join('')}</div></section>
        <div class="case-gallery">${project.gallery.map((image, index) => `<figure><button type="button" data-zoom="${index}"${photo ? ' class="is-photo"' : ''} aria-label="Expand image: ${safeText(image.alt)}"><img${image.rotate ? ' class="rotate-image"' : ''} src="../assets/${image.file}" alt="${safeText(image.alt)}" loading="lazy"><span class="image-expand" aria-hidden="true">⤢</span></button><figcaption>${safeText(image.caption)}</figcaption></figure>`).join('')}</div>
        <section class="case-results"><p class="eyebrow">04 / RESULT</p><h2>Results</h2><p>${safeText(project.result)}</p><div class="result-metrics">${project.evidence.map(([value, label]) => `<div><strong>${safeText(value)}</strong><span>${safeText(label)}</span></div>`).join('')}</div></section>
        <a class="case-next" href="?project=${next}"><div><p class="eyebrow">NEXT CASE STUDY / ${projects[next].number}</p><h3>${safeText(projects[next].name)}</h3></div><span class="next-arrow" aria-hidden="true">↗</span></a>`;

      const dialog = document.querySelector('#image-dialog');
      document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
        const image = project.gallery[Number(button.dataset.zoom)];
        const target = dialog.querySelector('img');
        target.src = `../assets/${image.file}`;
        target.alt = image.alt;
        target.classList.toggle('rotate-image', !!image.rotate);
        dialog.querySelector('p').textContent = image.caption;
        dialog.showModal();
        document.body.classList.add('dialog-open');
      }));
      dialog.querySelector('.image-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
      dialog.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      });
    }
  }
  initializeFilters();
  if ('IntersectionObserver' in window) {
    root.classList.add('js');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .06 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    const navigation = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
    if (navigation.length) {
      const sections = [...document.querySelectorAll('main > section[id]')];
      let navFrame = 0;
      function updateActiveNavigation() {
        const reference = window.scrollY + Math.min(window.innerHeight * .35, 240);
        const current = sections.reduce((active, section) => section.offsetTop <= reference ? section.id : active, 'work');
        navigation.forEach(link => {
          const active = link.hash === `#${current}`;
          link.classList.toggle('nav-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
        navFrame = 0;
      }
      window.addEventListener('scroll', () => {
        if (!navFrame) navFrame = requestAnimationFrame(updateActiveNavigation);
      }, { passive: true });
      updateActiveNavigation();
    }
  }
  document.querySelector('#print-resume')?.addEventListener('click', () => window.print());
})();
