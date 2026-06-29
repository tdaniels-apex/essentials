/**
 * Site copy — sourced from the live site apex-aesthetics.co, then reworded WARM,
 * SPECIFIC, and BENEFIT-LED for the Essentials tier (modeled on a real Apex
 * $3,500 deliverable, foxtrailministorage.com). Same facts and offer, plainer and
 * more concrete delivery — no aggressive sales register, but not stripped to
 * fragments either. Reword, don't invent.
 *
 * Imagery is real Apex work pulled from apex-aesthetics.co/wp-content/uploads and
 * stored under /public/images (Travis can swap any of it).
 */

/* ----------------------------------- Home ---------------------------------- */

export const home = {
  hero: {
    label: "Apex Aesthetics · Eastern North Carolina",
    title: "Custom Websites & Branding That Help Eastern NC Businesses Grow",
    subtitle:
      "Apex Aesthetics designs clean, professional brands and websites for small businesses — built to make you look established, earn trust, and bring in more customers.",
    cta: { label: "Start a Project", href: "/contact" },
    image: "/images/work-pickjunkies.jpg",
    imageAlt: "Branding and visual identity work by Apex Aesthetics",
  },
} as const;

/* ------------------------------ About / Who we are ------------------------- */

export const about = {
  label: "Who we are",
  heading: "A local design studio built to help small businesses look their best",
  paragraphs: [
    "Apex Aesthetics started in 2023 when two friends got tired of watching good local businesses pay for design that didn't actually do anything. We set out to build a studio focused on quality, clarity, and work that gets results.",
    "We're a small team of designers and developers based in Eastern North Carolina, serving clients here at home and across the country. With years of combined experience in design and web, we build brands and websites that look sharp and work exactly how they should.",
    "Every project is custom — no templates, no filler. We take the time to understand your business and your customers first, then design around how people actually make decisions.",
  ],
  includesHeading: "What every project includes",
  includes: [
    "A custom design made for your brand — never a template",
    "A fast, mobile-first website you can actually edit",
    "SEO fundamentals built in from day one",
    "Clear communication and revision rounds along the way",
    "Files, training, and support so you're ready to run it",
  ],
  image: "/images/about-founders.webp",
  imageAlt: "The founders of Apex Aesthetics",
} as const;

/* --------------------------------- Services -------------------------------- */

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    blurb:
      "Your brand is the first thing people judge. We design logos, color, and typography that make your business feel established and distinct from the very first look — so you stand out for the right reasons.",
    points: [
      "Logo suite & brand marks",
      "Color & typography systems",
      "Brand guidelines",
      "Print & web-ready files",
    ],
    image: "/images/work-first-choice.webp",
    imageAlt: "First Choice visual identity designed by Apex Aesthetics",
  },
  {
    slug: "web-design",
    title: "Web Design",
    blurb:
      "We build custom websites designed around your customers — clear, fast, and easy to use on any device. Every page is mapped to a goal, so your site does more than look good: it turns visitors into calls and customers.",
    points: [
      "Custom, mobile-first design",
      "Built to convert, not just impress",
      "Easy-to-edit CMS",
      "Hosting & launch support",
    ],
    image: "/images/work-signature-homes.webp",
    imageAlt: "Signature Homes website designed by Apex Aesthetics",
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    blurb:
      "One consistent brand everywhere people find you. We create reusable systems — templates, assets, and guidelines — that keep your look cohesive across your website, social media, and print.",
    points: [
      "Reusable asset & template library",
      "Social & content templates",
      "Print & packaging collateral",
      "Shareable brand kit",
    ],
    image: "/images/work-branding-pack.webp",
    imageAlt: "Brand system and collateral designed by Apex Aesthetics",
  },
  {
    slug: "creative-support",
    title: "Creative Support",
    blurb:
      "Launching is just the start. We provide ongoing graphics and marketing creative that keep your brand active and consistent — so you always have what you need to promote your business well.",
    points: [
      "Social media graphics",
      "Ad & campaign creative",
      "Marketing collateral",
      "Ongoing design support",
    ],
    image: "/images/work-river-ridge.webp",
    imageAlt: "River Ridge Realty branding designed by Apex Aesthetics",
  },
];

