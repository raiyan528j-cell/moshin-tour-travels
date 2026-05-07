# Design Brief — Moshin Tour and Travels (Premium Edition)

## Foundation
Premium, conversion-focused travel + taxi booking platform. Blue-to-purple gradient (OKLCH 260–280°) journey metaphor. Bright green WhatsApp (#25D366/OKLCH 0.55 0.2 130) for seamless WhatsApp bookings. Alternating white/light grey/dark section backgrounds for visual rhythm. Large, bold typography + generous spacing. Editorial, trust-focused aesthetic inspired by Linear, Stripe, Apple.

## Tone & Differentiation
Refined luxury travel + taxi service for premium Indian clientele. Blue gradient = sky/journey/premium travel. Green WhatsApp = instant, frictionless booking. Premium shadows (card < card-hover < premium) create depth hierarchy. Real vehicle/destination imagery = trust. Bold Poppins headings (36–60px) + expansive section padding (py-20 md:py-28 lg:py-36) = confidence + breathing room. Every interaction nudges toward WhatsApp CTA. Conversion-first, design speaks premium ₹40,000+ business.

## Palette

| Token | Light OKLCH | Dark OKLCH | Usage |
|-------|-------------|-----------|-------|
| primary | 0.5 0.15 260 | 0.65 0.18 270 | CTAs, hero accents, blue gradient base, featured pricing border |
| secondary | 0.65 0.18 280 | 0.75 0.2 280 | Purple accents, gradient highlights, secondary hover states |
| accent | 0.58 0.2 265 | 0.7 0.2 265 | Gradient elements, hero text, divider accents |
| whatsapp | 0.55 0.2 130 | 0.55 0.2 130 | Bright green booking CTAs, floating action button, scale 1.05 hover |
| background | 0.98 0.005 70 | 0.12 0.02 250 | Main white/light surface, alternating section base |
| muted-section | 0.93 0.01 70 | 0.25 0.02 250 | Alternating light grey sections (muted/25 opacity), subtle rhythm |
| dark-section | — | 0.15 0.02 250 | Dark hero overlay, testimonial/feature sections, high contrast |
| card | 1.0 0.001 0 | 0.18 0.02 250 | Elevated card surfaces, rounded-3xl, premium depth |
| foreground | 0.12 0.04 250 | 0.95 0.01 70 | Body text, high contrast readability |
| destructive | 0.55 0.22 25 | 0.65 0.19 22 | Alerts, form errors, warnings |

## Typography
**Display:** Poppins 600–700 (bold, luxury travel branding, H1 36–60px/bold, H2 28–40px/bold, CTAs)  
**Body:** Inter 400–600 (friendly, accessible, 16px body copy, 14px metadata, 18px callouts)  
**Mono:** Geist Mono 400 (pricing display, technical elements, call-to-action numbers)

## Spatial Composition
**Base rhythm:** 16px (4px grid alignment)  
**Section spacing:** py-20 md:py-28 lg:py-36 for consistent vertical breathing room  
**Card spacing:** gap-6 md:gap-8 between cards, 24px internal padding mobile/desktop  
**Hero:** Full-width overlay image, 100–140px padding v. mobile, 240–340px desktop, centered large H1  
**Pricing cards:** gap-6 md:gap-8, featured card scale-105 md:scale-110 with card-featured shadow  
**Grid:** 1 col mobile, 2 col tablet (≥768px), 3 col desktop (≥1024px), centered container max 1400px

## Elevation & Depth

| Layer | Shadow | Use |
|-------|--------|-----|
| soft-sm | 0 2px 4px rgba(18,64,250,0.08) | Subtle micro-interactions |
| card | 0 4px 16px rgba(74,90,188,0.12) | Default card base state, elevated surfaces |
| card-hover | 0 16px 32px rgba(74,90,188,0.22) | Card hover lift (hover:-translate-y-2) |
| premium | 0 24px 48px rgba(74,90,188,0.28) | Premium tier cards, featured pricing, elevation |
| premium-lg | 0 24px 56px rgba(74,90,188,0.32) + 0 12px 20px rgba(74,90,188,0.15) | Hero CTA, featured section emphasis |
| card-featured | 0 20px 44px rgba(74,90,188,0.25) + 0 8px 16px rgba(107,91,168,0.15) | Highlighted pricing card, primary focus |

## Structural Zones

| Zone | Background | Border | Shadow | Motion |
|------|------------|--------|--------|--------|
| Nav | card + glassmorphism | subtle bottom | none base, md on scroll-fixed | fade-in on load |
| Hero | gradient-primary + dark overlay | none | none | fade-in-up H1, slide-up-fade CTA |
| Pricing section | white / muted/25 alternating | subtle dividers | none base | fade-in-up cards staggered |
| Feature cards | card (rounded-3xl) | border/40 | card default, card-hover on hover | scale-in-smooth 0.4s, card-lift -translate-y-2 |
| Featured card | gradient-to-br (white→muted/30) | primary/10 subtle | card-featured premium-lg | scale-105 base, glow on hover |
| CTAs primary | gradient-primary | none | soft-sm base, premium-lg hover | transition-smooth scale 1.05 |
| CTAs whatsapp | whatsapp green (#25D366) | none | soft-sm base, premium-lg hover | button-bounce on load, scale 1.05 active hover |
| Dividers | gradient-primary fading | none | none | none (visual rhythm only) |
| Footer | background | subtle top border | none | none |

## Component Patterns
**Buttons:** Primary gradient (blue→purple, white text, px-6 py-3), WhatsApp (bright green #25D366, dark text, scale 1.05 on hover, shadow-premium on focus), Secondary (outline), Tertiary (text-only)  
**Cards:** Premium depth (rounded-3xl, border-border/40, shadow-lg → shadow-premium on hover, -translate-y-2 lift), content hierarchy, inline CTA  
**Forms:** Minimal aesthetic, subtle input borders, uppercase labels, 16px base  
**Navigation:** Sticky glassmorphism fade on scroll, mobile hamburger collapse, smooth scroll anchors  
**Pricing cards:** 3 tiers (Economy/Premium/SUV), featured center card scale-105 md:scale-110, icons + bold ₹ pricing, CTA inline  
**Testimonials:** Avatar circle, 5-star rating, italicized quote, bold name + company, dark background section  
**Hero:** Full-width travel/car background, dark overlay (rgba 0 0 0 / 0.4–0.5), centered H1 (36–60px bold), green WhatsApp CTA, fade-in-up animation

## Motion & Animation
**Fade-in:** 0.6s ease-out page load, hero heading  
**Fade-in-up:** 0.6s ease-out section scroll reveal  
**Scale-in-smooth:** 0.4s cubic-bezier(0.34,1.56,0.64,1) card entrance  
**Slide-up-fade:** 0.5s ease-out forwards CTA/button entrance  
**Card-lift:** hover:-translate-y-2 transition-smooth hover:shadow-premium  
**Button-bounce:** 0.5s cubic-bezier(0.34,1.56,0.64,1) WhatsApp button pulse on load  
**Pulse-soft:** 2s ease-in-out infinite floating action button breathing  
**Transition-smooth:** All interactive elements (buttons, hovers, state changes) use cubic-bezier(0.4,0,0.2,1)

## Signature Detail
**Alternating backgrounds:** White sections → light grey (muted/25) → dark sections → repeat. Clear visual separation without harsh transitions.  
**Hero premium:** Full-width travel image + dark overlay, large bold H1 (60px Poppins), centered white content, bright green WhatsApp CTA below.  
**Featured pricing card:** Center card scale-105 md:scale-110, gradient-to-br (white→muted/30), primary/10 border, card-featured shadow, elevation emphasizes premium tier.  
**Premium shadows:** Layered depth (card < card-hover < premium < premium-lg) creates visual hierarchy from subtle to dramatic.  
**Bright green WhatsApp:** #25D366 (OKLCH 0.55 0.2 130) on all booking CTAs, button-bounce pulse on load, scale 1.05 + shadow-premium on hover.

## Assets & Typography Scale
**Hero images:** Full-width travel/car backgrounds (Unsplash Agra, Kashmir, Manali, vehicles Dzire/Swift/Innova)  
**Card images:** 300×200px min (aspect 3:2) car or destination photos  
**Icons:** 20–32px icons for pricing tiers, features, testimonial badges  
**Typography scale:** H1 60px/bold hero, H2 40px/bold sections, H3 24px/600wt cards, body 16px/400 copy, small 14px/500 metadata, display callout 18px/600 features  
**Line height:** Headings 1.2, body 1.6, callouts 1.4

## Constraints & Anti-Patterns
✓ No Bootstrap defaults | ✓ No generic AI aesthetics | ✓ OKLCH only (never hex/rgb) | ✓ Poppins display + Inter body exclusively | ✓ WhatsApp bright green #25D366 on all bookings | ✓ Shadow hierarchy strictly maintained | ✓ Alternating backgrounds for rhythm | ✓ Mobile-first (sm/md/lg responsive) | ✓ Real travel+vehicle imagery only | ✓ Conversion-focused WhatsApp in hero + footer + float | ✓ Generous spacing (py-20 md:py-28 lg:py-36) | ✓ Rounded-3xl cards minimum | ✓ Scale-in animations on all interactive elements | ✓ Premium depth (never flat design) | ✓ SEO-optimized heading structure
