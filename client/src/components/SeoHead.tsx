import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://partynridenashville.com";

type Meta = { title: string; description: string };

// Per-route titles (≈50–60 chars) and descriptions (≈130–160 chars).
const ROUTE_META: Record<string, Meta> = {
  "/": {
    title: "Party 'N Ride Nashville | #1 BYOB Party Bus & Shuttle",
    description:
      "Nashville's #1 enclosed BYOB party bus. LED lighting, Bluetooth sound, custom routes & a pro driver for bachelorettes, birthdays, game days & corporate events.",
  },
  "/packages": {
    title: "Nashville Party Bus Packages | Party 'N Ride",
    description:
      "Bachelorette, birthday, game day & corporate party bus packages in Nashville from $475. Private enclosed bus, BYOB, LED lights, cups, coolers & ice included.",
  },
  "/sites": {
    title: "Nashville Sites & Party Bus Routes | Party 'N Ride",
    description:
      "Broadway, The Gulch, Midtown, stadiums & more — explore the Nashville landmarks and attractions that make the perfect stops on your Party 'N Ride party bus route.",
  },
  "/pricing": {
    title: "Nashville Party Bus Pricing | Party 'N Ride",
    description:
      "Transparent party bus pricing in Nashville. 2-hour minimum from $475 Sun–Thu, with bachelorette, birthday, game day & custom corporate quotes available.",
  },
  "/shuttle": {
    title: "Nashville Shuttle & Group Transportation | Party 'N Ride",
    description:
      "Custom shuttle and group transportation in Nashville, TN. One-way or round-trip party bus shuttles for corporate events, weddings & special occasions.",
  },
  "/faq": {
    title: "Party Bus FAQ | Party 'N Ride Nashville",
    description:
      "Answers about BYOB rules, bathroom stops, booking, extending your ride, weather and cancellation policy for your Nashville Party 'N Ride party bus experience.",
  },
  "/contact": {
    title: "Contact Party 'N Ride Nashville | Book at 615-337-4342",
    description:
      "Book your Nashville party bus or group shuttle with Party 'N Ride. Call 615-337-4342 or send a message — based at 1120 Dickerson Pike, Nashville, TN 37208.",
  },
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Updates per-route head tags for an SPA. Without this, every route shares the
 * single canonical/title baked into index.html, so all pages canonicalize to
 * home and collapse their individual SEO value.
 */
export function SeoHead() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location] ?? ROUTE_META["/"];
    const canonical = `${SITE_URL}${location === "/" ? "/" : location}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
  }, [location]);

  return null;
}
