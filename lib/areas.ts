export const SITE_URL = "https://taslikmajarikuwait.com";
export const BUSINESS_NAME = "خدمات الكويت";
export const PHONE_NUMBER = "+96598890031";
export const PHONE_DISPLAY = "98890031";
export const WHATSAPP_URL = "https://wa.me/96598890031";

export type Area = {
  slug: string;
  name: string;
  nearby: string[];
};

export const areas: Area[] = [
  { slug: "hawalli", name: "حولي", nearby: ["salmiya", "jabriya", "salwa"] },
  { slug: "salmiya", name: "السالمية", nearby: ["hawalli", "bayan", "jabriya"] },
  { slug: "farwaniya", name: "الفروانية", nearby: ["jleeb-al-shuyoukh", "ardhiya", "jahra"] },
  { slug: "jahra", name: "الجهراء", nearby: ["sulaibikhat", "farwaniya", "ardhiya"] },
  { slug: "ahmadi", name: "الأحمدي", nearby: ["fahaheel", "mangaf", "abu-halifa"] },
  { slug: "mubarak-kabeer", name: "مبارك الكبير", nearby: ["sabah-al-salem", "salwa", "mishref"] },
  { slug: "fahaheel", name: "الفحيحيل", nearby: ["mangaf", "abu-halifa", "ahmadi"] },
  { slug: "mangaf", name: "المنقف", nearby: ["fahaheel", "abu-halifa", "ahmadi"] },
  { slug: "abu-halifa", name: "أبو حليفة", nearby: ["mangaf", "fahaheel", "ahmadi"] },
  { slug: "sabah-al-salem", name: "صباح السالم", nearby: ["mubarak-kabeer", "salwa", "mishref"] },
  { slug: "jleeb-al-shuyoukh", name: "جليب الشيوخ", nearby: ["farwaniya", "ardhiya", "jahra"] },
  { slug: "sharq", name: "شرق", nearby: ["kaifan", "shuwaikh", "sulaibikhat"] },
  { slug: "jabriya", name: "الجابرية", nearby: ["salwa", "hawalli", "mishref"] },
  { slug: "salwa", name: "سلوى", nearby: ["jabriya", "mishref", "bayan"] },
  { slug: "mishref", name: "مشرف", nearby: ["bayan", "salwa", "jabriya"] },
  { slug: "bayan", name: "بيان", nearby: ["mishref", "salwa", "salmiya"] },
  { slug: "sulaibikhat", name: "الصليبخات", nearby: ["jahra", "shuwaikh", "kaifan"] },
  { slug: "ardhiya", name: "العارضية", nearby: ["farwaniya", "jleeb-al-shuyoukh", "jahra"] },
  { slug: "shuwaikh", name: "الشويخ", nearby: ["kaifan", "sharq", "sulaibikhat"] },
  { slug: "kaifan", name: "كيفان", nearby: ["shuwaikh", "sharq", "sulaibikhat"] },
  { slug: "fintas", name: "الفنطاس", nearby: ["mahboula", "abu-halifa", "mangaf"] },
  { slug: "mahboula", name: "المهبولة", nearby: ["fintas", "abu-halifa", "fahaheel"] },
  { slug: "egaila", name: "العقيلة", nearby: ["fahaheel", "mangaf", "fintas"] },
  { slug: "riqqa", name: "الرقة", nearby: ["fahaheel", "ahmadi", "hadiya"] },
  { slug: "hadiya", name: "هدية", nearby: ["riqqa", "ahmadi", "sabahiya"] },
  { slug: "sabahiya", name: "الصباحية", nearby: ["ahmadi", "fahaheel", "hadiya"] },
  { slug: "rumaithiya", name: "الرميثية", nearby: ["salmiya", "hawalli", "bayan"] },
  { slug: "shaab", name: "الشعب", nearby: ["salmiya", "rumaithiya", "hawalli"] },
  { slug: "qadsiya", name: "القادسية", nearby: ["kaifan", "daiya", "mansouriya"] },
  { slug: "daiya", name: "الدعية", nearby: ["kaifan", "sharq", "qadsiya"] },
  { slug: "mansouriya", name: "المنصورية", nearby: ["qadsiya", "faiha", "daiya"] },
  { slug: "faiha", name: "الفيحاء", nearby: ["mansouriya", "shamiya", "qadsiya"] },
  { slug: "shamiya", name: "الشامية", nearby: ["faiha", "kaifan", "khaldiya"] },
  { slug: "khaldiya", name: "الخالدية", nearby: ["adailiya", "qortuba", "shamiya"] },
  { slug: "adailiya", name: "العديلية", nearby: ["khaldiya", "kaifan", "faiha"] },
  { slug: "qortuba", name: "قرطبة", nearby: ["khaldiya", "surra", "yarmouk"] },
  { slug: "surra", name: "السرة", nearby: ["qortuba", "yarmouk", "jabriya"] },
  { slug: "yarmouk", name: "اليرموك", nearby: ["surra", "qortuba", "khaldiya"] },
  { slug: "omariya", name: "العمرية", nearby: ["ardhiya", "farwaniya", "rabiya"] },
  { slug: "rabiya", name: "الرابية", nearby: ["farwaniya", "ardhiya", "omariya"] },
];

