"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  initial?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  label?: string;
}

export function ToggleSwitch({
  initial = false,
  onChange,
  size = "md",
  variant = "primary",
  label,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(initial);

  const toggle = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  const sizeClasses = {
    sm: "w-10 h-5 p-0.5",
    md: "w-12 h-6 p-1",
    lg: "w-16 h-8 p-1.5",
  }[size];

  const ballSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size];

  const variantClasses = {
    primary: checked
      ? "bg-[var(--color-primary)]"
      : "bg-[var(--color-foreground)]/30",
    secondary: checked
      ? "bg-[var(--color-secondary)]"
      : "bg-[var(--color-foreground)]/30",
    ghost: checked
      ? "bg-[var(--color-foreground)]/50"
      : "bg-[var(--color-foreground)]/20",
  }[variant];

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "relative flex items-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60",
          sizeClasses,
          variantClasses
        )}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "absolute rounded-full bg-white shadow-md",
            ballSize,
            checked ? "right-[2px]" : "left-[2px]"
          )}
        />
      </button>
      {label && (
        <span className="text-sm font-medium text-[var(--color-foreground)] leading-none select-none">
          {label}
        </span>
      )}
    </div>
  );
}
