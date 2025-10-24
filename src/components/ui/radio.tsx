"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RadioProps {
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
  variant?: "default" | "outline" | "card" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Radio({
  label,
  value,
  selected,
  onChange,
  variant = "default",
  size = "md",
}: RadioProps) {
  const isChecked = selected === value;

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const innerDotSize = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  };

  return (
    <label
      className={cn(
        "flex items-center gap-3 cursor-pointer select-none transition-all",
        variant === "card" &&
          "border rounded-[var(--radius-card)] p-3 hover:shadow-sm",
        variant === "outline" && "border-b border-[var(--color-foreground)]/20",
        variant === "ghost" && "hover:bg-[var(--color-foreground)]/10 rounded-lg p-2"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full border transition-all duration-200",
          sizes[size],
          isChecked
            ? "border-[var(--color-primary)]"
            : "border-[var(--color-foreground)]/40 bg-transparent"
        )}
        onClick={() => onChange(value)}
      >
        {isChecked && (
          <motion.div
            layoutId={`radio-dot-${variant}`}
            className={cn(
              "rounded-full bg-[var(--color-primary)]",
              innerDotSize[size]
            )}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </div>
      <span
        className={cn(
          "text-sm transition-colors duration-150",
          isChecked
            ? "text-[var(--color-primary)] font-medium"
            : "text-[var(--color-foreground)]"
        )}
        onClick={() => onChange(value)}
      >
        {label}
      </span>
    </label>
  );
}

interface RadioGroupProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  variant?: "default" | "outline" | "card" | "ghost";
  size?: "sm" | "md" | "lg";
  direction?: "row" | "col";
}

export function RadioGroup({
  options,
  value,
  onChange,
  variant = "default",
  size = "md",
  direction = "col",
}: RadioGroupProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        direction === "col" ? "flex-col" : "flex-row flex-wrap"
      )}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          selected={value}
          onChange={onChange}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
}
