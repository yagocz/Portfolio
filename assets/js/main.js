/* =========================================================
   Yago Caldas — Portfolio
   i18n (ES/EN), theme, rendering, micro-interactions.
   No dependencies.
   ========================================================= */
(() => {
  'use strict';

  const DATA = window.SITE_DATA;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const VISIBLE_BULLETS = 3;

  const ICON = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
  };

  /* ---------- State ---------- */
  const state = {
    lang: 'es',
    expanded: new Set()
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* noop */ } }
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const T = () => DATA[state.lang];
  const fmt = (str, vars) => str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    store.set('theme', theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0b0f17' : '#ffffff';
  }
  function initTheme() {
    const saved = store.get('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(saved || system);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!store.get('theme')) applyTheme(e.matches ? 'dark' : 'light');
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = (root = document) => $$('.reveal:not(.in)', root).forEach((el) => observer.observe(el));

  /* ---------- Renderers ---------- */
  function renderStatic() {
    const t = T();
    document.documentElement.lang = state.lang;
    document.title = t.title;
    const md = $('meta[name="description"]'); if (md) md.content = t.description;
    const og = $('meta[property="og:description"]'); if (og) og.content = t.description;

    $$('[data-i18n]').forEach((el) => {
      const path = el.getAttribute('data-i18n');
      const val = path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), t);
      if (val !== undefined) el.textContent = val;
    });
    $$('[data-i18n-aria]').forEach((el) => {
      const path = el.getAttribute('data-i18n-aria');
      const val = path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), t);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });
    $('.seg button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));

    // CV PDF: el del idioma actual, o el de ES como fallback
    const cvLink = $('#cv-link');
    const cv = DATA.meta.cv || {};
    const cvUrl = cv[state.lang] || cv.es;
    if (cvLink && cvUrl) {
      cvLink.href = cvUrl;
      cvLink.setAttribute('download', cvUrl.split('/').pop());
    }
  }

  function renderFacts() {
    $('#facts').innerHTML = T().facts.map((f) => `
      <div class="fact">
        <div class="fact-value">${esc(f.value)}</div>
        <div class="fact-label">${esc(f.label)}</div>
      </div>`).join('');
  }

  function renderProfile() {
    const p = T().profile;
    $('#profile-body').innerHTML = `
      <div class="prose"><p>${esc(p.body)}</p></div>
      <ul class="soft-list">${p.soft.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;
  }

  function renderExperience() {
    const t = T();
    $('#jobs').innerHTML = t.experience.jobs.map((job) => {
      const expanded = state.expanded.has(job.id);
      const hidden = Math.max(0, job.bullets.length - VISIBLE_BULLETS);
      const bullets = job.bullets.map((b, i) =>
        `<li${(!expanded && i >= VISIBLE_BULLETS) ? ' hidden' : ''}>${esc(b)}</li>`).join('');
      const more = hidden > 0 ? `
        <button class="job-more" data-action="toggle-job" data-job="${job.id}" aria-expanded="${expanded}">
          ${esc(expanded ? t.ui.showLess : (hidden === 1 ? t.ui.showMoreOne : fmt(t.ui.showMore, { n: hidden })))}${ICON.chevron}
        </button>` : '';
      const tags = (DATA.tech[job.id] || []).map((x) => `<span class="tag">${esc(x)}</span>`).join('');
      return `
        <article class="job reveal" id="job-${job.id}">
          <div class="job-when">
            <div>${esc(job.period)}</div>
            ${job.current ? `<div class="now">${esc(t.ui.current)}</div>` : ''}
          </div>
          <div>
            <h3 class="job-role">${esc(job.role)}</h3>
            <div class="job-company">${esc(job.company)}</div>
            <div class="job-type">${esc(job.type)}</div>
            <p class="job-summary">${esc(job.summary)}</p>
            <ul class="job-bullets">${bullets}</ul>
            ${more}
            <div class="tags">${tags}</div>
          </div>
        </article>`;
    }).join('');
  }

  function renderProjects() {
    const t = T();
    $('#projects').innerHTML = DATA.projectsMeta.map((p) => {
      const isCode = /github\.com/.test(p.url);
      return `
        <a class="card reveal" href="${esc(p.url)}" target="_blank" rel="noopener">
          <div class="card-head">
            <h3>${esc(p.title)}</h3>
            <span class="card-link">${esc(isCode ? t.ui.code : t.ui.visit)}${ICON.external}</span>
          </div>
          <p>${esc(t.projects.items[p.id] || '')}</p>
          <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
        </a>`;
    }).join('');
  }

  function renderSkills() {
    const t = T();
    $('#skills-list').innerHTML = DATA.skills.map((g) => `
      <div class="skill-row reveal">
        <div class="skill-name">${esc(t.skills.groups[g.id] || g.id)}</div>
        <div class="skill-items">${g.items.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
      </div>`).join('');
  }

  function renderEducation() {
    $('#education-list').innerHTML = T().education.items.map((e) => `
      <div class="edu reveal">
        <div class="edu-when">${esc(e.period)}</div>
        <div>
          <div class="edu-title">${esc(e.title)}</div>
          <div class="edu-inst">${esc(e.inst)}</div>
        </div>
      </div>`).join('');
  }

  function renderContact() {
    const m = DATA.meta;
    $('#contact-links').innerHTML = `
      <a class="contact-link reveal" href="mailto:${esc(m.email)}">${ICON.mail}<div><div class="l">Email</div><div class="v">${esc(m.email)}</div></div></a>
      <a class="contact-link reveal" href="${esc(m.phoneHref)}">${ICON.phone}<div><div class="l">${state.lang === 'es' ? 'Teléfono' : 'Phone'}</div><div class="v">${esc(m.phone)}</div></div></a>
      <a class="contact-link reveal" href="${esc(m.linkedin)}" target="_blank" rel="noopener">${ICON.linkedin}<div><div class="l">LinkedIn</div><div class="v">/in/yago-caldas</div></div></a>
      <a class="contact-link reveal" href="${esc(m.github)}" target="_blank" rel="noopener">${ICON.github}<div><div class="l">GitHub</div><div class="v">@yagocz</div></div></a>`;
  }

  function renderAll() {
    renderStatic();
    renderFacts();
    renderProfile();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    observeReveals();
  }

  function setLang(lang) {
    if (!DATA[lang]) return;
    state.lang = lang;
    store.set('lang', lang);
    renderAll();
    // anything already on screen should be visible immediately after a re-render
    requestAnimationFrame(() => {
      $$('.reveal').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
      });
    });
  }

  /* ---------- Interactions ---------- */
  function toggleJob(id) {
    if (state.expanded.has(id)) state.expanded.delete(id); else state.expanded.add(id);
    const wasOpen = !state.expanded.has(id);
    renderExperience();
    $$('#jobs .reveal').forEach((el) => el.classList.add('in'));
    if (wasOpen) {
      const card = $(`#job-${id}`);
      if (card) {
        const top = card.getBoundingClientRect().top + window.scrollY - 88;
        if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  async function copyEmail(btn) {
    const email = DATA.meta.email;
    const label = $('[data-i18n="ui.copyEmail"]', btn) || btn;
    try {
      await navigator.clipboard.writeText(email);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = email; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (err) { /* noop */ }
      ta.remove();
    }
    btn.classList.add('copied');
    label.textContent = T().ui.copied;
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.classList.remove('copied'); label.textContent = T().ui.copyEmail; }, 1800);
  }

  function initHeader() {
    const header = $('.header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // active nav link
    const links = $$('.nav a[href^="#"]');
    const sections = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  function initMenu() {
    const btn = $('.menu-btn');
    const nav = $('.mobile-nav');
    const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    $$('a', nav).forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  function initEvents() {
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-action]');
      if (!el) return;
      const action = el.dataset.action;
      if (action === 'toggle-job') toggleJob(el.dataset.job);
      else if (action === 'copy-email') copyEmail(el);
      else if (action === 'print') window.print();
      else if (action === 'theme') applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      else if (action === 'lang') setLang(el.dataset.lang);
    });

    // expand everything for print so the PDF is the full CV
    window.addEventListener('beforeprint', () => {
      T().experience.jobs.forEach((j) => state.expanded.add(j.id));
      renderExperience();
      $$('.reveal').forEach((el) => el.classList.add('in'));
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initTheme();
    const saved = store.get('lang');
    if (saved && DATA[saved]) state.lang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('en')) state.lang = 'en';
    $('#year').textContent = String(new Date().getFullYear());
    renderAll();
    initHeader();
    initMenu();
    initEvents();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
