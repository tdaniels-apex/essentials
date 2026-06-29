# Apex Essentials-Tier Demo Site — VS Code Build Task

**What this is:** the standalone, browsable site behind the **"See it in action"** button on the **Essentials ($3,500)** pricing card at apex-aesthetics.co. Third and simplest of the three tier demos — Bespoke = Pinnacle ($$$, cinematic), Growth = `apex-growth-demo` ($5–7k, premium dark), **Essentials = this ($3,500, clean entry tier)**. Build target: **Claude Code in VS Code**.

**The whole point — read this first:** these three demos sit behind three price cards. The job of the Essentials demo is to make a prospect feel, *before they read a single price*, that this is a **simpler, more affordable class of site** than Growth. The differentiation has to live in the **design** — layout, restraint, structure — not just in a color swap. A washed-out or de-colored version of the Growth site is the **failure mode**: it makes the two tiers look like the same product at two prices, which destroys the price-ladder story. Essentials must look like its **own thing**, built from scratch, that happens to wear the Apex brand.

**Concept:** still the **Apex Aesthetics brand** — logo, the red, the brand name carry over — but a **completely independent, simpler design** from Growth. Think a clean, tidy, trustworthy small-business site (the kind of polished entry-tier build a $3,500 client gets), not a custom premium agency experience. Shared with Growth = **brand tokens only** (logo, accent red, fonts). Everything else — layout, components, sections, motion, assets — is **new and simpler.**

**One-line job:** a real, fast, clean **3-page Apex site** where everything works (nav, contact form, SEO), built with its own simple component set, visibly a lower tier than Growth.

---

## Part 0 — Hard rules (do not deviate without flagging)

1. **3 pages only:** Home, Services, Contact. The card advertises "Custom 1-3 Page Site" — this lands at the top of that range. **No Projects page. No About page.**
2. **DO NOT borrow from the Growth demo.** Do not import, copy, adapt, or reference any Growth component, section, layout, hero, banner, or asset. Specifically banned: the **full-bleed banner heroes**, the **animated logo marquee**, the **scroll-driven animated stat counters**, the dark cinematic section bands. Build Essentials' UI **from scratch.** Do not open or mirror the `apex-growth-demo` repo for design. The only things shared between the two are brand tokens (logo, red, fonts).
3. **The design is the price signal.** Essentials must read as a **simpler, lower-tier site than Growth** to anyone seeing both. Simplicity here is intentional and designed — conventional, tidy, restrained — **not** Growth with the color removed. If a section feels like "Growth but white," it's wrong.
4. **Everything works.** Contact form actually sends. Internal nav resolves. SEO/meta present. **Zero stubs** — there is no shell page here at all.
5. **Still the Apex brand.** Apex name, logo, accent red. Real Apex copy pulled from the live site (then softened, rule 6). Not a third-party client, not an unbranded template.
6. **Soften the copy.** Pull real Apex copy from the live site, then **simplify the tone** — same facts and offer, plainer and calmer delivery. Drop the high-energy sales register (e.g. "Consistently and Predictably Turn Casual Traffic Into High-Ticket Clients"), shorten headlines, cut hype adjectives and exclamation. Clear and trustworthy, matching the clean look. **Reword, don't invent.**

---

## Part 1 — Stack & setup

Same stack as the other demos: **Next.js 16 App Router + TypeScript + Tailwind**, **Resend** for the contact form, **Vercel** deploy to **`essentials.apex-aesthetics.co`**.

- Repo: `apex-essentials-demo`. `create-next-app` handles `git init` + first commit.
- `.env.local` for secrets (Part 4) — **never hardcode keys; Travis provides values.**
- Drop this doc at `docs/apex-essentials-demo-vscode-task.md` and reference it from `CLAUDE.md` so Code builds from it.
- **Do not add the Growth repo as a reference or dependency.** This is a clean, independent build.

---

## Part 2 — Design system (this is where the tiers diverge — build it fresh)

