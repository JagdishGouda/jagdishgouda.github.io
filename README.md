Here is the complete, self-contained `README.md` file incorporating your project overview, architecture, visual system, data schemas, dynamic UX rules, and directory structure.

You can copy and paste this directly into your `README.md`.

````markdown
# Academic & Research Portfolio — Dr. Jagdish Gouda

A minimal, performant, single-page academic portfolio designed to highlight research impact, academic trajectory, and scientific contributions in pavement geotechnics, low-carbon binders, and mine overburden recycling.

---

## 🤖 System Context & Architecture (LLM Context)

> **Purpose for AI/LLMs**: This document describes the structure, design rationale, component interaction rules, and data schemas of this codebase so you can accurately maintain, extend, or update components without breaking layout constraints, visual hierarchy, or responsive behavior.

### Project Taxonomy

- **Type**: Static Academic Web Page
- **Design Philosophy**: Minimalist, Swiss-style typography, high contrast, zero runtime heavy frameworks.
- **Tech Stack**: Semantic HTML5, Pure CSS (Custom Properties), Vanilla JavaScript ES6+.
- **Deployment**: GitHub Pages (`https://jagdishgouda.github.io`)

### 📂 Directory & File Taxonomy

```text
.
├── index.html          # Semantic HTML5 layout (Hero header, stats, trajectory, search container, research blocks)
├── style.css           # CSS custom properties, layout grids, responsive breakpoints, and UI component styling
├── script.js           # Event listeners, Fuse.js/keyword search, dynamic DOM rendering, and text formatting helpers
├── constants.js        # Global data stores (PUBLICATIONS list and RESEARCH_QA interactive search index)
└── assets/             # Static visual and document assets
    ├── Jagdish_CV.pdf  # Primary downloadable curriculum vitae
    └── profile.jpg     # High-resolution headshot profile image (with SVG fallback handling)
```
````

---

## 🎨 Visual System & Design Rationale

The site's visual language is engineered for high legibility, clean spatial flow, primary call-to-action dominance, and professional academic authority.

### 1. Typography Pairings

- **Headings & Body**: `Plus Jakarta Sans` (Sans-serif) for clean interface elements, labels, metadata, and body text.
- **Narrative & Names**: `Source Serif 4` (Serif) for high-impact headers and introductory research statements to evoke academic publication standards.

### 2. Color Palette (CSS Custom Variables)

```css
:root {
  --bg: #fafaf9; /* Warm neutral background to reduce eye strain */
  --surface: #ffffff; /* Pure white card backgrounds */
  --text-main: #1c1917; /* High-contrast charcoal (off-black) for optimal readability */
  --text-muted: #44403c; /* Secondary text color */
  --text-light: #78716c; /* Tertiary/metadata text color */
  --accent: #0f766e; /* Deep Teal for academic accent & key interactive states */
  --accent-soft: #f0fdf4; /* Low-opacity green tint for badges and hover highlights */
  --border: #e7e5e4; /* Subtle dividers and boundaries */
  --border-focus: #0f766e; /* Highlight border for focused/expanded states */
}
```

### 3. Key UI Elements & Layout Decisions

- **Top-Right Download CV CTA (`.btn-top-right-cv`)**: Positioned absolute top-right inside `.profile-header`. Utilizes solid `--accent` (`#0f766e`) fill with white text for maximum WCAG AAA contrast and high visual priority.
- **Interactive Search Cards (`.qa-item`)**: HTML `<details>` element styled with a subtle 1px border. Expands on click with a left accent border (`border-left: 3px solid var(--accent)`).
- **Category Badges (`.qa-category-pill`)**: Rendered as tiny uppercase pills sitting above search questions to establish visual taxonomy.

---

## ⚙️ Dynamic UX & Search Behavior

1. **Dual-List Conflict Prevention**:

- When a user enters a query in `#qa-input`, the static `#selected-research-block` container MUST be hidden dynamically (`display: none`).
- Clearing the input restores `#selected-research-block` (`display: block`).

2. **Automated Metric Highlighting**:

- The helper function `formatAnswerText(text)` parses search answer strings and wraps key numerical and technical terms (percentages, `CBR`, `LC2`, `FA`, `RCCP`, `CGT`) in `<strong>` tags with subtle highlight backgrounds for rapid scannability.

3. **Accessible Fallbacks**:

- Images feature inline `onerror` handling to render SVG text placeholders if an asset fails to load.

---

## 📊 Data Schemas (`constants.js`)

All dynamic content is fed from standard JavaScript arrays inside `constants.js`. When extending the dataset, adhere strictly to these schemas:

### 1. Publication Schema (`PUBLICATIONS`)

```javascript
{
  id: "pub-1",                         // String: Unique identifier (e.g., 'pub-1')
  type: "journal" | "conference",      // Enum: Publication medium
  title: "Full Paper Title...",        // String: Complete title
  venue: "Journal / Conference Name",  // String: Venue or publisher
  year: "2025",                       // String: Four-digit year
  impact: "IF 3.9" | "Peer-Reviewed",  // String: Impact factor or review designation
  doi: "[https://doi.org/10.xxxx/](https://doi.org/10.xxxx/)...",  // String: Direct DOI URL
  authors: "Author A, Author B...",   // String: Author list
  abstract: "Concise summary...",     // String: 2-3 sentence abstract
  citation: "APA/IEEE citation..."    // String: Full formal citation text
}

```

### 2. Interactive Search QA Schema (`RESEARCH_QA`)

```javascript
{
  category: "Geotechnology",           // String: Category pill label
  question: "What is the effect...?",  // String: User inquiry title
  answer: "Detailed answer text...",   // String: Comprehensive explanation with metrics
  tags: ["Geocells", "CBR", "Mine"],   // Array<String>: Search index keywords
  doi: "10.1080/14680629.2025..."      // String (Optional): Related paper DOI link
}

```

---

## 🚀 Development & Maintenance

### Running Locally

No bundlers or build steps required. Simply serve the repository root with any standard HTTP server:

```bash
# Using Python
python3 -m http.server 5500

# Using Node.js (http-server)
npx http-server -p 5500

```

Open `http://127.0.0.1:5500` in your browser.

### Adding New Publications

1. Open `constants.js`.
2. Append a new object to the `PUBLICATIONS` array following the **Publication Schema**.
3. Update the total count badge in `index.html` if required (e.g., `14+ PUBLICATIONS`).

```

```
