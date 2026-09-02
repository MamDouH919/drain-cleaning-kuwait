/**
 * Shared types for the headless CMS public REST API.
 *
 * The API is read-only (GET only, no auth) and wraps every response in an
 * envelope. List endpoints add a `meta` object and put the array in `data`.
 *
 *   success: { success: true,  data: <object | array>, meta?: {...} }
 *   error:   { success: false, message: string, code: string }
 */

export interface ApiListMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
  meta?: ApiListMeta;
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
}

export type ApiEnvelope<T> = ApiSuccess<T> | ApiError;

export interface CmsImage {
  url: string;
  alt: string;
}

export interface CategoryRef {
  name: string;
  slug: string;
}

export interface AuthorRef {
  name: string;
  slug: string;
  jobTitle: string;
}

/** Item shape returned by the article list endpoint. */
export interface ArticleSummary {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: CmsImage;
  category: CategoryRef;
  author: AuthorRef;
  publishedAt: string;
  updatedAt: string;
}

/** `order` is the array position — preserve it, never re-sort blocks. */
export type ContentBlock =
  | { id: string; type: "heading"; level: 2 | 3; content: string }
  | { id: string; type: "paragraph"; content: string }
  | {
      id: string;
      type: "image";
      url: string;
      alt: string;
      caption?: string;
      title?: string;
    }
  | { id: string; type: "list"; ordered: boolean; items: string[] }
  | { id: string; type: "quote"; content: string; author?: string }
  | { id: string; type: "divider" };

export interface AuthorCredential {
  title: string;
  issuer: string;
  year: string | number;
}

export interface AuthorSocialLink {
  label: string;
  url: string;
}

/** Author as embedded in a full article response. */
export interface ArticleAuthor {
  name: string;
  slug: string;
  jobTitle: string;
  bio: string;
  avatar: CmsImage;
  yearsOfExperience?: number;
  expertise: string[];
  credentials: AuthorCredential[];
  socialLinks: AuthorSocialLink[];
  /** schema.org Person JSON-LD, embedded verbatim. */
  jsonLd: Record<string, unknown>;
}

export interface ArticleSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
}

/** Full article returned by the article detail endpoint. */
export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: CmsImage;
  contentBlocks: ContentBlock[];
  category: CategoryRef;
  author: ArticleAuthor;
  seo: ArticleSeo;
  publishedAt: string;
  updatedAt: string;
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiListMeta | null;
}
