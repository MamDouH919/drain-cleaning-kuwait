import { organizationSchema } from "@/lib/schema";

/** Emitted once from the root layout so every page carries the #organization node. */
export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
