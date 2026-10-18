import type { CustomAreaPage } from "./types";
import { drainCleaningHawalli } from "./drain-cleaning-hawalli";

// صفحات المناطق اللي اتكتبت يدويًا. أي slug مش هنا بيفضل على قالب `lib/areas.ts`.
export const customAreaPages: Record<string, CustomAreaPage> = {
  "drain-cleaning-hawalli": drainCleaningHawalli,
};
