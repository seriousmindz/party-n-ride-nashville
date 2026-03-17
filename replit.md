# Party 'N Ride Nashville

## Overview
Marketing and booking website for Party 'N Ride Nashville, a premier party bus and shuttle service company in Nashville, TN.

## Architecture
- **Frontend**: React + Tailwind CSS v4, Wouter routing, TanStack React Query
- **Backend**: Express.js with in-memory storage
- **Shared**: Drizzle ORM schemas with Zod validation in `shared/schema.ts`
- **Navigation**: Non-scrolling full-viewport pages, CTA-driven navigation between pages

## Page Structure (Non-Scrolling, CTA-Only Navigation)
Each page fills the entire viewport with no scrolling. Users navigate via nav bar links and CTA arrow buttons.
- `/` — Hero page (H1 title with laser glow, video, Book Now CTA, Call NOW)
- `/packages` — Package cards (Bachelorette, Birthday, Game Day, Corporate) with Book Now CTAs
- `/sites` — Sites & Attractions grid on dark background
- `/pricing` — 2 Hour Minimum Booking pricing info
- `/shuttle` — Shuttle Service description + Call NOW
- `/faq` — FAQ accordion (only page with internal scroll for content)
- `/contact` — Contact form + business info sidebar

## Key Features
- Full-viewport pages with Nashville skyline background and glowing animated effects
- Hero page video (`Pink_Hat_Video_Batch_Party_1773771232653.mp4`) auto-plays looping
- Per-letter laser glow animation on "Premier Party Bus" (red) and "& Shuttle Service" (blue)
- Animated package cards with hover reveals and Book Now CTAs
- Booking inquiry modal (opens from any page) submits to `/api/bookings`
- Contact form submits to `/api/contacts`
- Mobile-responsive hamburger nav menu with smaller navbar on mobile
- All content matches the PDF design word-for-word
- Proper H1/H2/H3 heading hierarchy across all pages for SEO

## SEO & Meta Tags
- Full Open Graph and Twitter Card meta tags with logo as OG image
- Logo used as favicon (`/favicon.png`) and apple-touch-icon
- Structured data (JSON-LD) for LocalBusiness schema
- Geo meta tags for Nashville location
- Keywords targeting Nashville party bus searches
- Canonical URL set

## Design System
- **Colors**: Deep red `#DC2626` / `red-600` + Royal blue `#2563EB` / `blue-600`
- **Fonts**: Pacifico (script headings `font-script`), Bebas Neue (display `font-display`), Yellowtail (Nashville text `font-nashville`), Rajdhani (body `font-body`)
- **Animations**: `animate-glow` (pulsing box-shadow on CTAs), `animate-text-glow` (pulsing text-shadow on phone numbers), `laser-letter-glow` (red letter animation), `laser-letter-glow-blue` (blue letter animation), `animate-nav-glow` (nav button border glow)
- **Icons**: Iconify CDN (Solar Linear set)
- **Mobile**: Responsive breakpoints at sm/md/lg with scaled typography, padding, and touch-friendly targets

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
- `client/src/index.css` - Global styles + keyframe animations (laser glow, nav glow, overflow:hidden)
- `client/index.html` - Meta tags, SEO, structured data, fonts, Iconify CDN
- `shared/schema.ts` - Data models (bookings, contacts)
- `server/routes.ts` - API endpoints (admin-protected read endpoints)
- `server/storage.ts` - In-memory storage implementation

## Contact Info (Business)
- Phone: 615-337-4342
- Address: 1120 Dickerson Pike, Nashville, TN 37208

## Assets
All images stored in `attached_assets/` and imported via `@assets` Vite alias.
Background: `nashville_bg.png`, Hero video: `Pink_Hat_Video_Batch_Party_1773771232653.mp4`
Logo: `logo.png` (also used as favicon and OG image)