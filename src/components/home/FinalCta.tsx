import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="start" className="bg-green-deep text-cream py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="h-display text-4xl md:text-6xl text-cream mb-6 leading-tight">
          Stop Paying for Websites
          <br />
          That Don&apos;t Convert.
        </h2>
        <p className="text-cream/70 text-xl mb-10 leading-relaxed">
          Free homepage preview. $997 total. Zero deposit. Free lifetime hosting.
        </p>
        <Link
          href="/start"
          className="inline-block px-10 py-4 bg-green-brand text-cream font-bold rounded-full text-lg hover:bg-cream hover:text-ink transition-colors"
        >
          Get My Free Homepage
        </Link>
      </div>
    </section>
  );
}
