import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  areas,
} from "@/lib/areas";
import { BUSINESS_ID } from "@/lib/schema";
import { coreServices, priceLinks } from "@/lib/services";

import Breadcrumbs from "@/components/Breadcrumbs";
import Faq, { type FaqItem } from "@/components/Faq";

const PAGE_PATH = "/drain-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_LABEL = "تسليك مجاري الكويت";
const TITLE = "تسليك مجاري الكويت بدون تكسير 24 ساعة | دار الصيانة الكويتية";
const DESCRIPTION =
  "تسليك مجاري الكويت بدون تكسير على مدار 24 ساعة: فتح انسداد المطابخ والحمامات والخط الرئيسي بالسوستة وضغط المياه والكاميرا، مع سعر واضح قبل البدء. اتصل 98890031";
const COVER_IMAGE = "/drain-cleaning/تسليك-بلوعات.webp";
const COVER_ALT = "فني يفتح انسداد غرفة تفتيش في أحد شوارع الكويت بخرطوم ضغط المياه";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // `absolute` يتجاوز قالب العنوان في الـ layout لأن العنوان يحمل اسم النشاط أصلًا.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
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
    title: TITLE,
    description: DESCRIPTION,
    siteName: "دار الصيانة الكويتية",
    images: [{ url: COVER_IMAGE, width: 1080, height: 1080, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [COVER_IMAGE],
  },
};

const signs = [
  {
    title: "بطء تصريف المياه",
    desc: "يبقى الماء في الحوض أو البانيو مدة أطول من المعتاد، وهي أولى علامات تضيّق الماسورة قبل أن ينسد المجرى تمامًا.",
  },
  {
    title: "ارتجاع المياه",
    desc: "ظهور الماء في بلاعة الأرضية عند تشغيل الغسالة، أو ارتفاع منسوبه في المرحاض، يشير غالبًا إلى انسداد في الخط الرئيسي لا في نقطة واحدة.",
  },
  {
    title: "روائح كريهة مستمرة",
    desc: "روائح تخرج من البلاعات ولا تزول بالتنظيف السطحي، لأن مصدرها فضلات متراكمة داخل المواسير نفسها.",
  },
  {
    title: "صوت غرغرة",
    desc: "صوت فقاعات عند تصريف الماء يعني أن الهواء محتبس خلف انسداد جزئي، وهي علامة مبكرة تستحق الانتباه.",
  },
  {
    title: "طفح المجاري",
    desc: "خروج مياه الصرف من البلاعات أو المناهل إلى الأرضية أو الساحة حالة طارئة تحتاج إلى فني فورًا.",
  },
];

const causes = [
  {
    cause: "الدهون والزيوت",
    detail:
      "تُسكب ساخنة وسائلة، ثم تبرد وتلتصق بجدران الماسورة وتحتجز بقايا الطعام معها، وهي السبب الأول لانسداد مجاري المطابخ.",
  },
  {
    cause: "بقايا الطعام",
    detail: "فتات الأرز والخبز وقشور الخضار تتراكم في مصفاة الحوض وداخل الماسورة وتنتفخ بالماء.",
  },
  {
    cause: "الشعر وبقايا الصابون",
    detail: "يتشابك الشعر مع الصابون في بلاعات الحمامات ويكوّن كتلًا تمنع التصريف.",
  },
  {
    cause: "المناديل والمخلفات",
    detail:
      "المناديل المبللة والحفاضات وأعواد التنظيف لا تتحلل في الماء، فتسبب انسدادًا سريعًا وعميقًا في الخط الرئيسي.",
  },
  {
    cause: "الرمال والأتربة",
    detail:
      "بسبب مناخ الكويت والعواصف الترابية تدخل الرمال إلى بلاعات الساحات والمواقف وتترسب في قاع المجرى.",
  },
  {
    cause: "الترسبات الجيرية",
    detail: "تترك المياه ترسبات على جدران المواسير القديمة تقلّل قطرها الداخلي وتزيد تكرار الانسداد.",
  },
  {
    cause: "المواسير القديمة وأخطاء التركيب",
    detail:
      "الماسورة المتآكلة أو ذات الميل الخاطئ أو الوصلة غير المحكمة تحتجز الفضلات وتسبب انسدادًا يتكرر رغم التسليك.",
  },
];

