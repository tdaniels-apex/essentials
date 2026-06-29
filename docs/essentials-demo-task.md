# Apex Essentials-Tier Demo Site — VS Code Build Task

**What this is:** the standalone, browsable site behind the **"See it in action"** button on the **Essentials ($3,500)** pricing card at apex-aesthetics.co. Third and simplest of the three tier demos — Bespoke = Pinnacle, Growth = `apex-growth-demo`, **Essentials = this**. Build target: **Claude Code in VS Code**.

**Concept (locked):** It is still the **Apex Aesthetics brand** — same name, logo, marks, red, and the same content source, apex-aesthetics.co — but executed in the **Essentials visual language: clean, light, white-based, restrained.** Where Growth is bold / premium / dark, Essentials is **clean / trustworthy / fast.** This is deliberate, not a downgrade: the three demos should show visual range (cinematic dark → premium dark → clean light), and Essentials proves the entry tier still ships a polished, professional site. It is **not** a washed-out dark theme — it's an intentional light design.

**One-line job:** a real, fast, clean **3-page Apex site** where everything works — nav, contact form, SEO. No shells, no stubs anywhere (Essentials drops the Projects page, so unlike Growth there is nothing fake to hide).

---

## Part 0 — Hard rules (do not deviate without flagging)

1. **3 pages only:** Home, Services, Contact. The card advertises "Custom 1-3 Page Site" — this lands at the top of that range. **No Projects page. No About page.**
2. **Everything works.** Contact form actually sends. Internal nav resolves. SEO/meta present. **Zero stubs** — there is no shell page here at all.
3. **Still the Apex brand.** Name, logo, marks, red accent, real Apex copy pulled from the live site. Not a generic template, not a third-party client.
4. **Light / clean execution.** White or near-white backgrounds, generous whitespace, a single restrained accent. This is the defining difference from Growth — **do not carry over Growth's dark cinematic treatment.**
5. **Soften the copy.** Pull the real Apex copy from the live site, then **simplify the tone** — same facts and offer, plainer and calmer delivery. Drop the high-energy sales register (e.g. "Consistently and Predictably Turn Casual Traffic Into High-Ticket Clients"), shorten headlines, cut hype adjectives and exclamation. The voice should read clear and trustworthy, matching the clean look. **Reword, don't invent** — the content stays true to the source, only the punch comes down.

---

## Part 1 — Stack & setup

Same as Growth: **Next.js 16 App Router + TypeScript + Tailwind**, **Resend** for the contact form, **Vercel** deploy to **`essentials.apex-aesthetics.co`**.

- Repo: `apex-essentials-demo`. `create-next-app` handles `git init` + first commit.
- `.env.local` for secrets (Part 4) — **never hardcode keys; Travis provides values.**
- Drop this doc at `docs/apex-essentials-demo-vscode-task.md` and reference it from `CLAUDE.md` so Code builds from it.

---

## Part 2 — Design system (the part that differs most from Growth)

- **Base:** white / near-white (`#fff` or a very light warm or cool neutral). Dark text on light — the inverse of Growth.
- **Accent:** Apex red, used **sparingly** — buttons, links, a small highlight, an underline or rule. On a white background the hot dark-mode red can read harsh; consider a slightly **deepened / desaturated red** for legibility and a calmer feel. **Travis confirms the exact accent hex** (pull from the brand kit, tuned for white backgrounds).
- **Neutrals:** a light gray scale for section bands, borders, and muted text. At most one very light tinted section background to break up the white — no heavy color blocks.
- **Type:** the Apex system — Orbitron-style geometric display used **light-touch** (smaller, far fewer all-caps slabs than Growth) + Hanken Grotesk body. Confirm with Travis; self-host or Google Fonts with `display: swap`. Clean, readable, lots of air.
- **Logo / marks:** Apex assets in their **dark-on-light** variants (charcoal/black "A"/arch on white, **not** the white-on-black lockup). Travis supplies the light-appropriate variant or confirms pulling from the brand kit.
- **Feel:** clean, trustworthy, fast. Motion = **soft fades / gentle slide-in on scroll only.** No count-up theatrics (or very light), no WebGL. `prefers-reduced-motion` respected.
- **Components:** `Header`, `Footer`, `Section`, `ServicePillar`, `Button`, `ContactForm`, `FaqAccordion` (FAQ optional/condensed — see Contact).

---

## Part 3 — Pages

**Global chrome (every page):**
- **Header:** dark-on-light logo → Home; nav: **Home · Services · Contact**; **"WORK WITH US"** button → /contact. Mobile = hamburger drawer. Light header with a subtle bottom border or shadow — not a heavy dark bar.
- **Footer:** logo, "Proudly Serving Eastern North Carolina & Clients Nationwide Since 2023," socials (Facebook, Instagram), copyright. Light footer (light gray band), not the dark footer.

