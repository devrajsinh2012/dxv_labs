# DxV Labs — Premium Agency Website Implementation Plan

## Overview

DxV Labs is a digital agency at the intersection of architecture and systems engineering. The site must feel like a **technical artefact**, not a typical "AI startup" landing page. Think Linear.app meets an architect's blueprint: confident, engineered, minimal noise, maximum signal.

The signature visual device — a CSS 3D **Axonometric Module Stack** — is the hero centrepiece and must be interactive, smooth, and built without WebGL for instant paint.

---

## Design System (from UI/UX Pro Max + design_prompt.md)

### Color Tokens (Brand-defined — locked)

| Token | Hex | Role |
|---|---|---|
| `--color-paper` | `#ECEEF0` | Primary light BG — cool grey |
| `--color-ink` | `#14151A` | Dark BG for hero, footer, CTA band |
| `--color-signal` | `#FF5722` | Single accent — CTAs, active, conduit lines |
| `--color-steel` | `#8A94A6` | Secondary text, grid lines, borders |
| `--color-surface` | `#FFFFFF` | Elevated cards on Paper |
| `--color-surface-dark` | `#1E2027` | Elevated cards on Ink |

Signal is a **spark, never a fill** for large areas.

### Typography (Brand-defined — locked)

- **IBM Plex Sans** — all readable copy (headlines 600, body 400, 16–18px, lh 1.6, max 70ch)
- **IBM Plex Mono** — system output: tags, spec strips, coordinate labels, metrics, footer status
- Display: `clamp(2.5rem, 6vw, 6rem)` with tracking `−0.02em`

### UI Style Blend (from UI Pro Max)

Combining **Exaggerated Minimalism** (oversized type, extreme white space, black/white dominant) + **Motion-Driven** (scroll-triggered reveals, 300–400ms ease-out, parallax-light) + **Glassmorphism** (for cards inside Ink sections only) — matching the Linear/Stripe-tier polish target.

### Motion Rules

- All easing: `cubic-bezier(0.22, 1, 0.36, 1)` (expo-out) — no bounce, no spring
- Reveals: 400–600ms, stagger 60–80ms
- Axonometric Stack scroll rotation: tied to `scrollY`, max ±5°, never full spin
- `prefers-reduced-motion`: swap Stack for static SVG, conduit lines appear instantly
- Animations: GPU-accelerated via `transform` & `opacity` only

### Recurring Devices (all pages)

1. **Crosshair marks** — `×` at corners of framed sections
2. **Spec strip** — mono ticker: `[01] WEBSITES  [02] AI AUTOMATION  [03] WHATSAPP  [04] MARKETING  [05] E-COMMERCE`
3. **Module frames** — Steel borders + mono coordinate label (e.g. `X:042 Y:017`)
4. **Dot grid** — 4–6% opacity on Paper sections (background SVG pattern)

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 App Router** | SSR, `next/font`, `next/image`, routing |
| Language | **TypeScript** | Type safety across components |
| Styling | **Tailwind CSS v3** | Utility-first with custom token extension |
| Components | **shadcn/ui** | Nav, dialog, form — a11y baked in |
| Fonts | `next/font/google` | IBM Plex Sans + IBM Plex Mono, zero CLS |
| Images | `next/image` | AVIF/WebP, lazy-load |
| 3D | **Pure CSS 3D transforms** | `rotateX/rotateY` on divs — instant paint, no WebGL dependency |
| Animation | **CSS keyframes + Intersection Observer** | No heavy library, GPU-composited |
| Scroll ticker | Pure CSS `animation: marquee` | No JS overhead |

**Lighthouse targets:** 95+ mobile, LCP < 2s, CLS < 0.05

---

## Site Architecture

```
/                 → Home (flagship)
/work             → Templates showcase
/process          → 6-step timeline
/clients          → Testimonials + results
/services         → One panel per service
/contact          → Project intake form (or panel off Home)
```

### Navigation

Floating pill nav: `Home / Work / Process / Clients / Services` + persistent **"Start a Project"** button (Signal fill, white text).

---

## Page Specifications

### 1. Home (`/`)

**Section order:**

| # | Section | Background | Key Element |
|---|---|---|---|
| 1 | Hero | Ink `#14151A` | Axonometric Stack (CSS 3D), headline, 2 CTAs |
| 2 | Spec Strip | Ink→Paper transition | Horizontal mono ticker |
| 3 | Services Bento | Paper `#ECEEF0` | Asymmetric bento grid, dot grid BG |
| 4 | Work Preview | Paper | Horizontal scroll-snap, 3 module-framed cards |
| 5 | Process Strip | Paper | 3-step condensed, Signal connecting line |
| 6 | Clients Preview | Paper | 1–2 spec-sheet testimonials |
| 7 | CTA Band | Ink | Mini Stack (glowing), Signal CTA |
| 8 | Footer | Ink | Nav cols, mono status line, outline DxV wordmark |

**Hero layout:** 55/45 split
- Left: Mono eyebrow `DXV LABS // DIGITAL SYSTEMS`, H1 headline (clamp 2.5–6rem), support copy, 2 CTAs
- Right: Axonometric Stack (5 CSS 3D modules, Signal conduit lines animate in on load)

**Axonometric Stack implementation:**
- 5 `<div>` modules styled as isometric cuboids using CSS `transform: rotateX(30deg) rotateY(-45deg)` with flat-shaded top/left/right faces
- Each module = one service (Websites, AI, WhatsApp, Marketing, E-commerce)
- SVG `<line>` overlays for conduit paths, `stroke-dashoffset` animated to 0 on load
- On scroll: `transform: rotateY(calc(-45deg + scrollProgress * 5deg))` via JS scroll listener
- On hover: `translateZ(8px)` lift + conduit `animation: pulse 1s ease-in-out infinite`
- Mobile: vertical stacked flat cards (no isometric forced into narrow viewport)

