// Vercel serverless function for the contact form (the Express server doesn't
// run on Vercel's serverless platform). Booking itself goes through the
// FareHarbor iframe, so this only handles the "Get in touch" form.
//
// PREVIEW BEHAVIOR: validates and acknowledges the submission so the form UX
// completes. It does NOT yet persist or forward the lead — wire this to email
// or GHL before production (see TODO) so no inquiry is lost.
export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body || {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required" });
    return;
  }

  // TODO(production): forward to GHL / email (e.g. Resend) before going live.
  console.log("[contacts] inquiry received:", { name, email });
  res.status(201).json({ ok: true });
}
