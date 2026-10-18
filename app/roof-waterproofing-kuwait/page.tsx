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

const PAGE_PATH = "/roof-waterproofing-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_LABEL = "عزل أسطح الكويت";
const TITLE = "عزل أسطح الكويت ضد الحرارة وتسرب المياه";
const DESCRIPTION =
  "عزل أسطح الكويت للفلل والبيوت: معاينة السطح، تجهيزه ومعالجة الشقوق، ثم طبقة عزل تناسب حالته، مع ضمان على العمل وخدمة في جميع المحافظات. اتصل 98890031";
const COVER_IMAGE = "/roof-waterproofing/عازل-اسطح-الكويت.webp";
const COVER_ALT = "سطح بعد العزل بطبقة رمادية مع وحدات التكييف";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
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
    images: [{ url: COVER_IMAGE, width: 1024, height: 768, alt: COVER_ALT }],
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
    title: "بقع رطوبة في السقف",
    desc: "تظهر بقع داكنة أو تقشر في دهان سقف الدور الأخير بعد المطر، وهي أوضح دليل على أن الماء يجد طريقه عبر السطح.",
  },
  {
    title: "تشقق الطبقة القديمة أو انفصالها",
    desc: "الطبقة التي جفت تحت الشمس سنوات تتشقق أو ترتفع عن الخرسانة، فيتسلل الماء من تحتها حتى لو بدت سليمة من بعيد.",
  },
  {
    title: "تجمع المياه على السطح",
    desc: "بقاء الماء في نقاط معينة بعد المطر أو بعد غسيل السطح يعني أن الميول لا توجهه إلى المزاريب، وهذه النقاط أول ما يتسرب.",
  },
  {
    title: "حرارة زائدة في الدور الأخير",
    desc: "إذا كانت غرف الدور الأخير أسخن بوضوح من باقي البيت، والمكيف يعمل بلا توقف، فالسطح ينقل حرارة الشمس إلى الداخل.",
  },
  {
    title: "تآكل حول قواعد الأجهزة والمواسير",
    desc: "قواعد المكيفات والخزانات وفتحات المواسير نقاط ضعيفة، وأي فجوة حولها تكفي لتسريب الماء إلى السقف.",
  },
];

// كل نظام هنا مؤكد من صاحب الشغل. جيتاروف له صفحة مستقلة، فيُذكر باختصار مع رابطها.
const systems = [
  {
    title: "رولات البيتومين (الممبرين)",
    desc: "لفائف مقاومة للماء تُفرد على السطح وتُلحم أطرافها بالحرارة لتكوّن طبقة متصلة. تتحمل الحركة الخفيفة في الخرسانة، لكنها تحتاج فوقها إلى طبقة حماية من الشمس، مثل طلاء عاكس أو بلاط.",
  },
  {
    title: "عزل الفوم (البولي يوريثان)",
    desc: "يُرش سائلًا فيتمدد ويتصلب في دقائق، ويغطي السطح بطبقة واحدة بلا فواصل حتى حول قواعد الأجهزة والمواسير. يجمع بين منع التسرب وتقليل الحرارة، ويجب أن يُغطى بطلاء يحميه من أشعة الشمس.",
  },
  {
    title: "العزل الأسمنتي",
    desc: "مونة أسمنتية مرنة تُدهن على السطح بطبقتين أو أكثر، وتلتصق جيدًا بالخرسانة. مناسب للأسطح التي سيُركّب فوقها بلاط أو تُستخدم للجلوس والمشي.",
  },
  {
    title: "الطلاء الأكريليك والمطاطي",
    desc: "طلاء سائل يُدهن بعدة طبقات ويجف مرنًا، ولونه الفاتح يعكس جزءًا كبيرًا من حرارة الشمس. حل عملي لتجديد طبقة قديمة ما زالت ملتصقة بالسطح.",
  },
];

