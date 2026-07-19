import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/areas";

const PAGE_PATH = "/blog/drain-cleaning-in-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/تسليك-مجاري-الكويت.webp";
const COVER_ALT = "تسليك المجاري في الكويت بأحدث أجهزة الضغط والكاميرات وبدون تكسير";
const DATE_PUBLISHED = "2026-07-16";
const DATE_MODIFIED = "2026-07-16";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تسليك المجاري في الكويت | فني 24 ساعة بدون تكسير",
  description:
    "دليل تسليك المجاري في الكويت: علامات الانسداد وأسبابه وطرق العلاج والأسعار والوقاية، مع فني فتح المجاري 24 ساعة بدون تكسير في جميع مناطق الكويت.",
  keywords: [
    "تسليك المجاري في الكويت",
    "شركة تسليك مجاري الكويت",
    "فني تسليك مجاري",
    "تسليك مجاري السالمية",
    "تسليك مجاري حولي",
    "تسليك مجاري الفروانية",
    "فتح المجاري",
    "تنظيف المجاري",
    "تسليك بلاعات",
    "تسليك مواسير الصرف",
    "شفط انسداد المجاري",
    "صيانة شبكات الصرف",
    "سباك الكويت",
    "سباك صحي الكويت",
    "خدمات السباكة بالكويت",
    "أسعار تسليك المجاري في الكويت",
    "أفضل شركة تسليك مجاري في الكويت",
    "خدمات تسليك المجاري 24 ساعة",
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
    title: "تسليك المجاري في الكويت | الدليل الكامل وخدمة 24 ساعة",
    description:
      "كل ما تحتاج معرفته عن تسليك المجاري في الكويت: العلامات والأسباب وطرق الفتح والأسعار والوقاية، مع فني تسليك مجاري 24 ساعة بدون تكسير.",
    siteName: "خدمات الكويت",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك المجاري في الكويت | الدليل الكامل وخدمة 24 ساعة",
    description:
      "دليل تسليك المجاري في الكويت: العلامات والأسباب وطرق الفتح والأسعار والوقاية مع خدمة فني 24 ساعة بدون تكسير.",
    images: [COVER_IMAGE],
  },
};

