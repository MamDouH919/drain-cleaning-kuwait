import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/drain-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/portfolio/تسليك-مجاري.webp";
const COVER_ALT = "تسليك مجاري الكويت بدون تكسير";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تسليك مجاري الكويت | أحسن تسليك مجاري بالكويت بدون تكسير",
  description:
    "تسليك مجاري الكويت وأحسن تسليك مجاري بالكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وحل الانسدادات بأحدث الأجهزة وسرعة استجابة في جميع مناطق الكويت مع ضمان وأسعار مناسبة.",
  keywords: [
    "تسليك مجاري الكويت",
    "أحسن تسليك مجاري بالكويت",
    "فتح مجاري الكويت",
    "تسليك مجاري بدون تكسير",
    "تسليك مجاري المطابخ",
    "تسليك مجاري الحمامات",
    "شركة تسليك مجاري الكويت",
    "drain cleaning Kuwait",
  ],
  alternates: {
    canonical: PAGE_PATH,
    languages: { "ar-KW": PAGE_PATH },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    title: "تسليك مجاري الكويت بدون تكسير 24 ساعة",
    description:
      "فتح المجاري وحل الانسدادات بدون تكسير بأحدث الأجهزة وخدمة طوارئ 24 ساعة في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري الكويت بدون تكسير 24 ساعة",
    description:
      "فتح المجاري وحل الانسدادات بدون تكسير بأحدث الأجهزة وخدمة طوارئ 24 ساعة في جميع مناطق الكويت.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "تسليك مجاري المطابخ",
  "تسليك مجاري الحمامات",
  "فتح المجاري الرئيسية",
  "تسليك مجاري بدون تكسير",
  "خدمة طوارئ 24 ساعة",
];

