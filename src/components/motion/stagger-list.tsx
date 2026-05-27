"use client";

import { motion } from "framer-motion";

import { motion as motionPresets } from "@/lib/motion";

export function StaggerList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={motionPresets.staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={motionPresets.staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
