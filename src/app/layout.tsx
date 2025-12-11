import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hivekaro.com';
const logoUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hk-1761923262135.jpg';

export const metadata: Metadata = {
  title: "HiveKaro - Anonymous Community Marketplace",
  description: "Connect with verified dealers through blind quotations. Safe, anonymous, and community-driven.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'HiveKaro - Anonymous Community Marketplace',
    description: 'Connect with verified dealers through blind quotations. Safe, anonymous, and community-driven.',
    url: siteUrl,
    siteName: 'HiveKaro',
    images: [
      {
        url: logoUrl,
        width: 800,
        height: 600,
        alt: 'HiveKaro Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiveKaro - Anonymous Community Marketplace',
    description: 'Connect with verified dealers through blind quotations. Safe, anonymous, and community-driven.',
    images: [logoUrl],
  },
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
  },
};

// Structured data for search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HiveKaro',
  url: siteUrl,
  logo: logoUrl,
  sameAs: [
    'https://twitter.com/hivekaro',
    'https://facebook.com/hivekaro',
    'https://linkedin.com/company/hivekaro',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-123-456-7890',
    contactType: 'customer service',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}