const whyUs = [
  { title: "خبرة طويلة", desc: "سنوات من العمل الميداني في تسليك المجاري بالكويت." },
  { title: "سرعة استجابة", desc: "نصل إليك خلال وقت قصير في أي منطقة." },
  { title: "بدون تكسير", desc: "أجهزة حديثة تحل الانسداد دون إتلاف المكان." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية." },
  { title: "خدمة 24 ساعة", desc: "متواجدون ليلاً ونهاراً طوال أيام الأسبوع." },
];

const steps = [
  { title: "استقبال الطلب", desc: "تواصل معنا عبر الاتصال أو واتساب على مدار الساعة." },
  { title: "الوصول للموقع", desc: "يصل فريقنا إليك بأسرع وقت داخل الكويت." },
  { title: "فحص المشكلة", desc: "نحدد سبب الانسداد ومكانه بدقة قبل البدء." },
  { title: "حل الانسداد", desc: "نعالج المشكلة بأحدث الأجهزة وبدون تكسير." },
  { title: "اختبار الخدمة", desc: "نتأكد من انسياب الصرف تماماً قبل المغادرة." },
];

const manualMethods = [
  {
    title: "الثعبان اليدوي",
    desc: "قد تستخدم الشركة ثعبان تسليك أو السوستة لإزالة الانسدادات يدوياً من البالوعة، ويتضمن ذلك إدخال كابل مرن طويل في البالوعة وتدويره لتفكيك السدادة وإزالتها.",
  },
  {
    title: "مايكنة ضغط الماء",
    desc: "تتضمن هذه الطريقة استخدام الماء عالي الضغط لطرد الحطام والشحوم وغيرها من العوائق من الصرف عبر فوهة متخصصة تقوم برش الماء في جميع الاتجاهات مما يؤدي إلى تسليك البالوعة بشكل فعال.",
  },
  {
    title: "التدوير اليدوي",
    desc: "تتضمن هذه الطريقة دفع قضيب مرن يدوياً عبر البالوعة لإزالة الانسدادات، ويمكن إدخاله في المواسير لتنظيفها وإزالة الانسدادات.",
  },
  {
    title: "تنظيف الصرف",
    desc: "قد تستخدم الشركة فرشاً أو أجهزة غسيل متخصصة لتسليك الجزء الداخلي من أنابيب الصرف يدوياً وإزالة أي حطام متراكم أو شحوم أو عوائق أخرى.",
  },
  {
    title: "فحص الصرف",
    desc: "قبل وبعد عملية التسليك قد تستخدم الشركة كاميرات التسليك أو أدوات الفحص لفحص أنابيب الصرف بصرياً، مما يساعد في تحديد أي مشكلات رئيسية ومدى الانسداد والتأكد من إزالة التسليك بالكامل.",
  },
];

const features2 = [
  "نحن نقدم أسعار منخفضة ونتائج ممتازة في وقت قياسي.",
  "لدينا أفضل أنواع الشاحنات المتخصصة في شفط المياه داخل البواليع",
  "نعتمد على المركبات المخصصة لنقل المعدات ونقوم بالعمل في جميع مناطق الدولة لمعالجة انسدادات المجاري",
  "لدينا شهادات تضمن لك متابعة مجانية للمكان حتى لا تتعرض لمشكلة انسداد البواليع مرة أخرى",
  "يمكننا تعقيم وتطهير المكان ورش المبيدات الحشرية داخل البالوعة قبل إغلاقها للقضاء على الفيروسات والجراثيم والحشرات",
  "نحن نوفر فنيين محترفين مدربين على استخدام المعدات المتطورة والتقنيات الحديثة للوصول إلى الانسدادات والتخلص منها",
  "ننضم إلى الفرق الباكستانية والفلبينية التي يرغب جميع العملاء في الحصول على خدماتها",
  "نقوم بتحديد مواقع وأحجام الإنسدادات خلال دقائق معدودة شركة تسليك بواليع الكويت",
  "لا نعرض المكان للتشقق ونكشف عن أماكن التسرب وأسباب انسداد المجاري",
];

const reasons = [
  "لدينا فريق من المهنيين ذوي المهارات العالية والخبرة الذين هم خبراء في تسليك المجاري وهي مجهزة بأحدث الأدوات والمعدات لحل أي مشكلة تسليك مجاري بشكل فعال كما",
  "نعطي الأولوية لرضا العملاء ونسعى جاهدين لتقديم خدمات من الدرجة الأولى نحن نتفهم الإزعاج والمتاعب التي تسببها المصارف المحظورة لذلك نعمل بكفاءة لمعالجة المشكلة على الفور وضمان حل سريع",
  "نحن نفخر على خدمة العملاء الممتازة موظفينا ودية والمهنية ودائما على استعداد لمساعدة العملاء مع مخاوف الصرف الصحي نستمع إلى احتياجات عملائنا وتقديم حلول مخصصة وفقا لذلك",
  "من المعروف شركتنا لموثوقيتها والجدارة بالثقة نحن نؤمن بالشفافية والصدق ويمكن لعملائنا الاعتماد علينا لتقديم تقييمات دقيقة وأسعار عادلة",
  "نحن نسعى باستمرار للابتكار والتحسين في خدماتنا نبقى على اطلاع بأحدث اتجاهات وتقنيات الصناعة لتقديم الحلول الأكثر كفاءة وفعالية",
  "نحن أفضل شركة تسليك مجاري الكويت بسبب فريقنا الماهر والالتزام برضا العملاء وخدمة العملاء الممتازة والموثوقية والتحسين المستمر",
];

const areas = [
  { name: "حولي", slug: "hawalli" },
  { name: "السالمية", slug: "salmiya" },
  { name: "الفروانية", slug: "farwaniya" },
  { name: "الجهراء", slug: "jahra" },
  { name: "الأحمدي", slug: "ahmadi" },
  { name: "مبارك الكبير", slug: "mubarak-kabeer" },
];

const faqs = [
  {
    question: "كم سعر تسليك المجاري في الكويت؟",
    answer:
      "يختلف السعر حسب حالة الانسداد ومكانه، لكن نوفر أسعار مناسبة وتقييم واضح قبل بدء العمل بدون رسوم خفية.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بفتح المجاري وحل الانسدادات بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "هل تقدمون خدمة طوارئ 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك مجاري الكويت على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة.",
  },
  {
    question: "كم يستغرق وقت تسليك المجاري؟",
    answer:
      "غالباً يتم حل المشكلة خلال 30 إلى 60 دقيقة حسب حالة الانسداد ومكانه.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.",
  },
  {
    question: "هل خدمة تسليك المجاري تشمل المطابخ والحمامات؟",
    answer:
      "نعم، نقدم تسليك مجاري المطابخ والحمامات وفتح المجاري الرئيسية للمنازل والفلل والشركات.",
  },
  {
    question: "لماذا تعتبرون أحسن تسليك مجاري بالكويت؟",
    answer:
      "لأننا نجمع بين الخبرة الطويلة وأحدث الأجهزة وأسلوب العمل الاحترافي مع أسعار واضحة وضمان على الخدمة وسرعة استجابة على مدار 24 ساعة في جميع مناطق الكويت.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تسليك مجاري الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "خدمة تسليك مجاري الكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وحل الانسدادات بأحدث الأجهزة.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات تسليك المجاري",
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
        { "@type": "ListItem", position: 2, name: "تسليك مجاري الكويت", item: PAGE_URL },
      ],
    },
  ],
};

