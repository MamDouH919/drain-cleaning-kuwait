# Local SEO Audit — دار الصيانة الكويتية (taslikmajarikuwait.com)

Audited via local codebase (no live render performed): `/Users/mamdouh919/Workspace/taslik-majari-kuwait`

## Local SEO Score: 37 / 100

| Dimension | Weight | Score (0-100 of dimension) | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 20 | 5.0 |
| Reviews & Reputation | 20% | 25 | 5.0 |
| Local On-Page SEO | 20% | 50 | 10.0 |
| NAP Consistency & Citations | 15% | 47 | 7.0 |
| Local Schema Markup | 10% | 60 | 6.0 |
| Local Link & Authority Signals | 10% | 40 | 4.0 |
| **Total** | | | **37** |

## Business Type & Vertical
- **Type detected: Hybrid-leaning-SAB.** No street address is shown anywhere in the rendered UI (Footer, `app/contact-us/page.tsx`, `app/about-us/page.tsx`) — correct for a service-area business. But `lib/schema.ts` injects a fabricated `PostalAddress` (see Critical #1), creating a type mismatch between the visible site (pure SAB) and the schema (implies a real storefront).
- **Vertical: Home Services** (drain cleaning/تسليك مجاري + roof waterproofing/عزل أسطح, plus sump pump, manhole, water tank cleaning). Correctly uses `Plumber` subtype for one line of business; missing a `RoofingContractor`/waterproofing-appropriate subtype for the other (see Medium #6).

## Critical Issues

### 1. Fabricated street address in LocalBusiness schema (fake-address anti-pattern)
`lib/schema.ts:66-73`:
```js
address: {
  "@type": "PostalAddress",
  streetAddress: "خدمة متنقلة تغطي جميع محافظات الكويت", // "mobile service covering all Kuwait governorates"
  addressLocality: "مدينة الكويت",
  addressRegion: "الكويت",
  postalCode: "13001",
  addressCountry: "KW",
}
```
This stuffs a marketing sentence into `streetAddress` and asserts a specific `postalCode`/locality that does not correspond to any real, visitable premises — the site itself shows no address anywhere. This is exactly the "fake storefront for a SAB" pattern Google's guidelines warn against, and it is a **NAP discrepancy between the visible site and structured data** (visible site: no address at all; schema: full postal address). It risks a schema/GBP suspension-style trust penalty and confuses entity resolution.
**Fix:** Remove the fabricated `PostalAddress` entirely. For a service-area business, Google's own guidance (and the SAB-specific schema pattern) is to omit `address` (or, if Google's validator complains about the "required" property, keep only `addressCountry`/`addressRegion` — no fake street/postal code) and rely on `areaServed` + `serviceArea` (GeoCircle), which the file already implements correctly for the 63 areas. Match whatever is set as the *service area* in the real Google Business Profile — do not invent a locality that isn't the verified GBP address.

### 2. Fixed, verbatim testimonials swapped across all 63 area pages (fabricated reviews)
`lib/areas.ts:547-561` (drain-cleaning) and `:650-663` (roof-waterproofing) hardcode exactly 3 named "customers" per service — **أبو محمد, أم عبدالله, فهد العتيبي** / **بو سعود, أم يوسف, خالد المطيري** — with fixed quote text that only swaps `${area}`. `app/[slug]/page.tsx:414-438` renders these under the heading **"آراء عملائنا في {area}"** ("Our customers' opinions in [area]") with 5 hardcoded gold stars per card (`app/[slug]/page.tsx:425-431`), for every one of the 63×2 = 126 generated pages.
- The same "أبو محمد" appears to have given a glowing, hyper-local review in حولي, السالمية, الجهراء, and all 60 other areas simultaneously — trivially detectable by any user who compares two area pages, and a strong duplicate/fabricated-content signal to crawlers.
- These are **not** currently marked up as `Review`/`AggregateRating` schema (confirmed via repo-wide search — no `aggregateRating`/`reviewCount`/`Review` type found), so there is no direct Merchant Review / rich-result policy violation today. But the on-page presentation (named reviewer + 5-star graphic + "our customers' opinions in [area]") reads as genuine social proof, which is misleading (Google's guidance against fake/deceptive reviews applies to on-page UGC presentation, not just schema) and undermines trust/E-E-A-T if noticed.
**Fix:** Either (a) remove the fabricated testimonial section from the area-page template until real, verifiable reviews exist, or (b) replace with a live Google review feed/widget (pulling real reviews from GBP, filtered/labeled generically e.g. "reviews from Google" without inventing area-specific attribution), or (c) relabel honestly as illustrative example feedback (not tied to a specific area) and remove the implication that it's a per-area customer. Never add `Review`/`aggregateRating` schema around this fabricated content.

### 3. No real Google Business Profile signal anywhere on the site
- Repo-wide search found **zero** GBP place links, no `g.page` short links, no embedded Maps pin tied to an actual location/place_id, no reviews widget, no photo/post embeds.
- `app/contact-us/page.tsx:332` embeds `https://www.google.com/maps?q=Kuwait&output=embed` — a generic map centered on the country, not the business's verified GBP listing.
- `components/Footer.tsx:41-45` explicitly documents this gap in a TODO comment: `socialLinks` is intentionally empty pending "this business's own verified profiles (Google Business Profile, Facebook Page, Instagram, etc.)".
- Given GBP primary category is the single largest ranking factor for local home-services queries (Whitespark 2026: score 193; wrong category is the #1 *negative* factor at 176), and the 18-day review-velocity cliff (Sterling Sky), the complete absence of any verifiable GBP reference on-site is the single biggest gap in this audit — but it is **outside what code/on-page inspection can confirm or fix**. Recommend an off-page action: verify the live GBP listing exists, confirm primary category (should be a home-services subtype matching `Plumber`, e.g. "Drainage Service" — not a mismatched category), and add the real `sameAs` GBP URL + real embed with `place_id` once available.

## High Priority

### 4. Duplicate-content / doorway-page risk across 63 area pages ("swap test" failure)
`lib/areas.ts:350-455` selects prose for each section (`heroLead`, `whyUsPrimary`, `intro`, `problems`, etc.) from a **pool of only 5 variants** via `hashString(area+section) % variants.length`. With 63 areas mapped onto 5 buckets per section, roughly **12-13 areas per service will receive byte-identical paragraphs**, differing only by the interpolated area name and the "nearby areas" list. Running the classic doorway-page swap test (swap the area name between two pages sharing a hash bucket) produces near-100%-identical body copy for large clusters of pages. This is a well-known thin/duplicate-content pattern for programmatic SEO and a real ranking-suppression risk at scale (126 total generated pages).
**Fix:** Increase variant pool size substantially (ideally per-area unique content blocks, or a much larger combinatorial pool — e.g., 15-20+ variants per section, or generate copy that references locality-specific landmarks/building types instead of purely templated phrasing) so no two areas share an identical paragraph. Prioritize the highest-traffic/highest-competition areas (حولي، السالمية، الفروانية، الجهراء، الأحمدي) for fully custom, non-templated copy first.

### 5. Local schema geo coordinates are generic/imprecise and reused for all 63 areas
`lib/schema.ts:74-78` and `:83-91` use one fixed lat/long (`29.3759, 47.9774` — Kuwait City center) as the business `geo` and as the `serviceArea.geoMidpoint`, at **4 decimal places**, not the 5+ recommended (~1.1m accuracy target). Because this is a single sitewide node with no address in the first place, this is a minor issue on its own, but combined with Critical #1 it reinforces the appearance of a fake fixed "location" that doesn't exist. If the fabricated address is removed per Critical #1, also drop or clearly justify the fixed `geo` (a SAB without verified premises should generally omit `geo` on the org-level node, or use it only if it reflects a real, verified office/warehouse location).

## Medium Priority

### 6. Missing `RoofingContractor` (or equivalent) subtype for the waterproofing/insulation line of business
`lib/schema.ts:47`: `"@type": ["LocalBusiness", "Plumber"]`. This correctly covers تسليك مجاري (drain cleaning) but roof waterproofing/insulation (عزل أسطح) — roughly half the business's service lines and half the generated area pages — has no matching Google-supported subtype in the type array. `RoofingContractor` (per `home-services` schema guidance) is the closest fit and can be added to the same `@type` array without conflicting with `Plumber`.
**Fix:** Add `"RoofingContractor"` to the `@type` array: `["LocalBusiness", "Plumber", "RoofingContractor"]`.

### 7. `priceRange: "$$"` is generic and not currency-specific
Present (recommended property satisfied), but `"$$"` conveys nothing meaningful for a Kuwaiti audience already reading `currenciesAccepted: "KWD"` elsewhere in the same schema. Low-cost fix: replace with an actual approximate KWD range if available (e.g., `"KD 10 - KD 150"`), improving both schema quality and potential rich-result relevance.

### 8. `FAQPage` schema duplicated with divergent content across pages (`StructuredData.tsx` sitewide vs. per-area `faqs()` in `lib/areas.ts` vs. `contact-us` page) with no shared `@id`
Not strictly a local-SEO NAP issue, but worth flagging: three separate `FAQPage` blocks exist (global `StructuredData.tsx`, per-area-page `service.faqs(area)`, and `contact-us`'s own `faqs`) with no `@id` linking or dedup strategy, increasing risk of Google merging/rejecting overlapping FAQ rich results across near-duplicate area pages (compounds Finding #4).

## NAP Consistency Audit

| Source | Name | Phone | Address |
|---|---|---|---|
| `lib/areas.ts` constants | دار الصيانة الكويتية | +96598890031 (98890031 display) | — (not defined) |
| `lib/schema.ts` (LocalBusiness JSON-LD, sitewide) | دار الصيانة الكويتية (+ legalName, alternateName) | +96598890031 | **Fabricated**: "خدمة متنقلة تغطي جميع محافظات الكويت", مدينة الكويت, 13001, KW |
| `app/contact-us/page.tsx` (visible + ContactPoint schema) | دار الصيانة الكويتية | +96598890031 | Not shown; generic "Kuwait" map embed only |
| `components/Footer.tsx` (visible, sitewide) | دار الصيانة الكويتية | +96598890031 | Not shown; text says "جميع مناطق الكويت — خدمة 24 ساعة" |
| `app/about-us/page.tsx` | دار الصيانة الكويتية | +96598890031 | Not shown |

**Verdict:** Name and phone are perfectly consistent everywhere (strong). The only discrepancy is address: visible site = no address (correct SAB posture); schema = fabricated postal address (Critical #1). This single inconsistency is the most important NAP fix on the site.

## GBP Optimization Checklist

| Signal | Status |
|---|---|
| GBP profile link (`sameAs`) | Missing — `sameAs` only contains WhatsApp URL |
| Embedded Google Map tied to real listing (place_id/CID) | Missing — generic `?q=Kuwait` embed only |
| Review widget / live review feed | Missing |
| GBP posts indicator | Missing |
| Photo evidence tied to GBP | Missing (site has generic hero/service images, not attributed as GBP photos) |
| Primary category correctness | Cannot verify from code — off-page, requires GBP dashboard access |
| Review velocity (18-day rule) | Cannot verify from code — requires live GBP data |

## Review Health Snapshot
- No `aggregateRating`/`reviewCount` present anywhere in schema (neutral — at least not falsely marked up).
- On-page "reviews" are fabricated, fixed, and reused across all area pages (see Critical #2) — this is a reputational/trust risk, not a genuine review health signal. **Actual review count, rating, recency, and response rate cannot be assessed** without access to the live GBP listing.

## Citation Presence
Not independently verifiable from the codebase or without live web/paid-tool access. Kuwait's local market makes US-centric "Tier 1" directories (Yelp, BBB) largely inapplicable — recommend checking Kuwait-relevant equivalents instead: **Google Business Profile** (primary), local business directories (e.g., Kuwait Yellow Pages-style listings), Instagram/Facebook business pages (currently `socialLinks` is empty per Footer TODO), and Thumbtack-equivalent home-services marketplaces if operating in the region. No evidence of citation-building strategy in the codebase (no citation tracking, no NAP snippet reused for outreach).

## Local Schema Validation Summary
| Property | Present? | Note |
|---|---|---|
| `@type` correct subtype | Partial | `Plumber` present; `RoofingContractor` missing (Medium #6) |
| `name` (required) | Yes | |
| `address` (required) | Yes, but **fabricated** | Critical #1 |
| `geo` 5-decimal precision | No | 4 decimals, generic fixed point (High #5) |
| `openingHoursSpecification` | Yes | 24/7, plausible for emergency plumbing |
| `telephone` | Yes | Matches site NAP |
| `url` | Yes | |
| `priceRange` | Yes, generic | Medium #7 |
| `areaServed` | Yes — all 63 areas + country | Strong — matches `lib/areas.ts` fully |
| `aggregateRating` / `review` | Not present | Safe (no fake-review schema), but also no genuine trust signal |

## Location Page Quality (63 areas × 2 services = 126 pages)
- Strong structural pattern: dedicated page per area+service, breadcrumbs, internal links to hub page, nearby-area cross-links, area-specific FAQs — this aligns with "dedicated service pages" being the #1 local organic ranking factor per Whitespark 2026.
- **Weak unique-content ratio**: prose is drawn from only 5 rotating variants per section per hashed area (High #4) — realistic unique-content percentage per page is likely well below what search engines tolerate at this page count once cross-referenced, since ~1/5 of areas share verbatim paragraphs.
- Doorway-page swap test: **fails** for any two areas sharing the same hash bucket (only the area name + "nearby" list differ).
- Internal linking depth: pages link to service hub, the sibling service for the same area, `/contact-us`, and 3 nearby-area pages — reasonable depth, no orphaned area pages detected in the sample reviewed.

## Top 10 Prioritized Actions

1. **[Critical]** Remove the fabricated `PostalAddress` from `lib/schema.ts` (streetAddress/postalCode/locality) — rely on `areaServed`/`serviceArea` only, matching whatever the real GBP service-area configuration is.
2. **[Critical]** Remove or honestly relabel the fixed, reused testimonials in `lib/areas.ts` (`testimonials()`) rendered in `app/[slug]/page.tsx` — replace with real reviews pulled from GBP or clearly generic/illustrative copy, not per-area customer attribution.
3. **[Critical]** Verify the real Google Business Profile listing off-platform: confirm primary category correctness (top ranking factor), confirm verification method/address, and add its real link/place_id to `sameAs` and the contact-us map embed.
4. **[High]** Expand the area-page prose variant pools in `lib/areas.ts` well beyond 5 options (or write per-area custom paragraphs for top-tier areas) to pass the doorway-page swap test and raise unique-content ratio across all 126 generated pages.
5. **[High]** If Critical #1 is fixed, drop or justify the fixed `geo` coordinates in `lib/schema.ts`; if kept for a real office, upgrade to 5-decimal precision.
6. **[Medium]** Add `"RoofingContractor"` to the `@type` array in `lib/schema.ts` to correctly represent the waterproofing/insulation line of business.
7. **[Medium]** Replace generic `priceRange: "$$"` with an actual approximate KWD range.
8. **[Medium]** Consolidate the three separate `FAQPage` schema blocks (global, per-area, contact-us) with distinct `@id`s or a dedup/canonicalization strategy to avoid rich-result conflicts across near-duplicate pages.
9. **[Medium]** Populate `components/Footer.tsx`'s empty `socialLinks` with real, verified profiles (GBP, Instagram, Facebook) — currently intentionally left blank per the code's own TODO.
10. **[Low]** Replace the generic `google.com/maps?q=Kuwait` embed on `contact-us` with an embed tied to the verified GBP place, once available.

## Limitations Disclaimer
This audit was performed by reading the local codebase only (no live browser render, no DataForSEO/GBP API access, no external citation search). The following could **not** be assessed and require live/paid tooling:
- Actual Google Business Profile primary/secondary category, verification status, review count/rating/velocity, posts, and Q&A.
- Real citation presence/consistency across Kuwait-relevant directories.
- Live local pack rankings or proximity-driven variance (proximity alone accounts for ~55.2% of ranking variance per Search Atlas ML study and is outside on-page control regardless).
- Rendered output of client-side widgets, if any are added later via JS not present in the source reviewed.
