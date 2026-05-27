"use client";

import { motion } from "framer-motion";

const grades = [
  { letter: "A", color: "#22C55E", label: "Excellent", barWidth: "95%" },
  { letter: "B", color: "#3B82F6", label: "Good", barWidth: "78%" },
  { letter: "C", color: "#F59E0B", label: "Fair", barWidth: "58%" },
  { letter: "D", color: "#F97316", label: "Poor", barWidth: "38%" },
  { letter: "F", color: "#EF4444", label: "Failing", barWidth: "18%" },
];

export function GradePreview() {
  return (
    <section id="grades" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[300px] -translate-y-1/2 rounded-full bg-[#3B82F6]/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-[#93C5FD] uppercase">
            Safety Grades
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Crystal-clear safety ratings
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
            Every contractor receives an A–F grade based on their OSHA violation
            history, severity, and recency of incidents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
        >
          <div className="space-y-5">
            {grades.map((grade, i) => (
              <motion.div
                key={grade.letter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base font-bold"
                  style={{
                    backgroundColor: `${grade.color}15`,
                    color: grade.color,
                    border: `1px solid ${grade.color}25`,
                  }}
                >
                  {grade.letter}
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-white/70">
                      {grade.label}
                    </span>
                    <span className="text-xs text-white/30">
                      {grade.barWidth}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: grade.barWidth }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + i * 0.08,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: grade.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.04] bg-white/[0.02] px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/15 text-[#93C5FD]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-white/35">
                Grades are calculated using a weighted algorithm that considers
                violation count, severity level, penalty amounts, and how recently
                incidents occurred.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
