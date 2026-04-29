import type { City } from "@/data/cities";
import type { Service } from "@/data/services";

export type LocalCopy = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  whyUs: string[];
  localFAQ: { q: string; a: string }[];
};

// Deterministic pick from an array - no randomness at runtime so pages are stable
function pick<T>(arr: T[], seed: string): T {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) & 0xffff;
  }
  return arr[hash % arr.length];
}

function replace(template: string, city: City, service: Service): string {
  return template
    .replace(/\{city\}/g, city.name)
    .replace(/\{state\}/g, city.state)
    .replace(/\{stateLong\}/g, city.stateLong)
    .replace(/\{slug\}/g, service.slug);
}

const INTRO_TEMPLATES = [
  (city: City, service: Service, s1: string, s2: string) =>
    `${replace(service.blurb, city, service)} ${city.name} businesses in ${s1} and ${s2} come to us because they are tired of paying agencies thousands upfront for a site they have never seen. We flip that model. We build your homepage first at no cost. You see it before you commit to a cent. The total cost is $997 - zero deposit, free lifetime hosting, and we push live within 7 days of your approval.`,

  (city: City, service: Service, s1: string, s2: string) =>
    `If you run a business in ${city.name} - whether you are based in ${s1}, ${s2}, or anywhere across ${city.stateLong} - you already know how competitive local search has become. ${replace(service.blurb, city, service)} We build your homepage free, show you a live preview, and you only pay if you love what you see. $997 total. Free lifetime hosting. No monthly fees ever.`,

  (city: City, service: Service, s1: string, s2: string) =>
    `${replace(service.blurb, city, service)} Most ${city.name} businesses we speak to have been burned before - big upfront costs, slow delivery, a site that looks nothing like what was promised. That is exactly why we build first and charge later. From ${s1} to ${s2}, local businesses trust us because the homepage preview costs nothing. If you love it, $600 starts the full build. $397 on go-live. Free hosting for life.`,
];

const WHY_US_DESIGN = (city: City) => [
  `Custom coded from scratch. No Wix, no Squarespace, no Elementor. Your site in ${city.name} will look nothing like your competitors.`,
  `Fast by default. Hand-written code loads in under 2 seconds - Google's ranking algorithm rewards this and so do your visitors.`,
  `Zero deposit. We build your homepage free and you only pay $600 to proceed after approving the preview.`,
  `SEO built in from day one. Local schema, fast load times, proper meta tags - everything that helps you rank in ${city.name} search results.`,
  `Free lifetime hosting. No monthly fees, no renewal surprises. $997 total and you own your online presence outright.`,
];

const WHY_US_SEO = (city: City) => [
  `SEO-first architecture. Every page we build for ${city.name} businesses is structured to rank - clean code, fast load, proper schema.`,
  `Local landing pages. We build suburb-level pages that target the specific areas your ${city.name} customers are searching from.`,
  `Zero deposit. We build and show you the homepage first. You pay $600 to proceed only after you approve the preview.`,
  `Free lifetime hosting. No monthly fees. $997 total - that is the full cost of a custom site that ranks and converts.`,
  `Conversion-focused design. Traffic is only half the job. Every element of your site is designed to turn visitors into leads.`,
];

const WHY_US_WORDPRESS = (city: City) => [
  `Custom WordPress builds only. No off-the-shelf themes, no page builder bloat. Your ${city.name} site is built for speed and flexibility.`,
  `You own everything. Your WordPress install, your hosting choice, your data - we do not lock you in to proprietary systems.`,
  `Zero deposit. We build your WordPress homepage first and you only pay $600 to proceed after approving the preview.`,
  `Easy to edit. We set up a simple admin experience so ${city.name} business owners can update content without needing a developer.`,
  `Free lifetime hosting included. $997 total. No monthly fees, no hosting renewals, no surprises.`,
];

function getWhyUs(city: City, service: Service): string[] {
  if (service.intent === "wordpress") return WHY_US_WORDPRESS(city);
  if (service.intent === "seo") return WHY_US_SEO(city);
  return WHY_US_DESIGN(city);
}

