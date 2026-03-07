import React from 'react';

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
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-cyber-grid bg-[length:40px_40px]"></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-void-900 via-transparent to-void-900 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-overlay scanlines opacity-20"></div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 w-full flex flex-col items-center gap-32 py-24 px-4 md:px-8">

        {/* SECTION 1: PARTY BUS EXPERIENCES */}
        <section className="w-full max-w-7xl relative">
          <div className="mb-16 border-l-4 border-crimson-600 pl-6 py-2">
            <div className="flex items-center gap-2 mb-2 text-crimson-600 text-xs font-bold tracking-[0.2em] uppercase">
              <iconify-icon icon="solar:music-notes-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
              <span>Nashville Party Bus Matrix v.1.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase mb-2">
              Party <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-600 to-crimson-900">Protocols</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl font-medium tracking-wide">
              Private, enclosed, BYOB Nashville party bus experiences engineered for bachelorettes, birthdays, game days, and VIP nights out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full">
            {/* 01: Bachelorette Bash */}
            <div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1533101681375-1b30b358e5b4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Bachelorette Bash</h3>
                  <span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">01</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3 leading-tight">
                  2‑hour private enclosed party bus for up to 20 guests, BYOB, cups, coolers, and ice included. Cruise Broadway, The Gulch, and Midtown with bathroom and photo stops.
                </p>
                <p className="text-xs text-neutral-500 mb-3">
                  From <span className="text-crimson-600 font-semibold">$495 Sun–Thu</span> · From <span className="text-crimson-600 font-semibold">$595 Fri–Sat</span>
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Bachelorette <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 02: Broadway Birthday */}
            <div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Broadway Birthday</h3>
                  <span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">02</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3 leading-tight">
                  Celebrate another lap around the sun with a 2‑hour rolling nightclub. Custom playlist, LED club lighting, and route tailored to your favorite Nashville hotspots.
                </p>
                <p className="text-xs text-neutral-500 mb-3">
                  From <span className="text-crimson-600 font-semibold">$475 Sun–Thu</span> · From <span className="text-crimson-600 font-semibold">$575 Fri–Sat</span>
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Birthday <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 03: Game Day Tailgate */}
            <div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Game Day Tailgate</h3>
                  <span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">03</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3 leading-tight">
                  3‑hour Titans or Preds pre‑game party bus. One pickup, one stadium‑area drop‑off, and a rolling tailgate with your crew, drinks, and music.
                </p>
                <p className="text-xs text-neutral-500 mb-3">
                  From <span className="text-crimson-600 font-semibold">$695</span> per group
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Game Day <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>

            {/* 04: Corporate & Events */}
            <div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
              <div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Corporate &amp; Events</h3>
                  <span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">04</span>
                </div>
                <p className="text-sm text-neutral-400 mb-3 leading-tight">
                  Impress clients and teams with a private shuttle that can run full party mode or a toned‑down lounge. Perfect for conferences, offsites, and incentive trips.
                </p>
                <p className="text-xs text-neutral-500 mb-3">
                  Custom quotes based on route, timing, and guest count.
                </p>
                <div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get Custom Quote <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY ENCLOSED / OUR PROCESS */}
        <section className="w-full max-w-7xl relative pt-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter uppercase mb-2">
                Ride <span className="text-crimson-600">Protocol</span>
              </h2>
              <p className="text-neutral-500 font-medium tracking-wide">
                How your Nashville party bus goes from idea to “best night of the trip”.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-transparent -skew-x-12 border border-crimson-600 text-crimson-600 hover:bg-crimson-600 hover:text-white transition-all duration-300 px-8 py-3 group cursor-pointer">
              <span className="block skew-x-12 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                Check Availability <iconify-icon icon="solar:calendar-date-linear" className="w-4 h-4 text-base" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </span>
            </button>
          </div>

          <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -z-10"></div>

            {/* Step 01 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-crimson-600 tracking-widest">STEP_01</span>
                <iconify-icon icon="solar:cursor-square-linear" className="w-6 h-6 text-2xl text-neutral-600 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-1">Lock Your Date</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Choose your date, time, and package. Weekends often sell out 2–4 weeks in advance.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 02 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-crimson-600 tracking-widest">STEP_02</span>
                <iconify-icon icon="solar:map-linear" className="w-6 h-6 text-2xl text-neutral-600 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-1">Plan The Route</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">We help you dial in pickup, photo stops, bathroom breaks, and drop‑off so the night flows.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 03 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-crimson-600 tracking-widest">STEP_03</span>
                <iconify-icon icon="solar:cup-linear" className="w-6 h-6 text-2xl text-neutral-600 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-1">Stock &amp; Show Up</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Bring your drinks (no glass), we handle cups, coolers, ice, and a pro driver to keep it smooth.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Step 04 */}
            <div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8">
              <div className="skew-x-12 flex justify-between items-start">
                <span className="text-xs font-mono text-crimson-600 tracking-widest">STEP_04</span>
                <iconify-icon icon="solar:emoji-funny-circle-linear" className="w-6 h-6 text-2xl text-neutral-600 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <div className="skew-x-12">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-1">Ride &amp; Repeat</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">We roll, you dance, and your crew walks away saying “that was the best part of the trip”.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BUS EXPERIENCE / VIDEO */}
        <section className="w-full max-w-7xl relative pt-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase">
              Bus <span className="text-neutral-700">Experience</span>
            </h2>
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-crimson-600">
              <span>REC ●</span>
              <span>[NASHVILLE_HD]</span>
            </div>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] -skew-x-12 border border-crimson-900/50 bg-void-800 p-2 md:p-4 shadow-[0_0_30px_rgba(220,38,38,0.1)] mb-12 group">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>

            <div className="w-full h-full skew-x-12 overflow-hidden relative bg-black border border-neutral-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <button className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-crimson-600 hover:border-crimson-600 transition-all duration-300 group-btn cursor-pointer">
                  <iconify-icon icon="solar:play-linear" className="w-8 h-8 text-3xl text-white ml-1" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </button>
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider mb-1">Party ’N Ride Nashville</h3>
                <p className="text-sm text-crimson-500 font-mono">ENCLOSED_PARTY_BUS // BYOB_READY</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-neutral-500 block mb-1">ALL‑WEATHER_COMFORT</span>
                <h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">
                  Enclosed &amp; Climate‑Controlled
                </h4>
              </div>
            </div>

            <div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-neutral-500 block mb-1">PRIVATE_VIP_MODE</span>
                <h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">
                  Your Crew, Your Music
                </h4>
              </div>
            </div>

            <div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
              <div className="skew-x-12">
                <span className="text-[10px] font-mono text-neutral-500 block mb-1">NASHVILLE_ROUTE</span>
                <h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">
                  Broadway, Gulch &amp; More
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <button className="bg-crimson-600 -skew-x-12 text-black hover:bg-white transition-colors duration-300 px-12 py-5 group shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
              <span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                Book Your Party Bus <iconify-icon icon="solar:alt-arrow-right-linear" className="w-5 h-5 text-xl" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </span>
            </button>
          </div>
        </section>

      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-8 left-8 z-50 mix-blend-difference hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="w-1 h-1 bg-crimson-600"></div>
          <div className="w-1 h-1 bg-crimson-600"></div>
          <div className="w-1 h-1 bg-crimson-600"></div>
          <div className="w-1 h-12 bg-crimson-600 mt-2"></div>
        </div>
      </div>
    </>
  );
}