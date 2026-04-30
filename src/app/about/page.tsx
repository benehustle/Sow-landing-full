import type { Metadata } from "next";
import Image from "next/image";
import {
  Code2,
  MapPin,
  Handshake,
  Zap,
  TrendingUp,
  Heart,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import UsVsTheRest from "@/components/sections/UsVsTheRest";
import JsonLd from "@/components/local/JsonLd";
import { SITE_URL, SITE_NAME, SITE_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Spot On Websites | Custom Coded Websites for Aussie Businesses",
  description:
    "We build custom coded websites for Australian businesses. Zero deposit. Free homepage first. $997 total with free lifetime hosting. Based in Queensland, 100% Aussie owned.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title:
      "About Spot On Websites | Custom Coded Websites for Aussie Businesses",
    description:
      "We build custom coded websites for Australian businesses. Zero deposit. Free homepage first. $997 total with free lifetime hosting.",
    url: `${SITE_URL}/about`,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "EHUSTLE PTY LTD",
  url: SITE_URL,
  email: SITE_EMAIL,
  areaServed: "Australia",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_EMAIL,
      areaServed: "AU",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61573142737102",
  ],
};

// ---------- Reusable bits ----------

type DiffCard = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const DIFF_CARDS: DiffCard[] = [
  {
    Icon: Code2,
    title: "We Actually Code",
    body: "No drag and drop. No bloated templates. Every site is hand-coded for speed, ranking, and ownership. You get a real website, not a rented one.",
  },
  {
    Icon: MapPin,
    title: "Based in Queensland",
    body: "Real Australian business. Real Australian timezone. ABN 21 679 259 440. When you call, an Aussie answers. No offshore call centres.",
  },
  {
    Icon: Handshake,
    title: "Zero Deposit. Always.",
    body: "We build your homepage before you spend a dollar. If you don't love it, you walk. We've never met an agency willing to do that. That's why we do it.",
  },
  {
    Icon: Zap,
    title: "Built in 7 Days",
    body: "From paid deposit to live site, seven days. We don't drag work out to justify retainers. Get it built, get it live, get it earning.",
  },
  {
    Icon: TrendingUp,
    title: "Built to Convert",
    body: "Every site we build is structured around what gets prospects to call, book, or buy. Looking pretty is the easy part. Converting traffic is the work.",
  },
  {
    Icon: Heart,
    title: "Free Lifetime Hosting",
    body: "Once you're live, you don't pay us another cent for hosting. Cloudflare runs it for almost nothing and we pass that on. No monthly fee. No catches.",
  },
];

