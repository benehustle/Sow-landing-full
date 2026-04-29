const faqs = [
  {
    q: "How is there zero deposit?",
    a: "Because we're confident in the work. We build your homepage first, free. You only pay when you've seen it and approved it. If you don't like it, you walk. We've absorbed the time. That's our problem, not yours.",
  },
  {
    q: "What does the $997 include?",
    a: "Custom coded homepage plus all your inner pages (about, services, contact, anything else you need). Mobile responsive. SEO basics done right. Hosting set up. Domain connected. Free lifetime hosting included. No surprise add-ons.",
  },
  {
    q: "Free lifetime hosting? Really?",
    a: "Yes. Once you're live, you don't pay us another cent for hosting. It runs on Cloudflare Pages which costs us almost nothing to keep online. We pass that on to you.",
  },
  {
    q: "What if I hate the homepage you build?",
    a: "You walk away owing nothing. We don't take a deposit so there's nothing to refund. Worst case for you is two minutes filling out a form.",
  },
  {
    q: "How long does it take?",
    a: "Homepage preview ready in a few days from your call. Once you pay the $600, the full site is live within 7 days. Pay the balance, we push it live the same day.",
  },
  {
    q: "Do I need to provide copy and photos?",
    a: "Helpful but not required. We can pull from your existing site, write copy from your onboarding form, and use stock or licensed imagery if you don't have photos. We'll always ask before guessing.",
  },
  {
    q: "Are you actually Australian?",
    a: "Yes. EHUSTLE PTY LTD, ABN 21 679 259 440, based in Queensland. No offshore team. No AI slop. Real people building real sites.",
  },
  {
    q: "Why not just use Wix or Squarespace?",
    a: "Templates load slow, look like everyone else's, and the SEO is locked behind their platform. Custom coded sites load faster, rank better, and you actually own them. For $997 total with free hosting, there's no reason not to.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-cream border-t border-ink/8 pt-20 lg:pt-28 pb-0">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl md:text-5xl text-ink mb-12">
          Questions You&apos;re Probably About to Ask
        </h2>

        <div className="flex flex-col divide-y divide-ink/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <span className="font-display font-bold text-ink text-lg leading-snug">
                  {faq.q}
                </span>
                <span
                  className="faq-icon mt-1 shrink-0 w-5 h-5 text-green-brand transition-transform duration-300"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="10" y1="4" x2="10" y2="16" />
                    <line x1="4" y1="10" x2="16" y2="10" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-ink/70 text-base leading-relaxed pr-9">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
