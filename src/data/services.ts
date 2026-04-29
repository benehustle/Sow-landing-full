export type Service = {
  slug: string;
  name: string;
  h1Pattern: string;
  metaTitlePattern: string;
  metaDescPattern: string;
  intent: "design" | "designer" | "company" | "seo" | "wordpress";
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "website-design",
    name: "Website Design",
    h1Pattern: "Website Design in {city}",
    metaTitlePattern: "Website Design in {city} | $997 - Free Hosting",
    metaDescPattern:
      "Custom website design in {city}, {state}. Zero deposit - we build your homepage free. $997 total. Free lifetime hosting. No templates.",
    intent: "design",
    blurb:
      "We design and build custom websites for {city} businesses from scratch. No page builders, no templates, no shortcuts. You see a homepage preview first and only commit if you love what you see.",
  },
  {
    slug: "web-designer",
    name: "Web Designer",
    h1Pattern: "Web Designer in {city}",
    metaTitlePattern: "Web Designer in {city} | Zero Deposit, $997 Total",
    metaDescPattern:
      "Looking for a web designer in {city}? We build your homepage free - zero deposit. $997 total only if you love it. Free lifetime hosting.",
    intent: "designer",
    blurb:
      "We are a team of web designers serving {city} businesses who are sick of paying thousands upfront for a site they have never seen. We show you the homepage first. You decide if you want the rest.",
  },
  {
    slug: "website-design-company",
    name: "Website Design Company",
    h1Pattern: "Website Design Company in {city}",
    metaTitlePattern: "Website Design Company {city} | $997 All-In",
    metaDescPattern:
      "The website design company {city} businesses choose for custom sites with zero deposit. We build first, $997 total only if you love the result. Free lifetime hosting.",
    intent: "company",
    blurb:
      "We are not a freelancer and we are not a big agency. We are a focused web design company that builds custom sites for {city} businesses, shows you the homepage first, and only charges $997 total if you are happy with it.",
  },
  {
    slug: "web-design-and-seo",
    name: "Web Design and SEO",
    h1Pattern: "Web Design and SEO in {city}",
    metaTitlePattern: "Web Design and SEO {city} | $997 Total",
    metaDescPattern:
      "Web design and SEO for {city} businesses. Custom coded site plus ongoing SEO foundations - $997 total, zero deposit. Built to rank and built to convert.",
    intent: "seo",
    blurb:
      "A great website is useless if nobody finds it. We combine custom web design and SEO for {city} businesses so your site ranks in local search and converts when visitors arrive - all included in one $997 total price with free lifetime hosting.",
  },
  {
    slug: "seo-website-design",
    name: "SEO Website Design",
    h1Pattern: "SEO Website Design in {city}",
    metaTitlePattern: "SEO Website Design {city} | Rank + Convert",
    metaDescPattern:
      "SEO website design in {city} that ranks in Google and converts visitors into leads. Zero deposit - we build your homepage free and you pay $997 total only if you keep it.",
    intent: "seo",
    blurb:
      "Every site we build for {city} businesses is structured for SEO from day one - fast load times, clean code, proper schema, and local landing pages. You do not need to bolt SEO on later because it is already built in.",
  },
  {
    slug: "wordpress-website-design",
    name: "WordPress Website Design",
    h1Pattern: "WordPress Website Design in {city}",
    metaTitlePattern: "WordPress Website Design {city} | $997 Total",
    metaDescPattern:
      "WordPress website design in {city}. Custom WordPress builds for local businesses - zero deposit, $997 total if you keep it. Free lifetime hosting. No templates, no page builders.",
    intent: "wordpress",
    blurb:
      "We build custom WordPress websites for {city} businesses that want a CMS they can actually edit. No Elementor drag-and-drop sprawl - just clean, fast WordPress with a theme built specifically for your business.",
  },
  {
    slug: "small-business-website-design",
    name: "Small Business Website Design",
    h1Pattern: "Small Business Website Design in {city}",
    metaTitlePattern: "Small Business Website Design {city} | $997 Total",
    metaDescPattern:
      "Affordable small business website design in {city}. We build your homepage free - zero deposit - and you only pay $997 total if you love it. Free lifetime hosting.",
    intent: "design",
    blurb:
      "Small business owners in {city} should not have to gamble thousands on a website they have never seen. We build the homepage first, show you the finished product, and charge $997 total only if you want to go live.",
  },
  {
    slug: "custom-website-design",
    name: "Custom Website Design",
    h1Pattern: "Custom Website Design in {city}",
    metaTitlePattern: "Custom Website Design {city} | No Templates",
    metaDescPattern:
      "Custom website design in {city} - hand coded, no templates, no page builders. Zero deposit, $997 total if you keep it. Free lifetime hosting.",
    intent: "design",
    blurb:
      "Every business in {city} is different, so every site we build is different. Hand coded from scratch, no templates, no shortcuts. The result is faster, more flexible, and looks nothing like your competitors.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