export const servicesPage = {
  label: "Services",
  heading: "Everything your business needs to look the part",
  lead: "From your logo to your launch, we handle the design that makes small businesses look established and grow. Here's how we help.",
  image: "/images/apex-visual-identity.webp",
  imageAlt: "Apex Aesthetics visual identity",
  processHeading: "How we work",
  process: [
    {
      title: "Discovery",
      body: "We start by understanding your business, your customers, and your goals — design without context is just decoration.",
    },
    {
      title: "Design",
      body: "We craft your brand and pages with structured checkpoints and revision rounds, keeping you involved the whole way.",
    },
    {
      title: "Build & launch",
      body: "We build clean, fast, and SEO-ready, then launch a polished site you're fully set up to run.",
    },
  ],
} as const;

/* ---------------------------------- Proof ---------------------------------- */

export type Figure = { value: string; label: string };

/** Static figures only — no count-up animation (Part 0 rule 7). */
export const figures: Figure[] = [
  { value: "250+", label: "Projects completed" },
  { value: "20+", label: "Industries served" },
  { value: "Since 2023", label: "Serving Eastern NC" },
];

/** Real Apex client businesses (public). Shown as a tidy text set, not a marquee. */
export const clients = [
  "PickJunkies",
  "Efficacious Solutions",
  "Carolina Wholesale",
  "The Beer Barn",
  "We Build",
  "Tidewater Transit",
  "Herring Farms",
  "Copy Squad",
  "Reel Tight Adventures",
  "Requiem Productions",
  "Stephanie Murphy",
  "MultiModal Logistics",
];

export type Testimonial = { quote: string; name: string; role: string };

/**
 * PLACEHOLDER testimonials — generic personas, not real named clients. Swap with
 * genuine Apex client quotes before launch (Travis's call).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Apex took our outdated look and turned it into something we're proud to put in front of customers. The new site loads fast and finally feels like us.",
    name: "Local retail owner",
    role: "Greenville, NC",
  },
  {
    quote:
      "They handled everything from our logo to the website and made the whole process easy. We started getting compliments — and calls — almost right away.",
    name: "Small business owner",
    role: "New Bern, NC",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our success. It's like having a design team on call without the agency price tag.",
    name: "Founder",
    role: "Eastern North Carolina",
  },
];

export const whoWeServe = {
  heading: "Proudly serving Eastern North Carolina — and beyond",
  body: "We work with small businesses across Eastern NC and partner with clients nationwide. Wherever you are, you get the same hands-on, detail-focused process from a team that treats your business like its own.",
} as const;

export const closing = {
  heading: "Ready to make your business look the part?",
  sub: "Tell us about your project and we'll get back to you within 24 hours.",
  cta: { label: "Start a Project", href: "/contact" },
} as const;

/* --------------------------------- Contact --------------------------------- */

export const contact = {
  label: "Contact",
  heading: "Let's talk about your project",
  sub: "Fill out the form and tell us how we can help. We review every application within 24 hours.",
  microcopy:
    "We review all applications within 24 hours. If it's a mutual fit, you'll receive a link to book your free consultation.",
  submitLabel: "Apply To Work With Us",
  image: "/images/work-blair-scott.webp",
  imageAlt: "Blair Scott Clothing Co. branding designed by Apex Aesthetics",
  faqHeading: "Frequently asked questions",
} as const;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope, but our Essentials package starts at $3,500 for a custom 1–3 page website. We'll give you a clear, upfront quote before any work begins — no surprises.",
  },
  {
    q: "How long does it take?",
    a: "Most brand and website projects take a few weeks depending on scope. We set a timeline with you upfront and keep you updated at each checkpoint.",
  },
  {
    q: "Will a new brand and website actually help my business?",
    a: "Yes. If you already offer something great, your brand and website should reflect that. A clear, professional look builds credibility and helps you feel established from the first interaction.",
  },
  {
    q: "Can you work with my existing logo?",
    a: "Often, yes. If your current logo is solid but your brand or website needs work, we can build around what's already working. If it needs updating, we'll tell you before moving forward.",
  },
  {
    q: "What do I get at the end?",
    a: "Finalized logo and brand files, a fully built and launched website, and the access and basic training you need to run it — all delivered in organized, ready-to-use formats.",
  },
];
