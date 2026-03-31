import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

import logoImg from '@assets/PartynRide-Logo-New-Blue_1774034577921.png';
import bacheloretteImg from '@assets/IMG_20220526_234848_507_1772858254044.jpg';
import birthdayImg from '@assets/IMG_20220723_114303_064_1772858334450.jpg';
import tailgateImg from '@assets/IMG_20220124_211840_009_1772858028717.jpg';
import corporateImg from '@assets/20220729_124917_1772857936688.jpg';
import experienceImg from '@assets/IMG_20220522_233123_203_1772858183644.jpg';
import heroVideo from '@assets/Pink_Hat_Video_Batch_Party_1773771232653.mp4';
import heroVideo2 from '@assets/Words_PNR_Bach_1773771761737.mp4';
import skylineBg from '@assets/nashville_riverfront_clear_sky.png';
import stepLockImg from '@assets/step_lock_date.png';
import stepRouteImg from '@assets/step_plan_route.png';
import stepStockImg from '@assets/step_stock_up.png';
import stepRideImg from '@assets/step_ride_repeat.png';
import featureEnclosedImg from '@assets/feature_enclosed.png';
import featureVipImg from '@assets/feature_vip_music.png';
import featureBroadwayImg from '@assets/feature_broadway.png';
import venueTitanImg from '@assets/stock_images/titan_stadium.jpg';
import venueBridgestoneImg from '@assets/stock_images/bridgestone_arena.jpg';
import venueBroadwayImg from '@assets/stock_images/broadway_nashville.jpg';
import venueSkylineImg from '@assets/stock_images/nashville_skyline.jpg';
import venue12SouthImg from '@assets/stock_images/12_south_nashville.jpg';
import venueSobroImg from '@assets/stock_images/sobro_nashville.jpg';
import venueGulchImg from '@assets/stock_images/gulch_nashville.jpg';
import venueMidtownImg from '@assets/stock_images/midtown_nashville.jpg';
import venueMusicRowImg from '@assets/stock_images/music_row_nashville.jpg';
import venueCountryHofImg from '@assets/stock_images/country_music_hof.jpg';
import venueNmaamImg from '@assets/stock_images/nmaam_nashville.jpg';
import venueMuralsImg from '@assets/stock_images/nashville_murals.jpg';
import venueCentennialImg from '@assets/stock_images/centennial_park.jpg';
import venueOpryImg from '@assets/stock_images/grand_ole_opry.jpg';
import shuttleGroupImg from '@assets/IMG_20220910_192802_809_(1)_1774995948633.jpg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { icon: string, style?: React.CSSProperties }, HTMLElement>;
    }
  }
}

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/partynridenashville/?full-items=yes";

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; defaultPackage?: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4" data-testid="booking-modal">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl w-full h-full sm:max-w-4xl sm:h-[90vh] sm:rounded-2xl border-0 sm:border border-white/50 flex flex-col overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/30 shrink-0">
            <h3 className="text-lg sm:text-2xl font-display font-bold text-neutral-900 uppercase tracking-widest">Book Your Ride</h3>
            <button onClick={onClose} className="text-neutral-500 hover:text-crimson-600 text-3xl font-bold transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center" data-testid="button-close-modal">&times;</button>
          </div>
          <iframe
            src={FAREHARBOR_URL}
            className="flex-1 w-full border-0"
            title="Book Party N Ride Nashville"
            allow="payment"
            data-testid="iframe-fareharbor"
          />
        </div>
      </div>
    </div>
  );
}

