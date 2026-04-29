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
        green: {
          brand: "#1FB76D",
          deep: "#0E5A37",
        },
        ink: "#0C2A1B",
        cream: "#FAF7F0",
        red: {
          accent: "#E63946",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        marker: ["var(--font-marker)"],
      },
    },
  },
  plugins: [],
};

export default config;
