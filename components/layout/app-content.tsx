"use client";

import { PageTransition } from "@/components/motion/page-transition";

export function AppContent({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
