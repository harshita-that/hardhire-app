import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
 import { contractors, safetyGrades } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const rows = await db.select().from(contractors);

    const data = await Promise.all(
      rows.map(async (c) => {
        const grade = await db
          .select()
          .from(safetyGrades)
          .where(eq(safetyGrades.contractorId, c.id))
          .limit(1);

        return {
          ...c,
          grade: grade[0] || null,
        };
      })
    );

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Failed to fetch contractors" },
      { status: 500 }
    );
  }
}