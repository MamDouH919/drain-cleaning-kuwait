# SXO Analysis — taslikmajarikuwait.com

Date: 2026-09-15
Scope: Arabic local-service intent (تسليك مجاري / عزل أسطح), Kuwait.
Method: live HTML fetch of 4 pages + WebSearch SERP sampling for 3 query patterns +
source review of `lib/areas.ts`, `app/[slug]/page.tsx`, `components/DrainArticle.tsx`.

---

## 0. Headline Finding

The site is **not absent from the SERP because of thin content — it is absent because
every page hedges on the one thing the query demands.** Price queries get no prices.
Emergency queries get an article wrapper. Comparison queries get unverifiable superlatives.
Competitors ranking top-10 publish concrete numbers (15–25 د.ك، 25–40 د.ك، 5 د.ك/م²),
concrete guarantees (ضمان 10 سنوات / 20 عاماً) and put the phone number in the title tag.

For the sampled query `تسليك مجاري حولي الكويت`, the target domain **did not appear in
the top 10**. Ranking competitors were: malekclean.com, plumbingservicesinkuwait.com,
fnysapaksehy.com, plumbertop.com, tanzifkuwait.com, tslikmajari.com, taslikmegary.com,
fnykuwaitsehy.com, algoharahclean.com.

---

## 1. Queries Analyzed

| # | Query | Intent | Target page |
|---|-------|--------|-------------|
| Q1 | `تسليك مجاري حولي` | Local emergency, transactional, "call now" | `/drain-cleaning-hawalli` |
| Q2 | `اسعار تسليك مجاري الكويت` | Commercial investigation, price-first | `/drain-cleaning-prices-kuwait` |
| Q3 | `شركة عزل أسطح الكويت` | Commercial, vendor-selection | `/roof-waterproofing-kuwait` + `/roof-waterproofing-hawalli` |

### SERP consensus (observed + known local-service patterns)

- **Q1**: map pack (3 GBP listings w/ star ratings + "مفتوح ٢٤ ساعة") above organic;
  organic slots are **LocalBusiness/Service pages**, ~85% consensus. Every single
  top-10 title observed contains a **phone number** (e.g. `تسليك مجاري حولي | 60439942 | ...`,
  `تسليك مجاري حولي الكويت |51113865|فني تسليك بواليع حولي`, `تسليك مجاري حولي 55461147`).
  Phone-in-title is a de-facto ranking/CTR convention in this niche.
- **Q2**: SERP surfaces **numeric price ranges directly in snippets**. Google's own
  summary returned "15 إلى 25 دينار كويتي" and "25 إلى 40 دينار" pulled from competitor
  pages. Featured-snippet/PAA territory ("كم سعر...؟"). Winner = page with a real table.
- **Q3**: vendor-comparison SERP. Differentiators in visible titles/snippets are
  **warranty length** (ضمان 20 عاماً، ضمان 10 سنوات), **discount** (خصم 35%، خصم 30%),
  **material named** (فوم أمريكي، جيتاروف) and **per-m² price** (5 د.ك للمتر).

---

## 2. Page-Type Mismatches

### MISMATCH A — CRITICAL: pricing page with zero prices
`/drain-cleaning-prices-kuwait`

The page is built as a pricing page and titled as one (`اسعار تسليك مجاري الكويت | أسعار
فتح المجاري 2026 بدون رسوم خفية`). It has an H2 `جدول أسعار خدمات تسليك المجاري` and a
five-row table. **Every price cell is a non-answer:**

| Row | "Price" cell |
|---|---|
| تسليك مجاري المطابخ | `تبدأ من أسعار مناسبة` |
| تسليك مجاري الحمامات | `تبدأ من أسعار مناسبة` |
| فتح المجاري الرئيسية | `حسب المعاينة` |
| شفط البيارات والجور | `حسب حجم البيارة` |
| خدمة طوارئ 24 ساعة | `سعر واضح قبل البدء` |

Verified by extraction: **0 occurrences of `دينار`, `د.ك` or `KWD` in the rendered body
text of all four pages sampled.** The page promises "بدون رسوم خفية" in the title while
hiding every figure — the exact credibility gap that kills a price-intent visit.

The `AggregateOffer` JSON-LD is correspondingly hollow:

```json
{"@type":"AggregateOffer","priceCurrency":"KWD","availability":"https://schema.org/InStock","areaServed":"KW"}
```

No `lowPrice` / `highPrice` → schema is invalid for price rich results and Google has
nothing to extract for a snippet. Competitors do have numbers, so they win the snippet.

Severity: **CRITICAL**. This is the single highest-leverage fix on the site.

### MISMATCH B — HIGH: transactional area pages wrapped as blog Articles
`/drain-cleaning-hawalli` (and all 63 drain-cleaning area pages via `DrainArticle.tsx`)

The rendered page declares itself an editorial post:

```
class="... post-6100 post type-post status-publish format-standard has-post-thumbnail hentry category-sewage-plumbing"
itemScope itemType="https://schema.org/Article"
```

…with `<h1 class="article-title" itemProp="headline">`, an article rating widget
(`5 ★★★★★ (4 تقييم)` / `قيّم هذا المقال`), a TOC, an `ArticleSidebar`, and sections
titled `أحدث المقالات` and `مقالات مفيدة`.

The SERP for Q1 rewards a **local service page**, not an article. The page sends
contradictory type signals: `schema.org/Article` microdata on the wrapper vs
`LocalBusiness` + `Plumber` + `Service` in JSON-LD. Article framing also drags in
article-shaped UX (rate this article, read more posts) that competes with the only
action that matters at 11pm with a flooding kitchen: **call**.

Note the WordPress artifacts (`post-6100`, `hentry`, `status-publish`) in a Next.js
codebase — this markup was carried over from a previous WP template and no longer
describes what the page is.

Severity: **HIGH**.

### MISMATCH C — HIGH: superlative-stuffed H1s that no human searches
`/roof-waterproofing-hawalli` and all roof area pages

Live H1: **`اشطر عزل أسطح حولي — عزل مائي وحراري بضمان`**

This comes from `lib/areas.ts` → `Area.sub` (values include `اشطر`, `أرخص`, `أمهر`,
`أجود`, `درجة أولى`, `على مدار الساعة`) fed into `h1: (subKw) => ...` and into the H2
`اشطر عزل أسطح حولي — لماذا نحن الاختيار الأول؟`.

`اشطر` is colloquial and grammatically awkward as a modifier for a service noun. Nobody
types `اشطر عزل أسطح حولي`. The first thing a visitor reads is a keyword artifact, not a
statement of what the business does. This is a textbook doorway-page signal at scale
(63 areas × 2 services = 126 pages differing mainly by a rotated superlative).

Severity: **HIGH**.

### MISMATCH D — MEDIUM: hub page H2s are keyword permutations, not user questions
`/drain-cleaning-kuwait` H2 stack: `تسليك مجاري الكويت` → `تسليك مجاري` → `فني تسليك مجاري`
→ `شركة تسليك مجاري` → … → `شركة تسليك مجاري بالكويت`.

`/drain-cleaning-hawalli` has **22 H2s**, nearly all permutations:
`تنظيف مجاري حولي`, `مكينة تسليك مجاري حولي`, `تسليك البواليع حولي`,
`تسليك مجاري بالضغط حولي`, `معلم تسليك مجاري حولي`, `فني تسليك مجاري حولي`…

Headings are being used as a keyword index rather than as navigation for a reader. PAA
boxes for these queries are phrased as questions (`كم سعر...؟`, `كيف أسلك...؟`,
`ليش المجاري تنسد...؟`) — the current headings cannot win them.

Severity: **MEDIUM**.

### Programmatic-content risk (systemic)
`pickVariant()` rotates 5 hand-written paragraph variants across 63 areas for each of
`intro`, `secondaryIntro`, `problems`, `whyUsPrimary`, `whyUsSecondary`, `pricingPrimary`,
`pricingSecondary`, `coveragePara`, `closingPara`, `ctaSubtitle`. Testimonials are
hardcoded with the area name string-substituted in — the *same three named customers*
(`أبو محمد`, `أم عبدالله`, `فهد العتيبي`) "reviewed" the service in all 63 areas. A user
who checks two nearby area pages sees identical testimonials with the place name swapped.
This is an active trust liability, not just a duplication issue.

---

## 3. User Stories