const searchTerms = [
  "تسليك مجاري الكويت",
  "أحسن تسليك مجاري بالكويت",
  "شركة تسليك مجاري الكويت",
  "أفضل تسليك مجاري الكويت",
  "أسعار تسليك مجاري الكويت",
  "تسليك مجاري بدون تكسير",
  "فتح مجاري الكويت",
  "أرقام تسليك مجاري الكويت",
];

export default function DrainCleaningKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
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
            خدمة 24 ساعة في محافاظات الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            تسليك مجاري الكويت 98890031
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            أفضل شركة <strong>تسليك مجاري</strong> و <strong>تنظيف بيارات</strong> و <strong>تسليك غرف تفتيش</strong> و <strong>تنظيف البواليع</strong> بأرخص سعر في الكويت
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
              height={900}
              preload
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك مجاري الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تعد شركة تسليك مجاري الكويت هي من اعرق الشركات على مستوى الكويت التي تستخدم افضل الادوات والمعدات في اعمال تسليك المجاري وتنظيف الصرف الصحي والتخلص من جميع مشاكل الانسدادات بواسطة فنيين تسليك مجاري متخصصين في اعمال تسليك المجاري وتفتيت جميع انواع الدهون والرواسب المتراكمة باستخدام ادواتنا الحديثة وفنيين متخصصين لهم خبرة في مجال تسليك المجاري منذ اكثر من 15 عاما فخدمات تسليك المجاري في الكويت
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            التي تبحث عنها سوف تجدها لدينا واكثر عن طريق التواصل معنا عبر رقم شركة تسليك مجاري الكويت فنظرا لان مشكلة انسداد المجاري تتطلب خبرة للتعامل معها فهي تعد من المشاكل التي تظهر فجأة بدون اي انذار وتسبب الكثير من المشاكل مثل الرائحة وانتشار الحشرات وتسرب المياه الغير نظيفة فالحل هذه المشاكل واكثر ننصح بالتواصل معنا والحصول على استشارة لمعرفة الحلول المتاحة لك حاليا فما عليك سواء تقوم بالاتصال بنا لطلب الخدمة
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك مجاري
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            اذا كنت تريد ان تحصل على خدمات تسليك المجاري الكويت باقل الاسعار وبأعلى جودة داخل دولة الكويت ما عليك سواء تقوم بالاتصال بنا لأننا شركة متخصصة في اعمال تسليك المجاري في دولة الكويت فخدماتنا تتكلم عن نفسها لأننا من افضل 10 شركات تسليك مجاري داخل دولة الكويت بشهادة العملاء الذين تعملوا معنا لأننا من الشركات التي تقدم احدث المعدات والادوات وايضا نوفر خدمات شفط البيارات بواسطة تنكر تسليك مجاري
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            خدماتنا هي من الخدمات الاحترافية التي لن تجد مثلها ولن تخطر على بالك على الاطلاق فبحث عن موقعنا تسليك مجاري الكويت على جوجل فنحن معروفون ولنا خبرة كبيرة في هذا المجال ولدينا فنيين متخصصين وما يميزنا عن غيرنا من الشركات هو اننا نقدم قيمة مقابل سعر فقيمة خدماتنا عالية مقابل سعر مناسب عزيزي العميل حيث ان سعرنا الافضل داخل الكويت
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            فني تسليك مجاري
          </h2>
          <figure className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/portfolio/تسليك.webp"
                alt="فني تسليك مجاري"
                width={600}
                height={450}
                sizes="(max-width: 600px) 100vw, 600px"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              فني تسليك مجاري
            </figcaption>
          </figure>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نحن نوفر لكم فني تسليك مجاري متخصص يعمل على تسليك المجاري باستخدام احدث التقنيات والمواد المخصصة لأعمال تسليك المجاري يحل لك جميع المشاكل الصعبة فيما يخص مجاله حيث ان الافضل من ناحية الجودة والكفاءة والخبرة فهم متخصص في اعمال تسليك البواليع وتسليك مجاري المطبخ وتسليك مجاري الحمام فان تسليك مجاري المطبخ يحتاج الى فني شاطر فان يقوم بإزالة الشعر المتساقط في المواسير او التراكمات الدهنية في مواسير المطبخ
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            وغيرها من التراكمات التي تتواجد في المواسير التي تسبب انسدادها فنحن نعمل باستخدام افضل المواد التي تقوم بحل المشكلة نهائيا مثل تسليك المجاري باستخدام
            <a href="https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%B6" target="_blank" rel="nofollow noopener" className="text-blue-500"> الحمض الاسيد </a>
            وتسليك المجاري باستخدام الضغط سواء ضغط الماء او ضغط الهواء وايضا تقوم بتسليك المجاري باستخدام السوستة او ثعبان المجاري فماذا تنتظر تواصل معنا الان لطلب الخدمة
          </p>
        </div>
      </section>

      {/* <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            أهمية تسليك المجاري في الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تُعد مشاكل انسداد المجاري من أكثر المشاكل المنزلية إلحاحاً في الكويت،
            فهي قد تتحول خلال دقائق إلى حالة طوارئ تهدد نظافة المنزل وسلامة
            الصرف الصحي. تأخير معالجة الانسداد يؤدي إلى تجمع المياه والروائح
            الكريهة وربما تلف الأرضيات والجدران. لذلك نوفر خدمة تسليك مجاري
            الكويت على مدار 24 ساعة طوال أيام الأسبوع، لنكون بجانبك في الحالات
            الطارئة وفي أي وقت تحتاج فيه إلى تدخل سريع. يعتمد فريقنا على أحدث
            الأجهزة والمعدات التي تتيح فتح المجاري وحل الانسدادات بدون تكسير أو
            إتلاف للأرضيات، مما يوفر عليك تكاليف الترميم. ومع سرعة الاستجابة
            والوصول إلى موقعك في جميع مناطق الكويت، نضمن لك حلاً جذرياً للمشكلة
            مع اختبار كامل للتأكد من انسياب الصرف قبل المغادرة. نحرص على تقديم
            خدمة احترافية تجمع بين الجودة والسرعة والأسعار المناسبة، لأن راحتك
            وثقتك هي أولويتنا.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-14 sm:px-8 lg:pb-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            أحسن تسليك مجاري بالكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نعمل على أن نكون أحسن تسليك مجاري بالكويت من خلال الجمع بين الخبرة
            الطويلة والأجهزة الحديثة وأسلوب العمل الاحترافي. فريقنا مدرب على
            التعامل مع كل أنواع الانسدادات، سواء في المطابخ أو الحمامات أو
            المجاري الرئيسية للمنازل والفلل والشركات، ويستخدم أحدث المعدات التي
            تفتح المجاري وتحل الانسدادات بدون تكسير أو إتلاف. ولأننا نسعى لتقديم
            أحسن تسليك مجاري بالكويت، نلتزم بالشفافية في الأسعار والوصول السريع
            إليك في أي منطقة، مع ضمان على الخدمة واختبار كامل لانسياب الصرف قبل
            المغادرة.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "خبرة ميدانية في تسليك مجاري الكويت لسنوات طويلة",
              "أجهزة حديثة تفتح الانسداد بدون تكسير",
              "أسعار واضحة ومناسبة بدون رسوم خفية",
              "ضمان على الخدمة وسرعة استجابة 24 ساعة",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-slate-900/5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            شركة تسليك مجاري
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            شركة تسليك مجاري الكويت هي المقدم الاول لخدمات تسليك المجاري في الكويت مع النمو السكاني السريع والتنمية الحضرية تعد أنظمة المجاري الفعالة ضرورية للحفاظ على معايير النظافة والنظافة تلعب هذه الشركة دورا في ضمان التدفق السلس لمياه المجاري من المناطق السكنية والتجارية والصناعية تشمل إحدى خدماتهم المتخصصة تسليك صرف المطبخ وهو أمر مهم بشكل خاص لأن المطبخ منطقة رئيسية معرضة للانسداد والانسداد توظف الشركة محترفين ذوي خبرة ومجهزين بأدوات وتقنيات متقدمة لتنظيف وصيانة خطوط المجاري بأمان وفعالية مما يضمن حسن سير نظام المجاري
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            بالإضافة إلى تسليك مجاري المطبخ تركز شركة تتسليك مجاري الكويت أيضا على تنظيف بالوعات الكويت البيارات هو المصطلح العربي لمحطات معالجة مياه المجاري حيث يتم جمع مياه المجاري ومعالجتها للتخلص منها بشكل آمن أو إعادة استخدامها يعد تنظيف وصيانة محطات المعالجة هذه أمرًا بالغ الأهمية لحماية البيئة ومنع تلوث مصادر المياه تتبع شركة تسليك مجاري الكويت إرشادات وبروتوكولات صارمة لضمان عمل آبار المياه في الكويت بكفاءة وبما يتوافق مع اللوائح البيئية
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            ماهي خدمات تسليك مجاري التي نقدمها ؟
          </h2>
          <h3 className="text-xl mt-5 font-extrabold text-slate-900 sm:text-2xl">
            1- تسليك مجاري بالضغط
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تعتبر خدمات تسليك الضغط التي تقدمها شركة تسليك مجاري الكويت ضرورية للحفاظ على نظام سباكة صحي وعملي عندما يتعلق الأمر بفك انسداد المصارف والأنابيب فإن التعاقد مع شركة متخصصة تقدم خدمات تسليك عالية الضغط أمر بالغ الأهمية تستخدم هذه الشركات معدات وتقنيات متطورة لمعالجة حتى أكثر العوائق عنادا بشكل فعال تتضمن خدمات تسليك المجاري بالضغط العالي استخدام آلات قوية تولد ضغط الماء لطرد وطرد الحطام والشحوم ومواد الانسداد الأخرى من نظام تسليك المجاري هذه الطريقة فعالة للغاية في إزالة العوائق مثل جذور الأشجار والمقاييس والرواسب التي يمكن أن تتراكم بمرور الوقت وتسبب انسدادا شديدا
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تتمثل إحدى المزايا الرئيسية لخدمات تسليك المجاري بالضغط العالي في قدرتها على الوصول إلى قباقيب عميقة الجذور لا تستطيع الطرق التقليدية الوصول إليها يمكن لطائرة المياه بالضغط العالي اختراق حتى أضيق الأنابيب وإزاحة أي نفايات متراكمة واستعادة التدفق المناسب للمياه بالإضافة إلى ذلك فإن هذه التقنية غير جراحية ولا تتطلب أي حفر أو حفر مما يجعلها حلا فعالا من حيث التكلفة وموفرا للوقت
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            فائدة أخرى لخدمات تسليك المجاري بالضغط العالي هي قدرتها على تسليك الأنابيب تماما لا يزيل نفاث الماء عالي الضغط الانسداد فحسب بل يزيل أيضا أي تراكم للأوساخ والأوساخ والبكتيريا وهذا يساعد على تحسين النظافة العامة ومنع السدادات في المستقبل وضمان نظام السباكة طويلة الأمد وفعالة تعد خدمات تسليك المجاري بالضغط العالي حلا ضروريا لإزالة انسداد المصارف والحفاظ على نظام سباكة صحي تستخدم هذه شركات تسليك مجاري الكويت المتخصصة تقنيات ومعدات متقدمة لإزالة العوائق وتسليك الأنابيب بشكل فعال وضمان تدفق المياه بشكل صحيح ومنع مشاكل السباكة في المستقبل
          </p>
          <h3 className="text-xl mt-5 font-extrabold text-slate-900 sm:text-2xl">
            2- تسليك مجاري بالاسيد
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تقدم شركة تسليك مجاري الكويت متخصصة خدمات تسليك الاسيد بهدف حل المشكلات المتعلقة بانسداد المصارف بشكل فعال تستخدم هذه الخدمات المحاليل الحمضية لإذابة المواد العنيدة بما في ذلك الشحوم والشعر والحطام التي تتراكم داخل الأنابيب وتسبب انسدادا تتضمن عملية إزالة التسليك الحمضي صب <a href="https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%B6" target="_blank" rel="nofollow noopener" className="text-blue-500">حمض الاسيد</a> مباشرة في البالوعة المصابة مما يسمح لها بتحطيم الانسداد وتسليك الممر هذه الطريقة فعالة للغاية لأنها تلغي الحاجة إلى التدخل اليدوي أو الأدوات الميكانيكية التقليدية
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            كما توفر خدمات تطهير الصرف الحمضي حلا طويل الأمد مما يمنع السدادات المستقبلية ويحافظ على التدفق المناسب لمياه الصرف الصحي يتم تدريب المهنيين المهرة في الشركة على التعامل مع المنتجات القائمة على الاسيد بأمان مما يضمن التسليك الفعال والآمن للمصارف دون التسبب في أي ضرر لنظام السباكة بشكل عام من خلال اختيار خدمات إزالة التسليك الحمضي من شركة متخصصة يمكن للعملاء الاستمتاع بحل خال من المتاعب وموثوق لمشاكل انسداد التسليك
          </p>
          <h3 className="text-xl mt-5 font-extrabold text-slate-900 sm:text-2xl">
            3- تسليك مجاري بالطريقة اليدوية
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            فيما يلي بعض طرق تسليك الصرف اليدوي التي قد تقدمها شركة تسليك مجاري الكويت:
          </p>
          <ul className="mt-6 space-y-4">
            {manualMethods.map((method) => (
              <li
                key={method.title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm ring-1 ring-slate-900/5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">{method.title}</h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {method.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            من المهم ملاحظة أن هذه الطرق قد تختلف اعتمادا على الممارسات المحددة التي تقدمها شركة تسليك مجاري الكويت
          </p>
          <h3 className="text-xl mt-5 font-extrabold text-slate-900 sm:text-2xl">
            4- تسليك بواليع الحمام والمطبخ
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">عندما تحتاج إلى شركة تسليك بواليع بأسعار مناسبة يمكنك الاعتماد على شركتنا&nbsp;<a href="https://taslikmajarikuwait.com/drain-cleaning-abdullah-mubarak" target="_blank" rel="noopener" className="text-blue-500">
            تسليك مجاري عبدالله مبارك</a>&nbsp;التي تعتبر من أرخص الشركات المتخصصة في أعمال تسليك بواليع وخزانات المجاري وذلك لأنها شركة تسليك مجاري الكويت معروفة وتحرص على تقديم الخصومات المناسبة لجميع العملاء توفر العروض المستمرة والصالحة طوال العام يتم تقديم أسعار تنافسية وخصومات عالية للعملاء القدامى والجدد
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            هناك العديد من المزايا التي تبحث عنها ستجدها في شركتنا تسليك بواليع المتميزة ومن أبرز هذه المزايا:
          </p>
          <ul className="mt-6 space-y-4">
            {features2.map((method, i) => (
              <li
                key={i}
                className="list-disc pl-5 marker:text-indigo-500 marker:text-xl"
              >
                <p className="leading-relaxed text-slate-600 pr-1">
                  {method}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            شركة تسليك مجاري بالكويت
          </h2>
          <figure className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/portfolio/شركة تسليك مجاري بالكويت.webp"
                alt="شركة تسليك مجاري بالكويت"
                width={600}
                height={450}
                sizes="(max-width: 600px) 100vw, 600px"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              شركة تسليك مجاري بالكويت
            </figcaption>
          </figure>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تقدم شركة تسليك مجاري بالكويت خدمات شاملة بما في ذلك فحص وإصلاح وصيانة خطوط المجاري ومحطات ضخ المجاري يستخدمون التكنولوجيا المتقدمة مثل كاميرات الدوائر التلفزيونية المغلقة لتحديد أي مشاكل أو انسدادات محتملة داخل نظام المجاري يساعد هذا النهج الاستباقي على منع حدوث اضطرابات كبيرة ويضمن التشغيل السلس لنظام المجاري وبشكل عام فإن الخدمات التي تقدمها شركة تسليك مجاري هي جزء لا يتجزأ من أعمال المجاري والنظافة العامة في المدينة إن خبرتهم وتفانيهم في الحفاظ على نظام مجاري فعال يساهم في رفاهية ونوعية الحياة للمقيمين والشركات في الكويت
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">ويتميز بالعديد من الخصائص التي لم تجدها في شركات&nbsp;
            <a href="https://www.taslikmajarikuwait.com/drain-cleaning-hawalli" target="_blank" rel="noopener" className="text-blue-500">تسليك مجاري حولي</a>
            &nbsp;الأخرى مثل سرعته في إزالة الانسدادات التي تعاني منها المجاري والتعرض لأحواض المجاري وشفط جميع الرواسب الموجودة داخل المجاري واستخدام المعدات والأدوات والمواد الحديثة القادرة على تفتيت الكتل الصلبة حيث أنها شركة تهتم باستخدام الأساليب الحديثة وتقديم الخدمات بأسعار تنافسية وتسهل على العملاء الحصول على الخدمات من خلال الاتصال بأرقامهم وحجز الخدمات خلال وقت قياسي
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            لماذا نحن أفضل شركة تسليك مجاري بالكويت ؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نحن أفضل شركة تسليك مجاري الكويت لعدة أسباب :
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            بالإضافة إلى تسليك مجاري المطبخ تركز شركة تتسليك مجاري الكويت أيضا على تنظيف بالوعات الكويت البيارات هو المصطلح العربي لمحطات معالجة مياه المجاري حيث يتم جمع مياه المجاري ومعالجتها للتخلص منها بشكل آمن أو إعادة استخدامها يعد تنظيف وصيانة محطات المعالجة هذه أمرًا بالغ الأهمية لحماية البيئة ومنع تلوث مصادر المياه تتبع شركة تسليك مجاري الكويت إرشادات وبروتوكولات صارمة لضمان عمل آبار المياه في الكويت بكفاءة وبما يتوافق مع اللوائح البيئية
          </p>
          <ul className="mt-6 space-y-4">
            {reasons.map((method, i) => (
              <li
                key={i}
                className="list-disc pl-5 marker:text-indigo-500 marker:text-xl"
              >
                <p className="leading-relaxed text-slate-600 pr-1">
                  {method}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            خدمات&nbsp;<a href="https://www.taslikmajarikuwait.com/drain-cleaning-adan" target="_blank" rel="noopener" className="text-blue-500">تسليك مجاري العدان</a>&nbsp;استثنائية فحسب بل تقدم أيضا خيارات أسعار تنافسية إنهم يسعون جاهدين لتقديم خدمات عالية الجودة بأسعار معقولة مما يضمن رضا العملاء في كل خطوة على الطريق ولا تدع انسداد الصرف يعطل روتينك اليومي استفد من خيارات الاتصال المريحة التي توفرها تسليك مجاري الكويت واجعل المجاري تتدفق بسلاسة مرة أخرى اتصل بهم اليوم عبر الهاتف أو واتساب لتجربة خدمات تسليك مجاري باحدث الطرق
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            رقم فني تسليك مجاري
          </h2>
          <figure className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/portfolio/رقم فني تسليك مجاري.webp"
                alt="رقم فني تسليك مجاري"
                width={600}
                height={450}
                sizes="(max-width: 600px) 100vw, 600px"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              رقم فني تسليك مجاري
            </figcaption>
          </figure>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تواجه مشكلة انسداد المجاري فعليك بالاتصال بشركة تسليك مجاري بالكويت المهنية أمر بالغ الأهمية إحدى الشركات الموصى بها بشدة هي تسليم مجاري الكويت المتخصصة في خدمات تسليك مجاري مع مجرد مكالمة هاتفية سريعة أو رسالة واتس اب يمكنك بسهولة طلب خدماتها عند الاتصال برقم فني تسليك مجاري الكويت بهذه الشركة ذات السمعة الطيبة سيقوم ممثل خدمة العملاء الودود والمعرفة بإرشادك خلال العملية يمكنك مناقشة تفاصيل مشكلة التسليك مجاري المسدودة وتزويدهم بالمعلومات ذات الصلة مثل موقعك وأي مخاوف إضافية قد تكون لديك
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            ستقوم شركة&nbsp;<a href="https://www.taslikmajarikuwait.com/drain-cleaning-jahra" target="_blank" rel="noopener" className="text-blue-500">تسليك مجاري الجهراء</a>&nbsp;بعد ذلك بجدولة موعد مناسب مع أحد الفنيين ذوي الخبرة تم تجهيز هؤلاء المهنيين بأحدث الأدوات والمعدات مما يمكنهم من تحديد وحل أنواع مختلفة من قباقيب الصرف بكفاءة لديهم معرفة واسعة بأفضل الطرق لاستخدامها من أجل معالجة العوائق المختلفة مما يضمن حلا طويل الأمد
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            كيفية التواصل مع شركة تسليك مجاري :
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            التواصل معنا هو من أسهل ما يكون حيث اننا نوفر طرق عديدة للتواصل مع شركة تسليك مجاري الكويت حيث أنك إذا كنت ترغب في الحصول على خدمات تسليك المجاري التي نقدمها فنحن نقوم بتقديم العديد والعديد من خدمات تسليك المجاري داخل دولة الكويت حيث ان خدماتنا هي خدمات استثنائية للغاية نظرا لأننا نقوم بالتواصل مع أفضل فنيين تسليك المجاري داخل الكويت حيث ان الاتقان هو ما يميزنا فان كنت ترغب في التواصل معنا فان أفضل خيار لك هو الاتصال المباشر على رقم شركة تسليك مجاري الكويت او التواصل معنا عن طريق الواتساب او صفحة <a href="https://www.taslikmajarikuwait.com/contact-us" className="text-blue-500">اتصل بنا</a> المتواجدة علي موقعنا
          </p>
        </div>
      </section>
      {/* 
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            لماذا تختارنا لتسليك المجاري؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خطوات تسليك المجاري
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-sky-600 to-emerald-600 text-base font-extrabold text-white shadow-md">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك مجاري الكويت — خدمة موثوقة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن تسليك مجاري الكويت بسرعة وبدون تكسير، فنحن نوفر خدمة
            فتح انسدادات احترافية على مدار 24 ساعة بأسعار مناسبة. اتصل بنا أو
            راسلنا واتساب ونصل إليك في أي منطقة بالكويت بأسرع وقت. اختيارك لنا هو
            اختيار أحسن تسليك مجاري بالكويت من حيث الجودة والسرعة والسعر والضمان.
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
            تسليك مجاري في جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت بخدمة تسليك مجاري سريعة في حولي
            والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير وجميع المناطق
            الأخرى.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  تسليك مجاري {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-slate-600">
            نقدم أيضاً خدمة{" "}
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>{" "}
            المائي والحراري لحماية مبناك على المدى الطويل.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن تسليك المجاري
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5"
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
      </section> */}

      {/* <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              نصل إليك خلال 30 دقيقة داخل الكويت
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن واحصل على خدمة تسليك مجاري احترافية وسريعة بأسعار
              مناسبة.
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
      </section> */}
    </main>
  );
}
