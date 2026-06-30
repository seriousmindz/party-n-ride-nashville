// Vercel serverless function for the "Get in touch" contact form. Booking goes
// through the FareHarbor link; this handles inquiries.
//
// DELIVERY: forwards every valid lead so none is lost. Configure ONE of these
// env vars on the Vercel project (Settings → Environment Variables):
//   • LEAD_WEBHOOK_URL  — a GoHighLevel / Zapier / Make inbound webhook (POSTed the lead JSON)
//   • RESEND_API_KEY + LEAD_EMAIL_TO (+ optional LEAD_EMAIL_FROM) — emails the lead via Resend
// If BOTH are set, the webhook is tried first, then email as a backup.
// If NEITHER is set, the handler logs a loud error so the misconfig is visible.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort burst guard (serverless instances are ephemeral, so this only
// throttles rapid hits on a warm instance — real rate limiting belongs at the
// edge/CDN, but this stops trivial form-spam loops).
const HITS = new Map<string, { n: number; t: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = HITS.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) { HITS.set(ip, { n: 1, t: now }); return false; }
  rec.n += 1;
  return rec.n > MAX_PER_WINDOW;
}

async function forwardLead(lead: {
  name: string; email: string; phone: string; message: string; source: string;
}): Promise<boolean> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  const emailFrom = process.env.LEAD_EMAIL_FROM || "Party 'N Ride <onboarding@resend.dev>";
  let delivered = false;

  if (webhook && /^https:\/\//i.test(webhook)) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      });
      if (r.ok) delivered = true;
      else console.error("[contacts] webhook rejected", r.status);
    } catch (err) {
      console.error("[contacts] webhook error", (err as Error)?.message);
    }
  }

  if (!delivered && resendKey && emailTo) {
    try {
      const subject = `New ride inquiry — ${lead.name}`;
      const html =
        `<h2>New inquiry from partynridenashville.com</h2>` +
        `<p><strong>Name:</strong> ${esc(lead.name)}</p>` +
        `<p><strong>Email:</strong> ${esc(lead.email)}</p>` +
        `<p><strong>Phone:</strong> ${esc(lead.phone || "—")}</p>` +
        `<p><strong>Message:</strong><br/>${esc(lead.message).replace(/\n/g, "<br/>")}</p>`;
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: emailFrom, to: [emailTo], reply_to: lead.email, subject, html }),
        signal: AbortSignal.timeout(8000),
      });
      if (r.ok) delivered = true;
      else console.error("[contacts] resend rejected", r.status, await r.text().catch(() => ""));
    } catch (err) {
      console.error("[contacts] resend error", (err as Error)?.message);
    }
  }

  return delivered;
}

function esc(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip = String(req.headers?.["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    res.status(429).json({ error: "Too many requests — please try again shortly or call us." });
    return;
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 320) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 50) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }
  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ error: "Please enter a valid email address." });
    return;
  }

  const configured = !!(process.env.LEAD_WEBHOOK_URL || (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_TO));
  if (!configured) {
    // Code is ready — a delivery destination just hasn't been set on Vercel yet.
    console.error("[contacts] LEAD NOT DELIVERED — set LEAD_WEBHOOK_URL or RESEND_API_KEY+LEAD_EMAIL_TO on the Vercel project.");
    res.status(201).json({ ok: true });
    return;
  }

  const delivered = await forwardLead({ name, email, phone, message, source: "partynridenashville.com" });
  if (!delivered) {
    res.status(502).json({ error: "We couldn't send your message right now. Please call us — we'd love to help." });
    return;
  }
  res.status(201).json({ ok: true });
}

function safeParse(s: string): any {
  try { return JSON.parse(s); } catch { return {}; }
}
