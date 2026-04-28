# Cemex Portals — Redesigned Website

A luxury dark-aesthetic redesign of cemexportals.com built in **React + TypeScript + Vite**.

---

## Design Direction

- **Palette**: Deep blacks (`#080808`), warm gold (`#c9a96e`), off-white text
- **Typography**: Cormorant Garamond (display/headings) + Montserrat (body) + Space Mono (labels/mono)
- **Aesthetic**: Dark luxury editorial — cinematic hero, layered compositions, grain overlay, custom cursor
- **Motion**: Scroll-triggered reveals, staggered animations, hero image ken-burns, count-up stats

---

## Project Structure

```
CemexPortals/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css            ← Global styles, CSS variables, utility classes
    ├── hooks/
    │   └── useReveal.ts     ← IntersectionObserver scroll reveal hook
    └── components/
        ├── Cursor.tsx / .css       ← Custom animated cursor
        ├── Navbar.tsx / .css       ← Sticky nav + fullscreen mobile menu
        ├── Hero.tsx / .css         ← Cinematic slideshow hero
        ├── About.tsx / .css        ← Brand story + overlapping images
        ├── Services.tsx / .css     ← Accordion-style service list
        ├── Projects.tsx / .css     ← Filterable masonry portfolio grid
        ├── Stats.tsx / .css        ← Animated count-up statistics
        ├── News.tsx / .css         ← Blog/journal cards
        ├── Contact.tsx / .css      ← Contact form + details
        └── Footer.tsx / .css       ← Full footer with wordmark
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Navigate into the project
cd CemexPortals

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Key Features

| Feature | Details |
|---|---|
| **Custom Cursor** | Gold dot + lagging ring, expands on hover |
| **Hero Slideshow** | 3 slides with auto-advance, animated progress bars |
| **Scroll Reveals** | Fade-up & slide-in on scroll via IntersectionObserver |
| **Project Filter** | Filter portfolio by All / Residential / Commercial / Interior |
| **Count-Up Stats** | Numbers animate when scrolled into view |
| **Mobile Menu** | Full-screen overlay with staggered link entrances |
| **Responsive** | Fully responsive from 320px to 1920px |

---

## Customisation

### Colours
All colour tokens live in `src/index.css` under `:root {}`. Change `--gold`, `--black`, etc. to retheme the entire site.

### Images
Images currently use Unsplash URLs. Replace with your own assets in each component file.

### Content
All copy is hardcoded in the component files — update titles, descriptions, and project data directly.

---

## Fonts Used
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — Headings & display
- [Montserrat](https://fonts.google.com/specimen/Montserrat) — Body text
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) — Labels, captions, UI elements

Loaded via Google Fonts in `src/index.css`.
