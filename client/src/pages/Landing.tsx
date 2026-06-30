import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin, Instagram, Star, Users, Music, ShieldCheck, Clock, ChevronDown, Bus, MessageCircle } from "lucide-react";
import { TypewriterCycler } from "@/components/CinematicEffects";

import logoImg from "@assets/PartynRide-Logo-New-Blue_1774034577921.png";
import busCutout from "@assets/bus-cutout.webp";
import skylineBg from "@assets/nashville_riverfront_clear_sky.webp";
import galBachelorette from "@assets/IMG_20220526_234848_507_1772858254044.jpg";
import galBirthday from "@assets/IMG_20220723_114303_064_1772858334450.jpg";
import galTailgate from "@assets/IMG_20220124_211840_009_1772858028717.webp";
import galCorporate from "@assets/20220729_124917_1772857936688.webp";
import galShuttle from "@assets/IMG_20220910_192802_809_(1)_1774995948633.jpg";
import galBroadway from "@assets/stock_images/broadway_nashville.jpg";

const BOOKING_URL = "https://fareharbor.com/embeds/book/partynridenashville/?full-items=yes";
const PHONE = "615-337-4342";
const EMAIL = "partynridenashville@gmail.com";
const INSTAGRAM = "https://instagram.com/partynridenashville";

const galleryImages = [
  { src: galBachelorette, title: "Bachelorette Parties" },
  { src: galBroadway, title: "Broadway Nightlife" },
  { src: galBirthday, title: "Birthday Celebrations" },
  { src: galTailgate, title: "Game Day & Group Tours" },
  { src: galCorporate, title: "Corporate Events" },
  { src: galShuttle, title: "Private Shuttle Service" },
];

const packages = [
  { name: "Bachelorette Bash", priceA: "$495 Sun–Thu", priceB: "$595 Fri–Sat", highlight: "Up to 20 Guests · 2 Hours · BYOB", desc: "A private, enclosed party bus built for the ultimate Nashville send-off — BYOB, cups, coolers, ice, LED club lighting, and a Bluetooth sound system." },
  { name: "Broadway Birthday", priceA: "$475 Sun–Thu", priceB: "$575 Fri–Sat", highlight: "Custom Playlist · 2 Hours · LED Lights", desc: "Your rolling nightclub on wheels — custom playlist, LED mood lighting, and a route tailored to your favorite Nashville hotspots." },
  { name: "Game Day Tailgate", priceA: "$695", priceB: "per group", highlight: "3 Hours · Stadium Drop-off · Full Crew", desc: "A 3-hour Titans or Preds pre-game party bus — one pickup, one stadium-area drop-off, and a rolling tailgate with your whole crew." },
  { name: "Corporate & Events", priceA: "Custom", priceB: "Quote", highlight: "Custom Route · Any Size · Premium", desc: "Private shuttle in full party mode or an elegant lounge — perfect for conferences, team outings, offsites, and incentive trips." },
  { name: "Concert Transportation", priceA: "Custom", priceB: "Quote", highlight: "Round-trip · Any Venue", desc: "Door-to-venue round trips for shows at Bridgestone, Nissan Stadium, the Opry, and more — no parking, no hassle." },
  { name: "Custom Group Tours", priceA: "Custom", priceB: "Quote", highlight: "Your Route · Your Crew", desc: "Themed tours, sightseeing cruises, brewery crawls — we build the ride around your group, route, and timing." },
];

const sites = [
  "Nissan Stadium", "Bridgestone Arena", "Broadway Street", "12 South", "SoBro", "The Gulch",
  "Midtown", "Music Row", "Country Music Hall of Fame", "Grand Ole Opry", "Centennial Park", "Iconic Nashville Murals",
];