const comparison = [
  { system: "رولات البيتومين", best: "سطح جديد أو بعد إزالة العزل القديم", heat: "محدود", note: "يحتاج طبقة حماية من الشمس" },
  { system: "الفوم", best: "سطح فيه أجهزة ومواسير كثيرة", heat: "كبير", note: "يجب تغطيته بطلاء حماية" },
  { system: "العزل الأسمنتي", best: "سطح سيُبلّط أو يُستخدم للمشي", heat: "محدود", note: "يلتصق جيدًا بالخرسانة" },
  { system: "الأكريليك والمطاطي", best: "تجديد طبقة قديمة سليمة", heat: "متوسط", note: "يحتاج تجديدًا كل فترة" },
];

const steps = [
  { title: "المعاينة", desc: "نفحص السطح وحالة العزل القديم ونقاط التسرب، ونقيس المساحة." },
  { title: "التنظيف والتجهيز", desc: "نزيل الأتربة والطبقات المنفصلة حتى نصل إلى سطح نظيف وجاف." },
  { title: "معالجة الشقوق والميول", desc: "نسد الشقوق والفواصل ونحكم ما حول المواسير والقواعد، ونصحح الميول نحو المزاريب." },
  { title: "تطبيق العزل", desc: "ننفذ النظام المتفق عليه بالسماكة والطبقات التي يحتاجها." },
  { title: "اختبار الماء", desc: "نغمر السطح بالماء ونراقب السقف من الداخل للتأكد من عدم وجود أي تسرب." },
  { title: "التسليم", desc: "نسلمك السطح نظيفًا ونوضح لك تفاصيل الضمان على العمل." },
];

const priceFactors = [
  { factor: "مساحة السطح", detail: "تُحسب التكلفة غالبًا بالمتر المربع، فالمساحة هي الأساس." },
  { factor: "نوع نظام العزل", detail: "تختلف المواد وعدد الطبقات من نظام لآخر، وبالتالي التكلفة." },
  { factor: "حالة السطح", detail: "كثرة الشقوق أو الحاجة إلى تصحيح الميول تضيف عملًا قبل العزل." },
  { factor: "إزالة العزل القديم", detail: "إذا كانت الطبقة القديمة منفصلة أو مبللة فلا بد من إزالتها أولًا." },
];

const pricesLink = priceLinks.find((l) => l.href === "/roof-insulation-prices-kuwait")!;

const mistakes = [
  "وضع عزل جديد فوق طبقة قديمة منفصلة أو مبللة، فيبقى الماء محبوسًا تحته ويعود التسرب.",
  "إهمال الميول، فيتجمع الماء في نفس النقاط ويضغط على العزل مع كل مطر.",
  "ترك الفوم أو البيتومين مكشوفًا للشمس دون طبقة حماية، فيتلف قبل أوانه.",
  "عدم إحكام العزل حول قواعد المكيفات والخزانات وفتحات المواسير.",
  "تثبيت أجهزة جديدة على السطح بعد العزل دون معالجة مكان التثبيت.",
];

const serviceById = new Map(coreServices.map((s) => [s.id, s]));

// وصف قصير لكل خدمة مرتبطة، مختلف عن أوصاف الرئيسية وعن مقدمة صفحة كل خدمة.
const relatedServices = [
  {
    id: "gitaroof",
    before: "جيتاروف نظام عزل يجمع أكثر من طبقة في تطبيق واحد، وله صفحة خاصة عن",
    after: "تشرح مكوناته ومتى يُختار.",
  },
  {
    id: "thermal",
    before: "لمعرفة المزيد عن",
    after: "وأماكن استخدامه في المبنى، راجع صفحته المستقلة.",
  },
  {
    id: "tank",
    before: "إذا كان خزان المياه على السطح، فالمعاينة فرصة لفحصه أيضًا، ونقدم خدمة",
    after: "لإزالة الرواسب وتعقيمه.",
  },
] as const;

const areaLinks = areas.map((a) => ({
  slug: a.slug,
  label: a.name.replace(/^محافظة\s+/, ""),
}));