// ---------- Page ----------

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* ============================================================ */}
      {/* SECTION 1: HERO                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-green-brand/15 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-green-deep uppercase mb-4">
                About Spot On Websites
              </p>
              <h1 className="h-display text-5xl lg:text-7xl font-extrabold text-green-deep leading-[1.05]">
                Built by an Aussie. For Aussies.
              </h1>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-md">
                Spot On Websites isn&apos;t a faceless agency. It&apos;s one
                Australian who got sick of watching tradies and small business
                owners get burned by overpriced cookie-cutter websites that
                don&apos;t bring in a single new customer.
              </p>
            </div>
            <div>
              <Image
                src="/robots/robot-pointing.png"
                alt="Spot On Websites mascot"
                width={760}
                height={880}
                className="w-full h-auto max-w-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: THE STORY                                         */}
      {/* ============================================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="h-display text-4xl lg:text-5xl font-bold text-green-deep mb-12 text-center">
            The Story
          </h2>
          <div className="text-lg text-ink/80 leading-relaxed">
            <p className="mb-6">
              Most websites for Australian businesses are built one of two
              ways. Either a $5,000 quote from an agency that ghosts you for
              two months, or a $20/month template builder that loads slow,
              looks like every other site in your industry, and ranks nowhere
              on Google.
            </p>
            <p className="mb-6">
              We watched too many good operators, sparkies, plumbers,
              mechanics, builders, get talked into one of those two paths and
              end up with a website that doesn&apos;t earn them a single phone
              call. So we built a third option.
            </p>
            <p className="mb-6">
              Custom coded sites. Built fast. Built properly. Priced so any
              small business can afford one. And the kicker, you don&apos;t pay
              a cent until you&apos;ve seen what we&apos;ve built for you.
            </p>
            <blockquote className="italic text-green-deep font-bold text-xl mt-12 border-l-4 border-green-brand pl-6">
              If our work doesn&apos;t beat what you&apos;ve got, you walk.
              We&apos;ve absorbed the cost. That&apos;s how confident we are.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: WHAT MAKES US DIFFERENT                           */}
      {/* ============================================================ */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h-display text-4xl lg:text-5xl font-bold text-green-deep text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFF_CARDS.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-ink/8 shadow-sm p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-green-brand/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-green-deep" />
                </div>
                <h3 className="font-bold text-xl text-ink mb-3">{title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: BY THE NUMBERS                                    */}
      {/* ============================================================ */}
      <section className="py-20 bg-green-deep text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h-display text-4xl font-bold text-cream mb-16">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "100%", label: "Aussie owned and run" },
              { num: "7 Days", label: "From start to live" },
              { num: "$0", label: "Deposit. Ever." },
              { num: "47+", label: "Aussie businesses served" },
            ].map((s) => (
              <div key={s.label}>
                <p className="h-display text-6xl lg:text-7xl font-extrabold text-green-brand mb-2">
                  {s.num}
                </p>
                <p className="text-cream/80 text-sm font-bold uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: US VS THE REST                                    */}
      {/* ============================================================ */}
      <UsVsTheRest />

      {/* ============================================================ */}
      {/* SECTION 6: MEET SPOTTY                                       */}
      {/* ============================================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-green-brand/15 blur-2xl pointer-events-none"
              />
              <Image
                src="/robots/robot-laptop.png"
                alt="Spotty the mascot tapping away on a laptop"
                width={400}
                height={400}
                className="relative w-full h-auto max-w-sm mx-auto"
              />
            </div>
            <div>
              <h3 className="h-display text-3xl font-bold text-green-deep mb-4">
                Meet Spotty
              </h3>
              <p className="text-base text-ink/70 leading-relaxed">
                Yes, the little green robot has a name. Spotty is our mascot,
                our build assistant, and the closest thing this business has to
                a logo with a personality. You&apos;ll see Spotty around the
                site giving thumbs up when something is going well, pointing
                things out when they matter, and tapping away on a laptop
                because, well, that&apos;s what we do here.
              </p>
              <p className="italic text-sm text-ink/50 mt-4">
                Spotty does not actually code your site. We do that. But he
                supervises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: FOUNDER NOTE                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-24 bg-cream">
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-green-brand/15 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-ink/10 shadow-sm p-10 lg:p-16">
            <p className="text-sm font-bold tracking-wide text-green-deep uppercase mb-4">
              A note from the founder
            </p>
            <h3 className="h-display text-2xl lg:text-3xl font-bold text-ink mb-6">
              If you&apos;ve been burned by a website project before, I get it.
            </h3>
            <div className="text-base text-ink/80 leading-relaxed">
              <p className="mb-4">
                I started Spot On Websites because I kept seeing the same
                conversation play out. A tradie or small business owner pays a
                few thousand dollars upfront, waits two months, gets handed a
                site that looks fine but doesn&apos;t bring in a single new
                lead. Then they&apos;re locked into hosting fees and update
                charges for years.
              </p>
              <p className="mb-4">
                That&apos;s a broken model. So we flipped it. We do the work
                first. We show you the homepage. If it&apos;s not better than
                what you&apos;ve got, you walk and you&apos;ve lost nothing but
                two minutes filling out a form.
              </p>
              <p className="mb-4">
                I&apos;m based in Queensland. I&apos;m the one writing this.
                I&apos;m the one who&apos;ll be on the call when you book. No
                outsourcing, no upsells, no surprise invoices. Just a website
                that works, for a price that makes sense.
              </p>
            </div>
            <p className="font-bold text-ink mt-6">
              Matt, Founder, Spot On Websites
            </p>
            <p className="text-xs text-ink/50 mt-1">
              EHUSTLE PTY LTD &middot; ABN 21 679 259 440
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: FINAL CTA                                         */}
      {/* ============================================================ */}
      <FinalCTA />
    </>
  );
}
