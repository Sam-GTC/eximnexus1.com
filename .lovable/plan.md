

# Fix Broken Sections + Match SKT Import/Export Theme Style

## Problem Diagnosis

All 10 middle sections (Stats through Quote) exist in the DOM with proper heights but are visually invisible. The page jumps from Hero directly to Footer. The root cause is likely one of:

1. **`Container` icon** imported in `StatsSection.tsx` may not exist in the installed lucide-react version, causing a silent crash
2. **CSS stacking** — the Hero's `min-h-screen` with `overflow-hidden` plus the Footer's dark background may be visually covering the sections
3. **Color collision** — sections with `bg-background` (off-white) may be rendering but the text/content is invisible due to CSS variable conflicts

## Fix Plan (Phase 1: Make sections visible)

### Step 1: Fix StatsSection icon import
Replace `Container` with `Box` from lucide-react (guaranteed to exist). This eliminates the most likely crash point.

### Step 2: Add scroll-reveal IntersectionObserver to all sections
Currently only `OriginSection` uses `reveal-on-scroll`. Add a global scroll-reveal hook or remove `reveal-on-scroll` dependency entirely — make all sections visible by default rather than starting at `opacity: 0`.

### Step 3: Verify z-index layering
Ensure Hero section doesn't overlay subsequent sections. The Hero uses `relative` + `z-10` which could stack above sibling sections. Add explicit `relative z-0` to each section.

## Phase 2: Match SKT Import/Export Theme Visual Style

### Layout patterns to replicate from SKT theme:
- **Full-width alternating sections** with stronger visual separation (borders + padding)
- **Card grid layouts** with subtle box shadows and hover lift effects
- **Service/product icon cards** in 3-4 column grids
- **CTA banners** between sections (full-width colored strips with centered text + button)
- **Image + text split sections** (50/50 layout with image on alternating sides)

### Color adjustments:
Keep the current barn-red/chilli-green/gold palette but add stronger contrast between sections — alternate between `bg-background`, `bg-muted`, and `bg-dark-earth` more deliberately.

### Typography refinements:
- Increase section heading sizes on desktop
- Add decorative elements (underlines, accent bars) below key headings
- Stronger visual hierarchy between section label → heading → subtitle

## Files to Modify

1. `src/components/StatsSection.tsx` — Fix `Container` → `Box` import
2. `src/index.css` — Remove or modify `reveal-on-scroll` default opacity:0 behavior; add section separator styles
3. `src/components/OriginSection.tsx` — Make content visible by default, animate only on scroll
4. `src/components/HeroSection.tsx` — Ensure no z-index stacking issues
5. `src/components/AboutSection.tsx` — Add alternating image layout styling
6. `src/components/ProductsSection.tsx` — Enhance card hover effects
7. `src/components/Footer.tsx` — Add CTA banner strip above footer
8. `src/pages/Index.tsx` — Add CTA divider components between sections

## Implementation Order

1. Fix the rendering bug first (Steps 1-3)
2. Verify all sections are visible
3. Apply SKT-style visual enhancements
4. Test mobile responsiveness

