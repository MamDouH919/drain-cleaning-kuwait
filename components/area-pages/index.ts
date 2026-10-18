import type { CustomAreaPage } from "./types";
import { drainCleaningHawalli } from "./drain-cleaning-hawalli";
import { drainCleaningSalmiya } from "./drain-cleaning-salmiya";

// صفحات المناطق اللي اتكتبت يدويًا. أي slug مش هنا بيفضل على قالب `lib/areas.ts`.
export const customAreaPages: Record<string, CustomAreaPage> = {
  "drain-cleaning-hawalli": drainCleaningHawalli,
  "drain-cleaning-salmiya": drainCleaningSalmiya,
};
