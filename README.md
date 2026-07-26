# Academic & Research Portfolio — Dr. Jagdish Gouda

A minimal, performant, single-page academic portfolio designed to highlight research impact, trajectory, and scientific contributions in pavement geotechnics, low-carbon binders, and mine overburden recycling.

---

## 🤖 System Context & Architecture (LLM Context)

> **Purpose for AI/LLMs**: This document describes the structure, design rationale, and schema of this codebase so you can accurately maintain, extend, or update components without breaking layout constraints or visual hierarchy.

### Project Taxonomy

- **Type**: Static Academic Web Page
- **Design Philosophy**: Minimalist, Swiss-style typography, high contrast, zero runtime heavy frameworks.
- **Tech Stack**: Semantic HTML5, Pure CSS (Custom Properties), Vanilla JavaScript ES6+.
- **Deployment**: GitHub Pages (`https://jagdishgouda.github.io`).

---

## 🎨 Visual System & Design Rationale

The site's visual language is engineered for high legibility, clean spatial flow, and professional academic authority.

### 1. Typography Pairings

- **Headings & Body**: `Plus Jakarta Sans` (Sans-serif) for clean interface elements, labels, metadata, and body text.
- **Narrative & Names**: `Source Serif 4` (Serif) for high-impact headers and introductory research statements to evoke academic publication standards.

### 2. Color Palette (CSS Custom Variables)

```css
--bg: #fafaf9; /* Warm neutral background to reduce eye strain */
--surface: #ffffff; /* Pure white card backgrounds */
--text-main: #1c1917; /* High-contrast charcoal (off-black) for optimal readability */
--text-muted: #44403c; /* Secondary text color */
--text-light: #78716c; /* Tertiary/metadata text color */
--accent: #0f766e; /* Deep Teal for academic accent & key interactive states */
--accent-soft: #f0fdf4; /* Low-opacity green tint for badges and hover highlights */
--border: #e7e5e4; /* Subtle dividers and boundaries */
```