const methods = [
  {
    title: "السوستة اليدوية",
    desc: "سلك مرن يُدفع داخل الماسورة ويُدار يدويًا ليفتّت الانسداد أو يسحبه للخارج. تناسب انسداد الأحواض والبلاعات والمراحيض حين يكون قريبًا من فتحة الصرف، وهي أسرع الطرق وأقلها تكلفة.",
  },
  {
    title: "ماكينة التسليك الكهربائية",
    desc: "سلك دوّار يعمل بمحرك ويصل إلى مسافات أبعد داخل الشبكة، فيخترق الانسدادات الصلبة والترسبات المتراكمة التي لا تصل إليها السوستة اليدوية، خاصة في الخط الرئيسي.",
  },
  {
    title: "ضغط المياه (الجت)",
    desc: "ماكينة تضخ الماء بضغط عالٍ عبر فوهة خاصة تغسل جدران الماسورة بالكامل، فتزيل الدهون والرمال والترسبات وتعيد للماسورة قطرها الداخلي. هي الأنسب للخط الرئيسي وللانسداد الذي يتكرر بعد التسليك بالسلك.",
  },
  {
    title: "الفحص بالكاميرا",
    desc: "كاميرا صغيرة تدخل الماسورة وتعرض على الشاشة مكان الانسداد وسببه وحالة المواسير، فيُختار العلاج المناسب دون تكسير استكشافي. نلجأ إليها عند تكرار الانسداد أو صعوبة تحديد مكانه.",
  },
];

const comparison = [
  { method: "السوستة اليدوية", best: "انسداد قريب وبسيط", breaking: "لا", speed: "سريعة جدًا" },
  { method: "ماكينة التسليك", best: "انسداد صلب أو بعيد", breaking: "لا", speed: "متوسطة" },
  { method: "ضغط المياه (الجت)", best: "دهون وترسبات والخط الرئيسي", breaking: "لا", speed: "متوسطة" },
  { method: "الفحص بالكاميرا", best: "تشخيص وتحديد المكان", breaking: "لا", speed: "سريعة" },
];

const steps = [
  { title: "استقبال الطلب", desc: "تتصل بنا أو تراسلنا واتساب في أي وقت، ونأخذ منك وصفًا مبدئيًا للمشكلة." },
  { title: "الوصول إلى الموقع", desc: "يصل الفني إليك مجهزًا بالأدوات المناسبة لنوع الانسداد الذي وصفته." },
  { title: "الفحص والتشخيص", desc: "نحدد مكان الانسداد وسببه، ونستخدم الكاميرا عند الحاجة قبل بدء العمل." },
  { title: "تحديد السعر", desc: "نوضح لك طريقة العلاج والتكلفة قبل البدء، دون رسوم خفية." },
  { title: "فتح الانسداد", desc: "نعالج المشكلة بالسوستة أو الماكينة أو ضغط المياه دون تكسير." },
  { title: "اختبار الصرف والتسليم", desc: "نختبر انسياب المياه في كل النقاط وننظف مكان العمل قبل المغادرة." },
];

const prices = [
  { service: "تسليك حوض مطبخ أو مغسلة", range: "من 10 د.ك", note: "حسب شدة الانسداد" },
  { service: "تسليك بلاعة حمام", range: "من 10 د.ك", note: "يشمل إزالة الشعر والترسبات" },
  { service: "تسليك مرحاض (كرسي)", range: "من 15 د.ك", note: "حسب عمق الانسداد" },
  { service: "تسليك الخط الرئيسي", range: "من 20 د.ك", note: "بالماكينة أو ضغط المياه" },
  { service: "تسليك بضغط المياه (جت)", range: "من 25 د.ك", note: "غسيل شامل للخط" },
  { service: "فحص بالكاميرا", range: "حسب الحالة", note: "لتحديد الانسداد المخفي" },
];

const pricesLink = priceLinks.find((l) => l.href === "/drain-cleaning-prices-kuwait")!;

const serviceById = new Map(coreServices.map((s) => [s.id, s]));

