import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS_NAME } from "@/lib/areas";
import { HOME_TITLE, HOME_DESCRIPTION, OG_IMAGE } from "@/lib/home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import Social from "@/components/social";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | دار الصيانة الكويتية",
  },
  description: HOME_DESCRIPTION,
  applicationName: "دار الصيانة الكويتية",
  authors: [{ name: "دار الصيانة الكويتية", url: SITE_URL }],
  creator: "دار الصيانة الكويتية",
  publisher: "دار الصيانة الكويتية",
  category: "خدمات منزلية",

  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-KW": SITE_URL,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "دار الصيانة الكويتية",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: SITE_URL,
    siteName: "دار الصيانة الكويتية",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE.url],
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

export const viewport: Viewport = {
  themeColor: "#0369a1",
  width: "device-width",
  initialScale: 1,
};

// Structured data
// النود `#business` (LocalBusiness) هو مصدر بيانات الشركة الوحيد، ويُصدَّر مرة
// واحدة من `LocalBusinessSchema` في هذا الملف. لا تُنشئ نود Organization
// منفصلاً هنا — سيتعارض مع `#business` بنفس الاسم/الهاتف.
// نود `#website` يبقى هنا لأن كل الصفحات تشير إليه عبر `isPartOf`. أما
// WebPage/BreadcrumbList الخاصة بالرئيسية فمكانها `components/StructuredData.tsx`
// حتى لا تظهر في كل صفحات الموقع.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_URL + "/#website",
  url: SITE_URL,
  name: BUSINESS_NAME,
  description: HOME_DESCRIPTION,
  inLanguage: "ar",
  publisher: {
    "@id": SITE_URL + "/#business"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: SITE_URL + "/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 lg:pb-0">
        <LocalBusinessSchema />
        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KF32PKDXHV"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KF32PKDXHV');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />
        {/* <Social /> */}
        {children}
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
