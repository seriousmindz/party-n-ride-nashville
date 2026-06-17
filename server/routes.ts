import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { timingSafeEqual } from "crypto";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

/**
 * Fail-closed admin guard.
 *
 * The previous implementation compared `req.headers["x-admin-key"] !== process.env.ADMIN_KEY`.
 * When ADMIN_KEY was unset (the default on a fresh deploy), a request with no header made the
 * comparison `undefined !== undefined` → false, so the 401 was skipped and every booking/contact
 * (customer PII) became publicly readable. This guard denies access whenever the key is not
 * configured, and uses a constant-time comparison to avoid leaking the key via timing.
 */
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const configured = process.env.ADMIN_KEY;
  if (!configured) {
    return res.status(503).json({ error: "Admin API is not configured" });
  }

  const provided = req.headers["x-admin-key"];
  if (typeof provided !== "string") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const a = Buffer.from(provided);
  const b = Buffer.from(configured);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(self)");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    next();
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const data = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(data);
      res.status(201).json(booking);
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).json({ error: "Invalid booking data", details: e.errors });
      } else {
        res.status(500).json({ error: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", requireAdmin, async (_req, res) => {
    const bookings = await storage.getBookings();
    res.json(bookings);
  });

  app.get("/api/bookings/:id", requireAdmin, async (req, res) => {
    const booking = await storage.getBooking(String(req.params.id));
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  });

  app.patch("/api/bookings/:id/status", requireAdmin, async (req, res) => {
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: "Status required" });
    const booking = await storage.updateBookingStatus(String(req.params.id), status);
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  });

  app.post("/api/contacts", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.status(201).json(contact);
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: e.errors });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  app.get("/api/contacts", requireAdmin, async (_req, res) => {
    const contacts = await storage.getContacts();
    res.json(contacts);
  });

  return httpServer;
}
