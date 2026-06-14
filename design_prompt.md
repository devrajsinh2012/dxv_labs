DxV Labs: Website & Brand System Brief

The Big Idea

DxV Labs sits at the intersection of two crafts: architecture and systems engineering. The pitch is simple: we design the storefront, then we install the wiring behind it (AI automation, WhatsApp automation, marketing automation, e-commerce logic), so the business keeps running without someone manually pushing buttons all day.

The visual language pulls from technical drafting and architectural blueprints, not from typical "AI startup" cues. Think of a 1970s engineering graphics manual crossed with an architect's axonometric model: confident grids, dimension marks, isometric diagrams, and exactly one loud accent color that means "this is live."

The × in DxV doubles as a recurring crosshair mark, the kind printers and drafters use as registration marks. It shows up as a corner mark on framed sections, a cursor accent, and a loading indicator. Small, but it's the thread that ties the whole site together.

Craft bar to aim for: the polish level of Linear's marketing site or a Stripe product page, but with a completely different visual vocabulary.

Visual System

Color Tokens

TokenHexRolePaper#ECEEF0Primary light background. Cool gray, not cream, like fresh drafting paperInk#14151APrimary text on Paper, and the background for "powered on" sectionsSignal#FF5722The single accent. CTAs, active states, conduit lines, the crosshairSteel#8A94A6Secondary text, grid lines, borders, inactive statesSurface#FFFFFFElevated cards/panels on PaperSurface Dark#1E2027Elevated cards/panels inside Ink sections

Think of it as a building: lights are on at the entrance and in the control room (hero, final CTA, footer all sit on Ink), and it's daylight on the workshop floor in between (Services, Work, Process, Clients sections sit on Paper). Signal only ever appears as a spark, never as a fill for large areas. Steel never carries body text under 14px, to keep contrast honest.

Typography

Two families, both built as a pair so nothing feels bolted on.

IBM Plex Sans for everything you read. Headlines at 600 weight, tracking around -0.02em (comfortably above the -0.04em floor where letters start touching), display size capped at clamp(2.5rem, 6vw, 6rem). Body at 400 weight, 16-18px, 1.6 line height, max measure of 70 characters.

IBM Plex Mono for anything that reads as "system output": service tags, the spec strip under the hero, coordinate labels on framed images, result metrics on testimonials, the footer status line. Both fonts are free on Google Fonts and load cleanly through next/font.