// وصف قصير لكل خدمة مرتبطة — مختلف عن أوصاف الرئيسية وعن أول فقرة في صفحة
// كل خدمة، ولا يشرح تسليك المطبخ والحمام بالتفصيل حتى لا ينافس صفحته.
const relatedServices = [
  {
    id: "kitchen-bathroom",
    before: "إذا كان الانسداد في حوض المطبخ أو بلاعة الحمام فقط، فصفحة",
    after: "تشرح أسبابه الخاصة وطرق الوقاية منه بالتفصيل.",
  },
  {
    id: "manhole",
    before: "غطاء المنهول المكسور أو غرفة التفتيش المتهالكة تسمح بدخول الرمال والمخلفات إلى الشبكة. نوفر خدمة",
    after: "بمقاسات مختلفة للمنازل والعمارات.",
  },
  {
    id: "basement",
    before: "السراديب التي تقع تحت مستوى خط الصرف تحتاج إلى مضخة ترفع المياه إليه. تعرّف على خدمة",
    after: "لحماية السرداب من تجمع المياه.",
  },
  {
    id: "tank",
    before: "خزان المياه جزء آخر من شبكة المنزل يحتاج إلى عناية دورية، ونقدم خدمة",
    after: "لإزالة الرواسب وتعقيم الخزان.",
  },
] as const;

const areaLinks = areas.map((a) => ({
  slug: a.slug,
  label: a.name.replace(/^محافظة\s+/, ""),
}));

const tips = [
  "اجمع الزيوت والدهون في وعاء منفصل وارمه مع القمامة، ولا تسكبها في الحوض.",
  "ضع مصافي على بلاعات المطبخ والحمام لحجز الشعر وبقايا الطعام، ونظفها باستمرار.",
  "اسكب ماءً ساخنًا في حوض المطبخ مرة أسبوعيًا لإذابة الدهون قبل أن تتراكم.",
  "لا ترمِ المناديل المبللة أو الحفاضات أو أعواد التنظيف في المرحاض.",
  "نظّف بلاعات الساحات والمواقف من الرمال بعد العواصف الترابية.",
];

const mistakes = [
  "استخدام الأسيد أو المواد الكيميائية القوية: تولّد حرارة تُضعف المواسير البلاستيكية والقديمة، وأبخرتها خطرة، ولا تعالج سبب الانسداد.",
  "دفع أسلاك حديدية حادة في الماسورة، فقد تثقبها أو تدفع الانسداد إلى مكان أعمق.",
  "رمي بقايا البناء أو الجبس في البلاعات أثناء الترميم.",
  "تجاهل بطء التصريف حتى يتحول إلى انسداد كامل أو طفح.",
];

const gallery = [
  {
    src: "/drain-cleaning/تسليك-منازل.webp",
    alt: "فني يسلّك بلاعة أرضية في حمام منزل باستخدام ماكينة التسليك",
  },
  {
    src: "/drain-cleaning/تسليك-مجاري-السالمية.webp",
    alt: "فني يفتح انسداد بلاعة أرضية في مطبخ منزل",
  },
  {
    src: "/drain-cleaning/تسليك-حمامات.webp",
    alt: "تسليك كرسي حمام مسدود بالسوستة اليدوية",
  },
  {
    src: "/drain-cleaning/تسليك.webp",
    alt: "ماكينة تسليك كهربائية بسلك دوّار أثناء العمل في خط صرف",
  },
  {
    src: "/drain-cleaning/تسليك-مجاري.webp",
    alt: "سيارة شفط تسحب مياه الصرف من منهول في أحد شوارع الكويت",
  },
];

