/**
 * Typed client for the headless CMS public REST API.
 *
 * - Reads `CMS_API_BASE_URL` and `CMS_SITE_SLUG` from the environment.
 * - Unwraps the `{ success, data, meta }` envelope.
 * - Throws a typed `CmsApiError` when `success` is `false` or the request fails.
 *
 * All calls are server-side only (Server Components, `generateStaticParams`,
 * `generateMetadata`, `sitemap`). Nothing here is bundled for the browser.
 */

import type {
  ApiEnvelope,
  ApiListMeta,
  Article,
  ArticleSummary,
  PaginatedResult,
} from "./types";

/** Route prefix for every CMS-backed page on this site. */
export const CMS_BASE_PATH = "/articles";

/** Time-based revalidation window (seconds) for CMS data. */
export const CMS_REVALIDATE_SECONDS = 3600;

/** Default page size for article lists. */
export const CMS_PAGE_SIZE = 12;

export class CmsApiError extends Error {
  readonly code: string;
  readonly status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.name = "CmsApiError";
    this.code = code;
    this.status = status;
  }
}

function requireEnv(name: "CMS_API_BASE_URL" | "CMS_SITE_SLUG"): string {
  const value = process.env[name];
  if (!value) {
    throw new CmsApiError(
      `Missing required environment variable ${name}. ` +
        `Set it in .env.local (see .env.example).`,
      "ENV_MISSING",
      0,
    );
  }
  return value.replace(/\/+$/, "");
}

function siteBase(): string {
  return `${requireEnv("CMS_API_BASE_URL")}/public/sites/${encodeURIComponent(
    requireEnv("CMS_SITE_SLUG"),
  )}`;
}

interface FetchOptions {
  /** Extra query params. `undefined` values are dropped. */
  query?: Record<string, string | number | undefined>;
  /** Cache tags for on-demand revalidation. */
  tags?: string[];
  /** Override the default revalidate window. */
  revalidate?: number;
}

/**
 * Low-level fetch + envelope unwrap. Returns `data` plus `meta` (list endpoints).
 * Throws `CmsApiError` on transport failure, non-2xx, or `success: false`.
 */
async function cmsFetch<T>(
  path: string,
  { query, tags, revalidate = CMS_REVALIDATE_SECONDS }: FetchOptions = {},
): Promise<{ data: T; meta: ApiListMeta | null }> {
  
  const url = new URL(`${siteBase()}${path}`);
  console.log(url);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers: { accept: "application/json" },
      next: { revalidate, tags: ["cms", ...(tags ?? [])] },
    });
  } catch {
    throw new CmsApiError(
      `Network error requesting ${url.pathname}`,
      "NETWORK_ERROR",
      0,
    );
  }

  let body: ApiEnvelope<T> | null = null;
  try {
    body = (await res.json()) as ApiEnvelope<T>;
  } catch {
    body = null;
  }

  if (!body || typeof body !== "object" || !("success" in body)) {
    throw new CmsApiError(
      `Unexpected response shape from ${url.pathname} (HTTP ${res.status})`,
      "BAD_RESPONSE",
      res.status,
    );
  }

  if (body.success === false) {
    throw new CmsApiError(body.message, body.code, res.status);
  }

  if (!res.ok) {
    throw new CmsApiError(
      `Request to ${url.pathname} failed`,
      "HTTP_ERROR",
      res.status,
    );
  }

  return { data: body.data, meta: body.meta ?? null };
}

/** `true` when the CMS env vars are configured. Cheap, no network. */
export function isCmsConfigured(): boolean {
  return Boolean(process.env.CMS_API_BASE_URL && process.env.CMS_SITE_SLUG);
}

// ── List: articles ──────────────────────────────────────────────────────────

export async function getArticles(params: {
  page?: number;
  limit?: number;
} = {}): Promise<PaginatedResult<ArticleSummary>> {
  const { data, meta } = await cmsFetch<ArticleSummary[]>("/articles", {
    query: {
      page: params.page,
      limit: params.limit ?? CMS_PAGE_SIZE,
    },
    tags: ["cms:articles"],
  });
  return { items: data, meta };
}

// ── Detail: single article ─────────────────────────────────────────────────

/**
 * Returns `null` when the CMS reports the slug as not found — or when the CMS
 * env vars are not configured (the integration is simply inert then).
 */
export async function getArticle(slug: string): Promise<Article | null> {
  if (!isCmsConfigured()) return null;
  try {
    const { data } = await cmsFetch<Article>(
      `/articles/${encodeURIComponent(slug)}`,
      { tags: [`cms:article:${slug}`] },
    );
    return data;
  } catch (error) {
    if (error instanceof CmsApiError && error.status === 404) return null;
    throw error;
  }
}

// ── Build-time safe wrappers ───────────────────────────────────────────────
// Used by `generateStaticParams` and `sitemap`, which must not fail the build
// when the CMS is unreachable or not yet configured. Pages then fall back to
// on-demand ISR (`dynamicParams = true`).

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  if (!isCmsConfigured()) return fallback;
  try {
    return await fn();
  } catch (error) {
    console.warn(
      `[cms] build-time fetch failed, falling back:`,
      error instanceof Error ? error.message : error,
    );
    return fallback;
  }
}

export function safeGetArticles(params?: Parameters<typeof getArticles>[0]) {
  return safe(() => getArticles(params), { items: [], meta: null });
}

/**
 * Every published article summary, walking the paginated list. Capped so a
 * misbehaving API can't stall the build. Safe: returns `[]` on any failure.
 */
export function safeGetAllArticles(maxPages = 25): Promise<ArticleSummary[]> {
  return safe(async () => {
    const all: ArticleSummary[] = [];
    let page = 1;
    let totalPages = 1;
    do {
      const { items, meta } = await getArticles({ page, limit: 100 });
      all.push(...items);
      totalPages = meta?.totalPages ?? 1;
      page += 1;
    } while (page <= totalPages && page <= maxPages);
    return all;
  }, []);
}

