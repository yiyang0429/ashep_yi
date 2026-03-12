(function () {
  const data = window.SITE_DATA || {};

  const memberCategoryLabels = {
    undergraduate: 'Undergraduate',
    masters: "Master's",
    doctoral: 'PhD',
    postdocs: 'Postdocs',
    alumni: 'Alumni'
  };

  const PROFILE_PLACEHOLDER = 'assets/img/profile-placeholder.svg';
  const MEMBER_PLACEHOLDER = 'assets/img/member-placeholder.svg';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined && value !== null) {
      element.textContent = value;
    }
  }

  function isRealUrl(url) {
    return !!url && url !== '#';
  }

  function createLink(link) {
    if (!link) return null;
    const a = document.createElement('a');
    a.className = 'chip-link';
    a.textContent = link.label || 'Link';
    a.href = link.url || '#';
    if (isRealUrl(link.url) && !link.url.startsWith('mailto:')) {
      a.target = '_blank';
      a.rel = 'noreferrer';
    }
    return a;
  }

  function createImage(src, alt, className, fallbackSrc) {
    const img = document.createElement('img');
    img.className = className;
    img.loading = 'lazy';
    img.alt = alt || '';
    img.src = src || fallbackSrc;
    img.addEventListener('error', () => {
      if (!img.src.endsWith(fallbackSrc)) {
        img.src = fallbackSrc;
      }
    });
    return img;
  }

  function formatDate(value) {
    if (!value) return '-';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  function sumMembers(members) {
    if (!members) return 0;
    return Object.values(members).reduce((total, items) => total + (Array.isArray(items) ? items.length : 0), 0);
  }

  function populateMeta() {
    document.title = data.meta?.siteTitle || document.title;
    setText('site-title', data.meta?.siteTitle || 'Research Group');
    setText('site-subtitle', data.meta?.siteSubtitle || 'Academia Sinica');
    setText('footer-text', data.meta?.footerText || 'Editable static site template.');
  }

  function iconSvg(kind) {
    if (kind === 'iop') {
      return `
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="grad-iop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#7dd3fc"></stop>
              <stop offset="100%" stop-color="#38bdf8"></stop>
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="26" fill="none" stroke="url(#grad-iop)" stroke-width="3"></circle>
          <circle cx="32" cy="32" r="11" fill="none" stroke="#f8fafc" stroke-width="2.4"></circle>
          <circle cx="32" cy="32" r="3.5" fill="#f59e0b"></circle>
          <path d="M15 32h34M32 15v34" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" opacity="0.65"></path>
        </svg>`;
    }
    if (kind === 'ncku') {
      return `
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="grad-ncku" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fde68a"></stop>
              <stop offset="100%" stop-color="#f59e0b"></stop>
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="40" height="40" rx="12" fill="none" stroke="url(#grad-ncku)" stroke-width="3"></rect>
          <path d="M20 44V20l24 24V20" fill="none" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`;
    }
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="22" fill="none" stroke="#9db0d1" stroke-dasharray="5 5" stroke-width="3"></circle>
        <path d="M32 20v24M20 32h24" stroke="#e5eefc" stroke-width="3" stroke-linecap="round"></path>
      </svg>`;
  }

  function populateHomeAffiliations() {
    const container = $('#home-affiliations');
    if (!container) return;
    container.innerHTML = '';

    (data.homeAffiliations || []).forEach((item) => {
      const wrapper = document.createElement(item.placeholder ? 'div' : 'a');
      wrapper.className = item.placeholder ? 'affiliation-card affiliation-placeholder' : 'affiliation-card affiliation-link';
      if (!item.placeholder) {
        wrapper.href = item.url || '#';
        if (isRealUrl(item.url)) {
          wrapper.target = '_blank';
          wrapper.rel = 'noreferrer';
        }
      }

      const icon = document.createElement('div');
      icon.className = 'affiliation-icon';
      icon.innerHTML = iconSvg(item.icon);

      const text = document.createElement('div');
      text.className = 'affiliation-text';
      const title = document.createElement('strong');
      title.textContent = item.label || 'Affiliation';
      const subtitle = document.createElement('span');
      subtitle.textContent = item.subtitle || '';
      text.appendChild(title);
      text.appendChild(subtitle);

      wrapper.appendChild(icon);
      wrapper.appendChild(text);
      container.appendChild(wrapper);
    });
  }

  function populateHero() {
    setText('hero-eyebrow', data.hero?.eyebrow || 'High-Energy Physics Group');
    setText('hero-title', data.hero?.title || 'Exploring fundamental particles.');
    setText('hero-text', data.hero?.text || 'Responsive research group site.');
    setText('hero-primary-link', data.hero?.primaryLabel || 'Browse Publications');
    setText('hero-secondary-link', data.hero?.secondaryLabel || 'Meet the Group');

    const latestPaper = Array.isArray(data.latestNews) ? data.latestNews[0] : null;
    setText('latest-paper-date', formatDate(latestPaper?.date));
    setText('latest-paper-title', latestPaper?.title || 'Add your newest paper in assets/js/content.js');
    setText('latest-paper-summary', latestPaper?.summary || 'Add a short summary of the latest paper, preprint, or collaboration result.');

    const latestPaperLinks = $('#latest-paper-links');
    latestPaperLinks.innerHTML = '';
    (latestPaper?.links || []).forEach((link) => {
      latestPaperLinks.appendChild(createLink(link));
    });

    populateHomeAffiliations();

    setText('stat-experiments', String((data.experiments || []).length));
    setText('stat-members', String(sumMembers(data.members)));
    setText('stat-publications', String((data.publications || []).length));
    setText('stat-map-points', String((data.mapLocations || []).length));
  }

  function populateLabIntro() {
    const intro = $('#lab-intro');
    const highlightList = $('#lab-highlights');

    if (intro) {
      intro.innerHTML = '';
      (data.labIntro?.paragraphs || []).forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        intro.appendChild(p);
      });
    }

    setText('lab-highlights-title', data.labIntro?.highlightsTitle || 'Highlights');
    if (highlightList) {
      highlightList.innerHTML = '';
      (data.labIntro?.highlights || []).forEach((item) => {
        const card = document.createElement('article');
        card.className = 'lab-highlight-item';
        const label = document.createElement('strong');
        label.textContent = item.label || 'Highlight';
        const value = document.createElement('p');
        value.textContent = item.value || '';
        card.appendChild(label);
        card.appendChild(value);
        highlightList.appendChild(card);
      });
    }
  }

  function populateProfile() {
    setText('profile-name', data.profile?.name || 'Yi Yang');
    setText('profile-title', data.profile?.title || 'Research Fellow');
    setText('profile-affiliation', data.profile?.affiliation || 'Academia Sinica');

    const photoContainer = $('#profile-photo');
    if (photoContainer) {
      photoContainer.src = data.profile?.photo || PROFILE_PLACEHOLDER;
      photoContainer.alt = data.profile?.photoAlt || `${data.profile?.name || 'Profile'} portrait`;
      photoContainer.addEventListener('error', () => {
        photoContainer.src = PROFILE_PLACEHOLDER;
      });
    }

    const details = $('#profile-details');
    details.innerHTML = '';
    (data.profile?.details || []).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'detail-row';
      const label = document.createElement('span');
      label.textContent = item.label || '';
      const value = document.createElement('strong');
      value.textContent = item.value || '';
      row.appendChild(label);
      row.appendChild(value);
      details.appendChild(row);
    });

    const bio = $('#profile-bio');
    bio.innerHTML = '';
    (data.profile?.bio || []).forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      bio.appendChild(p);
    });

    const keywords = $('#profile-keywords');
    keywords.innerHTML = '';
    (data.profile?.keywords || []).forEach((keyword) => {
      const span = document.createElement('span');
      span.className = 'keyword';
      span.textContent = keyword;
      keywords.appendChild(span);
    });
  }

  function populateExperiments() {
    const grid = $('#experiments-grid');
    grid.innerHTML = '';

    (data.experiments || []).forEach((experiment) => {
      const card = document.createElement('article');
      card.className = 'info-card';
      card.innerHTML = `
        <div class="card-top">
          <span class="status-pill">${experiment.status || 'Active'}</span>
          <h3>${experiment.name || 'Experiment'}</h3>
          <p class="card-subtitle">${experiment.subtitle || ''}</p>
        </div>
        <p>${experiment.description || ''}</p>
        <div class="card-divider"></div>
        <p><strong>Group role:</strong> ${experiment.role || ''}</p>
      `;
      grid.appendChild(card);
    });
  }

  function buildPaperList(papers) {
    if (!Array.isArray(papers) || !papers.length) return null;

    const block = document.createElement('div');
    block.className = 'member-papers-block';

    const title = document.createElement('p');
    title.className = 'member-papers-title';
    title.textContent = 'Papers';
    block.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'member-papers';

    papers.forEach((paper) => {
      const item = document.createElement('li');
      const hasLink = isRealUrl(paper.url);
      const node = document.createElement(hasLink ? 'a' : 'span');
      node.className = hasLink ? 'member-paper-link' : 'member-paper-text';
      node.textContent = paper.title || 'Paper title';
      if (hasLink) {
        node.href = paper.url;
        node.target = '_blank';
        node.rel = 'noreferrer';
      }
      item.appendChild(node);
      list.appendChild(item);
    });

    block.appendChild(list);
    return block;
  }

  function buildMemberCard(person, category) {
    const card = document.createElement('article');
    card.className = 'member-card';

    const photoWrap = document.createElement('div');
    photoWrap.className = 'member-photo-wrap';
    const photo = createImage(
      person.photo || MEMBER_PLACEHOLDER,
      person.photoAlt || `${person.name || 'Member'} portrait`,
      'member-photo',
      MEMBER_PLACEHOLDER
    );
    photoWrap.appendChild(photo);

    const body = document.createElement('div');
    body.className = 'member-card-body';

    const name = document.createElement('h3');
    name.textContent = person.name || 'Name';

    const topic = document.createElement('p');
    topic.className = 'member-topic';
    topic.textContent = person.topic || '';

    const meta = document.createElement('div');
    meta.className = 'member-meta';

    const years = document.createElement('span');
    years.textContent = person.years || '';
    const stage = document.createElement('span');
    stage.textContent = memberCategoryLabels[category];
    meta.appendChild(years);
    meta.appendChild(stage);

    body.appendChild(name);
    body.appendChild(topic);
    body.appendChild(meta);

    if (person.note) {
      const note = document.createElement('p');
      note.className = 'member-note';
      note.textContent = person.note;
      body.appendChild(note);
    }

    const paperList = buildPaperList(person.papers);
    if (paperList) {
      body.appendChild(paperList);
    }

    card.appendChild(photoWrap);
    card.appendChild(body);
    return card;
  }

  function populateMembers() {
    const tabs = $('#member-tabs');
    const list = $('#member-list');
    tabs.innerHTML = '';
    list.innerHTML = '';

    const categories = Object.keys(memberCategoryLabels).filter((key) => Array.isArray(data.members?.[key]));
    let activeCategory = categories.find((key) => (data.members?.[key] || []).length > 0) || categories[0];

    function renderMembers(category) {
      activeCategory = category;
      $$('.member-tab', tabs).forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.category === category);
      });

      list.innerHTML = '';
      const items = data.members?.[category] || [];

      if (!items.length) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'No entries yet.';
        list.appendChild(empty);
        return;
      }

      items.forEach((person) => {
        list.appendChild(buildMemberCard(person, category));
      });
    }

    categories.forEach((category) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'member-tab';
      button.dataset.category = category;
      button.textContent = `${memberCategoryLabels[category]} (${(data.members?.[category] || []).length})`;
      button.addEventListener('click', () => renderMembers(category));
      tabs.appendChild(button);
    });

    if (activeCategory) {
      renderMembers(activeCategory);
    }
  }

  function publicationMatches(publication, query) {
    if (!query) return true;
    const target = [
      publication.title,
      publication.authors,
      publication.venue,
      publication.summary,
      ...(publication.keywords || [])
    ].join(' ').toLowerCase();
    return target.includes(query.toLowerCase());
  }

  function renderPublications(query = '') {
    const publicationList = $('#publication-list');
    publicationList.innerHTML = '';

    const filtered = (data.publications || []).filter((publication) => publicationMatches(publication, query));
    setText('publication-count-note', `${filtered.length} publication${filtered.length === 1 ? '' : 's'}`);

    if (!filtered.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = 'No publications match your search.';
      publicationList.appendChild(empty);
      return;
    }

    const byYear = filtered.reduce((groups, publication) => {
      const year = publication.year || 'Other';
      groups[year] = groups[year] || [];
      groups[year].push(publication);
      return groups;
    }, {});

    Object.keys(byYear)
      .sort((a, b) => Number(b) - Number(a))
      .forEach((year) => {
        const section = document.createElement('section');
        section.className = 'publication-year';

        const heading = document.createElement('h3');
        heading.textContent = year;
        section.appendChild(heading);

        byYear[year].forEach((publication) => {
          const article = document.createElement('article');
          article.className = 'publication-item';

          const keywordHtml = (publication.keywords || [])
            .map((keyword) => `<span class="keyword">${keyword}</span>`)
            .join('');

          article.innerHTML = `
            <h4>${publication.title || ''}</h4>
            <p class="publication-authors">${publication.authors || ''}</p>
            <p class="publication-venue">${publication.venue || ''}</p>
            ${publication.summary ? `<p>${publication.summary}</p>` : ''}
            <div class="publication-meta">
              <div class="keyword-list">${keywordHtml}</div>
              <div class="panel-links"></div>
            </div>
          `;

          const linkContainer = article.querySelector('.panel-links');
          (publication.links || []).forEach((link) => {
            linkContainer.appendChild(createLink(link));
          });

          section.appendChild(article);
        });

        publicationList.appendChild(section);
      });
  }

  function populatePublications() {
    const search = $('#publication-search');
    renderPublications('');
    search.addEventListener('input', (event) => {
      renderPublications(event.target.value.trim());
    });
  }

  function populateContact() {
    setText('contact-group-title', data.contact?.groupTitle || '[Group Name]');
    setText('contact-address', data.contact?.address || '[Institute / Address]');
    const links = $('#contact-links');
    links.innerHTML = '';
    (data.contact?.links || []).forEach((link) => {
      links.appendChild(createLink(link));
    });
  }

  function populateMapSidebar() {
    const container = $('#map-location-list');
    container.innerHTML = '';
    (data.mapLocations || []).forEach((entry) => {
      const item = document.createElement('article');
      item.className = 'location-item';
      item.innerHTML = `
        <h4>${entry.name}</h4>
        <p>${entry.role || ''}</p>
        <p><strong>${entry.place || ''}</strong></p>
        <p>${entry.note || ''}</p>
      `;
      container.appendChild(item);
    });
  }

  function populateMap() {
    populateMapSidebar();

    const mapContainer = $('#alumni-map');
    if (!window.L || !mapContainer) {
      mapContainer.innerHTML = '<p class="empty-state">Map library not loaded. You can still show the location list on the right.</p>';
      return;
    }

    const map = L.map('alumni-map', {
      scrollWheelZoom: false,
      minZoom: 1.5,
      worldCopyJump: true
    }).setView([20, 10], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const bounds = [];

    (data.mapLocations || []).forEach((entry) => {
      if (typeof entry.lat !== 'number' || typeof entry.lng !== 'number') return;
      const isCurrent = entry.type === 'current';
      const marker = L.circleMarker([entry.lat, entry.lng], {
        radius: isCurrent ? 8 : 7,
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
        color: isCurrent ? '#7dd3fc' : '#f59e0b',
        fillColor: isCurrent ? '#7dd3fc' : '#f59e0b'
      }).addTo(map);

      marker.bindPopup(`
        <strong>${entry.name}</strong><br>
        ${entry.role || ''}<br>
        ${entry.place || ''}<br>
        ${entry.note || ''}
      `);

      bounds.push([entry.lat, entry.lng]);
    });

    if (bounds.length) {
      map.fitBounds(bounds, { padding: [30, 30] });
      if (bounds.length === 1) {
        map.setZoom(4);
      }
    }
  }

  function setupNav() {
    const toggle = $('#nav-toggle');
    const nav = $('#site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    $$('#site-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function init() {
    populateMeta();
    populateHero();
    populateLabIntro();
    populateProfile();
    populateExperiments();
    populateMembers();
    populatePublications();
    populateContact();
    populateMap();
    setupNav();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
