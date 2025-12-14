import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeutschMaster - Naučite Nemački Jezik",
    template: "%s | DeutschMaster",
  },
  description: "Najnaprednija platforma za učenje nemačkog jezika za srpske govornike. Od A1 do C2 uz pomoć veštačke inteligencije.",
  keywords: ["nemački jezik", "učenje nemačkog", "german language", "AI tutor", "srpski", "A1", "B1", "C1"],
  authors: [{ name: "DeutschMaster" }],
  creator: "DeutschMaster",
  publisher: "DeutschMaster",
  applicationName: "DeutschMaster",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DeutschMaster",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: "de_DE",
    url: "https://deutschmaster.app",
    title: "DeutschMaster - Naučite Nemački Jezik",
    description: "Najnaprednija platforma za učenje nemačkog jezika za srpske govornike.",
    siteName: "DeutschMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeutschMaster - Naučite Nemački Jezik",
    description: "Najnaprednija platforma za učenje nemačkog jezika za srpske govornike.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