css:root {
  --color-paper: #ECEEF0;
  --color-ink: #14151A;
  --color-signal: #FF5722;
  --color-steel: #8A94A6;
  --color-surface: #FFFFFF;
  --color-surface-dark: #1E2027;
  --font-display: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

Signature Element: The Axonometric Stack

This is the one big swing, and it's what people will screenshot. In the hero, DxV's five services are rendered as five physical modules (shipping-container or server-rack proportions) arranged in an exploded isometric stack. Thin Signal-colored lines run between them like conduit, drawing themselves in on page load.

Build it first in pure CSS 3D transforms (rotateX/rotateY on a handful of divs with flat-shaded faces), no WebGL needed for the base version, so it's interactive the instant the page paints. On scroll it rotates a few degrees tied to scroll progress, never a full spin. Hovering a module lifts it 8px and pulses its conduit lines.

The same module language repeats in miniature everywhere: each service gets its own small module icon on the Home page, each Process step shows modules connecting, each template on the Work page sits inside a module frame.

Motion & Recurring Devices

Everything eases out (quart/expo curves, no bounce, no spring). Reveals run 400-600ms, staggered roughly 60-80ms when several elements enter together, and each section's reveal should fit what it's revealing rather than reusing one generic fade everywhere. prefers-reduced-motion swaps the Stack for a static exploded-view illustration and makes conduit lines appear instantly.

Four small devices repeat across every page and do most of the work of making this feel like one system:


Crosshair marks (small × glyphs) at the corners of framed sections, echoing the DxV mark
A "spec strip": a horizontal mono-font bar reading things like [01] WEBSITES  [02] AI AUTOMATION  [03] WHATSAPP  [04] MARKETING  [05] E-COMMERCE, used under the hero and as section dividers
Module frames: thin Steel borders with a small mono coordinate label in one corner, used for template previews, testimonial cards, and process icons
A faint (4-6% opacity) dot grid on Paper sections, visible only up close, the "this was drafted, not decorated" detail


Site Map & Navigation

Nav: Home / Work / Process / Clients / Services, plus a persistent "Start a Project" button filled in Signal.

Pages: Home (flagship), Work (template showcase), Process, Clients & Results, Services (one page per offering, expanding the Home bento tiles), and Contact (can live as a panel off Home or its own page, whichever is faster to ship first).

Page Specifications

Home

Hero (Ink background): split roughly 55/45. Left side carries a mono eyebrow (DXV LABS // DIGITAL SYSTEMS), a two-line headline, one sentence of support copy, and two CTAs (Start a Project filled in Signal, View Our Work as an outline button). Right side holds the Axonometric Stack, fully lit. Below the fold, the spec strip runs the full width as a slow horizontal ticker listing all five services.

Services: an asymmetric bento on Paper. Website Building (the primary offering) takes a wide two-column panel with its own module illustration, a short paragraph, and a "See templates" link straight into Work. The other four sit as a 2x2 grid beside it: AI Automation & Consulting (a small flowing-node animation on hover), WhatsApp Automation (a chat bubble pulsing), Digital Marketing Automation (a graph line drawing itself), and E-commerce Specialization (a cart icon filling).

Work preview: a horizontal scroll-snap row of three module-framed template cards, linking through to the full Work page.

Process preview: a condensed three-step strip (Discover, Build, Automate) with a thin Signal line connecting them, linking to the full Process page.

Clients preview: one or two testimonial "spec sheets" (format described below), linking through to Clients & Results.

CTA band (Ink again, the bookend): headline along the lines of "Ready to switch it on?", the Stack reappears small and fully glowing, single Signal CTA.

Footer (Ink): nav columns, contact details styled as a mono status line (e.g. AVAILABILITY: 2 SLOTS OPEN THIS QUARTER), and a large outline-only "DxV" wordmark anchoring the bottom with the × crosshair watermarked behind it.

Work (Templates)

Short intro line, then filter chips styled as toggle switches in mono labels (ALL, RESTAURANT, E-COMMERCE, SAAS, PORTFOLIO, SERVICES). Grid of module-framed template cards, each with a coordinate label and a small mono spec line underneath (stack used, rough build time, category). On hover, the framed area autoplays a short scroll-through preview of the live template (a muted looping clip, lazy-loaded). Clicking opens a full-screen live preview in a modal with a floating bar (template name, "Use as starting point" CTA). The page ends with "Don't see your style? We build from scratch," pointing to Contact.

Process

This page is a genuine sequence, so numbering earns its place here in a way it doesn't elsewhere. Vertical timeline on desktop, horizontal on mobile, six steps: [01] Discover & Audit, [02] Blueprint (sitemap, wireframes, automation map), [03] Design, [04] Build, [05] Automate & Integrate, [06] Launch & Handover, plus a seventh item set apart visually, Support & Iterate, framed as "always on" rather than a final step. Each step gets a small isometric icon showing the modules at that stage (Automate shows them connecting via glowing conduit), one or two sentences, and a rough mono timeframe (~3-5 days). As the page scrolls, the connecting line charges in Signal color up to the current step.

Clients & Results

Headline along the lines of "Brands that switched it on." If the logo list is thin early on, swap a logo wall for a mono "status board": a short list of project types or industries currently live, styled like a systems dashboard rather than an empty trophy case. Testimonial cards are spec sheets: a quote in Plex Sans, then a mono metadata line (name, role, company), and a highlighted result metric in Signal (RESULT: +42% ORDERS, RESULT: 6HR/WEEK SAVED). Two or three deeper case-study panels show a simple before/after stat. Page ends with "Add your name to this list."

Services & Contact

Services is one panel per offering, each expanding on its Home bento tile: what's included, typical timeline, and its module illustration. This keeps Home punchy while giving serious prospects the depth they're looking for. Contact can be a simple panel (name, business type, what you need, budget range) styled with the same mono labels as the rest of the system, so it never feels like a generic form was bolted on at the end.

Technical Stack & Performance

Next.js (App Router), TypeScript, Tailwind, and shadcn/ui for the form, dialog, and nav primitives, so accessibility (focus rings, keyboard nav, contrast) is handled by default rather than retrofitted. Fonts via next/font (IBM Plex Sans/Mono), self-hosted, zero layout shift.

The Axonometric Stack ships as CSS 3D by default. If a WebGL version ever feels worth it for the hero, it loads only after the hero scrolls into view, behind next/dynamic, with the CSS version as the instant fallback so the page never waits on it. On mobile, the Stack collapses to a simpler vertical arrangement of the same modules rather than trying to force the isometric view into a narrow viewport.

Targets: Lighthouse 95+ on mobile, LCP under 2 seconds, CLS under 0.05, and the hero fully interactive before any animation library finishes loading. Images via next/image in AVIF/WebP. On the Work page, only the template preview clips for cards currently in view are loaded.

Copy Direction

Tone is closer to a product spec than a sales pitch. Short sentences, no "revolutionary," no "cutting-edge," no "leverage."

Hero headline options:
"Built once. Wired to run itself."
"We design the storefront. Then we automate everything behind it."
"From blueprint to business."

Service one-liners:
Website Building: Sites engineered to convert, not just to look good.
AI Automation & Consulting: Custom AI workflows that take the busywork off your plate.
WhatsApp Automation: Orders, support and follow-ups, answered before you're awake.
Digital Marketing Automation: Campaigns that run, learn, and adjust on their own.
E-commerce Specialization: Stores built to sell more, with less hands-on work.