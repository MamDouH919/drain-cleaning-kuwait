import { SITE_URL } from "@/lib/areas";

const serviceAreas = [
  "حولي",
  "السالمية",
  "الجهراء",
  "الفروانية",
  "الأحمدي",
];

const services = [
  {
    name: "تسليك مجاري الكويت",
    description:
      "تسليك المجاري وفتح الانسدادات بأحدث الأجهزة وسرعة استجابة على مدار 24 ساعة.",
  },
  {
    name: "شفط بيارات الكويت",
    description:
      "شفط وتنظيف البيارات والمجاري بسيارات حديثة وفريق متخصص في جميع مناطق الكويت.",
  },
  {
    name: "عزل أسطح الكويت",
    description:
      "عزل الأسطح المائي والحراري لحماية المباني من تسرب المياه والحرارة مع ضمان على الخدمة.",
  },
];

const faqs = [
  {
    question: "كم سعر تسليك المجاري في الكويت؟",
    answer:
      "يختلف السعر حسب حالة الانسداد ومكانه، لكن نوفر أسعار مناسبة وتقييم مجاني قبل بدء العمل.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بتسليك المجاري بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "هل تقدمون خدمة 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك المجاري وعزل الأسطح على مدار 24 ساعة في جميع مناطق الكويت.",
  },
  {
    question: "ما أفضل نوع عزل للأسطح؟",
    answer:
      "العزل المائي والحراري والفوم من أفضل أنواع العزل لحماية الأسطح من التسربات والحرارة.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت مثل حولي، السالمية، الفروانية، الجهراء، الأحمدي، ومبارك الكبير.",
  },
  {
    question: "كم يستغرق وقت تسليك المجاري؟",
    answer:
      "غالبًا يتم حل المشكلة خلال 30 إلى 60 دقيقة حسب حالة الانسداد ومكانه.",
  },
  {
    question: "هل خدماتكم تشمل المنازل والشركات؟",
    answer:
      "نعم، نقدم خدمات تسليك المجاري وعزل الأسطح للمنازل، الفلل، والشركات في جميع أنحاء الكويت.",
  },
  {
    question: "هل يوجد ضمان على خدمة العزل؟",
    answer:
      "نعم، نوفر ضمان على أعمال العزل المائي والحراري لضمان حماية طويلة الأمد للأسطح.",
  },
  {
    question: "هل يمكن الحجز عبر واتساب؟",
    answer:
      "نعم، يمكن التواصل عبر واتساب لحجز الخدمة أو طلب معاينة سريعة.",
  },
  {
    question: "هل الأسعار ثابتة أم حسب الحالة؟",
    answer:
      "الأسعار تختلف حسب المشكلة، لكن يتم تقديم تقييم وسعر واضح قبل بدء العمل بدون أي رسوم خفية.",
  },
  {
    question: "هل تعملون في الحالات الطارئة؟",
    answer:
      "نعم، نوفر خدمة طوارئ 24 ساعة للتعامل مع انسداد المجاري أو مشاكل العزل بشكل فوري.",
  },
];

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "خدمات الكويت",
        url: SITE_URL,
        logo: `${SITE_URL}/web-app-manifest-512x512.png`,
        image: `${SITE_URL}/تسليك-مجاري-الكويت.webp`,
        telephone: "+96598890031",
        areaServed: { "@type": "Country", name: "الكويت" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "خدمات الكويت",
        inLanguage: "ar",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        areaServed: serviceAreas.map((name) => ({
          "@type": "City",
          name,
        })),
        provider: { "@id": `${SITE_URL}/#business` },
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
