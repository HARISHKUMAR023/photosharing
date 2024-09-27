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
        primary: {
          DEFAULT: '#3F51B5', // Dark Slate Blue
        },
        secondary: {
          DEFAULT: '#009688', // Teal Green
        },
        background: {
          light: '#F5F5F5',   // Light Gray
          card: '#FFFFFF',    // White
        },
        text: {
          primary: '#333333', // Charcoal Gray
          secondary: '#757575', // Medium Gray
        },
        error: {
          DEFAULT: '#FF5722', // Red Orange
        },
        success: {
          DEFAULT: '#4CAF50', // Spring Green
        },
      },
    },
  },
  plugins: [],
};
export default config;