### 2. Work (`/work`)

- Intro line + toggle filter chips (mono label style): ALL / RESTAURANT / E-COMMERCE / SAAS / PORTFOLIO / SERVICES
- Grid of module-framed template cards with coordinate labels + mono spec line (stack, build time, category)
- Hover: autoplays muted looping scroll preview (lazy-loaded `<video>`)
- Click: full-screen modal with live preview `<iframe>` + floating bar (name + "Use as starting point" CTA)
- Footer CTA: "Don't see your style? We build from scratch."

### 3. Process (`/process`)

- Vertical timeline (desktop) / horizontal (mobile)
- 6 numbered steps + "always-on" Support step set apart visually
- Each step: isometric icon, 1–2 sentences, mono timeframe tag
- Scroll-driven: Signal-colored line "charges" up to the current step in view

### 4. Clients & Results (`/clients`)

- Headline: "Brands that switched it on."
- Mono status board (if logo list thin) or logo wall
- Testimonial spec sheets: quote + mono metadata (name/role/company) + Signal metric (`RESULT: +42% ORDERS`)
- 2–3 before/after stat panels
- CTA: "Add your name to this list."

### 5. Services (`/services`)

- One panel per offering expanding on Home bento tiles
- What's included, typical timeline, module illustration
- Services: Websites / AI Automation / WhatsApp / Digital Marketing / E-commerce

### 6. Contact (`/contact` or Home panel)

- Fields: Name, Business type, What you need, Budget range
- Mono labels throughout (never generic form feel)
- shadcn/ui form primitives for a11y

---

## File Structure

```
d:\DxVlabs\DXV web\
├── app/
│   ├── layout.tsx              # Root layout, fonts, nav, footer
│   ├── page.tsx                # Home
│   ├── work/page.tsx
│   ├── process/page.tsx
│   ├── clients/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── nav/Navbar.tsx          # Floating pill nav
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── AxonometricStack.tsx  # The hero 3D element
│   ├── home/
│   │   ├── SpecStrip.tsx       # Mono ticker
│   │   ├── ServicesBento.tsx
│   │   ├── WorkPreview.tsx
│   │   ├── ProcessStrip.tsx
│   │   ├── ClientsPreview.tsx
│   │   └── CtaBand.tsx
│   ├── shared/
│   │   ├── ModuleFrame.tsx     # Reusable frame w/ crosshairs + coord label
│   │   ├── CrosshairMark.tsx
│   │   ├── DotGrid.tsx
│   │   └── Footer.tsx
│   ├── work/
│   │   ├── FilterChips.tsx
│   │   ├── TemplateCard.tsx
│   │   └── PreviewModal.tsx
│   └── process/
│       └── Timeline.tsx
├── styles/
│   └── globals.css             # CSS tokens, dot-grid, animations, keyframes
├── lib/
│   └── utils.ts
├── public/
│   └── fonts/ (if self-hosted fallback)
├── tailwind.config.ts          # Extended with brand tokens
└── next.config.ts
```

---

## Implementation Phases

### Phase 1 — Foundation (CSS tokens, layout shell, nav, footer)
- `globals.css` with all CSS custom properties
- `tailwind.config.ts` extended with brand tokens
- Root `layout.tsx` with IBM Plex fonts via `next/font`
- Floating Navbar + Footer

### Phase 2 — Hero + Axonometric Stack
- Hero section with 55/45 split layout
- CSS 3D Axonometric Stack with conduit line draw-in animation
- Scroll-linked rotation via `useScroll` hook (no lib)
- Hover interactions per module

### Phase 3 — Home Page Sections
- Spec strip ticker
- Services bento (dot grid BG, asymmetric layout)
- Work preview (scroll-snap cards)
- Process strip
- Clients preview
- CTA band with mini Stack

### Phase 4 — Inner Pages
- `/work` — filter + grid + modal
- `/process` — scroll-charged timeline
- `/clients` — spec-sheet testimonials
- `/services` — per-offering panels
- `/contact` — mono-styled form

### Phase 5 — Polish + Performance
- `prefers-reduced-motion` fallback
- Mobile responsive (Stack collapses, all breakpoints 375/768/1024/1440)
- Lighthouse audit targeting 95+
- All images via `next/image` AVIF/WebP
- Work page videos lazy-loaded per card in viewport

---

## Open Questions

> [!IMPORTANT]
> **Please confirm before I start coding:**

1. **Stack confirmation**: The design brief specifies Next.js + TypeScript + Tailwind + shadcn/ui. Do you want me to scaffold a new Next.js app in `d:\DxVlabs\DXV web\`, or does a project already exist there?

2. **First delivery scope**: Should I build the **complete site** (all 6 pages) in one pass, or start with a **polished Home page first** for your review before continuing?

3. **Real content vs placeholder**: For testimonials, template cards, and client logos — should I use realistic placeholder content (fake company names, realistic metrics), or do you have real content to supply?

4. **Contact page**: Standalone `/contact` page, or a slide-out panel/modal triggered from the "Start a Project" CTA on Home?

---

## Verification Plan

### Automated
- `npm run build` — zero TypeScript errors, no build warnings
- Lighthouse CI on Home (`npx lighthouse http://localhost:3000 --output json`)
- `npx tsc --noEmit` — type check

### Manual
- Visual review at 375px, 768px, 1024px, 1440px
- Axonometric Stack hover + scroll interactions
- Reduced-motion mode (browser DevTools emulation)
- Dark Ink sections contrast check (text vs `#14151A` BG)
- All CTA buttons keyboard-navigable
