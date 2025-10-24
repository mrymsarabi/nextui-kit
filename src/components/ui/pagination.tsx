"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  mode?: "minimal" | "truncated" | "full";
}

export function Pagination({
  totalPages,
  initialPage = 1,
  variant = "outline",
  size = "md",
  mode = "truncated",
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const renderPageButton = (page: number) => (
    <Button
      key={`page-${page}`}
      variant={page === currentPage ? "primary" : variant}
      size={size}
      className={cn(
        "rounded-full w-10 h-10 transition-all duration-150",
        page === currentPage
          ? "bg-[var(--color-primary)] text-white shadow-sm scale-105"
          : "text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/10"
      )}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Button>
  );

  const renderPageNumbers = () => {
    // MINIMAL MODE (shows bar + text)
    if (mode === "minimal") {
      return (
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            Page{" "}
            <strong className="text-[var(--color-primary)]">{currentPage}</strong> of{" "}
            {totalPages}
          </span>
          <div className="h-1 w-32 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-300"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            />
          </div>
        </div>
      );
    }

    // FULL MODE
    if (mode === "full" || totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => renderPageButton(i + 1));
    }

    // TRUNCATED MODE
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
      {/* ◀️ Previous Button */}
      <Button
        variant={variant}
        size={size}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "rounded-full w-10 h-10 flex items-center justify-center transition-all",
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {/* Page Numbers or Progress Bar */}
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <Button
        variant={variant}
        size={size}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "rounded-full w-10 h-10 flex items-center justify-center transition-all",
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
