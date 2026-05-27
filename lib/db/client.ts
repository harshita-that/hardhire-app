import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as authSchema from "@/lib/auth/schema";
import * as hardhireSchema from "@/lib/hardhire/schema";

// Only load dotenv in non-production environments
if (process.env.NODE_ENV !== "production") {
  try {
    require("dotenv/config");
  } catch {
    // dotenv not available, env vars should be set by the platform
  }
}

if (!process.env.DATABASE_URL) {
  console.error("[HardHire] DATABASE_URL is not set — database operations will fail.");
}

// Create the connection pool with production-safe SSL config
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
});

// Attach to Vercel's serverless function pool (for Vercel deployments)
try {
  const { attachDatabasePool } = require("@vercel/functions");
  attachDatabasePool(pool);
} catch {
  // Not running on Vercel — skip pool attachment
}

// Create Drizzle instance with the pool and schema
export const db = drizzle(pool, {
  schema: {
    ...authSchema,
    ...hardhireSchema,
  },
});

// Database connection check function
export async function checkDbConnection(): Promise<string> {
  if (!process.env.DATABASE_URL) {
    return "No DATABASE_URL environment variable";
  }
  try {
    await pool.query("SELECT version()");
    return "Database connected";
  } catch (error) {
    console.error("[HardHire] Error connecting to the database:", error);
    return "Database not connected";
  }
}