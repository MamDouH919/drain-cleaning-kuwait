import Link from "next/link";
import { coreServices, priceLinks } from "@/lib/services";
import type { CustomAreaPage } from "./types";

const h2Class = "text-2xl font-extrabold text-slate-900 sm:text-3xl";
const leadClass = "mt-4 text-lg leading-relaxed text-slate-700";
const linkClass = "font-bold text-sky-700 underline-offset-4 hover:underline";

const drainHub = coreServices.find((s) => s.id === "drain")!;
const kitchenBathroom = coreServices.find((s) => s.id === "kitchen-bathroom")!;
const pricesLink = priceLinks.find((l) => l.href === "/drain-cleaning-prices-kuwait")!;

const buildingCauses = [
  {
    title: "ارتجاع المياه في الأدوار السفلى",
    desc: "إذا انسد الخط المشترك أسفل العمارة، تبحث المياه النازلة من الأدوار العليا عن أقرب مخرج، فتطفح من بلاعات الدور الأرضي أو الأول مع أن سكانه لم يتسببوا في الانسداد.",
  },
  {
    title: "دهون مطابخ كثيرة في ماسورة واحدة",
    desc: "مطابخ عدة شقق تصب في العمود نفسه، فتتراكم الدهون على جدرانه أسرع من ماسورة بيت مستقل، ويضيق مجراه شيئًا فشيئًا حتى ينسد.",
  },
  {
    title: "مواسير مضى عليها سنوات طويلة",
    desc: "في العمارات القديمة تحمل المواسير ترسبات متراكمة وأحيانًا وصلات متآكلة، فيعود الانسداد بعد أيام من التسليك إذا لم تُغسل الماسورة من الداخل بالكامل.",
  },
  {
    title: "مخلفات من شقق أخرى",
    desc: "مناديل مبللة أو بقايا طعام يرميها ساكن في دور آخر تكفي لسد العمود المشترك، ولهذا يتكرر الانسداد في بعض العمارات رغم حرص أغلب سكانها.",
  },
];

const locateSigns = [
  {
    sign: "نقطة واحدة فقط لا تصرف (حوض المطبخ أو بلاعة حمام) والباقي طبيعي",
    meaning: "الانسداد غالبًا داخل شقتك وقريب من النقطة نفسها.",
  },
  {
    sign: "ارتجاع في أكثر من نقطة داخل الشقة في الوقت نفسه",
    meaning: "الانسداد في ماسورة الشقة الرئيسية قبل اتصالها بعمود العمارة.",
  },
  {
    sign: "المياه تخرج من بلاعتك حين يستخدم الجيران الماء، أو يشتكي أكثر من ساكن معًا",
    meaning: "الانسداد غالبًا في العمود المشترك أو الخط الرئيسي للعمارة أو المنهول.",
  },
];

const propertyTypes = [
  {
    title: "الشقق داخل العمارات",
    desc: "نصل إلى الانسداد من فتحات الصرف نفسها: بلاعة الحمام وحوض المطبخ والمغسلة والكرسي، ونفتحه بالسوستة أو ماكينة التسليك دون تكسير البلاط، ثم نختبر كل نقاط الشقة قبل المغادرة.",
  },
  {
    title: "الفلل والبيوت المستقلة",
    desc: "في أحياء مثل الجابرية وسلوى وبيان ومشرف يمتد خط الصرف من الحمامات والمطبخ إلى غرف التفتيش في الحوش. الانسداد في هذا الخط يحتاج غالبًا إلى ماكينة التسليك أو ضغط المياه، ونستعين بكاميرا الفحص لتحديد مكانه بدل الحفر.",
  },
  {
    title: "المحلات والمطاعم",
    desc: "على الشوارع التجارية مثل شارع تونس وشارع بيروت تصرف مطابخ المطاعم كميات كبيرة من الدهون. هنا نغسل الماسورة بضغط المياه (الجت) لإزالة الدهون من جدرانها، لا لفتح ثغرة مؤقتة فيها فقط.",
  },
];

const coveredDistricts = [
  "الجابرية", "سلوى", "مشرف", "بيان", "الرميثية",
  "الشعب", "الشهداء", "الصديق", "الزهراء", "حطين",
];

