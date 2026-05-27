import "dotenv/config";

import { db } from "@/lib/db/client";
import { contractors, safetyGrades } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";

async function seedGrade() {
  const contractor = await db
    .select()
    .from(contractors)
    .where(eq(contractors.slug, "abc-roofing"))
    .limit(1);

  if (!contractor[0]) {
    throw new Error("Contractor not found");
  }

  await db.insert(safetyGrades).values({
    contractorId: contractor[0].id,
    grade: "C",
    score: 62,
    percentile: 48,
  });

  console.log("Safety grade inserted");
}

seedGrade()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });