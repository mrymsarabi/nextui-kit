"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const paginationButton = cva(
  "flex items-center justify-center rounded-[var(--radius-card)] text-sm font-medium transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
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
        sm: "h-8 w-8",
        md: "h-9 w-9",
        lg: "h-10 w-10 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

interface PaginationProps extends VariantProps<typeof paginationButton> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  variant,
  size,
}: PaginationProps) {
  const handleClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(paginationButton({ variant, size }))}
      >
        ←
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() => handleClick(page)}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: page === currentPage ? 1.1 : 1,
            backgroundColor:
              page === currentPage
                ? "var(--color-primary)"
                : "transparent",
            color:
              page === currentPage
                ? "white"
                : "var(--color-foreground)",
          }}
          transition={{ duration: 0.25 }}
          className={cn(paginationButton({ variant, size }), "relative")}
        >
          {page}
        </motion.button>
      ))}

      {/* Next */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(paginationButton({ variant, size }))}
      >
        →
      </button>
    </div>
  );
}
