import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const badgeVariants = cva(ds.badge.base, {
  variants: {
    variant: {
      default: "bg-white/[0.06] text-white/70 border-white/[0.08]",
      success:
        "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20",
      warning:
        "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
      error: "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20",
      neutral:
        "bg-white/[0.06] text-white/55 border-white/[0.08]",
      accent:
        "bg-[#6E56CF]/10 text-[#A78BFA] border-[#6E56CF]/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
