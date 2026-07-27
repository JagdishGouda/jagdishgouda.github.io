document.addEventListener("DOMContentLoaded", () => {
  // 1. STICKY NAVBAR SCROLL EVENT
  const stickyNav = document.getElementById("sticky-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      stickyNav.classList.add("visible");
    } else {
      stickyNav.classList.remove("visible");
    }
  });

  // Populate Header Data
  if (typeof PROFILE_DATA !== "undefined") {
    document.getElementById("sidebar-name").textContent = PROFILE_DATA.name || "";
    document.getElementById("sidebar-title").textContent = PROFILE_DATA.title || "";
    document.getElementById("sidebar-affil").textContent = `${PROFILE_DATA.department || ""}, ${PROFILE_DATA.institution || ""}`;
    
    const emailLink = document.getElementById("email-link");
    if (emailLink) {
      emailLink.href = `mailto:${PROFILE_DATA.email}`;
      emailLink.textContent = PROFILE_DATA.email;
    }

    const phoneText = document.getElementById("phone-text");
    if (phoneText) phoneText.textContent = ` • ${PROFILE_DATA.phone}`;

    // Social Links
    const profilesContainer = document.getElementById("profile-links");
    if (profilesContainer && PROFILE_DATA.socials) {
      profilesContainer.innerHTML = "";
      PROFILE_DATA.socials.forEach(s => {
        const a = document.createElement("a");
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "link-pill";
        a.textContent = s.label;
        profilesContainer.appendChild(a);
      });
    }

    // Overview & Topics
    const narrativeEl = document.getElementById("narrative-about");
    if (narrativeEl) narrativeEl.textContent = PROFILE_DATA.about;

    const topicsContainer = document.getElementById("topics-container");
    if (topicsContainer && PROFILE_DATA.topics) {
      topicsContainer.innerHTML = "";
      PROFILE_DATA.topics.forEach(topic => {
        const tag = document.createElement("span");
        tag.className = "topic-tag";
        tag.textContent = topic;
        topicsContainer.appendChild(tag);
      });
    }

    // Timeline
    const timelineContainer = document.getElementById("timeline-container");
    if (timelineContainer && PROFILE_DATA.timeline) {
      timelineContainer.innerHTML = "";
      PROFILE_DATA.timeline.forEach(item => {
        const node = document.createElement("div");
        node.className = "timeline-node";
        node.innerHTML = `
          <div class="time-year">${item.year}</div>
          <div class="time-role">${item.role}</div>
          <div class="time-org">${item.org}</div>
          <div class="time-desc">${item.details}</div>
        `;
        timelineContainer.appendChild(node);
      });
    }
  }

  // Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial Render Runs
  renderResearchStream('all');
  renderDynamicStats();
});

