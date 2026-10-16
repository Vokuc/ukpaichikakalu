import type { Metadata, Viewport } from "next";
import { Syne, DotGothic16, Stint_Ultra_Expanded, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dotGothic16 = DotGothic16({
  variable: "--font-dotgothic",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const stintUltraExpanded = Stint_Ultra_Expanded({
  variable: "--font-stint",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050912",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "CHIKA KALU UKPAI (VOKUC) — Software Developer · Digital Product Builder · Musician & Creator",
  description:
    "Building digital products, exploring human behaviour, and creating at the intersection of technology, music, and ideas. React, Next.js, Angular, TypeScript, Supabase, FL Studio.",
  keywords: [
    "Chika Kalu Ukpai",
    "Vokuc",
    "Vokuc Sound",
    "Software Developer",
    "Digital Product Builder",
    "Musician",
    "Music Producer",
    "LeaderboardOS",
    "WhoDeyLegit",
    "Naija Presido",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Supabase",
    "FL Studio",
    "Guitar",
    "Civil Engineering",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Chika Kalu Ukpai", url: "https://github.com" }],
  creator: "Chika Kalu Ukpai",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "CHIKA KALU UKPAI (VOKUC) — Software Developer · Digital Product Builder · Musician & Creator",
    description:
      "Where clean code meets sonic frequency. Building scalable digital products, exploring human behaviour, and creating at the intersection of technology, music, and ideas.",
    siteName: "Chika Kalu Ukpai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIKA KALU UKPAI (VOKUC) — Software Developer · Digital Product Builder · Musician & Creator",
    description:
      "Where clean code meets sonic frequency. Building scalable digital products, exploring human behaviour, and creating at the intersection of technology, music, and ideas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth dark ${syne.variable} ${dotGothic16.variable} ${stintUltraExpanded.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="selection:bg-[#dfa471] selection:text-[#050912] antialiased font-mono relative min-h-screen arch-grid-bg text-[#f1f5f9] bg-[#050912] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
