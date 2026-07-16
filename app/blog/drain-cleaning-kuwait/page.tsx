import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/areas";

const PAGE_PATH = "/blog/drain-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/تسليك-مجاري-الكويت.webp";
const COVER_ALT = "تسليك مجاري الكويت بأحدث الأجهزة وبدون تكسير";
const DATE_PUBLISHED = "2026-07-15";
const DATE_MODIFIED = "2026-07-15";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تسليك مجاري الكويت | فتح انسدادات 24 ساعة بدون تكسير",
  description:
    "دليل تسليك مجاري الكويت الشامل: علامات وأسباب الانسداد وطرق التسليك والأسعار ونصائح الوقاية، مع خدمة فني تسليك مجاري الكويت 24 ساعة بدون تكسير في جميع المناطق.",
  keywords: [
    "تسليك مجاري الكويت",
    "تسليك المجاري في الكويت",
    "شركة تسليك مجاري الكويت",
    "فني تسليك مجاري الكويت",
    "فتح المجاري الكويت",
    "تنظيف المجاري الكويت",
    "تسليك بلاعات الكويت",
    "تسليك مواسير الصرف",
    "سباك الكويت",
    "سباك صحي الكويت",
    "تسليك صرف صحي الكويت",
    "أسعار تسليك مجاري الكويت",
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
    type: "article",
    locale: "ar_KW",
    url: PAGE_URL,
    title: "تسليك مجاري الكويت | الدليل الشامل وخدمة 24 ساعة",
    description:
      "كل ما تحتاجه عن تسليك مجاري الكويت: العلامات والأسباب والطرق والأسعار ونصائح الوقاية، مع خدمة فتح انسدادات بدون تكسير على مدار الساعة.",
    siteName: "خدمات الكويت",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري الكويت | الدليل الشامل وخدمة 24 ساعة",
    description:
      "دليل تسليك مجاري الكويت: العلامات والأسباب وطرق التسليك والأسعار ونصائح الوقاية مع خدمة 24 ساعة بدون تكسير.",
    images: [COVER_IMAGE],
  },
};

