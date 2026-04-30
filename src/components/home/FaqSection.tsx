const faqs = [
  {
    q: "How is the homepage actually free?",
    a: "Because we'd rather show you our work than sell you a pitch. We build your real homepage first, custom for your trade, and you see it live before paying anything. If it's not right, you walk. We absorb the time. That's our risk to carry, not yours.",
  },
  {
    q: "What does the $997 actually cover?",
    a: "Everything. Custom coded homepage plus inner pages (about, services, contact, anything else you need). Mobile responsive. SEO foundations done properly. Hosting set up. Domain connected. Free lifetime hosting included. No surprise add-ons, no monthly bill.",
  },
  {
    q: "What's the 90-day lead promise?",
    a: "Once you're live, we don't ghost you. We spend 90 days tuning copy, conversion paths, and local SEO on your site until you're getting real phone calls from real customers. If the phone hasn't rung by day 90, we keep working on our dime until it does.",
  },
  {
    q: "Free hosting forever? What's the catch?",
    a: "No catch. Your site runs on infrastructure that costs us almost nothing per month. We pass the saving on to you. No monthly invoice, no annual renewal trap. You own the site, the domain, and you're not locked in.",
  },
  {
    q: "What if I don't like the homepage you build?",
    a: "You walk away owing nothing. No deposit means nothing to refund. Worst case for you is two minutes filling in a form. Most clients say yes, but the option to walk is always real.",
  },
  {
    q: "How long until I'm live?",
    a: "Free homepage preview ready a few days after your call. Once you approve and pay the $997, the full site goes live within 7 days. Then the 90-day optimisation work kicks in.",
  },
  {
    q: "Do I need to write copy or supply photos?",
    a: "No. Helpful if you have them, but we can pull from your existing site, write copy from your onboarding form, and use stock or licensed imagery. We always check before guessing.",
  },
  {
    q: "Are you actually Australian?",
    a: "Yes. EHUSTLE PTY LTD, ABN 21 679 259 440, based in Queensland. No offshore team. No template recyclers. Real Aussies building real sites for real Aussie tradies.",
  },
  {
    q: "Why not just use Wix, Squarespace or some AI builder?",
    a: "Templates load slow, look generic, and lock your SEO behind their platform. AI builders spit out the same thing every other tradie just spat out. Custom coded sites load faster, rank better, convert harder, and you actually own them. For $997 with free hosting, the maths is obvious.",
  },
  {
    q: "What if I already have a website?",
    a: "We can rebuild on the same domain or migrate cleanly. We'll redirect your old URLs so you don't lose Google rankings. Most clients see better lead flow within the 90-day window because the new site is faster and built to convert, not just look pretty.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-cream border-t border-ink/8 pt-20 lg:pt-28 pb-0">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl md:text-5xl text-ink mb-12 leading-[1.05]">
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
