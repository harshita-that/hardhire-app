"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth/client";
import { DashboardSkeleton } from "@/components/ui/skeleton";

/**
 * AuthGuard — wraps private (app) routes.
 * Redirects unauthenticated users to /sign-in.
 * Shows a loading skeleton while the session is being resolved.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return <DashboardSkeleton />;
  }

  if (!session?.user) {
    return null;
  }

  return <>{children}</>;
}
