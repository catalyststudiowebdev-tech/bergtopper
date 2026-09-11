# BergTopper — Design System

Reference for all future pages. Prefer existing tokens, patterns, and section rhythm over inventing new looks.

## Brand essence

Mountain / forest / human growth. Dark forest greens, soft stone, and a lime “summit” accent. Calm, grounded, premium coaching — not flashy SaaS, not corporate blue, not purple gradients.

**Tone (NL):** warm, direct, human. Short punchy headlines; body copy that breathes.

---

## Color tokens

Defined in `app/globals.css`. Do not invent new palette colors.

| Role | Token | Hex | Use |
|------|--------|-----|-----|
| Page bg | `--background` | `#ffffff` | Default page |
| Text | `--foreground` | `#1a1c18` | Primary text |
| Muted | `--muted` | `#6b6b66` | Body / secondary |
| Surface | `--surface` | `#ffffff` | Light panels |
| Warm surface | `--surface-warm` | `#f7f7f5` | Soft section bg |
| Border | `--border` | `#e5e5e0` | Hairlines, rings |
| Accent | `--accent` | `#2d3e2f` | Primary CTA (header), dark green text |
| Accent hover | `--accent-hover` | `#243328` | CTA hover |
| Hero / CTA bg | `--hero-bg` (+ soft/deep) | `#1b2618`…`#121d11` | Dark forest sections |
| Olive | `--section-olive` | `#5e6754` | Avatars, accents |
| Highlight | `--highlight` | `#a4c639` | Summit green (sparingly) |
| Hero highlight word | — | `#8BAF72` | “bergtop.” in hero |
| Stone | `--stone` / `--stone-light` | `#c0b59e` / `#ede9df` | Logo tile, icon chips |
| Footer | `--footer-bg` | `#141614` | Near-black green |

**Rules**

- Alternate dark forest (`hero-bg`) and light (`surface` / `surface-warm`) sections.
- Lime/highlight is for emphasis only — never as a full section fill.
- Use Tailwind theme colors mapped from these tokens (`bg-hero-bg`, `text-muted`, etc.).

---

## Typography

| Role | Font | Class / var | Use |
|------|------|-------------|-----|
| Display | **Fjord One** | `font-display` | Hero H1 only |
| Headings | **Sora** | `font-heading` / `.bt-section-title` | H2–H4 |
| Body | **Roboto Slab** | `font-body` / default | Paragraphs |
| Mono | Geist Mono | available | Rare / technical |

**Scale**

- Section titles: `.bt-section-title` — ~1.875rem → 2.25rem → 3rem, tracking `-0.02em`, line-height ~1.15
- Body: `.bt-body` — 1rem / 2rem line-height
- Hero H1: `text-4xl` → `sm:text-6xl` → `lg:text-7xl`, tight leading
- Brand wordmark: uppercase, wide tracking (`0.12em`–`0.14em`), bold

**Rules**

- Display font = brand moments only.
- Do not use Inter, Roboto, Arial, or system stacks for UI.
- Headlines stay short; one idea per section.

---

## Layout

- **Container:** `max-w-6xl` + `px-6` via `components/layout/Container.tsx`
- **Section padding:** `py-16 sm:py-20` (dense) or `py-20 sm:py-28` (editorial)
- **Grids:** 2-col on `sm`/`md`, 4-col on `xl` for service/process cards; about = photo + text; testimonials = heading left, quote right
- **Language:** Dutch (`lang="nl"`)

---

## Section rhythm

Reuse this composition pattern across marketing pages:

1. **Hero** — full-bleed photo, dark gradient overlay, display headline, one supporting sentence, CTA pair
2. **Dark services / feature band** — `bt-fade-hero` + `bt-dots-dark`, glass cards
3. **Light process / content** — white, numbered steps or editorial
4. **About / story** — photo + long body
5. **Social proof** — light, accent-colored quotes
6. **CTA** — dark forest, centered, LogoMark, dual buttons
7. **Footer** — compact, almost-black

**One job per section:** one headline, one short support line, then content.

