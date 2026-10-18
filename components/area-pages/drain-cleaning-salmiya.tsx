import Link from "next/link";
import { coreServices, priceLinks } from "@/lib/services";
import type { CustomAreaPage } from "./types";

const h2Class = "text-2xl font-extrabold text-slate-900 sm:text-3xl";
const leadClass = "mt-4 text-lg leading-relaxed text-slate-700";
const linkClass = "font-bold text-sky-700 underline-offset-4 hover:underline";

const drainHub = coreServices.find((s) => s.id === "drain")!;
const manhole = coreServices.find((s) => s.id === "manhole")!;
const pricesLink = priceLinks.find((l) => l.href === "/drain-cleaning-prices-kuwait")!;

const restaurantSteps = [
  {
    title: "موعد خارج ساعات العمل",
    desc: "نستقبل الطلبات على مدار 24 ساعة، فنرتب الزيارة بعد إغلاق المطعم أو قبل افتتاحه حتى لا يتوقف المطبخ.",
  },
  {
    title: "فحص مصيدة الدهون والخط",
    desc: "نبدأ بمصيدة الدهون (الجريس تراب) إن وُجدت، لأن امتلاءها سبب شائع لارتجاع المياه إلى أرضية المطبخ.",
  },
  {
    title: "غسيل الماسورة بضغط المياه",
    desc: "السلك وحده يفتح ممرًا في كتلة الدهون ثم تعود فتغلقه، لذلك نغسل الماسورة بالجت حتى تعود جدرانها نظيفة.",
  },
  {
    title: "اختبار التصريف والتسليم",
    desc: "نشغّل الأحواض وبلاعات الأرضية معًا ونتأكد من سرعة التصريف قبل تسليم المطبخ.",
  },
];

const buildingTypes = [
  {
    title: "الأبراج والعمارات العالية على الواجهة البحرية",
    desc: "في المباني ذات الأدوار الكثيرة تنزل مياه الصرف مسافة طويلة، ثم تنعطف عند الكوع أسفل المبنى لتتجه أفقيًا إلى الخط الرئيسي. هذه النقطة بالتحديد يتجمع فيها معظم الانسداد، وقد تكون تحت أرضية الدور الأرضي أو في غرفة الخدمات. نستخدم كاميرا الفحص لنرى الكوع من الداخل ونعرف هل المشكلة دهون أم مخلفات أم كسر في الماسورة، ثم نفتحه بالماكينة أو ضغط المياه.",
  },
  {
    title: "الشقق المفروشة والسكن قصير المدة",
    desc: "كثرة تغيّر السكان تعني أن أحدًا لا يتابع حالة الصرف، فتتراكم المناديل المبللة وبقايا الطعام حتى يظهر الانسداد فجأة. نفتح بلاعات الحمامات والمطابخ والكراسي دون تكسير، وننبه المالك إلى أي نقطة يتكرر فيها الانسداد.",
  },
  {
    title: "البيوت في القطع الداخلية",
    desc: "بعيدًا عن الشارع الساحلي تكثر البيوت الأقدم، وخط صرفها يمر تحت الحوش إلى غرف التفتيش. تدخل الرمال إلى بلاعات الحوش والمواقف وتترسب في الخط، فننظفه بضغط المياه، ونفحص غطاء المنهول لأن الغطاء التالف يسمح بدخول الرمال من جديد.",
  },
];

