"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#3B82F6]/[0.08] blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[400px] rounded-full bg-[#38BDF8]/[0.04] blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            Powered by OSHA violation data
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Know a contractor&apos;s safety{" "}
          <br className="hidden sm:block" />
          history{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] bg-clip-text text-transparent">
            before you hire.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg md:text-xl"
        >
          HardHire analyzes OSHA violations and generates contractor safety
          grades from A to F — so you can make informed hiring decisions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/sign-up"
            className="group relative inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#60A5FA] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.35),0_1px_2px_rgba(0,0,0,0.3)]"
          >
            Get Started
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/[0.06] hover:text-white hover:border-white/[0.16]"
          >
            View Sample Report
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 flex items-center justify-center gap-8 text-xs text-white/30"
        >
          <span>Trusted by safety teams nationwide</span>
          <span className="hidden h-px w-12 bg-white/[0.08] sm:block" />
          <span className="hidden sm:inline">500+ contractors graded</span>
        </motion.div>
      </div>
    </section>
  );
}
