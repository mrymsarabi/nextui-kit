import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-[var(--radius-card)] border border-[var(--color-foreground)]/20 bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-foreground)] shadow-[var(--shadow)] placeholder:text-[var(--color-foreground)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
