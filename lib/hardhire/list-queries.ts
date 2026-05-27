import { db } from "@/lib/db/client";
import { contractors } from "@/lib/hardhire/schema";

export async function getAllContractors() {
  return db.select().from(contractors);
}