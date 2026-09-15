# Schema.org / Structured Data Audit — taslikmajarikuwait.com

Scope: local source (uncommitted working tree) + live rendered HTML (production, currently behind local changes).
Files reviewed: `app/layout.tsx`, `components/LocalBusinessSchema.tsx`, `components/StructuredData.tsx`,
`app/[slug]/page.tsx`, `app/drain-cleaning-kuwait/page.tsx`, `app/roof-waterproofing-kuwait/page.tsx`,
`app/about-us/page.tsx`, `app/contact-us/page.tsx`, `app/blogs/drain-cleaning-kuwait/page.tsx`,
`app/blogs/drain-cleaning-in-kuwait/page.tsx`, `lib/areas.ts`, `lib/drain-article.ts`.

Live pages fetched (rendered): `/`, `/drain-cleaning-hawalli`, `/drain-cleaning-kuwait`, `/about-us`,
`/contact-us`, `/blogs/drain-cleaning-kuwait`. All emit syntactically valid JSON-LD (no trailing commas,
Google Rich Results-parseable). Note: the **live** site is running an older build — its `#organization`
name is still "خدمات الكويت" / old NAP, while the local working tree has already renamed the business to
"دار الصيانة الكويتية" and reworked `app/layout.tsx`. Findings below are against the **local source**
(what will ship next), with live-only regressions called out explicitly.

---

## CRITICAL

### 1. `app/about-us/page.tsx` redeclares `Organization` + `WebSite` with the same `@id` as `app/layout.tsx` — the exact conflict the code comments warn against
`app/layout.tsx` (current local version) removed the standalone `Organization` node and made
`LocalBusinessSchema` (`#business`, type `["LocalBusiness","Plumber"]`) the single canonical entity —
with an explicit comment: *"لا تُنشئ نود Organization منفصلاً هنا"* / *"do not redeclare `#organization`/`#website`, a second script with the same `@id` but different values creates an unresolvable conflict"* (see `components/StructuredData.tsx` comment, same rule).

`app/about-us/page.tsx` violates this directly:

```ts
// app/about-us/page.tsx (current)
{
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,   // orphan node, nothing else references #organization anymore
  name: BUSINESS_NAME,
  image: `${SITE_URL}/hero-service.svg`,   // placeholder-ish stock icon, not a real business photo
  logo: `${SITE_URL}/hero-service.svg`,
  ...
},
{
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,          // SAME @id as app/layout.tsx's WebSite node
  name: BUSINESS_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },  // conflicts with layout.tsx's publisher: {"@id": "#business"}
},
```

`app/layout.tsx`'s `WebSite` node (same page, same `@id="#website"`) has `publisher: {"@id":"#business"}`
and a `SearchAction`. Google merges same-`@id` nodes across `<script>` tags on a page; here it receives two
different `publisher` values and a duplicate definition for the same node, which is undefined behavior for
consumers and directly reintroduces the two-entity conflict (`#business` vs `#organization`) that the rest
of the codebase was refactored to eliminate. This is confirmed live too: production's `/about-us`, `/contact-us`, `/drain-cleaning-kuwait`, homepage etc. currently render **three** competing identity blocks per page (`LocalBusiness#business`, `Organization#organization`, and `WebSite#website` with duplicate `ContactPoint`/`PostalAddress`).

**Fix** — delete the `Organization` and `WebSite` nodes from `about-us/page.tsx` entirely and reference the
canonical node:

```ts
// app/about-us/page.tsx (fixed)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "من نحن",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "ar",
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
  ],
};
```

Severity: **Critical** — violates the repo's own documented invariant and creates a genuine same-`@id`
conflict that will confuse Google's Knowledge Graph merge for the primary local-business entity.

---

### 2. FAQPage schema does not match the visible FAQ content on all `drain-cleaning-{area}` pages (~68 pages)
`app/[slug]/page.tsx` builds one `faqs` array from `service.faqs(area.name)` (`lib/areas.ts:561`) and uses
it for **both** the `FAQPage` JSON-LD (line 148) and, for the roof-waterproofing branch, the visible
`<details>` accordion (line 476). But for the **drain-cleaning** branch it renders `<DrainArticle>`
instead, which pulls a *different, unrelated* FAQ set from `articleFaqs(area)` (`lib/drain-article.ts:88`,
rendered at `components/DrainArticle.tsx:41,666-670`):

| Source used in FAQPage JSON-LD (`service.faqs`) | Source rendered on page (`articleFaqs`, drain-cleaning only) |
|---|---|
| "كم سعر تسليك المجاري في {area}؟" | "هل تصل خدمة تسليك المجاري إلى جميع قطع {area}؟" |
| "هل يتم تسليك المجاري في {area} بدون تكسير؟" | "هل تتوفر خدمة طوارئ المجاري ليلاً وخلال العطلات؟" |
| "كم وقت الوصول إلى {area}؟" | "ما العوامل التي تحدد سعر تسليك المجاري؟" |
| ...(6 total, area-branded) | ...(7 total, diagnostic/pricing-factor focused) |

None of the 6 questions in the schema appear as visible text anywhere on the rendered drain-cleaning area
page. This is exactly the "hidden/mismatched FAQ markup" pattern Google's spam policies target (structured
data must reflect visible page content), independent of the FAQ rich-result retirement — mismatched markup
risk applies to *any* schema type, not just SERP eligibility.

**Fix** (pick one, both are one-line):
- Simplest: pass `articleFaqs(area.name)` into the `jsonLd` FAQPage instead of `service.faqs(area.name)` for
  the drain-cleaning branch in `app/[slug]/page.tsx`:
