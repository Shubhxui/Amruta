# Amruta Maternity Hospital — Website

A warm, modern marketing site for **Amruta Maternity Hospital** (Tathawade, Pune),
built with **Astro** + **Tailwind CSS v4**. Fully responsive, accessible and fast
(static HTML, near-zero JS).

The homepage layout is inspired by the [Healen](https://healen.webflow.io/home-02)
reference, re-themed into a unique maternity brand.

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

Requires Node 18+ (built on Node 22).

---

## Design system

A small, deliberate system — defined once in [`src/styles/global.css`](src/styles/global.css) (`@theme` block).

### Logo
Custom SVG **lotus** wordmark (new life · purity · nurturing) — see
[`src/components/Logo.astro`](src/components/Logo.astro). A `variant="light"` is used
on dark backgrounds. Favicon: [`public/favicon.svg`](public/favicon.svg).

### Colours — minimal, calm (3 neutrals + 1 accent)
| Role | Token | Hex |
|------|-------|-----|
| Page base (warm near-white) | `paper` | `#faf9f5` |
| Cream panels (hero, alt sections) | `cream` | `#ece8dd` |
| Ink (near-black text/headings) | `ink` | `#0e0e0e` |
| Grey (secondary text) | `ink-soft` | `#6e6e6e` |
| Dark sections | `dark` | `#0e0e0e` |
| **Accent (lime)** | `accent` | `#e4ff60` |

The accent is used sparingly (buttons, badges, the footer wordmark). Rich
photography carries the colour — the UI stays neutral and calm, à la the reference.

### Typography
- **One typeface:** **Switzer** (a free Helvetica-Now-style grotesque from Fontshare),
  weights 400/500/600/700 — headings and body alike. Loaded in
  [`src/layouts/Layout.astro`](src/layouts/Layout.astro).

### Reusable bits
Buttons `.btn` + `.btn-primary` (lime) / `.btn-dark` / `.btn-white` / `.btn-outline`,
`.card` / `.card-hover`, `.eyebrow`, `.h-display` / `.h-section` / `.lead`,
`.container-page`, and a `.reveal` scroll-in animation.

---

## Editing content

**All text, contact details, services, doctors, testimonials and FAQs live in one file:**
[`src/data/site.ts`](src/data/site.ts). Change it there and it updates everywhere.

> ⚠️ The contact details (address, phone, doctor names) are seeded from the public
> listing for *Amruta Maternity & General Hospital, Dange Chowk, Tathawade, Pune*.
> Please verify/replace them with the client's confirmed details.

### Replacing images
Drop real photos into [`public/images/`](public/images/) using the **same file names**:

| File | Used for | Suggested size |
|------|----------|----------------|
| `hero.jpg` | Hero — mother & newborn | ~900 × 1120 (4:5 portrait) |
| `about.jpg` | About — antenatal care | ~900 × 1000 (portrait) |
| `doctor-1.jpg` … `doctor-4.jpg` | Doctor portraits | ~600 × 720 (portrait) |

> The current images are **free-license Pexels stock** placeholders for the
> presentation — swap them with the hospital's real photography when available.

---

## Project structure

```
src/
  data/site.ts            ← all editable content
  styles/global.css       ← design system (colours, fonts, components)
  layouts/Layout.astro    ← <head>, fonts, scroll-reveal
  components/
    Logo.astro  Icon.astro  Header.astro
    Hero.astro  Stats.astro  About.astro  Services.astro
    Journey.astro  WhyChooseUs.astro  Doctors.astro
    Testimonials.astro  FAQ.astro  Contact.astro  Footer.astro
    FloatingContact.astro
  pages/index.astro       ← assembles the homepage
public/
  favicon.svg  images/
```

## Homepage sections
Header → Hero → Stats → About → Services → Pregnancy Journey → Why Choose Us →
Doctors → Testimonials → FAQ → Contact (appointment form + map) → Footer,
plus a floating WhatsApp/Call button.

The appointment form composes a pre-filled **WhatsApp** message to the hospital
number (no backend needed). Point it at a real form/CRM later if desired.