const toc = [
  { id: "what", label: "ما هي خدمة تسليك مجاري الكويت؟" },
  { id: "signs", label: "علامات انسداد المجاري" },
  { id: "causes", label: "أسباب انسداد المجاري" },
  { id: "methods", label: "طرق تسليك المجاري" },
  { id: "steps", label: "خطوات تنفيذ الخدمة" },
  { id: "why-company", label: "لماذا تختار شركة متخصصة؟" },
  { id: "prices", label: "أسعار تسليك مجاري الكويت" },
  { id: "tips", label: "نصائح للحفاظ على المجاري" },
  { id: "mistakes", label: "أخطاء يجب تجنبها" },
  { id: "when-call", label: "متى يجب الاتصال بفني؟" },
  { id: "areas", label: "المناطق التي نخدمها" },
  { id: "why-us", label: "لماذا نحن؟" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

const signs = [
  {
    title: "بطء تصريف المياه",
    desc: "أولى العلامات وأكثرها شيوعاً؛ يبقى الماء في الحوض أو البانيو مدة أطول من المعتاد، ما يدل على تضيّق بدأ يتراكم داخل الماسورة قبل أن يتحول إلى انسداد كامل.",
  },
  {
    title: "رجوع المياه (الارتجاع)",
    desc: "ظهور الماء في البلاعة عند تشغيل الغسالة، أو ارتفاع منسوبه في المرحاض، يشير غالباً إلى انسداد في المجرى الرئيسي وليس في نقطة واحدة، ويستوجب تدخلاً سريعاً.",
  },
  {
    title: "الروائح الكريهة",
    desc: "خروج روائح من البلاعات أو المرحاض دليل على تراكم الفضلات والبكتيريا داخل المواسير، ولا تختفي هذه الروائح بالتنظيف السطحي لأنها ناتجة عن مشكلة أعمق.",
  },
  {
    title: "انسداد البلاعات",
    desc: "توقف بلاعة الحمام أو المطبخ عن سحب الماء بسبب تجمع الشعر والدهون والترسبات الجيرية الناتجة عن عُسر المياه في الكويت.",
  },
  {
    title: "صوت فقاعات وغرغرة",
    desc: "سماع صوت غرغرة عند تصريف الماء يعني احتباس الهواء داخل المواسير بسبب انسداد جزئي، وهي علامة مبكرة تستحق الانتباه قبل تفاقمها.",
  },
  {
    title: "طفح المجاري",
    desc: "خروج مياه الصرف من البلاعات أو المناهل إلى أرضية المنزل أو الساحة حالة طوارئ تستوجب الاتصال الفوري بفني تسليك مجاري الكويت.",
  },
  {
    title: "تجمع المياه",
    desc: "بقاء برك ماء حول البلاعات في الحمام أو المطبخ أو الساحة الخارجية يدل على أن الشبكة لم تعد تصرّف المياه بكفاءة.",
  },
];

const causes = [
  {
    cause: "الدهون",
    detail:
      "تتجمد الدهون الملتصقة بجدران المواسير وتكوّن طبقة تضيّق المجرى تدريجياً حتى تسدّه تماماً، وهي من أكثر أسباب انسداد مجاري المطابخ.",
  },
  {
    cause: "الزيوت",
    detail:
      "سكب الزيوت الساخنة في الحوض يخدع كثيرين لأنها سائلة، لكنها تبرد وتلتصق بالمواسير وتحتجز بقايا الطعام معها مكوّنة كتلة صلبة.",
  },
  {
    cause: "بقايا الطعام",
    detail:
      "فتات الأرز والخبز وقشور الخضار تتراكم في مصفاة الحوض وداخل الماسورة وتنتفخ بالماء لتسدّ مجرى المطبخ.",
  },
  {
    cause: "الشعر",
    detail:
      "يتشابك الشعر مع بقايا الصابون في بلاعات الحمام ليكوّن كتلاً تمنع تصريف الماء، وهي المشكلة الأشيع في الحمامات.",
  },
  {
    cause: "المناديل والمخلفات",
    detail:
      "المناديل المبللة وأعواد التنظيف والحفاضات لا تتحلل مثل ورق التواليت، وتسبب انسداداً سريعاً وعميقاً في المجرى الرئيسي.",
  },
  {
    cause: "الرمال والأتربة",
    detail:
      "بحكم مناخ الكويت تدخل الرمال والأتربة إلى بلاعات الساحات والمواقف وتترسب في القاع لتضيّق المجرى مع الوقت.",
  },
  {
    cause: "الترسبات الجيرية",
    detail:
      "عُسر المياه في الكويت يترك ترسبات جيرية على جدران المواسير القديمة تقلّل قطرها الداخلي وتزيد فرص الانسداد المتكرر.",
  },
  {
    cause: "المواسير القديمة وأخطاء التركيب",
    detail:
      "المواسير المتآكلة أو ذات الميول الخاطئة أو الوصلات غير المحكمة تحتجز الفضلات وتتسبب في انسدادات متكررة يصعب حلها دون فحص دقيق.",
  },
];

const methods = [
  {
    title: "السوستة (السلك اليدوي)",
    desc: "أداة مرنة تُدفع داخل الماسورة لتفتيت الانسدادات القريبة والبسيطة في الأحواض والبلاعات.",
    pros: "سريعة واقتصادية ومناسبة للانسدادات السطحية دون الحاجة لمعدات كبيرة.",
  },
  {
    title: "ماكينة التسليك الكهربائية",
    desc: "سلك كهربائي دوّار بقوة عالية يخترق الانسدادات العنيدة والجذور والترسبات في المجاري الرئيسية.",
    pros: "تعالج الانسدادات العميقة والصلبة التي تعجز عنها الأدوات اليدوية.",
  },
  {
    title: "ضغط المياه (الجت)",
    desc: "ضخ الماء بضغط عالٍ جداً داخل المواسير لإزالة الدهون والترسبات وغسل جدران الماسورة بالكامل.",
    pros: "تنظيف شامل من الجذور بدون تكسير، ويعيد للماسورة قطرها الأصلي.",
  },
  {
    title: "الفحص بالكاميرات",
    desc: "إدخال كاميرا داخل الشبكة لرؤية مكان الانسداد وسببه بدقة قبل اختيار طريقة العلاج المناسبة.",
    pros: "تشخيص دقيق يمنع التكسير العشوائي ويحدد المشكلة من أول مرة.",
  },
  {
    title: "الكاميرا الحرارية وكشف التسرب",
    desc: "تحديد مواقع التسرب أو الانسداد المخفي داخل الجدران والأرضيات دون الحاجة إلى تكسير استكشافي.",
    pros: "تكشف المشكلة المخفية وتحافظ على أرضياتك وجدرانك.",
  },
  {
    title: "التنظيف الدوري الوقائي",
    desc: "غسيل الشبكة وتنظيف البلاعات بشكل دوري قبل حدوث الانسداد للحفاظ على تصريف سليم.",
    pros: "يقي من الطوارئ ويطيل عمر الشبكة ويوفر تكاليف الإصلاح.",
  },
];

const comparison = [
  {
    method: "السوستة اليدوية",
    best: "انسداد سطحي وبسيط",
    breaking: "لا",
    speed: "سريعة جداً",
  },
  {
    method: "ماكينة التسليك",
    best: "انسداد عنيد وجذور",
    breaking: "لا",
    speed: "متوسطة",
  },
  {
    method: "ضغط المياه (الجت)",
    best: "دهون وترسبات ومجرى رئيسي",
    breaking: "لا",
    speed: "متوسطة",
  },
  {
    method: "الفحص بالكاميرا",
    best: "تشخيص وتحديد المكان",
    breaking: "لا",
    speed: "سريعة",
  },
];

const steps = [
  {
    title: "استقبال الطلب",
    desc: "تتصل بنا أو تراسلنا واتساب على مدار الساعة، ونأخذ منك وصفاً مبدئياً للمشكلة.",
  },
  {
    title: "الوصول السريع",
    desc: "يصل فني تسليك مجاري الكويت إلى موقعك خلال وقت قصير مجهزاً بالمعدات اللازمة.",
  },
  {
    title: "الفحص والتشخيص",
    desc: "نحدد سبب الانسداد ومكانه بدقة، ونستخدم الكاميرا عند الحاجة قبل بدء العمل.",
  },
  {
    title: "تحديد السعر",
    desc: "نوضح لك طريقة العلاج والتكلفة بشكل صريح قبل البدء بدون أي رسوم خفية.",
  },
  {
    title: "التسليك بدون تكسير",
    desc: "نعالج الانسداد بالأداة المناسبة سواء السلك أو الماكينة أو ضغط المياه دون إتلاف المكان.",
  },
  {
    title: "اختبار الصرف والتسليم",
    desc: "نختبر انسياب المياه بالكامل وننظّف مكان العمل قبل أن نغادر لنسلّمك شبكة تعمل بكفاءة.",
  },
];

const whyCompany = [
  { title: "السرعة", desc: "استجابة فورية ووصول خلال وقت قصير في حالات الطوارئ." },
  { title: "الخبرة", desc: "فنيون متخصصون يشخّصون المشكلة بدقة ويحلّونها من الجذور." },
  { title: "المعدات الحديثة", desc: "أجهزة سلك وضغط مياه وكاميرات فحص تفتح أعتى الانسدادات." },
  { title: "الضمان", desc: "ضمان على الخدمة يمنحك راحة البال بعد انتهاء العمل." },
  { title: "الأسعار الواضحة", desc: "سعر معلن قبل البدء بلا رسوم خفية ولا مفاجآت." },
  { title: "خدمة الطوارئ", desc: "تغطية على مدار 24 ساعة طوال أيام الأسبوع." },
];

const prices = [
  { service: "تسليك حوض مطبخ أو مغسلة", range: "من 10 د.ك", note: "حسب شدة الانسداد" },
  { service: "تسليك بلاعة حمام", range: "من 10 د.ك", note: "يشمل إزالة الترسبات" },
  { service: "تسليك مرحاض (كرسي)", range: "من 15 د.ك", note: "حسب عمق الانسداد" },
  { service: "تسليك مجرى رئيسي", range: "من 20 د.ك", note: "بماكينة أو ضغط مياه" },
  { service: "تسليك بضغط المياه (جت)", range: "من 25 د.ك", note: "غسيل شامل للشبكة" },
  { service: "فحص بالكاميرا", range: "حسب الحالة", note: "لتحديد الانسداد المخفي" },
];

const tips = [
  "اسكب ماءً ساخناً في أحواض المطبخ أسبوعياً لإذابة الدهون قبل تراكمها.",
  "استخدم مصافي بلاستيكية فوق البلاعات لحجز الشعر وبقايا الطعام ونظّفها باستمرار.",
  "تخلّص من الزيوت والدهون في وعاء منفصل ولا تسكبها في الحوض نهائياً.",
  "لا ترمِ المناديل المبللة أو أعواد التنظيف في المرحاض حتى لو كُتب عليها قابلة للتحلل.",
  "نظّف بلاعات الساحات من الرمال والأتربة دورياً خاصة بعد العواصف الترابية.",
  "أجرِ صيانة وقائية دورية للشبكة الرئيسية لتفادي الانسداد المفاجئ.",
];

const mistakes = [
  "الإفراط في المواد الكيميائية القوية التي تتلف المواسير دون حل المشكلة الجذرية.",
  "تجاهل العلامات المبكرة مثل بطء التصريف حتى يتحول إلى انسداد كامل.",
  "استخدام أدوات حادة قد تثقب الماسورة أو تدفع الانسداد أعمق.",
  "رمي بقايا البناء أو الرمال في البلاعات أثناء التنظيف أو الترميم.",
  "الاعتماد على حلول مؤقتة متكررة بدلاً من معالجة السبب الجذري للانسداد.",
  "تأجيل الاتصال بالفني عند ارتجاع المياه في أكثر من نقطة داخل المنزل.",
];

const serviceAreas = [
  { name: "العاصمة", slug: null, desc: "نغطي مناطق العاصمة السكنية والتجارية بخدمة تسليك مجاري سريعة على مدار الساعة." },
  { name: "حولي", slug: "hawalli", desc: "من أكثر المناطق ازدحاماً، ونصل إليها بسرعة لحل انسداد الشقق والعمارات والمحلات." },
  { name: "السالمية", slug: "salmiya", desc: "خدمة طوارئ سريعة للمباني السكنية والتجارية الكثيفة في السالمية." },
  { name: "الفروانية", slug: "farwaniya", desc: "نتعامل مع انسدادات المنازل والفلل والمحلات في الفروانية بأحدث الأجهزة." },
  { name: "الأحمدي", slug: "ahmadi", desc: "تغطية كاملة لمنطقة الأحمدي وضواحيها بفريق متخصص وأسعار واضحة." },
  { name: "الجهراء", slug: "jahra", desc: "نصل إلى الجهراء وضواحيها لفتح المجاري وحل الانسدادات بدون تكسير." },
  { name: "مبارك الكبير", slug: "mubarak-kabeer", desc: "خدمة تسليك مجاري للفلل والمنازل في مبارك الكبير على مدار 24 ساعة." },
  { name: "خيطان", slug: null, desc: "نخدم خيطان بجميع قطاعاتها بخدمة فتح انسدادات سريعة وموثوقة." },
  { name: "صباح السالم", slug: "sabah-al-salem", desc: "فريقنا قريب من صباح السالم ويصل إليك في أسرع وقت." },
  { name: "الفحيحيل", slug: "fahaheel", desc: "خدمة تسليك مجاري متكاملة في الفحيحيل والمناطق المجاورة لها." },
  { name: "الفنطاس", slug: "fintas", desc: "نعالج انسدادات المطابخ والحمامات والمجاري الرئيسية في الفنطاس." },
  { name: "العقيلة", slug: "egaila", desc: "تغطية سريعة لمنطقة العقيلة بفنيين محترفين ومعدات حديثة." },
  { name: "الرميثية", slug: "rumaithiya", desc: "خدمة تسليك مجاري الرميثية للشقق والفلل بضمان على الخدمة." },
  { name: "بيان", slug: "bayan", desc: "نصل إلى بيان بسرعة لحل انسدادات الفلل والمجاري الرئيسية." },
  { name: "مشرف", slug: "mishref", desc: "خدمة احترافية لفلل ومنازل مشرف بأحدث أجهزة التسليك." },
  { name: "المنقف", slug: "mangaf", desc: "تغطية كاملة للمنقف وضواحيها بخدمة طوارئ على مدار الساعة." },
];

const whyUs = [
  "خدمة 24 ساعة طوال أيام الأسبوع",
  "سرعة الوصول في حالات الطوارئ",
  "أحدث المعدات وأجهزة الفحص بالكاميرا",
  "فنيون محترفون ومدرّبون",
  "أسعار مناسبة وواضحة قبل البدء",
  "ضمان حقيقي على الخدمة",
  "تغطية جميع مناطق الكويت",
];

const faqs = [
  {
    question: "ما هي أفضل شركة تسليك مجاري الكويت؟",
    answer:
      "أفضل شركة تسليك مجاري الكويت هي التي تجمع بين سرعة الاستجابة والخبرة والمعدات الحديثة والأسعار الواضحة والضمان على الخدمة، وتعمل على مدار 24 ساعة في جميع المناطق.",
  },
  {
    question: "كم سعر تسليك المجاري في الكويت؟",
    answer:
      "يختلف السعر حسب نوع الانسداد ومكانه وطريقة العلاج، ويبدأ غالباً من 10 دنانير للحالات البسيطة. نوفر لك تقييماً وسعراً واضحاً قبل بدء العمل بدون رسوم خفية.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أجهزة السلك وضغط المياه والكاميرات التي تفتح الانسداد وتزيل الترسبات بدون أي تكسير للأرضيات أو المواسير في معظم الحالات.",
  },
  {
    question: "هل تقدمون خدمة تسليك مجاري 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة طوارئ تسليك مجاري الكويت على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة ليلاً.",
  },
  {
    question: "كم يستغرق وقت تسليك المجاري؟",
    answer:
      "غالباً يتم حل المشكلة خلال 30 إلى 60 دقيقة حسب شدة الانسداد ومكانه، وقد تحتاج المجاري الرئيسية وقتاً أطول قليلاً.",
  },
  {
    question: "ما أسباب انسداد المجاري المتكرر؟",
    answer:
      "أكثر الأسباب شيوعاً تراكم الدهون والزيوت في المطبخ، والشعر وبقايا الصابون في الحمام، والمناديل والأجسام الصلبة في المرحاض، إضافة إلى الترسبات في المواسير القديمة.",
  },
  {
    question: "كيف أسلك المجاري بنفسي في المنزل؟",
    answer:
      "للانسداد الخفيف جرّب سكب ماء ساخن، أو استخدام مكبس المطاط (البلانجر)، أو خليط صودا الخبز والخل. وإذا استمرت المشكلة استعن بفني متخصص لتجنب تفاقمها.",
  },
  {
    question: "هل تشمل الخدمة المطابخ والحمامات؟",
    answer:
      "نعم، نقدم تسليك مجاري المطابخ والحمامات وتنظيف البلاعات وفتح المجاري الرئيسية للمنازل والفلل والشركات.",
  },
  {
    question: "هل تتعاملون مع انسداد المجرى الرئيسي؟",
    answer:
      "نعم، نتعامل مع انسداد المجاري الرئيسية والفرعية باستخدام ماكينة التسليك الكهربائية وضغط المياه، مع فحص بالكاميرا عند الحاجة.",
  },
  {
    question: "ما الفرق بين السلك وضغط المياه في التسليك؟",
    answer:
      "السلك يفتّت الانسداد ويخترقه، بينما ضغط المياه يغسل جدران الماسورة ويزيل الدهون والترسبات بالكامل، ويُختار الأنسب حسب حالة الانسداد.",
  },
  {
    question: "هل تنظّفون البلاعات المسدودة؟",
    answer:
      "نعم، نقدم خدمة تسليك بلاعات الكويت للحمامات والمطابخ والساحات، ونزيل الشعر والدهون والرمال والترسبات التي تسدّها.",
  },
  {
    question: "هل تسليك المجاري بدون تكسير مضمون؟",
    answer:
      "في معظم الحالات نفتح الانسداد بدون تكسير باستخدام الأجهزة الحديثة، ونقدم ضماناً على الخدمة بعد اختبار انسياب الصرف بالكامل.",
  },
  {
    question: "متى يجب الاتصال بفني تسليك مجاري؟",
    answer:
      "عند تكرار الانسداد رغم التنظيف، أو ظهور روائح كريهة، أو ارتجاع المياه في أكثر من نقطة، أو طفح المجاري، فهذه علامات على انسداد عميق يحتاج تدخلاً محترفاً فوراً.",
  },
  {
    question: "هل خدمة تسليك المجاري متوفرة في كل مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت من العاصمة وحولي والسالمية إلى الأحمدي والجهراء والفحيحيل والمنقف وغيرها بنفس سرعة الاستجابة.",
  },
  {
    question: "هل تستخدمون الكاميرا لتحديد الانسداد؟",
    answer:
      "نعم، نستخدم كاميرا الفحص لرؤية مكان الانسداد وسببه بدقة داخل الشبكة قبل اختيار طريقة العلاج، مما يمنع التكسير العشوائي.",
  },
  {
    question: "هل المواد الكيميائية آمنة لتسليك المجاري؟",
    answer:
      "الإفراط في المواد الكيميائية القوية قد يتلف المواسير ولا يحل المشكلة الجذرية، لذا نفضّل التسليك الميكانيكي الاحترافي الأكثر أماناً وفعالية.",
  },
  {
    question: "كم تكلفة تسليك المجرى الرئيسي؟",
    answer:
      "تبدأ تكلفة تسليك المجرى الرئيسي غالباً من 20 ديناراً وتختلف حسب طول الشبكة وشدة الانسداد وطريقة العلاج، ونحددها لك بوضوح بعد المعاينة.",
  },
  {
    question: "هل تقدمون صيانة دورية لشبكة الصرف؟",
    answer:
      "نعم، نوفر خدمة تنظيف وصيانة دورية للشبكة والبلاعات للوقاية من الانسداد المتكرر والحفاظ على تصريف سليم على مدار العام.",
  },
  {
    question: "كيف أتجنب انسداد مجاري المطبخ؟",
    answer:
      "تجنب سكب الزيوت والدهون في الحوض، واستخدم مصفاة لحجز بقايا الطعام، واسكب ماءً ساخناً بعد غسل الأواني الدهنية، ونظّف البلاعة دورياً.",
  },
  {
    question: "هل يوجد ضمان على خدمة تسليك المجاري؟",
    answer:
      "نعم، نقدم ضماناً على الخدمة بعد التأكد من انسياب الصرف بالكامل، وفي حال عودة المشكلة خلال فترة الضمان نعاود المعالجة دون تكلفة إضافية.",
  },
];

const gallery = [
  { src: "/drain-cleaning/تسليك-مجاري.webp", alt: "تسليك مجاري الكويت بأحدث الأجهزة" },
  { src: "/drain-cleaning/تسليك-مجاري-المطابخ-والحمامات.webp", alt: "تسليك مجاري المطابخ والحمامات في الكويت" },
  { src: "/drain-cleaning/تسليك-بلوعات.webp", alt: "تسليك بلاعات الكويت وإزالة الترسبات" },
  { src: "/drain-cleaning/تسليك-حمامات.webp", alt: "تسليك مجاري الحمامات بدون تكسير" },
  { src: "/drain-cleaning/تسليك-منازل.webp", alt: "تسليك مجاري المنازل والفلل في الكويت" },
  { src: "/drain-cleaning/تنظيف-جورة.webp", alt: "تنظيف وشفط الجور والبيارات في الكويت" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      headline: "تسليك مجاري الكويت | الدليل الشامل وخدمة 24 ساعة بدون تكسير",
      description:
        "دليل شامل عن تسليك مجاري الكويت يغطي علامات وأسباب الانسداد وطرق التسليك والأسعار ونصائح الوقاية، مع خدمة فتح انسدادات 24 ساعة.",
      image: `${SITE_URL}${COVER_IMAGE}`,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "ar",
      mainEntityOfPage: PAGE_URL,
      articleSection: "تسليك المجاري",
      author: { "@id": `${SITE_URL}/#business` },
      publisher: { "@id": `${SITE_URL}/#business` },
      keywords: [
        "تسليك مجاري الكويت",
        "تسليك بلاعات الكويت",
        "فتح المجاري الكويت",
        "أسعار تسليك مجاري الكويت",
      ].join("، "),
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تسليك مجاري الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات الصرف الصحي",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "خدمة تسليك مجاري الكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وتسليك البلاعات وحل انسدادات الصرف الصحي بأحدث الأجهزة.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "KWD",
        lowPrice: "10",
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات تسليك المجاري",
        itemListElement: [
          "تسليك مجاري المطابخ",
          "تسليك مجاري الحمامات",
          "تسليك البلاعات",
          "فتح المجاري الرئيسية",
          "تسليك بضغط المياه",
          "الفحص بالكاميرا",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "خدمات الكويت لتسليك المجاري",
      url: SITE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      telephone: PHONE_NUMBER,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "الكويت" },
      address: { "@type": "PostalAddress", addressCountry: "KW" },
      openingHoursSpecification: {
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
        { "@type": "ListItem", position: 2, name: "المدونة", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "تسليك مجاري الكويت", item: PAGE_URL },
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

export default function DrainCleaningKuwaitBlogPage() {
  return (
    <main className="flex-1" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Hero */}
        <header className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
            <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-sky-700">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-sky-700">المدونة</Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-slate-700">تسليك المجاري</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
              خدمة طوارئ 24 ساعة في جميع مناطق الكويت
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              تسليك مجاري الكويت: الدليل الشامل وخدمة فتح الانسدادات 24 ساعة
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              يُعد انسداد المجاري من أكثر المشاكل المنزلية إلحاحاً في الكويت، إذ
              قد يتحول خلال دقائق إلى حالة طوارئ تسبب تجمع المياه والروائح الكريهة
              وتعطّل الحياة اليومية. وفي هذا الدليل نشرح لك كل ما يخص{" "}
              <strong>تسليك مجاري الكويت</strong>: علاماته وأسبابه وطرق علاجه
              وأسعاره ونصائح الوقاية منه، ونوضح لك كيف تحصل على خدمة فني تسليك
              مجاري الكويت بأحدث الأجهزة وبدون تكسير على مدار الساعة.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="relative -mt-2 mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl ring-1 ring-slate-900/5">
            <Image
              src={COVER_IMAGE}
              alt={COVER_ALT}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-16 sm:px-8">
          {/* Table of contents */}
          <nav
            aria-label="محتويات الصفحة"
            className="mb-12 rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
          >
            <h2 className="text-base font-extrabold text-slate-900">محتويات الصفحة</h2>
            <ol className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-2 text-slate-600 transition hover:text-sky-700"
                  >
                    <span className="font-bold text-sky-600">{i + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What is the service */}
          <section id="what" className="scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              ما هي خدمة تسليك مجاري الكويت؟
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                خدمة <strong>تسليك مجاري الكويت</strong> هي عملية متخصصة لفتح
                انسدادات شبكة الصرف الصحي وإعادة انسياب المياه بشكل طبيعي، سواء في
                أحواض المطابخ أو بلاعات الحمامات أو المراحيض أو المجاري الرئيسية
                للمنازل والفلل والشركات. وتشمل الخدمة تشخيص سبب الانسداد ومكانه
                بدقة، ثم معالجته بالأداة المناسبة من سلك يدوي أو ماكينة تسليك أو
                ضغط مياه، وصولاً إلى اختبار الشبكة والتأكد من حل المشكلة نهائياً.
              </p>
              <p>
                تعتبر خدمة تسليك المجاري في الكويت من أكثر الخدمات الفنية طلباً
                على مدار العام، نظراً لكثافة المباني وعُسر المياه الذي يزيد من
                الترسبات داخل المواسير. والأهم أن حل المشكلة بسرعة يوفر عليك
                تكاليف أكبر لاحقاً؛ فالانسداد البسيط الذي يُهمل قد يتحول إلى طفح
                للمجاري داخل المنزل وتلف للأرضيات والجدران. لذلك يعتمد فني تسليك
                مجاري الكويت المحترف على أحدث الأجهزة التي تحل الانسداد بدون تكسير،
                مع سرعة استجابة تصل إليك في أي وقت وفي جميع المناطق.
              </p>
            </div>
          </section>

          {/* Signs */}
          <section id="signs" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              علامات انسداد المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              نادراً ما يحدث انسداد المجاري فجأة؛ فغالباً ما يرسل المنزل إشارات
              تحذيرية قبل أيام أو أسابيع. ومعرفة هذه العلامات تساعدك على التدخل
              مبكراً وتجنّب حالات الطوارئ المكلفة. إليك أبرز علامات انسداد المجاري
              التي يجب الانتباه لها:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {signs.map((sign) => (
                <div
                  key={sign.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
                >
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {sign.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{sign.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Causes */}
          <section id="causes" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              أسباب انسداد المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              فهم أسباب انسداد المجاري هو الخطوة الأولى للوقاية منه وتوفير تكاليف
              الإصلاح المتكررة. يوضح الجدول التالي أهم الأسباب الشائعة لانسداد
              المجاري في المنازل والفلل بالكويت:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
              <table className="w-full min-w-[520px] text-right text-base">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-5 py-4 font-extrabold">السبب</th>
                    <th className="px-5 py-4 font-extrabold">التفاصيل</th>
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
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              طرق تسليك المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              تختلف طريقة تسليك المجاري حسب نوع الانسداد وموقعه وشدته. ويعتمد الفني
              المحترف على تشخيص الحالة أولاً ثم اختيار الأداة الأنسب. وفيما يلي أهم
              طرق تسليك المجاري في الكويت ومميزات كل طريقة:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
                >
                  <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{m.desc}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm font-semibold text-emerald-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {m.pros}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-extrabold text-slate-900">
              مقارنة بين طرق التسليك
            </h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
              <table className="w-full min-w-[560px] text-right text-base">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-5 py-4 font-extrabold">الطريقة</th>
                    <th className="px-5 py-4 font-extrabold">الأنسب لـ</th>
                    <th className="px-5 py-4 font-extrabold">تحتاج تكسير؟</th>
                    <th className="px-5 py-4 font-extrabold">السرعة</th>
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
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              خطوات تنفيذ الخدمة
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              نتبع خطوات واضحة من لحظة اتصالك وحتى انتهاء العمل لضمان حل المشكلة من
              جذورها وبأعلى جودة:
            </p>
            <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          </section>

          {/* Why a specialized company */}
          <section id="why-company" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              لماذا تختار شركة متخصصة؟
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              قد تنجح الحلول المنزلية مع الانسداد الخفيف، لكن الاعتماد على شركة
              تسليك مجاري الكويت المتخصصة يمنحك حلاً جذرياً وآمناً يوفر عليك الوقت
              والمال. إليك أهم ما يميز الشركة المحترفة:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyCompany.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 ring-1 ring-slate-900/5"
                >
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Prices */}
          <section id="prices" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              أسعار تسليك مجاري الكويت
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              تختلف أسعار تسليك مجاري الكويت حسب نوع الانسداد ومكانه وطريقة العلاج
              وحالة الشبكة. والجدول التالي يوضح أسعاراً تقريبية للاسترشاد فقط، مع
              التأكيد أن السعر النهائي يُحدَّد بوضوح بعد المعاينة وقبل بدء العمل بلا
              رسوم خفية:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
              <table className="w-full min-w-[560px] text-right text-base">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-5 py-4 font-extrabold">الخدمة</th>
                    <th className="px-5 py-4 font-extrabold">السعر التقريبي</th>
                    <th className="px-5 py-4 font-extrabold">ملاحظات</th>
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
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              * الأسعار تقديرية وقابلة للتغيير حسب حالة كل موقع. تواصل معنا للحصول
              على سعر دقيق بعد المعاينة.
            </p>
          </section>

          {/* Tips */}
          <section id="tips" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              نصائح للحفاظ على المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              الوقاية دائماً أرخص وأسهل من العلاج. باتباع عادات بسيطة يمكنك تقليل
              فرص الانسداد بشكل كبير والحفاظ على شبكة صرف سليمة لسنوات:
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
          </section>

          {/* Mistakes */}
          <section id="mistakes" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              أخطاء يجب تجنبها
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              بعض المحاولات الخاطئة تزيد المشكلة سوءاً أو تتلف المواسير. تجنّب
              الأخطاء التالية عند التعامل مع انسداد المجاري:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {mistakes.map((mistake) => (
                <li
                  key={mistake}
                  className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-rose-900/5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-extrabold">
                    ✕
                  </span>
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          {/* When to call */}
          <section id="when-call" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              متى يجب الاتصال بفني؟
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                إذا تكرر الانسداد رغم محاولات التنظيف، أو ظهرت روائح كريهة مستمرة،
                أو حدث ارتجاع للمياه في أكثر من نقطة، أو بدأت المجاري بالطفح، فهذه
                علامات على انسداد عميق يحتاج تدخلاً محترفاً فورياً. تجاهل هذه
                العلامات يحوّل مشكلة بسيطة إلى طوارئ مكلفة قد تسبب فيضان مياه الصرف
                داخل المنزل.
              </p>
              <p>
                عند ظهور أي من هذه الحالات، لا تتردد في الاتصال بفني تسليك مجاري
                الكويت مباشرة. فالتدخل المبكر يوفر عليك الوقت والمال ويحمي منزلك من
                الأضرار، خاصة أن خدمتنا متاحة على مدار 24 ساعة للوصول إليك بأسرع
                وقت.
              </p>
            </div>
          </section>

          {/* Gallery */}
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              من أعمالنا في تسليك المجاري
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 ring-1 ring-slate-900/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Areas */}
          <section id="areas" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              المناطق التي نخدمها
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              نغطي جميع مناطق الكويت بخدمة تسليك مجاري سريعة على مدار الساعة. أينما
              كنت، يصل إليك فريقنا بأسرع وقت:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {area.slug ? (
                      <Link
                        href={`/drain-cleaning-${area.slug}`}
                        className="text-sky-700 underline-offset-4 hover:underline"
                      >
                        تسليك مجاري {area.name}
                      </Link>
                    ) : (
                      <>تسليك مجاري {area.name}</>
                    )}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{area.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              تعرّف على تفاصيل خدمتنا الرئيسية في{" "}
              <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
                صفحة تسليك مجاري الكويت
              </Link>
              ، أو تصفّح{" "}
              <Link href="/areas" className="font-bold text-slate-700 underline-offset-4 hover:underline">
                جميع مناطق الخدمة
              </Link>
              .
            </p>
          </section>

          {/* Why us */}
          <section id="why-us" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              لماذا نحن؟
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyUs.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-base font-bold text-slate-800 shadow-sm ring-1 ring-slate-900/5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              الأسئلة الشائعة عن تسليك مجاري الكويت
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-bold text-slate-900 marker:content-none sm:px-6">
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
          </section>

          {/* Conclusion + CTA */}
          <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              اطلب خدمة تسليك مجاري الكويت الآن
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              لا تدع انسداد المجاري يتحول إلى طارئ يعطّل منزلك. فريق فني تسليك
              مجاري الكويت جاهز على مدار 24 ساعة لحل المشكلة بأحدث الأجهزة وبدون
              تكسير وبأسعار مناسبة وضمان على الخدمة. اتصل بنا أو راسلنا واتساب
              ونصل إليك بأسرع وقت في جميع مناطق الكويت.
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
          </section>

          {/* Useful links */}
          <section className="mt-12 flex flex-wrap gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-sm">
            <span className="font-bold text-slate-900">روابط مفيدة:</span>
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>
            <Link href="/kitchen-bathroom-drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري المطابخ والحمامات
            </Link>
            <Link href="/drain-cleaning-prices-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              أسعار تسليك المجاري
            </Link>
            <Link href="/blog" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              المدونة
            </Link>
            <Link href="/contact-us" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              تواصل معنا
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
