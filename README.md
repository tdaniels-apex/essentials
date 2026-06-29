# Apex Aesthetics — Essentials-Tier Demo

The **Essentials ($3,500)** tier demo for apex-aesthetics.co: a clean, light,
fast **3-page** Apex site (Home · Services · Contact). It's the same Apex brand
as the Growth demo, executed in the opposite visual language — white-based, dark
text, one restrained deepened-red accent.

Full build spec: [`docs/essentials-demo-task.md`](docs/essentials-demo-task.md).

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind v4**
- **Resend** for the working contact form (`app/api/contact/route.ts`)
- Fonts: **Orbitron** (display, light-touch) + **Hanken Grotesk** (body) via `next/font`
- Deploy target: **`essentials.apex-aesthetics.co`** (Vercel)

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in Resend keys (see below)
npm run dev                         # http://localhost:3000
```

## Environment

The contact form sends via Resend. Set these in `.env.local` (and in Vercel) —
never hardcode them. The form returns a clear error until they're present.

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives applications |
| `CONTACT_FROM_EMAIL` | Verified Resend sender (e.g. `mail.apex-aesthetics.co`) |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional GA4 ID — analytics stays dormant until set |

## Notes

- **`noindex` by default** — the demo mirrors live Apex content and must not
  compete with the real site. Flip in `app/layout.tsx` + `app/robots.ts`.
- Copy is real Apex copy, **softened** for a calmer tone (see `src/lib/content.ts`).
- Open decisions for Travis are listed at the bottom of the build spec.

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```
