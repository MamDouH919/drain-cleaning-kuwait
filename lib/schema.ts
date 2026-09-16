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
  // `Plumber` + `RoofingContractor` are the precise types for the two lines
  // of business (drain cleaning, roof waterproofing/insulation); `LocalBusiness`
  // is kept so generic parsers and SEO auditors that only look for it still match.
  "@type": ["LocalBusiness", "Plumber", "RoofingContractor"],
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
  // KWD range reflecting the real published drain-cleaning price table
  // (10–25 د.ك) — see /drain-cleaning-prices-kuwait. Update if/when the
  // business publishes a verified full range across both service lines.
  priceRange: "10 - 25 KWD",
  currenciesAccepted: "KWD",
  paymentAccepted: "نقداً، كي نت، تحويل بنكي",
  // No fixed street address: this is a service-area business (SAB) with no
  // visitable premises anywhere on the site. Asserting a PostalAddress/geo
  // here would be the "fake storefront" anti-pattern — areaServed/serviceArea
  // below is the correct SAB signal instead. Add a real address only if/when
  // a verified physical office exists and matches the Google Business Profile.
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
      // The site has no English section/content today — asserting "en" here
      // would be a false language claim. Add it back only alongside a real
      // English section.
      availableLanguage: ["ar"],
      hoursAvailable: OPEN_24_7,
    },
  ],
  knowsLanguage: ["ar"],
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
