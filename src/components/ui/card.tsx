"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion as framerMotion } from "framer-motion";

import { ds } from "@/lib/design-system";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ------------------ Variants ------------------ */

const cardVariants = cva("", {
  variants: {
    variant: {
      default: ds.card.base,
      elevated: ds.card.elevated,
      interactive: cn(ds.card.interactive, ds.card.hover),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/* ------------------ Card Component ------------------ */

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    if (variant === "interactive") {
      return (
        <framerMotion.div
          ref={ref}
          className={cn(cardVariants({ variant }), className)}
          whileHover={motion.cardHover}
          {...(props as React.ComponentProps<typeof framerMotion.div>)}
        >
          {children}
        </framerMotion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/* ------------------ Subcomponents ------------------ */

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-4 flex flex-col gap-1", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(ds.text.sectionTitle, className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(ds.text.pageDescription, "mt-0", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
CardContent.displayName = "CardContent";

/* ------------------ Exports ------------------ */

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};

export type { CardVariant } from "@/lib/design-system";