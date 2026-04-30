import type { Metadata } from "next";
import { Poppins, Manrope, Permanent_Marker } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "834466499006537";

const displayFont = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "SOW",
  description: "SOW landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${displayFont.variable} ${manrope.variable} ${permanentMarker.variable}`}
    >
      <body>
        <MicrosoftClarity />
        {pixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
              }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${pixelId}');
              fbq('track','PageView');
            `}</Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
