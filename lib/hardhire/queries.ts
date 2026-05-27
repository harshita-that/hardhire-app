import { db } from "@/lib/db/client";
import { contractors } from "@/lib/hardhire/schema";
import { eq } from "drizzle-orm";

export async function getContractorBySlug(slug: string) {
  const result = await db
    .select()
    .from(contractors)
    .where(eq(contractors.slug, slug))
    .limit(1);

  return result[0] ?? null;
}