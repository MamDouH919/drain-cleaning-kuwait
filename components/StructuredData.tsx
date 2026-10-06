import { SITE_URL } from "@/lib/areas";
import {
  HOME_DESCRIPTION,
  HOME_LAST_MODIFIED,
  HOME_TITLE,
  OG_IMAGE,
  homeFaqs,
} from "@/lib/home";

/**
 * JSON-LD خاص بالصفحة الرئيسية فقط.
 * نودا `#business` (lib/schema.ts) و`#website` (app/layout.tsx) يُصدَّران مرة
 * واحدة من الـ layout على كل الصفحات — لا تُعِد تعريفهما هنا، فوجود نفس الـ
 * `@id` بقيم مختلفة في `<script>` آخر يسبب تعارضًا عند دمج الـ graph.
 * FAQPage مبني من `homeFaqs` نفسها التي يعرضها `Faq`، فيطابق النص الظاهر حرفيًا.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: HOME_TITLE,
        description: HOME_DESCRIPTION,
        inLanguage: "ar",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        datePublished: "2020-12-29T13:47:49+00:00",
        dateModified: HOME_LAST_MODIFIED,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: encodeURI(`${SITE_URL}${OG_IMAGE.url}`),
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
        },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
