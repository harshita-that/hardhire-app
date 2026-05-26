import { db } from "@/lib/db/client";
import { safetyGrades } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";

export async function getGradeByContractorId(
  contractorId: string
) {
  const result = await db
    .select()
    .from(safetyGrades)
    .where(eq(safetyGrades.contractorId, contractorId))
    .limit(1);

  return result[0] ?? null;
}