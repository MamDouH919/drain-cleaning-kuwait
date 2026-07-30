import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  areas,
} from "@/lib/areas";

import Breadcrumbs from "@/components/Breadcrumbs";
const PAGE_PATH = "/manhole-installation-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/تركيب-منهول-الكويت.webp";
const COVER_ALT = "تركيب منهول في الكويت";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تركيب منهول الكويت | توريد وتركيب أغطية المناهل",
  description:
    "خدمة تركيب منهول الكويت وتوريد أغطية وفتحات المناهل بمختلف المقاسات لشبكات الصرف الصحي، تركيب وصيانة بإتقان وأمان وضمان على الخدمة في جميع مناطق الكويت.",
  keywords: [
    "تركيب منهول الكويت",
    "أغطية مناهل الكويت",
    "غطاء منهول",
    "صيانة مناهل الصرف",
    "manhole installation Kuwait",
  ],
  alternates: { canonical: PAGE_PATH, languages: { "ar-KW": PAGE_PATH } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    title: "تركيب منهول الكويت | توريد وتركيب أغطية المناهل",
    description:
      "توريد وتركيب أغطية وفتحات المناهل بمختلف المقاسات لشبكات الصرف الصحي بإتقان وأمان في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تركيب منهول الكويت | توريد وتركيب أغطية المناهل",
    description:
      "توريد وتركيب أغطية وفتحات المناهل بمختلف المقاسات لشبكات الصرف الصحي بإتقان وأمان.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "تركيب غطاء منهول حديد",
  "تركيب غطاء منهول بلاستيك مقوى",
  "تركيب غطاء منهول ألومنيوم",
  "صيانة وإصلاح المناهل القديمة",
  "رفع وتعديل مستوى المناهل",
];

type Step = {
  title: string;
  image?: string;
  alt?: string;
  items: string[];
};

const steps: Step[] = [
  {
    title: "الخطوة الأولى",
    image: "/drain-cleaning/تسليك-منازل.webp",
    alt: "فحص وقياس المنهول قبل التركيب",
    items: [
      "فحص شامل للمنهول الحالي وقياس أبعاده بدقة من الداخل والخارج.",
      "تحديد نوع غطاء منهول مناسب للأحمال التي ستمر فوقه.",
      "تحضير الأدوات اللازمة مثل متر القياس الليزري والكاميرا المخصصة للتفتيش.",
      "المدة: حوالي 30 دقيقة.",
    ],
  },
  {
    title: "الخطوة الثانية",
    image: "/drain-cleaning/تسليك-مجاري.webp",
    alt: "إزالة غطاء المنهول القديم وتنظيفه",
    items: [
      "إزالة الغطاء القديم بحرص شديد.",
      "تنظيف المنطقة المحيطة باستخدام مواد تنظيف ومعدات مخصصة.",
      "فحص حالة الإطار المعدني لمعرفة مدى تحمله للغطاء الجديد باستخدام معدات رفع آمنة.",
      "المدة: حوالي 45 دقيقة.",
    ],
  },
  {
    title: "الخطوة الثالثة",
    items: [
      "تسوية سطح المنهول ووضع مواد عازلة إذا لزم الأمر.",
      "فحص نظام الصرف وضمان إغلاق محكم.",
      "استخدام أحدث معدات التسوية.",
      "المدة: 60 دقيقة.",
    ],
  },
  {
    title: "الخطوة الرابعة",
    items: [
      "تركيب غطاء المنهول الجديد وضبطه بإحكام.",
      "اختبار سهولة فتح الغطاء أو إغلاقه لضمان سهولة صيانة المنهول مستقبلًا.",
      "استخدام مفاتيح ربط هيدروليكية عالية الجودة وأجهزة لضبط مستوى المنهول.",
      "المدة: 45 دقيقة.",
    ],
  },
  {
    title: "الخطوة الخامسة",
    items: [
      "فحص شامل لكل جزء من أجزاء المنهول.",
      "تسليم العميل الضمان وكتيب تعليمات الصيانة.",
      "المدة: 30 دقيقة (المدة الإجمالية للمهمة: 3 ساعات ونصف).",
    ],
  },
];

