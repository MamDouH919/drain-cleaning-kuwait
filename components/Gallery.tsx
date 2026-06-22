import fs from "fs";
import path from "path";
import Image from "next/image";

function getImages(folder: string) {
  const dir = path.join(process.cwd(), "public", folder);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => /\.(webp|avif|jpe?g|png)$/i.test(f));
  } catch {
    return [];
  }
  return files.sort().map((file) => ({
    src: `/${folder}/${file}`,
    alt: file.replace(/\.(webp|avif|jpe?g|png)$/i, "").replace(/[-_]/g, " "),
  }));
}

type GalleryProps = {
  folder?: string;
  title?: string;
  description?: string;
  badge?: string;
};

export default function Gallery({
  folder = "portfolio",
  title = "نماذج من أعمالنا في الكويت",
  description = "صور حقيقية من خدمات تسليك المجاري وعزل الأسطح والصيانة المنزلية التي نفّذناها في مختلف مناطق الكويت.",
  badge = "معرض أعمالنا",
}: GalleryProps) {
  const images = getImages(folder);
  if (images.length === 0) return null;

  return (
    <section
      id="gallery"
      dir="rtl"
      aria-labelledby="gallery-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            {badge}
          </span>
          <h2
            id="gallery-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {images.map((image) => (
            <li
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm ring-1 ring-slate-900/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="absolute inset-x-3 bottom-3 translate-y-2 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {image.alt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