The brief is **clean, conventional, structured small-business site.** Visual interest comes from **layout, whitespace, and structure — not from color and not from motion.** That distinction is what keeps it from collapsing into either "empty white page" or "Growth reskin."

- **Base & structure:** white / near-white base. Avoid a flat sea of white by using **structural devices, not color floods**: generous consistent whitespace, a contained max-width column (~1100–1200px, centered — not full-bleed), hairline borders, simple cards with a soft subtle shadow, and **one** alternating very-light-gray section band for rhythm. Sections are standard stacked blocks with even padding — predictable and tidy, the opposite of Growth's full-bleed cinematic flow.
- **Accent:** Apex red, **used sparingly** — primary buttons, links, a thin rule or small underline accent. On white the hot dark-mode red reads harsh; deepen/desaturate slightly for legibility. **Code pulls the brand red from the live site** and tunes it for white backgrounds; Travis confirms.
- **Type — differentiate here:** make **Hanken Grotesk** do almost all the work (headings + body), at a **restrained scale** (modest heading sizes, body-forward, few or no all-caps slabs). Reserve the Orbitron-style display font for the **logo / wordmark only**, so Essentials doesn't echo Growth's big display-type drama. This alone reads as a calmer, simpler tier.
- **Logo / marks:** Apex logo in its **dark-on-light** variant (charcoal/black on white, not the white-on-black lockup). No predator-eye/raven decorative marks scattered around — keep it minimal. Travis supplies the light logo variant or confirms pulling it.
- **Motion:** minimal. A gentle fade/slide-in on scroll at most, or none at all. **No marquee, no count-up, no WebGL, no parallax.** `prefers-reduced-motion` fully respected.
- **Components — Essentials-only, built new:** `Header`, `Footer`, `Section`, `Hero`, `ServiceCard`, `Button`, `ContactForm`, and optionally `FaqAccordion`. None imported or adapted from Growth. Keep them small and plain.

---

## Part 3 — Pages

**Global chrome (every page):**
- **Header:** simple light bar — dark-on-light logo → Home; nav: **Home · Services · Contact**; one **"Work With Us"** button → /contact. Subtle bottom border or light shadow. Mobile = hamburger drawer. (Plain text-weight nav, not a heavy or dark bar.)
- **Footer:** compact, single light band — logo, "Proudly Serving Eastern North Carolina & Clients Nationwide Since 2023," socials (Facebook, Instagram), copyright. One row, minimal.

> **Content source:** still apex-aesthetics.co. Pull real Apex copy from the live **Home + "What We Do" + Contact** sections (fetch it or have Travis paste an export), **then soften per rule 6** and condense hard for a lean 3-page site. **Reword, don't invent.**

### Home (`/`) — keep it short and simple
- **Hero:** plain and contained — headline + one-line subhead + a single primary CTA button → /contact. Left-aligned or centered on white (or one very light tinted band). Optional **one** clean supporting image beside it. **No full-bleed banner, no text-over-image overlay, no video.**
- **Short intro line:** one or two sentences on who Apex is / what they do. Calm, not a sales pitch.
- **"What We Do" preview:** the 4 services as a simple tidy set (2-up cards or a clean list), each a title + one line → link to **/services**. No animation.
- **Social proof (optional, NOT a marquee):** if included, a single **static** tidy row or small grid of grayscale client logos, or just a one-line trust statement ("Trusted by businesses across Eastern NC"). **Travis's call** (default: one static logo row, small; if it can't be made to feel simple, cut it).
- **Closing CTA:** a simple centered line + button → /contact. A plain section, not a dramatic banner.

### Services (`/services`)
- The **4 services** — **Brand Identity, Web Design, Design Systems, Creative Support** — each as a simple `ServiceCard` (title + one or two plain sentences from the live "What We Do" copy, softened). Clean 2-up or stacked cards, bordered or lightly shadowed on white. Restrained.
- **No animated stat counters.** If a credibility figure helps, at most one small **static** line of plain text — no count-up, no scroll trigger. Default: omit.
- Closing CTA → /contact.