const faqs: FaqItem[] = [
  {
    question: "كم تكلفة تسليك المجاري في الكويت تقريبًا؟",
    answer:
      "تبدأ الأسعار من 10 د.ك لتسليك حوض أو بلاعة، ومن 20 د.ك للخط الرئيسي، ومن 25 د.ك للتسليك بضغط المياه. هذه أسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل بدء العمل.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، في معظم الحالات نفتح الانسداد بالسوستة أو ماكينة التسليك أو ضغط المياه دون أي تكسير. وإذا كان سبب الانسداد غير واضح نفحص الماسورة بالكاميرا أولًا بدل التكسير الاستكشافي.",
  },
  {
    question: "كم يستغرق تسليك المجاري؟",
    answer:
      "غالبًا تُحل المشكلة خلال 30 إلى 60 دقيقة حسب مكان الانسداد وشدته، وقد يحتاج الخط الرئيسي وقتًا أطول.",
  },
  {
    question: "هل الخدمة متاحة 24 ساعة؟",
    answer:
      "نعم، نستقبل الطلبات على مدار 24 ساعة طوال أيام الأسبوع، بما في ذلك حالات الطفح والطوارئ في الليل.",
  },
  {
    question: "هل تتعاملون مع انسداد الخط الرئيسي؟",
    answer:
      "نعم، نفتح انسداد الخط الرئيسي وخطوط الصرف المشتركة بماكينة التسليك الكهربائية أو بضغط المياه، مع فحص بالكاميرا عند الحاجة.",
  },
  {
    question: "هل يوجد ضمان على خدمة تسليك المجاري؟",
    answer:
      "نعم، نقدم ضمانًا على العمل بعد اختبار انسياب الصرف في كل النقاط، ونوضّح تفاصيله قبل بدء التنفيذ.",
  },
  {
    question: "ما الفرق بين التسليك بالسلك والتسليك بضغط المياه؟",
    answer:
      "السلك يخترق الانسداد ويفتّته ليعود الماء إلى الجريان، أما ضغط المياه فيغسل جدران الماسورة بالكامل ويزيل الدهون والترسبات العالقة بها، لذلك يقلّ معه تكرار الانسداد. ويختار الفني الطريقة حسب نوع الانسداد ومكانه.",
  },
  {
    question: "متى يجب الاتصال بفني تسليك مجاري؟",
    answer:
      "عند تكرار الانسداد رغم التنظيف، أو ارتجاع المياه في أكثر من نقطة، أو ظهور روائح مستمرة، أو طفح المجاري. هذه علامات على انسداد عميق لا تحله الأدوات المنزلية.",
  },
  {
    question: "هل الأسيد والمواد الكيميائية آمنة لتسليك المجاري؟",
    answer:
      "لا ننصح بها. الأسيد والمواد الكيميائية القوية قد تتلف المواسير وتسبب حروقًا وأبخرة ضارة، وغالبًا تذيب جزءًا من الانسداد فقط. التسليك الميكانيكي وضغط المياه أكثر أمانًا وفعالية.",
  },
  {
    question: "هل تستخدمون الكاميرا لتحديد مكان الانسداد؟",
    answer:
      "نعم، نستخدم كاميرا الفحص لرؤية مكان الانسداد وسببه وحالة المواسير من الداخل، وذلك عند تكرار المشكلة أو صعوبة تحديد مكانها.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_LABEL,
      serviceType: "تسليك مجاري",
      url: PAGE_URL,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "Country", name: "الكويت" },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: PAGE_LABEL, item: PAGE_URL },
      ],
    },
  ],
};

function CheckIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const h2Class = "text-2xl font-extrabold text-slate-900 sm:text-3xl";
const leadClass = "mt-4 text-lg leading-relaxed text-slate-700";
const linkClass = "font-bold text-sky-700 underline-offset-4 hover:underline";

