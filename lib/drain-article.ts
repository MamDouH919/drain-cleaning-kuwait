import { areas, areaBySlug, type Area } from "@/lib/areas";

// Article-level constants shared by the microdata block and the author box.
export const ARTICLE_AUTHOR = "خدمات الكويت";
export const ARTICLE_AUTHOR_INITIAL = "خ";
export const ARTICLE_AUTHOR_BIO =
  "شركة خدمات الكويت هي أفضل شركة خدمات منزلية بالكويت نقدم العديد من الخدمات في مختلف المناطق والمدن والأحياء بأفضل جودة";
export const ARTICLE_PUBLISHED = "2026-06-22T11:15:34+03:00";
export const ARTICLE_MODIFIED = "2026-06-22T11:15:36+03:00";

// Ratings shown in the rating widget summary.
export const ARTICLE_RATING_VALUE = 5;
export const ARTICLE_RATING_COUNT = 4;

// Internal destinations replacing the source article's outbound links.
export const links = {
  home: "/",
  hub: "/drain-cleaning-kuwait",
  kitchen: "/kitchen-bathroom-drain-cleaning-kuwait",
  prices: "/drain-cleaning-prices-kuwait",
  pump: "/basement-pump-kuwait",
  manhole: "/manhole-installation-kuwait",
  tank: "/water-tank-cleaning-kuwait",
} as const;

// Every generated page keeps a stable post id so the DOM ids stay identical
// between builds (the rating widget keys its stored vote on it).
export function articlePostId(area: Area): number {
  const index = areas.findIndex((a) => a.slug === area.slug);
  return 6100 + (index < 0 ? 0 : index);
}

export type Heading = { id: string; level: 2 | 3; text: string };

// Single source of truth for the headings: the <h2>/<h3> tags and the table of
// contents entries are both rendered from this list.
export function articleHeadings(area: string): Heading[] {
  return [
    { id: "i-1", level: 2, text: `تسليك مجاري ${area}` },
    { id: "i-2", level: 2, text: `تسليك مجاري في ${area}` },
    { id: "i-3", level: 2, text: `تنظيف مجاري ${area}` },
    { id: "i-4", level: 3, text: "نصائح لتجنب انسداد المجاري" },
    { id: "i-5", level: 2, text: `شركة تسليك مجاري ${area}` },
    { id: "i-6", level: 3, text: `أهمية شركة تسليك مجاري ${area}` },
    { id: "i-7", level: 3, text: `خدمات شركة تسليك مجاري ${area}` },
    { id: "i-8", level: 2, text: `مكينة تسليك مجاري ${area}` },
    { id: "i-9", level: 2, text: `تسليك البواليع ${area}` },
    { id: "i-10", level: 2, text: `تسليك مجاري بالضغط ${area}` },
    { id: "i-11", level: 2, text: `تسليك مجاري المطبخ ${area}` },
    { id: "i-12", level: 2, text: `اسعار تسليك المجاري ${area}` },
    { id: "i-13", level: 2, text: `معلم تسليك مجاري ${area}` },
    { id: "i-14", level: 2, text: `فني تسليك مجاري ${area}` },
    { id: "i-15", level: 2, text: "الأسئلة الشائعة" },
  ];
}

// In-content figures. Sizes match the source markup exactly (762 × 458).
export const FIGURE_WIDTH = 762;
export const FIGURE_HEIGHT = 458;

export function articleFigures(area: string) {
  return {
    drains: {
      id: 6236,
      src: "/drain-cleaning/تسليك-بلوعات.webp",
      alt: `تسليك بلاعات ${area}`,
      caption: `تسليك بلاعات ${area}`,
    },
    cleaning: {
      id: 6235,
      src: "/drain-cleaning/تسليك.webp",
      alt: `تنظيف مجاري ${area}`,
      caption: `تنظيف مجاري ${area}`,
    },
  };
}

// Pricing factor table (second table in the article).
export function pricingRows() {
  return [
    { factor: "عدد نقاط الصرف المتأثرة", effect: "يحدد ما إذا كان الانسداد موضعياً أو مشتركاً" },
    { factor: "موقع الانسداد وعمقه", effect: "يؤثر في طول السوستة والمعدة المطلوبة" },
    { factor: "نوع المخلفات", effect: "الدهون تختلف عن الرمال أو الأجسام الصلبة" },
    { factor: "قطر وطول المواسير", effect: "الخطوط الرئيسية تحتاج إلى معدات أكبر" },
    { factor: "الحاجة إلى الشفط", effect: "تتطلب تنكراً ومعدات نقل مياه الصرف" },
    { factor: "استخدام الكاميرا", effect: "يضاف عند الحاجة إلى تشخيص داخلي موثق" },
    { factor: "حالة الوصول إلى المنهول", effect: "قد تزيد صعوبة التنفيذ إذا كان الغطاء عالقاً" },
    { factor: "إصلاح مضخة أو رداد", effect: "يشمل أجور تركيب وقطعاً حسب العطل" },
  ];
}

