import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/areas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import Social from "@/components/social";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "تسليك مجاري وعزل أسطح في الكويت 24 ساعة | اتصل 98890031",
    template: "%s | اتصل 98890031",
  },
  description:
    "خدمات تسليك المجاري وشفط البيارات وعزل الأسطح المائي والحراري في الكويت على مدار 24 ساعة بأحدث المعدات وفريق متخصص مع ضمان على الخدمة وسرعة استجابة.",
  keywords: [
    "تسليك مجاري الكويت",
    "عزل أسطح الكويت",
    "شفط بيارات الكويت",
    "خدمات صيانة منزلية الكويت",
    "تسليك مجاري بدون تكسير",
  ],
  applicationName: "خدمات الكويت",
  authors: [{ name: "خدمات الكويت" }],
  creator: "خدمات الكويت",
  publisher: "خدمات الكويت",
  category: "خدمات منزلية",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
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
    title: "خدمات الكويت",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: SITE_URL,
    siteName: "خدمات الكويت",
    title: "تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
    description:
      "خدمات تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت على مدار 24 ساعة بأحدث المعدات وفريق متخصص.",
    images: [
      {
        url: "/تسليك-مجاري-الكويت.webp",
        width: 1639,
        height: 720,
        alt: "خدمات تسليك المجاري وعزل الأسطح في الكويت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
    description:
      "خدمات تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت على مدار 24 ساعة.",
    images: ["/تسليك-مجاري-الكويت.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0369a1",
  width: "device-width",
  initialScale: 1,
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
        <Navbar />
        <Social />
        {children}
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
