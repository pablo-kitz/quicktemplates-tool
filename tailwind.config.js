const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#F7F7F8',
      black: '#222222',
      neutral: {
        50: "#fafafa",
        100: "#f4f4f4",
        200: "#e6e6e6",
        300: "#d4d4d4",
        400: "#a2a2a2",
        500: "#727272",
        600: "#535353",
        700: "#404040",
        800: "#272727",
        900: "#181818",
      },
      indigo: colors.indigo,
      slate: colors.slate,
      blue: {
        DEFAULT: "#81c7da",
        50: "#effafe",
        100: "#dbeef5",
        200: "#b5dee9",
        300: "#81c7da",
        400: "#46b6d4",
        500: "#14a2ca",
        600: "#0084ad",
        700: "#006b8d",
        800: "#005b77",
        900: "#004d65",
      },
      red: {
        DEFAULT: "#ff6d62",
        50: "#fef2f1",
        100: "#ffe2e0",
        200: "#ffcbc7",
        300: "#ffa59e",
        400: "#ff6d62",
        500: "#f53d2b",
        600: "#dd2700",
        700: "#b92000",
        800: "#9a1b07",
        900: "#7f1e13",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