**US-1 — Emergency caller (Q1).** *As a Hawalli resident whose main drain is backing up
at 11pm, I want a phone number and a realistic arrival time within two seconds of landing,
so I can call before the water reaches the majlis.*
Signal: SERP titles carry the phone number; map pack shows `مفتوح ٢٤ ساعة`; competitor
titles say `خدمة 24 ساعة` / `فني تسليك بواليع ٢٤ ساعة`.
**Served?** Partially. Header `tel:` link and a fixed `MobileCTABar` (call + WhatsApp)
are present — genuinely good. But the first content block after H1 is a 5-star *article
rating* widget and a generic services paragraph, not "نصل حولي خلال 30 دقيقة — اتصل".
The `30 دقيقة` promise exists only in `ctaTitle` far down the page and in an FAQ answer.

**US-2 — Price comparison shopper (Q2).** *As someone with a slow kitchen sink that is
not urgent, I want to know roughly what this costs before I call, so I am not ambushed.*
Signal: Google's snippet for the price query returns numeric ranges from competitors.
**Served? NO.** See Mismatch A. The user must call to learn anything. Competitors answer
for free, so the user calls them instead.

**US-3 — Vendor evaluator (Q3).** *As a villa owner choosing a waterproofing contractor,
I want warranty length, material type and a per-m² rate so I can shortlist three vendors.*
Signal: competitor titles lead with `ضمان 20 عاماً`, `ضمان 10 سنوات`, `فوم أمريكي`,
`جيتاروف`, `5 دنانير للمتر المربع`.
**Served? Weakly.** The page says `بضمان` and `ضمان على الخدمة` repeatedly but never
states a **duration**. `عزل الفوم (بولي يوريثان)` is named, which is good, but there is no
m² rate, no system spec, no warranty document.

**US-4 — Local verifier (all queries).** *As a cautious buyer, I want to confirm this is a
real Kuwaiti company — reviews, address, a map, a licence number.*
Signal: map pack dominance for Q1; star ratings are the primary visual differentiator.
**Served? NO.** `hasMap`: 0. `<iframe>` count: 0. No embedded map, no Google review link,
no CR/licence number. The only "reviews" are three hardcoded testimonials reused across
63 areas, plus a `4 تقييم` article-rating widget.

**US-5 — Neighbouring-area visitor.** *As a Salwa resident who landed on the Jabriya page,
I want to confirm you actually cover Salwa.*
**Served? Yes.** `nearbyAreas` chips and `coveragePara` handle this well. Keep.

---

## 4. Persona Scoring

Scored /25 per dimension (Relevance, Clarity, Trust, Action) = /100.

### Persona A — "أبو خالد", active emergency, mobile, 11pm → `/drain-cleaning-hawalli`

| Dim | Score | Evidence |
|---|---|---|
| Relevance | 19 | H1 `تسليك مجاري حولي` matches query exactly; 24h messaging present. |
| Clarity | 12 | Article rating widget + TOC occupy prime real estate; 22 H2s to scan; no arrival-time promise above the fold. |
| Trust | 9 | No map, no real reviews, no licence; testimonials are template-reused; `4 تقييم` reads as low. |
| Action | 20 | Header `tel:` + fixed `MobileCTABar` with call/WhatsApp is strong. Loses points for the article-shaped CTAs (`قيّم هذا المقال`) competing for attention. |
| **Total** | **60/100** | |

Weakest: **Trust**. Fix first: embed map + real Google reviews + licence number.

### Persona B — "أم فيصل", comparison shopper, desktop, weekday → `/drain-cleaning-prices-kuwait`

| Dim | Score | Evidence |
|---|---|---|
| Relevance | 16 | Title/H1 match the query; the page is *about* pricing. |
| Clarity | 5 | The price table contains no prices. `تبدأ من أسعار مناسبة` is not a price. |
| Trust | 6 | Title promises `بدون رسوم خفية` while withholding all figures — the promise actively undermines itself. |
| Action | 14 | Call/WhatsApp present, but the only path to a number is a phone call she is trying to avoid. |
| **Total** | **41/100** | |

Weakest: **Clarity**. Fix first: publish real ranges. This is the site's worst page.

### Persona C — "بو سعود", villa owner, waterproofing vendor selection → `/roof-waterproofing-hawalli`

| Dim | Score | Evidence |
|---|---|---|
| Relevance | 13 | H1 `اشطر عزل أسطح حولي` — awkward superlative is the first impression; service is correct though. |
| Clarity | 13 | Clean 10-H2 structure, 5-step process, feature list. But 1,241 words and no material specs, no thickness, no m². |
| Trust | 8 | `بضمان` with no duration; testimonials reused across areas; gallery images not attributable to Hawalli. |
| Action | 16 | Dual CTA hero + closing CTA band. No quote form, no "احسب التكلفة", no WhatsApp pre-filled message. |
| **Total** | **50/100** | |

Weakest: **Trust**. Fix first: state warranty years and material system explicitly.

---

## 5. SXO Gap Score (separate from SEO Health Score)

| Dimension | `/drain-cleaning-hawalli` | `/drain-cleaning-prices-kuwait` | `/roof-waterproofing-hawalli` |
|---|---|---|---|
| Page Type (15) | 8 | 6 | 10 |
| Content Depth (15) | 12 | 6 | 8 |
| UX Signals (15) | 10 | 9 | 10 |
| Schema (15) | 10 | 8 | 10 |
| Media (15) | 7 | 5 | 8 |
| Authority (15) | 5 | 5 | 5 |
| Freshness (10) | 5 | 6 | 5 |
| **SXO Gap Score** | **57/100** | **45/100** | **56/100** |

Word counts: 3,609 / 1,346 / 1,241 / 2,410 (hub).

Schema present and correct across all pages: `LocalBusiness`, `Plumber`, `Service`,
`FAQPage`, `BreadcrumbList`, `Organization`, `GeoCoordinates`, `OpeningHoursSpecification`,
`ContactPoint`, `priceRange`, `sameAs`, `OfferCatalog`, `WebSite`+`SearchAction`.
This is a genuinely strong schema foundation — the gaps below are narrow.

Schema missing: `AggregateRating`, `Review`, `hasMap`, `Offer.lowPrice`/`highPrice`.

---

## 6. Concrete Structural Fixes

### P0 — Publish real prices (`app/drain-cleaning-prices-kuwait/page.tsx`)

Replace the five non-answer cells with ranges. Anchor to observed market rates
(competitors publish 15–25 د.ك simple, 25–40 د.ك machine, 5 د.ك/م² for insulation):

```
تسليك مجاري المطابخ        15 – 25 د.ك
تسليك مجاري الحمامات       15 – 25 د.ك
فتح المجاري الرئيسية        25 – 45 د.ك
شفط البيارات والجور         20 – 40 د.ك حسب الحجم
خدمة طوارئ ليلية           +5 – 10 د.ك على السعر الأساسي
```

Keep `الأسعار استرشادية وتتحدد بعد المعاينة` as a footnote — that sentence is fine *next
to* a number, fatal *instead of* one. Then complete the schema:

```json
{"@type":"AggregateOffer","priceCurrency":"KWD","lowPrice":"15","highPrice":"45",
 "offerCount":"5","availability":"https://schema.org/InStock","areaServed":"KW"}
```

Add an H2 phrased as the actual PAA question: `كم سعر تسليك المجاري في الكويت؟` with the
range in the **first sentence** of the answer, to compete for the snippet.

### P0 — Strip the Article wrapper from service pages (`components/DrainArticle.tsx`)

- Remove `itemType="https://schema.org/Article"` and `itemProp="headline"`.
- Remove the WordPress residue: `post-6100 post type-post status-publish format-standard hentry category-sewage-plumbing`.
- Remove or relocate `ArticleRating` (`قيّم هذا المقال`) — an emergency caller should not
  be asked to rate an article.
- Rename `أحدث المقالات` / `مقالات مفيدة` sidebar blocks below the fold, or swap the
  sidebar's top slot for a call/WhatsApp/coverage card.
- Keep the JSON-LD `Service` + `LocalBusiness` graph — it is already correct.

### P1 — Fix the superlative H1s (`lib/areas.ts`)

Drop `Area.sub` / `subKeyword()` from `h1` and from the `لماذا نحن الاختيار الأول` H2.
Target shape (mirrors what ranks, phone included):

```ts
h1: (area) => `عزل أسطح ${area} — عزل مائي وحراري بضمان 10 سنوات`
```

Keep the superlatives, if at all, in body copy or `searchTerms` chips — never in the H1.

### P1 — Add an above-the-fold emergency bar to area pages

Immediately after H1, before any prose, a single row:

```
⏱ نصل حولي خلال 30 دقيقة   •   🕐 24 ساعة   •   💰 السعر قبل البدء
[ 98890031 اتصل الآن ]  [ واتساب ]
```

The `30 دقيقة` claim already exists in `ctaTitle` and the FAQ — promote it, don't bury it.

### P1 — Real trust signals

- Embed a Google Maps iframe (`hasMap`: currently 0 across all pages) on `/contact-us`
  and in the area-page sidebar.
- Link the Google Business Profile; add `AggregateRating` + `Review` JSON-LD sourced from
  **real** reviews only.
- Add CR / licence number to the footer.
- **Replace the reused testimonials.** `أبو محمد`, `أم عبدالله`, `فهد العتيبي` currently
  appear on all 63 area pages with only the place name changed. Either use real reviews or
  remove the section — reused named testimonials are worse than none.

### P2 — Convert permutation H2s into question H2s

On `/drain-cleaning-hawalli`, collapse the 22 keyword-permutation H2s into ~8 question
headings targeting PAA: `كم سعر تسليك المجاري في حولي؟`, `كم يستغرق وصول الفني إلى حولي؟`,
`هل التسليك يتم بدون تكسير؟`, `ليش تنسد مجاري المطبخ؟`, `شنو الفرق بين التسليك بالضغط
والتسليك بالمكينة؟`. Fold the permutations (`تنظيف مجاري حولي`, `مكينة تسليك مجاري حولي`,
`تسليك البواليع حولي`) into body copy where they read naturally.

### P2 — Warranty and material specificity on roof pages

Replace bare `بضمان` with a number (`ضمان 10 سنوات`) and specify systems:
foam thickness, membrane type, `جيتاروف` if offered, per-m² rate. Competitors ranking for
Q3 lead with exactly these.

---

## 7. Deployment Inconsistency (flagged, not scored)

The **deployed** site uses business name `خدمات الكويت` (34 occurrences on the Hawalli
page, and it is the `name` inside the `LocalBusiness` JSON-LD). The **working copy**
`lib/areas.ts` sets `BUSINESS_NAME = "دار الصيانة الكويتية"` — 0 occurrences live.

Shipping the current working tree will rename the entity across 126 pages plus all
structured data. If this rename is intentional, sequence it with the Google Business
Profile rename and any citations, or NAP consistency (a direct map-pack ranking factor)
will break at the moment of deploy. If unintentional, reconcile before shipping.

---

## 8. Limitations

- **No live SERP scraping tool available.** SERP analysis is based on WebSearch result
  sampling (titles/URLs/snippets for 3 queries) combined with known local-service SERP
  patterns. Map-pack composition, ad count, AI Overview presence and exact PAA wording
  were **not** directly observed and are inferred.
- Results are not geo-localised to Kuwait; a searcher physically in Hawalli would see a
  map pack and possibly different organic ordering.
- Pages fetched via `curl` (raw HTML). The plugin renderer (`render_page.py`) was not
  available in this environment. The site is statically generated Next.js and the sampled
  content was fully present in raw HTML, so SSR content is covered — but client-only
  hydration effects and CLS/interaction UX were not assessed.
- No Core Web Vitals, no Search Console/GA data, no rank-tracking history, so "does not
  rank" for Q1 reflects one sampled query at one point in time.
- Competitor page internals were not fetched; competitor assessment is snippet-level only.
- Price ranges suggested in §6 are anchored to competitor-published figures found in
  search results and **must be validated against actual business pricing before publishing.**

---

## 9. Cross-Skill Follow-ups

- `/seo schema` — generate `AggregateRating`, `Review`, `hasMap`, complete `AggregateOffer`.
- `/seo local` — GBP audit; map-pack is the primary surface for Q1 and is unaddressed here.
- `/seo content` — E-E-A-T pass on the 126 programmatic area pages (`pickVariant` spin risk).
- `/seo page` — page-level audit of `/drain-cleaning-prices-kuwait` (1,346 words, thinnest).
