import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "menu-sm": ["0.7rem", { lineHeight: "1rem" }], // ~11px
        "menu-base": ["0.8rem", { lineHeight: "1.25rem" }], // ~13px
        "menu-lg": ["0.9rem", { lineHeight: "1.5rem" }], // ~14px
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        // your other fonts...
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
} satisfies Config;
