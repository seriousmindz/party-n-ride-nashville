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
- `/` — Hero page (large blue logo, dual videos, Book Now CTA, Call NOW)
- `/packages` — Package cards (Bachelorette, Birthday, Game Day, Corporate) with Book Now CTAs
- `/sites` — Sites & Attractions grid + Ride Protocol steps
- `/pricing` — 2 Hour Minimum Booking pricing info
- `/shuttle` — Shuttle Service description + Call NOW
- `/faq` — FAQ list
- `/contact` — Contact form + business info sidebar

## Key Features
- Full-viewport pages with Nashville skyline background (`nashville_skyline_bg.png`) at 80% opacity
- Hero page with large blue logo + dual auto-playing videos
- FareHarbor booking integration via iframe modal (`fareharbor.com/embeds/book/partynridenashville`)
- Booking modal: full-screen on mobile (no skew), skewed at sm+
- Contact form submits to `/api/contacts`
- Mobile-responsive hamburger nav menu

## SEO & Meta Tags
- Full Open Graph and Twitter Card meta tags
- Logo used as favicon (`/favicon.png`) and apple-touch-icon
- Structured data (JSON-LD) for LocalBusiness schema
- Geo meta tags for Nashville location
- Keywords targeting Nashville party bus searches

## Design System — Dark Cyberpunk Theme
- **Background**: `void-900: #050505`, `void-800: #0A0A0A`, `void-700: #121212`
- **Accent**: CSS var `--color-crimson-600` is mapped to `#0EA5E9` (sky blue), `--color-crimson-500: #38BDF8`
- **Text**: White headings on dark, `neutral-400/500` body text
- **Card Pattern**: `sm:-skew-x-12` outer with `sm:skew-x-12` inner (no skew on mobile), `rounded-md sm:rounded-none`
- **Corner Brackets**: Only visible at sm+ (`hidden sm:block`)
- **Overlays**: `bg-cyber-grid` grid lines, `.scanlines` CRT overlay
- **Images**: grayscale with hover reveal
- **Section Headers**: `border-l-4 border-crimson-600` left accent + tag/title/subtitle
- **CTAs**: SkewedCTA — full-width on mobile, skewed at sm+
- **Fonts**: `font-display`=Bebas Neue/Orbitron, `font-script`=Anton, `font-nashville`=Teko, `font-body`=Rajdhani
- **Icons**: Iconify CDN (Solar Linear set)

## Mobile Optimization
- All skew transforms applied only at `sm:` breakpoint (flat on mobile)
- All touch targets minimum `min-h-[44px]`
- Cards use `rounded-md` on mobile, `rounded-none` at sm+
- Corner bracket decorations hidden on mobile (`hidden sm:block`)
- Booking modal full-screen on mobile (no padding, no skew, no rounded corners)
- Mobile menu uses `bg-black/60 backdrop-blur-md` with `min-h-[44px]` buttons
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
- `client/src/index.css` - Global styles + keyframe animations
- `client/index.html` - Meta tags, SEO, structured data, fonts, Iconify CDN
- `shared/schema.ts` - Data models (bookings, contacts)
- `server/routes.ts` - API endpoints (admin-protected read endpoints)
- `server/storage.ts` - In-memory storage implementation

## Contact Info (Business)
- Phone: 615-337-4342
- Address: 1120 Dickerson Pike, Nashville, TN 37208

## Assets
All images stored in `attached_assets/` and imported via `@assets` Vite alias.
- Background: `nashville_skyline_bg.png`
- Logo: `PartynRide-Logo-New-Blue_1774034577921.png` (already blue, no filter needed)
- Hero videos: `Pink_Hat_Video_Batch_Party_1773771232653.mp4`, `Words_PNR_Bach_1773771761737.mp4`
