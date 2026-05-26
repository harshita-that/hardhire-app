import { db } from "@/lib/db/client";
import { violations } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";

export async function getViolationsByContractorId(
  contractorId: string
) {
  return db
    .select()
    .from(violations)
    .where(eq(violations.contractorId, contractorId));
}