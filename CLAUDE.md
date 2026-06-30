@AGENTS.md

# Apex Essentials-Tier Demo

This repo is the **Essentials ($3,500)** tier demo for apex-aesthetics.co — a
rich, photo-driven, 3-page Apex small-business site behind the "See it in action"
button on the Essentials pricing card. Build spec: **`docs/task-essentials-fix.md`**
(read it before changing scope, copy, or design direction).

**The reference is foxtrailministorage.com** — a real Apex $3,500 deliverable.
Model the build on its anatomy and polish: a strong hero WITH a visual, real
photography throughout, warm benefit-led copy, and several substantive sections.
Do NOT model on apex-aesthetics.co (that's the dark Growth-tier showcase) and do
NOT reuse anything from the Growth demo. "Simple" here means tidy and
conventional — NOT sparse, blank, or text-on-white. Simple ≠ empty.

**Key constraints (from the spec):**
- **3 pages only:** Home, Services, Contact. No Projects, no About.
- **Built fresh — do NOT borrow from the Growth demo.** No shared components,
  banners, marquee, stat counters, or layouts. The ONLY things shared with Growth
  are brand tokens: **logo, accent red, fonts.** UI is its own simple component set.
- **Design = clean, conventional, structured.** White base, contained ~1180px
  column (not full-bleed), hairline borders, soft-shadow cards, one light-gray
  band for rhythm. Interest comes from layout/whitespace, not color or motion.
- **Type:** Michroma (headings + logo wordmark) + Figtree (body). Michroma is
  single-weight 400 — heading hierarchy comes from size / letter-spacing / color,
  never weight (no bold). Keep the scale restrained.
- **Motion:** minimal fade-in on scroll only; `prefers-reduced-motion` respected.
- Still the **Apex brand** with **real copy** from the live site, then **softened**
  (calmer, shorter, no hype). Reword, don't invent.
- Contact form **must actually send** via Resend — no stubs. `noindex` by default.

**Stack:** Next.js 16 App Router + TypeScript + Tailwind v4, Resend for the
contact form, deploy to `essentials.apex-aesthetics.co` on Vercel.

**Components (`src/components/`):** `Container`, `Section`, `Hero` (image),
`ServiceCard` (image), `Testimonial`, `Button`, `Header`, `Footer`, `ContactForm`,
`FaqAccordion`, `Reveal` (entrance-only motion), `Logo` — all Essentials-only.
Content & config in `src/lib/` (`content.ts`, `site.ts`). Imagery is real Apex
work pulled from apex-aesthetics.co into `/public/images` (swappable). Secrets are
env-only — see `.env.local.example`.
