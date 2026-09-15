import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS_NAME, areas, serviceConfigs } from "@/lib/areas";
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
    default: "تسليك مجاري الكويت وعزل أسطح الكويت | دار الصيانة الكويتية",
    template: "%s | دار الصيانة الكويتية",
  },
  description:
    "دار الصيانة الكويتية تقدم خدمة تسليك مجاري الكويت وعزل أسطح الكويت المائي والحراري بسرعة استجابة وضمان على الخدمة في جميع المناطق. اتصل الآن أو راسلنا واتساب.",
  keywords: [
    "تسليك مجاري الكويت",
    "عزل أسطح الكويت",
    "شركة تسليك مجاري الكويت",
    "شركة عزل أسطح الكويت",
    "دار الصيانة الكويتية",
    "شفط بيارات الكويت",
    "تسليك مجاري بدون تكسير",
    "عزل مائي وحراري للأسطح",
    "خدمات الصيانة في الكويت",
  ],
  applicationName: "دار الصيانة الكويتية",
  authors: [{ name: "دار الصيانة الكويتية", url: SITE_URL }],
  creator: "دار الصيانة الكويتية",
  publisher: "دار الصيانة الكويتية",
  category: "خدمات منزلية",

  alternates: {
    canonical: SITE_URL,
    languages: {
      ar: SITE_URL,
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
    title: "تسليك مجاري الكويت وعزل أسطح الكويت | دار الصيانة الكويتية",
    description:
      "دار الصيانة الكويتية تقدم خدمة تسليك مجاري الكويت وعزل أسطح الكويت المائي والحراري بسرعة استجابة وضمان على الخدمة في جميع المناطق.",
    images: [
      {
        url: "/تسليك-مجاري-الكويت.webp",
        width: 1639,
        height: 720,
        alt: "دار الصيانة الكويتية — خدمات تسليك المجاري وعزل الأسطح في الكويت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري الكويت وعزل أسطح الكويت | دار الصيانة الكويتية",
    description:
      "دار الصيانة الكويتية تقدم خدمة تسليك مجاري الكويت وعزل أسطح الكويت المائي والحراري في جميع مناطق الكويت على مدار 24 ساعة.",
    images: ["/تسليك-مجاري-الكويت.webp"],
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

type SitePage = { name: string; path: string };

// الصفحات الثابتة في app
const staticPages: SitePage[] = [
  { name: "الرئيسية", path: "" },
  { name: "تسليك مجاري الكويت", path: "/drain-cleaning-kuwait" },
  {
    name: "تسليك مجاري المطابخ والحمامات الكويت",
    path: "/kitchen-bathroom-drain-cleaning-kuwait",
  },
  { name: "اسعار تسليك مجاري الكويت", path: "/drain-cleaning-prices-kuwait" },
  { name: "عزل أسطح الكويت", path: "/roof-waterproofing-kuwait" },
  { name: "العزل المائي والحراري الكويت", path: "/thermal-waterproofing-kuwait" },
  { name: "عزل أسطح جيتاروف الكويت", path: "/gitaroof-insulation-kuwait" },
  { name: "اسعار عزل اسطح الكويت", path: "/roof-insulation-prices-kuwait" },
  { name: "تركيب مكينة سرداب الكويت", path: "/basement-pump-kuwait" },
  { name: "تركيب منهول الكويت", path: "/manhole-installation-kuwait" },
  { name: "غسيل تانكي الكويت", path: "/water-tank-cleaning-kuwait" },
  { name: "مناطق الخدمة", path: "/areas" },
  { name: "المقالات", path: "/articles" },
  { name: "المدونة", path: "/blogs" },
  { name: "تسليك مجاري الكويت - مقال", path: "/blogs/drain-cleaning-kuwait" },
  {
    name: "تسليك المجاري في الكويت - مقال",
    path: "/blogs/drain-cleaning-in-kuwait",
  },
  { name: "من نحن", path: "/about-us" },
  { name: "تواصل معنا", path: "/contact-us" },
  { name: "سياسة الخصوصية", path: "/privacy-policy" },
  { name: "الشروط والأحكام", path: "/terms-conditions" },
];

// صفحات المناطق الديناميكية app/[slug] — خدمة × منطقة
// نفس ترتيب allAreaPageSlugs() في lib/areas.ts
const areaPages: SitePage[] = Object.values(serviceConfigs).flatMap((service) =>
  areas.map((area) => ({
    name: `${service.shortName} ${area.name}`,
    path: `/${service.prefix}${area.slug}`,
  }))
);

// كل صفحات الموقع (app) — تُستخدم في بيانات التنقل المنظمة
const sitePages: SitePage[] = [...staticPages, ...areaPages];

// تاريخ آخر تحديث فعلي للصفحة الرئيسية — يُحدَّث يدويًا عند تعديل المحتوى،
// حتى لا يُبلِّغ جوجل بتعديلٍ وهمي في كل عملية build.
const HOME_LAST_MODIFIED = "2026-09-15T00:00:00+00:00";

const HOME_TITLE = "تسليك مجاري الكويت وعزل أسطح الكويت | دار الصيانة الكويتية";
const HOME_DESCRIPTION =
  "دار الصيانة الكويتية تقدم خدمة تسليك مجاري الكويت وعزل أسطح الكويت المائي والحراري بسرعة استجابة وضمان على الخدمة في جميع المناطق.";

// Structured data
// النود `#business` (LocalBusiness/Plumber) هو مصدر بيانات الشركة الوحيد،
// ويُصدَّر مرة واحدة من `LocalBusinessSchema` في هذا الملف. لا تُنشئ نود
// Organization منفصلاً هنا — سيتعارض مع `#business` بنفس الاسم/الهاتف.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
    },
    {
      "@type": "WebPage",
      "@id": SITE_URL + "/#webpage",
      url: SITE_URL,
      name: HOME_TITLE,
      isPartOf: {
        "@id": SITE_URL + "/#website"
      },
      about: {
        "@id": SITE_URL + "/#business"
      },
      datePublished: "2020-12-29T13:47:49+00:00",
      dateModified: HOME_LAST_MODIFIED,
      description: HOME_DESCRIPTION,
      inLanguage: "ar",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/تسليك-مجاري-الكويت.webp`,
      },
      breadcrumb: {
        "@id": SITE_URL + "/#breadcrumb"
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": SITE_URL + "/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: HOME_TITLE,
          item: SITE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": SITE_URL + "/#sitepages",
      name: "صفحات الموقع",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: sitePages.length,
      itemListElement: sitePages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.name,
        item: {
          "@type": "SiteNavigationElement",
          "@id": `${SITE_URL}${page.path}/#navelement`,
          name: page.name,
          url: `${SITE_URL}${page.path}`,
          isPartOf: { "@id": SITE_URL + "/#website" },
        },
      })),
    },
  ],
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
