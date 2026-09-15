# Sitemap Audit — taslikmajarikuwait.com

Source fetched live: `https://taslikmajarikuwait.com/sitemap.xml` (2026-09-15)
Generator: `/Users/mamdouh919/Workspace/taslik-majari-kuwait/app/sitemap.ts`

## Summary Counts

| Category | Count | Source |
|---|---|---|
| Static routes | 20 | `staticRoutes[]` in `app/sitemap.ts` |
| Area (location) pages | 132 (66 areas × 2 services) | `allAreaPageSlugs()` / `lib/areas.ts` |
| Manual blog articles | 17 | `lib/articles.ts` → `content/articles.json` |
| CMS hub articles | 0 | `safeGetAllArticles()` returned `[]` — CMS unreachable/unconfigured at build time |
| **Total** | **169** | verified via `grep -c "<url>"` on live XML |

File size: ~30 KB uncompressed. Well under limits.

## Validation Checks

| Check | Result | Notes |
|---|---|---|
| XML well-formed | PASS | Parsed cleanly with `xml.dom.minidom`, single `<urlset>`, correct namespace |
| ≤50,000 URLs / ≤50MB | PASS | 169 URLs, ~30KB — orders of magnitude under both caps |
| Sitemap index needed? | NO | Flat single sitemap is correct at this scale; an index would be premature complexity |
| Non-200 URLs | PASS | Spot-checked 17 URLs across every category (home, both service hubs, 4 sub-service statics, /areas, /about-us, 2 drain-cleaning area pages, 2 roof-waterproofing area pages incl. last area `hateen`, 3 blog articles incl. custom-page article and JSON article, /articles hub) — all returned `200`. A deliberately invalid slug returned `404` (confirms no soft-404/catch-all masking) |
| Noindexed URLs in sitemap | Not checked here | Recommend a `noindex`-vs-sitemap cross-check pass (meta robots audit) since it's out of scope for this pass |
| Redirected URLs | PASS | All spot-checked URLs resolved directly with no redirect chain (`curl -L` showed final=initial 200) |
| robots.txt blocks sitemap? | PASS | Live `/robots.txt` includes `Sitemap: https://taslikmajarikuwait.com/sitemap.xml` and a generic `Allow: /` rule; `Disallow: /api/` does not match any sitemap URL (no `/api/*` entries exist in the sitemap) |
| priority/changefreq sanity | INFO | Values are internally consistent (home=1, service hubs=0.9, price/utility pages=0.8, area pages=0.7, articles=0.6, legal=0.3) but Google ignores both fields entirely — see Finding 3 |
| Routes in `app/` missing from sitemap | PASS (none missing) | All static directories under `app/` map 1:1 to `staticRoutes[]`: `about-us, areas, articles, basement-pump-kuwait, blogs, blogs/drain-cleaning-kuwait, blogs/drain-cleaning-in-kuwait, contact-us, drain-cleaning-kuwait, drain-cleaning-prices-kuwait, gitaroof-insulation-kuwait, kitchen-bathroom-drain-cleaning-kuwait, manhole-installation-kuwait, privacy-policy, roof-insulation-prices-kuwait, roof-waterproofing-kuwait, terms-conditions, thermal-waterproofing-kuwait, water-tank-cleaning-kuwait`. `app/[slug]` (area pages) and `app/blogs/[slug]` / `app/articles/[slug]` are dynamic catch-alls correctly represented via `allAreaPageSlugs()` / `articles[]` / `cmsArticles`. `app/not-found.tsx` correctly excluded. |
| Sitemap entries pointing to non-existent routes | PASS | No orphaned entries found |

## Findings

### Finding 1 — HARD STOP: 132 location pages exceeds the 50-page quality gate, and per-page uniqueness is templated, not organic (Critical)

`allAreaPageSlugs()` generates 66 areas × 2 services = **132 location pages** in the sitemap. This is well past the 50+ page hard-stop threshold.

Inspecting `lib/areas.ts`, each page's prose sections (`intro`, `problems`, `secondaryIntro`, `pricingPrimary`, `whyUsPrimary`, `whyUsSecondary`, `coveragePara`, `closingPara`) are selected via `pickVariant()`, which deterministically hashes `area+section` into an index over a **pool of only 5 fixed variants per section, per service**. With 66 areas sharing 5 variants, on average **~13 area pages reuse the verbatim same paragraph** for any given section (only the area name token differs inside the shared string). The `features[]` list, `steps[]`, and FAQ *structure* are entirely static per service (only the area name is interpolated into FAQ text). `testimonials()` are static per service, area name spliced in.

Net effect: this is a template-with-token-swap pattern — precisely what Google's doorway-page/thin-content classifiers target, despite the deliberate effort (via `hashString`/`pickVariant`) to spread variants across areas to *look* varied. 5 variants ÷ 66 areas is not enough entropy to constitute genuinely unique per-page content, and structural elements (H1 pattern, FAQ Qs, steps, features) are identical for every area within a service.

**This requires explicit user justification per the audit's quality gate before treating as acceptable**, or a content rework:
- Reduce scope (e.g., only generate pages for areas with real local signals — actual reviews, actual job photos, distinguishing local details) rather than all 66 areas × both services.
- Increase variant pool substantially (a bare minimum of 20-30+ meaningfully different variants per section, ideally reflecting real local specifics rather than synonym swaps) if keeping full coverage.
- Consider consolidating thin area pages into a single `/areas` hub with an on-page area selector instead of 132 near-duplicate indexable URLs.

### Finding 2 — `lastModified` is meaningless noise for 152 of 169 URLs (Medium)

