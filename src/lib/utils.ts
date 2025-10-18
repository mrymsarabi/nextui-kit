import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merge Tailwind and conditional class names cleanly */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
