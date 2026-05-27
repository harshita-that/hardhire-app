"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic contractor safety lookups.",
    features: [
      "5 contractor lookups / month",
      "Basic safety grade (A–F)",
      "OSHA violation summary",
      "Email support",
    ],
    cta: "Get Started",
    href: "/sign-up",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "Unlimited lookups with detailed reports and exports.",
    features: [
      "Unlimited contractor lookups",
      "Detailed violation breakdowns",
      "PDF report exports",
      "Risk trend analysis",
      "Priority support",
      "Team sharing (up to 5)",
    ],
    cta: "Start Free Trial",
    href: "/sign-up",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per organization",
    description: "For large teams with compliance and integration needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "API access",
      "SSO / SAML authentication",
      "Custom integrations",
      "Dedicated account manager",
      "SLA & compliance support",
    ],
    cta: "Contact Sales",
    href: "#",
    highlighted: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function PricingSection() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 border-y border-white/[0.04] bg-white/[0.01]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#3B82F6]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-[#93C5FD] uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
            Start free and scale as your safety compliance needs grow.
            No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                tier.highlighted
                  ? "border-[#3B82F6]/30 bg-white/[0.04] shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.03]"
              )}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#3B82F6] px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/40">
                    /{tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-white/55"
                  >
                    <svg
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.highlighted ? "text-[#3B82F6]" : "text-white/25"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200",
                  tier.highlighted
                    ? "bg-[#3B82F6] text-white hover:bg-[#60A5FA] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "border border-white/[0.10] bg-transparent text-white/60 hover:bg-white/[0.04] hover:text-white hover:border-white/[0.16]"
                )}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
