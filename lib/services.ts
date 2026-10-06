// الخدمات الثماني الأساسية — مصدر واحد لشبكة الخدمات في الرئيسية ولـ
// hasOfferCatalog في `lib/schema.ts`.
// `anchor` هو الكلمة المستهدفة لصفحة الخدمة، ويُستخدم نصًا للرابط بالحرف.
// `description` مختلف عمدًا عن أول فقرة في صفحة الخدمة لتجنب تكرار المحتوى.
export const coreServices = [
  {
    id: "drain",
    title: "تسليك المجاري وفتح الانسدادات",
    anchor: "تسليك مجاري الكويت",
    href: "/drain-cleaning-kuwait",
    description:
      "نحدد موقع الانسداد وسببه أولًا، ثم نفتح خط الصرف بالأداة المناسبة سواء كان الانسداد في بالوعة أو غرفة تفتيش أو الخط الرئيسي.",
  },
  {
    id: "kitchen-bathroom",
    title: "انسداد المطابخ والحمامات",
    anchor: "تسليك مجاري المطابخ والحمامات",
    href: "/kitchen-bathroom-drain-cleaning-kuwait",
    description:
      "حلول لانسداد أحواض المطبخ بسبب الدهون وبلاعات الحمام بسبب الشعر والترسبات، مع نصائح تقلل تكرار المشكلة.",
  },
  {
    id: "roof",
    title: "عزل الأسطح",
    anchor: "عزل أسطح الكويت",
    href: "/roof-waterproofing-kuwait",
    description:
      "نعاين السطح ونحدد مصادر التسرب ونقاط الضعف، ثم نختار نظام العزل المناسب لنوع المبنى وحالة السطح.",
  },
  {
    id: "thermal",
    title: "عزل مائي وحراري للمباني",
    anchor: "العزل المائي والحراري",
    href: "/thermal-waterproofing-kuwait",
    description:
      "طبقات عزل تمنع تسرب مياه الأمطار والخزانات، وتقلل انتقال حرارة الصيف إلى داخل المبنى فيخف الحمل على أجهزة التكييف.",
  },
  {
    id: "gitaroof",
    title: "عزل جيتاروف",
    anchor: "عزل أسطح جيتاروف",
    href: "/gitaroof-insulation-kuwait",
    description:
      "طبقة جيتاروف متماسكة تتحمل أشعة الشمس والمياه، وتناسب الأسطح التي تحتاج إلى حماية مائية وحرارية معًا.",
  },
  {
    id: "basement",
    title: "مكائن السراديب",
    anchor: "تركيب مكينة سرداب",
    href: "/basement-pump-kuwait",
    description:
      "توريد مضخة سحب المياه المناسبة لمساحة السرداب وتركيبها وصيانتها، لتصريف المياه المتجمعة قبل أن تسبب أضرارًا.",
  },
  {
    id: "manhole",
    title: "المناهيل وأغطيتها",
    anchor: "تركيب منهول الكويت",
    href: "/manhole-installation-kuwait",
    description:
      "تركيب فتحات وأغطية المناهيل بمقاسات مختلفة واستبدال التالف منها، لتسهيل صيانة شبكة الصرف والحفاظ على سلامة المكان.",
  },
  {
    id: "tank",
    title: "غسيل خزانات المياه",
    anchor: "غسيل تانكي الكويت",
    href: "/water-tank-cleaning-kuwait",
    description:
      "تفريغ الخزان وإزالة الرواسب والطحالب ثم تعقيمه، للحفاظ على نظافة المياه التي تستخدمها أسرتك يوميًا.",
  },
] as const;

export const priceLinks = [
  { anchor: "اسعار تسليك مجاري الكويت", href: "/drain-cleaning-prices-kuwait" },
  { anchor: "اسعار عزل اسطح الكويت", href: "/roof-insulation-prices-kuwait" },
] as const;
