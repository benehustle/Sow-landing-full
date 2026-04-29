type FAQItem = { q: string; a: string };

export default function LocalFAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-ink/10">
      {items.map((item, i) => (
        <details key={i} className="faq-item group py-5">
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
            <span className="font-bold text-ink text-lg leading-snug">{item.q}</span>
            <span
              className="faq-icon shrink-0 mt-0.5 w-6 h-6 rounded-full bg-green-brand/15 flex items-center justify-center transition-transform duration-200 text-green-deep font-bold text-lg leading-none"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-ink/70 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
