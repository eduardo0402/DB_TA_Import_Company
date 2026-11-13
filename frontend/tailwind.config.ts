import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          red: {
            DEFAULT: "#E31D2E",
            hover: "#C91726",
            active: "#A8121E",
            subtle: "#FFF1EF",
            light: "#FEE2E2",
          },
          dark: {
            DEFAULT: "#101115",
            card: "#18191E",
            surface: "#222327",
          },
          gray: {
            label: "#2A2A2A",
            text: "#7B7B7D",
            muted: "#838385",
            border: "#E0E0E0",
            inputBorder: "#D1D5DB",
            placeholder: "#9CA3AF",
            footer: "#888888",
            nav: "#C5C5C7",
          },
        },
      },
      fontFamily: {
        barlow: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

