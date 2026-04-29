import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream py-32">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center text-center gap-6">
        <Image
          src="/robots/robot-pointing.png"
          alt="Spot On Websites mascot"
          width={240}
          height={288}
          className="w-[240px] h-auto"
        />
        <h1 className="h-display text-4xl md:text-5xl text-ink">
          Looks like you took a wrong turn.
        </h1>
        <p className="text-ink/70 text-lg leading-relaxed">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors text-lg"
        >
          Take Me Home
        </Link>
      </div>
    </section>
  );
}
