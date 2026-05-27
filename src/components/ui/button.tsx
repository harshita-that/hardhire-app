import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(ds.button.base, ds.button.radius),
  {
    variants: {
      variant: {
        default: ds.button.primary,
        primary: ds.button.primary,
        secondary: ds.button.secondary,
        outline: ds.button.secondary,
        ghost: cn(ds.button.ghost, "hover:scale-100 active:scale-100"),
        danger: ds.button.danger,
        destructive: ds.button.danger,
        link: cn(
          "text-[#6E56CF] underline-offset-4 hover:underline hover:scale-100 active:scale-100"
        ),
      },
      size: {
        default: ds.button.sizes.default,
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: ds.button.sizes.sm,
        lg: ds.button.sizes.lg,
        icon: ds.button.sizes.icon,
        "icon-xs": "size-6 rounded-md",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
