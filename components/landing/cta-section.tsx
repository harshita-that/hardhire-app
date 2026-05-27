"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/[0.06] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-16 backdrop-blur-sm md:px-16 md:py-20">
          {/* Decorative gradient border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#3B82F6]/[0.08] via-transparent to-transparent opacity-50" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start making safer hiring decisions
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/45">
              Join safety teams who trust HardHire to screen contractors before
              every project. Set up in minutes — no credit card required.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/sign-up"
                className="group relative inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#60A5FA] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.35),0_1px_2px_rgba(0,0,0,0.3)]"
              >
                Get Started Free
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
                href="/sign-in"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.10] bg-transparent px-8 py-3.5 text-sm font-medium text-white/60 transition-all duration-200 hover:bg-white/[0.04] hover:text-white hover:border-white/[0.16]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
