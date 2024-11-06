import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'xl': '1120px'
      }
    },
    borderRadius: {
      24: '24px',
      12: '12px',
      8: '8px',
      6: '6px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        50: "var(--50)",
        100: "var(--100)",
        200: "var(--200)",
        300: "var(--300)",
        400: "var(--400)",
        500: "var(--500)",
      },
    },
  },
  plugins: [],
};
export default config;