// TOAST DISPLAY FUNCTION
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// 2. UNIFIED RESEARCH & CONSULTANCY STREAM RENDERER
function renderResearchStream(filter = "all") {
  const pubStream = document.getElementById("pub-stream");
  if (!pubStream || typeof PROFILE_DATA === "undefined") return;

  pubStream.innerHTML = "";

  const publications = PROFILE_DATA.publications || [];
  const consultancy = PROFILE_DATA.consultancy || [];

  // --- Render Publications ---
  if (filter === "all" || filter === "journal" || filter === "conference") {
    const filteredPubs = filter === "all" 
      ? publications 
      : publications.filter(p => p.type === filter);

    filteredPubs.forEach(pub => {
      const highlightedAuthors = pub.authors.replace(
        /Jagdish Gouda/g, 
        "<strong>Jagdish Gouda</strong>"
      );

      const entry = document.createElement("article");
      entry.className = "pub-entry";
      entry.innerHTML = `
        <a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="pub-title-link">${pub.title}</a>
        <div class="pub-authors">${highlightedAuthors}</div>
        <div class="pub-meta-line">
          <span><strong>${pub.venue}</strong> (${pub.year})</span>
          ${pub.impact ? `<span class="badge-if">${pub.impact}</span>` : ''}
          <div class="pub-actions">
            ${pub.abstract ? `<button class="btn-action btn-abstract" data-id="${pub.id}">+ Abstract</button>` : ''}
            ${pub.citation ? `<button class="btn-action btn-cite" data-citation="${pub.citation}">Cite</button>` : ''}
            ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="doi-chip">View Paper ↗</a>` : ''}
          </div>
        </div>
        ${pub.abstract ? `
          <div class="pub-abstract-drawer" id="drawer-${pub.id}">
            <p>${pub.abstract}</p>
          </div>
        ` : ''}
      `;
      pubStream.appendChild(entry);
    });
  }

  // --- Render Consultancy Projects ---
  if (filter === "all" || filter === "consultancy") {
    consultancy.forEach(item => {
      const entry = document.createElement("article");
      entry.className = "pub-entry consultancy-entry";
      entry.innerHTML = `
        <h3 class="pub-title-static">${item.title}</h3>
        <div class="pub-authors">
          <strong>Agency:</strong> ${item.agency} &bull; <span>Role: ${item.role}</span>
        </div>
        <div class="pub-meta-line">
          <div class="meta-tags-left">
            <span class="badge-consultancy">Consultancy Audit</span>
            <span class="badge-status">${item.status}</span>
          </div>
        </div>
      `;
      pubStream.appendChild(entry);
    });
  }

  // Attach Event Listeners for Abstract Accordion Toggles
  document.querySelectorAll(".btn-abstract").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const drawer = document.getElementById(`drawer-${id}`);
      if (drawer) {
        const isOpen = drawer.classList.contains("open");
        drawer.classList.toggle("open");
        e.target.textContent = isOpen ? "+ Abstract" : "– Abstract";
      }
    });
  });

  // Attach Event Listeners for Citation Clipboard Copy
  document.querySelectorAll(".btn-cite").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const citationStr = e.target.dataset.citation;
      navigator.clipboard.writeText(citationStr).then(() => {
        showToast("Citation copied to clipboard");
      }).catch(() => {
        showToast("Failed to copy citation");
      });
    });
  });
}

// Filter Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.getElementById("pub-filters");

  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      // Ensure we clicked a button inside #pub-filters
      const btn = e.target.closest("button");
      if (!btn) return;

      // 1. Update active class state
      const allButtons = filterContainer.querySelectorAll("button");
      allButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // 2. Get data-filter attribute
      const filterValue = btn.getAttribute("data-filter");
      
      // 3. Trigger stream re-render
      renderResearchStream(filterValue);
    });
  }
});

// 3. FUSE.JS & INTERACTIVE SEARCH
let fuseInstance = null;

if (typeof Fuse !== 'undefined' && typeof RESEARCH_QA !== 'undefined') {
  fuseInstance = new Fuse(RESEARCH_QA, {
    keys: [
      { name: 'question', weight: 0.5 },
      { name: 'tags', weight: 0.3 },
      { name: 'answer', weight: 0.2 }
    ],
    threshold: 0.8,
    distance: 100,
    minMatchCharLength: 2,
    ignoreLocation: true,
    useExtendedSearch: true
  });
}

function fillSearch(term) {
  const input = document.getElementById('qa-input');
  if (input) {
    input.value = term;
    input.dispatchEvent(new Event('input'));
    input.focus();
  }
}

function formatAnswerText(text) {
  return text
    .replace(/(\d+(\.\d+)?%)/g, '<strong>$1</strong>')
    .replace(/(CBR( values)?)/gi, '<strong>$1</strong>')
    .replace(/(LC2|FA|RCCP|MOM|CGT)/g, '<strong>$1</strong>');
}

document.getElementById('qa-input')?.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  const resultsContainer = document.getElementById('qa-results');
  const selectedResearchBlock = document.getElementById('selected-research-block');
  
  if (!query) {
    if (resultsContainer) resultsContainer.innerHTML = '';
    if (selectedResearchBlock) selectedResearchBlock.style.display = 'block';
    return;
  }

  if (selectedResearchBlock) selectedResearchBlock.style.display = 'none';

  let matches = [];
  if (fuseInstance) {
    matches = fuseInstance.search(query).map(res => res.item);
  } else if (typeof RESEARCH_QA !== 'undefined') {
    const q = query.toLowerCase();
    matches = RESEARCH_QA.filter(item =>
      item.question.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  if (!resultsContainer) return;

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-match-text">
        No findings matching "<strong>${e.target.value}</strong>". Try searching for keywords like <strong>LC2</strong>, <strong>Geocells</strong>, <strong>Coir</strong>, or <strong>CBR</strong>.
      </div>`;
    return;
  }

  resultsContainer.innerHTML = matches.map((item, index) => `
    <details class="qa-item" ${index === 0 ? 'open' : ''}>
      <summary class="qa-summary">
        <div class="qa-header-content">
          <span class="qa-category-pill">${item.category}</span>
          <h3 class="qa-question-title">${item.question}</h3>
        </div>
        <span class="qa-toggle-icon"></span>
      </summary>
      <div class="qa-body">
        <p>${formatAnswerText(item.answer)}</p>
        ${item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" class="qa-doi-link">Publication Details →</a>` : ''}
      </div>
    </details>
  `).join('');
});

// 4. STATS CALCULATOR
function renderDynamicStats() {
  if (typeof PROFILE_DATA === "undefined") {
    console.warn("PROFILE_DATA is not defined yet.");
    return;
  }

  // Publications Count
  const pubList = PROFILE_DATA.publications || [];
  const pubCountEl = document.getElementById("stat-publications-count");
  if (pubCountEl) pubCountEl.textContent = pubList.length;

  // Maximum Impact Factor
  const maxIfEl = document.getElementById("stat-max-if");
  if (maxIfEl) {
    const impactFactors = pubList.map((pub) => {
      if (!pub.impact) return 0;
      const match = pub.impact.match(/(\d+\.\d+|\d+)/);
      return match ? parseFloat(match[0]) : 0;
    });

    const maxIF = Math.max(0, ...impactFactors);
    maxIfEl.textContent = maxIF > 0 ? maxIF.toFixed(1) : "N/A";
  }

  // Consultancy Projects Count
  const consultancyList = PROFILE_DATA.consultancy || [];
  const consultancyCountEl = document.getElementById("stat-consultancy-count");
  if (consultancyCountEl) {
    consultancyCountEl.textContent = `${consultancyList.length}`;
  }
}