import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merge Tailwind and conditional class names cleanly */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
