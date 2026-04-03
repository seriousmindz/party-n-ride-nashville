# Party 'N Ride Nashville

## Overview
Marketing and booking website for Party 'N Ride Nashville, a premier party bus and shuttle service company in Nashville, TN.

## Architecture
- **Frontend**: React + Tailwind CSS v4, Wouter routing, TanStack React Query
- **Backend**: Express.js with in-memory storage
- **Shared**: Drizzle ORM schemas with Zod validation in `shared/schema.ts`
- **Navigation**: Scrollable full-viewport pages, CTA-driven navigation between pages

## Page Structure
Each page fills the viewport with scrollable overflow for longer content. Users navigate via nav bar links and CTA arrow buttons.
- `/` — Hero page (large blue logo, dual videos, Book Now CTA, GlassPhoneBar)
- `/packages` — Package cards (Bachelorette, Birthday, Game Day, Corporate) with liquid-glass-card styling
- `/sites` — Sites & Attractions grid + Ride Protocol steps (liquid-glass cards)
- `/pricing` — 2 Hour Minimum Booking pricing info (liquid-glass cards)
- `/shuttle` — Shuttle Service description (liquid-glass panel) + GlassPhoneBar
- `/faq` — FAQ list (liquid-glass cards)
- `/contact` — Contact form + business info sidebar (liquid-glass panels)

## Key Features
- Full-viewport pages with Nashville skyline background (`nashville_riverfront_clear_sky.png`) at 80% opacity
- Hero page with large blue logo + dual auto-playing videos in liquid-glass frames
- FareHarbor booking integration via iframe modal (`fareharbor.com/embeds/book/partynridenashville`)
- Booking modal: full-screen on mobile, rounded glass-style at sm+
- Contact form submits to `/api/contacts`
- Mobile-responsive hamburger nav menu

## SEO & Meta Tags
- Full Open Graph and Twitter Card meta tags
- Logo used as favicon (`/favicon.png`) and apple-touch-icon
- Structured data (JSON-LD) for LocalBusiness schema
- Geo meta tags for Nashville location
- Keywords targeting Nashville party bus searches

## Design System — Apple Liquid Glass Theme
- **Background**: White (`bg-white`) with Nashville skyline background image
- **Accent**: CSS var `--color-crimson-600` is mapped to `#0EA5E9` (sky blue), `--color-crimson-500: #38BDF8`
- **Text**: headings `text-neutral-900`, body `text-neutral-700/800 font-semibold`, nav `text-black`
- **Card Pattern**: `liquid-glass` class (frosted glass with shimmer animation, rounded-2xl), hover lifts + border glow
- **Package Cards**: `liquid-glass-card` class (darker glass overlay for image cards with shimmer)
- **Phone Links**: `liquid-glass-phone` class (sky-blue tinted glass pill) + `GlassPhoneBar` reusable component
- **CTAs**: `cta-gradient` class — animated gradient background (sky blue shifting), rounded-2xl, shimmer, hover lift + glow
- **Section Headers**: `border-l-4 border-crimson-600` left accent + tag/title/subtitle
- **Fonts**: `font-display`=Bebas Neue/Orbitron, `font-script`=Anton, `font-nashville`=Teko, `font-body`=Rajdhani
- **Icons**: Iconify CDN (Solar Linear set)
- **Animations**: `liquid-shimmer` (light sweep across glass), `cta-gradient-shift` (background color shift on CTAs)
- **Cinematic Effects** (GSAP CDN + custom React components in `client/src/components/CinematicEffects.tsx`):
  - `TypewriterCycler` — Cycling headline that types/deletes phrases with blinking cursor (hero)
  - `KineticMarquee` — Infinite scrolling text bands with variants: giant, outline, tags, dark (hero)
  - `OdometerStat` — Mechanical rolling digit counters triggered on scroll (stats section)
  - `useTextScramble` — Matrix-style character decode on scroll-triggered headings (Sites page)
  - `useParticleClick` — Confetti particle burst + expanding ring on CTA button clicks (hero)

## CSS Classes
- `.liquid-glass` — Frosted white glass panel with shimmer animation, hover lift, rounded
- `.liquid-glass-card` — Dark frosted glass for image-backed cards (packages), shimmer + hover scale/lift
- `.liquid-glass-phone` — Sky-blue tinted glass pill for phone number links
- `.cta-gradient` — Animated gradient CTA button (sky blue palette), shimmer sweep, hover lift + glow shadow

## Mobile Optimization
- All cards use `rounded-2xl` on all breakpoints (no skew transforms)
- All touch targets minimum `min-h-[44px]`
- Booking modal full-screen on mobile (no padding, rounded at sm+)
- Mobile menu uses `bg-white/95 backdrop-blur-md` with `min-h-[44px]` buttons
- PageShell `scrollable` prop enables overflow scrolling (used on all content-heavy pages)
- Logo wrapper has 44px hit area for tap targets
- Footer links have 44px tap areas

## API Routes
- `POST /api/bookings` - Create booking inquiry (public)
- `GET /api/bookings` - List all bookings (admin key required)
- `GET /api/bookings/:id` - Get single booking (admin key required)
- `PATCH /api/bookings/:id/status` - Update booking status (admin key required)
- `POST /api/contacts` - Submit contact message (public)
- `GET /api/contacts` - List all contacts (admin key required)

## Important Files
- `client/src/pages/Home.tsx` - All page components (HeroPage, PackagesPage, SitesPage, PricingPage, ShuttlePage, FaqPage, ContactPage)
- `client/src/App.tsx` - Route registration
- `client/src/components/CinematicEffects.tsx` - Cinematic animation components (TypewriterCycler, KineticMarquee, OdometerStat, useTextScramble, useParticleClick)
- `client/src/index.css` - Global styles + keyframe animations + liquid glass classes
- `client/index.html` - Meta tags, SEO, structured data, fonts, Iconify CDN
- `shared/schema.ts` - Data models (bookings, contacts)
- `server/routes.ts` - API endpoints (admin-protected read endpoints)
- `server/storage.ts` - In-memory storage implementation

## Contact Info (Business)
- Phone: 615-337-4342
- Address: 1120 Dickerson Pike, Nashville, TN 37208

## Assets
All images stored in `attached_assets/` and imported via `@assets` Vite alias.
- Background: `nashville_riverfront_clear_sky.png`
- Logo: `PartynRide-Logo-New-Blue_1774034577921.png` (already blue, no filter needed)
- Hero videos: `Pink_Hat_Video_Batch_Party_1773771232653.mp4`, `Words_PNR_Bach_1773771761737.mp4`