const tips = [
  "لا ترمِ المناديل المبللة أو الحفاضات في الكرسي؛ في العمارة لا تسد ماسورتك وحدك بل الخط المشترك مع جيرانك.",
  "اجمع زيت القلي في علبة وارمه مع القمامة بدل سكبه في حوض المطبخ.",
  "إذا لاحظت بطء التصريف في أكثر من شقة، أبلغ حارس العمارة أو المالك مبكرًا قبل أن يطفح الدور الأرضي.",
  "تجنّب الأسيد والمواد الكيميائية القوية؛ فهي تضر المواسير القديمة ولا تفتح انسداد الخط المشترك.",
];

function DrainCleaningHawalliBody() {
  return (
    <>
      <section id="buildings" className="scroll-mt-24">
        <h2 className={h2Class}>لماذا يتكرر انسداد المجاري في عمارات حولي؟</h2>
        <p className={leadClass}>
          أغلب السكن في حولي شقق داخل عمارات متعددة الطوابق، وفي هذه المباني لا
          يعمل صرف كل شقة وحده؛ فمغاسل الأدوار وحماماتها ومطابخها تصب كلها في
          ماسورة عمودية مشتركة تنزل إلى الخط الرئيسي، ثم إلى غرفة التفتيش (المنهول)
          أسفل العمارة. لذلك تختلف مشاكل الصرف هنا عن البيوت المستقلة:
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {buildingCauses.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 ring-1 ring-slate-900/5"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="locate" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>هل الانسداد في شقتك أم في خط العمارة؟</h2>
        <p className={leadClass}>
          هذا أول ما يحدده الفني عند الوصول، لأن طريقة العلاج تختلف تمامًا بين
          الحالتين. وهذه علامات تساعدك على التمييز قبل أن تتصل:
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
          <table className="w-full min-w-[520px] text-right text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th scope="col" className="px-5 py-4 font-extrabold">ما تلاحظه</th>
                <th scope="col" className="px-5 py-4 font-extrabold">مكان الانسداد المرجّح</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {locateSigns.map((row) => (
                <tr key={row.sign} className="bg-white">
                  <td className="px-5 py-4 font-bold leading-relaxed text-slate-800">{row.sign}</td>
                  <td className="px-5 py-4 leading-relaxed text-slate-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          إذا كانت المشكلة في خط العمارة، نوضح لك مكانها بعد الفحص لتبلغ المالك أو
          حارس العمارة، ونفتح الخط الرئيسي وغرف التفتيش بماكينة التسليك أو ضغط
          المياه. أما إذا كانت محصورة في حوض المطبخ أو بلاعة الحمام، فصفحة{" "}
          <Link href={kitchenBathroom.href} className={linkClass}>
            {kitchenBathroom.anchor}
          </Link>{" "}
          تشرح أسبابها وطرق الوقاية منها.
        </p>
      </section>

      <section id="property-types" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>طريقة العمل حسب نوع العقار</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {propertyTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prices" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>أسعار تسليك المجاري في حولي</h2>
        <p className={leadClass}>
          يبدأ السعر من 10 د.ك لتسليك حوض أو بلاعة حمام، ومن 15 د.ك للكرسي، ومن
          20 د.ك للخط الرئيسي، ومن 25 د.ك للتسليك بضغط المياه. وفي العمارات يتوقف
          السعر أساسًا على مكان الانسداد: نقطة داخل الشقة، أم الخط الرئيسي للمبنى.
        </p>
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-base font-semibold text-amber-900">
          الأسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل بدء
          العمل.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          الجدول الكامل وما يؤثر في التكلفة تجده في صفحة{" "}
          <Link href={pricesLink.href} className={linkClass}>
            {pricesLink.anchor}
          </Link>
          .
        </p>
      </section>

      <section id="areas" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>المناطق التي نغطيها في محافظة حولي</h2>
        <p className={leadClass}>
          نصل إلى منطقة حولي نفسها وإلى باقي مناطق المحافظة على مدار 24 ساعة،
          ومنها:
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {coveredDistricts.map((district) => (
            <li
              key={district}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-base font-semibold text-slate-700"
            >
              {district}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          أما السالمية فلها صفحة خاصة بطبيعة مبانيها:{" "}
          <Link href="/drain-cleaning-salmiya" className={linkClass}>
            تسليك مجاري السالمية
          </Link>
          . ولباقي محافظات الكويت راجع صفحة{" "}
          <Link href={drainHub.href} className={linkClass}>
            {drainHub.anchor}
          </Link>
          . ولأصحاب الفلل والبيوت نقدم أيضًا{" "}
          <Link href="/roof-waterproofing-hawalli" className={linkClass}>
            عزل أسطح حولي
          </Link>{" "}
          لحماية السطح من تسرب المياه والحرارة.
        </p>
      </section>

      <section id="tips" className="mt-12 scroll-mt-24">
        <h2 className={h2Class}>نصائح لسكان العمارات</h2>
        <ul className="mt-6 flex flex-col gap-3">
          {tips.map((tip) => (
            <li
              key={tip}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-base font-medium leading-relaxed text-slate-700 ring-1 ring-slate-900/5"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const drainCleaningHawalli: CustomAreaPage = {
  service: "drain-cleaning",
  label: "تسليك مجاري حولي",
  title: "تسليك مجاري حولي 24 ساعة | الشقق والعمارات والفلل",
  description:
    "تسليك مجاري حولي 24 ساعة: فتح انسداد الشقق والعمارات والفلل في حولي والجابرية وسلوى والرميثية بدون تكسير، مع سعر واضح قبل البدء. اتصل 98890031",
  h1: "تسليك مجاري حولي للشقق والعمارات والفلل",
  intro: (
    <>
      <strong>تسليك مجاري حولي</strong> خدمة تقدمها دار الصيانة الكويتية لفتح
      انسداد الصرف في الشقق والعمارات والفلل والمحلات بمنطقة حولي وباقي مناطق
      المحافظة، على مدار 24 ساعة. يفحص الفني نقاط الصرف أولًا ليعرف هل الانسداد
      داخل شقتك أم في الخط المشترك للعمارة، ثم يفتحه بالسوستة أو ماكينة التسليك
      أو ضغط المياه دون تكسير، ونبلغك بالسعر قبل البدء.
    </>
  ),
  experience: "يعمل في حولي فريق لديه خبرة أكثر من 15 عامًا في الصرف الصحي.",
  cover: {
    src: "/drain-cleaning/bathroom-floor-drain-cleaning.webp",
    alt: "فني يفتح انسداد بلاعة أرضية في حمام شقة بسلك ماكينة التسليك",
    width: 1080,
    height: 1080,
  },
  areaServed: [
    { type: "City", name: "حولي" },
    { type: "AdministrativeArea", name: "محافظة حولي" },
  ],
  faqTitle: "الأسئلة الشائعة عن تسليك مجاري حولي",
  faqs: [
    {
      question: "هل تصلون إلى كل مناطق حولي؟",
      answer:
        "نعم، نخدم منطقة حولي وباقي مناطق المحافظة مثل الجابرية وسلوى ومشرف وبيان والرميثية والشعب والشهداء والصديق والزهراء وحطين، على مدار 24 ساعة.",
    },
    {
      question: "المياه ترجع من بلاعة شقتي في الدور الأرضي، هل الانسداد عندي؟",
      answer:
        "ليس بالضرورة. ارتجاع المياه في الأدوار السفلى يحدث غالبًا عندما ينسد الخط المشترك للعمارة أو المنهول، فتخرج مياه الأدوار العليا من أقرب بلاعة. يحدد الفني مكان الانسداد بالفحص قبل بدء العمل.",
    },
    {
      question: "كم سعر تسليك المجاري في حولي؟",
      answer:
        "يبدأ من 10 د.ك لتسليك حوض أو بلاعة حمام، ومن 20 د.ك للخط الرئيسي. هذه أسعار تقديرية، والسعر النهائي يتحدد بعد المعاينة ونبلغك به قبل البدء.",
    },
    {
      question: "هل تفتحون انسداد الخط الرئيسي للعمارة والمنهول؟",
      answer:
        "نعم، نفتح الخط الرئيسي وغرف التفتيش بماكينة التسليك أو ضغط المياه، ونستخدم كاميرا الفحص عند تكرار الانسداد لمعرفة سببه.",
    },
    {
      question: "هل يحتاج التسليك داخل الشقة إلى تكسير البلاط؟",
      answer:
        "في أغلب الحالات لا. نصل إلى الانسداد من فتحات الصرف نفسها بالسوستة أو الماكينة، وإذا لم يتضح مكانه نفحص الماسورة بالكاميرا بدل التكسير.",
    },
    {
      question: "هل يوجد ضمان على تسليك المجاري في حولي؟",
      answer:
        "نعم، نقدم ضمانًا على العمل بعد اختبار انسياب الصرف في كل النقاط، ونوضح تفاصيله قبل التنفيذ.",
    },
  ],
  Body: DrainCleaningHawalliBody,
};
