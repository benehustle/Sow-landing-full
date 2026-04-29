import Image from "next/image";

interface LogoProps {
  size?: number;
  variant?: "default" | "white";
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <Image
      src="/logo-real-v2.png"
      alt="Spot On Websites"
      width={512}
      height={200}
      priority
      className="w-auto object-contain"
      style={{ height: size }}
    />
  );
}
