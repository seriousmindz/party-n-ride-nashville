# Party 'N Ride Nashville

## Overview
Marketing and booking website for Party 'N Ride Nashville, a premier party bus and shuttle service company in Nashville, TN.

## Architecture
- **Frontend**: React + Tailwind CSS v4, Wouter routing, TanStack React Query
- **Backend**: Express.js with in-memory storage
- **Shared**: Drizzle ORM schemas with Zod validation in `shared/schema.ts`

## Key Features
- Animated landing page with background video, glowing effects, and interactive package cards
- Booking inquiry form (modal) that submits to `/api/bookings`
- Contact form that submits to `/api/contacts`
- Smooth scroll navigation with mobile hamburger menu
- All content matches the PDF design: Hero, Packages, Sites, Pricing, Shuttle Service, FAQ, Contact, Footer

## Design System
- **Colors**: Sky blue (#0ea5e9) + Orange (#f97316) on white background
- **Fonts**: Orbitron (display headings) + Rajdhani (body text)
- **Animations**: `animate-glow` (pulsing box-shadow on CTAs), `animate-text-glow` (pulsing text-shadow on phone numbers/accents)
- **Icons**: Iconify CDN (Solar Linear set)

## API Routes
- `POST /api/bookings` - Create booking inquiry
- `GET /api/bookings` - List all bookings
- `GET /api/bookings/:id` - Get single booking
- `PATCH /api/bookings/:id/status` - Update booking status
- `POST /api/contacts` - Submit contact message
- `GET /api/contacts` - List all contacts

## Important Files
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/index.css` - Global styles + keyframe animations
- `client/index.html` - Meta tags, fonts, Iconify CDN
- `shared/schema.ts` - Data models (bookings, contacts)
- `server/routes.ts` - API endpoints
- `server/storage.ts` - In-memory storage implementation

## Contact Info (Business)
- Phone: 615-337-4342
- Address: 1120 Dickerson Pike, Nashville, TN 37208

## Assets
All images stored in `attached_assets/` and imported via `@assets` Vite alias.
Background video: `Website_Background_Animation_Creation_1773353327622.mp4`
