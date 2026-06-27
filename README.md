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

### Colours
| Role | Token | Hex |
|------|-------|-----|
| Brand (dusty rose) | `brand-500` | `#bf5c66` |
| Secondary (deep sage) | `sage-500` | `#4f7461` |
| Accent (warm peach) | `peach-500` | `#e0a36a` |
| Surface (cream) | `cream-100` | `#fbf7f3` |
| Ink (text) | `ink` | `#2c2426` |

Each colour has a full 50–900 scale. Use them as normal Tailwind utilities,
e.g. `bg-brand-500`, `text-sage-600`, `border-cream-300`.

### Typography
- **Display / headings:** Fraunces (soft modern serif) — `font-display`
- **Body / UI:** Plus Jakarta Sans — `font-sans`

Loaded via Google Fonts in [`src/layouts/Layout.astro`](src/layouts/Layout.astro).

### Reusable bits
`.btn` + `.btn-primary` / `.btn-secondary` / `.btn-outline`, `.card` / `.card-hover`,
`.eyebrow`, `.container-page`, and a `.reveal` scroll-in animation.

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
