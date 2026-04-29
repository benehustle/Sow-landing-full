import Image from "next/image";
import Link from "next/link";

type LinkItem = { label: string; href: string };

const EXPLORE: LinkItem[] = [
  { label: "How It Works", href: "/#how" },
  { label: "What You Get", href: "/#what-you-get" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const COMPANY: LinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/#how" },
  { label: "Support", href: "/support" },
];

const LEGAL: LinkItem[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XTwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M21.35 11.1H12v3.2h5.35c-.23 1.4-1.66 4.1-5.35 4.1-3.22 0-5.85-2.66-5.85-5.95s2.63-5.95 5.85-5.95c1.83 0 3.05.78 3.75 1.45l2.55-2.45C16.85 4 14.65 3 12 3 6.95 3 2.85 7.1 2.85 12.15S6.95 21.3 12 21.3c5.5 0 9.15-3.85 9.15-9.3 0-.62-.07-1.1-.15-1.55Z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573142737102",
    Icon: FacebookIcon,
  },
  { label: "X / Twitter", href: "#", Icon: XTwitterIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Google", href: "#", Icon: GoogleIcon },
];

function FooterColumn({ heading, links }: { heading: string; links: LinkItem[] }) {
  return (
    <div>
      <h3 className="font-bold text-green-brand text-base mb-4">{heading}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-cream/85 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-green-deep text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo + tagline (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Image
              src="/logo-footer.png"
              alt="Spot On Websites"
              width={512}
              height={200}
              className="w-auto h-24 object-contain object-left -ml-1"
            />
            <p className="text-xs text-cream/60 mt-4">
              &copy; 2026 Spot On Websites. All rights reserved.
            </p>
          </div>

          {/* Explore */}
          <FooterColumn heading="Explore" links={EXPLORE} />

          {/* Company */}
          <FooterColumn heading="Company" links={COMPANY} />

          {/* Legal */}
          <FooterColumn heading="Legal" links={LEGAL} />

          {/* Proudly Australian */}
          <div>
            <h3 className="font-bold text-green-brand text-base mb-4">Proudly Australian</h3>
            <div className="flex items-center gap-3">
              <Image
                src="/australia.gif"
                alt="Australian flag"
                width={44}
                height={28}
                unoptimized
                className="rounded-sm shadow-sm shrink-0"
              />
              <p className="text-xs text-cream/85 leading-snug">
                100% Aussie support
                <br />
                for Aussie businesses.
              </p>
            </div>

            <div className="border-t border-cream/15 mt-5 pt-5 flex items-center gap-5">
              {SOCIALS.map(({ label, href, Icon }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-cream/85 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 mt-10">
          <p className="text-xs text-cream/50">
            &copy; 2026 Spot On Websites. EHUSTLE PTY LTD. ABN 21 679 259 440.
          </p>
        </div>
      </div>
    </footer>
  );
}
