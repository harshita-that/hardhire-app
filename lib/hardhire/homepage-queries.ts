import { db } from "@/lib/db/client";
import { contractors, safetyGrades } from "@/lib/hardhire/schema";
import { desc, eq } from "drizzle-orm";

export async function getContractorsWithGrades(
  page: number = 1,
  limit: number = 10
) {
  const offset = (page - 1) * limit;

  const rows = await db
    .select({
      id: contractors.id,
      name: contractors.name,
      slug: contractors.slug,
      trade: contractors.trade,
      city: contractors.city,
      grade: safetyGrades.grade,
      score: safetyGrades.score,
    })
    .from(contractors)
    .leftJoin(
      safetyGrades,
      eq(contractors.id, safetyGrades.contractorId)
    )
    .orderBy(desc(safetyGrades.score))
    .limit(limit)
    .offset(offset);

  return rows;
}