function NavBar({ openBooking, currentPage }: { openBooking: (pkg: string) => void; currentPage: string }) {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/packages", label: "Packages" },
    { path: "/sites", label: "Sites" },
    { path: "/pricing", label: "Pricing" },
    { path: "/shuttle", label: "Shuttle Service" },
    { path: "/faq", label: "FAQ's" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="min-w-[44px] min-h-[44px] flex items-center cursor-pointer" onClick={() => navigate("/")} data-testid="img-logo-wrapper">
            <img src={logoImg} alt="Party N Ride Nashville - Premier Party Bus and Shuttle Service" className="h-8 sm:h-12 object-contain" data-testid="img-logo" />
          </div>
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map(item => (
              <button key={item.path} onClick={() => navigate(item.path)} className={`font-display font-bold uppercase tracking-wider text-sm px-3 py-1.5 transition-all duration-300 ${currentPage === item.path ? 'text-crimson-600 border-b-2 border-crimson-600' : 'text-black hover:text-crimson-600 border-b-2 border-transparent hover:border-crimson-600'}`} data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]/g, '')}`}>{item.label}</button>
            ))}
            <button onClick={() => openBooking('custom')} className="cta-gradient text-white px-6 py-2.5 ml-3 rounded-xl shadow-[0_4px_20px_rgba(14,165,233,0.3)]" data-testid="button-nav-book">
              <span className="relative z-10 font-display font-bold uppercase tracking-widest text-xs">Book Now</span>
            </button>
          </div>
          <button className="lg:hidden text-black text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map(item => (
            <button key={item.path} onClick={() => { navigate(item.path); setMobileMenuOpen(false); }} className={`block w-full text-left font-display font-bold uppercase tracking-wider text-base py-3 px-3 transition-all duration-200 min-h-[44px] ${currentPage === item.path ? 'text-crimson-600 border-l-2 border-crimson-600 bg-sky-50' : 'text-black hover:text-crimson-600 hover:bg-neutral-100'}`}>{item.label}</button>
          ))}
          <button onClick={() => { openBooking('custom'); setMobileMenuOpen(false); }} className="block w-full cta-gradient text-white font-display font-bold py-3 uppercase tracking-wider text-sm text-center mt-2 min-h-[44px] rounded-xl shadow-[0_4px_20px_rgba(14,165,233,0.3)]"><span className="relative z-10">Book Now</span></button>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-white/95 border-t border-neutral-200 py-2 px-3 sm:px-6 text-center z-20 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        <p className="text-neutral-700 text-[10px] sm:text-xs font-display tracking-wide">
          Designed and managed by{' '}
          <a href="https://build.seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-crimson-600 hover:text-crimson-700 font-bold transition-colors" data-testid="link-footer-seriousmindz">
            SeriousMindz AI
          </a>
        </p>
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <a href="https://www.theparkingguys.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-crimson-600 text-[10px] sm:text-xs font-display tracking-wide transition-colors min-h-[44px] flex items-center px-1" data-testid="link-footer-parkingguys">
            The Parking Guys
          </a>
          <span className="text-neutral-400 text-[10px]">|</span>
          <a href="https://seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-crimson-600 text-[10px] sm:text-xs font-display tracking-wide transition-colors min-h-[44px] flex items-center px-1" data-testid="link-footer-seriousmindz-main">
            seriousmindz.ai
          </a>
          <span className="text-neutral-400 text-[10px]">|</span>
          <a href="https://api.seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-crimson-600 text-[10px] sm:text-xs font-display tracking-wide transition-colors min-h-[44px] flex items-center px-1" data-testid="link-footer-seriousmindz-api">
            api.seriousmindz.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function PageShell({ children, scrollable = false }: { children: React.ReactNode; scrollable?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-white" style={{ margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={skylineBg} alt="" className="w-full h-full object-cover object-center opacity-80" />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-white/40 via-white/20 to-white/50 pointer-events-none"></div>
      
      <div className={`relative z-10 h-full w-full flex flex-col ${scrollable ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'}`}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, titleAccent, subtitle }: { tag: string; title: string; titleAccent: string; subtitle: string }) {
  return (
    <div className="mb-4 sm:mb-10 border-l-4 border-crimson-600 pl-3 sm:pl-6 py-2">
      <div className="flex items-center gap-2 mb-2 text-crimson-600 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
        <iconify-icon icon="solar:music-notes-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
        <span>{tag}</span>
      </div>
      <h1 className="text-xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 tracking-tighter uppercase mb-2">
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-600 to-crimson-900">{titleAccent}</span>
      </h1>
      <p className="text-xs sm:text-base md:text-lg text-neutral-700 max-w-2xl font-semibold tracking-wide">{subtitle}</p>
    </div>
  );
}

function GlassPhoneBar({ testId = "link-phone" }: { testId?: string }) {
  return (
    <a href="tel:6153374342" className="liquid-glass-phone inline-flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl mt-6 sm:mt-10 min-h-[56px] no-underline" data-testid={testId}>
      <iconify-icon icon="solar:phone-calling-bold" className="text-xl sm:text-2xl text-crimson-600" style={{ strokeWidth: 1.5 }}></iconify-icon>
      <span className="relative z-10 font-display font-bold text-neutral-900 text-base sm:text-xl tracking-wide">Call NOW:</span>
      <span className="relative z-10 font-display font-bold text-crimson-600 text-lg sm:text-2xl tracking-wider">615-337-4342</span>
    </a>
  );
}

function SkewedCTA({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="cta-gradient text-white px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-2xl min-h-[44px] w-full sm:w-auto shadow-[0_8px_30px_rgba(14,165,233,0.3)]">
      <span className="relative z-10 font-display font-bold uppercase tracking-widest text-sm sm:text-base flex items-center gap-2 justify-center drop-shadow-sm">
        {label}
        <iconify-icon icon="solar:arrow-right-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
      </span>
    </button>
  );
}

export function HeroPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/" />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <img src={logoImg} alt="Party N Ride Nashville - Premier Party Bus & Shuttle Service" className="w-[280px] sm:w-[400px] md:w-full max-w-[500px] h-auto object-contain mx-auto lg:mx-0" data-testid="img-hero-logo" />
            </div>
            <h2 className="sr-only">Nashville's Premier Party Bus and Shuttle Service - Book Your Ride Today</h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-800 font-body font-semibold mb-4 sm:mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide" data-testid="text-hero-description">
              Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out. Cups, coolers, ice, LED lighting, and a pro driver included.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center lg:justify-start">
              <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
            </div>
            <GlassPhoneBar testId="link-hero-phone" />
            <button onClick={() => navigate('/packages')} className="mt-4 sm:mt-6 text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 mx-auto lg:mx-0 min-h-[44px]" data-testid="button-hero-next">
              View Packages <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col items-center justify-center lg:justify-end gap-3 sm:gap-4 relative">
            <div className="absolute inset-0 bg-crimson-600/10 rounded-full blur-3xl animate-pulse w-3/4 h-3/4 m-auto"></div>
            <div className="relative liquid-glass p-1.5 sm:p-2.5 rounded-2xl">
              <video autoPlay loop playsInline controls className="w-[140px] h-[120px] sm:w-[220px] sm:h-[180px] md:w-[280px] md:h-[220px] object-cover rounded-xl" data-testid="video-hero">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative liquid-glass p-1.5 sm:p-2.5 rounded-2xl">
              <video autoPlay loop playsInline controls className="w-[180px] h-[160px] sm:w-[280px] sm:h-[230px] md:w-[360px] md:h-[280px] object-cover rounded-xl" data-testid="video-hero-2">
                <source src={heroVideo2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function PackagesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  const cards = [
    { img: bacheloretteImg, title: "Bachelorette Bash", tagline: "Nashville's #1 Bachelorette Party Bus", desc: "Your crew deserves the ultimate send\u2011off. 2\u2011hour private enclosed party bus for up to 20 guests with BYOB, cups, coolers, ice, LED club lighting, and a Bluetooth sound system. Cruise Broadway, The Gulch, and Midtown with bathroom and photo stops built into your route.", price: "From $495 Sun\u2013Thu \u00B7 From $595 Fri\u2013Sat", priceA: "$495 Sun\u2013Thu", priceB: "$595 Fri\u2013Sat", pkg: "bachelorette", num: "01", highlight: "Up to 20 Guests \u2022 2 Hours \u2022 BYOB" },
    { img: birthdayImg, title: "Broadway Birthday", tagline: "Your Rolling Nashville Nightclub", desc: "Celebrate another lap around the sun with a 2\u2011hour rolling nightclub on wheels. Custom playlist, LED mood lighting, and a route tailored to your favorite Nashville hotspots. Your driver handles traffic, parking, and logistics while you party.", price: "From $475 Sun\u2013Thu \u00B7 From $575 Fri\u2013Sat", priceA: "$475 Sun\u2013Thu", priceB: "$575 Fri\u2013Sat", pkg: "birthday", num: "02", highlight: "Custom Playlist \u2022 2 Hours \u2022 LED Lights" },
    { img: tailgateImg, title: "Game Day Tailgate", tagline: "Pre\u2011Game Like a Champion", desc: "3\u2011hour Titans or Preds pre\u2011game party bus experience. One pickup, one stadium\u2011area drop\u2011off, and a rolling tailgate with your entire crew, drinks, and music cranked. Arrive to the game like a VIP, not stuck in parking.", price: "From $695 per group", priceA: "$695", priceB: "per group", pkg: "gameday", num: "03", highlight: "3 Hours \u2022 Stadium Drop\u2011off \u2022 Full Crew" },
    { img: corporateImg, title: "Corporate & Events", tagline: "Impress Every Client & Team", desc: "Elevate your corporate events with a private shuttle that runs full party mode or an elegant toned\u2011down lounge. Perfect for conferences, team outings, offsites, and incentive trips. Custom routes, timing, and capacity tailored to your needs.", price: "Custom quotes based on route & guest count", priceA: "Custom Quote", priceB: "", pkg: "corporate", num: "04", highlight: "Custom Route \u2022 Any Size Group \u2022 Premium" },
  ];

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/packages" />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <SectionHeader tag="Nashville Party Bus Experiences" title="Party" titleAccent="Protocols" subtitle="Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-6 sm:gap-y-12 w-full max-w-7xl">
          {cards.map((card, i) => (
            <div key={i} className={`group relative w-full h-[280px] sm:h-[340px] md:h-[380px] liquid-glass-card rounded-2xl sm:rounded-xl cursor-pointer ${i % 2 === 1 ? 'sm:mt-8' : ''}`} onClick={() => openBooking(card.pkg)} data-testid={`card-package-${card.pkg}`}>
              <div className="absolute inset-0 rounded-2xl sm:rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" style={{ backgroundImage: `url(${card.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"></div>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="text-3xl sm:text-4xl font-display font-bold text-white/20 group-hover:text-crimson-600/60 transition-colors duration-300">{card.num}</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 flex flex-col justify-end z-10 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-mono text-crimson-500 tracking-widest uppercase mb-1">{card.tagline}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase mb-1.5">{card.title}</h3>
                <p className="text-[10px] sm:text-xs text-white/70 font-semibold tracking-wider uppercase mb-2">{card.highlight}</p>
                <p className="text-[11px] sm:text-sm text-neutral-200 font-medium mb-3 leading-relaxed line-clamp-3">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-bold">
                    <span className="text-crimson-500">{card.priceA}</span>{card.priceB && <span className="text-neutral-400"> &middot; {card.priceB}</span>}
                  </p>
                  <div className="flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 group-hover:text-crimson-500 transition-all duration-300" data-testid={`button-book-${card.pkg}`}>
                    Book Now <iconify-icon icon="solar:arrow-right-linear" className="text-sm" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <GlassPhoneBar testId="link-packages-phone" />
        <div className="flex items-center justify-center mt-3">
          <button onClick={() => navigate('/sites')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-packages-next">
            Sites <span className="text-xl">&rarr;</span>
          </button>
        </div>
      </div>
    </PageShell>
  );
}

const VENUES = [
  { name: "Nissan Stadium", img: venueTitanImg, url: "https://www.nissanstadium.com", history: "Home of the Tennessee Titans since 1999, Nissan Stadium sits on the east bank of the Cumberland River with a capacity of 69,143. The stadium also hosts major concerts, college football events, and international soccer matches. Its riverside location offers stunning views of the Nashville skyline and is a centerpiece of the city's sports culture." },
  { name: "Bridgestone Arena", img: venueBridgestoneImg, url: "https://www.bridgestonearena.com", history: "Bridgestone Arena opened in 1996 and is home to the Nashville Predators NHL team. Located in the heart of downtown Nashville, it hosts over 150 events annually including major concerts, award shows, and sporting events. It's been named the top arena in the United States multiple times and is a key anchor of the Lower Broadway entertainment district." },
  { name: "Nashville's Famous Broadway", img: venueBroadwayImg, url: "https://www.visitmusiccity.com/nashville/neighborhoods/the-district", history: "Lower Broadway, known as the Honky Tonk Highway, is the beating heart of Nashville's music scene. This iconic stretch runs from the Cumberland River to 5th Avenue and is lined with legendary honky-tonks, live music venues, bars, and restaurants. The neon-lit street comes alive day and night with live country, rock, and blues pouring from every doorway." },
  { name: "Captivating Skyline", img: venueSkylineImg, url: "https://www.visitmusiccity.com", history: "Nashville's skyline along the Cumberland River is one of the most photographed in the South. Anchored by the AT&T Building (nicknamed the Batman Building), the cityscape blends modern glass towers with historic architecture. The best views come from the Korean Veterans Memorial Bridge, Cumberland Park, and the John Seigenthaler Pedestrian Bridge." },
  { name: "12 South", img: venue12SouthImg, url: "https://www.12southnashville.com", history: "12 South is one of Nashville's most walkable and Instagram-worthy neighborhoods. Originally a working-class community, it's transformed into a trendy shopping and dining destination while keeping its neighborhood charm. The area is famous for its colorful murals, boutique shops, artisan coffee roasters, and some of Nashville's best restaurants." },
  { name: "SoBro", img: venueSobroImg, url: "https://www.visitmusiccity.com/nashville/neighborhoods/sobro", history: "South of Broadway, or SoBro, is Nashville's fastest-growing urban neighborhood. This area stretches from Broadway south to the Gulch and features sleek high-rise hotels, rooftop bars, the Music City Center convention complex, and the Country Music Hall of Fame. It's where Nashville's modern energy meets its musical roots." },
  { name: "The Gulch", img: venueGulchImg, url: "https://www.nashvillegulch.com", history: "The Gulch is Nashville's premier urban neighborhood, built in a former railroad yard just southwest of downtown. It was the first LEED-certified neighborhood in the South and features upscale dining, boutique hotels, and the famous Nashville 'Wings' mural. The area perfectly represents Nashville's blend of creativity and modern urban living." },
  { name: "Midtown", img: venueMidtownImg, url: "https://www.visitmusiccity.com/nashville/neighborhoods/midtown", history: "Midtown Nashville, centered around the Vanderbilt University area, is known for its vibrant nightlife, diverse restaurants, and music venues. The stretch along Division Street and Elliston Place features everything from dive bars to upscale cocktail lounges. It's a favorite among locals and where Nashville's college scene meets its professional nightlife." },
  { name: "Music Row", img: venueMusicRowImg, url: "https://www.visitmusiccity.com/nashville/neighborhoods/music-row", history: "Music Row is the historic heart of Nashville's music industry, home to hundreds of recording studios, record labels, and music publishing houses since the 1950s. Legendary studios like RCA Studio B and historic labels line 16th and 17th Avenues. More hit records have been made on these two streets than anywhere else in the world." },
  { name: "Country Music Hall of Fame", img: venueCountryHofImg, url: "https://www.countrymusichalloffame.org", history: "The Country Music Hall of Fame and Museum, established in 1961, is one of the world's largest music museums. The striking modern building in SoBro houses priceless artifacts, interactive exhibits, and the stories of country music's greatest artists. It includes historic RCA Studio B tours, rotating exhibitions, and an archive of over 2.5 million items." },
  { name: "National Museum of African American Music", img: venueNmaamImg, url: "https://www.nmaam.org", history: "NMAAM opened in 2021 as the only museum dedicated exclusively to the musical contributions of African Americans. Located in downtown Nashville's 5th + Broadway complex, its seven galleries trace over 50 musical genres from spirituals and blues to hip-hop and R&B, celebrating the central role African Americans have played in creating American music." },
  { name: "Iconic Murals Around the City", img: venueMuralsImg, url: "https://www.visitmusiccity.com/things-to-do/murals-in-nashville", history: "Nashville's vibrant mural scene has made it one of the most Instagrammable cities in America. From the famous 'WhatLiftsYou' angel wings in The Gulch to the 'I Believe in Nashville' mural, colorful works of art cover buildings across every neighborhood. The street art scene reflects Nashville's creative spirit and has become a must-do for every visitor." },
  { name: "Centennial Park", img: venueCentennialImg, url: "https://www.nashville.gov/departments/parks/centennial-park", history: "Centennial Park is Nashville's premier urban park, home to the world's only full-scale replica of the Parthenon, built for the 1897 Tennessee Centennial Exposition. The 132-acre park features a one-mile walking trail, a sunken garden, an art center, and a lake. The Parthenon houses a 42-foot statue of Athena, the tallest indoor sculpture in the Western world." },
  { name: "Grand Ole Opry", img: venueOpryImg, url: "https://www.opry.com", history: "The Grand Ole Opry, founded in 1925, is the longest-running radio broadcast in US history and the home of country music. Originally broadcast from the Ryman Auditorium (the 'Mother Church of Country Music'), it moved to its current purpose-built home in 1974. The Opry has hosted every legend from Hank Williams to Dolly Parton and continues to showcase the best in country and Americana music." },
];

function VenueModal({ venue, onClose }: { venue: typeof VENUES[0] | null; onClose: () => void }) {
  if (!venue) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4" data-testid="venue-modal">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full h-full bg-white/95 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl">
        <div className="relative h-56 sm:h-80 md:h-[45vh] shrink-0">
          <img src={venue.img} alt={venue.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <button onClick={onClose} className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center text-xl sm:text-2xl font-bold hover:bg-black/60 transition-colors" data-testid="button-close-venue">&times;</button>
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 right-4">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight drop-shadow-lg">{venue.name}</h2>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-5 sm:p-10 md:px-16 md:py-10">
          <p className="text-sm sm:text-lg md:text-xl text-neutral-700 font-body font-medium leading-relaxed mb-6 sm:mb-8 max-w-3xl">{venue.history}</p>
          <a href={venue.url} target="_blank" rel="noopener noreferrer" className="cta-gradient inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-[0_6px_24px_rgba(14,165,233,0.3)] min-h-[44px] no-underline" data-testid="link-venue-website">
            <span className="relative z-10 font-display font-bold uppercase tracking-widest text-sm sm:text-base">Visit Official Site</span>
            <iconify-icon icon="solar:arrow-right-up-linear" className="relative z-10 text-lg" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export function SitesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const [selectedVenue, setSelectedVenue] = useState<typeof VENUES[0] | null>(null);
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <VenueModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
      <NavBar openBooking={openBooking} currentPage="/sites" />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-7xl py-4 sm:py-8">
          <div className="mb-6 sm:mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-3 text-crimson-600 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
              <iconify-icon icon="solar:map-point-wave-bold" className="text-base sm:text-lg" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span>Nashville Destinations</span>
              <iconify-icon icon="solar:map-point-wave-bold" className="text-base sm:text-lg" style={{ strokeWidth: 1.5 }}></iconify-icon>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-nashville font-bold tracking-wide uppercase mb-3">
              <span className="text-neutral-900">Nashville </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-600 via-sky-400 to-crimson-600">Sites</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto font-body font-semibold tracking-wide">Great attractions, landmarks, and fun sites that make a perfect stop or scenic route on your party bus adventure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-12">
            {VENUES.map((venue, i) => (
              <div key={i} className="group relative h-36 sm:h-48 liquid-glass-card rounded-2xl overflow-hidden cursor-pointer" onClick={() => setSelectedVenue(venue)} data-testid={`card-site-${i}`}>
                <div className="absolute inset-0">
                  <img src={venue.img} alt={venue.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-3 sm:p-4 flex flex-col justify-end">
                  <h3 className="text-sm sm:text-lg font-display font-bold text-white uppercase tracking-wide mb-1 drop-shadow-md">{venue.name}</h3>
                  <div className="flex items-center gap-1.5 text-crimson-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <iconify-icon icon="solar:arrow-right-linear" className="text-xs" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 sm:mb-12 border-b border-neutral-200 pb-4 sm:pb-6">
            <div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 tracking-tighter uppercase mb-2">
                Ride <span className="text-crimson-600">Protocol</span>
              </h2>
              <p className="text-neutral-800 font-semibold tracking-wide text-xs sm:text-base">How your Nashville party bus goes from idea to &ldquo;best night of the trip&rdquo;.</p>
            </div>
            <SkewedCTA onClick={() => openBooking('custom')} label="Check Availability" />
          </div>

          <div className="relative w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-12">
            {[
              { step: "01", title: "Lock Your Date", desc: "Choose your date, time, and package. Weekends often sell out 2\u20134 weeks in advance.", img: stepLockImg },
              { step: "02", title: "Plan The Route", desc: "We help you dial in pickup, photo stops, bathroom breaks, and drop\u2011off so the night flows.", img: stepRouteImg },
              { step: "03", title: "Stock & Show Up", desc: "Bring your drinks (no glass), we handle cups, coolers, ice, and a pro driver to keep it smooth.", img: stepStockImg },
              { step: "04", title: "Ride & Repeat", desc: "We roll, you dance, and your crew walks away saying \u201Cthat was the best part of the trip\u201D.", img: stepRideImg },
            ].map((s, i) => (
              <div key={s.step} className={`group relative w-full h-44 sm:h-56 liquid-glass-card rounded-2xl overflow-hidden cursor-default`} data-testid={`text-step-${s.step}`}>
                <div className="absolute inset-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"></div>
                </div>
                <div className="relative z-10 h-full p-3 sm:p-5 flex flex-col justify-between">
                  <span className="text-[9px] sm:text-xs font-mono text-crimson-500 tracking-widest">STEP_{s.step}</span>
                  <div>
                    <h3 className="text-sm sm:text-xl font-display font-bold text-white uppercase mb-1">{s.title}</h3>
                    <p className="text-[9px] sm:text-xs text-neutral-200 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
            {[
              { tag: "ALL\u2011WEATHER_COMFORT", label: "Enclosed & Climate\u2011Controlled", img: featureEnclosedImg },
              { tag: "PRIVATE_VIP_MODE", label: "Your Crew, Your Music", img: featureVipImg },
              { tag: "NASHVILLE_ROUTE", label: "Broadway, Gulch & More", img: featureBroadwayImg },
            ].map((f, i) => (
              <div key={i} className="group relative h-28 sm:h-40 liquid-glass-card rounded-2xl overflow-hidden cursor-pointer" data-testid={`text-feature-${['enclosed','vip','route'][i]}`}>
                <div className="absolute inset-0">
                  <img src={f.img} alt={f.label} className="w-full h-full object-cover opacity-40 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full pl-4 sm:pl-6 flex items-center">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-crimson-500 font-semibold block mb-1">{f.tag}</span>
                    <h3 className="text-sm sm:text-xl font-bold font-display text-white group-hover:text-crimson-400 transition-colors uppercase">{f.label}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => navigate('/pricing')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-sites-next">
              Pricing <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function PricingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/pricing" />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-4xl">
          <SectionHeader tag="Pricing Matrix" title="Party Bus" titleAccent="Pricing" subtitle="2 hour minimum booking. Additional hours available tailored to fit your event." />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-10">
            {[
              { title: "Bachelorette Bash", p1: "$495", p1l: "Sun\u2013Thu", p2: "$595", p2l: "Fri\u2013Sat", desc: "2\u2011hour private party bus, up to 20 guests", tid: "text-pricing-bach", img: bacheloretteImg },
              { title: "Broadway Birthday", p1: "$475", p1l: "Sun\u2013Thu", p2: "$575", p2l: "Fri\u2013Sat", desc: "2\u2011hour rolling nightclub, custom playlist", tid: "text-pricing-bday", img: birthdayImg },
              { title: "Game Day Tailgate", p1: "$695", p1l: "per group", p2: "", p2l: "", desc: "3\u2011hour Titans or Preds pre\u2011game party bus", tid: "text-pricing-game", img: tailgateImg },
              { title: "Corporate & Events", p1: "Custom", p1l: "Quote", p2: "", p2l: "", desc: "Based on route, timing, and guest count", tid: "text-pricing-corp", img: corporateImg },
            ].map((p, i) => (
              <div key={i} className="group relative liquid-glass-card rounded-2xl overflow-hidden cursor-pointer h-48 sm:h-56" onClick={() => openBooking('custom')}>
                <div className="absolute inset-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15"></div>
                </div>
                <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-end">
                  <h2 className="font-display text-xs sm:text-sm text-crimson-500 uppercase tracking-widest mb-2" data-testid={p.tid}>{p.title}</h2>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-white">{p.p1}</span>
                    <span className="text-sm text-neutral-300 font-medium">{p.p1l}</span>
                  </div>
                  {p.p2 && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-white">{p.p2}</span>
                      <span className="text-sm text-neutral-300 font-medium">{p.p2l}</span>
                    </div>
                  )}
                  <p className="text-xs text-neutral-300 font-medium mt-1">{p.desc}</p>
                  <div className="flex items-center gap-2 text-crimson-500 text-xs font-bold uppercase tracking-widest sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Book Now <iconify-icon icon="solar:arrow-right-linear" className="text-sm" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
            <button onClick={() => navigate('/shuttle')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-pricing-next">
              Shuttle Service <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function ShuttlePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('shuttle');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/shuttle" />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-4xl">
          <SectionHeader tag="Shuttle Protocol" title="Nashville Shuttle" titleAccent="Service" subtitle="Custom shuttle and group transportation packages for Nashville, TN." />

          <div className="relative liquid-glass-card rounded-2xl overflow-hidden mb-6 sm:mb-12">
            <div className="absolute inset-0">
              <img src={shuttleGroupImg} alt="Party N Ride Nashville group shuttle" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
            <div className="relative z-10 p-5 sm:p-10">
              <h2 className="sr-only">Party Bus Shuttle Service in Nashville TN - Corporate & Group Transportation</h2>

              <div className="relative rounded-2xl overflow-hidden mb-5 sm:mb-8 h-48 sm:h-64 md:h-80">
                <img src={shuttleGroupImg} alt="Party N Ride Nashville group photo in front of party bus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                  <span className="liquid-glass-phone px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-display font-bold text-white uppercase tracking-widest">Group Transportation</span>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-neutral-100 font-body font-semibold leading-relaxed mb-4 sm:mb-8 tracking-wide" data-testid="text-shuttle-description">
                At Party N Ride <span className="font-nashville text-crimson-400">NASHVILLE</span>, we offer custom shuttle - only party bus/group transportation packages you can use for corporate, special occasion or general group shuttle needs in <span className="font-nashville text-crimson-400">Nashville</span>, TN. Whether it's one way or round trip, we can take your group from point A to B comfortably and efficiently!
              </p>

              <div className="border-l-2 border-crimson-400 pl-3 sm:pl-6 py-2 sm:py-4 mb-4 sm:mb-8">
                <h3 className="text-crimson-400 font-display text-sm sm:text-base tracking-widest uppercase">Call today to inquiry about pricing for your tailored needs!</h3>
              </div>

              <div className="flex flex-col items-center gap-3">
                <GlassPhoneBar testId="link-shuttle-phone" />
                <button onClick={() => navigate('/faq')} className="text-neutral-200 font-bold uppercase tracking-widest text-sm hover:text-crimson-400 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-shuttle-next">
                  FAQ's <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

const FAQ_DATA = [
  { q: "Is there a bathroom on board?", a: "No, 1 hour into ride there is a stop for a bathroom break." },
  { q: "Can we extend our party time longer than pre-booked?", a: "Yes, additional time can be added dependent on availability." },
  { q: "Are tours cancelled due to rain or inclement weather?", a: "We ride either rain or shine with exception to severe weather warnings being issued." },
  { q: "Should we tip the driver and attendant?", a: "We strive to please, greatly appreciated!" },
  { q: "Is smoking allowed on bus?", a: "No smoking is not allowed on bus." },
  { q: "What is the cancellation policy?", a: "Reservations have to be cancelled more than 14 days prior to scheduled booking. Payment will be refunded minus a 25% non- refundable deposit." },
  { q: "Are ice and cups provided?", a: "Yes, plain cups, ice and custom-built wet bars for safe storage of beverages." },
  { q: "Is BYOB allowed?", a: "Yes, bring your own beverages (No glass, all beverages must meet allowed guidelines.)" },
];

export function FaqPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/faq" />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-4xl py-4 sm:py-8">
          <SectionHeader tag="Support Protocol" title="Frequently Asked" titleAccent="Questions" subtitle="Everything you need to know before your ride." />

          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="group liquid-glass rounded-2xl p-3 sm:p-6" data-testid={`faq-item-${i}`}>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <h2 className="text-xs sm:text-base font-display text-neutral-900 tracking-wide uppercase pr-3">{faq.q}</h2>
                    <span className="text-[9px] sm:text-[10px] font-mono text-crimson-600 tracking-widest shrink-0">FAQ_{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-neutral-800 font-body font-medium text-[11px] sm:text-sm tracking-wide">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
            <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
            <button onClick={() => navigate('/contact')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-faq-next">
              Contact Us <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest('POST', '/api/contacts', data);
      return res.json();
    },
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/contact" />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
          <div className="flex-1 liquid-glass rounded-2xl p-4 sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1 text-crimson-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                <iconify-icon icon="solar:letter-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                <span>Contact Protocol</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-display font-bold text-neutral-900 tracking-tighter uppercase mb-4 sm:mb-6">
                Get In <span className="text-crimson-600">Touch</span>
              </h1>
              {submitted ? (
                <div className="text-center py-6 sm:py-8" data-testid="contact-success">
                  <div className="text-4xl sm:text-5xl mb-4">&#9993;</div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 uppercase tracking-widest mb-2">Message Sent!</h3>
                  <p className="text-neutral-800 font-semibold">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 focus:border-crimson-600 font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-xl" data-testid="input-contact-name" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 focus:border-crimson-600 font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-xl" data-testid="input-contact-email" />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 focus:border-crimson-600 font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-xl" data-testid="input-contact-phone" />
                  <textarea placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-3 sm:px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/50 focus:border-crimson-600 font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide resize-none text-sm sm:text-base rounded-xl" data-testid="input-contact-message" />
                  <button type="submit" disabled={mutation.isPending} className="w-full cta-gradient text-white font-display font-bold text-sm sm:text-base py-3 sm:py-4 uppercase tracking-widest rounded-xl disabled:opacity-50 min-h-[44px] shadow-[0_6px_24px_rgba(14,165,233,0.3)]" data-testid="button-submit-contact">
                    <span className="relative z-10">{mutation.isPending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                  {mutation.isError && <p className="text-crimson-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-72 liquid-glass rounded-2xl p-5 sm:p-8 flex flex-col justify-center items-center">
            <div className="relative z-10 text-center">
              <img src={logoImg} alt="Party N Ride Nashville" className="h-10 sm:h-12 object-contain mb-4 sm:mb-6 mx-auto" data-testid="img-contact-logo" />
              <h2 className="text-base sm:text-lg font-display font-bold uppercase tracking-widest text-neutral-900 mb-1">PartyNRide</h2>
              <h3 className="text-xl sm:text-2xl font-nashville text-crimson-500 mb-3 sm:mb-4">Nashville</h3>
              <a href="tel:6153374342" className="liquid-glass-phone inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl mb-3 sm:mb-4 min-h-[44px] no-underline w-full" data-testid="link-contact-phone">
                <iconify-icon icon="solar:phone-calling-bold" className="text-lg text-crimson-600" style={{ strokeWidth: 1.5 }}></iconify-icon>
                <span className="relative z-10 font-display font-bold text-crimson-600 text-lg sm:text-xl">615-337-4342</span>
              </a>
              <p className="text-neutral-800 font-semibold text-sm" data-testid="text-contact-address">1120 Dickerson Pike</p>
              <p className="text-neutral-800 font-semibold text-sm mb-4 sm:mb-6"><span className="font-nashville text-crimson-500">Nashville</span>, TN 37208</p>
              <button onClick={() => openBooking('custom')} className="w-full cta-gradient text-white font-display font-bold py-3 uppercase tracking-widest text-xs sm:text-sm rounded-xl min-h-[44px] shadow-[0_6px_24px_rgba(14,165,233,0.3)]" data-testid="button-contact-book">
                <span className="relative z-10">Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default HeroPage;