const FAQ_POOLS = {
  free: (city: City) => ({
    q: `How can you build the homepage free in ${city.name}?`,
    a: `We build on spec. If you love the homepage preview and proceed, the total cost is $997 - $600 upfront to start the full build, $397 on go-live. If you do not love it, you walk away and owe nothing. It is a better model for ${city.name} businesses because the financial risk is entirely on us until you have seen and approved the work.`,
  }),
  timeline: () => ({
    q: "How long does the build take?",
    a: "We build your homepage first and present it before you commit. Once you approve and pay the $600 deposit, the full site is completed within 7 days. We go live the same day you pay the $397 balance.",
  }),
  local: (city: City) => ({
    q: `Do you build websites for businesses specifically in ${city.name}?`,
    a: `Yes. We work with ${city.name} businesses across all industries - trades, retail, professional services, hospitality. We understand the local market and build sites that speak to ${city.name} customers.`,
  }),
  contract: () => ({
    q: "Are there any ongoing fees after I pay the $997?",
    a: "No. Hosting is free for life. There are no monthly fees, no renewal costs, and no hidden charges. $997 is the total cost. If you ever want changes down the track, we quote those separately - but the site stays live regardless.",
  }),
  copy: () => ({
    q: "Do I need to provide copy and photos?",
    a: "Not necessarily. If you have an existing site we can pull content from, great. If not, we write the copy based on your onboarding form. Stock photos are available, or we can point you to a local photographer.",
  }),
  seoLocal: (city: City) => ({
    q: `Will my website rank in ${city.name} Google searches?`,
    a: `That is the goal. Every site we build is optimised for local search from day one - fast load times, clean code, local schema markup, and suburb-level pages targeting the areas your ${city.name} customers are actually searching from.`,
  }),
  competitor: () => ({
    q: "Why not just use Wix or Squarespace?",
    a: "You can. But template builders produce slow, generic sites that look like every other business in your industry. Custom code is faster, more flexible, and impossible to confuse with a template. Google also ranks faster sites higher.",
  }),
  wordpress: () => ({
    q: "Why choose custom over a WordPress theme?",
    a: "Off-the-shelf themes are slow, bloated, and prone to security issues. A custom WordPress build is lean, fast, and built specifically for your business - no unnecessary features eating into your load time.",
  }),
};

export function buildLocalCopy(city: City, service: Service): LocalCopy {
  const seed = city.slug + ":" + service.slug;

  // Title and description - apply patterns then cap length
  const title = replace(service.metaTitlePattern, city, service).substring(0, 60);
  const description = replace(service.metaDescPattern, city, service).substring(0, 160);
  const h1 = replace(service.h1Pattern, city, service);

  // Pick 2 suburbs deterministically
  const s1 = pick(city.suburbs, seed + "s1");
  const s2 = pick(
    city.suburbs.filter((s) => s !== s1),
    seed + "s2"
  );

  // Intro paragraph
  const introFn = pick(INTRO_TEMPLATES, seed + "intro");
  const intro = introFn(city, service, s1, s2);

  // Why us bullets
  const whyUs = getWhyUs(city, service);

  // FAQ - always include local + pricing, then pick 2 more
  const pricingFAQ: { q: string; a: string } = {
    q: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
    a: `$997 total. Zero deposit. We build your homepage free and present it before you commit to anything. If you love it, $600 starts the full build and $397 is paid on go-live. Free lifetime hosting is included - no monthly fees ever.`,
  };

  const localFAQ1 = FAQ_POOLS.local(city);
  const localFAQ2 = FAQ_POOLS.free(city);

  const extraPool =
    service.intent === "seo"
      ? [FAQ_POOLS.seoLocal(city), FAQ_POOLS.competitor(), FAQ_POOLS.copy()]
      : service.intent === "wordpress"
      ? [FAQ_POOLS.wordpress(), FAQ_POOLS.copy(), FAQ_POOLS.contract()]
      : [FAQ_POOLS.contract(), FAQ_POOLS.copy(), FAQ_POOLS.competitor()];

  const extra = pick(extraPool, seed + "faq");

  const localFAQ = [pricingFAQ, localFAQ1, localFAQ2, extra];

  return { title, description, h1, intro, whyUs, localFAQ };
}

// Convenience: check whether a city+service combo is valid for a page
export function isValidPage(citySlug: string, serviceSlug: string): boolean {
  return !!(citySlug && serviceSlug);
}

// Strip {city}/{state} patterns for use in generic (non-local) copy
export function resolvePattern(pattern: string, city: City): string {
  return replace(pattern, city, { slug: "", name: "", h1Pattern: "", metaTitlePattern: "", metaDescPattern: "", intent: "design", blurb: "" });
}