export const areaBySlug = new Map(areas.map((a) => [a.slug, a]));

export type ServiceId = "drain-cleaning" | "roof-waterproofing";

export type ServiceConfig = {
  id: ServiceId;
  prefix: string;
  hubHref: string;
  shortName: string;
  serviceType: string;
  keywordEn: string;
  theme: "sky" | "emerald";
  coverImage: string;
  coverAlt: (area: string) => string;
  h1: (area: string) => string;
  metaTitle: (area: string) => string;
  metaDescription: (area: string) => string;
  intro: (area: string, nearby: string) => string;
  problems: (area: string) => string;
  secondaryIntro: (area: string) => string;
  features: string[];
  steps: { title: string; desc: string }[];
  searchTerms: (area: string) => string[];
  testimonials: (area: string) => { name: string; text: string }[];
  faqs: (area: string) => { question: string; answer: string }[];
  ctaTitle: string;
};

export const serviceConfigs: Record<ServiceId, ServiceConfig> = {
  "drain-cleaning": {
    id: "drain-cleaning",
    prefix: "drain-cleaning-",
    hubHref: "/drain-cleaning-kuwait",
    shortName: "تسليك مجاري",
    serviceType: "تسليك مجاري وفتح انسدادات",
    keywordEn: "drain cleaning Kuwait",
    theme: "sky",
    coverImage: "/drain-cleaning/تسليك-مجاري.webp",
    coverAlt: (area) => `تسليك مجاري ${area} بدون تكسير`,
    h1: (area) => `تسليك مجاري ${area}`,
    metaTitle: (area) => `تسليك مجاري ${area} | فتح انسدادات 24 ساعة`,
    metaDescription: (area) =>
      `خدمة تسليك مجاري ${area} بدون تكسير على مدار 24 ساعة، فتح الانسدادات وحل مشاكل الصرف بأحدث الأجهزة وسرعة وصول وأسعار مناسبة في ${area} الكويت.`,
    intro: (area, nearby) =>
      `نوفر خدمة تسليك مجاري في ${area} على مدار 24 ساعة لحل جميع مشاكل انسداد المجاري والصرف الصحي بسرعة واحترافية. تُعد مشاكل الانسداد من أكثر الأعطال إلحاحاً في ${area}، فهي قد تتحول خلال دقائق إلى حالة طوارئ تسبب تجمع المياه والروائح الكريهة وتعطيل الحياة اليومية. لذلك يجهّز فريقنا أحدث الأجهزة التي تتيح فتح المجاري وحل الانسدادات بدون تكسير أو إتلاف للأرضيات، مما يوفر عليك تكاليف الترميم. نتعامل مع انسداد المطابخ والحمامات والمجاري الرئيسية في المنازل والفلل والشركات داخل ${area}، مع سرعة استجابة ووصول إلى موقعك في أقرب وقت. وبفضل خبرتنا في خدمة ${area} والمناطق المجاورة مثل ${nearby}، نضمن لك حلاً جذرياً للمشكلة مع اختبار كامل للتأكد من انسياب الصرف قبل المغادرة. نلتزم بالشفافية في الأسعار وتقديم تقييم واضح قبل بدء العمل، لأن راحتك وثقتك هي أولويتنا في كل خدمة نقدمها في ${area}.`,
    problems: (area) =>
      `انسداد أحواض المطابخ، وانسداد الحمامات، وارتجاع المياه، وانسداد المجاري الرئيسية، وبطء تصريف المياه في ${area}.`,
    secondaryIntro: (area) =>
      `إذا كنت تبحث عن خدمة تسليك مجاري ${area} موثوقة وسريعة، فأنت في المكان الصحيح. نتعامل يومياً مع حالات انسداد متنوعة في منازل وفلل وشركات ${area}، بدءاً من انسداد أحواض المطبخ البسيط وحتى انسداد الشبكة الرئيسية الذي يحتاج معدات متخصصة. يضم فريقنا فنيين على دراية بطبيعة شبكات الصرف في ${area}، مما يساعدنا على تشخيص المشكلة بسرعة وحلها من جذورها دون تكسير. كما نقدم نصائح للوقاية من تكرار الانسداد للحفاظ على صرف صحي سليم في منزلك.`,
    features: [
      "تسليك مجاري المطابخ",
      "تسليك مجاري الحمامات",
      "فتح المجاري الرئيسية",
      "تسليك مجاري بدون تكسير",
      "خدمة طوارئ 24 ساعة",
    ],
    steps: [
      { title: "استقبال الطلب", desc: "تواصل معنا عبر الاتصال أو واتساب على مدار الساعة." },
      { title: "الوصول السريع", desc: "يصل الفني إلى موقعك خلال وقت قصير." },
      { title: "فحص الانسداد", desc: "نحدد سبب الانسداد ومكانه بدقة قبل البدء." },
      { title: "التسليك بدون تكسير", desc: "نفتح الانسداد بأحدث الأجهزة دون إتلاف المكان." },
      { title: "اختبار الصرف", desc: "نتأكد من انسياب المياه تماماً قبل المغادرة." },
    ],
    searchTerms: (area) => [
      `شركة تسليك مجاري ${area}`,
      `أفضل تسليك مجاري ${area}`,
      `تسليك مجاري ${area} 24 ساعة`,
      `فني تسليك مجاري ${area}`,
      `أرقام تسليك مجاري ${area}`,
      `تسليك مجاري ${area} بدون تكسير`,
    ],
    testimonials: (area) => [
      {
        name: "أبو محمد",
        text: `طلبت خدمة تسليك مجاري في ${area} وكان الوصول سريعاً والمشكلة اتحلت بدون أي تكسير. خدمة ممتازة وأسعار مناسبة.`,
      },
      {
        name: "أم عبدالله",
        text: `أفضل تجربة لتسليك المجاري في ${area}، فريق محترم وشغل نظيف وسعر واضح من البداية.`,
      },
      {
        name: "فهد العتيبي",
        text: `اتصلت بهم ليلاً في حالة طوارئ بـ${area} ووصلوا بسرعة وحلوا انسداد المجرى الرئيسي باحترافية.`,
      },
    ],
    faqs: (area) => [
      {
        question: `كم سعر تسليك المجاري في ${area}؟`,
        answer: `يختلف السعر حسب حالة الانسداد ومكانه، لكن نوفر أسعار مناسبة وتقييم واضح قبل بدء العمل في ${area} بدون رسوم خفية.`,
      },
      {
        question: `هل يتم تسليك المجاري في ${area} بدون تكسير؟`,
        answer: `نعم، نستخدم أحدث الأجهزة التي تسمح بفتح المجاري وحل الانسدادات في ${area} بدون أي تكسير أو إتلاف للمكان.`,
      },
      {
        question: `كم وقت الوصول إلى ${area}؟`,
        answer: `نحرص على الوصول إليك في ${area} خلال وقت قصير، وغالباً خلال 30 دقيقة حسب الموقع وحالة الطلب.`,
      },
      {
        question: `هل خدمة تسليك المجاري في ${area} متوفرة 24 ساعة؟`,
        answer: `نعم، نوفر خدمة تسليك مجاري ${area} على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة.`,
      },
      {
        question: `هل تشمل الخدمة المطابخ والحمامات في ${area}؟`,
        answer: `نعم، نقدم تسليك مجاري المطابخ والحمامات وفتح المجاري الرئيسية للمنازل والفلل والشركات في ${area}.`,
      },
      {
        question: `هل تغطون المناطق المجاورة لـ ${area}؟`,
        answer: `نعم، نخدم ${area} وجميع المناطق المجاورة لها في الكويت بنفس سرعة الاستجابة وجودة الخدمة.`,
      },
    ],
    ctaTitle: "نصل إليك خلال 30 دقيقة",
  },
  "roof-waterproofing": {
    id: "roof-waterproofing",
    prefix: "roof-waterproofing-",
    hubHref: "/roof-waterproofing-kuwait",
    shortName: "عزل أسطح",
    serviceType: "عزل مائي وحراري للأسطح",
    keywordEn: "roof waterproofing Kuwait",
    theme: "emerald",
    coverImage: "/roof-waterproofing/عزل-اسطح.webp",
    coverAlt: (area) => `عزل أسطح ${area} مائي وحراري`,
    h1: (area) => `عزل أسطح ${area}`,
    metaTitle: (area) => `عزل أسطح ${area} | عزل مائي وحراري وفوم بضمان`,
    metaDescription: (area) =>
      `خدمة عزل أسطح ${area} ضد الحرارة وتسرب المياه بأفضل مواد العزل المائي والحراري والفوم، فريق متخصص وضمان على الخدمة وأسعار مناسبة في ${area} الكويت.`,
    intro: (area, nearby) =>
      `نقدم خدمة عزل أسطح في ${area} لحماية مبناك من حرارة الصيف وتسربات المياه على مدار الساعة. يتميز مناخ ${area} كباقي مناطق الكويت بارتفاع درجات الحرارة صيفاً، مما يجعل العزل ضرورة للحفاظ على راحة الساكنين وخفض فاتورة التكييف. يعتمد فريقنا على أحدث مواد العزل المائي والحراري وعزل الفوم عالية الجودة، ويطبقها وفق أنظمة هندسية دقيقة تناسب المباني السكنية والتجارية في ${area}. نعالج تسربات المياه القائمة ونقاط ضعف العزل قبل التنفيذ لضمان نتيجة طويلة الأمد تحمي السقف والجدران من الرطوبة والشقوق. وبفضل خبرتنا في خدمة ${area} والمناطق المجاورة مثل ${nearby}، نصل إليك بسرعة وننفذ العزل بإتقان مع اختبار للتأكد من فعاليته قبل المغادرة. نلتزم بالشفافية في الأسعار وتقديم معاينة وتقييم واضح قبل بدء العمل، ونوفر ضماناً على أعمال العزل لراحة بالك. سواء كنت بحاجة إلى عزل مائي أو حراري أو فوم لسطح منزلك أو منشأتك في ${area}، فنحن هنا لخدمتك في أي وقت.`,
    problems: (area) =>
      `تسرب المياه من السقف، وارتفاع حرارة المنزل صيفاً، والرطوبة والشقوق، وتلف طبقة العزل القديمة في ${area}.`,
    secondaryIntro: (area) =>
      `إذا كنت تبحث عن خدمة عزل أسطح ${area} موثوقة، فنحن نوفر حلول عزل متكاملة تناسب طبيعة المباني في ${area}. سواء كان منزلك يعاني من تسرب مياه متكرر أو ارتفاع حرارة مزعج صيفاً، يقوم فريقنا بمعاينة السطح وتحديد نوع العزل الأنسب من العزل المائي أو الحراري أو الفوم. نستخدم مواد معتمدة ذات كفاءة عالية ونطبقها بدقة لضمان حماية طويلة الأمد، مع ضمان على الخدمة يمنحك راحة البال في ${area}.`,
    features: [
      "العزل المائي للأسطح",
      "العزل الحراري",
      "عزل الفوم (بولي يوريثان)",
      "معالجة تسربات المياه",
      "حماية الأسطح من الشمس والحرارة",
    ],
    steps: [
      { title: "المعاينة", desc: "نعاين السطح ونحدد مساحته وحالته بدقة." },
      { title: "تحديد التسرب", desc: "نكتشف مصادر التسرب ونقاط ضعف العزل." },
      { title: "اختيار نوع العزل", desc: "نوصي بأنسب نظام عزل مائي أو حراري أو فوم." },
      { title: "تنفيذ العزل", desc: "ننفذ العزل بمواد عالية الجودة وبإتقان." },
      { title: "اختبار الجودة", desc: "نختبر السطح للتأكد من فعالية العزل." },
    ],
    searchTerms: (area) => [
      `شركة عزل أسطح ${area}`,
      `أفضل عزل أسطح ${area}`,
      `عزل أسطح ${area} مائي وحراري`,
      `عزل فوم ${area}`,
      `أرقام عزل أسطح ${area}`,
      `معالجة تسربات المياه ${area}`,
    ],
    testimonials: (area) => [
      {
        name: "بو سعود",
        text: `عملت عزل مائي وحراري لسطح بيتي في ${area} والنتيجة ممتازة، الحرارة قلّت والتسرب اختفى تماماً.`,
      },
      {
        name: "أم يوسف",
        text: `أفضل شركة عزل أسطح في ${area}، شغل نظيف ومواد ممتازة وفيه ضمان على الخدمة.`,
      },
      {
        name: "خالد المطيري",
        text: `فريق محترف عالج تسرب المياه من سطح الفيلا في ${area} بسرعة وبسعر واضح من البداية.`,
      },
    ],
    faqs: (area) => [
      {
        question: `كم سعر عزل الأسطح في ${area}؟`,
        answer: `يختلف سعر عزل الأسطح حسب مساحة السطح ونوع العزل، ونقدم معاينة وتقييم وسعر واضح قبل بدء العمل في ${area} بدون رسوم خفية.`,
      },
      {
        question: `ما أفضل نوع عزل للأسطح في ${area}؟`,
        answer: `العزل المائي والحراري وعزل الفوم من أفضل الأنظمة لحماية الأسطح من التسربات والحرارة في مناخ ${area} والكويت.`,
      },
      {
        question: `كم وقت الوصول إلى ${area}؟`,
        answer: `نحرص على الوصول إليك في ${area} خلال وقت قصير لإجراء المعاينة وتحديد نوع العزل المناسب.`,
      },
      {
        question: `هل يوجد ضمان على عزل الأسطح في ${area}؟`,
        answer: `نعم، نوفر ضماناً على أعمال العزل المائي والحراري في ${area} لضمان حماية طويلة الأمد للأسطح.`,
      },
      {
        question: `هل العزل يقاوم حرارة الصيف في ${area}؟`,
        answer: `نعم، العزل الحراري وعزل الفوم يقللان من انتقال الحرارة إلى المبنى في ${area} ويساعدان على خفض استهلاك التكييف.`,
      },
      {
        question: `هل تغطون المناطق المجاورة لـ ${area}؟`,
        answer: `نعم، نخدم ${area} وجميع المناطق المجاورة لها في الكويت بنفس جودة الخدمة والضمان.`,
      },
    ],
    ctaTitle: "احمِ سطح منزلك الآن",
  },
};

export function parseAreaSlug(
  slug: string
): { service: ServiceConfig; area: Area } | null {
  for (const service of Object.values(serviceConfigs)) {
    if (slug.startsWith(service.prefix)) {
      const areaSlug = slug.slice(service.prefix.length);
      const area = areaBySlug.get(areaSlug);
      if (area) return { service, area };
    }
  }
  return null;
}

export function allAreaPageSlugs(): string[] {
  const slugs: string[] = [];
  for (const service of Object.values(serviceConfigs)) {
    for (const area of areas) slugs.push(`${service.prefix}${area.slug}`);
  }
  return slugs;
}
