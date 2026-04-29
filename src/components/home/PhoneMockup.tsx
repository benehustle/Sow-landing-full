export default function PhoneMockup() {
  return (
    <div className="relative select-none">
      {/* Outer shell */}
      <div
        className="relative rounded-[2.5rem] bg-neutral-900 shadow-2xl"
        style={{ width: 270, height: 560, padding: 10 }}
      >
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="w-full h-full rounded-[2rem] bg-neutral-950 overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-1 shrink-0">
            <span className="text-white text-[10px] font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 border border-white/60 rounded-[2px] relative">
                <div className="absolute inset-[2px] right-auto w-[5px] bg-white/60 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Nav bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center">
                <span className="text-white text-[6px] font-black leading-none">B</span>
              </div>
              <div className="w-14 h-2 bg-neutral-600 rounded" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="w-4 h-[2px] bg-neutral-400 rounded" />
              <div className="w-4 h-[2px] bg-neutral-400 rounded" />
              <div className="w-3 h-[2px] bg-neutral-400 rounded" />
            </div>
          </div>

          {/* Hero area */}
          <div className="px-4 pt-5 pb-3 shrink-0">
            <p className="text-red-400 text-[8px] font-bold uppercase tracking-[0.2em] mb-1">
              Albury Brake &amp; Clutch
            </p>
            <p className="text-white font-extrabold text-[15px] leading-snug mb-3">
              Brake and Clutch Repairs<br />You Can Trust
            </p>
            <div className="flex gap-2">
              <div className="bg-red-600 rounded-full px-3 py-1">
                <span className="text-white text-[8px] font-bold">Get a Quote</span>
              </div>
              <div className="border border-white/30 rounded-full px-3 py-1">
                <span className="text-white/70 text-[8px]">Our Services</span>
              </div>
            </div>
          </div>

          {/* Hero image block */}
          <div className="mx-4 mb-4 rounded-xl bg-neutral-800 overflow-hidden h-28 relative shrink-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-16 h-16 rounded-full bg-neutral-500" />
            </div>
            <div className="absolute bottom-2 left-3">
              <div className="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center">
                <span className="text-white text-[8px]">Play</span>
              </div>
            </div>
          </div>

          {/* Services strip */}
          <div className="px-4 mb-3 shrink-0">
            <div className="w-20 h-[6px] bg-neutral-700 rounded mb-2" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-neutral-800 rounded-lg p-2">
                  <div className="w-5 h-5 rounded bg-red-900/60 mb-1.5" />
                  <div className="w-full h-[4px] bg-neutral-600 rounded" />
                  <div className="w-3/4 h-[4px] bg-neutral-700 rounded mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Content lines */}
          <div className="px-4 space-y-1.5">
            <div className="w-full h-[5px] bg-neutral-800 rounded" />
            <div className="w-5/6 h-[5px] bg-neutral-800 rounded" />
            <div className="w-4/6 h-[5px] bg-neutral-800 rounded" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-neutral-600 rounded-full" />
      </div>

      {/* Subtle reflection/shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/20 blur-xl rounded-full" />
    </div>
  );
}