const searchTerms = [
  "تركيب غطاء منهول الكويت",
  "غطاء منهول حديد",
  "غطاء منهول بلاستيك",
  "غطاء منهول ألومنيوم",
  "أسعار تركيب غطاء منهول",
  "صيانة منهول الكويت",
];

const faqs = [
  {
    question: "ما أنواع المناهل التي تركبونها؟",
    answer:
      "نركّب جميع أنواع المناهل وأغطيتها من الحديد والخرسانة بمختلف المقاسات للمنازل والفلل والمنشآت وشبكات الصرف الصحي في الكويت.",
  },
  {
    question: "هل يمكن تعديل مستوى منهول قديم؟",
    answer:
      "نعم، نقوم برفع وتعديل مستوى المناهل القديمة لتتساوى مع سطح الأرض وضبطها لمنع الاهتزاز والإزعاج.",
  },
  {
    question: "هل المناهل تتحمل مرور السيارات؟",
    answer:
      "نوفر أغطية مناهل بأحمال مختلفة تناسب الممرات والساحات ومواقف السيارات حسب الحاجة.",
  },
  {
    question: "هل تقدمون صيانة للمناهل؟",
    answer:
      "نعم، نقدم صيانة وإصلاح المناهل وتغيير الأغطية التالفة ومعالجة الروائح والتسرب في جميع مناطق الكويت.",
  },
  {
    question: "هل الخدمة متوفرة في جميع مناطق الكويت؟",
    answer:
      "نعم، نقدم خدمة تركيب وصيانة المناهل في جميع مناطق الكويت مع سرعة استجابة وضمان على الخدمة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تركيب منهول الكويت",
      serviceType: "تركيب وصيانة المناهل وأغطية الصرف",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "تركيب منهول الكويت وتوريد أغطية وفتحات المناهل بمختلف المقاسات لشبكات الصرف الصحي بإتقان وأمان.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات المناهل",
        itemListElement: features.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "تركيب منهول الكويت", item: PAGE_URL },
      ],
    },
  ],
};

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={338}
      sizes="(max-width: 640px) 100vw, 600px"
      className="mx-auto my-8 aspect-[16/9] w-full max-w-[600px] rounded-2xl border border-slate-100 object-cover shadow-md ring-1 ring-slate-900/5"
    />
  );
}