export function articleFaqs(area: string) {
  return [
    {
      question: `هل تصل خدمة تسليك المجاري إلى جميع قطع ${area}؟`,
      answer: `يتم تنسيق الخدمة داخل قطع ${area} بحسب جدول الفرق الميدانية. أرسل موقعك عبر واتساب أو اتصل بنا لتأكيد الموعد.`,
    },
    {
      question: "هل تتوفر خدمة طوارئ المجاري ليلاً وخلال العطلات؟",
      answer:
        "يمكن طلب خدمة سريعة للحالات الطارئة، مع ضرورة تأكيد توفر الفريق في وقت الاتصال وعدم الاعتماد على عبارة استجابة سريعة دون موعد واضح.",
    },
    {
      question: "ما العوامل التي تحدد سعر تسليك المجاري؟",
      answer:
        "يتحدد السعر وفق موقع الانسداد وعمقه وعدد النقاط المتأثرة ونوع المعدات والحاجة إلى شفط أو كاميرا أو إصلاح إضافي.",
    },
    {
      question: "كيف أعرف إن كان الانسداد داخل المنزل أم في الجورة أو الخط الرئيسي؟",
      answer:
        "إذا تأثرت نقطة واحدة فغالباً يكون الانسداد قريباً منها. أما تأثر عدة مرافق أو امتلاء غرف التفتيش فيشير غالباً إلى خط مشترك أو جورة، ويؤكد الفحص السبب النهائي.",
    },
    {
      question: "هل يمكن فتح المجاري دون تكسير الأرضيات؟",
      answer:
        "نعم، تُعالج أغلب الانسدادات بالسوستة أو الضغط أو الشفط دون تكسير. يصبح التكسير ضرورياً فقط عند اكتشاف كسر أو هبوط أو انفصال يحتاج إلى إصلاح.",
    },
    {
      question: "متى تحتاج الحالة إلى فحص المواسير بالكاميرا؟",
      answer:
        "عند تكرار الانسداد، أو عدم معرفة موقعه، أو الاشتباه في جسم صلب أو كسر أو هبوط، أو قبل اتخاذ قرار فتح الأرضية.",
    },
    {
      question: "ما الفرق بين التسليك بالسوستة والتسليك بضغط الماء؟",
      answer:
        "تفكك السوستة المواد العالقة أو تسحبها، بينما يساعد ضغط الماء على غسل الدهون والرواسب الممتدة وتنظيف مساحة أكبر من جدار الأنبوب.",
    },
    {
      question: "هل تشمل الخدمة تنظيف الجورة أو شفط المنهول؟",
      answer:
        "يمكن طلب تنظيف الجورة وشفط المنهول والبيارة، ثم فحص الخط والمضخة لتحديد سبب الطفح ومنع عودته.",
    },
    {
      question: "هل يتم تنظيف وتعقيم المكان بعد سحب مياه الصرف؟",
      answer:
        "يشمل نطاق العمل المتفق عليه رفع المياه والمخلفات وتنظيف المنطقة المتأثرة واستخدام مواد تعقيم مناسبة. يجب توضيح المساحة المطلوبة قبل بدء الخدمة.",
    },
    {
      question: "هل تقدمون ضماناً مكتوباً إذا عاد الانسداد؟",
      answer:
        "يحدد الضمان بحسب نوع العمل وسبب الانسداد. اطلب توضيح المدة والشروط والاستثناءات كتابةً في عرض السعر أو الفاتورة.",
    },
    {
      question: "كم تستغرق معالجة انسداد المطبخ أو الحمام؟",
      answer:
        "تعتمد المدة على قرب الانسداد ونوعه وحالة المواسير. الانسداد البسيط يختلف عن خط ممتد يحتاج إلى ضغط أو تصوير، لذلك تُحدد المدة بعد الفحص.",
    },
    {
      question: "هل تتعاملون مع الفلل والقسائم والسراديب؟",
      answer:
        "نعم، تشمل الخدمة شبكات الصرف في الفلل والقسائم والسراديب، إضافة إلى فحص الجور والمضخات والمناهيل والخطوط الرئيسية.",
    },
    {
      question: "هل يمكن تركيب رداد مجاري لمنع ارتداد مياه الصرف؟",
      answer:
        "يمكن تركيب الرداد بعد فحص اتجاه التدفق وقطر الأنبوب وتحديد موضع مناسب للصيانة المستقبلية.",
    },
    {
      question: "ما الإجراء المناسب للانسدادات الناتجة عن مخلفات التشطيب؟",
      answer:
        "تحتاج إلى فحص حذر، وقد يلزم استخدام الكاميرا أو أدوات سحب خاصة. لا يُنصح بدفع الرمال أو الإسمنت بقوة داخل الخط.",
    },
    {
      question: "هل يتم إبلاغ العميل بالسعر قبل بدء العمل؟",
      answer:
        "يُشرح نطاق الخدمة والتكلفة بعد التشخيص وقبل التنفيذ، ولا تبدأ الأعمال الإضافية إلا بعد توضيحها والحصول على موافقة العميل.",
    },
  ];
}

// "خدماتنا الأخرى" — the source article closed with nine sibling-area links.
export function otherServiceLinks(area: Area) {
  const picked: Area[] = [];
  const push = (a?: Area) => {
    if (a && a.slug !== area.slug && !picked.some((p) => p.slug === a.slug)) picked.push(a);
  };

  area.nearby.forEach((slug) => push(areaBySlug.get(slug)));
  const start = areas.findIndex((a) => a.slug === area.slug);
  for (let i = 1; picked.length < 9 && i <= areas.length; i++) {
    push(areas[(start + i) % areas.length]);
  }

  return picked.slice(0, 9).map((a) => ({
    href: `/drain-cleaning-${a.slug}`,
    label: `تسليك مجاري ${a.name}`,
  }));
}
