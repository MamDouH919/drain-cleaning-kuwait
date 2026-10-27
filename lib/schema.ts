import { BUSINESS_NAME, PHONE_NUMBER, SAME_AS, SITE_URL } from "./areas";
import { coreServices } from "./services";

/**
 * Canonical `#business` node for the whole site.
 * Every page references it via `{ "@id": `${SITE_URL}/#business` }`, so it is
 * emitted once from the root layout instead of per page.
 */
export const BUSINESS_ID = `${SITE_URL}/#business`;

// محافظات الكويت الست.
const GOVERNORATES = [
  "محافظة العاصمة",
  "محافظة حولي",
  "محافظة الفروانية",
  "محافظة الأحمدي",
  "محافظة الجهراء",
  "محافظة مبارك الكبير",
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
  legalName: BUSINESS_NAME,
  description:
    "خدمات تسليك المجاري وشفط البيارات وعزل الأسطح المائي والحراري في الكويت على مدار 24 ساعة بأحدث المعدات وفريق متخصص مع ضمان على الخدمة وسرعة استجابة.",
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  telephone: PHONE_NUMBER,
  image: [
    `${SITE_URL}/drain-cleaning-kuwait.webp`,
    `${SITE_URL}/web-app-manifest-512x512.png`,
  ],
  logo: `${SITE_URL}/web-app-manifest-512x512.png`,
  priceRange: "$$",
  currenciesAccepted: "KWD",
  paymentAccepted: "نقداً، كي نت، تحويل بنكي",
  // عنوان على مستوى المدينة بس، من غير شارع، لحد ما العنوان الفعلي يتأكد.
  address: {
    "@type": "PostalAddress",
    addressLocality: "مدينة الكويت",
    addressRegion: "محافظة العاصمة",
    addressCountry: "KW",
  },
  // TODO: أضف `geo` (GeoCoordinates) ببيانات حقيقية بس، مطابقة لملف Google
  // Business Profile. و`aggregateRating` بس لو التقييمات ظاهرة فعلًا في الصفحة
  // ومن عملاء حقيقيين.
  areaServed: [
    { "@type": "Country", name: "الكويت" },
    ...GOVERNORATES.map((name) => ({ "@type": "AdministrativeArea", name })),
  ],
  openingHoursSpecification: OPEN_24_7,
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: SAME_AS,
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات دار الصيانة الكويتية",
    itemListElement: coreServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.anchor,
        description: service.description,
        url: `${SITE_URL}${service.href}`,
        areaServed: { "@type": "Country", name: "الكويت" },
      },
    })),
  },
};
