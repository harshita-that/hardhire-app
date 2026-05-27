/**
 * HardHire Design System — single source of truth for UI tokens and class presets.
 *
 * RULES (anti-regression):
 * - Pages MUST NOT set background colors (use AppShell).
 * - Pages MUST NOT introduce new hex/rgb colors outside this file.
 * - Prefer shared components (Card, Button, Input) or `ds` presets over ad-hoc Tailwind.
 * - Dark SaaS surfaces only — never bg-white, bg-gray-*, or light slate variants.
 */

export const colors = {
  background: "#0B0F17",
  surface: "rgba(255,255,255,0.05)",
  surfaceRaised: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.16)",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.60)",
  textMuted: "rgba(255,255,255,0.40)",
  accent: "#3B82F6",
  accentHover: "#60A5FA",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
} as const;

/** Spacing scale (px): 4 / 8 / 12 / 16 / 24 / 32 / 48 */
export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  6: 24,
  8: 32,
  12: 48,
} as const;

export const radius = {
  sm: "rounded-md",
  md: "rounded-[10px]",
  lg: "rounded-xl",
  xl: "rounded-2xl",
} as const;

/** Unified motion timing — import from @/lib/motion for Framer values */
export const motionTokens = {
  durationMs: {
    fast: 150,
    normal: 200,
    page: 280,
  },
  ease: [0.25, 0.1, 0.25, 1] as const,
  pageOffsetY: 8,
  cardLiftY: -2,
  listStagger: 0.04,
} as const;

/**
 * Tailwind class presets — use these in UI primitives only.
 */
export const ds = {
  layout: {
    body: "bg-[#0B0F17] text-white antialiased",
    shell: "flex min-h-screen",
    sidebar:
      "flex w-56 min-h-screen shrink-0 flex-col border-r border-white/[0.08] bg-[#0B0F17] px-3 py-4",
    main: "flex-1",
    content: "mx-auto max-w-6xl px-4 py-4 md:px-8 md:py-8",
    navbar:
      "flex items-center justify-between border-b border-white/[0.08] bg-[#0B0F17]/80 px-6 py-4 backdrop-blur-md",
  },

  text: {
    primary: "text-white",
    secondary: "text-white/60",
    muted: "text-white/40",
    caption: "text-xs text-white/40",
    pageTitle: "text-xl font-semibold tracking-tight text-white",
    pageDescription: "mt-1 text-sm text-white/50",
    sectionTitle: "text-base font-medium tracking-tight text-white",
  },

  spacing: {
    page: "space-y-8",
    section: "space-y-4",
    stackSm: "space-y-2",
    gridKpi: "grid gap-4 md:grid-cols-4",
    gridList: "grid gap-2",
  },

  card: {
    base: "rounded-2xl border border-white/[0.10] bg-white/[0.05] p-6 transition-all duration-200 ease-out",
    elevated:
      "rounded-2xl border border-white/[0.12] bg-white/[0.07] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 ease-out",
    interactive:
      "rounded-2xl border border-white/[0.10] bg-white/[0.05] p-6 transition-all duration-200 ease-out hover:border-white/[0.16]",
    hover: "hover:-translate-y-0.5",
  },

  button: {
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 ease-out outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B82F6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17]",
    primary: "bg-[#3B82F6] text-white hover:bg-[#60A5FA]",
    secondary:
      "border border-white/[0.10] bg-transparent text-white/80 hover:bg-white/[0.04]",
    ghost:
      "bg-transparent text-white/60 hover:bg-white/[0.03] hover:text-white hover:scale-100 active:scale-100",
    danger:
      "border border-[#EF4444]/25 bg-[#EF4444]/15 text-[#EF4444] hover:bg-[#EF4444]/25 hover:scale-100 active:scale-100",
    radius: radius.md,
    sizes: {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3",
      lg: "h-10 px-6",
      icon: "size-9",
    },
  },

  input: {
    base: "flex h-9 w-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm text-white transition-all duration-200 ease-out placeholder:text-white/25 focus-visible:outline-none focus-visible:border-white/20 focus-visible:ring-2 focus-visible:ring-[#3B82F6]/25 disabled:cursor-not-allowed disabled:opacity-50",
    radius: radius.lg,
  },

  table: {
    container:
      "overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.05]",
    head: "border-b border-white/[0.08] bg-white/[0.02]",
    headCell:
      "px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white/40",
    row: "transition-colors duration-200 ease-out hover:bg-white/[0.02]",
    cell: "px-4 py-4 text-white/75",
    divide: "divide-y divide-white/[0.05]",
  },

  badge: {
    base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
  },

  sidebar: {
    navItem:
      "relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors duration-200 ease-out",
    navActive: "text-white",
    navInactive: "text-white/50 hover:bg-white/[0.03] hover:text-white",
    activePill: "absolute inset-0 rounded-lg bg-white/[0.07]",
  },

  skeleton: {
    base: "animate-pulse rounded-md bg-white/[0.06]",
    line: "h-4 bg-white/[0.06]",
    lineSm: "h-3 bg-white/[0.04]",
    block: "rounded-2xl bg-white/[0.05] border border-white/[0.08]",
  },

  empty: {
    wrapper: "flex flex-col items-center justify-center py-16 text-center",
    title: "text-sm font-medium text-white/50",
    description: "mt-1 max-w-sm text-sm text-white/35",
  },

  motion: {
    transition: "transition-all duration-200 ease-out",
  },
} as const;

export type CardVariant = "default" | "elevated" | "interactive";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "destructive"
  | "outline"
  | "link";
