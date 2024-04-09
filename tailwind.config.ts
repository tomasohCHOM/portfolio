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
        primary: "rgb(var(--color-primary))",
        "secondary-300": "rgb(var(--color-secondary-300))",
        secondary: "rgb(var(--color-secondary))",
        contrast_muted: "rgb(var(--color-contrast-muted))",
        contrast: "rgb(var(--color-contrast))",
      },
    },
  },
  plugins: [],
};
export default config;
