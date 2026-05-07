import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { Providers } from "@/components/providers";
import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: brand.siteName,
  icons: {
    icon: brand.faviconPath,
    shortcut: brand.faviconPath,
    apple: brand.faviconPath
  },
  keywords: [
    "veb sayt hazırlanması",
    "premium web studio",
    "personal web studio",
    "korporativ sayt",
    "landing page",
    "e-commerce website"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: brand.siteName,
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: brand.ogImagePath,
        alt: brand.siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [brand.ogImagePath]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${sans.variable} ${display.variable} overflow-x-hidden antialiased`}
        style={
          {
            "--brand-watermark-url": `url(${brand.logoPath})`
          } as React.CSSProperties
        }
      >
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
