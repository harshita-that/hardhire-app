"use client";

import { motion } from "framer-motion";

import { motion as motionPresets } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={motionPresets.page.initial}
      animate={motionPresets.page.animate}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
