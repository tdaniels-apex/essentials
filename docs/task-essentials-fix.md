# Apex Essentials-Tier Demo Site — VS Code Build Task

**What this is:** the standalone, browsable site behind the **"See it in action"** button on the **Essentials ($3,500)** pricing card at apex-aesthetics.co. Third of the three tier demos — Bespoke = Pinnacle ($$$, cinematic), Growth = `apex-growth-demo` ($5–7k, premium dark showcase), **Essentials = this ($3,500, clean small-business build)**. Build target: **Claude Code in VS Code**.

---

## ⭐ THE REFERENCE — read this before anything else

**Model this build on a real Apex $3,500 deliverable: https://foxtrailministorage.com/**

This is the single most important instruction in the doc. Do **not** model the Essentials site on apex-aesthetics.co — that is Apex's own dark, cinematic agency *showcase* and it is **Growth-tier work**. Translating it produces a Growth clone every time (banner hero, logo marquee, numbered 01–04 pillar cards, animated stats). **That is the failure mode and it is banned.**

Instead, study Fox Trail and mirror its **anatomy, richness, and polish**:
- A real **hero with a visual** — strong headline, location/benefit subhead, one clear primary CTA. Not text on a white page.
- **Photography throughout** — every service has a real photo; the page is visually rich, never bare type on white.
- **Plain but specific, benefit-led copy** — warm and concrete ("Get more bang for your buck… perfect for bulky items, furniture, and long-term storage"), not stripped fragments.
- **Many substantive sections** — Fox Trail's home runs ~7–8: hero → services (with photos + paragraphs) → about (rich local story + a list) → service-area/map → real reviews → closing CTA + contact form → footer.
- A **clean, conventional, trust-and-conversion** small-business structure — the opposite archetype to Growth's showcase structure.

**Borrow Fox Trail's STRUCTURE and STANDARD, not its content.** This is still an **Apex Aesthetics** site (Apex brand, Apex services, Apex copy). Do not put storage units on it. Use Fox Trail as the blueprint for *what a finished $3,500 Apex site looks and feels like*, then build Apex into that mold.

---

## Part 0 — Hard rules (do not deviate without flagging)

1. **3 pages:** Home, Services, Contact. (Fox Trail is the same set.) No Projects page, no About page — the About content lives as a section on Home, Fox-Trail style.
2. **Build to the Fox Trail standard, not stripped down.** A $3,500 site is **rich and complete** — real hero, real imagery, multiple substantive sections, specific copy. The current build is too sparse; that is wrong. Aim for the density and polish of foxtrailministorage.com.
3. **Different archetype from Growth — do not reuse anything from it.** Banned: the numbered 01–04 pillar cards, the logo marquee, full-bleed banner heroes, animated stat counters, the Growth contact layout, any Growth component or asset. Do not open or reference the `apex-growth-demo` repo. Only **brand tokens** (logo, red, fonts) carry over.
4. **Always a strong hero with a visual.** Every page leads with a real hero — image/photo treatment + headline + subhead + CTA. Never a bare text block on white.
5. **Imagery is required, everywhere.** Service cards, hero, about — all carry real images. Pull from Apex's project work at `apex-aesthetics.co/wp-content/uploads`, or use tasteful placeholders Travis swaps. A photo-rich page is what makes it read as paid work.
6. **Copy is plain but substantive.** Pull real Apex copy from the live site, then make it **warm, specific, and benefit-led** — Fox-Trail voice, not the aggressive sales register and not stripped to nothing. **Simple ≠ empty.** Reword, don't invent; keep the substance.
7. **Animation rule (firm): entrance animations only.** On Essentials-tier sites Apex uses **only** entrance animations — a single fade or slide-in as an element enters on load/scroll, played once. **No** scroll-driven sequences, parallax, continuous motion, marquees, count-ups, or heavy hover choreography. `prefers-reduced-motion` disables even the entrance fades.
8. **Everything works.** Contact form sends via Resend. Nav resolves. SEO present. Zero stubs.

---

## Part 1 — Stack & setup

**Next.js 16 App Router + TypeScript + Tailwind**, **Resend** for the form, **Vercel** deploy to **`essentials.apex-aesthetics.co`**.
- Repo: `apex-essentials-demo`. `.env.local` for secrets (Part 5), never hardcoded.
- Drop this doc at `docs/apex-essentials-demo-vscode-task.md`, reference it from `CLAUDE.md`.
- **Do not add the Growth repo as a reference or dependency.**

---

## Part 2 — Design system

Clean and light in the **chrome**, but the page gets its life from **photography and warm copy**, not from empty whitespace. (The prior pass mistook "clean" for "blank" — correct that.)

- **Base:** white / near-white chrome and section backgrounds, with one alternating very-light-gray band for rhythm. Color and warmth come primarily from **imagery**, not color blocks.
- **Accent:** Apex red, used on buttons, links, small labels/eyebrows, and a thin rule. Deepen/desaturate slightly for white-bg legibility. Code pulls the brand red from the live site; Travis confirms.
- **Type:** Apex fonts — Hanken Grotesk does most of the work at a readable, generous scale; the geometric display font for the logo and major headings only. Confirm with Travis. Headings should feel confident and clear (see Fox Trail's section headers), not timid.
- **Logo:** standard Apex logo, light-header appropriate. Full color is fine.
- **Imagery:** real photos throughout — hero, service cards, about. Rounded corners / soft shadow on cards, consistent aspect ratios. This is non-negotiable for the tier to read right.
- **Motion:** entrance animations only (rule 7). Build a small reusable scroll-in/fade-in wrapper; nothing else.
- **Components — built fresh, Fox-Trail-class, none from Growth:** `Header`, `Footer`, `Hero`, `ServiceCard` (image + title + paragraph), `Section`, `Testimonial`/`ReviewCard`, `Button`, `ContactForm`, optional `FaqAccordion`, `EntranceAnim` wrapper.

---

## Part 3 — Pages (Home modeled section-for-section on Fox Trail)

**Global chrome:**
- **Header:** Apex logo → Home; nav **Home · Services · Contact**; a primary **"Work With Us"** button → /contact. Optionally a phone/contact line like Fox Trail. Light bar, subtle border. Mobile hamburger.
- **Footer:** logo, "Proudly Serving Eastern North Carolina & Clients Nationwide Since 2023," nav, socials (Facebook, Instagram), copyright. Clean, like Fox Trail's footer.

> **Content source:** Apex copy from apex-aesthetics.co (Home + What We Do + Contact), reworded warm/specific per rule 6. **Structure** comes from Fox Trail, **content** stays Apex.

### Home (`/`) — rich, ~6–7 sections
1. **Hero (with visual):** image-backed or clean split-with-image hero. Headline like "Custom Websites & Branding That Help Eastern NC Businesses Grow" (rework from the live hero, keep it concrete). Plain benefit subhead. One primary CTA — "Start a Project" → /contact. *This is the piece that was missing — make it strong.*
2. **Who We Are:** a substantive About section (this replaces a separate About page) — Apex's story, local/Eastern NC angle, since 2023, how they work, who they serve. Real paragraphs + optionally a "what every project includes" list (the agency equivalent of Fox Trail's unit-sizes list). A supporting photo (team/work).
3. **What We Do:** the 4 services as **`ServiceCard`s with a photo each** + a real benefit-led paragraph — Brand Identity, Web Design, Design Systems, Creative Support. **Not** numbered abstract pillars. → "View all services" → /services.
4. **Proof / Reviews:** real client testimonials (quote + name + business), Fox-Trail "Customer Reviews" style. If genuine quotes aren't on hand, a tidy **static** client logo set + a one-line results statement — **never a marquee.**
5. **Who We Serve (optional, Fox-Trail "service area" equivalent):** short section naming Eastern NC + nationwide reach, anchor clients.
6. **Closing CTA + contact:** strong CTA band → an inline working contact form (or a clear button to /contact). "Start a Project."