```ts
// app/[slug]/page.tsx
const faqs = service.id === "drain-cleaning"
  ? articleFaqs(area.name)      // matches what DrainArticle actually renders
  : service.faqs(area.name);
```
- Or: since FAQPage has no Google SERP benefit anyway (see Info note below), simply drop the `FAQPage` block
  from the drain-cleaning branch's `jsonLd` and keep only `Service` + `BreadcrumbList`.

Severity: **Critical** (content/schema mismatch, site-wide scale ~68 pages — half of all area pages).

---

## HIGH

### 3. `about-us` `Organization` node uses a placeholder-looking image (`hero-service.svg`) as both `image` and `logo`
`logo`/`image` should be an actual photo/logo asset (the same ones used on `#business`:
`/تسليك-مجاري-الكويت.webp` and `/web-app-manifest-512x512.png`), not a generic hero SVG. Moot once node #1
is removed, but flagging in case any other page still declares its own `Organization`/`logo`.

### 4. `contactPoint.telephone` format inconsistency between `#business` and the live `#organization` node
Live: `#organization.contactPoint.telephone = "+965-98890031"` vs `#business.telephone = "+96598890031"`
(hyphen vs no-hyphen). Once node #1 is removed this disappears, but as a general rule keep telephone format
identical (E.164, no separators) everywhere it's declared, matching Google Business Profile exactly for NAP
consistency.

---

## INFO

### 5. FAQPage schema present on many pages — no Google SERP benefit as of the 2026-05-07 full retirement
Affected: `components/StructuredData.tsx` (home), `app/[slug]/page.tsx` (all area pages),
`app/drain-cleaning-kuwait/page.tsx`, `app/roof-waterproofing-kuwait/page.tsx`, `app/about-us/page.tsx`,
`app/contact-us/page.tsx`, both `app/blogs/*/page.tsx`. None of these are harmful to keep (schema.org valid,
and content generally matches visible copy — see Critical #2 for the one exception), but they no longer earn
rich results. Keep only where content genuinely matches visible Q&A (fine as generic markup / possible
AI-overview signal, unconfirmed benefit) and fix or drop the mismatched drain-cleaning-area instance.
Do not add FAQPage to any *new* pages expecting a SERP feature. Genuine open user Q&A (none found on this
site) should use `QAPage`, not `FAQPage`.

### 6. Missing `Review`/`AggregateRating` — correctly *not* implemented, keep it that way
`lib/areas.ts` (`testimonials`) and `app/[slug]/page.tsx` (lines 414-440) render on-page testimonials with
star icons but **no** `Review`/`AggregateRating` markup exists anywhere in the codebase for them. This is
correct: these are self-authored, unverified testimonials with no way to prove authenticity, and Google's
review-snippet guidelines disallow self-serving reviews for `LocalBusiness` rich results (organic star
snippets require reviews aggregated from independent third-party platforms, e.g. Google Business Profile).
**Recommendation: do not add `Review`/`AggregateRating` schema for these testimonials.** If genuine
third-party reviews are later collected (Google Business Profile, verified review platform), aggregate
those via the platform's own widget/API rather than hand-authoring `AggregateRating` from the site's own
testimonial copy.

### 7. `Article.author` on blog pages references the `LocalBusiness`/`Plumber` node
`app/blogs/drain-cleaning-kuwait/page.tsx` and `.../drain-cleaning-in-kuwait/page.tsx` set
`author: { "@id": "#business" }`. `LocalBusiness` is a subtype of `Organization`, so this is schema.org-valid
and Google-accepted (Article.author accepts Organization). No fix required, just confirming it resolves
correctly once merged with the `#business` node (it does — `#business` has a `name`).

### 8. No `ImageObject` with explicit `width`/`height` on `Service`/`Article` images
Several `image` properties (`Service.image`, `Article.image`) are plain URL strings rather than
`ImageObject` with `width`/`height`. Not required, but adding dimensions improves eligibility for image
pack / large-image Article rich results:
```ts
image: {
  "@type": "ImageObject",
  url: `${SITE_URL}${service.coverImage}`,
  width: 1200,
  height: 630,
},
```

### 9. `BreadcrumbList` correctness — verified OK
Checked against actual `<Breadcrumbs>` component output and URL hierarchy on: area pages (`الرئيسية` → hub
→ area), `drain-cleaning-kuwait`/`roof-waterproofing-kuwait` (`الرئيسية` → self), and blog articles
(`الرئيسية` → `المدونة` → article). All match visible breadcrumbs and real path hierarchy. No fixes needed.

### 10. `LocalBusiness`/`Plumber` required + recommended properties — all present
`address` (PostalAddress), `telephone`, `geo` (GeoCoordinates), `openingHours`/`openingHoursSpecification`,
`areaServed` (Country + ~60 cities), `priceRange` are all present and well-formed in
`components/LocalBusinessSchema.tsx`. `@type: ["LocalBusiness","Plumber"]` array form is valid schema.org
and a reasonable compromise for generic-parser compatibility. No action needed here besides fixing #1/#4
above so this remains the single source of truth.

### 11. Live vs. local drift (not a schema bug, but relevant before shipping)
Production is currently serving an older build with the `Organization` node still present in
`app/layout.tsx` and the old business name "خدمات الكويت". Once the current local `layout.tsx`/
`LocalBusinessSchema.tsx` refactor ships, re-test all pages with Rich Results Test to confirm the
`#organization` removal doesn't leave any other page (beyond `about-us`) referencing the now-deleted
`#organization` `@id`.