### Contact (`/contact`) — **WORKING**
- The **contact form** (Part 4): Full Name, Company/Organization Name, Email Address, Budget, "Tell Us More." Submit label **"Apply To Work With Us."** Microcopy: "We review all applications within 24 hours…" Lay it out simply — single clean card or plain stacked fields, lots of whitespace.
- **FAQ accordion (optional, condensed):** keep ~4–6 of the live Q&As, or cut entirely. **Travis's call** (default: condensed FAQ kept, plain styling).

---

## Part 4 — Contact form (must actually work)

This is the proof — do not stub it.
- **Frontend:** controlled React form, client-side validation (required fields, email format), honeypot field, loading/success/error states, async submit handler (no raw HTML `<form>` submission logic).
- **Backend:** Next.js Route Handler `app/api/contact/route.ts` → server-side validate → send via **Resend** to a real Apex inbox → return JSON success/error.
- **Env secrets (Travis sets, never hardcoded):** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (a verified sender on a domain Travis controls, e.g. `mail.apex-aesthetics.co`).
- Light abuse protection: honeypot + basic per-IP rate limit. Success state clearly resets the form.
- **Must send for real, verified from the deployed URL.**

---

## Part 5 — SEO / analytics

- Per-page `<title>` + meta description + canonical via the Next.js metadata API.
- OpenGraph + Twitter card tags; Apex OG image.
- `sitemap.xml` + `robots.txt`. **Default `noindex, nofollow`** — it clones live Apex content and must not compete with the real site in search. **Travis confirms.**
- Semantic HTML, heading hierarchy, descriptive alt text carried from the live site.
- Analytics hook (GA4 or Plausible) behind an env measurement ID — proves the "Analytics Setup" feature; can stay unconfigured until Travis supplies an ID.

---

## Part 6 — Responsive / performance / a11y

- Mobile-first; verify the hamburger nav, the service cards reflow, and the form on a real phone.
- Next `<Image>` / WebP, lazy-load below the fold, fast LCP.
- Keyboard-navigable nav, form, and FAQ; visible focus states; `prefers-reduced-motion` disables any fades.
- Hold text contrast to **AA on white.**

---

## Part 7 — Deploy

- Vercel project, connect repo, set env vars (Part 4 + analytics + indexing flag).
- Domain: **`essentials.apex-aesthetics.co`** — one CNAME at WordPress.com pointing to the Vercel target, same flow as Growth.
- Verify the live contact form sends end-to-end from the deployed URL before calling it done.

---

## Part 8 — Acceptance criteria (done = all true)

1. Three pages live and linked: Home, Services, Contact. No fourth page.
2. **Visibly a simpler, lower tier than Growth.** Side by side, a stranger reads Essentials as the more affordable, entry-level site. It does **not** look like Growth with the color removed.
3. **Nothing reused from the Growth repo** — no shared components, banners, marquee, or layouts. Only brand tokens (logo, red, fonts) carry over. UI built fresh and simple.
4. Reads as Apex (logo, red, real softened copy) in its own clean, conventional, structured light design.
5. All internal nav and CTAs resolve; no dead links; no stubs anywhere.
6. Contact form sends for real via Resend to the configured inbox; validation, spam guard, and success/error states work; verified on the deployed URL.
7. SEO metadata, sitemap, robots, OG present; `noindex` set; analytics hook wired.
8. Responsive and accessible; fast load; `prefers-reduced-motion` respected; AA contrast.
9. Deployed to the `essentials` subdomain; env secrets in Vercel, none hardcoded.

---

## Provide to Code when you start
- Confirmation to **pull brand red + copy + the light logo variant from apex-aesthetics.co**, and the instruction that the **Growth repo is off-limits as a design reference.**
- Font confirmation (Hanken-forward, Orbitron for the logo only).
- The **destination inbox + Resend key** (env, not code).
- Decision confirmations: **indexing** (noindex default?), **Home logo row** (static row vs trust line vs cut), **FAQ** (condensed vs cut).