"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--radius-card)] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-white hover:opacity-90 focus-visible:ring-[var(--color-primary)]",
        secondary:
          "bg-[var(--color-secondary)] text-white hover:opacity-90 focus-visible:ring-[var(--color-secondary)]",
        outline:
          "border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]",
        ghost:
          "text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/10",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
