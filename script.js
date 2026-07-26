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
  document.getElementById("sidebar-name").textContent = PROFILE_DATA.name;
  document.getElementById("sidebar-title").textContent = PROFILE_DATA.title;
  document.getElementById("sidebar-affil").textContent = `${PROFILE_DATA.department}, ${PROFILE_DATA.institution}`;
  
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
      a.textContent = s.label;
      profilesContainer.appendChild(a);
    });
  }

  // Overview & Topics
  document.getElementById("narrative-about").textContent = PROFILE_DATA.about;
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

  // 2. PUBLICATIONS, ABSTRACT ACCORDIONS, & CITATION TOOL
  const pubStream = document.getElementById("pub-stream");

  function renderPublications(filter = "all") {
    if (!pubStream || !PROFILE_DATA.publications) return;
    pubStream.innerHTML = "";

    const filtered = filter === "all" 
      ? PROFILE_DATA.publications 
      : PROFILE_DATA.publications.filter(p => p.type === filter);

    filtered.forEach(pub => {
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
          <span class="badge-if">${pub.impact}</span>
          <div class="pub-actions">
            <button class="btn-action btn-abstract" data-id="${pub.id}">+ Abstract</button>
            <button class="btn-action btn-cite" data-citation="${pub.citation}">Cite</button>
            <a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="doi-chip">View Paper ↗</a>
          </div>
        </div>
        <div class="pub-abstract-drawer" id="drawer-${pub.id}">
          <p>${pub.abstract}</p>
        </div>
      `;
      pubStream.appendChild(entry);
    });

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
        }).catch(err => {
          showToast("Failed to copy citation");
        });
      });
    });
  }

  // Initial Publication Render
  renderPublications();

  // Filter Listeners
  const filterPills = document.querySelectorAll("#pub-filters .pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      filterPills.forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      renderPublications(e.target.dataset.filter);
    });
  });

  // Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Initialize Fuse.js with threshold tuning for typo tolerance
let fuseInstance = null;

if (typeof Fuse !== 'undefined' && typeof RESEARCH_QA !== 'undefined') {
  fuseInstance = new Fuse(RESEARCH_QA, {
    keys: [
      { name: 'question', weight: 0.5 },
      { name: 'tags', weight: 0.3 },
      { name: 'answer', weight: 0.2 }
    ],
    threshold: 0.8,          // Increased from 0.4 to 0.6 for broader typo tolerance
    distance: 100,
    minMatchCharLength: 2,
    ignoreLocation: true,
    useExtendedSearch: true
  });
}


// Helper for Quick Suggestion Chips
function fillSearch(term) {
  const input = document.getElementById('qa-input');
  if (input) {
    input.value = term;
    input.dispatchEvent(new Event('input'));
    input.focus();
  }
}

// Search Logic & Card Renderer
// Function to highlight key engineering metrics in answers automatically
function formatAnswerText(text) {
  // Bold percentages, CBR values, IF values, and key material acronyms
  return text
    .replace(/(\d+(\.\d+)?%)/g, '<strong>$1</strong>')
    .replace(/(CBR( values)?)/gi, '<strong>$1</strong>')
    .replace(/(LC2|FA|RCCP|MOM|CGT)/g, '<strong>$1</strong>');
}

document.getElementById('qa-input')?.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  const resultsContainer = document.getElementById('qa-results');
  const selectedResearchBlock = document.getElementById('selected-research-block'); // Selected Research container
  
  if (!query) {
    resultsContainer.innerHTML = '';
    if (selectedResearchBlock) selectedResearchBlock.style.display = 'block';
    return;
  }

  // Hide the static selected research list while actively searching to prevent double lists
  if (selectedResearchBlock) selectedResearchBlock.style.display = 'none';

  let matches = [];
  if (fuseInstance) {
    matches = fuseInstance.search(query).map(res => res.item);
  } else {
    const q = query.toLowerCase();
    matches = RESEARCH_QA.filter(item =>
      item.question.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-match-text">
        No findings matching "<strong>${e.target.value}</strong>". Try searching for keywords like <strong>LC2</strong>, <strong>Geocells</strong>, <strong>Coir</strong>, or <strong>CBR</strong>.
      </div>`;
    return;
  }

  // Render clean structured cards
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