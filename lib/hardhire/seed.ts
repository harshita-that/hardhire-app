import { db } from "@/lib/db/client";
import { contractors } from "@/lib/hardhire/schema";

async function seed() {
  await db.insert(contractors).values({
    name: "ABC Roofing",
    slug: "abc-roofing",
    trade: "Roofing",
    city: "Austin",
    state: "TX",
  });

  console.log("Contractor inserted");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });