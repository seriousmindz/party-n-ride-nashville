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
import skylineBg from '@assets/nashville_skyline_bg.png';

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
      <div className="relative bg-white shadow-2xl w-full h-full sm:max-w-4xl sm:h-[90vh] sm:rounded-lg border-0 sm:border border-neutral-200 flex flex-col overflow-hidden sm:-skew-x-6">
        <div className="sm:skew-x-6 flex flex-col h-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-200 shrink-0">
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
            <button onClick={() => openBooking('custom')} className="-skew-x-12 bg-crimson-600/90 border border-crimson-500 hover:bg-crimson-500 text-white px-5 py-2 ml-3 transition-all duration-300 group" data-testid="button-nav-book">
              <span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-xs">Book Now</span>
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
          <button onClick={() => { openBooking('custom'); setMobileMenuOpen(false); }} className="block w-full bg-crimson-600 text-white font-display font-bold py-3 uppercase tracking-wider text-sm text-center hover:bg-crimson-700 transition-colors mt-2 min-h-[44px]">Book Now</button>
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

function SkewedCTA({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="sm:-skew-x-12 bg-crimson-600/90 border border-crimson-500 text-white hover:bg-crimson-500 transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 group shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] min-h-[44px] w-full sm:w-auto">
      <span className="block sm:skew-x-12 font-display font-bold uppercase tracking-widest text-sm sm:text-base flex items-center gap-2 justify-center">
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
              <a href="tel:6153374342" className="text-base sm:text-lg md:text-xl font-display font-bold text-crimson-600 hover:text-crimson-700 transition-colors min-h-[44px] flex items-center" data-testid="link-hero-phone">
                Call NOW: 615-337-4342
              </a>
            </div>
            <button onClick={() => navigate('/packages')} className="mt-4 sm:mt-6 text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 mx-auto lg:mx-0 min-h-[44px]" data-testid="button-hero-next">
              View Packages <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col items-center justify-center lg:justify-end gap-3 sm:gap-4 relative">
            <div className="absolute inset-0 bg-crimson-600/10 rounded-full blur-3xl animate-pulse w-3/4 h-3/4 m-auto"></div>
            <div className="relative sm:-skew-x-12 border border-neutral-200 bg-white/50 p-1 sm:p-2 shadow-md rounded-md sm:rounded-none">
              <div className="hidden sm:block absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
              <div className="hidden sm:block absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
              <video autoPlay loop muted playsInline className="w-[140px] h-[120px] sm:w-[220px] sm:h-[180px] md:w-[280px] md:h-[220px] sm:skew-x-12 object-cover rounded-sm sm:rounded-none" data-testid="video-hero">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative sm:-skew-x-12 border border-neutral-200 bg-white/50 p-1 sm:p-2 shadow-md rounded-md sm:rounded-none">
              <div className="hidden sm:block absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
              <div className="hidden sm:block absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
              <video autoPlay loop muted playsInline className="w-[140px] h-[120px] sm:w-[220px] sm:h-[180px] md:w-[280px] md:h-[220px] sm:skew-x-12 object-cover rounded-sm sm:rounded-none" data-testid="video-hero-2">
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
    { img: bacheloretteImg, title: "Bachelorette Bash", desc: "2\u2011hour private enclosed party bus for up to 20 guests, BYOB, cups, coolers, and ice included. Cruise Broadway, The Gulch, and Midtown with bathroom and photo stops.", price: "From $495 Sun\u2013Thu \u00B7 From $595 Fri\u2013Sat", priceA: "$495 Sun\u2013Thu", priceB: "$595 Fri\u2013Sat", pkg: "bachelorette", num: "01" },
    { img: birthdayImg, title: "Broadway Birthday", desc: "Celebrate another lap around the sun with a 2\u2011hour rolling nightclub. Custom playlist, LED club lighting, and route tailored to your favorite Nashville hotspots.", price: "From $475 Sun\u2013Thu \u00B7 From $575 Fri\u2013Sat", priceA: "$475 Sun\u2013Thu", priceB: "$575 Fri\u2013Sat", pkg: "birthday", num: "02" },
    { img: tailgateImg, title: "Game Day Tailgate", desc: "3\u2011hour Titans or Preds pre\u2011game party bus. One pickup, one stadium\u2011area drop\u2011off, and a rolling tailgate with your crew, drinks, and music.", price: "From $695 per group", priceA: "$695", priceB: "per group", pkg: "gameday", num: "03" },
    { img: corporateImg, title: "Corporate & Events", desc: "Impress clients and teams with a private shuttle that can run full party mode or a toned\u2011down lounge. Perfect for conferences, offsites, and incentive trips.", price: "Custom quotes based on route & guest count", priceA: "Custom Quote", priceB: "", pkg: "corporate", num: "04" },
  ];

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/packages" />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <SectionHeader tag="Nashville Party Bus Matrix v.1.0" title="Party" titleAccent="Protocols" subtitle="Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-4 sm:gap-y-12 w-full max-w-7xl">
          {cards.map((card, i) => (
            <div key={i} className={`group relative w-full h-[220px] sm:h-[300px] md:h-[320px] bg-void-800 sm:-skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl cursor-pointer rounded-lg sm:rounded-none ${i % 2 === 1 ? 'sm:mt-8' : ''}`} onClick={() => openBooking(card.pkg)} data-testid={`card-package-${card.pkg}`}>
              <div className="absolute inset-0 sm:skew-x-12 sm:scale-125 bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out" style={{ backgroundImage: `url(${card.img})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent sm:skew-x-12 sm:scale-125"></div>

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 sm:skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-2 sm:mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-base sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">{card.title}</h3>
                  <span className="text-xl sm:text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">{card.num}</span>
                </div>
                <p className="text-[11px] sm:text-sm text-neutral-300 font-medium mb-2 sm:mb-3 leading-tight line-clamp-3">{card.desc}</p>
                <p className="text-[11px] sm:text-xs text-neutral-300 font-medium mb-2 sm:mb-3">
                  From <span className="text-crimson-600 font-semibold">{card.priceA}</span>{card.priceB && <> &middot; <span className="text-crimson-600 font-semibold">{card.priceB}</span></>}
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-xs sm:text-sm font-bold uppercase tracking-widest sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" data-testid={`button-book-${card.pkg}`}>
                  Book {card.title.split(' ')[0]} <iconify-icon icon="solar:arrow-right-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
          <a href="tel:6153374342" className="text-base sm:text-lg font-display font-bold text-neutral-900 flex items-center gap-2 min-h-[44px]" data-testid="link-packages-phone">
            Call NOW: <span className="text-crimson-600 animate-text-glow">615-337-4342</span>
          </a>
          <button onClick={() => navigate('/sites')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-packages-next">
            Sites <span className="text-xl">&rarr;</span>
          </button>
        </div>
      </div>
    </PageShell>
  );
}

const SITES = [
  "Titan Stadium", "Bridgestone Area", "Nashville's Famous Broadway Street",
  "Captivating Skyline", "12 South", "SoBro",
  "The Gulch", "Midtown", "Music Row",
  "Country Music Hall of Fame", "National Museum of African American Music", "Iconic Murals around City",
  "Centennial Park", "Grand Ole Opry"
];

export function SitesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('custom');
  const [, navigate] = useLocation();
  const openBooking = (pkg: string) => { setBookingPackage(pkg); setBookingOpen(true); };

  return (
    <PageShell scrollable>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/sites" />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-4 md:px-8 pt-16 sm:pt-20 pb-4">
        <div className="w-full max-w-7xl py-4 sm:py-8">
          <SectionHeader tag="Nashville Destinations" title="Nashville" titleAccent="Sites" subtitle="Great attractions, landmarks and fun sites that make a perfect stop or scenic route." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-12">
            {SITES.map((site, i) => (
              <div key={i} className="group sm:-skew-x-12 bg-white/80 border border-neutral-200 hover:border-crimson-600 transition-all duration-300 p-3 sm:p-4 cursor-default rounded-md sm:rounded-none shadow-sm" data-testid={`text-site-${i}`}>
                <span className="block sm:skew-x-12 text-black font-display text-xs sm:text-sm font-bold tracking-wide uppercase group-hover:text-crimson-500 transition-colors">{site}</span>
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
              { step: "01", title: "Lock Your Date", desc: "Choose your date, time, and package. Weekends often sell out 2\u20134 weeks in advance.", icon: "solar:cursor-square-linear" },
              { step: "02", title: "Plan The Route", desc: "We help you dial in pickup, photo stops, bathroom breaks, and drop\u2011off so the night flows.", icon: "solar:map-linear" },
              { step: "03", title: "Stock & Show Up", desc: "Bring your drinks (no glass), we handle cups, coolers, ice, and a pro driver to keep it smooth.", icon: "solar:cup-linear" },
              { step: "04", title: "Ride & Repeat", desc: "We roll, you dance, and your crew walks away saying \u201Cthat was the best part of the trip\u201D.", icon: "solar:emoji-funny-circle-linear" },
            ].map((s, i) => (
              <div key={s.step} className={`group relative w-full h-36 sm:h-48 sm:-skew-x-12 bg-white/80 border border-neutral-200 hover:border-crimson-600 hover:bg-sky-50 transition-all duration-300 p-3 sm:p-6 flex flex-col justify-between rounded-md sm:rounded-none shadow-sm`} data-testid={`text-step-${s.step}`}>
                <div className="sm:skew-x-12 flex justify-between items-start">
                  <span className="text-[9px] sm:text-xs font-mono text-crimson-600 tracking-widest">STEP_{s.step}</span>
                  <iconify-icon icon={s.icon} className="text-lg sm:text-2xl text-neutral-600 group-hover:text-crimson-600 transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="sm:skew-x-12">
                  <h3 className="text-sm sm:text-xl font-display font-bold text-neutral-900 uppercase mb-1">{s.title}</h3>
                  <p className="text-[9px] sm:text-xs text-neutral-700 font-medium leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-5 sm:w-8 h-5 sm:h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
            {[
              { tag: "ALL\u2011WEATHER_COMFORT", label: "Enclosed & Climate\u2011Controlled" },
              { tag: "PRIVATE_VIP_MODE", label: "Your Crew, Your Music" },
              { tag: "NASHVILLE_ROUTE", label: "Broadway, Gulch & More" },
            ].map((f, i) => (
              <div key={i} className="group h-20 sm:h-32 sm:-skew-x-12 bg-white/80 border-l-2 border-neutral-300 hover:border-crimson-600 pl-3 sm:pl-6 flex items-center transition-all cursor-pointer rounded-md sm:rounded-none shadow-sm" data-testid={`text-feature-${['enclosed','vip','route'][i]}`}>
                <div className="sm:skew-x-12">
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-600 font-semibold block mb-1">{f.tag}</span>
                  <h3 className="text-sm sm:text-xl font-bold font-display text-neutral-900 group-hover:text-crimson-500 transition-colors uppercase">{f.label}</h3>
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
              { title: "Bachelorette Bash", color: "crimson", p1: "$495", p1l: "Sun\u2013Thu", p2: "$595", p2l: "Fri\u2013Sat", desc: "2\u2011hour private party bus, up to 20 guests", tid: "text-pricing-bach" },
              { title: "Broadway Birthday", color: "white", p1: "$475", p1l: "Sun\u2013Thu", p2: "$575", p2l: "Fri\u2013Sat", desc: "2\u2011hour rolling nightclub, custom playlist", tid: "text-pricing-bday" },
              { title: "Game Day Tailgate", color: "crimson", p1: "$695", p1l: "per group", p2: "", p2l: "", desc: "3\u2011hour Titans or Preds pre\u2011game party bus", tid: "text-pricing-game" },
              { title: "Corporate & Events", color: "white", p1: "Custom", p1l: "Quote", p2: "", p2l: "", desc: "Based on route, timing, and guest count", tid: "text-pricing-corp" },
            ].map((p, i) => (
              <div key={i} className="group sm:-skew-x-12 bg-white/80 border border-neutral-200 hover:border-crimson-600 transition-all duration-300 p-4 sm:p-6 cursor-pointer rounded-md sm:rounded-none shadow-sm" onClick={() => openBooking('custom')}>
                <div className="sm:skew-x-12">
                  <h2 className={`font-display text-xs sm:text-sm ${p.color === 'crimson' ? 'text-crimson-600' : 'text-neutral-900'} uppercase tracking-widest mb-3`} data-testid={p.tid}>{p.title}</h2>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">{p.p1}</span>
                    <span className="text-sm text-neutral-700 font-medium">{p.p1l}</span>
                  </div>
                  {p.p2 && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">{p.p2}</span>
                      <span className="text-sm text-neutral-700 font-medium">{p.p2l}</span>
                    </div>
                  )}
                  <p className="text-xs text-neutral-700 font-medium mt-2">{p.desc}</p>
                  <div className="flex items-center gap-2 text-crimson-600 text-xs font-bold uppercase tracking-widest sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 mt-3">
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

          <div className="sm:-skew-x-12 bg-white/80 border border-neutral-200 p-4 sm:p-10 mb-6 sm:mb-12 relative rounded-md sm:rounded-none shadow-sm">
            <div className="hidden sm:block absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>
            <div className="sm:skew-x-12">
              <h2 className="sr-only">Party Bus Shuttle Service in Nashville TN - Corporate & Group Transportation</h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-800 font-body font-semibold leading-relaxed mb-4 sm:mb-8 tracking-wide" data-testid="text-shuttle-description">
                At Party N Ride <span className="font-nashville text-crimson-500">NASHVILLE</span>, we offer custom shuttle - only party bus/group transportation packages you can use for corporate, special occasion or general group shuttle needs in <span className="font-nashville text-crimson-500">Nashville</span>, TN. Whether it's one way or round trip, we can take your group from point A to B comfortably and efficiently!
              </p>

              <div className="border-l-2 border-crimson-600 pl-3 sm:pl-6 py-2 sm:py-4 mb-4 sm:mb-8">
                <h3 className="text-crimson-600 font-display text-sm sm:text-base tracking-widest uppercase">Call today to inquiry about pricing for your tailed needs!</h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a href="tel:6153374342" className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-neutral-900 flex items-center gap-3 hover:text-crimson-600 transition-colors min-h-[44px]" data-testid="link-shuttle-phone">
                  Call NOW: <span className="text-crimson-600 animate-text-glow">615-337-4342</span>
                </a>
                <button onClick={() => navigate('/faq')} className="text-neutral-800 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 min-h-[44px]" data-testid="button-shuttle-next">
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

          <div className="space-y-0">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="group sm:-skew-x-12 bg-white/80 border-t border-b border-neutral-200 hover:border-crimson-600 hover:bg-sky-50 transition-all duration-300 p-3 sm:p-6" data-testid={`faq-item-${i}`}>
                <div className="sm:skew-x-12">
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
          <div className="flex-1 sm:-skew-x-12 bg-white/80 border border-neutral-200 p-4 sm:p-8 md:p-10 relative rounded-md sm:rounded-none shadow-sm">
            <div className="hidden sm:block absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>
            <div className="sm:skew-x-12">
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
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white border border-neutral-300 focus:border-crimson-600 outline-none font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-sm" data-testid="input-contact-name" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white border border-neutral-300 focus:border-crimson-600 outline-none font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-sm" data-testid="input-contact-email" />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-3 sm:px-4 py-3 bg-white border border-neutral-300 focus:border-crimson-600 outline-none font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide text-sm sm:text-base min-h-[44px] rounded-sm" data-testid="input-contact-phone" />
                  <textarea placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-3 sm:px-4 py-3 bg-white border border-neutral-300 focus:border-crimson-600 outline-none font-body text-neutral-900 placeholder:text-neutral-400 tracking-wide resize-none text-sm sm:text-base rounded-sm" data-testid="input-contact-message" />
                  <button type="submit" disabled={mutation.isPending} className="w-full bg-crimson-600 text-white font-display font-bold text-sm sm:text-base py-3 sm:py-4 uppercase tracking-widest hover:bg-crimson-700 transition-all disabled:opacity-50 min-h-[44px]" data-testid="button-submit-contact">
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                  </button>
                  {mutation.isError && <p className="text-crimson-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-72 sm:-skew-x-12 bg-white/80 border border-neutral-200 p-5 sm:p-8 flex flex-col justify-center items-center relative rounded-md sm:rounded-none shadow-sm">
            <div className="hidden sm:block absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
            <div className="sm:skew-x-12 text-center">
              <img src={logoImg} alt="Party N Ride Nashville" className="h-10 sm:h-12 object-contain mb-4 sm:mb-6 mx-auto" data-testid="img-contact-logo" />
              <h2 className="text-base sm:text-lg font-display font-bold uppercase tracking-widest text-neutral-900 mb-1">PartyNRide</h2>
              <h3 className="text-xl sm:text-2xl font-nashville text-crimson-500 mb-3 sm:mb-4">Nashville</h3>
              <a href="tel:6153374342" className="text-crimson-600 font-bold text-xl sm:text-2xl mb-3 sm:mb-4 block hover:text-crimson-700 transition-colors min-h-[44px] flex items-center justify-center" data-testid="link-contact-phone">615-337-4342</a>
              <p className="text-neutral-800 font-semibold text-sm" data-testid="text-contact-address">1120 Dickerson Pike</p>
              <p className="text-neutral-800 font-semibold text-sm mb-4 sm:mb-6"><span className="font-nashville text-crimson-500">Nashville</span>, TN 37208</p>
              <button onClick={() => openBooking('custom')} className="w-full bg-crimson-600 text-white font-display font-bold py-3 uppercase tracking-widest text-xs sm:text-sm hover:bg-crimson-700 transition-colors min-h-[44px]" data-testid="button-contact-book">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default HeroPage;
