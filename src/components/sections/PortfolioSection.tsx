import Image from "next/image";

type PortfolioItem = {
  slug: string;
  name: string;
  /** e.g. "Pet services · VIC" */
  meta: string;
  imageSrc: string;
  href: string;
};

const ITEMS: PortfolioItem[] = [
  {
    slug: "dog-door-guy",
    name: "The Dog Door Guy",
    meta: "Dog door installation · QLD",
    imageSrc: "/portfolio/dog-door-guy.png",
    href: "https://thedogdoorguy.com.au/",
  },
  {
    slug: "holtz-flooring",
    name: "Holtz Flooring",
    meta: "Flooring installation · VIC",
    imageSrc: "/portfolio/holtz-flooring.png",
    href: "https://holtzflooring.com.au/",
  },
  {
    slug: "inspire-energy",
    name: "Inspire Energy",
    meta: "Solar & electrical · NSW",
    imageSrc: "/portfolio/inspire-energy.png",
    href: "https://inspireenergy.com.au/",
  },
  {
    slug: "superior-tree-stump",
    name: "Superior Tree & Stump",
    meta: "Tree services · SA",
    imageSrc: "/portfolio/superior-tree-stump.png",
    href: "https://superiortrees.com.au/",
  },
  {
    slug: "snatch-straps-australia",
    name: "Snatch Straps Australia",
    meta: "4x4 recovery gear · WA",
    imageSrc: "/portfolio/snatch-straps-australia.png",
    href: "https://snatchstraps.com.au/",
  },
  {
    slug: "euroka-projects",
    name: "Euroka Projects",
    meta: "Commercial & residential builders · NSW",
    imageSrc: "/portfolio/euroka-projects.png",
    href: "https://eurokaprojects.com.au/",
  },
];

function PortfolioCard({ name, meta, imageSrc, href }: PortfolioItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}, visit live site (opens in new tab)`}
      className="group block bg-white rounded-2xl border border-ink/8 shadow-sm overflow-hidden w-full max-w-md lg:max-w-none shrink-0 snap-center lg:snap-none text-inherit no-underline transition-shadow transition-colors hover:border-green-brand/35 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-brand"
    >
      <div className="relative aspect-[16/10] w-full bg-cream">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 1023px) 88vw, (max-width: 1280px) 33vw, 360px"
        />
      </div>
      <div className="px-4 py-4 text-left">
        <p className="font-bold text-ink leading-tight group-hover:text-green-deep transition-colors">
          {name}
        </p>
        <p className="text-sm text-ink/60 mt-1">{meta}</p>
      </div>
    </a>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-cream py-14 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="portfolio-heading"
          className="h-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-3 max-w-2xl mx-auto leading-tight"
        >
          See What{" "}
          <span className="text-green-brand">$997</span> Looks Like
        </h2>
        <p className="text-center text-ink/60 text-sm md:text-base max-w-xl mx-auto mb-10">
          Real homepages we&apos;ve shipped, same process, same price.
        </p>

        {/* Mobile / tablet: horizontal snap carousel */}
        <div
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Portfolio sites"
        >
          {ITEMS.map((item) => (
            <div key={item.slug} className="min-w-[min(88vw,340px)] max-w-[340px]">
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>

        {/* Desktop: 3×2 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <PortfolioCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
