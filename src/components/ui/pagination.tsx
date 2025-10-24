"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  currentPage?: number; // 🔥 added for external control
  onPageChange?: (page: number) => void; // 🔥 added callback
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  mode?: "minimal" | "truncated" | "full"; // different display styles
}

export function Pagination({
  totalPages,
  initialPage = 1,
  currentPage: controlledPage,
  onPageChange,
  variant = "outline",
  size = "md",
  mode = "truncated",
}: PaginationProps) {
  // if controlledPage is provided, component acts as controlled
  const [internalPage, setInternalPage] = useState(initialPage);
  const currentPage = controlledPage ?? internalPage;

  useEffect(() => {
    if (controlledPage !== undefined) {
      setInternalPage(controlledPage);
    }
  }, [controlledPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    if (onPageChange) onPageChange(page);
    else setInternalPage(page);
  };

  const renderPageButton = (page: number) => (
    <Button
      key={`page-${page}`}
      variant={page === currentPage ? "primary" : variant}
      size={size}
      className={cn(
        "rounded-full w-10 h-10 transition-all duration-150",
        page === currentPage
          ? "bg-[var(--color-primary)] text-white shadow-sm"
          : "text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/10"
      )}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Button>
  );

  const renderPageNumbers = () => {
    if (mode === "minimal") return null;

    if (mode === "full" || totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => renderPageButton(i + 1));
    }

    // truncated mode logic
    const pages: (number | string)[] = [];
    if (currentPage > 3) pages.push(1, "start-ellipsis");
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("end-ellipsis", totalPages);

    return pages.map((page, i) =>
      typeof page === "number" ? (
        renderPageButton(page)
      ) : (
        <span
          key={`ellipsis-${i}`}
          className="px-2 text-gray-400 flex items-center justify-center"
        >
          <MoreHorizontal className="w-4 h-4" />
        </span>
      )
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 select-none">
      {/* Previous Button */}
      <Button
        variant={variant}
        size={size}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full w-10 h-10 flex items-center justify-center"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <Button
        variant={variant}
        size={size}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full w-10 h-10 flex items-center justify-center"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
