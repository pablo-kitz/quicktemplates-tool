import type { Config } from "tailwindcss"

import { shadcnPreset } from "./lib/shadcn-preset"

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  presets: [shadcnPreset],
} satisfies Config

export default config