export default function DrainCleaningKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: PAGE_LABEL }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-12 text-center sm:px-8 lg:py-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            تسليك مجاري الكويت بدون تكسير — خدمة 24 ساعة
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
            <strong>تسليك مجاري الكويت</strong> خدمة تقدمها دار الصيانة الكويتية
            لفتح انسداد الصرف الصحي في المنازل والشقق والفلل والمحلات بجميع
            محافظات الكويت، على مدار 24 ساعة. يحدد الفني مكان الانسداد وسببه
            أولًا، ثم يفتحه بالسوستة أو ماكينة التسليك أو ضغط المياه، مع الفحص
            بالكاميرا عند الحاجة، دون تكسير الأرضيات أو الجدران. ونبلغك بالسعر
            بوضوح قبل بدء العمل.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
          <p className="mt-4 text-sm font-semibold text-slate-500">
            فريقنا لديه خبرة أكثر من 15 عامًا في تسليك المجاري.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="relative -mt-2 mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl ring-1 ring-slate-900/5">
          <Image
            src={COVER_IMAGE}
            alt={COVER_ALT}
            fill
            preload
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-4 sm:px-8">
        {/* Signs */}
        <section id="signs" className="scroll-mt-24">
          <h2 className={h2Class}>علامات انسداد المجاري</h2>
          <p className={leadClass}>
            نادرًا ما يحدث الانسداد فجأة؛ ففي الغالب تسبقه علامات تحذيرية بأيام
            أو أسابيع، والتدخل عندها أسهل وأقل تكلفة:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {signs.map((sign) => (
              <li
                key={sign.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
              >
                <p className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {sign.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{sign.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Causes */}
        <section id="causes" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>أسباب انسداد المجاري في الكويت</h2>
          <p className={leadClass}>
            معرفة السبب تحدد طريقة العلاج وتساعد على منع تكرار المشكلة. هذه أكثر
            الأسباب التي نصادفها في المنازل والمباني بالكويت:
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <table className="w-full min-w-[520px] text-right text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-extrabold">السبب</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">التفاصيل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {causes.map((c) => (
                  <tr key={c.cause} className="bg-white">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-800">{c.cause}</td>
                    <td className="px-5 py-4 leading-relaxed text-slate-600">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Methods */}
        <section id="methods" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>طرق تسليك المجاري</h2>
          <p className={leadClass}>
            لا توجد طريقة واحدة تناسب كل انسداد؛ فالفني يختار الأداة بعد تحديد
            نوع الانسداد ومكانه. هذه الطرق التي نعتمد عليها في فتح انسداد المجاري
            دون تكسير:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {methods.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-extrabold text-slate-900">مقارنة بين طرق التسليك</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <table className="w-full min-w-[560px] text-right text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-extrabold">الطريقة</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">الأنسب لـ</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">تحتاج تكسير؟</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">السرعة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row) => (
                  <tr key={row.method} className="bg-white">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-800">{row.method}</td>
                    <td className="px-5 py-4 text-slate-600">{row.best}</td>
                    <td className="px-5 py-4 font-semibold text-emerald-700">{row.breaking}</td>
                    <td className="px-5 py-4 text-slate-600">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Steps */}
        <section id="steps" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>خطوات تنفيذ الخدمة</h2>
          <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-sky-600 to-emerald-600 text-base font-extrabold text-white shadow-md">
                  {index + 1}
                </span>
                <p className="mt-4 text-base font-bold text-slate-900">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Prices */}
        <section id="prices" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>أسعار تسليك المجاري</h2>
          <p className={leadClass}>
            يختلف السعر حسب نوع الانسداد ومكانه والطريقة المستخدمة. هذه نقطة
            البداية لكل خدمة:
          </p>
          <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-base font-semibold text-amber-900">
            الأسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل بدء
            العمل.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <table className="w-full min-w-[560px] text-right text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-extrabold">الخدمة</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">السعر التقريبي</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">ملاحظات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((row) => (
                  <tr key={row.service} className="bg-white">
                    <td className="px-5 py-4 font-bold text-slate-800">{row.service}</td>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-sky-700">{row.range}</td>
                    <td className="px-5 py-4 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            للتفاصيل الكاملة وما يؤثر في التكلفة راجع صفحة{" "}
            <Link href={pricesLink.href} className={linkClass}>
              {pricesLink.anchor}
            </Link>
            .
          </p>
        </section>

        {/* Related services */}
        <section id="related" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>خدمات مرتبطة</h2>
          <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
            {relatedServices.map((item) => {
              const service = serviceById.get(item.id)!;
              return (
                <p key={item.id}>
                  {item.before}{" "}
                  <Link href={service.href} className={linkClass}>
                    {service.anchor}
                  </Link>{" "}
                  {item.after}
                </p>
              );
            })}
          </div>
        </section>

        {/* Areas */}
        <section id="areas" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>المناطق التي نخدمها</h2>
          <p className={leadClass}>
            نصل إلى جميع مناطق الكويت لتسليك الصرف الصحي وفتح الانسدادات. ولكل
            منطقة من المناطق التالية صفحة خاصة بها:
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {areaLinks.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  className="flex h-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center text-base font-bold text-sky-700 ring-1 ring-slate-900/5 transition hover:bg-sky-50"
                >
                  تسليك مجاري {area.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base text-slate-600">
            أو تصفّح{" "}
            <Link href="/areas" className={linkClass}>
              جميع مناطق الخدمة
            </Link>
            .
          </p>
        </section>

        {/* Tips + mistakes */}
        <section id="tips" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>نصائح لتجنب انسداد المجاري</h2>
          <p className={leadClass}>
            عادات بسيطة تقلل احتمال عودة الانسداد، وتغنيك عن تسليك البلاعات
            مرة بعد مرة:
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-slate-900/5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {tip}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-extrabold text-slate-900">أخطاء تجنّبها</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {mistakes.map((mistake) => (
              <li
                key={mistake}
                className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-rose-900/5"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 font-extrabold text-rose-600"
                >
                  ✕
                </span>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>من أعمالنا في تسليك المجاري</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((img) => (
              <li
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 ring-1 ring-slate-900/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 270px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Faq items={faqs} title="الأسئلة الشائعة عن تسليك مجاري الكويت" />

      {/* CTA */}
      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              عندك انسداد في المجاري؟ تواصل الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              نستقبل طلبك على مدار 24 ساعة، ونحدد لك السعر قبل بدء العمل.
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
