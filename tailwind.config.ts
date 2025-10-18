import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          dark: "#2563EB", // blue-600
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // violet-500
          dark: "#7C3AED",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          800: "#1F2937",
          900: "#111827",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}

export default config