const toc = [
  { id: "what", label: "ما هي خدمة تسليك المجاري؟" },
  { id: "signs", label: "علامات انسداد المجاري" },
  { id: "causes", label: "أسباب انسداد المجاري" },
  { id: "methods", label: "طرق تسليك المجاري ومتى تُستخدم" },
  { id: "no-chemicals", label: "لماذا لا يُنصح بالمواد الكيميائية؟" },
  { id: "why-company", label: "مميزات الاستعانة بشركة متخصصة" },
  { id: "steps", label: "خطوات تنفيذ الخدمة" },
  { id: "duration", label: "كم تستغرق عملية التسليك؟" },
  { id: "prices", label: "أسعار تسليك المجاري في الكويت" },
  { id: "prevention", label: "هل يمكن الوقاية من الانسداد؟" },
  { id: "areas", label: "المناطق التي نخدمها" },
  { id: "why-us", label: "لماذا تختارنا؟" },
  { id: "after-care", label: "نصائح بعد تسليك المجاري" },
  { id: "mistakes", label: "أخطاء يقع فيها أصحاب المنازل" },
  { id: "when-call", label: "متى يجب الاتصال بفني؟" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

const signs = [
  {
    title: "بطء تصريف المياه",
    desc: "تلاحظ أن الماء ينزل ببطء في حوض المطبخ أو المغسلة أو البانيو ويبقى راكداً بعض الوقت. هذه أول إشارة على بداية تراكم داخل الماسورة قبل أن يتحول التضيّق إلى انسداد كامل.",
  },
  {
    title: "رجوع المياه (الارتجاع)",
    desc: "صعود الماء من بلاعة الحمام عند تشغيل الغسالة، أو ارتفاع منسوب الماء في كرسي الحمام، يدل غالباً على انسداد في المجرى الرئيسي المشترك وليس في نقطة واحدة.",
  },
  {
    title: "الروائح الكريهة",
    desc: "خروج رائحة صرف من البلاعات أو المرحاض يعني تراكم فضلات وبكتيريا داخل المواسير. لا تزول هذه الرائحة بالمعطرات لأن مصدرها انسداد أعمق يحتاج تسليكاً.",
  },
  {
    title: "صوت فقاعات وغرغرة",
    desc: 'سماع صوت "قرقرة" عند نزول الماء يعني احتباس هواء داخل المواسير بسبب انسداد جزئي. علامة مبكرة يسهل علاجها لو تدخّلت بسرعة.',
  },
  {
    title: "انسداد الأحواض",
    desc: "توقف حوض المطبخ أو المغسلة عن السحب نهائياً، وغالباً يكون السبب تراكم الدهون وبقايا الطعام في مصفاة الحوض وأول جزء من الماسورة.",
  },
  {
    title: "انسداد الحمامات",
    desc: "امتلاء أرضية الحمام بالماء عند الاستحمام بسبب تجمّع الشعر وبقايا الصابون في سيفون الأرضية. من أكثر الحالات تكراراً في المنازل الكويتية.",
  },
  {
    title: "طفح المجاري",
    desc: "خروج مياه الصرف من البلاعات أو المناهل إلى أرضية المنزل أو الساحة الخارجية. هذه حالة طوارئ تستوجب الاتصال الفوري بفني تسليك مجاري قبل تلف الأرضيات.",
  },
];

const causes = [
  {
    cause: "الدهون المتراكمة",
    detail:
      "أكثر أسباب انسداد المطابخ. تلتصق الدهون ببرودة الماسورة وتتصلب طبقة فوق طبقة حتى تسدّ المجرى تماماً مع مرور الأسابيع.",
  },
  {
    cause: "الزيوت المسكوبة",
    detail:
      "الزيت الساخن يبدو سائلاً وقت السكب لكنه يبرد داخل الماسورة ويلتصق ويحتجز معه بقايا الطعام مكوّناً كتلة صلبة يصعب إذابتها.",
  },
  {
    cause: "بقايا الطعام",
    detail:
      "فتات الأرز والمعكرونة والخبز وقشور الخضار تنتفخ بالماء وتتجمع خلف أي تضيّق في الماسورة لتسدّ حوض المطبخ سريعاً.",
  },
  {
    cause: "الشعر",
    detail:
      "يتشابك الشعر مع الصابون ليكوّن كتلة إسفنجية تسدّ بلاعات الحمام. المشكلة الأشيع في حمامات الشقق والفلل على حدٍّ سواء.",
  },
  {
    cause: "المناديل والمخلفات",
    detail:
      "المناديل المبللة وأعواد التنظيف والفوط لا تتحلل مثل ورق التواليت حتى لو كُتب عليها «قابلة للتحلل»، وتسبب انسداداً عميقاً في المجرى الرئيسي.",
  },
  {
    cause: "الرمال والأتربة",
    detail:
      "بحكم مناخ الكويت والعواصف الترابية تدخل الرمال إلى بلاعات الساحات والمواقف وتترسب في القاع لتضيّق المجرى تدريجياً.",
  },
  {
    cause: "جذور الأشجار",
    detail:
      "في الفلل ذات الحدائق تنمو جذور الأشجار بحثاً عن الرطوبة وتخترق الوصلات والشروخ في مواسير الصرف الخارجية وتسدّها بمرور الوقت.",
  },
  {
    cause: "المواسير القديمة",
    detail:
      "تتآكل المواسير القديمة وتتكوّن على جدرانها ترسبات جيرية بسبب عُسر مياه الكويت، فيقلّ قطرها الداخلي وتزيد فرص الانسداد المتكرر.",
  },
  {
    cause: "سوء التركيب",
    detail:
      "الميول الخاطئة أو الوصلات غير المحكمة أو الأقطار غير المناسبة تحبس الفضلات وتسبب انسدادات متكررة يصعب حلها دون فحص هندسي دقيق.",
  },
];

const methods = [
  {
    title: "التسليك اليدوي والمكبس (البلانجر)",
    desc: "استخدام مكبس المطاط أو أدوات يدوية بسيطة لدفع الانسداد السطحي في الأحواض والمراحيض القريبة.",
    when: "للانسداد الخفيف والسطحي في نقطة واحدة.",
  },
  {
    title: "السوستة (السلك اليدوي)",
    desc: "سلك مرن يُدفع داخل الماسورة ويُدار لتفتيت الانسداد القريب وسحبه للخارج.",
    when: "لانسدادات الأحواض والبلاعات القريبة نسبياً.",
  },
  {
    title: "ماكينة التسليك الكهربائية",
    desc: "سلك دوّار بمحرك قوي يخترق الانسدادات العنيدة والجذور والترسبات في المجاري الرئيسية.",
    when: "للانسداد العميق والصلب والجذور في المجرى الرئيسي.",
  },
  {
    title: "ضغط المياه (الجت / الووتر جت)",
    desc: "ضخ ماء بضغط عالٍ جداً يغسل جدران الماسورة بالكامل ويزيل الدهون والترسبات.",
    when: "لإزالة الدهون والترسبات وتنظيف المجرى الرئيسي بالكامل.",
  },
  {
    title: "الفحص بالكاميرات",
    desc: "كاميرا صغيرة تدخل داخل الشبكة لعرض مكان الانسداد وسببه على شاشة قبل بدء العلاج.",
    when: "للتشخيص الدقيق وتحديد مكان الانسداد المخفي قبل أي تكسير.",
  },
  {
    title: "الشفط والمواد الآمنة",
    desc: "شفط المياه والفضلات المتجمعة بسيارة شفط، مع استخدام منظفات إنزيمية آمنة على المواسير.",
    when: "لطفح المجاري وتنظيف البيارات وصيانة الشبكة دورياً.",
  },
];

const comparison = [
  {
    method: "المكبس والسلك اليدوي",
    best: "انسداد سطحي وبسيط",
    breaking: "لا",
    speed: "سريع جداً",
  },
  {
    method: "ماكينة التسليك",
    best: "انسداد عنيد وجذور",
    breaking: "لا",
    speed: "متوسط",
  },
  {
    method: "ضغط المياه (الجت)",
    best: "دهون وترسبات ومجرى رئيسي",
    breaking: "لا",
    speed: "متوسط",
  },
  {
    method: "الفحص بالكاميرا",
    best: "تشخيص وتحديد المكان",
    breaking: "لا",
    speed: "سريع",
  },
  {
    method: "الشفط بسيارة",
    best: "طفح المجاري والبيارات",
    breaking: "لا",
    speed: "متوسط",
  },
];

const companyBenefits = [
  { title: "حل جذري لا مؤقت", desc: "نعالج سبب الانسداد من أصله بدل الحلول السطحية التي تعود المشكلة بعدها بأيام." },
  { title: "معدات لا تملكها المنازل", desc: "ماكينات ضغط وكاميرات فحص وسيارات شفط تفتح ما تعجز عنه الأدوات المنزلية." },
  { title: "أمان على المواسير", desc: "الفني المحترف يختار الأداة المناسبة فلا يثقب الماسورة ولا يدفع الانسداد أعمق." },
  { title: "توفير في التكلفة", desc: "تشخيص صحيح من أول مرة يوفّر عليك تكرار المحاولات وتكاليف التكسير والترميم." },
  { title: "سرعة استجابة", desc: "وصول في حالات الطوارئ خلال وقت قصير على مدار الساعة." },
  { title: "ضمان على الخدمة", desc: "ضمان بعد اختبار انسياب الصرف يمنحك راحة البال." },
];

const steps = [
  {
    title: "استقبال الطلب",
    desc: "تتصل بنا أو تراسلنا واتساب على مدار الساعة وتصف لنا المشكلة ومكانها.",
  },
  {
    title: "الوصول السريع",
    desc: "يصل فني تسليك المجاري إلى موقعك بأسرع وقت مجهزاً بالمعدات اللازمة.",
  },
  {
    title: "المعاينة والتشخيص",
    desc: "نحدد نوع الانسداد ومكانه بدقة، ونستخدم الكاميرا عند الحاجة قبل بدء العمل.",
  },
  {
    title: "عرض السعر",
    desc: "نوضح لك طريقة العلاج والتكلفة بشكل صريح قبل البدء وبدون رسوم خفية.",
  },
  {
    title: "التسليك بدون تكسير",
    desc: "نفتح الانسداد بالأداة المناسبة من سلك أو ماكينة أو ضغط مياه دون إتلاف الأرضيات.",
  },
  {
    title: "الاختبار والتسليم",
    desc: "نختبر انسياب المياه بالكامل وننظّف مكان العمل قبل أن نسلّمك شبكة تعمل بكفاءة.",
  },
];

const prices = [
  { service: "تسليك حوض مطبخ أو مغسلة", range: "من 10 د.ك", note: "حسب شدة الانسداد" },
  { service: "تسليك بلاعة حمام", range: "من 10 د.ك", note: "يشمل إزالة الشعر والترسبات" },
  { service: "تسليك مرحاض (كرسي)", range: "من 15 د.ك", note: "حسب عمق الانسداد" },
  { service: "تسليك مجرى رئيسي", range: "من 20 د.ك", note: "بماكينة أو ضغط مياه" },
  { service: "تسليك بضغط المياه (جت)", range: "من 25 د.ك", note: "غسيل شامل للشبكة" },
  { service: "شفط طفح مجاري / بيارة", range: "حسب الحالة", note: "بسيارة شفط متخصصة" },
  { service: "فحص بالكاميرا", range: "حسب الحالة", note: "لتحديد الانسداد المخفي" },
];

const preventionTips = [
  {
    tip: "استخدم مصافي فوق البلاعات",
    how: "ضع مصفاة بلاستيكية على حوض المطبخ وبلاعة الحمام لحجز الشعر وبقايا الطعام، ونظّفها يومياً.",
  },
  {
    tip: "لا تسكب الزيوت في الحوض",
    how: "اجمع الزيوت والدهون في وعاء منفصل وتخلّص منه في القمامة، فالزيت أكبر عدوّ لمجاري المطبخ.",
  },
  {
    tip: "اسكب ماءً ساخناً أسبوعياً",
    how: "صبّ ماءً ساخناً في حوض المطبخ مرة أسبوعياً لإذابة الدهون قبل أن تتصلب وتتراكم.",
  },
  {
    tip: "لا ترمِ المناديل في المرحاض",
    how: "المناديل المبللة والفوط وأعواد التنظيف تُرمى في سلة المهملات لا في كرسي الحمام.",
  },
  {
    tip: "نظّف بلاعات الساحات دورياً",
    how: "أزل الرمال والأتربة من بلاعات المواقف والساحات خاصة بعد العواصف الترابية.",
  },
  {
    tip: "اعمل صيانة وقائية دورية",
    how: "اطلب غسيلاً وقائياً للشبكة الرئيسية كل فترة لتجنّب الانسداد المفاجئ وإطالة عمر المواسير.",
  },
];

const afterCare = [
  "شغّل الماء بغزارة عدة دقائق بعد التسليك للتأكد من انسياب الصرف بالكامل.",
  "التزم بالمصافي فوق البلاعات لمنع عودة الشعر وبقايا الطعام سريعاً.",
  "تجنب سكب الزيوت والدهون في الحوض حتى لا تتكرر المشكلة خلال أسابيع.",
  "اسكب ماءً ساخناً أسبوعياً في مجاري المطبخ للحفاظ على نظافتها.",
  "دوّن تاريخ آخر تسليك واطلب صيانة دورية قبل موسم الأمطار أو العزائم الكبيرة.",
  "احتفظ برقم فني تسليك المجاري لديك للطوارئ حتى تتصرف بسرعة عند أي علامة.",
];

const mistakes = [
  "الإفراط في المواد الكيميائية القوية التي تتلف المواسير دون حل المشكلة الجذرية.",
  "تجاهل العلامات المبكرة مثل بطء التصريف حتى يتحوّل إلى انسداد كامل أو طفح.",
  "استخدام أسلاك حديدية حادة قد تثقب الماسورة أو تدفع الانسداد أعمق.",
  "رمي بقايا البناء أو الجبس أو الرمال في البلاعات أثناء الترميم.",
  "الاعتماد على حلول مؤقتة متكررة بدلاً من معالجة السبب الجذري.",
  "تأجيل الاتصال بالفني عند ارتجاع المياه في أكثر من نقطة داخل المنزل.",
];

const serviceAreas = [
  { name: "العاصمة", slug: null, desc: "نغطي مناطق العاصمة السكنية والتجارية بخدمة تسليك مجاري سريعة على مدار الساعة، من الشرق والمرقاب إلى الدسمة والدعية." },
  { name: "حولي", slug: "hawalli", desc: "من أكثر مناطق الكويت ازدحاماً بالعمارات؛ نصل إلى حولي بسرعة لحل انسداد الشقق والمحلات والمجاري المشتركة." },
  { name: "السالمية", slug: "salmiya", desc: "خدمة تسليك مجاري السالمية للمباني السكنية والتجارية الكثيفة بأجهزة ضغط وكاميرات فحص حديثة." },
  { name: "الفروانية", slug: "farwaniya", desc: "نتعامل مع انسدادات المنازل والفلل والمحلات في الفروانية وأسواقها بخدمة فتح مجاري سريعة." },
  { name: "الأحمدي", slug: "ahmadi", desc: "تغطية كاملة لمنطقة الأحمدي وضواحيها بفريق متخصص ومعدات تسليك حديثة وأسعار واضحة." },
  { name: "الجهراء", slug: "jahra", desc: "نصل إلى الجهراء وضواحيها لفتح المجاري وتسليك البلاعات وحل الانسدادات بدون تكسير." },
  { name: "مبارك الكبير", slug: "mubarak-kabeer", desc: "خدمة تسليك مجاري للفلل والمنازل في مبارك الكبير وضواحيها على مدار 24 ساعة." },
  { name: "الفحيحيل", slug: "fahaheel", desc: "خدمة تسليك مجاري متكاملة في الفحيحيل والمناطق المجاورة للمنازل والمحلات." },
  { name: "صباح السالم", slug: "sabah-al-salem", desc: "فريقنا قريب من صباح السالم ويصل إليك في أسرع وقت لفتح انسدادات المطابخ والحمامات والمجرى الرئيسي." },
  { name: "الفنطاس", slug: "fintas", desc: "نعالج انسدادات الفلل والمنازل والمجاري الرئيسية في الفنطاس بأحدث أجهزة الضغط." },
  { name: "خيطان", slug: null, desc: "نخدم خيطان بجميع قطاعاتها بخدمة فتح انسدادات سريعة وموثوقة للشقق والعمارات." },
  { name: "الرميثية", slug: "rumaithiya", desc: "خدمة تسليك مجاري الرميثية للشقق والفلل مع ضمان حقيقي على الخدمة." },
  { name: "بيان", slug: "bayan", desc: "نصل إلى بيان بسرعة لحل انسدادات الفلل وتسليك المجاري الرئيسية بدون تكسير." },
  { name: "مشرف", slug: "mishref", desc: "خدمة احترافية لفلل ومنازل مشرف بأحدث أجهزة التسليك والفحص بالكاميرا." },
  { name: "العقيلة", slug: "egaila", desc: "تغطية سريعة لمنطقة العقيلة بفنيين محترفين ومعدات حديثة وأسعار مناسبة." },
  { name: "المنقف", slug: "mangaf", desc: "تغطية كاملة للمنقف وضواحيها بخدمة طوارئ تسليك مجاري على مدار الساعة." },
];

const whyUs = [
  "خدمة 24 ساعة طوال أيام الأسبوع",
  "سرعة الوصول في حالات الطوارئ",
  "فنيون محترفون ومدرّبون",
  "أحدث المعدات وأجهزة الفحص بالكاميرا",
  "أسعار مناسبة وواضحة قبل البدء",
  "ضمان حقيقي على الخدمة",
  "تسليك بدون تكسير في معظم الحالات",
  "تغطية جميع مناطق الكويت",
];

const faqs = [
  {
    question: "ما هي أفضل شركة تسليك مجاري في الكويت؟",
    answer:
      "أفضل شركة تسليك مجاري في الكويت هي التي تجمع بين سرعة الاستجابة وخبرة الفنيين والمعدات الحديثة والأسعار الواضحة والضمان على الخدمة، وتعمل على مدار 24 ساعة في جميع المناطق دون رسوم خفية.",
  },
  {
    question: "كم أسعار تسليك المجاري في الكويت؟",
    answer:
      "تختلف الأسعار حسب نوع الانسداد ومكانه وطريقة العلاج، وتبدأ غالباً من 10 دنانير للحالات البسيطة. نحدد لك السعر النهائي بوضوح بعد المعاينة وقبل بدء العمل بلا مفاجآت.",
  },
  {
    question: "كيف يتم تسليك المجاري المسدودة؟",
    answer:
      "يبدأ الفني بتشخيص نوع الانسداد ومكانه، ثم يختار الأداة المناسبة: مكبس أو سلك يدوي للانسداد السطحي، ماكينة تسليك للانسداد العنيد، أو ضغط المياه لغسل الدهون والترسبات، مع الفحص بالكاميرا عند الحاجة.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، في معظم الحالات نفتح الانسداد بأجهزة السلك وضغط المياه والكاميرا دون أي تكسير للأرضيات أو المواسير، ولا نلجأ للتكسير إلا في حالات نادرة جداً بعد تشخيص دقيق.",
  },
  {
    question: "هل تقدمون خدمة تسليك مجاري 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة طوارئ تسليك المجاري على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك حالات طفح المجاري وارتجاع المياه ليلاً.",
  },
  {
    question: "كم يستغرق تسليك المجاري؟",
    answer:
      "غالباً تُحل المشكلة خلال 30 إلى 60 دقيقة حسب شدة الانسداد ومكانه، وقد تحتاج المجاري الرئيسية أو حالات الجذور وقتاً أطول قليلاً.",
  },
  {
    question: "ما أسباب انسداد المجاري في الكويت؟",
    answer:
      "أكثر الأسباب شيوعاً تراكم الدهون والزيوت في المطبخ، والشعر وبقايا الصابون في الحمام، والمناديل والأجسام الصلبة في المرحاض، إضافة إلى الرمال والترسبات الجيرية الناتجة عن عُسر المياه في المواسير القديمة.",
  },
  {
    question: "كيف أسلك المجاري بنفسي في المنزل؟",
    answer:
      "للانسداد الخفيف جرّب سكب ماء ساخن، أو مكبس المطاط (البلانجر)، أو خليط صودا الخبز والخل. إذا استمرت المشكلة أو تكررت فاستعن بفني متخصص لتجنب تفاقمها أو إتلاف المواسير.",
  },
  {
    question: "هل المواد الكيميائية آمنة لتسليك المجاري؟",
    answer:
      "الإفراط في المواد الكيميائية القوية يتلف المواسير خاصة القديمة والبلاستيكية، وقد يسبب حروقاً ولا يحل الانسداد الجذري. لذلك نفضّل التسليك الميكانيكي وضغط المياه الأكثر أماناً وفعالية.",
  },
  {
    question: "هل تنظّفون البلاعات المسدودة؟",
    answer:
      "نعم، نقدم خدمة تسليك البلاعات للحمامات والمطابخ والساحات، ونزيل الشعر والدهون والرمال والترسبات التي تسدّها ونعيد لها كفاءة التصريف.",
  },
  {
    question: "هل تتعاملون مع انسداد المجرى الرئيسي وطفح المجاري؟",
    answer:
      "نعم، نتعامل مع انسداد المجاري الرئيسية وطفح المجاري باستخدام ماكينة التسليك وضغط المياه وسيارة الشفط، مع الفحص بالكاميرا لتحديد مكان الانسداد بدقة.",
  },
  {
    question: "ما الفرق بين السلك وضغط المياه في التسليك؟",
    answer:
      "السلك يخترق الانسداد ويفتّته، بينما ضغط المياه يغسل جدران الماسورة بالكامل ويزيل الدهون والترسبات ويعيد للماسورة قطرها الأصلي. يُختار الأنسب حسب حالة الانسداد.",
  },
  {
    question: "هل تستخدمون الكاميرا لتحديد الانسداد؟",
    answer:
      "نعم، نستخدم كاميرا الفحص لرؤية مكان الانسداد وسببه بدقة داخل الشبكة قبل اختيار طريقة العلاج، مما يمنع التكسير العشوائي ويحل المشكلة من أول مرة.",
  },
  {
    question: "هل خدمة تسليك المجاري متوفرة في كل مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت من العاصمة وحولي والسالمية والفروانية إلى الأحمدي والجهراء ومبارك الكبير والفحيحيل والمنقف وغيرها بنفس سرعة الاستجابة.",
  },
  {
    question: "هل يوجد ضمان على خدمة تسليك المجاري؟",
    answer:
      "نعم، نقدم ضماناً على الخدمة بعد التأكد من انسياب الصرف بالكامل، وفي حال عودة المشكلة خلال فترة الضمان نعاود المعالجة دون تكلفة إضافية.",
  },
];

const gallery = [
  { src: "/drain-cleaning/تسليك-مجاري.webp", alt: "تسليك المجاري في الكويت بأحدث الأجهزة" },
  { src: "/drain-cleaning/تسليك-مجاري-المطابخ-والحمامات.webp", alt: "تسليك مجاري المطابخ والحمامات في الكويت" },
  { src: "/drain-cleaning/تسليك-بلوعات.webp", alt: "تسليك بلاعات وتنظيف مواسير الصرف في الكويت" },
  { src: "/drain-cleaning/تسليك-حمامات.webp", alt: "فتح انسداد مجاري الحمامات بدون تكسير" },
  { src: "/drain-cleaning/تسليك-منازل.webp", alt: "تسليك مجاري المنازل والفلل في الكويت" },
  { src: "/drain-cleaning/تنظيف-جورة.webp", alt: "شفط انسداد المجاري وتنظيف الجور والبيارات في الكويت" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      headline: "تسليك المجاري في الكويت | الدليل الكامل وخدمة 24 ساعة بدون تكسير",
      description:
        "دليل شامل عن تسليك المجاري في الكويت يغطي علامات وأسباب الانسداد وطرق العلاج والأسعار ونصائح الوقاية، مع خدمة فني فتح مجاري 24 ساعة.",
      image: `${SITE_URL}${COVER_IMAGE}`,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "ar",
      mainEntityOfPage: PAGE_URL,
      articleSection: "تسليك المجاري",
      author: { "@id": `${SITE_URL}/#business` },
      publisher: { "@id": `${SITE_URL}/#business` },
      keywords: [
        "تسليك المجاري في الكويت",
        "فني تسليك مجاري",
        "فتح المجاري",
        "تنظيف المجاري",
        "أسعار تسليك المجاري في الكويت",
      ].join("، "),
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تسليك المجاري في الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات الصرف الصحي",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "خدمة تسليك المجاري في الكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وتسليك البلاعات وحل انسدادات الصرف الصحي بأحدث الأجهزة.",
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
          "شفط طفح المجاري",
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
        { "@type": "ListItem", position: 3, name: "تسليك المجاري في الكويت", item: PAGE_URL },
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

function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn";
  title: string;
  children: React.ReactNode;
}) {
  const styles =
    tone === "warn"
      ? "border-amber-200 bg-amber-50/70 ring-amber-900/5"
      : "border-sky-200 bg-sky-50/70 ring-sky-900/5";
  const badge = tone === "warn" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700";
  return (
    <div className={`mt-6 rounded-2xl border p-5 ring-1 ${styles}`}>
      <p className="flex items-center gap-2 text-base font-extrabold text-slate-900">
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black ${badge}`}>
          {tone === "warn" ? "!" : "i"}
        </span>
        {title}
      </p>
      <div className="mt-2 text-base leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export default function DrainCleaningInKuwaitBlogPage() {
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
              <span className="font-semibold text-slate-700">تسليك المجاري في الكويت</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
              فني تسليك مجاري 24 ساعة في جميع مناطق الكويت
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              تسليك المجاري في الكويت: الدليل الكامل وخدمة فتح الانسدادات 24 ساعة
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              انسداد المجاري من أكثر المشاكل المنزلية إزعاجاً في الكويت، فما يبدأ
              كبطء بسيط في تصريف الماء قد يتحوّل خلال ساعات إلى طفح للمجاري وروائح
              كريهة تعطّل حياتك. في هذا الدليل نشرح لك كل ما يخص{" "}
              <strong>تسليك المجاري في الكويت</strong>: علاماته وأسبابه وطرق فتحه
              وأسعاره ونصائح الوقاية منه، ونوضح كيف تحصل على خدمة فني تسليك مجاري
              محترف بأحدث الأجهزة وبدون تكسير على مدار الساعة.
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
          {/* Intro */}
          <section className="scroll-mt-24">
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                لماذا تنتشر مشكلة انسداد المجاري في الكويت تحديداً؟ الإجابة تجمع
                عدة عوامل مجتمعة: كثافة المباني والشقق التي تشترك في مجاري رئيسية
                واحدة، وعُسر المياه الذي يترك ترسبات جيرية داخل المواسير، والعواصف
                الترابية التي تدفع الرمال إلى بلاعات الساحات، إضافة إلى العادات
                اليومية مثل سكب الزيوت في الأحواض ورمي المناديل في المراحيض.
              </p>
              <p>
                كل هذه الأسباب تجعل انسداد الصرف الصحي مسألة وقت لا أكثر إذا أُهملت
                الوقاية. والأهم من ذلك أن سرعة التدخل تفرق كثيراً؛ فالانسداد
                البسيط الذي يُعالَج مبكراً يكلّفك دنانير معدودة، بينما تجاهله حتى
                طفح المجاري قد يكلّفك أضعاف ذلك في تنظيف الأرضيات والجدران وإصلاح
                الأضرار. لذلك يبقى تسليك المجاري في الكويت خدمة مطلوبة على مدار
                العام، والاستعانة بفني محترف في الوقت المناسب هي القرار الأوفر
                والأأمن.
              </p>
            </div>
            <Callout tone="warn" title="متى تعتبرها طوارئ؟">
              إذا ارتجعت المياه في أكثر من نقطة داخل المنزل، أو بدأت المجاري
              بالطفح على الأرضية، فلا تنتظر ولا تجرّب حلولاً منزلية — اتصل بفني
              تسليك مجاري فوراً لأن المشكلة في المجرى الرئيسي وتتفاقم بسرعة.
            </Callout>
          </section>

          {/* Table of contents */}
          <nav
            aria-label="محتويات الصفحة"
            className="my-12 rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
          >
            <h2 className="text-base font-extrabold text-slate-900">محتويات المقال</h2>
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
              ما هي خدمة تسليك المجاري؟
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                تسليك المجاري خدمة فنية متخصصة تهدف إلى إزالة أي عائق يمنع انسياب
                مياه الصرف داخل شبكة المنزل وإعادة التصريف إلى وضعه الطبيعي. تشمل
                الخدمة فتح انسدادات أحواض المطابخ والمغاسل، وبلاعات الحمامات
                والساحات، وكراسي الحمامات، وصولاً إلى المجاري الرئيسية المشتركة بين
                الشقق أو المؤدية إلى الشبكة العامة.
              </p>
              <p>
                لا يقتصر عمل فني تسليك المجاري على «دفع» الانسداد، بل يبدأ بتشخيص
                سببه ومكانه بدقة — أحياناً بالكاميرا — ثم اختيار الأداة المناسبة من
                سلك يدوي أو ماكينة كهربائية أو ضغط مياه، وأخيراً اختبار الشبكة
                للتأكد من حل المشكلة من جذورها. هذا الفرق بين المعالجة السطحية
                والمعالجة الجذرية هو ما يميّز الخدمة الاحترافية عن الحلول المنزلية
                المؤقتة.
              </p>
              <p>
                عملياً، تندرج تحت هذه الخدمة أعمال متعددة مثل فتح المجاري، وتنظيف
                المجاري وتسليك البلاعات، وتسليك مواسير الصرف، وشفط انسداد المجاري
                عند الطفح، وصيانة شبكات الصرف الدورية — وكلها من صميم عمل السباك
                الصحي المتخصص في خدمات السباكة بالكويت.
              </p>
            </div>
          </section>

          {/* Signs */}
          <section id="signs" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              علامات انسداد المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              نادراً ما يحدث الانسداد فجأة؛ فغالباً يرسل المنزل إشارات تحذيرية قبل
              أيام. الانتباه لها مبكراً يوفّر عليك حالة طوارئ مكلفة. إليك أبرز
              علامات انسداد المجاري:
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
            <Callout title="مثال عملي">
              لاحظ أحد سكان السالمية أن حوض المطبخ صار يصرّف الماء ببطء وتصدر منه
              رائحة خفيفة، فتجاهل الأمر أسبوعين. تحوّل البطء إلى انسداد كامل مع
              ارتجاع في بلاعة المطبخ عند تشغيل الغسالة. لو تدخّل عند أول علامة
              (بطء التصريف) لكان التسليك أسهل وأرخص بكثير.
            </Callout>
          </section>

          {/* Causes */}
          <section id="causes" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              أسباب انسداد المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              فهم أسباب انسداد المجاري هو الخطوة الأولى للوقاية منه وتوفير تكاليف
              الإصلاح المتكررة. يوضح الجدول التالي أهم الأسباب الشائعة في منازل
              وفلل الكويت:
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
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              لمزيد من التفصيل حول هذه الأسباب وكيفية تفاديها، اطّلع على مقالنا عن{" "}
              <Link href="/blog/drain-blockage-causes-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
                أسباب انسداد المجاري في الكويت
              </Link>
              .
            </p>
          </section>

          {/* Methods */}
          <section id="methods" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              طرق تسليك المجاري ومتى تُستخدم كل طريقة
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              لا توجد طريقة واحدة تناسب كل الحالات؛ يختار الفني المحترف الأداة
              الأنسب حسب نوع الانسداد وموقعه وشدته. وفيما يلي أهم طرق تسليك المجاري
              في الكويت ومتى تُستخدم كل منها:
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
                    تُستخدم: {m.when}
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

          {/* No chemicals */}
          <section id="no-chemicals" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              لماذا لا يُنصح باستخدام المواد الكيميائية؟
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                تنتشر إعلانات المنظفات الكيميائية القوية التي تَعِد بفتح الانسداد
                خلال دقائق، ويلجأ إليها كثير من أصحاب المنازل كحل سريع. لكنها في
                الواقع من أكثر الأخطاء ضرراً على شبكة الصرف، وهذه أهم أضرارها:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "تآكل المواسير: خاصة المواسير البلاستيكية والقديمة، إذ تولّد المواد الكيميائية حرارة تُضعف الماسورة وقد تُحدث بها ثقوباً وتسريبات.",
                  "خطر على السلامة: قد تسبب حروقاً للجلد والعينين وأبخرة ضارة عند استنشاقها، وتزداد خطورتها إذا خُلطت بمنظفات أخرى.",
                  "حل سطحي مؤقت: تذيب جزءاً من الانسداد فقط دون معالجة سببه الجذري، فتعود المشكلة سريعاً وربما أسوأ.",
                  "ضرر بيئي: تصل هذه المواد إلى شبكة الصرف العامة وتضر بمعالجة المياه والبيئة.",
                  "تعقيد عمل الفني: بقاء المادة الكيميائية داخل الماسورة يجعل التسليك الميكانيكي لاحقاً أخطر على الفني.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-rose-900/5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-extrabold">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Callout title="البديل الأأمن">
              للانسداد الخفيف جرّب ماءً ساخناً أو مكبس المطاط أو خليط صودا الخبز
              والخل الطبيعي. وللانسداد المتوسط والعنيد اعتمد على التسليك
              الميكانيكي وضغط المياه لدى فني متخصص — فهو أكثر أماناً وفعالية ولا
              يتلف المواسير.
            </Callout>
          </section>

          {/* Why a specialized company */}
          <section id="why-company" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              مميزات الاستعانة بشركة متخصصة
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              قد تنجح الحلول المنزلية مع الانسداد الخفيف، لكن الاستعانة بشركة تسليك
              مجاري متخصصة تمنحك حلاً جذرياً وآمناً يوفر عليك الوقت والمال. إليك أهم
              ما يميّز الشركة المحترفة:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {companyBenefits.map((item) => (
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

          {/* Duration */}
          <section id="duration" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              كم تستغرق عملية التسليك؟
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-slate-700">
              <p>
                يعتمد الوقت على نوع الانسداد ومكانه، لكن معظم الحالات المنزلية
                تُحل في وقت قصير. هذا تقدير عام للاسترشاد:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "انسداد سطحي في حوض أو بلاعة: من 15 إلى 30 دقيقة غالباً.",
                  "انسداد مرحاض (كرسي): من 20 إلى 45 دقيقة حسب العمق.",
                  "انسداد المجرى الرئيسي: من 45 إلى 90 دقيقة حسب الطول والشدة.",
                  "حالات الجذور أو الترسبات العنيدة: قد تحتاج ساعة أو أكثر مع ضغط المياه.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-base font-medium text-slate-700 ring-1 ring-slate-900/5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                يبقى التشخيص الدقيق هو ما يحدد الوقت الفعلي، ولهذا نعاين الحالة
                أولاً ونخبرك بتقدير واقعي للمدة والتكلفة قبل البدء.
              </p>
            </div>
          </section>

          {/* Prices */}
          <section id="prices" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              أسعار تسليك المجاري في الكويت
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              تختلف أسعار تسليك المجاري في الكويت حسب نوع الانسداد ومكانه وطريقة
              العلاج وحالة الشبكة. الجدول التالي يوضح أسعاراً تقريبية للاسترشاد
              فقط، مع التأكيد أن السعر النهائي يُحدَّد بوضوح بعد المعاينة وقبل بدء
              العمل بلا رسوم خفية:
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
              * الأسعار تقديرية وقابلة للتغيير حسب حالة كل موقع. للاطلاع على
              التفاصيل راجع صفحة{" "}
              <Link href="/drain-cleaning-prices-kuwait" className="font-semibold text-sky-700 underline-offset-4 hover:underline">
                أسعار تسليك المجاري
              </Link>
              ، أو تواصل معنا لسعر دقيق بعد المعاينة.
            </p>
          </section>

          {/* Prevention */}
          <section id="prevention" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              هل يمكن الوقاية من انسداد المجاري؟
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              نعم، معظم حالات الانسداد يمكن تجنّبها بعادات بسيطة. الوقاية دائماً
              أرخص وأسهل من العلاج، وهذه أهم النصائح العملية:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
              <table className="w-full min-w-[560px] text-right text-base">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-5 py-4 font-extrabold">النصيحة</th>
                    <th className="px-5 py-4 font-extrabold">كيف تطبّقها</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {preventionTips.map((row) => (
                    <tr key={row.tip} className="bg-white">
                      <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-800">{row.tip}</td>
                      <td className="px-5 py-4 leading-relaxed text-slate-600">{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              ولمزيد من الإرشادات الدورية، اطّلع على مقال{" "}
              <Link href="/blog/drainage-maintenance-tips" className="font-bold text-sky-700 underline-offset-4 hover:underline">
                نصائح صيانة شبكة الصرف
              </Link>
              . وللتعرف على النظام العام للصرف الصحي في الكويت يمكنك زيارة موقع{" "}
              <a
                href="https://www.mpw.gov.kw/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-bold text-slate-700 underline-offset-4 hover:underline"
              >
                وزارة الأشغال العامة الكويتية
              </a>
              .
            </p>
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
              أكثر المناطق التي نقدم بها الخدمة
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
              تصفّح{" "}
              <Link href="/areas" className="font-bold text-slate-700 underline-offset-4 hover:underline">
                جميع مناطق الخدمة
              </Link>
              ، أو تعرّف على خدمتنا الرئيسية في{" "}
              <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
                صفحة تسليك مجاري الكويت
              </Link>
              .
            </p>
          </section>

          {/* Why us */}
          <section id="why-us" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              لماذا تختارنا؟
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

          {/* After care */}
          <section id="after-care" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              نصائح بعد تسليك المجاري
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              حتى تحافظ على نتيجة التسليك أطول فترة ممكنة وتتجنب عودة المشكلة،
              اتبع هذه النصائح البسيطة بعد انتهاء الفني من عمله:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {afterCare.map((tip) => (
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
              أخطاء يقع فيها أصحاب المنازل
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
                علامات على انسداد عميق يحتاج تدخلاً محترفاً فورياً. تجاهلها يحوّل
                مشكلة بسيطة إلى طوارئ مكلفة قد تسبب فيضان مياه الصرف داخل المنزل
                وتلف الأرضيات والأثاث.
              </p>
              <p>
                عند ظهور أي من هذه الحالات لا تتردد في الاتصال بفني تسليك مجاري
                مباشرة. التدخل المبكر يوفّر عليك الوقت والمال ويحمي منزلك، خاصة أن
                خدمتنا متاحة على مدار 24 ساعة للوصول إليك بأسرع وقت في جميع
                المناطق.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              الأسئلة الشائعة عن تسليك المجاري في الكويت
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
              اطلب خدمة تسليك المجاري في الكويت الآن
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              لا تدع انسداد المجاري يتحوّل إلى طارئ يعطّل منزلك. فريق فني تسليك
              المجاري جاهز على مدار 24 ساعة لحل المشكلة بأحدث الأجهزة وبدون تكسير
              وبأسعار مناسبة وضمان على الخدمة. اتصل بنا أو راسلنا واتساب ونصل إليك
              بأسرع وقت في جميع مناطق الكويت.
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
            <Link href="/blog/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              الدليل الشامل لتسليك المجاري
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
