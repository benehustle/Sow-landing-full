const steps = [
  {
    number: "01",
    title: "Get Started",
    body: "Tell us about your business in under 2 minutes. We pull what we need from your existing site or onboarding form.",
  },
  {
    number: "02",
    title: "Free Homepage",
    body: "We build your actual homepage. Not a mockup. Not a template. Real working code. You see it before you spend a dollar.",
  },
  {
    number: "03",
    title: "Pay $600",
    body: "Love what you see? Pay $600 and we get to work on the rest. If you don't love it, walk away. No deposit was ever taken.",
  },
  {
    number: "04",
    title: "Live in 7 Days",
    body: "We complete the full site within 7 days. You pay the $397 balance and we push it live. Free lifetime hosting from day one.",
  },
];

export default function ProcessSection() {
  return (
    <section id="how" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl md:text-6xl text-ink mb-14">
          How It Actually Works
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-ink text-cream rounded-3xl p-8 flex flex-col gap-6"
            >
              <span className="font-display font-extrabold text-6xl text-green-brand leading-none">
                {step.number}
              </span>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/70 text-base leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