// Grounded in public reviews from Batch (4.7★, 17 reviews) and Facebook (5.0★).
// Replace with live Google reviews once the Google Business Profile is connected.
const reviews = [
  { name: "Birthday Group", text: "The driver and host were great — super friendly, hyped us up all night, and made bathroom stops whenever we needed. Perfect for the celebration." },
  { name: "Party of 15", text: "Jeff was amazing and made the whole ride fun — he even took great group pictures with the Nashville skyline behind us." },
  { name: "Bachelorette Party", text: "Tons of space to dance, a huge cooler and drink holders, great speakers, and karaoke. Easily the best value party bus in Nashville." },
];

const faqs: [string, string][] = [
  ["Is there a bathroom on board?", "No. One hour into the ride, there is a stop for a bathroom break."],
  ["Can we extend our party time longer than pre-booked?", "Yes. Additional time can be added depending on availability."],
  ["Are tours cancelled due to rain or inclement weather?", "We ride rain or shine, except when severe weather warnings are issued."],
  ["Should we tip the driver and attendant?", "Tips are greatly appreciated."],
  ["Is smoking allowed on the bus?", "No smoking is allowed on the bus."],
  ["What is the cancellation policy?", "Reservations must be cancelled more than 14 days prior to the scheduled booking. Payment will be refunded minus a 25% non-refundable deposit."],
  ["Are ice and cups provided?", "Yes. Plain cups, ice, and custom-built wet bars are provided for safe beverage storage."],
  ["Is BYOB allowed?", "Yes. Bring your own beverages. No glass. All beverages must meet allowed guidelines."],
];

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-black uppercase tracking-wide text-black shadow-lg shadow-yellow-500/20 transition hover:scale-105 hover:bg-yellow-300 min-h-[44px] ${className}`}>
      <Calendar size={18} /> Book Now
    </a>
  );
}

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">{eyebrow}</p>
      <h2 className="text-3xl font-black uppercase text-white md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-zinc-300">{children}</p>}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-white min-h-[44px]">
        {q}
        <ChevronDown className={`shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-zinc-300">{a}</p>}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const r = await fetch("/api/contacts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || "We couldn't send your message.");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const field = "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-yellow-400 focus:outline-none min-h-[44px]";

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-yellow-400/30 bg-white/5 p-8 text-center" data-testid="contact-success" role="status" aria-live="polite">
        <Mail className="mx-auto mb-4 text-yellow-400" size={40} />
        <h3 className="text-2xl font-black uppercase text-white">Message Sent!</h3>
        <p className="mt-2 text-zinc-300">Thanks — we'll get back to you shortly. For anything urgent, call {PHONE}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-3" data-testid="contact-form">
      <input className={field} placeholder="Your Name" aria-label="Your name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="input-name" />
      <input className={field} type="email" placeholder="Email Address" aria-label="Email address" autoComplete="email" inputMode="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="input-email" />
      <input className={field} type="tel" placeholder="Phone Number" aria-label="Phone number" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} data-testid="input-phone" />
      <textarea className={`${field} resize-none`} rows={4} placeholder="Tell us about your event (date, group size, occasion)" aria-label="Tell us about your event" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="input-message" />
      <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-yellow-400 px-6 py-3 font-black uppercase tracking-wide text-black transition hover:bg-yellow-300 disabled:opacity-50 min-h-[44px]" data-testid="button-submit">
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && <p className="text-center text-sm font-semibold text-red-400" role="status" aria-live="polite">{errorMsg || "Something went wrong."} Please call {PHONE} or try again.</p>}
    </form>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-yellow-400/30 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="Party 'N Ride Nashville home">
            <img src={logoImg} alt="Party 'N Ride Nashville logo" width={160} height={48} decoding="async" className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide text-zinc-200 lg:flex" aria-label="Main navigation">
            {['Home','Packages','Sites','Pricing','Shuttle Service','Gallery','Reviews','FAQ','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="hover:text-yellow-400">{item}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 font-black text-white"><Phone className="text-yellow-400" /> {PHONE}</a>
            <BookButton className="px-5 py-2" />
          </div>
        </div>
      </header>

      <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-xl bg-yellow-400 px-3 py-6 text-sm font-black uppercase tracking-widest text-black shadow-2xl md:block [writing-mode:vertical-rl]">
        Book Now
      </a>

      <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
        <img src={skylineBg} alt="" aria-hidden="true" width={1408} height={768} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-5 flex gap-1 text-yellow-400" aria-label="Five star rated">
              <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
            </div>
            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Nashville's <span className="block text-yellow-400">Premier Party Bus</span> &amp; Shuttle Service
            </h1>
            <p className="mt-5 max-w-xl text-xl font-semibold text-zinc-200">Ride together. Party together. Make memories.</p>
            <p className="mt-3 max-w-xl text-lg font-semibold text-zinc-300">
              Nashville's #1 party bus for{' '}
              <TypewriterCycler phrases={['Bachelorettes', 'Birthdays', 'Game Days', 'Corporate Events', 'VIP Nights Out', 'Bar Crawls', 'Broadway Tours']} className="text-yellow-400" />
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <BookButton />
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400 px-6 py-3 font-black uppercase text-yellow-400 transition hover:bg-yellow-400 hover:text-black min-h-[44px]">
                <Phone size={18} /> Call {PHONE}
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
            <img src={busCutout} alt="Party 'N Ride Nashville party bus" width={1266} height={399} fetchPriority="high" decoding="async" className="h-auto w-full drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-yellow-400/20 bg-zinc-950 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-5">
          {[[Users,"Up to 40 Passengers"],[Bus,"Premium Amenities"],[ShieldCheck,"Safe & Reliable Service"],[Music,"Premium Sound System"],[Clock,"2 Hour Minimum"]].map(([Icon, text]) => {
            const I = Icon as React.ComponentType<{ className?: string }>;
            return (
              <div key={text as string} className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center font-bold uppercase text-zinc-100"><I className="text-yellow-400" /> {text as string}</div>
            );
          })}
        </div>
      </section>

      <section id="packages" className="px-4 py-24">
        <SectionTitle eyebrow="Packages" title="Tailored for Any Occasion">Choose the experience that fits your group, your celebration, and your Nashville plans.</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="flex flex-col rounded-3xl border border-yellow-400/20 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-xl">
              <h3 className="text-2xl font-black uppercase text-white">{pkg.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-yellow-400/90">{pkg.highlight}</p>
              <p className="mt-3 flex-1 text-zinc-300">{pkg.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-2xl font-black text-yellow-400">{pkg.priceA}</span>
                <span className="text-sm font-semibold text-zinc-400">{pkg.priceB}</span>
              </div>
              <BookButton className="mt-5 w-full" />
            </div>
          ))}
        </div>
      </section>

      <section id="sites" className="bg-zinc-950 px-4 py-24">
        <SectionTitle eyebrow="Nashville Sites" title="Party N Ride Nashville">Great attractions, landmarks, and scenic routes for themed tours, sightseeing cruises, brewery crawls, and unforgettable city rides.</SectionTitle>
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => <div key={site} className="rounded-2xl border border-white/10 bg-black p-4 font-bold text-zinc-100">{site}</div>)}
        </div>
      </section>

      <section id="pricing" className="px-4 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/15 to-white/5 p-8 sm:p-10 text-center shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">Pricing</p>
          <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">2 Hour Minimum Booking</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Transparent pricing — additional hours available and tailored to your event. Book online or call for a custom quote.</p>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {packages.slice(0, 4).map((p) => (
              <div key={p.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
                <div>
                  <h3 className="font-black uppercase text-white">{p.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-zinc-400">{p.highlight}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-yellow-400">{p.priceA}</p>
                  <p className="text-xs text-zinc-400">{p.priceB}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <BookButton />
            <a href={`tel:${PHONE}`} className="rounded-full border border-white/20 px-6 py-3 font-black uppercase text-white hover:border-yellow-400 hover:text-yellow-400 min-h-[44px] inline-flex items-center justify-center">Call for Quote</a>
          </div>
        </div>
      </section>

      <section id="shuttle-service" className="bg-zinc-950 px-4 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">Shuttle Service</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">Custom Group Transportation</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">Corporate events, special occasions, one-way rides, round trips, and general group shuttle needs in Nashville. We move your group from point A to B comfortably and efficiently.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><BookButton /><a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400 px-6 py-3 font-black uppercase text-yellow-400 hover:bg-yellow-400 hover:text-black min-h-[44px]"><Mail size={18} /> Request Quote</a></div>
          </div>
          <img src={galShuttle} alt="Party 'N Ride Nashville group shuttle" loading="lazy" decoding="async" width={1200} height={900} className="rounded-[2rem] border border-yellow-400/20 shadow-2xl object-cover h-full max-h-96 w-full" />
        </div>
      </section>

      <section id="gallery" className="px-4 py-24">
        <SectionTitle eyebrow="Gallery" title="Real Nashville Memories">From Broadway nights to bachelorette parties, see why groups choose Party N Ride Nashville.</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src={img.src} alt={img.title} loading="lazy" decoding="async" width={1200} height={900} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="p-5"><h3 className="font-black uppercase text-yellow-400">{img.title}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-zinc-950 px-4 py-24">
        <SectionTitle eyebrow="Reviews" title="What Riders Say" />
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/5 px-5 py-2.5">
            <div className="flex text-yellow-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            <span className="text-sm font-bold text-white">4.7 on Batch</span><span className="text-sm text-zinc-400">· 17 reviews</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/5 px-5 py-2.5">
            <div className="flex text-yellow-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            <span className="text-sm font-bold text-white">5.0 on Facebook</span><span className="text-sm text-zinc-400">· 100% recommend</span>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-yellow-400/20 bg-black p-7">
              <div className="mb-4 flex text-yellow-400"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
              <p className="text-zinc-300">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-5 font-black uppercase text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <SectionTitle eyebrow="FAQ" title="Before You Ride" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 px-4 py-24">
        <SectionTitle eyebrow="Contact" title="Book Your Ride">Ready to party in Nashville? Book online now, send us a message, or call for a custom quote.</SectionTitle>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a href={`tel:${PHONE}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black p-6 hover:border-yellow-400"><Phone className="text-yellow-400" size={28} /><div><h3 className="font-black uppercase">Call Now</h3><p className="text-zinc-300">{PHONE}</p></div></a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black p-6 hover:border-yellow-400"><Mail className="text-yellow-400" size={28} /><div><h3 className="font-black uppercase">Email Us</h3><p className="break-all text-zinc-300">{EMAIL}</p></div></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black p-6 hover:border-yellow-400"><Instagram className="text-yellow-400" size={28} /><div><h3 className="font-black uppercase">Instagram</h3><p className="text-zinc-300">@partynridenashville</p></div></a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black p-6"><MapPin className="text-yellow-400" size={28} /><div><h3 className="font-black uppercase">Visit</h3><p className="text-zinc-300">1120 Dickerson Pike, Nashville, TN 37208</p></div></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-400/20 bg-black px-4 py-10 text-center text-zinc-400">
        <p className="font-bold text-white">Party N Ride Nashville</p>
        <p className="mt-2"><MapPin className="inline text-yellow-400" size={16} /> 1120 Dickerson Pike, Nashville, TN 37208</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Party N Ride Nashville. All rights reserved.</p>
        <p className="mt-3 text-xs">Designed and managed by <a href="https://seriousmindz.ai" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-yellow-300">SeriousMindz AI</a></p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-yellow-400/30 bg-black md:hidden">
        <a href={`tel:${PHONE}`} className="flex flex-col items-center gap-1 p-3 text-xs font-bold uppercase text-white"><Phone className="text-yellow-400" size={18} /> Call</a>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 bg-yellow-400 p-3 text-xs font-black uppercase text-black"><Calendar size={18} /> Book</a>
        <a href="#contact" className="flex flex-col items-center gap-1 p-3 text-xs font-bold uppercase text-white"><MessageCircle className="text-yellow-400" size={18} /> Quote</a>
      </div>
    </div>
  );
}
