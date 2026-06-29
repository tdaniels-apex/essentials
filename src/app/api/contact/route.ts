import { NextResponse } from "next/server";

/**
 * Contact form handler (Part 4).
 * Server-side validates, drops spam (honeypot + per-IP rate limit), and sends
 * the submission via Resend's REST API. The destination + sender are public and
 * identical across all three demo sites, so they're hardcoded below — only the
 * secret RESEND_API_KEY comes from env (the one var Travis sets in Vercel).
 */

export const runtime = "nodejs";

// Subject prefix so we can tell which demo site converted (Pinnacle/Growth/Essentials).
const SOURCE_TAG = "Essentials";
const CONTACT_TO = "info@apex-aesthetics.co";
const CONTACT_FROM = "Apex Demos <forms@mail.apex-aesthetics.co>";

type Payload = {
  fullName?: string;
  company?: string;
  email?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Naive in-memory per-IP limiter. Per-instance only (fine for a demo); swap for
// a shared store (e.g. Upstash) if this ever needs to be robust across instances.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't learn they were caught.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";

  if (!fullName || !email || !budget || !message || !emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please complete the required fields with a valid email." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please reach out directly." },
      { status: 500 },
    );
  }

  const html = `
    <h2>New application — Apex Aesthetics (Essentials demo)</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company) || "—"}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `[${SOURCE_TAG}] New inquiry from ${fullName}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
