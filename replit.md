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
- `/` — Hero page (title, description, Book Now CTA, Call NOW)
- `/packages` — Package cards (Bachelorette, Birthday, Game Day, Corporate) with Book Now CTAs
- `/sites` — Sites & Attractions grid on dark background
- `/pricing` — 2 Hour Minimum Booking pricing info
- `/shuttle` — Shuttle Service description + Call NOW
- `/faq` — FAQ accordion (only page with internal scroll for content)
- `/contact` — Contact form + business info sidebar

## Key Features
- Full-viewport pages with background video and glowing animated effects
- Animated package cards with hover reveals and Book Now CTAs
- Booking inquiry modal (opens from any page) submits to `/api/bookings`
- Contact form submits to `/api/contacts`
- Mobile-responsive hamburger nav menu
- All content matches the PDF design word-for-word

## Design System
- **Colors**: Sky blue (#0ea5e9) + Orange (#f97316) on white background
- **Fonts**: Orbitron (display headings) + Rajdhani (body text)
- **Animations**: `animate-glow` (pulsing box-shadow on CTAs), `animate-text-glow` (pulsing text-shadow on phone numbers/accents)
- **Icons**: Iconify CDN (Solar Linear set)

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
- `client/src/index.css` - Global styles + keyframe animations (overflow:hidden on body)
- `client/index.html` - Meta tags, fonts, Iconify CDN
- `shared/schema.ts` - Data models (bookings, contacts)
- `server/routes.ts` - API endpoints (admin-protected read endpoints)
- `server/storage.ts` - In-memory storage implementation

## Contact Info (Business)
- Phone: 615-337-4342
- Address: 1120 Dickerson Pike, Nashville, TN 37208

## Assets
All images stored in `attached_assets/` and imported via `@assets` Vite alias.
Background video: `Website_Background_Animation_Creation_1773353327622.mp4`