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
import nashvilleRiverfrontImg from '@assets/nashville_riverfront.png';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { icon: string, style?: React.CSSProperties }, HTMLElement>;
    }
  }
}

function BookingModal({ isOpen, onClose, defaultPackage }: { isOpen: boolean; onClose: () => void; defaultPackage: string }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', packageType: defaultPackage, eventDate: '', groupSize: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest('POST', '/api/bookings', data);
      return res.json();
    },
    onSuccess: () => setSubmitted(true),
  });

  React.useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', packageType: defaultPackage, eventDate: '', groupSize: '', message: '' });
      setSubmitted(false);
      mutation.reset();
    }
  }, [isOpen, defaultPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-testid="booking-modal">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-lg max-h-[90vh] overflow-y-auto border-2 border-blue-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold" data-testid="button-close-modal">&times;</button>
        {submitted ? (
          <div className="text-center py-8" data-testid="booking-success">
            <div className="text-6xl mb-4">&#127881;</div>
            <h3 className="text-3xl font-display font-black text-slate-900 uppercase mb-4">Booking Request Sent!</h3>
            <p className="text-slate-600 font-medium mb-6">We'll reach out within 24 hours to confirm your party bus experience. Get ready to ride!</p>
            <button onClick={onClose} className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-widest hover:bg-blue-700 transition-colors" data-testid="button-close-success">Got It</button>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-display font-black text-slate-900 uppercase mb-2 tracking-tight">Book Your Ride</h3>
            <p className="text-slate-500 font-medium mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-name" />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-email" />
              <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-phone" />
              <select value={formData.packageType} onChange={e => setFormData({...formData, packageType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="select-package">
                <option value="bachelorette">Bachelorette Party</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="gameday">Game Day Tailgate</option>
                <option value="corporate">Corporate &amp; Events</option>
                <option value="shuttle">Shuttle Service</option>
                <option value="custom">Custom Package</option>
              </select>
              <input type="date" required value={formData.eventDate} onChange={e => setFormData({...formData, eventDate: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-date" />
              <input type="text" placeholder="Group Size (e.g. 10-15 people)" required value={formData.groupSize} onChange={e => setFormData({...formData, groupSize: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-group-size" />
              <textarea placeholder="Tell us about your event (optional)" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800 resize-none" data-testid="input-message" />
              <button type="submit" disabled={mutation.isPending} className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-full uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 animate-glow disabled:opacity-50" data-testid="button-submit-booking">
                {mutation.isPending ? 'Sending...' : 'Submit Booking Request'}
              </button>
              {mutation.isError && <p className="text-red-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <img src={logoImg} alt="Party N Ride Nashville" className="h-14 object-contain drop-shadow-md cursor-pointer" onClick={() => navigate("/")} data-testid="img-logo" />
          <div className="hidden lg:flex space-x-2 items-center">
            {navItems.map(item => (
              <button key={item.path} onClick={() => navigate(item.path)} className={`font-display font-bold uppercase tracking-wider text-sm px-3 py-1.5 rounded-lg border-2 transition-all duration-300 ${currentPage === item.path ? 'text-white bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30 animate-nav-glow' : 'text-slate-700 border-transparent hover:text-red-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500/20'}`} data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]/g, '')}`}>{item.label}</button>
            ))}
            <button onClick={() => openBooking('custom')} className="bg-gradient-to-r from-red-600 to-red-700 text-white font-display font-bold px-6 py-2.5 rounded-full uppercase tracking-wider text-sm hover:from-red-700 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-xl animate-glow ml-2" data-testid="button-nav-book">Book Now</button>
          </div>
          <button className="lg:hidden text-slate-800 text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2">
          {navItems.map(item => (
            <button key={item.path} onClick={() => { navigate(item.path); setMobileMenuOpen(false); }} className={`block w-full text-left font-display font-bold uppercase tracking-wider text-base py-2.5 px-3 rounded-lg transition-all duration-200 ${currentPage === item.path ? 'text-white bg-blue-600 shadow-md' : 'text-slate-800 hover:text-red-600 hover:bg-red-50'}`}>{item.label}</button>
          ))}
          <button onClick={() => { openBooking('custom'); setMobileMenuOpen(false); }} className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-display font-bold py-3 rounded-full uppercase tracking-wider text-base text-center animate-glow mt-2">Book Now</button>
        </div>
      )}
    </nav>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${nashvilleRiverfrontImg})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative z-10 h-full w-full overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-nashville text-slate-900 leading-tight tracking-wide">Nashville's</span>
              <span className="block font-script text-5xl sm:text-6xl md:text-8xl leading-tight -rotate-2 laser-text whitespace-nowrap">
                {["P","r","e","m","i","e","r"," ","P","a","r","t","y"].map((char, i) => (
                  <span key={i} className={`laser-letter${char === ' ' ? ' space-char' : ''}`} style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <span className="block font-script text-5xl sm:text-6xl md:text-8xl leading-tight -rotate-2 laser-text whitespace-nowrap ml-4 sm:ml-8 md:ml-12">
                {["B","u","s"].map((char, i) => (
                  <span key={i + 13} className="laser-letter" style={{ '--delay': `${(i + 13) * 0.15}s` } as React.CSSProperties}>{char}</span>
                ))}
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display text-blue-600 leading-tight tracking-wide uppercase mt-3 clear-both">&amp; Shuttle Service</span>
            </h1>
            <p className="text-base md:text-lg text-slate-900 font-display font-semibold mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" data-testid="text-hero-description">
              Party 'N Ride is proud to be one of Music City's premier party bus experiences. Our fully enclosed, multifunctional buses are purpose-built to support all your touring, shuttle, and event transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <button onClick={() => openBooking('custom')} className="bg-gradient-to-r from-red-600 to-red-700 text-white font-display text-lg md:text-xl px-10 py-4 rounded-full uppercase tracking-wider hover:from-red-700 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-600/30 animate-glow w-full sm:w-auto" data-testid="button-hero-book">
                Book Now
              </button>
              <a href="tel:6153374342" className="text-lg md:text-xl font-display font-bold text-blue-700 animate-text-glow hover:text-blue-800 transition-colors" data-testid="link-hero-phone">
                Call NOW: 615-337-4342
              </a>
            </div>
            <button onClick={() => navigate('/packages')} className="mt-6 text-blue-700 font-bold uppercase tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2 mx-auto lg:mx-0" data-testid="button-hero-next">
              View Packages <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl animate-pulse w-3/4 h-3/4 m-auto"></div>
            <img src={tailgateImg} alt="Party Bus Experience" className="w-full max-w-md rounded-2xl shadow-2xl relative z-10 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500" data-testid="img-hero" />
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
    { img: bacheloretteImg, title: "Bachelorette", desc: "2-hour private enclosed party bus for up to 20 guests, BYOB, cups, coolers, and ice included. Cruise Broadway, The Gulch, and Midtown.", pkg: "bachelorette", border: "hover:border-blue-600", shadow: "hover:shadow-blue-600/20", btn: "bg-blue-600 hover:bg-red-600" },
    { img: birthdayImg, title: "Birthday", desc: "Celebrate another lap around the sun with a 2-hour rolling nightclub. Custom playlist, LED club lighting, and route tailored to your favorite hotspots.", pkg: "birthday", border: "hover:border-red-600", shadow: "hover:shadow-red-600/20", btn: "bg-red-600 hover:bg-blue-600" },
    { img: tailgateImg, title: "Game Day", desc: "3-hour Titans or Preds pre-game party bus. One pickup, one stadium-area drop-off, and a rolling tailgate with your crew, drinks, and music.", pkg: "gameday", border: "hover:border-blue-600", shadow: "hover:shadow-blue-600/20", btn: "bg-blue-600 hover:bg-red-600" },
    { img: corporateImg, title: "Corporate", desc: "Impress clients and teams with a private shuttle that can run full party mode or a toned-down lounge. Perfect for conferences and offsites.", pkg: "corporate", border: "hover:border-red-600", shadow: "hover:shadow-red-600/20", btn: "bg-red-600 hover:bg-blue-600" },
  ];

  return (
    <PageShell>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultPackage={bookingPackage} />
      <NavBar openBooking={openBooking} currentPage="/packages" />
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-display text-slate-900 tracking-wide uppercase mb-1">
            Packages
          </h2>
          <p className="font-script text-2xl md:text-4xl text-blue-600 -rotate-1 mb-2">Tailered for Any Occassion</p>
          <p className="text-lg md:text-xl text-red-600 font-display uppercase tracking-widest animate-text-glow" data-testid="text-packages-subtitle">Just For YOU!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl">
          {cards.map((card, i) => (
            <div key={i} className={`group relative w-full h-[260px] md:h-[300px] bg-white rounded-2xl border-2 border-slate-200 ${card.border} transition-all duration-500 overflow-hidden shadow-xl ${card.shadow} hover:-translate-y-3`} data-testid={`card-package-${card.pkg}`}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${card.img})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end h-full">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-script text-white mb-1 drop-shadow-md">{card.title}</h3>
                  <p className="text-xs md:text-sm text-slate-200 mb-3 font-display opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-h-0 group-hover:max-h-40 overflow-hidden tracking-wide">{card.desc}</p>
                  <button onClick={() => openBooking(card.pkg)} className={`w-full ${card.btn} text-white font-bold py-2.5 rounded-xl uppercase tracking-widest transition-colors duration-300 shadow-lg text-sm`} data-testid={`button-book-${card.pkg}`}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-6">
          <a href="tel:6153374342" className="text-lg md:text-xl font-display font-black text-slate-900 flex items-center gap-3" data-testid="link-packages-phone">
            Call NOW: <span className="text-red-600 animate-text-glow">615-337-4342</span>
          </a>
          <button onClick={() => navigate('/sites')} className="text-blue-700 font-bold uppercase tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2" data-testid="button-packages-next">
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-6xl bg-slate-900 rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${experienceImg})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>

          <div className="relative z-10 text-center mb-8">
            <h2 className="mb-3 drop-shadow-lg">
              <span className="font-script text-4xl md:text-6xl text-red-600 -rotate-1">Sites</span>
            </h2>
            <p className="text-sm md:text-base text-blue-200 font-display tracking-wide max-w-3xl mx-auto" data-testid="text-sites-description">
              Great attractions, landmarks and fun sites that make a perfect stop or scenic route, whether you're doing a themed tour, sightseeing cruise, brewery crawl, or just wanting to sit back and Party N Ride <span className="font-nashville">NASHVILLE</span>!
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-center max-w-5xl mx-auto">
            {SITES.map((site, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-300 cursor-default" data-testid={`text-site-${i}`}>
                <span className="text-white font-display text-sm md:text-base tracking-wide">{site}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button onClick={() => openBooking('custom')} className="bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-full uppercase tracking-widest hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)] animate-glow" data-testid="button-sites-book">
              Book Your Route
            </button>
            <button onClick={() => navigate('/pricing')} className="text-blue-300 font-bold uppercase tracking-widest text-sm hover:text-red-500 transition-colors flex items-center gap-2" data-testid="button-sites-next">
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-3xl bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-tr-full"></div>

          <h2 className="mb-10 relative z-10">
            <span className="font-script text-5xl md:text-7xl text-red-600 -rotate-1">Pricing</span>
          </h2>

          <div className="bg-slate-50 w-full rounded-2xl p-8 md:p-10 mb-10 border border-slate-100 relative z-10">
            <h3 className="text-2xl md:text-3xl font-display text-blue-700 uppercase tracking-widest mb-3" data-testid="text-pricing-minimum">2 Hour Minimum Booking</h3>
            <p className="text-slate-500 font-display uppercase tracking-wider mb-6 text-lg">Starting Rate</p>
            <p className="text-lg md:text-xl text-slate-700 font-display italic tracking-wide">ADDITIONAL HOURS AVAILABLE TAILED TO FIT YOUR EVENT</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button onClick={() => openBooking('custom')} className="bg-red-600 text-white font-bold text-xl px-12 py-5 rounded-full uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-600/30 animate-glow" data-testid="button-pricing-book">
              Book Now
            </button>
            <button onClick={() => navigate('/shuttle')} className="text-blue-700 font-bold uppercase tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2" data-testid="button-pricing-next">
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-3xl bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-200 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/10 rounded-tl-full"></div>

          <h2 className="mb-8 relative z-10">
            <span className="font-display text-3xl md:text-5xl text-slate-900 tracking-wide uppercase">Shuttle</span>{' '}
            <span className="font-script text-4xl md:text-6xl text-blue-600 -rotate-1">Service</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-display leading-relaxed mb-8 relative z-10 tracking-wide" data-testid="text-shuttle-description">
            At Party N Ride <span className="font-nashville">NASHVILLE</span>, we offer custom shuttle - only party bus/group transportation packages you can use for corporate, special occasion or general group shuttle needs in <span className="font-nashville">Nashville</span>, TN. Whether it's one way or round trip, we can take your group from point A to B comfortably and efficiently!
          </p>

          <div className="bg-red-50 rounded-2xl p-6 w-full border border-red-100 mb-8 relative z-10">
            <p className="text-red-700 font-display text-lg tracking-wide">Call today to inquiry about pricing for your tailed needs!</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a href="tel:6153374342" className="text-2xl md:text-3xl font-display font-black text-slate-900 flex items-center gap-3 hover:text-blue-700 transition-colors" data-testid="link-shuttle-phone">
              Call NOW: <span className="text-blue-600 animate-text-glow">615-337-4342</span>
            </a>
            <button onClick={() => navigate('/faq')} className="text-blue-700 font-bold uppercase tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2" data-testid="button-shuttle-next">
              FAQ's <span className="text-xl">&rarr;</span>
            </button>
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20 overflow-y-auto">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-200 my-4">
          <h2 className="text-center mb-8">
            <span className="font-display text-2xl md:text-4xl text-slate-900 tracking-wide uppercase">Frequently Asked</span>{' '}
            <span className="font-script text-3xl md:text-5xl text-red-600 -rotate-1">Questions</span>
          </h2>
          <div className="space-y-5">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className={i < FAQ_DATA.length - 1 ? "border-b border-slate-100 pb-4" : ""} data-testid={`faq-item-${i}`}>
                <h4 className="text-base md:text-lg font-display text-blue-700 mb-1 tracking-wide">{faq.q}</h4>
                <p className="text-slate-600 font-display text-sm md:text-base tracking-wide">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <button onClick={() => openBooking('custom')} className="bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-full uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-600/30 animate-glow" data-testid="button-faq-book">
              Book Now
            </button>
            <button onClick={() => navigate('/contact')} className="text-blue-700 font-bold uppercase tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2" data-testid="button-faq-next">
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-200">
            <h2 className="mb-6">
              <span className="font-display text-2xl md:text-3xl text-slate-900 tracking-wide uppercase">Contact</span>{' '}
              <span className="font-script text-3xl md:text-4xl text-blue-600 -rotate-1">Us</span>
            </h2>
            {submitted ? (
              <div className="text-center py-8" data-testid="contact-success">
                <div className="text-5xl mb-4">&#9993;</div>
                <h3 className="text-2xl font-display font-black text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 font-medium">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-contact-name" />
                <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-contact-email" />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800" data-testid="input-contact-phone" />
                <textarea placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-slate-800 resize-none" data-testid="input-contact-message" />
                <button type="submit" disabled={mutation.isPending} className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-full uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg animate-glow disabled:opacity-50" data-testid="button-submit-contact">
                  {mutation.isPending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:w-72 bg-slate-900 rounded-3xl shadow-xl p-6 md:p-8 text-white flex flex-col justify-center items-center text-center">
            <img src={logoImg} alt="Party N Ride Nashville" className="h-14 object-contain mb-6 filter brightness-0 invert" data-testid="img-contact-logo" />
            <h3 className="text-xl font-display font-black uppercase tracking-widest mb-1">PartyNRide</h3>
            <h3 className="text-2xl font-nashville text-blue-400 mb-4">Nashville</h3>
            <a href="tel:6153374342" className="text-blue-400 font-bold text-2xl mb-4 animate-text-glow block hover:text-blue-300 transition-colors" data-testid="link-contact-phone">615-337-4342</a>
            <p className="text-slate-300 font-medium" data-testid="text-contact-address">1120 Dickerson Pike</p>
            <p className="text-slate-300 font-medium mb-6"><span className="font-nashville">Nashville</span>, TN 37208</p>
            <button onClick={() => openBooking('custom')} className="bg-red-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-red-700 transition-colors shadow-lg animate-glow" data-testid="button-contact-book">Book Now</button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default HeroPage;