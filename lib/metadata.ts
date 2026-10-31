import type { Metadata } from "next";
import { BUSINESS_NAME, SITE_URL } from "./areas";
import { OG_IMAGE } from "./home";
import { publicImageSize } from "./image-size";

export type SocialImage = {
  url: string;
  /** لو مش متحدد، بيتقري من الملف في `public/` وقت الـ build. */
  width?: number;
  height?: number;
  alt: string;
};

/**
 * الـ metadata الكاملة لأي صفحة: title وdescription وcanonical، وog وtwitter
 * بنفس القيم.
 *
 * Next بيدمج الـ metadata دمج سطحي، فأي صفحة بتكتب `openGraph` بتمسح الـ og
 * بتاع الـ layout كله (الصورة والـ locale والـ site_name). عشان كده كل صفحة لازم
 * تبني الـ metadata بتاعتها من هنا، والصورة الافتراضية بتتحط لو الصفحة مالهاش غلاف.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  /** المسار من غير الدومين، زي `/drain-cleaning-kuwait`. */
  path: string;
  image?: SocialImage;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const imageUrl = new URL(image.url, SITE_URL).href;
  const size =
    image.width && image.height
      ? { width: image.width, height: image.height }
      : publicImageSize(image.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "ar_KW",
      url,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [
        { url: imageUrl, ...size, alt: image.alt },
      ],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: image.alt }],
    },
  };
}
