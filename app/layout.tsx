import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Marcellus, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus-nf",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pet grooming Goa",
    "dog grooming Siolim",
    "cat grooming Goa",
    "cat boarding Goa",
    "pet spa Siolim",
    "pet boutique Goa",
    "Mostlyfur",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#16352a",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PetGroomingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.googleRating,
    reviewCount: siteConfig.googleReviewCount,
  },
  sameAs: [siteConfig.mapsUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${marcellus.variable} ${hankenGrotesk.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