const gallery = [
  { src: "/roof-waterproofing/عازل-اسطح-جيتاروف.webp", alt: "عامل يفرد طبقة عزل سوداء على سطح" },
  { src: "/roof-waterproofing/عزل-اسطح-الكويت.webp", alt: "سطح بيت بعد العزل بطلاء رمادي فاتح" },
  { src: "/roof-waterproofing/عزل-اسطح-حراري.webp", alt: "سطح معزول بطبقة بيضاء وعليه وحدة تكييف وطبق ستلايت" },
  { src: "/roof-waterproofing/عزل-اسطح.webp", alt: "سطح معزول بطبقة بيضاء بين بيوت سكنية" },
  { src: "/roof-waterproofing/العزل-المائي-والحراري.webp", alt: "سطح مدهون بطبقة عزل بيضاء وعليه خزان مياه مغطى" },
];

const faqs: FaqItem[] = [
  {
    question: "كم تكلفة عزل الأسطح في الكويت؟",
    answer:
      "تتحدد التكلفة بعد المعاينة حسب مساحة السطح ونوع نظام العزل وحالة السطح، وهل يحتاج إلى إزالة العزل القديم أولًا. ونبلغك بالسعر بوضوح قبل بدء العمل.",
  },
  {
    question: "أي نوع عزل يناسب سطح بيتي؟",
    answer:
      "يعتمد ذلك على حالة السطح واستخدامه. الفوم مناسب للأسطح المليئة بالأجهزة حين تكون الحرارة هي المشكلة الأكبر، والبيتومين للأسطح الجديدة، والعزل الأسمنتي لما سيُبلّط، والأكريليك لتجديد طبقة قديمة سليمة. نوصي بالنظام المناسب بعد المعاينة.",
  },
  {
    question: "هل تعالجون التسرب الموجود قبل العزل؟",
    answer:
      "نعم. نسد الشقوق والفواصل ونحكم ما حول المواسير وقواعد الأجهزة ونصحح الميول قبل تطبيق العزل، لأن العزل فوق نقطة تسرب لا يعالجها.",
  },
  {
    question: "كيف تتأكدون أن السطح لا يسرّب بعد العزل؟",
    answer:
      "نجري اختبار الماء: نغمر السطح بالماء ونراقب السقف من الداخل قبل التسليم، ولا نسلّم العمل إلا بعد التأكد من عدم وجود أي تسرب.",
  },
  {
    question: "هل يمكن عزل السطح فوق العزل القديم؟",
    answer:
      "أحيانًا. إذا كانت الطبقة القديمة ملتصقة بالسطح وجافة يمكن العزل فوقها بعد تجهيزها، أما إذا كانت منفصلة أو محتبسًا تحتها ماء فيجب إزالتها أولًا.",
  },
  {
    question: "هل يوجد ضمان على عزل الأسطح؟",
    answer: "نعم، نقدم ضمانًا على العمل، ونوضح تفاصيله قبل بدء التنفيذ.",
  },
  {
    question: "هل تخدمون جميع مناطق الكويت؟",
    answer:
      "نعم، ننفذ عزل الأسطح في جميع محافظات الكويت: العاصمة وحولي والفروانية والأحمدي والجهراء ومبارك الكبير، ومنها السالمية والفحيحيل.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_LABEL,
      serviceType: "عزل أسطح",
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
const linkClass = "font-bold text-emerald-700 underline-offset-4 hover:underline";

export default function RoofWaterproofingKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: PAGE_LABEL }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative w-full overflow-hidden bg-gradient-to-bl from-emerald-50 via-white to-sky-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-12 text-center sm:px-8 lg:py-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            عزل أسطح الكويت ضد الحرارة وتسرب المياه
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
            <strong>عزل أسطح الكويت</strong> خدمة تقدمها دار الصيانة الكويتية
            لحماية أسطح الفلل والبيوت والعمارات من تسرب مياه الأمطار ومن حرارة
            الصيف، في جميع محافظات الكويت. نعاين السطح أولًا ونعالج الشقوق ونقاط
            التسرب، ثم نطبّق نظام العزل المناسب لحالته، ونختبره بالماء قبل
            التسليم.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-emerald-800"
            >
              {PHONE_DISPLAY} | اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-7 py-4 text-lg font-bold text-sky-700 shadow-md transition hover:bg-sky-50"
            >
              تواصل واتساب
            </a>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500">
            ينفذ العمل فريق لديه خبرة أكثر من 15 عامًا.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="relative -mt-2 mb-10 aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl ring-1 ring-slate-900/5">
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
          <h2 className={h2Class}>علامات تدل على أن سطحك يحتاج إلى عزل</h2>
          <p className={leadClass}>
            مشاكل السطح تظهر غالبًا داخل البيت قبل أن تُرى على السطح نفسه. انتبه
            لهذه العلامات، فكلما عولجت مبكرًا قلّ العمل المطلوب:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {signs.map((sign) => (
              <li
                key={sign.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
              >
                <p className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {sign.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{sign.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Systems */}
        <section id="systems" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>أنواع عزل الأسطح التي ننفذها</h2>
          <p className={leadClass}>
            لكل سطح ظروفه: عمره، وحالة الطبقة القديمة، وكمية الأجهزة فوقه، وهل
            سيُبلّط أم يبقى مكشوفًا. لذلك نختار النظام بعد المعاينة من بين هذه
            الأنظمة:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {systems.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            وننفذ أيضًا{" "}
            <Link href={serviceById.get("gitaroof")!.href} className={linkClass}>
              {serviceById.get("gitaroof")!.anchor}
            </Link>
            ، وهو نظام متعدد الطبقات له صفحة مستقلة.
          </p>

          <h3 className="mt-8 text-xl font-extrabold text-slate-900">مقارنة بين أنظمة العزل</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <table className="w-full min-w-[600px] text-right text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-extrabold">النظام</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">الأنسب لـ</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">تقليل الحرارة</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">ملاحظة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row) => (
                  <tr key={row.system} className="bg-white">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-800">{row.system}</td>
                    <td className="px-5 py-4 text-slate-600">{row.best}</td>
                    <td className="px-5 py-4 font-semibold text-emerald-700">{row.heat}</td>
                    <td className="px-5 py-4 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Steps */}
        <section id="steps" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>خطوات تنفيذ العزل</h2>
          <p className={leadClass}>
            نصف نجاح العزل يتحدد قبل وضع أول طبقة، في التجهيز ومعالجة نقاط
            الضعف:
          </p>
          <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-emerald-600 to-sky-600 text-base font-extrabold text-white shadow-md">
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
          <h2 className={h2Class}>ما الذي يحدد تكلفة عزل السطح؟</h2>
          <p className={leadClass}>
            لا يمكن تحديد سعر دقيق دون رؤية السطح، لكن هذه العوامل هي التي تحدده،
            ونبلغك بالسعر بعد المعاينة وقبل بدء العمل:
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <table className="w-full min-w-[520px] text-right text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-extrabold">العامل</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">تأثيره</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {priceFactors.map((row) => (
                  <tr key={row.factor} className="bg-white">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-800">{row.factor}</td>
                    <td className="px-5 py-4 leading-relaxed text-slate-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            للتفاصيل الكاملة راجع صفحة{" "}
            <Link href={pricesLink.href} className={linkClass}>
              {pricesLink.anchor}
            </Link>
            .
          </p>
        </section>

        {/* Mistakes */}
        <section id="mistakes" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>أخطاء شائعة في عزل الأسطح</h2>
          <p className={leadClass}>
            أغلب حالات التسرب التي نراها بعد عزل سابق سببها واحد من هذه الأخطاء،
            لا المادة نفسها:
          </p>
          <ul className="mt-6 flex flex-col gap-3">
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
            نعزل الأسطح في كل محافظات الكويت، ولكل منطقة من المناطق التالية صفحة
            خاصة بها:
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {areaLinks.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/roof-waterproofing-${area.slug}`}
                  className="flex h-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center text-base font-bold text-emerald-700 ring-1 ring-slate-900/5 transition hover:bg-emerald-50"
                >
                  عزل أسطح {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-12 scroll-mt-24">
          <h2 className={h2Class}>من أعمالنا في عزل الأسطح</h2>
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

      {/* الـ CTA الوحيد في آخر الصفحة هو اللي جوه مكون Faq. */}
      <Faq items={faqs} title="الأسئلة الشائعة عن عزل الأسطح" />
    </main>
  );
}
