import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { Providers } from "@/components/providers";
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
  applicationName: siteConfig.name,
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
    siteName: siteConfig.name,
    locale: "az_AZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${sans.variable} ${display.variable} overflow-x-hidden antialiased`}>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
