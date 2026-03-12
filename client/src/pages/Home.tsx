import React from 'react';

import logoImg from '@assets/logo.png';
import bacheloretteImg from '@assets/IMG_20220526_234848_507_1772858254044.jpg';
import birthdayImg from '@assets/IMG_20220723_114303_064_1772858334450.jpg';
import tailgateImg from '@assets/IMG_20220124_211840_009_1772858028717.jpg';
import corporateImg from '@assets/20220729_124917_1772857936688.jpg';
import experienceImg from '@assets/IMG_20220522_233123_203_1772858183644.jpg';
import bgVideo from '@assets/Website_Background_Animation_Creation_1773353327622.mp4';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { icon: string, style?: React.CSSProperties }, HTMLElement>;
    }
  }
}

export default function Home() {
  return (
    <>
      {/* Global Background Elements */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-white/80 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)]"></div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 w-full flex flex-col items-center gap-32 py-24 px-4 md:px-8">

        {/* SECTION 1: PARTY BUS EXPERIENCES */}
        <section className="w-full max-w-7xl relative">
          <div className="mb-16 border-l-4 border-sky-500 pl-6 py-2">
            <div className="mb-8">
              <img src={logoImg} alt="Party 'N Ride Nashville" className="h-20 md:h-28 object-contain drop-shadow-md" />
            </div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 text-xs font-bold tracking-[0.2em] uppercase">
              <iconify-icon icon="solar:music-notes-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span>Nashville Party Bus Matrix v.1.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tighter uppercase mb-2">
              Party <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Protocols</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium tracking-wide">
              Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full">
            {/* 01: Bachelorette Bash */}
            <div className="group relative w-full h-[320px] bg-white -skew-x-12 border border-slate-200 hover:border-sky-500 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale-0 opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out" style={{ backgroundImage: `url(${bacheloretteImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-3 group-hover:border-sky-500 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight uppercase">Bachelorette Bash</h3>
                  <span className="text-3xl font-display font-bold text-slate-200 group-hover:text-sky-500 transition-colors">01</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-tight relative z-10">
                  2‑hour private enclosed party bus for up to 20 guests, BYOB, cups, coolers, and ice included. Cruise Broadway, The Gulch, and Midtown with bathroom and photo stops.
                </p>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  From <span className="text-sky-600 font-bold">$495 Sun–Thu</span> · From <span className="text-sky-600 font-bold">$595 Fri–Sat</span>
                </p>
                <div className="flex items-center gap-2 text-sky-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Bachelorette <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 02: Broadway Birthday */}
            <div className="group relative w-full h-[320px] bg-white -skew-x-12 border border-slate-200 hover:border-sky-500 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl mt-0 md:mt-8">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale-0 opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out" style={{ backgroundImage: `url(${birthdayImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-3 group-hover:border-sky-500 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight uppercase">Broadway Birthday</h3>
                  <span className="text-3xl font-display font-bold text-slate-200 group-hover:text-sky-500 transition-colors">02</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-tight relative z-10">
                  Celebrate another lap around the sun with a 2‑hour rolling nightclub. Custom playlist, LED club lighting, and route tailored to your favorite Nashville hotspots.
                </p>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  From <span className="text-sky-600 font-bold">$475 Sun–Thu</span> · From <span className="text-sky-600 font-bold">$575 Fri–Sat</span>
                </p>
                <div className="flex items-center gap-2 text-sky-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Birthday <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 03: Game Day Tailgate */}
            <div className="group relative w-full h-[320px] bg-white -skew-x-12 border border-slate-200 hover:border-sky-500 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale-0 opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out" style={{ backgroundImage: `url(${tailgateImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-3 group-hover:border-sky-500 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight uppercase">Game Day Tailgate</h3>
                  <span className="text-3xl font-display font-bold text-slate-200 group-hover:text-sky-500 transition-colors">03</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-tight relative z-10">
                  3‑hour Titans or Preds pre‑game party bus. One pickup, one stadium‑area drop‑off, and a rolling tailgate with your crew, drinks, and music.
                </p>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  From <span className="text-sky-600 font-bold">$695</span> per group
                </p>
                <div className="flex items-center gap-2 text-sky-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Game Day <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 04: Corporate & Events */}
            <div className="group relative w-full h-[320px] bg-white -skew-x-12 border border-slate-200 hover:border-sky-500 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl mt-0 md:mt-8">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale-0 opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out" style={{ backgroundImage: `url(${corporateImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-3 group-hover:border-sky-500 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight uppercase">Corporate &amp; Events</h3>
                  <span className="text-3xl font-display font-bold text-slate-200 group-hover:text-sky-500 transition-colors">04</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-tight relative z-10">
                  Impress clients and teams with a private shuttle that can run full party mode or a toned‑down lounge. Perfect for conferences, offsites, and incentive trips.
                </p>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  Custom quotes based on route, timing, and guest count.
                </p>
                <div className="flex items-center gap-2 text-sky-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get Custom Quote <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY ENCLOSED / OUR PROCESS */}
        <section className="w-full max-w-7xl relative pt-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-300 pb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter uppercase mb-2">
                Ride <span className="text-sky-600">Protocol</span>
              </h2>
              <p className="text-slate-600 font-medium tracking-wide">
                How your Nashville party bus goes from idea to “best night of the trip”.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-transparent -skew-x-12 border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 px-8 py-3 group cursor-pointer shadow-sm hover:shadow-md">
              <span className="block skew-x-12 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                Check Availability <iconify-icon icon="solar:calendar-date-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </span>
            </button>
          </div>

          <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10"></div>

            {/* Step 01 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-sky-600 font-bold tracking-widest">STEP_01</span>
                <iconify-icon icon="solar:cursor-square-linear" className="w-6 h-6 text-2xl text-slate-400 group-hover:text-sky-600 transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-1">Lock Your Date</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Choose your date, time, and package. Weekends often sell out 2–4 weeks in advance.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 02 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8 shadow-sm hover:shadow-md">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-sky-600 font-bold tracking-widest">STEP_02</span>
                <iconify-icon icon="solar:map-linear" className="w-6 h-6 text-2xl text-slate-400 group-hover:text-sky-600 transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-1">Plan The Route</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">We help you dial in pickup, photo stops, bathroom breaks, and drop‑off so the night flows.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 03 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-sky-600 font-bold tracking-widest">STEP_03</span>
                <iconify-icon icon="solar:cup-linear" className="w-6 h-6 text-2xl text-slate-400 group-hover:text-sky-600 transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-1">Stock &amp; Show Up</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Bring your drinks (no glass), we handle cups, coolers, ice, and a pro driver to keep it smooth.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 04 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8 shadow-sm hover:shadow-md">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-sky-600 font-bold tracking-widest">STEP_04</span>
                <iconify-icon icon="solar:emoji-funny-circle-linear" className="w-6 h-6 text-2xl text-slate-400 group-hover:text-sky-600 transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-1">Ride &amp; Repeat</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">We roll, you dance, and your crew walks away saying “that was the best part of the trip”.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BUS EXPERIENCE / VIDEO */}
        <section className="w-full max-w-7xl relative pt-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tighter uppercase">
              Bus <span className="text-slate-400">Experience</span>
            </h2>
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-sky-600 font-bold">
              <span>REC ●</span>
              <span>[NASHVILLE_HD]</span>
            </div>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] -skew-x-12 border-2 border-sky-200 bg-white p-2 md:p-4 shadow-xl mb-12 group">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-sky-500 -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-sky-500 translate-x-2 translate-y-2"></div>

            <div className="w-full h-full skew-x-12 overflow-hidden relative bg-slate-900 border border-slate-200">
              <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: `url(${experienceImg})` }}></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_50%),linear-gradient(90deg,rgba(0,150,255,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none mix-blend-overlay"></div>

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <button className="w-20 h-20 border-2 border-white/80 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-sky-500 hover:border-sky-500 transition-all duration-300 group-btn cursor-pointer shadow-lg">
                  <iconify-icon icon="solar:play-linear" className="w-8 h-8 text-3xl text-white ml-1 drop-shadow-md" style={{ strokeWidth: 2 }}></iconify-icon>
                </button>
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider mb-1 drop-shadow-lg">Party ’N Ride Nashville</h3>
                <p className="text-sm text-sky-300 font-mono font-bold drop-shadow-md">ENCLOSED_PARTY_BUS // BYOB_READY</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group h-32 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 pl-6 flex items-center transition-all cursor-pointer shadow-sm hover:shadow-md">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-sky-600 font-bold block mb-1">ALL‑WEATHER_COMFORT</span>
                <h4 className="text-xl font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors uppercase">
                  Enclosed &amp; Climate‑Controlled
                </h4>
              </div>
            </div>

            <div className="group h-32 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 pl-6 flex items-center transition-all cursor-pointer shadow-sm hover:shadow-md">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-sky-600 font-bold block mb-1">PRIVATE_VIP_MODE</span>
                <h4 className="text-xl font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors uppercase">
                  Your Crew, Your Music
                </h4>
              </div>
            </div>

            <div className="group h-32 -skew-x-12 bg-white border border-slate-200 hover:border-sky-500 pl-6 flex items-center transition-all cursor-pointer shadow-sm hover:shadow-md">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-sky-600 font-bold block mb-1">NASHVILLE_ROUTE</span>
                <h4 className="text-xl font-bold font-display text-slate-900 group-hover:text-sky-600 transition-colors uppercase">
                  Broadway, Gulch &amp; More
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <button className="bg-orange-500 -skew-x-12 text-white hover:bg-orange-600 transition-colors duration-300 px-12 py-5 group shadow-lg hover:shadow-xl cursor-pointer">
              <span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                Book Your Party Bus <iconify-icon icon="solar:alt-arrow-right-linear" className="w-5 h-5 text-xl" style={{ strokeWidth: 2 }}></iconify-icon>
              </span>
            </button>
          </div>
        </section>

      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="w-1 h-1 bg-sky-500"></div>
          <div className="w-1 h-1 bg-sky-500"></div>
          <div className="w-1 h-1 bg-sky-500"></div>
          <div className="w-1 h-12 bg-sky-500 mt-2"></div>
        </div>
      </div>
    </>
  );
}