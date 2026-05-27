import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/lib/db/client";

/**
 * Resolve the base URL for Better Auth:
 * 1. BETTER_AUTH_URL env var (explicit, highest priority)
 * 2. VERCEL_URL env var (auto-set by Vercel deployments)
 * 3. Fallback to localhost for local dev
 */
function getBaseURL(): string {
    if (process.env.BETTER_AUTH_URL) {
        return process.env.BETTER_AUTH_URL;
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
}

const baseURL = getBaseURL();

export const auth = betterAuth({
    baseURL,
    secret: process.env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 6,
    },
    trustedOrigins: [
        baseURL,
        // Also trust the explicit production domain if different from VERCEL_URL
        process.env.BETTER_AUTH_URL || "",
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
    ].filter(Boolean),
    plugins: [nextCookies()] // make sure this is the last plugin in the array
});