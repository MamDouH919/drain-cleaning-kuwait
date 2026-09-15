import {
  BUSINESS_NAME,
  PHONE_NUMBER,
  SITE_URL,
  WHATSAPP_URL,
  areas,
} from "./areas";

/**
 * Canonical `#business` node for the whole site.
 * Every page references it via `{ "@id": `${SITE_URL}/#business` }`, so it is
 * emitted once from the root layout instead of per page.
 */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const OFFERED_SERVICES = [
  "تسليك مجاري الكويت",
  "تسليك مجاري المطابخ والحمامات",
  "شفط بيارات الكويت",
  "عزل أسطح مائي وحراري",
  "عزل أسطح جيتاروف",
  "تركيب مكينة سرداب",
  "تركيب منهول",
  "غسيل تانكي المياه",
];

const OPEN_24_7 = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  // `Plumber` is the precise type; `LocalBusiness` is kept so generic
  // parsers and SEO auditors that only look for it still match.
  "@type": ["LocalBusiness", "Plumber"],
  "@id": BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: "تسليك مجاري الكويت وعزل أسطح الكويت",
  legalName: BUSINESS_NAME,
  description:
    "خدمات تسليك المجاري وشفط البيارات وعزل الأسطح المائي والحراري في الكويت على مدار 24 ساعة بأحدث المعدات وفريق متخصص مع ضمان على الخدمة وسرعة استجابة.",
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  inLanguage: "ar",
  telephone: PHONE_NUMBER,
  image: [
    `${SITE_URL}/%D8%AA%D8%B3%D9%84%D9%8A%D9%83-%D9%85%D8%AC%D8%A7%D8%B1%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`,
    `${SITE_URL}/web-app-manifest-512x512.png`,
  ],
  logo: `${SITE_URL}/web-app-manifest-512x512.png`,
  priceRange: "$$",
  currenciesAccepted: "KWD",
  paymentAccepted: "نقداً، كي نت، تحويل بنكي",
  address: {
    "@type": "PostalAddress",
    streetAddress: "خدمة متنقلة تغطي جميع محافظات الكويت",
    addressLocality: "مدينة الكويت",
    addressRegion: "الكويت",
    postalCode: "13001",
    addressCountry: "KW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.3759,
    longitude: 47.9774,
  },
  areaServed: [
    { "@type": "Country", name: "الكويت" },
    ...areas.map((area) => ({ "@type": "City", name: area.name })),
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.3759,
      longitude: 47.9774,
    },
    geoRadius: 80000,
  },
  openingHoursSpecification: OPEN_24_7,
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [WHATSAPP_URL],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      areaServed: "KW",
      availableLanguage: ["ar", "en"],
      hoursAvailable: OPEN_24_7,
    },
  ],
  knowsLanguage: ["ar", "en"],
  makesOffer: OFFERED_SERVICES.map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
    priceCurrency: "KWD",
    availability: "https://schema.org/InStock",
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات تسليك المجاري وعزل الأسطح في الكويت",
    itemListElement: OFFERED_SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, areaServed: { "@type": "Country", name: "الكويت" } },
    })),
  },
};
