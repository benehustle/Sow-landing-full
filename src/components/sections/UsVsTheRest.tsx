import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

type CompareValue = "yes" | "no" | "sometimes";
type CompareRow = { label: string; sow: CompareValue; others: CompareValue };

const COMPARE_ROWS: CompareRow[] = [
  { label: "Zero deposit upfront", sow: "yes", others: "no" },
  { label: "See homepage before paying", sow: "yes", others: "no" },
  { label: "Live in 7 days", sow: "yes", others: "no" },
  { label: "Free lifetime hosting", sow: "yes", others: "no" },
  { label: "Custom coded (not templates)", sow: "yes", others: "sometimes" },
  { label: "100% Australian", sow: "yes", others: "sometimes" },
];

function CompareIcon({ value }: { value: CompareValue }) {
  if (value === "yes") {
    return (
      <CheckCircle2
        className="w-6 h-6 text-green-brand mx-auto"
        aria-label="Yes"
      />
    );
  }
  if (value === "no") {
    return (
      <XCircle className="w-6 h-6 text-red-accent mx-auto" aria-label="No" />
    );
  }
  return (
    <MinusCircle
      className="w-6 h-6 text-ink/40 mx-auto"
      aria-label="Sometimes"
    />
  );
}

export default function UsVsTheRest() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl lg:text-5xl font-bold text-green-deep text-center mb-12">
          Us vs The Rest
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 rounded-2xl overflow-hidden border border-ink/8 shadow-sm">
          {/* Header row */}
          <div className="hidden lg:block bg-cream/50" />
          <div className="bg-green-deep text-cream py-4 text-center font-bold lg:rounded-none">
            Spot On Websites
          </div>
          <div className="bg-ink/5 text-ink/70 py-4 text-center font-bold">
            Other Agencies
          </div>

          {/* Comparison rows */}
          {COMPARE_ROWS.map((row, i) => {
            const rowBg = i % 2 === 0 ? "bg-white" : "bg-cream/50";
            return (
              <div key={row.label} className="contents">
                <div
                  className={`${rowBg} py-4 px-5 font-bold text-ink border-t border-ink/8 lg:border-t`}
                >
                  {row.label}
                </div>
                <div
                  className={`${rowBg} py-4 px-5 flex items-center justify-center border-t border-ink/8`}
                >
                  <div className="flex items-center gap-2 lg:gap-0">
                    <span className="lg:hidden text-xs font-bold text-ink/40 uppercase tracking-wide">
                      SOW
                    </span>
                    <CompareIcon value={row.sow} />
                  </div>
                </div>
                <div
                  className={`${rowBg} py-4 px-5 flex items-center justify-center border-t border-ink/8`}
                >
                  <div className="flex items-center gap-2 lg:gap-0">
                    <span className="lg:hidden text-xs font-bold text-ink/40 uppercase tracking-wide">
                      Others
                    </span>
                    <CompareIcon value={row.others} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
