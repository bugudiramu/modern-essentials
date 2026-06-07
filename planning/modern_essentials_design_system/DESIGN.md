# The Honest Essentials — Design System

**Version 1.0 · Living Document · Update when tokens change**

> Reference this file in `.windsurfrules` and in every component you build.  
> Every colour, spacing value, and component decision traces back to a rationale here.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Tokens](#2-color-tokens)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Border Radius](#5-border-radius)
6. [Elevation & Shadows](#6-elevation--shadows)
7. [Iconography](#7-iconography)
8. [Buttons](#8-buttons)
9. [Form Elements](#9-form-elements)
10. [Badges & Tags](#10-badges--tags)
11. [Cards](#11-cards)
12. [Navigation](#12-navigation)
13. [Subscription Toggle](#13-subscription-toggle)
14. [Trust Badges](#14-trust-badges)
15. [Feedback & States](#15-feedback--states)
16. [Motion & Animation](#16-motion--animation)
17. [Page Structure & Grid](#17-page-structure--grid)
18. [Component Patterns (from Gromuse reference)](#18-component-patterns-from-gromuse-reference)
19. [Do's and Don'ts](#19-dos-and-donts)
20. [Tailwind Config](#20-tailwind-config)

---

## 1. Design Philosophy

The Honest Essentials is a **premium, trust-first food brand**. The design language must communicate:

- **Freshness** — organic warmth, never clinical white
- **Transparency** — clean layouts, no clutter, nothing to hide
- **Premium** — confident spacing, restrained color, quality typography
- **Subscription-native** — the UI constantly nudges toward subscribing, never pushy

**Aesthetic direction:** Refined organic. Think a high-end farmers market, not a supermarket app.  
**Closest reference:** Gromuse's structural clarity + our own forest green brand identity.  
**What to avoid:** Purple gradients, glassmorphism, generic food-app green (#4CAF50),
pure white pages, cramped layouts.

---

## 2. Color Tokens

### CSS Custom Properties (add to `globals.css`)

```css
:root {
  /* ── Primary — Forest ──────────────────────────────── */
  --color-forest-50: #ecfdf5;
  --color-forest-100: #d1fae5;
  --color-forest-200: #a7f3d0;
  --color-forest-400: #40916c;
  --color-forest-600: #2d6a4f; /* hover state for primary */
  --color-forest-800: #1b4332; /* ★ PRIMARY BRAND COLOR */
  --color-forest-900: #0d2b1f; /* nav background, dark surfaces */

  /* ── Accent — Amber (CTA only) ─────────────────────── */
  --color-amber-50: #fef3c7;
  --color-amber-100: #fde68a;
  --color-amber-400: #f59e0b;
  --color-amber-600: #c8730a; /* ★ CTA BUTTON COLOR */
  --color-amber-800: #a85f08; /* hover state for amber CTA */

  /* ── Neutrals ───────────────────────────────────────── */
  --color-cream: #fafaf7; /* ★ PAGE BACKGROUND — never pure white */
  --color-parchment: #f4f1eb; /* card backgrounds, section fills */
  --color-linen: #e7e5e0; /* borders, dividers */
  --color-linen-strong: #c9c5bc; /* stronger borders, input borders */
  --color-dust: #a8a29e; /* placeholder text, disabled */
  --color-stone: #78716c; /* secondary text, labels, captions */
  --color-ink: #1c1917; /* ★ PRIMARY TEXT — never pure #000 */

  /* ── Semantic ───────────────────────────────────────── */
  --color-success-bg: #dcfce7;
  --color-success-text: #166534;
  --color-error-bg: #fee2e2;
  --color-error-text: #991b1b;
  --color-warning-bg: #fef3c7;
  --color-warning-text: #92400e;
  --color-info-bg: #dbeafe;
  --color-info-text: #1e40af;

  /* ── Functional aliases (use these in components) ───── */
  --bg-page: var(--color-cream);
  --bg-surface: var(--color-parchment);
  --bg-elevated: #ffffff;
  --border-default: var(--color-linen);
  --border-strong: var(--color-linen-strong);
  --text-primary: var(--color-ink);
  --text-secondary: var(--color-stone);
  --text-placeholder: var(--color-dust);
  --brand-primary: var(--color-forest-800);
  --brand-cta: var(--color-amber-600);
}
```

### Usage Rules

| Token                | Use for                                       | Never use for                 |
| -------------------- | --------------------------------------------- | ----------------------------- |
| `--color-forest-800` | Primary buttons, nav, headings, links         | Decorative illustrations      |
| `--color-amber-600`  | Subscribe CTA, savings badges, primary action | Secondary actions, icons      |
| `--color-cream`      | Every page background                         | Cards (use parchment instead) |
| `--color-parchment`  | Card backgrounds, input fills, section bg     | Page background               |
| `--color-ink`        | All body text, headings                       | Borders                       |
| `--color-stone`      | Labels, captions, secondary text              | Headings                      |
| `--color-linen`      | All borders and dividers                      | Text                          |

**Amber is rationed.** If amber appears on 5 elements on a page, none of them feel like CTAs.
Limit to: Subscribe button, savings badge, one highlight per section.

---

## 3. Typography

### Font Stack

```css
:root {
  --font-serif: Georgia, "Times New Roman", serif;
  --font-sans:
    -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Helvetica Neue",
    sans-serif;
  --font-mono: "SF Mono", "Cascadia Code", "Courier New", monospace;
}
```

> **Why system fonts?** Loading speed is a direct conversion metric for a food brand.
> System fonts render instantly and look native on every device.
> Georgia for serif is pre-installed everywhere and has warmth.

### Type Scale

```css
/* Display — Georgia only, hero headlines */
.text-display {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

/* H1 — Section heroes */
.text-h1 {
  font-family: var(--font-sans);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* H2 — Section titles */
.text-h2 {
  font-family: var(--font-sans);
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: var(--text-primary);
}

/* H3 — Card titles, sub-section titles */
.text-h3 {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
}

/* H4 — Form labels (large), widget titles */
.text-h4 {
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
}

/* Body Large — Hero subtext, product descriptions */
.text-body-lg {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* Body — Default paragraph text */
.text-body {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* Small — Helper text, hints, metadata */
.text-sm {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Caption — Timestamps, batch IDs, fine print */
.text-caption {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Label / Tag — ALL CAPS, uppercase only at this size */
.text-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* Code / Batch ID */
.text-mono {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-forest-800);
  background: var(--color-parchment);
  padding: 3px 8px;
  border-radius: 4px;
}

/* Price — Product pricing */
.text-price {
  font-family: var(--font-sans);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-primary);
}

.text-price-original {
  font-size: 15px;
  font-weight: 400;
  color: var(--text-placeholder);
  text-decoration: line-through;
}
```

### Typography Rules

- **Georgia serif = hero display text only.** Never use it in buttons, nav, inputs, or cards.
- **Never use bold above 700.** 900 weight looks aggressive and off-brand.
- **Never use ALL CAPS above 13px.** Only `text-label` at 11px uses uppercase.
- **Line height:** Body text always ≥ 1.6. Headings always ≤ 1.3.
- **Max paragraph width:** 65ch. Never let lines exceed this or reading fatigue kills conversions.

---

## 4. Spacing & Layout

### Spacing Scale

```css
:root {
  --space-1: 4px; /* micro — icon padding, tight gaps */
  --space-2: 8px; /* inline gaps, badge padding */
  --space-3: 12px; /* component internal gaps */
  --space-4: 16px; /* card padding (mobile), list item gaps */
  --space-5: 20px; /* card padding standard */
  --space-6: 24px; /* card padding (desktop) */
  --space-8: 32px; /* section internal spacing */
  --space-10: 40px; /* between-component gaps */
  --space-12: 48px; /* section vertical padding */
  --space-16: 64px; /* page section padding (desktop) */
  --space-20: 80px; /* hero section padding */
  --space-24: 96px; /* major page sections */
}
```

### Page Layout

```css
/* Max content width */
--max-width-content: 1200px;
--max-width-narrow: 768px; /* policy pages, blog */
--max-width-wide: 1400px; /* full-bleed sections */

/* Page horizontal padding */
--page-px-mobile: 16px;
--page-px-tablet: 32px;
--page-px-desktop: 48px;
```

### Grid

```css
/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-5);
}

/* 2-column layout (checkout, settings) */
.layout-two-col {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-6);
}

/* Standard section padding */
.section {
  padding: var(--space-16) var(--page-px-desktop);
}
```

---

## 5. Border Radius

```css
:root {
  --radius-xs: 2px; /* table cells, very small chips */
  --radius-sm: 4px; /* badges, inputs, small chips */
  --radius-md: 8px; /* buttons, standard cards, dropdowns */
  --radius-lg: 12px; /* large cards, modals, bottom sheets */
  --radius-xl: 16px; /* hero blocks, page-level containers */
  --radius-2xl: 24px; /* marketing sections (use sparingly) */
  --radius-full: 9999px; /* pills, avatars, toggle switches */
}
```

**Usage:**

- `radius-sm` → badges, tags, input fields, table rows
- `radius-md` → buttons, product cards, dropdowns, tooltips
- `radius-lg` → modals, side sheets, large feature cards
- `radius-xl` → full-width hero blocks, page banners
- `radius-full` → subscription toggle pill, avatar, quantity stepper

---

## 6. Elevation & Shadows

Use shadows **sparingly** — only when a surface needs to float above the page.

```css
:root {
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.08), 0 8px 10px rgba(0, 0, 0, 0.04);
  --shadow-focus: 0 0 0 3px rgba(27, 67, 50, 0.2); /* forest green ring */
  --shadow-focus-amber: 0 0 0 3px rgba(200, 115, 10, 0.25);
}
```

**Usage:**

- `shadow-none` / border only → flat cards, list items on parchment
- `shadow-sm` → product cards on hover, active inputs
- `shadow-md` → search dropdown, date picker
- `shadow-lg` → modals, popovers, bottom sheets
- `shadow-focus` → all focusable elements (keyboard accessibility)

---

## 7. Iconography

### Icon Library

Use **Lucide Icons** (`lucide-react`). Already in the stack. Do not mix icon libraries.

```bash
# Already installed — don't reinstall
pnpm add lucide-react
```

### Icon Sizes

```css
:root {
  --icon-xs: 12px; /* inline with caption text */
  --icon-sm: 16px; /* inline with body text, badges */
  --icon-md: 20px; /* buttons, nav links, list items */
  --icon-lg: 24px; /* section icons, trust badges */
  --icon-xl: 32px; /* feature cards, empty states */
  --icon-2xl: 48px; /* hero icon blocks */
}
```

### Icon Usage in Buttons

```tsx
// Icon + text — gap always 6px for sm, 8px for default, 10px for lg
<button className="btn-primary">
  <ShoppingCart size={18} />
  <span>Add to cart</span>
</button>

// Icon only — needs aria-label
<button className="btn-icon" aria-label="Search">
  <Search size={20} />
</button>
```

### Icon Color Rules

- Icons inside forest buttons → `#FFFFFF` (opacity 90%)
- Icons inside ghost/outline buttons → `currentColor` (inherits text color)
- Nav icons on forest background → `rgba(255,255,255,0.80)`
- Cart badge count → amber background, white text
- Trust badge icons → white on forest green background tile

### Key Icons by Feature

| Feature             | Icon (Lucide)      |
| ------------------- | ------------------ |
| Cart                | `ShoppingCart`     |
| Search              | `Search`           |
| User / Profile      | `User`             |
| Subscribe           | `RefreshCw`        |
| Farm / Traceability | `Leaf` or `MapPin` |
| QC / Verified       | `ShieldCheck`      |
| Delivery            | `Truck`            |
| Cancel anytime      | `Unlock`           |
| Fresh guarantee     | `Sparkles`         |
| Pause subscription  | `PauseCircle`      |
| Skip delivery       | `SkipForward`      |
| Rewards / Points    | `Star`             |
| WhatsApp            | `MessageCircle`    |
| Batch ID / Code     | `QrCode`           |
| Warning             | `AlertTriangle`    |
| Error               | `XCircle`          |
| Success             | `CheckCircle`      |
| Info                | `Info`             |

---

## 8. Buttons

### Base Classes

```css
/* Base — apply to all buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition:
    background 150ms ease,
    box-shadow 150ms ease,
    opacity 150ms ease;
  white-space: nowrap;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Variants

```css
/* Primary — main page actions, add to cart */
.btn-primary {
  background: var(--color-forest-800);
  color: #fff;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 15px;
}
.btn-primary:hover {
  background: var(--color-forest-600);
}
.btn-primary:active {
  background: var(--color-forest-900);
}

/* CTA / Subscribe — amber, used ONLY for subscribe/upgrade actions */
.btn-cta {
  background: var(--color-amber-600);
  color: #fff;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 600;
}
.btn-cta:hover {
  background: var(--color-amber-800);
}

/* Secondary / Outline */
.btn-secondary {
  background: transparent;
  color: var(--color-forest-800);
  border: 1.5px solid var(--color-forest-800);
  padding: 11px 22px;
  border-radius: var(--radius-md);
  font-size: 15px;
}
.btn-secondary:hover {
  background: var(--color-forest-50);
}

/* Ghost — tertiary actions */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-default);
  padding: 11px 22px;
  border-radius: var(--radius-md);
  font-size: 15px;
}
.btn-ghost:hover {
  background: var(--color-parchment);
  color: var(--text-primary);
}

/* Destructive — cancel subscription, delete actions */
.btn-destructive {
  background: transparent;
  color: var(--color-error-text);
  border: 1.5px solid #fca5a5;
  padding: 11px 22px;
  border-radius: var(--radius-md);
  font-size: 15px;
}
.btn-destructive:hover {
  background: var(--color-error-bg);
}

/* Link — inline text actions */
.btn-link {
  background: transparent;
  border: none;
  color: var(--color-forest-800);
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

### Size Modifiers

```css
.btn-sm {
  padding: 8px 16px;
  font-size: 13px;
  border-radius: var(--radius-sm);
  gap: 6px;
}
.btn-md {
  /* default — 12px 24px */
}
.btn-lg {
  padding: 16px 32px;
  font-size: 17px;
  gap: 10px;
}
.btn-xl {
  padding: 18px 36px;
  font-size: 18px;
  font-weight: 600;
  gap: 12px;
}

/* Full width — checkout, subscribe CTA */
.btn-full {
  width: 100%;
}

/* Pill — subscription toggle, filter chips */
.btn-pill {
  border-radius: var(--radius-full);
}

/* Icon only */
.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: transparent;
  color: var(--text-secondary);
}
.btn-icon:hover {
  background: var(--color-parchment);
  color: var(--text-primary);
}
```

### Button Rules

- **Never use amber for non-subscribe actions.** It trains users to associate amber with
  the highest-value action. Use forest primary for all other CTAs.
- **Full-width buttons** on mobile only inside fixed bottom bars and checkout.
- **Loading state:** Replace icon with `<Loader2 className="animate-spin" />`,
  disable the button, keep text (e.g. "Subscribing…").
- **Minimum touch target:** 44×44px on mobile. Pad icon-only buttons to meet this.

---

## 9. Form Elements

### Input Fields

```css
.input {
  width: 100%;
  padding: 11px 14px;
  font-family: var(--font-sans);
  font-size: 16px; /* 16px prevents iOS zoom on focus */
  color: var(--text-primary);
  background: var(--bg-elevated);
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-md);
  outline: none;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
  -webkit-appearance: none;
}

.input::placeholder {
  color: var(--text-placeholder);
}

.input:hover {
  border-color: var(--color-stone);
}
.input:focus {
  border-color: var(--color-forest-800);
  box-shadow: var(--shadow-focus);
}

/* Error state */
.input--error {
  border-color: #fca5a5;
}
.input--error:focus {
  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.25);
}

/* Success state */
.input--success {
  border-color: #86efac;
}

/* Disabled state */
.input:disabled {
  background: var(--color-parchment);
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Label

```css
.label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 5px;
  letter-spacing: 0.01em;
}

.label-required::after {
  content: " *";
  color: var(--color-error-text);
}
```

### Helper / Error Text

```css
.field-hint {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}
.field-error {
  font-size: 12px;
  color: var(--color-error-text);
  margin-top: 4px;
}
```

### Select

```css
.select {
  /* Inherits .input styles */
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2378716C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}
```

### Checkbox & Radio

```css
/* Use shadcn/ui Checkbox and RadioGroup components.
   Override with brand tokens: */
[data-state="checked"] {
  background: var(--color-forest-800) !important;
}
[data-state="checked"] .indicator {
  color: white !important;
}
```

### Quantity Stepper (from Gromuse reference)

```css
.qty-stepper {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-full); /* pill shape, like Gromuse */
  overflow: hidden;
}

.qty-stepper__btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  color: var(--text-secondary);
  transition: background 150ms;
}
.qty-stepper__btn:hover {
  background: var(--color-parchment);
  color: var(--text-primary);
}

.qty-stepper__value {
  min-width: 48px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  border-left: 1px solid var(--border-default);
  border-right: 1px solid var(--border-default);
  padding: 0 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## 10. Badges & Tags

```css
/* Base */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
}

/* Variants */
.badge-forest {
  background: var(--color-forest-100);
  color: var(--color-forest-800);
}
.badge-amber {
  background: var(--color-amber-50);
  color: var(--color-amber-800);
}
.badge-stone {
  background: var(--color-parchment);
  color: var(--text-secondary);
}
.badge-success {
  background: var(--color-success-bg);
  color: var(--color-success-text);
}
.badge-error {
  background: var(--color-error-bg);
  color: var(--color-error-text);
}
.badge-info {
  background: var(--color-info-bg);
  color: var(--color-info-text);
}
.badge-outline {
  background: transparent;
  border: 1px solid var(--border-default);
  color: var(--text-secondary);
}

/* Solid — for nav cart count, notification dot */
.badge-solid-amber {
  background: var(--color-amber-600);
  color: #fff;
}
.badge-solid-forest {
  background: var(--color-forest-800);
  color: #fff;
}

/* Category pill — filter chips on product listing (from Gromuse) */
.filter-chip {
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 14px;
  font-weight: 500;
  border: 1.5px solid var(--border-default);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 150ms;
}
.filter-chip.active {
  background: var(--color-forest-800);
  border-color: var(--color-forest-800);
  color: #fff;
}
.filter-chip:hover:not(.active) {
  border-color: var(--color-forest-400);
  color: var(--color-forest-800);
}
```

---

## 11. Cards

### Product Card

```css
.product-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;
}

.product-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.product-card__image {
  background: var(--color-parchment);
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.product-card__body {
  padding: var(--space-5);
}

.product-card__category {
  /* uses .text-label */
  margin-bottom: var(--space-1);
}

.product-card__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
  line-height: 1.3;
}

.product-card__description {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-4);
  /* Clamp to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Add-to-cart area — Gromuse style bottom bar */
.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-5);
  border-top: 1px solid var(--border-default);
  background: var(--color-parchment);
}
```

### Quick-Add Button (Gromuse-style `+` button)

```css
.quick-add {
  width: 100%;
  height: 48px;
  background: var(--color-parchment);
  border: none;
  border-top: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  font-weight: 300;
  color: var(--color-forest-800);
  transition: background 150ms;
}
.quick-add:hover {
  background: var(--color-forest-100);
}
```

### Feature / Trust Card

```css
.feature-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  background: var(--color-forest-800);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  color: #fff;
}
```

---

## 12. Navigation

### Structure (from Gromuse reference, adapted for The Honest Essentials)

```
[Brand logo]  [Nav links: Shop · Farms · About · Blog]  [Search icon · Cart · Subscribe btn]
```

```css
.nav {
  background: var(--color-forest-900);
  height: 64px;
  padding: 0 var(--page-px-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav__brand {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.02em;
  text-decoration: none;
}

.nav__links {
  display: flex;
  gap: var(--space-8);
}

.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 150ms;
}
.nav__link:hover,
.nav__link.active {
  color: #fff;
}

.nav__cta {
  /* Uses .btn-cta at small size */
  padding: 9px 20px;
  font-size: 14px;
}

.nav__icon-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: background 150ms;
  position: relative;
}
.nav__icon-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Cart badge */
.nav__cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 17px;
  height: 17px;
  border-radius: var(--radius-full);
  background: var(--color-amber-600);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Mobile Nav

```css
/* Hamburger opens a bottom sheet / side drawer */
.mobile-nav {
  /* Bottom navigation bar on mobile */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--color-forest-900);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
}
/* Items: Home, Shop, Subscriptions, Profile */
```

---

## 13. Subscription Toggle

This is the most important UI component. Subscription is pre-selected.
One-time is de-emphasised.

```css
.sub-toggle-group {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
}

.sub-toggle-option {
  background: var(--color-parchment);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--space-4);
  cursor: pointer;
  transition:
    border-color 150ms,
    background 150ms;
  margin-bottom: var(--space-2);
}
.sub-toggle-option:last-child {
  margin-bottom: 0;
}

/* Selected state */
.sub-toggle-option.selected {
  border-color: var(--color-forest-800);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}

/* Layout inside each option */
.sub-toggle-option__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

/* Radio dot */
.sub-toggle-option__radio {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  border: 2px solid var(--border-strong);
  flex-shrink: 0;
  transition: all 150ms;
}
.sub-toggle-option.selected .sub-toggle-option__radio {
  border-color: var(--color-forest-800);
  background: var(--color-forest-800);
  /* White dot via box-shadow */
  box-shadow: inset 0 0 0 3px var(--bg-elevated);
}

/* Savings badge — inside the subscribe option */
.sub-toggle-option__save {
  /* .badge-success */
  font-size: 11px;
  font-weight: 700;
}

/* Price */
.sub-toggle-option__price {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  text-align: right;
}
```

---

## 14. Trust Badges

```css
.trust-strip {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--bg-surface);
  border-radius: var(--radius-md);
  flex: 1;
  min-width: 140px;
}

.trust-badge__icon {
  width: 36px;
  height: 36px;
  background: var(--color-forest-800);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.trust-badge__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.trust-badge__subtitle {
  font-size: 11px;
  color: var(--text-secondary);
}
```

**Four trust badges to always show near checkout / product page:**

1. Farm traceable — Scan QR on box
2. QC certified — Every batch tested
3. Cancel anytime — No lock-in ever
4. Fresh guarantee — Replace if not happy

---

## 15. Feedback & States

### Alert / Toast

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  border-left: 4px solid;
  font-size: 14px;
  line-height: 1.5;
}

.alert-success {
  background: var(--color-success-bg);
  border-color: var(--color-success-text);
  color: var(--color-success-text);
}
.alert-error {
  background: var(--color-error-bg);
  border-color: var(--color-error-text);
  color: var(--color-error-text);
}
.alert-warning {
  background: var(--color-warning-bg);
  border-color: var(--color-warning-text);
  color: var(--color-warning-text);
}
.alert-info {
  background: var(--color-info-bg);
  border-color: var(--color-info-text);
  color: var(--color-info-text);
}
```

### Empty States

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-16) var(--space-8);
  gap: var(--space-4);
}

.empty-state__icon {
  width: 64px;
  height: 64px;
  background: var(--color-forest-100);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-forest-800);
}

.empty-state__title {
  /* .text-h3 */
}
.empty-state__description {
  /* .text-body */
  max-width: 40ch;
}
```

### Loading Skeleton

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-parchment) 25%,
    var(--color-linen) 50%,
    var(--color-parchment) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

## 16. Motion & Animation

### Transition Defaults

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 350ms ease;
  --transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Rules

- **All hover states:** `transition: 150ms ease` — fast, snappy
- **Modal / sheet open:** `350ms ease` with slide + fade
- **Page transitions:** `200ms` fade (Next.js App Router layout transitions)
- **Subscription toggle click:** `200ms ease` with a slight scale on the radio dot
- **Cart item add:** Fly-to-cart animation (`200ms spring`)
- **Never animate layout properties** (width, height). Animate `transform` and `opacity` only.
- **Respect prefers-reduced-motion:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 17. Page Structure & Grid

### Page Anatomy

```
┌─────────────────────────────────────────────────────┐
│  TOP BANNER (optional): "Free delivery over Rs 499"  │
│  height: 36px · bg: amber-600 · text: white          │
├─────────────────────────────────────────────────────┤
│  NAVIGATION (sticky)                                 │
│  height: 64px · bg: forest-900                       │
├─────────────────────────────────────────────────────┤
│  PAGE CONTENT (max-width: 1200px, centered)          │
│  padding: 0 48px (desktop) / 0 16px (mobile)         │
│                                                      │
│  ┌── SECTION ────────────────────────────────────┐   │
│  │  padding: 64px 0 (desktop) / 40px 0 (mobile) │   │
│  └───────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  FOOTER                                              │
│  bg: forest-900 · 4 columns                          │
└─────────────────────────────────────────────────────┘
```

### Breakpoints

```css
/* Mobile first */
--bp-sm: 480px; /* large phones */
--bp-md: 768px; /* tablets */
--bp-lg: 1024px; /* small desktop */
--bp-xl: 1280px; /* standard desktop */
--bp-2xl: 1440px; /* wide desktop */
```

### Search Dropdown (from Gromuse reference)

```css
.search-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-5);
  z-index: 200;
}

/* Sections inside dropdown: 
   "Recommended" / "Popular" / "Suggestions" + "Products" (2 col) */
.search-dropdown__section-title {
  /* .text-label */
  margin-bottom: var(--space-3);
}

.search-dropdown__result {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 150ms;
}
.search-dropdown__result:hover {
  background: var(--color-parchment);
}
```

### Checkout Layout (from Gromuse reference)

```css
/* Two-column: left (delivery info + order review) | right (order summary) */
.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-6);
  align-items: start;
}

@media (max-width: 768px) {
  .checkout-layout {
    grid-template-columns: 1fr;
  }
  /* Order summary moves above on mobile */
}

/* Order summary card (sticky on desktop) */
.order-summary {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: sticky;
  top: calc(64px + var(--space-6)); /* below nav */
}
```

---

## 18. Component Patterns (from Gromuse Reference)

These patterns from the Gromuse screenshots translate well to The Honest Essentials with brand tokens applied.

### Announcement Bar (top of page)

```tsx
// bg: amber-600, height: 36px, dismissible
<div className="bg-amber-600 text-white text-sm font-medium text-center py-2 px-4">
  Free delivery on orders above Rs 499 ·
  <a href="/subscribe" className="underline ml-1">
    Subscribe and save 10%
  </a>
</div>
```

### Product Listing Filter Bar

```
[All Categories ▼]  [Price ▼]  [Subscription ▼]  [Farm ▼]    [Sort by ▼]
```

- Pills with forest active state (from Gromuse filter chips)
- Sticky below nav on scroll
- Mobile: horizontal scroll

### Order Confirmed Modal (from Gromuse screenshot 10)

```
[Checkmark icon — forest-green, large]
Order Confirmed
We've sent a confirmation to your WhatsApp + email.
[View order details]  [Continue shopping]
```

- Use `CheckCircle` from Lucide, not a 3D checkmark
- Background overlay: `rgba(0,0,0,0.5)` backdrop blur
- Center modal: max-width 400px, radius-xl, shadow-xl

### "Others store" / Similar Products (from Gromuse screenshots 6–7)

Adapt as: **"You might also like"** or **"Add to your delivery"**

```css
.upsell-strip {
  display: flex;
  gap: var(--space-4);
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: var(--space-2);
}
.upsell-strip::-webkit-scrollbar {
  display: none;
}
```

---

## 19. Do's and Don'ts

### Do ✅

- Use `--color-cream` (#FAFAF7) as every page background — never pure white
- Use Georgia serif **only** for display/hero headlines (1–2 per page max)
- Reserve amber **exclusively** for subscribe CTAs and savings indicators
- Show subscription savings next to or below every price
- Include trust badges near every purchase CTA
- Use `16px` font-size on all inputs (prevents iOS auto-zoom)
- Add `aria-label` to all icon-only buttons
- Use `--color-ink` (#1C1917) not #000000 for text
- Minimum 44×44px touch targets on mobile
- Add skeleton loaders for all async content

### Don't ❌

- Don't use pure white (#FFFFFF) as a page background
- Don't use Georgia serif in buttons, inputs, nav, or labels
- Don't use amber on secondary actions, icons, or decorative elements
- Don't use gradients, glassmorphism, or complex shadows on backgrounds
- Don't use more than 2 brand colours in a single component
- Don't use ALL CAPS on text larger than 13px
- Don't make one-time price more prominent than subscription price
- Don't use blue for brand elements (reserved for info state only)
- Don't add drop shadows to text
- Don't use `#000` or `#fff` directly — use token names

---

## 20. Tailwind Config

Add to `tailwind.config.ts` at repo root (or `packages/config/tailwind.config.ts`):

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./apps/web/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/admin/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Forest
        forest: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#40916C",
          600: "#2D6A4F",
          800: "#1B4332", // ★ brand primary
          900: "#0D2B1F",
        },
        // Accent — Amber (CTA only)
        amber: {
          50: "#FEF3C7",
          100: "#FDE68A",
          400: "#F59E0B",
          600: "#C8730A", // ★ CTA
          800: "#A85F08",
        },
        // Neutrals
        cream: "#FAFAF7",
        parchment: "#F4F1EB",
        linen: {
          DEFAULT: "#E7E5E0",
          strong: "#C9C5BC",
        },
        dust: "#A8A29E",
        stone: "#78716C",
        ink: "#1C1917",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: ["SF Mono", "Cascadia Code", "Courier New", "monospace"],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.06)",
        sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)",
        lg: "0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)",
        xl: "0 20px 25px rgba(0,0,0,0.08), 0 8px 10px rgba(0,0,0,0.04)",
        focus: "0 0 0 3px rgba(27,67,50,0.20)",
        "focus-amber": "0 0 0 3px rgba(200,115,10,0.25)",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      maxWidth: {
        content: "1200px",
        narrow: "768px",
        wide: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## What to Add to `.windsurfrules`

Append this section:

```
## Design system
Reference: DESIGN.md in repo root — read before creating any component.

Key rules (memorise these):
- Page background: ALWAYS #FAFAF7 (--color-cream), NEVER #FFFFFF
- Primary colour: #1B4332 (--color-forest-800) for buttons/nav/links
- CTA colour: #C8730A (--color-amber-600) for subscribe actions ONLY
- Text: #1C1917 (--color-ink) not #000; #78716C (--color-stone) for secondary
- Serif font (Georgia): display headlines ONLY — never in buttons/inputs/nav
- Sans font: system-ui stack for ALL UI text
- Borders: 1px solid #E7E5E0 (--color-linen)
- Border radius: 4px=sm 8px=md 12px=lg 16px=xl 9999px=full
- Icons: lucide-react only — no mixing icon libraries
- Input font-size: always 16px minimum (iOS zoom prevention)
```

---

_Modern Essentials Design System · v1.0 · March 2026_  
_Owner: Founder / CTO · Review quarterly or on any major brand change_
