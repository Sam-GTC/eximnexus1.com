

# Nexus International 2026 Digital Flagship — Revamp Plan

## Vision

Transform the current professional EXIM consultant site into a **"Modern Agricultural Luxury"** B2B portal targeting EU and Middle East procurement officers. The design shifts from blue corporate tones to an earthy, premium palette (barn red, chilli green, metallic gold) with macro-industrial imagery and scrollytelling interactions.

---

## Design System Overhaul

**New CSS Variables (replacing current brand palette):**
- `--barn-red: 0 93% 25%` (Authority — #7C0A02)
- `--chilli-green: 108 82% 17%` (Growth — #1D4F06)
- `--metallic-gold: 51 100% 50%` (Premium CTAs — #FFD700)
- `--off-white: 60 11% 97%` (Canvas — #F9F9F7)
- `--dark-earth: 20 15% 10%` (Footer/dark sections)

**Typography change:** Replace Playfair Display with **Montserrat** (Bold for headlines). Keep Inter for body text. Update Google Fonts import and `tailwind.config.ts` font family.

**Component classes:** Sharp-edged buttons (border-radius: 0), gold gradient CTAs, barn-red left-border section headings.

---

## Section-by-Section Implementation

### 1. Hero — Split-Screen with Ken Burns Effect
- **Layout:** Two-column split. Left panel: macro harvest photography with slow zoom CSS animation. Right panel: automated packing line image with opposing zoom.
- **Copy:** "Rooted in India. Engineered for Global Retail."
- **CTAs:** Gold gradient "Request 72-Hour Sample Kit" + outline "View Compliance Map"
- **Trust strip below:** APEDA, FSSAI, ISO 22000, Halal certification badges

### 2. Origin Scroll (Farm-to-Factory Story)
- **New component: `OriginSection.tsx`**
- Horizontal timeline/path visualization: Farm → Processing → Quality Lab → Port
- Content highlighting direct-source integrity and 3-7% pricing advantage
- Scroll-triggered fade-in animations using IntersectionObserver

### 3. Dynamic Trust Module
- **New component: `TrustModule.tsx`**
- Two content variants displayed via tabs (not actual IP detection, which requires backend):
  - **Middle East tab:** SFDA/Halal icons, "7-Day Transit to Dubai" badge
  - **EU/UK tab:** BRC/GFSI protocols, "<5% Moisture Guaranteed" badge
- Each tab shows relevant certification cards and transit timelines

### 4. Product Matrix (Interactive Catalog)
- **Revamp `ProductsSection.tsx`** completely
- 3 hero product cards: Onion, Garlic, Ginger
- Each card has a **Mesh Size toggle** (Flakes / Granules / Powder) that swaps the product image and specs
- 3D hover effect via CSS perspective transform
- Pricing displayed per tonne with FOB indicator

### 5. Incoterms Calculator
- **New component: `IncotermCalculator.tsx`**
- Gold-bordered card with inputs: Destination Port (dropdown: Rotterdam, Jebel Ali, Hamburg, etc.) + Volume (MT)
- Calculates and displays estimated FOB/CIF cost with RoDTEP savings line item
- Client-side only; uses static rate tables
- Value prop text: "We pass the 3-7% government incentive directly to your bottom line."

### 6. Compliance Map
- **New component: `ComplianceMap.tsx`**
- SVG-based or image-based world map with clickable/hoverable regions (EU, Middle East, Asia)
- Clicking a region shows relevant certifications (BRC, ISO 22000, Halal, FSSAI) and a "Download Latest Lab Report" placeholder button

### 7. Sticky Progress Bar
- **New component: `ProgressBar.tsx`**
- Thin metallic-gold bar fixed at top (below header) showing: Harvesting → Processing → Quality Check → Global Transit
- Highlights current section as user scrolls through the page

### 8. Updated Existing Sections
- **StatsSection:** Restyle with new palette, add "24 MT per Container" and "72-Hour Sample Dispatch" metrics
- **TestimonialsSection:** Shift to EU/ME buyer personas (procurement managers, not Indian exporters)
- **QuoteSection:** Rename to "Request 72-Hour Sample Kit", add product/mesh-size selector, destination port field
- **Footer:** Update with new palette, add certification logos row
- **Header:** New palette, sharp-edge buttons, gold CTA, updated nav items (add "Calculator", "Compliance")
- **AboutSection:** Rewrite for agricultural processing authority, macro-industrial imagery

### 9. WhatsApp Button → "Nexus Intelligence" Bot Placeholder
- Restyle the floating button as a chat icon labeled "Nexus Intelligence"
- Opens a simple chat-style panel with a placeholder message: "Ask about lead times, pricing, or compliance"
- No actual AI backend — just a styled UI shell with a text input that shows a canned response

---

## Files to Create
1. `src/components/OriginSection.tsx` — Farm-to-factory scrollytelling
2. `src/components/TrustModule.tsx` — Geo-targeted certification tabs
3. `src/components/IncotermCalculator.tsx` — FOB/CIF calculator
4. `src/components/ComplianceMap.tsx` — Interactive certification map
5. `src/components/ProgressBar.tsx` — Sticky scroll progress indicator

## Files to Modify
1. `src/index.css` — New CSS variables, typography, component classes
2. `tailwind.config.ts` — Montserrat font, new brand colors, sharp radius
3. `src/pages/Index.tsx` — New section order and imports
4. `src/components/HeroSection.tsx` — Complete rewrite (split-screen Ken Burns)
5. `src/components/Header.tsx` — New palette, nav items, gold CTA
6. `src/components/ProductsSection.tsx` — Interactive 3D cards with mesh toggle
7. `src/components/StatsSection.tsx` — New metrics and styling
8. `src/components/AboutSection.tsx` — Agricultural processing narrative
9. `src/components/TestimonialsSection.tsx` — EU/ME buyer personas
10. `src/components/QuoteSection.tsx` — Sample kit request form
11. `src/components/GallerySection.tsx` — May merge into Origin section or restyle
12. `src/components/Footer.tsx` — New palette and certifications
13. `src/components/WhatsAppButton.tsx` — Restyle as Nexus Intelligence bot
14. `index.html` — Updated meta tags and schema markup

---

## Page Flow Order
```text
Header (sticky + progress bar)
  ↓
Hero (Split-screen Ken Burns)
  ↓
Stats (Updated metrics)
  ↓
Origin Scroll (Farm-to-Factory)
  ↓
Trust Module (EU / Middle East tabs)
  ↓
Product Matrix (Interactive 3D cards)
  ↓
Incoterms Calculator
  ↓
Compliance Map
  ↓
Testimonials (Global buyers)
  ↓
Quote / Sample Kit Request
  ↓
Footer
  ↓
Nexus Intelligence Bot (floating)
```

## Technical Notes
- All animations use CSS + IntersectionObserver (no GSAP dependency needed in React/Tailwind stack)
- Calculator is pure client-side with hardcoded rate tables — no backend required
- Geo-detection replaced with manual tab selection (no server-side logic available)
- Ken Burns effect achieved via CSS `@keyframes` scale + translate on background images
- 3D card hover uses `perspective` and `rotateY` CSS transforms

