# Alkesh Gupta — Brand Soul (About Page)

A pixel-accurate, fully responsive implementation of the **AG_AboutPage** Figma design — built with React, TypeScript, Tailwind CSS, and Framer Motion, optimized for near-perfect Lighthouse scores.

🔗 **Figma:** [AG_AboutPage](https://www.figma.com/design/YJxz77DJbWfVsSCNJF7GaK/AG_AboutPage?node-id=172-1635)

---

## ✨ Overview

This project translates the "Brand Soul" personal-brand landing page from Figma into production-ready code — matching spacing, typography, color, and motion specs from the design file while adding responsive behavior, accessibility, and performance work that the static design doesn't cover on its own.

### Sections implemented

| Section | Description |
|---|---|
| **Navbar** | Sticky header with active-route highlighting |
| **Hero** | Full-bleed portrait with animated intro copy |
| **Journey** | Scroll-narrative block with an auto-sliding image gallery and an auto-rotating service-card carousel |
| **Brand Soul Philosophy** | Responsive 3-card grid with shadowed imagery |
| **Manifesto** | Alternating image/text rows with scroll-triggered line-reveal typography |
| **Brands** | Hover-expanding brand showcase (image collapses to zero width when inactive, not just faded) |
| **Testimonials** | Draggable horizontal scroll carousel |
| **Footer** | Sitemap + social links |

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & production bundling
- **Tailwind CSS** — utility-first styling, custom design tokens (colors, fonts, breakpoints)
- **Framer Motion** — scroll-linked reveal animations (`useScroll`, `useTransform`)
- **clsx** — conditional class composition
- **lucide-react** — icon set

---

## 📱 Responsiveness

Every section was rebuilt mobile-first rather than simply scaled down from desktop:

- **Fluid typography** via `clamp()` on all headings — scales smoothly between breakpoints instead of jumping at fixed sizes.
- **Layout-aware carousels** — the gallery and service-card sliders measure actual rendered card width (`offsetLeft` diffing) at runtime instead of relying on hardcoded pixel widths, so slide distance stays accurate across breakpoints.
- **Grid-based card rows on mobile** (`grid-cols-3`) instead of fixed-width flex items — prevents overflow/wrapping on narrow viewports (360–390px) while flex layout takes over on desktop for the offset/staggered look.
- **Stacked → side-by-side transitions** — manifesto and brand rows stack vertically on mobile (`flex-col`) and switch to alternating left/right layouts at `md:`.
- **Breakpoints used:** default (mobile), `sm:`, `md:` — aligned to Tailwind's default scale.

---

## ⚡ Performance & Lighthouse Optimization

Measured via Chrome DevTools Lighthouse (incognito, production build, `localhost:4173` preview):

| Category | Score |
|---|---|
| Performance | **100** |
| Accessibility | **95** |
| Best Practices | **96** |
| SEO | **92** |

**Core Web Vitals** (from the same run):

| Metric | Value |
|---|---|
| First Contentful Paint | 0.5 s |
| Largest Contentful Paint | 0.5 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 0.5 s |

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/c36add5c-9d92-4ff9-ae60-000882769dfe" />


### What got us there

- **Image loading strategy** — every non-critical image (`gallery`, `brands`, `manifesto` side images) uses `loading="lazy"`; the hero/above-the-fold image loads eagerly so LCP isn't delayed.
- **Zero layout shift** — carousel and hover-expanding elements (Brands section) animate `width`/`transform` inside a fixed-height, `overflow-hidden` wrapper rather than mounting/unmounting DOM nodes, so CLS stays at `0`.
- **Animation cost kept off the main thread** — slide/reveal transitions rely on CSS `transform`/`clip-path` (GPU-accelerated) instead of animating `left`/`top`/`width` directly where avoidable, keeping Total Blocking Time at `0ms`.
- **Code-split by route/section** where applicable, and Vite's production build (`esbuild` minify + tree-shaking) keeps the shipped JS bundle lean.
- **Font loading** — custom fonts (`Altone`, `Anton`, `Dancing Script`) are preloaded/self-hosted with `font-display: swap` to avoid invisible-text flashes without blocking paint.
- **Semantic HTML + alt text** on all meaningful images; decorative images use empty `alt=""` to keep the accessibility tree clean — main driver of the 95 Accessibility score.

---

## 📂 Project Structure

```
src/
  components/
    Navbar.tsx
    JourneySection.tsx
    ManifestoSection.tsx
    BrandsSection.tsx
    TestimonialsSection.tsx
    ui/
      LineRevealText.tsx      # scroll-triggered clip-path text reveal
  data/
    content.ts                 # single source of truth for copy, images, nav links
  styles/
    index.css                  # Tailwind directives + design tokens
```

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview the production build locally (what Lighthouse was run against)
npm run preview
```

---

## 🔍 Running Lighthouse Locally

1. `npm run build && npm run preview`
2. Open the preview URL in an **Incognito** Chrome window (avoids extension interference)
3. DevTools → **Lighthouse** tab → run in **Navigation** mode with **Performance / Accessibility / Best Practices / SEO** checked

---

## 📌 Notes / Known Trade-offs

- Carousel auto-play intervals (gallery, service cards) are tuned for a ~2s cadence — adjustable via constants at the top of `JourneySection.tsx`.
- Testimonials use native scroll + custom drag handling instead of a carousel library, keeping bundle size down.
- Images are currently sourced from Unsplash placeholders in a few sections pending final asset delivery — swap `data/content.ts` image URLs with final CDN assets before launch, and re-run Lighthouse afterward since real assets may affect LCP/CLS.
