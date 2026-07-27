import { localBusinessSchema } from "@/lib/schema";

/** Emitted once from the root layout so every page carries the `#business` node. */
export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