> **Content source:** still apex-aesthetics.co. Pull real Apex copy from the live **Home + "What We Do" + Contact** sections (fetch it or have Travis paste an export), **then soften per Part 0 rule 5** — simplify the tone, shorten headlines, drop the hype, keep the facts. Condense to fit the leaner 3-page Essentials format. **Reword, don't invent.**

### Home (`/`)
- **Hero:** Apex headline as a clean light hero — large readable type on white, red accent on a single word or the CTA. CTA → /contact.
- Short **mission / who-we-are** line.
- **"What We Do" teaser:** the 4 pillars condensed → link to **/services**.
- **"Brands We've Helped" logo wall** — works fine with no Projects page; it's just logos, links nowhere.
- Closing **CTA band** → /contact.
- Keep it lean — the Essentials home is short, not the section-heavy Growth home.

### Services (`/services`)
- The **4 pillars** — **Brand Identity, Web Design, Design Systems, Creative Support** — each with its supporting line from the live "What We Do" section. Clean cards or a simple list on white, restrained.
- *Optional:* light stats (Completed Projects, Industries Served, Pages Designed) — plainer than Growth's animated count-up; static or a gentle fade. **Travis's call** (default: include, static/soft).
- CTA → /contact.

### Contact (`/contact`) — **WORKING**
- The **contact form** (Part 4): Full Name, Company/Organization Name, Email Address, Budget, "Tell Us More." Submit label **"Apply To Work With Us."** Microcopy: "We review all applications within 24 hours…"
- **FAQ accordion:** optional and condensed for the leaner tier — keep ~4–6 of the live Q&As rather than the full set, or cut entirely. **Travis's call** (default: condensed FAQ kept).

---

## Part 4 — Contact form (must actually work)

Identical requirement to Growth — this is the proof, do not stub it.
- **Frontend:** controlled React form, client-side validation (required fields, email format), honeypot field, loading/success/error states, async submit handler (no raw HTML `<form>` submission logic).
- **Backend:** Next.js Route Handler `app/api/contact/route.ts` → server-side validate → send via **Resend** to a real Apex inbox → return JSON success/error.
- **Env secrets (Travis sets, never hardcoded):** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (a verified sender on a domain Travis controls, e.g. `mail.apex-aesthetics.co`).
- Light abuse protection: honeypot + basic per-IP rate limit. Success state clearly resets the form.
- **Must send for real, verified from the deployed URL.**

---

## Part 5 — SEO / analytics

- Per-page `<title>` + meta description + canonical via the Next.js metadata API.
- OpenGraph + Twitter card tags; reuse the Apex OG image.
- `sitemap.xml` + `robots.txt`. **Default `noindex, nofollow`** — it clones live Apex content and must not create duplicate-content competition with the real site. **Travis confirms.**
- Semantic HTML, heading hierarchy, descriptive alt text carried from the live site.
- Analytics hook (GA4 or Plausible) behind an env measurement ID — proves the "Analytics Setup" feature; can stay unconfigured until Travis supplies an ID.

---

## Part 6 — Responsive / performance / a11y

- Mobile-first; verify the hamburger nav, pillar reflow, and the form on a real phone.
- Next `<Image>` / WebP, lazy-load below the fold, fast LCP.
- Keyboard-navigable nav, form, and FAQ; visible focus states; `prefers-reduced-motion` disables fades.
- Light theme makes contrast easy — hold text contrast to **AA on white**.

---

## Part 7 — Deploy

- Vercel project, connect repo, set env vars (Part 4 + analytics + indexing flag).
- Domain: **`essentials.apex-aesthetics.co`** — one CNAME at WordPress.com pointing to the Vercel target, same flow as Growth.
- Verify the live contact form sends end-to-end from the deployed URL before calling it done.

---

## Part 8 — Acceptance criteria (done = all true)

1. Three pages live and linked: Home, Services, Contact. No fourth page.
2. Reads as Apex (brand, marks, real copy) **in a clean light visual language** — clearly distinct from Growth's dark premium look.
3. All internal nav and CTAs resolve; no dead links; no stubs anywhere.
4. Contact form sends for real via Resend to the configured inbox; validation, spam guard, and success/error states work; verified on the deployed URL.
5. SEO metadata, sitemap, robots, OG present; `noindex` set; analytics hook wired.
6. Responsive and accessible; fast load; `prefers-reduced-motion` respected; AA contrast on the light background.
7. Deployed to the `essentials` subdomain; env secrets set in Vercel, none hardcoded.

---

## Provide to Code when you start
- The **light-appropriate logo variant** (dark-on-white) + confirmation to pull copy/assets from apex-aesthetics.co.
- The **exact accent red hex tuned for a white background** + font confirmation.
- The **destination inbox + Resend key** (env, not code).
- Decision confirmations: **indexing** (noindex default?), **FAQ** (condensed vs cut), **Services stats** (in or out).