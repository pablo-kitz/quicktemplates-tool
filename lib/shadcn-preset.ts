import typographyPlugin from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

import { shadcnPlugin } from "./shadcn-plugin"

export const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, typographyPlugin, shadcnPlugin],
} satisfies Config
