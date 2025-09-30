import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DialerGPT - AI Lead Qualification System",
  description: "Stop cold calling. Start smart calling. Let AI qualify your leads through intelligent voice calls.",
  metadataBase: new URL('https://dialergpt.com'),
  keywords: ["AI lead qualification", "sales automation", "cold calling", "AI voice calls", "lead generation", "sales enablement", "CRM integration"],
  authors: [{ name: "DialerGPT" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dialergpt.com",
    title: "DialerGPT - AI Lead Qualification System",
    description: "Stop cold calling. Start smart calling. Let AI qualify your leads through intelligent voice calls.",
    siteName: "DialerGPT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DialerGPT - AI Lead Qualification System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DialerGPT - AI Lead Qualification System",
    description: "Stop cold calling. Start smart calling. Let AI qualify your leads through intelligent voice calls.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-24K1K79T3K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-24K1K79T3K');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DialerGPT",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered lead qualification system that automates cold calling and qualifies leads through intelligent voice calls.",
              "operatingSystem": "Web",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              }
            })
          }}
        />
      </body>
    </html>
  );
}