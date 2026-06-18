import type { NextConfig } from "next";

const slugRedirects: { from: string; to: string }[] = [
  { from: "/تسليك-مجاري-الكويت", to: "/drain-cleaning-kuwait" },
  {
    from: "/تسليك-مجاري-المطابخ-والحمامات",
    to: "/kitchen-bathroom-drain-cleaning-kuwait",
  },
  { from: "/عزل-اسطح-الكويت", to: "/roof-waterproofing-kuwait" },
  { from: "/العزل-المائي-والحراري", to: "/thermal-waterproofing-kuwait" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return slugRedirects.flatMap(({ from, to }) => [
      { source: from, destination: to, permanent: true },
      { source: encodeURI(from), destination: to, permanent: true },
    ]);
  },
};

export default nextConfig;