**Hero budget:** brand-forward display headline, one short sentence, one CTA group, one dominant full-bleed image. No stats strips, schedules, floating badges, or promo chips on hero media.

---

## Components & patterns

### Buttons

- **Primary (on light):** `rounded-full bg-accent text-accent-fg` → hover `bg-accent-hover`
- **Primary (on dark):** `rounded-full bg-surface text-foreground` → hover opacity
- **Secondary (on dark):** `rounded-full border border-surface/30–40` → stronger border on hover
- **Size:** `px-7 py-3.5 text-sm font-semibold` (page) / `px-5 py-2.5` (header)
- Often include small arrow SVG (`strokeWidth="1.5"`)

### Cards

- **Dark glass:** `rounded-2xl bg-surface/8 ring-1 ring-white/10 backdrop-blur-sm`
- **Light interactive:** `rounded-3xl bg-surface ring-1 ring-border shadow-sm` + slight lift on hover
- Cards only when they hold a distinct interactive/unit of content — never in the hero

### Icons

- Stroke SVGs, ~1.5 stroke, soft muted color (`text-surface/60` or accent on light)
- Brand mark: `LogoMark` (three-peak mountain outline)

### Atmosphere on dark sections

- Layer `bt-fade-hero` + `bt-dots-dark` (opacity ~50–70%)
- Hero: full-bleed image + left-weighted dark gradient for text legibility

### Motion

- Keep motion restrained and editorial: weight/presence, never spectacle.
- Respect `prefers-reduced-motion` globally and per component.

**Tokens (from `app/globals.css`)**

- `--bt-motion-fast: 200ms`
- `--bt-motion-base: 300ms`
- `--bt-motion-enter: 650ms`
- `--bt-motion-ease-out: cubic-bezier(0.22, 1, 0.36, 1)`

**Entry patterns**

- **Hero copy on page open:** use `.bt-enter` with delay helpers `.bt-enter-d1`, `.bt-enter-d2` for headline → body → CTA.
- **Hero media:** keep static. Never fade hero images from opacity `0` (protect LCP).
- **Below-the-fold reveal:** wrap content in `components/motion/Reveal.tsx` (IntersectionObserver, one-time reveal by default).
- **Stagger cadence:** `70ms` steps, cap practical sequencing around first 3-4 siblings.

**Interaction patterns**

- Hover: arrow gap/translate, card lift (`hover:-translate-y-0.5` to `hover:-translate-y-1`) and soft shadow.
- Carousel autoplay remains subtle (~6s) with pause on hover/focus.

**Do not add**

- No bounce/pulse CTA animations, parallax, particle effects, or flashy route transitions.

---

## Content & UX conventions

- Primary CTA from `config/site.ts` (`ctaLabel` / `ctaHref`)
- Nav from `mainNav` in `config/site.ts`
- Link trails: “Meer ontdekken” / “Meer lezen” + arrow
- Uppercase micro-labels with `tracking-widest` when used (e.g. service taglines)
- Accessibility: `aria-label` on icon buttons; decorative images `aria-hidden` / empty alt

---

## Do / don’t

### Do

- Use existing CSS variables and Tailwind theme colors
- Alternate dark forest ↔ light stone/white
- Keep brand (BergTopper / mountain) visually strong in heroes
- Prefer editorial whitespace over dense dashboards
- Ship intentional, restrained motion

### Don’t

- Purple/indigo themes, cream + terracotta AI defaults, broadsheet hairline layouts
- Flat single-color pages with no atmosphere
- Overlays on hero media (badges, chips, stickers)
- New fonts or one-off hex colors outside the token set
- Cards in the hero; inset / floating hero media cards
- Multiple competing text blocks or stat strips in the first viewport

---

## Key source files

| Concern | Path |
|---------|------|
| Tokens & helpers | `app/globals.css` |
| Fonts / shell | `app/layout.tsx` |
| Site copy / nav / CTA | `config/site.ts` |
| Container | `components/layout/Container.tsx` |
| Logo | `components/brand/LogoMark.tsx` |
| Home patterns | `components/home/*` |
