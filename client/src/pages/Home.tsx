import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

import logoImg from '@assets/logo.png';
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4" data-testid="booking-modal">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-void-800 rounded-none sm:rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] border border-neutral-700 flex flex-col overflow-hidden -skew-x-3 sm:-skew-x-6">
        <div className="skew-x-3 sm:skew-x-6 flex flex-col h-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-700 shrink-0">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-widest">Book Your Ride</h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-crimson-600 text-2xl font-bold transition-colors" data-testid="button-close-modal">&times;</button>
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
    <nav className="fixed top-0 w-full z-50 bg-void-900/95 backdrop-blur-md border-b border-neutral-800 shadow-[0_2px_20px_rgba(220,38,38,0.1)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <img src={logoImg} alt="Party N Ride Nashville - Premier Party Bus and Shuttle Service" className="h-10 sm:h-12 object-contain cursor-pointer filter brightness-0 invert" onClick={() => navigate("/")} data-testid="img-logo" />
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map(item => (
              <button key={item.path} onClick={() => navigate(item.path)} className={`font-display font-bold uppercase tracking-wider text-xs px-3 py-1.5 transition-all duration-300 ${currentPage === item.path ? 'text-crimson-600 border-b-2 border-crimson-600' : 'text-neutral-400 hover:text-white border-b-2 border-transparent hover:border-neutral-600'}`} data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]/g, '')}`}>{item.label}</button>
            ))}
            <button onClick={() => openBooking('custom')} className="-skew-x-12 bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2 ml-3 transition-all duration-300 group" data-testid="button-nav-book">
              <span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-xs">Book Now</span>
            </button>
          </div>
          <button className="lg:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-void-800 border-t border-neutral-800 px-4 py-4 space-y-2">
          {navItems.map(item => (
            <button key={item.path} onClick={() => { navigate(item.path); setMobileMenuOpen(false); }} className={`block w-full text-left font-display font-bold uppercase tracking-wider text-base py-2.5 px-3 transition-all duration-200 ${currentPage === item.path ? 'text-crimson-600 border-l-2 border-crimson-600 bg-void-700' : 'text-neutral-300 hover:text-white hover:bg-void-700'}`}>{item.label}</button>
          ))}
          <button onClick={() => { openBooking('custom'); setMobileMenuOpen(false); }} className="block w-full bg-crimson-600 text-white font-display font-bold py-3 uppercase tracking-wider text-base text-center hover:bg-crimson-700 transition-colors mt-2">Book Now</button>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-void-900 border-t border-neutral-800 py-2 px-3 sm:px-6 text-center z-20 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        <p className="text-neutral-500 text-[10px] sm:text-xs font-display tracking-wide">
          Designed and managed by{' '}
          <a href="https://build.seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-crimson-600 hover:text-crimson-500 transition-colors" data-testid="link-footer-seriousmindz">
            SeriousMindz AI
          </a>
        </p>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://www.theparkingguys.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-[10px] sm:text-xs font-display tracking-wide transition-colors" data-testid="link-footer-parkingguys">
            The Parking Guys
          </a>
          <span className="text-neutral-700 text-[10px]">|</span>
          <a href="https://seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-[10px] sm:text-xs font-display tracking-wide transition-colors" data-testid="link-footer-seriousmindz-main">
            seriousmindz.ai
          </a>
          <span className="text-neutral-700 text-[10px]">|</span>
          <a href="https://api.seriousmindz.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-[10px] sm:text-xs font-display tracking-wide transition-colors" data-testid="link-footer-seriousmindz-api">
            api.seriousmindz.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-void-900" style={{ margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={skylineBg} alt="" className="w-full h-full object-cover object-center opacity-80" />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-void-900/20 via-transparent to-void-900/30 pointer-events-none"></div>
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-cyber-grid bg-[length:40px_40px]"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none scanlines opacity-20 mix-blend-overlay"></div>
      <div className="relative z-10 h-full w-full overflow-hidden flex flex-col">
        {children}
        <Footer />
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, titleAccent, subtitle }: { tag: string; title: string; titleAccent: string; subtitle: string }) {
  return (
    <div className="mb-6 sm:mb-10 border-l-4 border-crimson-600 pl-4 sm:pl-6 py-2">
      <div className="flex items-center gap-2 mb-2 text-crimson-600 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
        <iconify-icon icon="solar:music-notes-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
        <span>{tag}</span>
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tighter uppercase mb-2">
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-600 to-crimson-900">{titleAccent}</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl font-medium tracking-wide">{subtitle}</p>
    </div>
  );
}

function SkewedCTA({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="-skew-x-12 bg-transparent border border-crimson-600 text-crimson-600 hover:bg-crimson-600 hover:text-white transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 group shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
      <span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-sm sm:text-base flex items-center gap-2 justify-center">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/" />
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-4 sm:mb-6">
              <span className="block font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-[0.3em] uppercase text-crimson-600 whitespace-nowrap">
                &#9834; Music City &#9834;
              </span>
              <span className="block font-nashville text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-wide text-white whitespace-nowrap -mt-1">
                &#9835; Nashville &#9835;
              </span>
              <span className="block font-display text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-[0.5em] uppercase text-crimson-600 whitespace-nowrap">
                TENNESSEE
              </span>
              <span className="block font-script text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight -rotate-2 text-crimson-600 whitespace-nowrap">
                Premier Party
              </span>
              <span className="block font-script text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight -rotate-2 text-crimson-600 whitespace-nowrap ml-2 sm:ml-8 md:ml-12">
                Bus
              </span>
              <span className="block font-script text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight -rotate-2 text-white whitespace-nowrap ml-4 sm:ml-16 md:ml-24 mt-1">
                & Shuttle Service
              </span>
            </h1>
            <h2 className="sr-only">Nashville's Premier Party Bus and Shuttle Service - Book Your Ride Today</h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-body mb-4 sm:mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide" data-testid="text-hero-description">
              Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out. Cups, coolers, ice, LED lighting, and a pro driver included.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center lg:justify-start">
              <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
              <a href="tel:6153374342" className="text-base sm:text-lg md:text-xl font-display font-bold text-crimson-600 hover:text-white transition-colors" data-testid="link-hero-phone">
                Call NOW: 615-337-4342
              </a>
            </div>
            <button onClick={() => navigate('/packages')} className="mt-4 sm:mt-6 text-neutral-400 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2 mx-auto lg:mx-0" data-testid="button-hero-next">
              View Packages <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col items-center justify-center lg:justify-end gap-3 sm:gap-4 relative mt-2 lg:mt-0">
            <div className="absolute inset-0 bg-crimson-600/10 rounded-full blur-3xl animate-pulse w-3/4 h-3/4 m-auto"></div>
            <div className="relative -skew-x-12 border border-crimson-900/50 bg-void-800 p-1.5 sm:p-2 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
              <video autoPlay loop muted playsInline className="w-[160px] h-[140px] sm:w-[220px] sm:h-[180px] md:w-[280px] md:h-[220px] skew-x-12 object-cover" data-testid="video-hero">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative -skew-x-12 border border-crimson-900/50 bg-void-800 p-1.5 sm:p-2 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
              <video autoPlay loop muted playsInline className="w-[160px] h-[140px] sm:w-[220px] sm:h-[180px] md:w-[280px] md:h-[220px] skew-x-12 object-cover" data-testid="video-hero-2">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/packages" />
      <div className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20">
        <SectionHeader tag="Nashville Party Bus Matrix v.1.0" title="Party" titleAccent="Protocols" subtitle="Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-8 sm:gap-y-12 w-full max-w-7xl">
          {cards.map((card, i) => (
            <div key={i} className={`group relative w-full h-[260px] sm:h-[300px] md:h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl cursor-pointer ${i % 2 === 1 ? 'sm:mt-8' : ''}`} onClick={() => openBooking(card.pkg)} data-testid={`card-package-${card.pkg}`}>
              <div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out" style={{ backgroundImage: `url(${card.img})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">{card.title}</h3>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">{card.num}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mb-3 leading-tight">{card.desc}</p>
                <p className="text-xs text-neutral-500 mb-3">
                  From <span className="text-crimson-600 font-semibold">{card.priceA}</span>{card.priceB && <> &middot; <span className="text-crimson-600 font-semibold">{card.priceB}</span></>}
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-testid={`button-book-${card.pkg}`}>
                  Book {card.title.split(' ')[0]} <iconify-icon icon="solar:arrow-right-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
          <a href="tel:6153374342" className="text-base sm:text-lg font-display font-bold text-neutral-400 flex items-center gap-2" data-testid="link-packages-phone">
            Call NOW: <span className="text-crimson-600 animate-text-glow">615-337-4342</span>
          </a>
          <button onClick={() => navigate('/sites')} className="text-neutral-500 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2" data-testid="button-packages-next">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/sites" />
      <div className="flex-1 flex flex-col items-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20 overflow-y-auto">
        <div className="w-full max-w-7xl py-4 sm:py-8">
          <SectionHeader tag="Nashville Destinations" title="Nashville" titleAccent="Sites" subtitle="Great attractions, landmarks and fun sites that make a perfect stop or scenic route." />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {SITES.map((site, i) => (
              <div key={i} className="group -skew-x-12 bg-void-800 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 p-3 sm:p-4 cursor-default" data-testid={`text-site-${i}`}>
                <span className="block skew-x-12 text-white font-display text-xs sm:text-sm tracking-wide uppercase group-hover:text-crimson-500 transition-colors">{site}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 border-b border-neutral-800 pb-4 sm:pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tighter uppercase mb-2">
                Ride <span className="text-crimson-600">Protocol</span>
              </h2>
              <p className="text-neutral-500 font-medium tracking-wide text-sm sm:text-base">How your Nashville party bus goes from idea to &ldquo;best night of the trip&rdquo;.</p>
            </div>
            <SkewedCTA onClick={() => openBooking('custom')} label="Check Availability" />
          </div>

          <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -z-10"></div>
            {[
              { step: "01", title: "Lock Your Date", desc: "Choose your date, time, and package. Weekends often sell out 2\u20134 weeks in advance.", icon: "solar:cursor-square-linear" },
              { step: "02", title: "Plan The Route", desc: "We help you dial in pickup, photo stops, bathroom breaks, and drop\u2011off so the night flows.", icon: "solar:map-linear" },
              { step: "03", title: "Stock & Show Up", desc: "Bring your drinks (no glass), we handle cups, coolers, ice, and a pro driver to keep it smooth.", icon: "solar:cup-linear" },
              { step: "04", title: "Ride & Repeat", desc: "We roll, you dance, and your crew walks away saying \u201Cthat was the best part of the trip\u201D.", icon: "solar:emoji-funny-circle-linear" },
            ].map((s, i) => (
              <div key={s.step} className={`group relative w-full md:w-1/4 h-40 sm:h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between ${i % 2 === 1 ? 'md:translate-y-8' : ''}`} data-testid={`text-step-${s.step}`}>
                <div className="skew-x-12 flex justify-between items-start">
                  <span className="text-[10px] sm:text-xs font-mono text-crimson-600 tracking-widest">STEP_{s.step}</span>
                  <iconify-icon icon={s.icon} className="text-xl sm:text-2xl text-neutral-600 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="skew-x-12">
                  <h3 className="text-base sm:text-xl font-display font-bold text-white uppercase mb-1">{s.title}</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
            {[
              { tag: "ALL\u2011WEATHER_COMFORT", label: "Enclosed & Climate\u2011Controlled" },
              { tag: "PRIVATE_VIP_MODE", label: "Your Crew, Your Music" },
              { tag: "NASHVILLE_ROUTE", label: "Broadway, Gulch & More" },
            ].map((f, i) => (
              <div key={i} className="group h-24 sm:h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-4 sm:pl-6 flex items-center transition-all cursor-pointer" data-testid={`text-feature-${['enclosed','vip','route'][i]}`}>
                <div className="skew-x-12">
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 block mb-1">{f.tag}</span>
                  <h3 className="text-base sm:text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">{f.label}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => navigate('/pricing')} className="text-neutral-500 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2" data-testid="button-sites-next">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/pricing" />
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20">
        <div className="w-full max-w-4xl">
          <SectionHeader tag="Pricing Matrix" title="Party Bus" titleAccent="Pricing" subtitle="2 hour minimum booking. Additional hours available tailored to fit your event." />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
            {[
              { title: "Bachelorette Bash", color: "crimson", p1: "$495", p1l: "Sun\u2013Thu", p2: "$595", p2l: "Fri\u2013Sat", desc: "2\u2011hour private party bus, up to 20 guests", tid: "text-pricing-bach" },
              { title: "Broadway Birthday", color: "white", p1: "$475", p1l: "Sun\u2013Thu", p2: "$575", p2l: "Fri\u2013Sat", desc: "2\u2011hour rolling nightclub, custom playlist", tid: "text-pricing-bday" },
              { title: "Game Day Tailgate", color: "crimson", p1: "$695", p1l: "per group", p2: "", p2l: "", desc: "3\u2011hour Titans or Preds pre\u2011game party bus", tid: "text-pricing-game" },
              { title: "Corporate & Events", color: "white", p1: "Custom", p1l: "Quote", p2: "", p2l: "", desc: "Based on route, timing, and guest count", tid: "text-pricing-corp" },
            ].map((p, i) => (
              <div key={i} className="group -skew-x-12 bg-void-800 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 p-4 sm:p-6 cursor-pointer" onClick={() => openBooking('custom')}>
                <div className="skew-x-12">
                  <h2 className={`font-display text-xs sm:text-sm ${p.color === 'crimson' ? 'text-crimson-600' : 'text-white'} uppercase tracking-widest mb-3`} data-testid={p.tid}>{p.title}</h2>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-white">{p.p1}</span>
                    <span className="text-sm text-neutral-500">{p.p1l}</span>
                  </div>
                  {p.p2 && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-white">{p.p2}</span>
                      <span className="text-sm text-neutral-500">{p.p2l}</span>
                    </div>
                  )}
                  <p className="text-xs text-neutral-500 mt-2">{p.desc}</p>
                  <div className="flex items-center gap-2 text-crimson-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                    Book Now <iconify-icon icon="solar:arrow-right-linear" className="text-sm" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
            <button onClick={() => navigate('/shuttle')} className="text-neutral-500 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2" data-testid="button-pricing-next">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/shuttle" />
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20">
        <div className="w-full max-w-4xl">
          <SectionHeader tag="Shuttle Protocol" title="Nashville Shuttle" titleAccent="Service" subtitle="Custom shuttle and group transportation packages for Nashville, TN." />

          <div className="-skew-x-12 bg-void-800 border border-neutral-800 p-6 sm:p-10 mb-8 sm:mb-12 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>
            <div className="skew-x-12">
              <h2 className="sr-only">Party Bus Shuttle Service in Nashville TN - Corporate & Group Transportation</h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-body leading-relaxed mb-5 sm:mb-8 tracking-wide" data-testid="text-shuttle-description">
                At Party N Ride <span className="font-nashville text-crimson-500">NASHVILLE</span>, we offer custom shuttle - only party bus/group transportation packages you can use for corporate, special occasion or general group shuttle needs in <span className="font-nashville text-crimson-500">Nashville</span>, TN. Whether it's one way or round trip, we can take your group from point A to B comfortably and efficiently!
              </p>

              <div className="border-l-2 border-crimson-600 pl-4 sm:pl-6 py-2 sm:py-4 mb-6 sm:mb-8">
                <h3 className="text-crimson-600 font-display text-sm sm:text-base tracking-widest uppercase">Call today to inquiry about pricing for your tailed needs!</h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a href="tel:6153374342" className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3 hover:text-crimson-600 transition-colors" data-testid="link-shuttle-phone">
                  Call NOW: <span className="text-crimson-600 animate-text-glow">615-337-4342</span>
                </a>
                <button onClick={() => navigate('/faq')} className="text-neutral-500 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2" data-testid="button-shuttle-next">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/faq" />
      <div className="flex-1 flex flex-col items-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20 overflow-y-auto">
        <div className="w-full max-w-4xl py-4 sm:py-8">
          <SectionHeader tag="Support Protocol" title="Frequently Asked" titleAccent="Questions" subtitle="Everything you need to know before your ride." />

          <div className="space-y-0">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="group -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-4 sm:p-6" data-testid={`faq-item-${i}`}>
                <div className="skew-x-12">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-sm sm:text-base font-display text-white tracking-wide uppercase pr-4">{faq.q}</h2>
                    <span className="text-[10px] font-mono text-crimson-600 tracking-widest shrink-0">FAQ_{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-neutral-500 font-body text-xs sm:text-sm tracking-wide">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
            <SkewedCTA onClick={() => openBooking('custom')} label="Book Now" />
            <button onClick={() => navigate('/contact')} className="text-neutral-500 font-bold uppercase tracking-widest text-sm hover:text-crimson-600 transition-colors flex items-center gap-2" data-testid="button-faq-next">
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
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/contact" />
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-8 pt-16 sm:pt-20">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
          <div className="flex-1 -skew-x-12 bg-void-800 border border-neutral-800 p-6 sm:p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>
            <div className="skew-x-12">
              <div className="flex items-center gap-2 mb-1 text-crimson-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                <iconify-icon icon="solar:letter-linear" className="text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                <span>Contact Protocol</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tighter uppercase mb-4 sm:mb-6">
                Get In <span className="text-crimson-600">Touch</span>
              </h1>
              {submitted ? (
                <div className="text-center py-8" data-testid="contact-success">
                  <div className="text-5xl mb-4">&#9993;</div>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 font-medium">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-void-900 border border-neutral-700 focus:border-crimson-600 outline-none font-body text-white placeholder:text-neutral-600 tracking-wide" data-testid="input-contact-name" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-void-900 border border-neutral-700 focus:border-crimson-600 outline-none font-body text-white placeholder:text-neutral-600 tracking-wide" data-testid="input-contact-email" />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-void-900 border border-neutral-700 focus:border-crimson-600 outline-none font-body text-white placeholder:text-neutral-600 tracking-wide" data-testid="input-contact-phone" />
                  <textarea placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-3 bg-void-900 border border-neutral-700 focus:border-crimson-600 outline-none font-body text-white placeholder:text-neutral-600 tracking-wide resize-none" data-testid="input-contact-message" />
                  <button type="submit" disabled={mutation.isPending} className="w-full bg-crimson-600 text-white font-display font-bold text-sm sm:text-base py-3 sm:py-4 uppercase tracking-widest hover:bg-crimson-700 transition-all disabled:opacity-50" data-testid="button-submit-contact">
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                  </button>
                  {mutation.isError && <p className="text-crimson-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-72 -skew-x-12 bg-void-800 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-center items-center relative">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson-600 -translate-x-0.5 -translate-y-0.5"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson-600 translate-x-0.5 translate-y-0.5"></div>
            <div className="skew-x-12 text-center">
              <img src={logoImg} alt="Party N Ride Nashville" className="h-10 sm:h-12 object-contain mb-4 sm:mb-6 filter brightness-0 invert mx-auto" data-testid="img-contact-logo" />
              <h2 className="text-base sm:text-lg font-display font-bold uppercase tracking-widest text-white mb-1">PartyNRide</h2>
              <h3 className="text-xl sm:text-2xl font-nashville text-crimson-500 mb-3 sm:mb-4">Nashville</h3>
              <a href="tel:6153374342" className="text-crimson-600 font-bold text-xl sm:text-2xl mb-3 sm:mb-4 animate-text-glow block hover:text-white transition-colors" data-testid="link-contact-phone">615-337-4342</a>
              <p className="text-neutral-500 font-medium text-sm" data-testid="text-contact-address">1120 Dickerson Pike</p>
              <p className="text-neutral-500 font-medium text-sm mb-4 sm:mb-6"><span className="font-nashville text-crimson-500">Nashville</span>, TN 37208</p>
              <button onClick={() => openBooking('custom')} className="w-full bg-crimson-600 text-white font-display font-bold py-2.5 sm:py-3 uppercase tracking-widest text-xs sm:text-sm hover:bg-crimson-700 transition-colors" data-testid="button-contact-book">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default HeroPage;
