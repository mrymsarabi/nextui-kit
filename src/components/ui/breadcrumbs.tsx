"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Slash, Dot } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "default" | "chevron" | "pill" | "underline";
  separator?: "slash" | "chevron" | "dot" | "custom";
  customSeparator?: string;
  className?: string;
}

export function Breadcrumbs({
  items,
  variant = "default",
  separator = "slash",
  customSeparator,
  className,
}: BreadcrumbsProps) {
  const SeparatorIcon =
    separator === "chevron"
      ? ChevronRight
      : separator === "dot"
      ? Dot
      : separator === "slash"
      ? Slash
      : null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const showSeparator = !isLast;

        return (
          <div key={index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 transition-all duration-150",
                  variant === "default" && "text-[var(--color-foreground)] hover:underline",
                  variant === "chevron" && "text-[var(--color-foreground)] hover:text-[var(--color-primary)]",
                  variant === "pill" &&
                    "px-3 py-1 rounded-full bg-[var(--color-foreground)]/10 hover:bg-[var(--color-foreground)]/20",
                  variant === "underline" &&
                    "border-b border-transparent hover:border-[var(--color-primary)] pb-0.5"
                )}
              >
                {item.icon && <span className="text-[var(--color-foreground)]/70">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "flex items-center gap-1 text-[var(--color-foreground)]/70",
                  variant === "pill" && "px-3 py-1 rounded-full bg-[var(--color-primary)] text-white"
                )}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </span>
            )}

            {showSeparator && (
              <span className="mx-2 text-[var(--color-foreground)]/50 flex items-center">
                {SeparatorIcon ? (
                  <SeparatorIcon className="w-4 h-4" />
                ) : (
                  customSeparator ?? "/"
                )}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