### Services (`/services`)
- Each of the 4 services expanded with **its own image** + fuller benefit copy (rework live "What We Do" lines into real paragraphs). Cards or alternating image/text rows — Fox-Trail richness, not bare list.
- Optional "how we work" / "what's included" block. A static figure or two is fine; **no count-up.**
- Closing CTA → /contact.

### Contact (`/contact`) — **WORKING**
- The form (Part 5): Full Name, Company/Organization, Email, Budget, "Tell Us More." Submit "Apply To Work With Us." Microcopy "We review all applications within 24 hours…" Laid out cleanly alongside contact info (email, area served), Fox-Trail "Reserve Today" style.
- Optional condensed **FAQ accordion** (~4–6 Q&As). Travis's call.

---

## Part 4 — (reserved)

---

## Part 5 — Contact form (must actually work)

The proof — do not stub it.
- **Frontend:** controlled React form, client validation (required + email format), honeypot, loading/success/error states, async handler (no raw HTML form submit).
- **Backend:** Route Handler `app/api/contact/route.ts` → validate → Resend → real Apex inbox → JSON result.
- **Env (Travis sets, never hardcoded):** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (verified sender on a domain Travis controls, e.g. `mail.apex-aesthetics.co`).
- Honeypot + basic per-IP rate limit; success state resets the form. Verified from the deployed URL.

---

## Part 6 — SEO / analytics

- Per-page title + meta description + canonical (metadata API). OG + Twitter tags; Apex OG image.
- `sitemap.xml` + `robots.txt`. **Default `noindex, nofollow`** (it clones live Apex content). Travis confirms.
- Semantic HTML, heading hierarchy, descriptive alt text on all imagery.
- Analytics hook (GA4/Plausible) behind an env measurement ID; can stay unconfigured.

---

## Part 7 — Responsive / performance / a11y

- Mobile-first; verify hero, service cards reflow, reviews, and form on a real phone.
- Next `<Image>` / WebP for the photography, lazy-load below fold, fast LCP.
- Keyboard-navigable nav/form/FAQ; visible focus; `prefers-reduced-motion` disables entrance animations.
- AA text contrast.

---

## Part 8 — Deploy

- Vercel project, connect repo, env vars set. Domain `essentials.apex-aesthetics.co` (one CNAME at WordPress.com → Vercel target, same flow as Growth).
- Verify the live form sends end-to-end before done.

---

## Part 9 — Acceptance criteria (done = all true)

1. Three pages: Home, Services, Contact. Home is **rich** — a strong visual hero plus ~5–6 substantive sections, comparable in completeness to foxtrailministorage.com. Not sparse.
2. **Strong hero with a visual on every page.** No bare text-on-white heroes.
3. **Photo-rich** — real imagery in hero, service cards, and about. No image-less sections of bare type.
4. Copy is plain but **specific and benefit-led** — warm, real, not stripped fragments.
5. **Visibly a different archetype from Growth and nothing reused from it** — no numbered pillar cards, no marquee, no banner hero, no Growth components/assets. A stranger reads it as a clean small-business-class site, clearly a different (lower) tier than the showcase.
6. **Entrance animations only** — single fade/slide-in on enter; no scroll sequences, parallax, marquees, or count-ups. `prefers-reduced-motion` respected.
7. Contact form sends for real via Resend; validation, spam guard, success/error all work; verified on the deployed URL.
8. SEO metadata, sitemap, robots, OG present; `noindex` set; analytics hook wired. Responsive, accessible, fast.
9. Deployed to `essentials` subdomain; env secrets in Vercel, none hardcoded.

---

## Provide to Code when you start
- Confirm: **model on foxtrailministorage.com**; pull brand red, copy, logo, and project **imagery** from apex-aesthetics.co; **Growth repo is off-limits.**
- Font confirmation; final accent red.
- Destination inbox + Resend key (env, not code).
- Decisions: imagery source (real Apex shots vs placeholders to swap), reviews (real quotes vs static logo set), FAQ (in/out), indexing (noindex default).