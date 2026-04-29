interface LogoProps {
  size?: number;
  variant?: "default" | "white";
}

export default function Logo({ size = 40, variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "#FAF7F0" : "#0C2A1B";
  const greenColor = "#1FB76D";
  const r = size / 2;

  return (
    <div className="flex flex-col items-start gap-1">
      {/* Wordmark row */}
      <div className="flex items-center" style={{ height: size }}>
        {/* SP */}
        <svg
          viewBox="0 0 56 40"
          height={size}
          width={(56 / 40) * size}
          fill="none"
          aria-hidden="true"
        >
          <text
            x="0"
            y="32"
            fontFamily="var(--font-display)"
            fontWeight="800"
            fontSize="36"
            fill={textColor}
          >
            SP
          </text>
        </svg>

        {/* Target O */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          height={size}
          width={size}
          aria-hidden="true"
          style={{ marginTop: 2 }}
        >
          {/* Outer circle */}
          <circle cx={r} cy={r} r={r - 2} stroke={greenColor} strokeWidth="2" fill="none" />
          {/* Middle circle */}
          <circle cx={r} cy={r} r={(r - 2) * 0.6} stroke={greenColor} strokeWidth="1.5" fill="none" />
          {/* Inner dot */}
          <circle cx={r} cy={r} r={(r - 2) * 0.18} fill={greenColor} />
          {/* Crosshair lines */}
          <line x1={r} y1="0" x2={r} y2={r - (r - 2) * 0.75} stroke={greenColor} strokeWidth="1.5" />
          <line x1={r} y1={r + (r - 2) * 0.75} x2={r} y2={size} stroke={greenColor} strokeWidth="1.5" />
          <line x1="0" y1={r} x2={r - (r - 2) * 0.75} y2={r} stroke={greenColor} strokeWidth="1.5" />
          <line x1={r + (r - 2) * 0.75} y1={r} x2={size} y2={r} stroke={greenColor} strokeWidth="1.5" />
        </svg>

        {/* T ON WEBSITES */}
        <svg
          viewBox="0 0 220 40"
          height={size}
          width={(220 / 40) * size}
          fill="none"
          aria-hidden="true"
        >
          <text
            x="0"
            y="32"
            fontFamily="var(--font-display)"
            fontWeight="800"
            fontSize="36"
            fill={textColor}
          >
            T ON WEBSITES
          </text>
        </svg>
      </div>

      {/* Tagline */}
      <div
        className="flex items-center tracking-widest uppercase text-[10px] font-semibold"
        style={{ color: textColor, letterSpacing: "0.18em", fontSize: size * 0.22 }}
      >
        TARGET
        <span style={{ color: greenColor, margin: "0 4px" }}>&#x2022;</span>
        CONVERT
        <span style={{ color: greenColor, margin: "0 4px" }}>&#x2022;</span>
        SCALE
      </div>
    </div>
  );
}
