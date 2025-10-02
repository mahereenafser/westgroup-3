# WestGroup Financial Management - Design Guidelines

## Design Approach
**Reference-Based Design**: Directly inspired by Finns.framer.website - modern fintech aesthetic adapted for wealth management. Maintain Finns' clean, premium feel while incorporating traditional finance trust signals.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Deep Navy: 220 45% 20% (primary brand, headers)
- Rich Teal: 180 35% 45% (secondary accent)
- Gold Accent: 45 75% 55% (trust badges, highlights - use sparingly)
- Pure White: 0 0% 100% (backgrounds)

**Supporting Colors:**
- Light Gray: 220 15% 96% (card backgrounds)
- Medium Gray: 220 10% 60% (secondary text)
- Success Green: 150 50% 45% (metrics, ROI stats)

**Gradients:**
- Hero gradient: Navy to Teal (subtle, 10% opacity overlay)
- Card hover: Light Gray to White

### B. Typography

**Font Stack:**
- Primary: 'Inter' via Google Fonts CDN
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Hierarchy:**
- H1 Hero: 4.5rem (72px), font-weight 700, letter-spacing -0.02em
- H2 Section: 3rem (48px), font-weight 600
- H3 Card Title: 1.5rem (24px), font-weight 600
- Body: 1.125rem (18px), font-weight 400, line-height 1.7
- Small Stats: 0.875rem (14px), font-weight 500, uppercase, tracking-wide

### C. Layout System

**Spacing Scale:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Card padding: p-8
- Element gaps: gap-8 (cards), gap-4 (text elements)

**Grid System:**
- Container: max-w-7xl mx-auto px-4
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### D. Component Library

**Navigation:**
- Sticky header with blur backdrop (backdrop-blur-md bg-white/90)
- Logo left, nav items center, CTA button right
- Mobile: Hamburger menu with slide-in panel

**Hero Section:**
- Full-width with subtle gradient overlay
- Left: Headline + tagline + 2 CTAs (primary + secondary)
- Right: Dashboard mockup image (financial charts/graphs)
- Height: min-h-screen on desktop, natural on mobile

**Service Cards:**
- Rounded-2xl, soft shadow, white background
- Icon top (2rem size, Teal color)
- Title, description, hover: lift effect (translateY -4px, shadow-lg)

**Stats Section:**
- 4-column grid on desktop (2x2 on mobile)
- Large numbers (3rem, Success Green)
- Label below (Medium Gray)
- White cards with subtle borders

**Testimonials:**
- Horizontal scroll carousel (snap-x)
- Card: Photo + quote + name + title
- Rounded-xl cards, Light Gray background

**CTA Sections:**
- Full-width with Teal background
- White text, centered content
- Primary button: White with Navy text

**Footer:**
- 4-column layout: Logo/tagline, Services, Company, Contact
- Navy background, white text
- Social icons, copyright, service areas

### E. Animations

**Subtle Interactions Only:**
- Fade-in on scroll (opacity 0 to 1, duration 600ms)
- Card hover lift (translateY -4px, duration 200ms)
- Button hover scale (scale 1.02, duration 150ms)
- No parallax, no complex scroll-triggered animations

## Images Section

**Hero Image:**
- Large dashboard mockup showing wealth management analytics
- Position: Right side of hero, 50% width on desktop
- Style: Floating with subtle shadow, slight tilt (2-3 degrees)
- Content: Charts showing portfolio growth, asset allocation pie charts, financial metrics

**Service Section Images:**
- Feature card icons: Use Heroicons (outline style, 2rem size)
- Background image: Subtle Vancouver skyline or mountain vista (10% opacity overlay in relevant sections)

**Testimonial Images:**
- Professional headshots (circular, 4rem diameter)
- Placeholder: Use professional stock photos or initials in colored circles

**Trust Badges:**
- Award logos: BBB A+, MDRT, ThreeBestRated, Consumer Choice
- Display as badge grid, grayscale on default, color on hover

**Services Page:**
- Process diagram: Visual 4-step journey (numbered circles connected by lines)
- Performance metrics: Iconography showing upward trends, tax savings, ROI

## Page-Specific Layouts

**Home Page Structure:**
1. Hero with dashboard mockup
2. Trust badges marquee
3. Services grid (4 columns)
4. Stats section (performance highlights)
5. Process overview (4 steps)
6. Testimonials carousel
7. Service areas map/list
8. Final CTA section

**Services Page Structure:**
1. Hero (shorter, service-focused headline)
2. 4-Step Process (detailed with icons)
3. Service categories (expandable accordions or tabs)
4. Performance metrics showcase
5. Professional designations badges
6. CTA to book consultation

## Critical Design Notes

- Maintain generous white space (Finns aesthetic)
- Use subtle shadows, avoid heavy borders
- Implement smooth transitions (200-300ms)
- Mobile-first responsive design
- Button backgrounds on hero: backdrop-blur-sm bg-white/10 for outline variants
- All sections should feel complete and purposeful
- Premium feel throughout - this is high-net-worth client facing
- Use real, professional imagery - no generic stock photos of handshakes or office buildings