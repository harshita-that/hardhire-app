import { db } from "@/lib/db/client";
import { contractors, safetyGrades } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";
import HomeClient from "../home-client";

export default async function DashboardPage() {
  let data: any[] = [];

  try {
    const rows = await db.select().from(contractors);

    data = await Promise.all(
      rows.map(async (c) => {
        const grade = await db
          .select()
          .from(safetyGrades)
          .where(eq(safetyGrades.contractorId, c.id))
          .limit(1);

        return {
          ...c,
          grade: grade[0]?.grade ?? null,
          score: grade[0]?.score ?? 0,
        };
      })
    );
  } catch (err) {
    console.error("Failed to load contractors for dashboard:", err);
  }

  return <HomeClient contractors={data} />;
}