In `app/sitemap.ts`, `const now = new Date()` (build time) is stamped onto **every static route (20) and every area page (132)** — 152/169 URLs (90%) get a `lastmod` that changes on every deploy regardless of whether that page's content actually changed. Confirmed in the live XML: home page and all statics/areas show the identical timestamp `2026-09-15T09:20:47.995Z` (the exact sitemap build instant), while `articles[]` entries correctly show real historical dates (e.g. `2025-04-05`, `2025-06-28`) from `article.dateModified`.

This is low-value noise rather than a ranking penalty by itself (Google is known to distrust/ignore `lastmod` values it judges unreliable), but it actively **undermines the one signal you do have real dates for** — mixing a trustworthy per-article date system with a fake always-now date system on 90% of URLs makes the whole `lastmod` field less credible to crawlers, and provides zero recrawl-prioritization benefit for pages that genuinely haven't changed.

**Fix — track real content revisions instead of build time:**

```diff
--- a/app/sitemap.ts
+++ b/app/sitemap.ts
@@
-const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
-  { path: "", priority: 1, changeFrequency: "weekly" },
-  { path: "/drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
+const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified: string }[] = [
+  // lastModified = date of the last *significant* content edit to this route,
+  // updated by hand (or by a content-hash check) when the page copy actually changes.
+  { path: "", priority: 1, changeFrequency: "weekly", lastModified: "2026-08-01" },
+  { path: "/drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-07-20" },
   ... // one real date per static route
 ];
+
+// One real "content last touched" date per area-page template revision.
+// Bump this only when copy/pricing/structure for area pages actually changes —
+// not on every deploy.
+const AREA_PAGES_LAST_MODIFIED = "2026-07-16";
@@
   const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
     url: `${SITE_URL}${route.path}`,
-    lastModified: now,
+    lastModified: new Date(route.lastModified),
     changeFrequency: route.changeFrequency,
     priority: route.priority,
   }));

   const areaEntries: MetadataRoute.Sitemap = allAreaPageSlugs().map((slug) => ({
     url: `${SITE_URL}/${slug}`,
-    lastModified: now,
+    lastModified: new Date(AREA_PAGES_LAST_MODIFIED),
     changeFrequency: "monthly",
     priority: 0.7,
   }));
```

If tracking a real date per static route is too much overhead, a cheaper interim fix is a single shared "content revision" constant (bumped manually only on real content edits) rather than `new Date()` computed at every build — that alone removes the "changes every deploy" noise even without per-route granularity. Keep `now` only as the fallback for `hubArticleEntries` when a CMS article genuinely lacks `updatedAt`/`publishedAt` (line 59) — that fallback is reasonable since it only fires for missing CMS data, not for every build.

### Finding 3 — `priority`/`changeFrequency` are dead weight (Info)

Google has publicly stated both fields are ignored for ranking/crawl-scheduling purposes (confirmed by Google's own sitemap documentation). The values set here aren't *wrong* (priority scale is internally sane: 1 → 0.9 → 0.8 → 0.7 → 0.6 → 0.3), so there's no active harm, but they add bytes and maintenance surface for zero benefit. Bing has also deprecated reliance on `priority`. Safe to remove entirely:

```diff
-const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
-  url: `${SITE_URL}${route.path}`,
-  lastModified: new Date(route.lastModified),
-  changeFrequency: route.changeFrequency,
-  priority: route.priority,
-}));
+const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
+  url: `${SITE_URL}${route.path}`,
+  lastModified: new Date(route.lastModified),
+}));
```
(repeat for `areaEntries`, `articleEntries`, `hubArticleEntries`). Optional cleanup, not required.

### Finding 4 — CMS integration currently contributes 0 URLs (Low / Watch item)

`safeGetAllArticles()` returned `[]` on the live sitemap — either `CMS_API_BASE_URL`/`CMS_SITE_SLUG` are unset in production or the CMS is unreachable. This is handled safely by design (`safe()` wrapper + comment at `app/sitemap.ts:53-54` acknowledging the fallback), so it's not breaking the build, but it does mean:
- The `/articles` hub page (in the sitemap, returns live 200) currently has no child articles to list — confirm this is intended for this deploy, not a silent regression.
- If CMS content exists but isn't being picked up, those pages are invisible to Google despite the app-level route (`app/articles/[slug]`) supporting them via ISR/`dynamicParams`.

No sitemap.ts change needed; recommend verifying `CMS_API_BASE_URL`/`CMS_SITE_SLUG` are set correctly in the production environment.

### Finding 5 — robots.txt / sitemap cross-check (Pass, informational)

- `app/robots.ts` allow=`/`, disallow=`["/api/"]`, sitemap correctly declared. No sitemap URL falls under `/api/`, so nothing is accidentally blocked.
- Note: production `/robots.txt` output also carries a Cloudflare-injected "Content-Signal"/AI-bot block (disallowing `GPTBot`, `ClaudeBot`, `Google-Extended`, etc.) prepended above the app-defined rules. This is infrastructure-level (Cloudflare), not from `app/robots.ts`, and doesn't affect standard search crawling (`Googlebot`/general `User-agent: *` still `Allow: /`) or sitemap discoverability — flagging only for awareness, out of scope for this sitemap audit.

## Priority Order For Fixes

1. **Finding 1** (location-page scale + thin templated content) — needs explicit business decision/justification before further scaling; this is the only genuine SEO-risk item found.
2. **Finding 2** (`lastmod` = build time) — quick, mechanical fix, improves signal quality.
3. **Finding 3** (drop priority/changeFrequency) — optional cleanup.
4. **Finding 4** (CMS returning 0 articles) — verify env config, not a sitemap.ts bug.
