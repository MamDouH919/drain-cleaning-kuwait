// تاريخ آخر تعديل حقيقي في المحتوى الظاهر لكل صفحة، ومنه بيتولد lastmod في
// الـ sitemap. التواريخ متاخدة من git log لآخر commit غيّر النص أو الصور أو
// اللينكات في الصفحة. تعديل الـ title أو الـ description بس، أو شيل meta keywords،
// أو تغيير اسم ملف صورة من غير ما الصورة نفسها تتغير، مش بيتحسب.
// حدّث التاريخ يدويًا مع أي تعديل حقيقي في محتوى الصفحة. وأي صفحة مالهاش تاريخ
// هنا بتطلع في الـ sitemap من غير lastmod.
// تواريخ المقالات مش هنا: بتيجي من dateModified في content/articles.json.

export const PAGE_LAST_MODIFIED: Record<string, string> = {
  "": "2026-10-27",
  "/drain-cleaning-kuwait": "2026-10-06",
  "/roof-waterproofing-kuwait": "2026-10-12",
  "/kitchen-bathroom-drain-cleaning-kuwait": "2026-07-30",
  "/thermal-waterproofing-kuwait": "2026-09-16",
  "/basement-pump-kuwait": "2026-09-16",
  "/manhole-installation-kuwait": "2026-09-16",
  "/water-tank-cleaning-kuwait": "2026-09-16",
  "/gitaroof-insulation-kuwait": "2026-07-30",
  "/drain-cleaning-prices-kuwait": "2026-09-16",
  "/roof-insulation-prices-kuwait": "2026-09-16",
  "/areas": "2026-09-22",
  "/blogs": "2026-10-10",
  "/about-us": "2026-07-30",
  "/contact-us": "2026-07-30",
  "/privacy-policy": "2026-09-15",
  "/terms-conditions": "2026-09-15",

  // صفحات التسليك المكتوبة يدويًا (components/area-pages).
  "/drain-cleaning-hawalli": "2026-10-18",
  "/drain-cleaning-salmiya": "2026-10-18",
  // صفحات التسليك من القالب: لينك عزل أسطح نفس المنطقة في الـ sidebar.
  "/drain-cleaning-asima": "2026-10-27",
  "/drain-cleaning-farwaniya": "2026-10-27",
  "/drain-cleaning-ahmadi": "2026-10-27",
  "/drain-cleaning-fahaheel": "2026-10-27",
  "/drain-cleaning-jahra": "2026-10-27",
  "/drain-cleaning-mubarak-kabeer": "2026-10-27",
  // صفحات عزل الأسطح من القالب: اسم "حولي" اتغير في الصفحات اللي بتذكرها
  // (2026-10-18)، والباقي من آخر إعادة كتابة لبيانات المناطق (2026-09-22).
  "/roof-waterproofing-asima": "2026-10-18",
  "/roof-waterproofing-hawalli": "2026-10-18",
  "/roof-waterproofing-salmiya": "2026-10-18",
  "/roof-waterproofing-mubarak-kabeer": "2026-10-18",
  "/roof-waterproofing-farwaniya": "2026-09-22",
  "/roof-waterproofing-ahmadi": "2026-09-22",
  "/roof-waterproofing-fahaheel": "2026-09-22",
  "/roof-waterproofing-jahra": "2026-09-22",
};
