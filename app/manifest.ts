import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "خدمات الكويت - تسليك مجاري وعزل أسطح",
    short_name: "خدمات الكويت",
    description:
      "خدمات تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت على مدار 24 ساعة.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0369a1",
    lang: "ar",
    dir: "rtl",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