function DrainCleaningSalmiyaBody() {
  return (
    <>
      <section id="overview" className="scroll-mt-24">
        <h2 className={h2Class}>ما الذي يميز الصرف الصحي في السالمية؟</h2>
        <p className={leadClass}>
          السالمية ليست نمطًا عمرانيًا واحدًا. على امتداد شارع الخليج العربي تصطف
          الأبراج السكنية والفنادق والمجمعات، وعلى شارع سالم المبارك وما حوله
          تتجاور المطاعم والكافيهات والمحلات، أما القطع الداخلية فتغلب عليها البيوت
          والعمارات الأقدم. ولكل نوع من هذه المباني سبب مختلف للانسداد، ولذلك نسأل
          عن نوع العقار قبل الوصول حتى نحضر الأداة المناسبة من أول زيارة.
        </p>
      </section>

      <section id="restaurants" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>انسداد مجاري المطاعم والكافيهات</h2>
        <p className={leadClass}>
          مطبخ المطعم يصرف في يوم واحد من الزيوت والدهون ما يصرفه مطبخ البيت في
          أسابيع. تنزل الدهون ساخنة ثم تبرد داخل الماسورة وتلتصق بجدرانها، فيضيق
          مجراها حتى تعود المياه إلى أرضية المطبخ، وغالبًا في وقت الذروة. هكذا
          نتعامل مع هذه الحالة:
        </p>
        <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {restaurantSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-bl from-sky-600 to-emerald-600 text-sm font-extrabold text-white shadow-md">
                {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{step.desc}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          ولتقليل الحاجة إلى الطوارئ، ننصح أصحاب المطاعم بتفريغ مصيدة الدهون
          بانتظام، وبغسيل خط المطبخ بضغط المياه بشكل دوري يحدده الفني حسب كمية
          الدهون التي يجدها في الماسورة.
        </p>
      </section>

      <section id="buildings" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>من الأبراج إلى البيوت: طريقة العمل حسب المبنى</h2>
        <div className="mt-6 flex flex-col gap-4">
          {buildingTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          وإذا كانت غرفة التفتيش نفسها مكسورة أو غطاؤها متهالكًا، نوفر أيضًا خدمة{" "}
          <Link href={manhole.href} className={linkClass}>
            {manhole.anchor}
          </Link>{" "}
          بمقاسات تناسب البيوت والعمارات.
        </p>
      </section>

      <section id="prices" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>أسعار تسليك المجاري في السالمية</h2>
        <p className={leadClass}>
          في الشقق والبيوت يبدأ تسليك الحوض أو بلاعة الحمام من 10 د.ك، والكرسي من
          15 د.ك، والخط الرئيسي من 20 د.ك. أما غسيل خطوط المطاعم بضغط المياه فيبدأ
          من 25 د.ك، والفحص بالكاميرا في الأبراج يُسعَّر حسب الحالة.
        </p>
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-base font-semibold text-amber-900">
          الأسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل بدء
          العمل.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          لمعرفة ما يرفع التكلفة أو يخفضها راجع صفحة{" "}
          <Link href={pricesLink.href} className={linkClass}>
            {pricesLink.anchor}
          </Link>
          .
        </p>
      </section>

      <section id="nearby" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>نخدم السالمية وما حولها</h2>
        <p className={leadClass}>
          نصل إلى كل قطع السالمية على مدار 24 ساعة، من الشارع الساحلي إلى المناطق
          الداخلية. ولجيرانها في باقي محافظة حولي مثل الرميثية والجابرية وسلوى صفحة
          خاصة هي{" "}
          <Link href="/drain-cleaning-hawalli" className={linkClass}>
            تسليك مجاري حولي
          </Link>
          ، ولباقي المحافظات راجع صفحة{" "}
          <Link href={drainHub.href} className={linkClass}>
            {drainHub.anchor}
          </Link>
          .
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          الرطوبة القادمة من البحر وحرارة الصيف تتعب أسطح المباني القريبة من الساحل
          أيضًا، ولهذا نقدم{" "}
          <Link href="/roof-waterproofing-salmiya" className={linkClass}>
            عزل أسطح السالمية
          </Link>{" "}
          لمن يعاني من تسرب المياه أو حرارة الدور الأخير.
        </p>
      </section>
    </>
  );
}

export const drainCleaningSalmiya: CustomAreaPage = {
  service: "drain-cleaning",
  label: "تسليك مجاري السالمية",
  title: "تسليك مجاري السالمية 24 ساعة | مطاعم وشقق وبيوت",
  description:
    "تسليك مجاري السالمية 24 ساعة: فتح انسداد المطاعم والكافيهات والأبراج والشقق والبيوت بضغط المياه والكاميرا بدون تكسير، وسعر واضح قبل البدء.",
  h1: "تسليك مجاري السالمية للمطاعم والشقق والبيوت",
  intro: (
    <>
      <strong>تسليك مجاري السالمية</strong> خدمة تقدمها دار الصيانة الكويتية على
      مدار 24 ساعة لفتح انسداد الصرف في مطاعم السالمية وكافيهاتها، وفي أبراجها
      السكنية وشققها وبيوتها. نختار طريقة العمل حسب المبنى: ضغط المياه لدهون
      المطاعم، والكاميرا لتحديد الانسداد في الأبراج، والسوستة والماكينة داخل
      الشقق والبيوت، وكلها دون تكسير وبسعر نبلغك به قبل البدء.
    </>
  ),
  experience: "خبرة فريقنا في الصرف الصحي تتجاوز 15 عامًا.",
  cover: {
    src: "/drain-cleaning/kitchen-floor-drain.webp",
    alt: "فني يفتح انسداد بلاعة أرضية في مطبخ بسوستة التسليك اليدوية",
    width: 1034,
    height: 1071,
  },
  areaServed: [
    { type: "City", name: "السالمية" },
    { type: "AdministrativeArea", name: "محافظة حولي" },
  ],
  faqTitle: "الأسئلة الشائعة عن تسليك مجاري السالمية",
  faqs: [
    {
      question: "هل يمكن تسليك مجاري المطعم بعد ساعات الإغلاق؟",
      answer:
        "نعم، نستقبل الطلبات على مدار 24 ساعة، فنرتب الموعد بعد إغلاق المطعم أو قبل افتتاحه حتى لا يتوقف العمل في المطبخ.",
    },
    {
      question: "لماذا يعود انسداد مطبخ المطعم بعد التسليك بالسلك؟",
      answer:
        "لأن السلك يفتح ممرًا ضيقًا في كتلة الدهون ويترك الباقي ملتصقًا بجدران الماسورة، فتعود وتنغلق. غسيل الخط بضغط المياه يزيل الدهون من الجدران، فيطول الوقت قبل أن تتكرر المشكلة.",
    },
    {
      question: "هل تصلون إلى الأبراج والشقق على شارع الخليج العربي؟",
      answer:
        "نعم، نخدم الأبراج والعمارات على الشارع الساحلي وكل قطع السالمية الداخلية، ونتعامل مع انسداد الشقق والخط الرئيسي للمبنى.",
    },
    {
      question: "المياه تطلع من بلاعة الحمام عند تشغيل الغسالة، ما السبب؟",
      answer:
        "هذا يعني غالبًا أن الانسداد في الماسورة التي تجمع صرف الشقة قبل خروجه إلى الخط الرئيسي، لا في البلاعة نفسها. يحدد الفني مكانه ويفتحه بالماكينة دون تكسير.",
    },
    {
      question: "كم سعر تسليك المجاري في السالمية؟",
      answer:
        "يبدأ من 10 د.ك لتسليك حوض أو بلاعة حمام، ومن 25 د.ك لغسيل خط المطعم بضغط المياه. هذه أسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل البدء.",
    },
    {
      question: "متى تحتاجون إلى الكاميرا في تسليك الأبراج؟",
      answer:
        "عندما يتكرر الانسداد في الخط الرئيسي أو لا يظهر مكانه من فتحات الصرف. الكاميرا تُظهر سبب الانسداد وحالة الماسورة من الداخل، فنختار العلاج المناسب دون تكسير استكشافي.",
    },
  ],
  Body: DrainCleaningSalmiyaBody,
};