export default function ManholeInstallationKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: "تركيب منهول الكويت" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            خدمة 24 ساعة في جميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            تركيب منهول الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            توريد وتركيب أغطية المناهل بضمان
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            تركيب منهول الكويت وتوريد أغطية وفتحات المناهل بمختلف المقاسات لشبكات
            الصرف الصحي، تركيب وصيانة بإتقان وأمان مع فريق متخصص يصل إليك في جميع
            مناطق الكويت.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
            >
              {PHONE_DISPLAY} | اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-lg font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50"
            >
              تواصل واتساب
            </a>
          </div>

          <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-900/5">
            <Image
              src={COVER_IMAGE}
              alt={COVER_ALT}
              width={1200}
              height={750}
              preload
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <p className="text-lg leading-relaxed text-slate-600">
            تقدم شركة {BUSINESS_NAME} خدمة{" "}
            <strong className="font-bold text-slate-900">تركيب غطاء منهول</strong>{" "}
            في الكويت وذلك بجميع أنواعه مثل غطاء منهول زهر، البلاستيك المقوى،
            وأيضًا الخرساني، كلًا يتم تركيبه حسب المكان ومدى تحمله للأوزان.
            تستخدم شركتنا أحدث التقنيات المعتمدة لضمان تركيب غطاء منهول آمن
            ومتوافق مع مواصفات بلدية الكويت.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            كما تستخدم شركتنا أفضل الطرق الحديثة في التركيب، وأحدث المواد
            والمعدات عالية الجودة، وذلك على يد فريق عمل ذو خبرة وكفاءة، ومدرب على
            كافة الأساليب الحديثة التي تضمن تركيب غطاء منهول احترافي. كما تسعى
            شركتنا لإرضاء عملائها بتقديم أرخص الأسعار وخصومات وعروض مميزة على
            الخدمات المختلفة.
          </p>

          <blockquote className="mt-8 rounded-2xl border-r-4 border-sky-500 bg-sky-50/70 p-6 text-lg leading-relaxed text-slate-700">
            <p>
              توفر{" "}
              <Link href="/" className="font-bold text-sky-700 underline-offset-4 hover:underline">
                شركة {BUSINESS_NAME}
              </Link>{" "}
              خدمة تركيب غطاء المنهول في الكويت لجميع الأماكن والمنازل والشوارع،
              باستخدام أفضل المواد وأحدث المعدات لضمان المتانة والأمان. احصل على
              تركيب احترافي سريع مع ضمان جودة العمل. للحجز والاستفسار اتصل الآن
              على{" "}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="font-bold text-emerald-700 underline-offset-4 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </blockquote>

          <ArticleImage
            src="/portfolio/تركيب-منهول-الكويت.webp"
            alt="تركيب غطاء منهول في الكويت باحترافية"
          />

          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            نبذة عن الخدمة المقدمة
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            غطاء المنهول هو غطاء يستخدم لإغلاق فتحات غرف التفتيش الخاصة بشبكات
            الصرف الصحي أو المياه أو الكابلات، ويوضع على سطح الأرض لحماية الفتحة.
            استطاعت شركتنا أن تلفت أنظار العديد من العملاء الراغبين في تركيب غطاء
            منهول بشكل احترافي، وذلك بفضل خبرتها الكبيرة في هذا المجال وامتلاكها
            فريق عمل مدرب على اختيار وتركيب غطاء منهول مناسب وباحترافية شديدة،
            مستخدمًا أفضل المواد والمعدات الحديثة.
          </p>

          <ArticleImage
            src="/drain-cleaning/تركيب-منهول-الكويت.webp"
            alt="ما هو غطاء المنهول واستخداماته"
          />

          <p className="text-lg leading-relaxed text-slate-600">
            يتم اختيار غطاء المنهول المناسب حسب مكان غرفة التفتيش المراد تغطيتها:
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {[
              {
                place: "في الشوارع ومدخل الجراجات والطرق العامة:",
                desc: "نحتاج إلى غطاء منهول مصنوع من الحديد ليتحمل أوزان السيارات والأحمال الثقيلة.",
              },
              {
                place: "في المنازل والحدائق وعلى الأسطح:",
                desc: "يتم استخدام غطاء منهول مصنوع من البلاستيك، حيث لا توجد أحمال ثقيلة.",
              },
              {
                place: "في الفلل والكمبوندات والمولات:",
                desc: "يستخدم غطاء منهول ألومنيوم للأماكن التي تحتاج إلى شكل جمالي، وفي نفس الوقت يتحمل أحمال متوسطة.",
              },
            ].map((item) => (
              <li
                key={item.place}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 text-base leading-relaxed text-slate-600 ring-1 ring-slate-900/5"
              >
                <strong className="font-bold text-slate-900">{item.place}</strong>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            لابد من اختيار النوع المناسب للحفاظ على الأمان ومنع تعرض غطاء المنهول
            للكسر أو التلف. لذلك تقدم شركتنا خدمة تركيب غطاء منهول وفقًا
            للمواصفات القياسية الموضوعة من قِبل بلدية الكويت، وذلك بأفضل الأسعار.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            أنواع أغطية المنهول التي نوفرها في الكويت
          </h2>

          <h3 className="mt-8 text-xl font-extrabold text-slate-900 sm:text-2xl">
            غطاء منهول حديد
          </h3>
          <ArticleImage
            src="/drain-cleaning/تسليك-بلوعات.webp"
            alt="غطاء منهول حديد للشوارع والمداخل"
          />
          <p className="text-lg leading-relaxed text-slate-600">
            يُعد{" "}
            <strong className="font-bold text-slate-900">غطاء المنهول الحديد</strong>{" "}
            من أقوى وأكثر الأنواع استخدامًا في الكويت، خاصة في الشوارع الرئيسية،
            ومداخل الجراجات، والطرق التي تمر فوقها السيارات والمركبات الثقيلة
            بشكل يومي. يتميز هذا النوع بقدرته العالية على تحمل الأوزان والضغط دون
            أن يتعرض للكسر أو التشقق مع مرور الوقت.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نحرص على{" "}
            <strong className="font-bold text-slate-900">
              تركيب غطاء منهول حديد مطابق لمواصفات بلدية الكويت
            </strong>
            ، مع تثبيته بإحكام داخل الإطار المعدني لمنع الاهتزاز أو الصوت المزعج
            أثناء مرور المركبات، مما يوفر أعلى درجات الأمان والسلامة في الأماكن
            العامة.
          </p>
          <p className="mt-5 rounded-2xl bg-white p-5 text-base leading-relaxed text-slate-600 ring-1 ring-slate-900/5">
            <span aria-hidden="true">🔹</span>{" "}
            <strong className="font-bold text-slate-900">أماكن الاستخدام:</strong>
            <br />
            الشوارع – الطرق العامة – مداخل الجراجات – المناطق الصناعية.
          </p>

          <h3 className="mt-10 text-xl font-extrabold text-slate-900 sm:text-2xl">
            غطاء منهول بلاستيك مقوى
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            يُستخدم{" "}
            <strong className="font-bold text-slate-900">
              غطاء المنهول البلاستيك المقوى
            </strong>{" "}
            في الأماكن التي لا تتعرض لأحمال ثقيلة، مثل المنازل، الحدائق، الأسطح،
            والمناطق السكنية الخاصة. ويتميز هذا النوع بخفة وزنه وسهولة تركيبه،
            إلى جانب مقاومته العالية للرطوبة والصدأ والعوامل الجوية.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نوفر خدمة{" "}
            <strong className="font-bold text-slate-900">
              تركيب غطاء منهول بلاستيك في الكويت
            </strong>{" "}
            بأسعار مناسبة، مع ضمان تثبيته بشكل محكم لمنع انبعاث الروائح الكريهة
            أو دخول الحشرات، خاصة بعد أعمال{" "}
            <Link
              href="/drain-cleaning-kuwait"
              className="font-bold text-sky-700 underline-offset-4 hover:underline"
            >
              تنظيف جورة الكويت
            </Link>{" "}
            أو صيانة شبكات الصرف الصحي داخل المنازل.
          </p>
          <p className="mt-5 rounded-2xl bg-white p-5 text-base leading-relaxed text-slate-600 ring-1 ring-slate-900/5">
            <span aria-hidden="true">🔹</span>{" "}
            <strong className="font-bold text-slate-900">أماكن الاستخدام:</strong>
            <br />
            المنازل – الحدائق – الأسطح – الفلل السكنية.
          </p>

          <h3 className="mt-10 text-xl font-extrabold text-slate-900 sm:text-2xl">
            غطاء منهول ألومنيوم
          </h3>
          <ArticleImage
            src="/drain-cleaning/تنظيف-جورة.webp"
            alt="غطاء منهول ألومنيوم"
          />
          <p className="text-lg leading-relaxed text-slate-600">
            يُفضل{" "}
            <strong className="font-bold text-slate-900">
              غطاء المنهول الألومنيوم
            </strong>{" "}
            في الأماكن التي تجمع بين الشكل الجمالي والتحمل المتوسط، مثل الفلل،
            الكمبوندات، المولات التجارية، والمداخل الراقية. يتميز هذا النوع
            بمظهره الأنيق وخفة وزنه مقارنة بالحديد، مع قدرته على تحمل الاستخدام
            اليومي دون مشاكل.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نقوم بتركيب{" "}
            <strong className="font-bold text-slate-900">
              غطاء منهول ألومنيوم في الكويت
            </strong>{" "}
            بعناية فائقة، مع ضبط مستوى الغطاء ليتماشى مع الأرضية المحيطة، مما
            يعطي مظهرًا جماليًا راقيًا دون التأثير على عامل الأمان أو سهولة
            الصيانة مستقبلًا.
          </p>
          <p className="mt-5 rounded-2xl bg-white p-5 text-base leading-relaxed text-slate-600 ring-1 ring-slate-900/5">
            <span aria-hidden="true">🔹</span>{" "}
            <strong className="font-bold text-slate-900">أماكن الاستخدام:</strong>
            <br />
            الفلل – الكمبوندات – المولات – المباني التجارية.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            ما الذي يميز شركتنا؟
          </h2>
          <ArticleImage
            src="/portfolio/شركة تسليك مجاري بالكويت.webp"
            alt="ما يميز شركتنا في تركيب أغطية المناهل"
          />
          <p className="text-lg leading-relaxed text-slate-600">
            تتميز شركة {BUSINESS_NAME} المتخصصة في تركيب غطاء المنهول بجميع أنواعه
            بأن لديها مجموعة من العمال المدربين على استخدام أحدث التقنيات عند
            تركيب غطاء منهول بلاستيك، ألومنيوم، أو حديد، لضمان الأمان على الأطفال
            والكبار من الوقوع في البلاعات المنتشرة في الشوارع أو المنازل أو
            الأماكن العامة.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            كما يساعد تركيب الغطاء على منع تسرب الروائح الغير مرغوب فيها وانتشار
            الحشرات في المكان، بالإضافة إلى استخدام أفضل مواد تنظيف فتحات غرف
            التفتيش، وأفضل معدات تركيب تضمن طول عمر الغطاء وثباته في مكانه بصورة
            احترافية ودقيقة.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تتميز شركتنا أيضًا بالالتزام التام في المواعيد، والأسعار التنافسية
            التي لا تقارن، بالإضافة إلى التعامل الراقي مع جميع العملاء والحرص على
            كسب ثقتهم. تقدم الشركة جميع خدمات الصرف الصحي للمنازل والشركات
            والكمبوندات وجميع الأماكن العامة، مع خصم 20% على الخدمة الثانية،
            وصيانة مجانية لمدة 6 أشهر، واستشارة فنية مجانية عند الحاجة، وخدمة
            الطوارئ على مدار اليوم.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            حلولنا وخدماتنا
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تسعى شركة {BUSINESS_NAME} لتقديم خدماتها الصحية بأعلى جودة وأفضل سعر
            مقارنة مع غيرها من الشركات، وهو ما جعلها من أفضل شركات صحية في
            المنطقة. من أهم خدماتنا:{" "}
            <strong className="font-bold text-slate-900">تركيب غطاء منهول</strong>.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            يتم تركيب غطاء المنهول بجميع أنواعه وفي أي مكانٍ كان من خلال خطوات
            ثابتة تجعل المهمة تتم في وقت قصير وبأعلى مستوى من الحرفية.
          </p>

          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="mt-10 text-xl font-extrabold text-slate-900 sm:text-2xl">
                {step.title}
              </h3>
              {step.image ? (
                <ArticleImage src={step.image} alt={step.alt ?? step.title} />
              ) : null}
              <ul className="mt-5 flex flex-col gap-3">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-base leading-relaxed text-slate-600 ring-1 ring-slate-900/5"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خبرات فريق العمل
          </h2>
          <ArticleImage
            src="/drain-cleaning/تسليك-حمامات.webp"
            alt="فنيون متخصصون في تركيب أغطية المنهول"
          />
          <p className="text-lg leading-relaxed text-slate-600">
            إذا أردت تركيب{" "}
            <b className="font-bold text-slate-900">غطاء المنهول</b> الخاص
            بمنطقتك أو منزلك أو أيًا من الأماكن العامة بالمواصفات القياسية
            الموضوعة من قِبل البلدية الكويتية، فعليك الاستعانة بخبرات فريق العمل
            الخاص بشركتنا، حيث أنهم يستطيعون تركيب{" "}
            <b className="font-bold text-slate-900">غطاء منهول ألومنيوم،</b>{" "}
            <b className="font-bold text-slate-900">وغطاء منهول بلاستيك،</b>{" "}
            <b className="font-bold text-slate-900">غطاء منهول حديد</b> كلًا حسب
            المكان المطلوب، فهم لديهم خبرة كبيرة في اختيار غطاء منهول مناسب، كما
            أنهم مستعدون لإنجاز جميع المهام في وقت قياسي، كما لديهم خبرة كبيرة في{" "}
            <b className="font-bold text-slate-900">صيانة منهول</b> متواجد في
            الشارع أو في الأماكن العامة أو فوق الأسطح، وتركيب أدوات الصرف الصحي،
            وتسليك المجاري وغيرها من المهام التي تحتاج إلى مجهود كبير والتزام.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تجارب وآراء العملاء
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            جاءت آراء العملاء عن تجاربهم لخدماتنا مرضية للغاية، حيث أشاد الكثيرين
            بمدى اهتمام الشركة بعملائها، وذلك من خلال اختيار أفضل المواد والمعدات
            عند تركيب غطاء المنهول، وعند تسليك المجاري أيضًا، بالإضافة تقديمها
            للعديد من الخدمات الأخرى مثل{" "}
            <b className="font-bold text-slate-900">تصليح غطاء منهول</b> وتصليح
            الشفاطات والسخانات، كما أنها تعتمد على أحدث التقنيات المتطورة في
            الكشف عن تسربات المياه وتنظيف المواسير والبيارات، كل ذلك على يد أمهر
            العمال والفنيين المدربين، الذين يستطيعون إنجاز جميع المهام في وقت
            قياسي بمهارة واحترافية، مع تقديم ضمان ضد عيوب التركيب أو الصناعة، كما
            أن الأسعار مناسبة للجميع.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            اطلب خدمتك الآن
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            اطلب الآن الخدمات الصحية التي ترغب بها من شركتنا أفضل شركة صرف صحي
            وتسليك مجاري في الكويت، وذلك بفضل اهتمامها بجميع التفاصيل الصغيرة عند
            تركيب غطاء منهول أو تسليك المجاري أو أي خدمة من الخدمات التي تقدمها
            لعملائها الكرام، وتحرص على تقديم الخدمات في وقت قياسي دون إحداث فوضى
            أو تكسير، والآن تواصل معنا من خلال أرقامنا، أو من خلال خدمة الواتس
            آب، واحصل على أفضل العروض والخصومات التي تقدمها شركتنا لعملائها؛
            حرصًا منها على كسب ثقتهم ورضاهم.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {searchTerms.map((term) => (
              <li
                key={term}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sky-500" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 3.4 9.82l3.64 3.64a1 1 0 0 0 1.42-1.42l-3.64-3.64A5.5 5.5 0 0 0 9 3.5Zm-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            أماكن تواجدنا
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            شركتنا العريقة لها العديد من الفروع حول الكويت، وذلك لتقديم خدماتها
            لأكبر عدد من العملاء، حيث أنها لا تقدم خدمات{" "}
            <b className="font-bold text-slate-900">تركيب غطاء منهول</b> أو{" "}
            <b className="font-bold text-slate-900">صيانة منهول</b> فحسب بل تقدم
            مجموعة من أفضل خدمات الصرف الصحي، حيث يمكنها تركيب محابس وتغيير أدوات
            الصرف الصحي بجميع أنواعها بغيرها من الأنواع الأصلية، كما تقدم خدمة
            تسليك المجاري ومواسير الصرف وتنظيفها، وأيضًا تصليح سخانات وشفاطات،
            وتنظيف البلاعات، تمديد بايبات وتركيب رداد مجاري وغيرها من الخدمات
            الصحية باحترافية شديدة.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تواصل مع أقرب فرع للاستفادة من خدماتنا المميزة.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li
                key={area.slug}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700"
              >
                {area.name}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>
            <Link href="/basement-pump-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              تركيب مكينة سرداب
            </Link>
            <Link href="/contact-us" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن تركيب المناهل
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-base font-bold text-slate-900 marker:content-none sm:px-6 sm:text-lg">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-transform duration-300 group-open:rotate-180">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-base leading-relaxed text-slate-600 sm:px-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              تحتاج تركيب أو صيانة منهول؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن لتركيب منهول احترافي بأسعار مناسبة وضمان على الخدمة.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="اتصل الآن"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
              >
                {PHONE_DISPLAY} | اتصل الآن
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
