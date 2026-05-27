"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/client";
import { ds } from "@/lib/design-system";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (result.error) {
        console.error("[HardHire] Sign-in error:", result.error);
        const message = result.error.message 
          || result.error.statusText 
          || "Failed to sign in. Please try again.";
        setError(message);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("[HardHire] Sign-in exception:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer className="flex min-h-[60vh] flex-col justify-center">
      <div className="mx-auto w-full max-w-sm">
            <h1 className={ds.text.pageTitle}>Sign In</h1>
            <p className={ds.text.pageDescription}>
              Enter your email and password to sign in to your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/10 px-4 py-3 text-sm text-[#EF4444]">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-white/40">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-[#3B82F6] hover:text-[#60A5FA]"
              >
                Sign up
              </Link>
            </p>
      </div>
    </PageContainer>
  );
}
