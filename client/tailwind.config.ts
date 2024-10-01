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
          DEFAULT: '#124d54', // dark teal-green
        },
        secondary: {
          DEFAULT: '#f9744b', // orange
        },
        background: {
          blue: '#091d26', // dark green-blue
          light: '#F5F5F5',   // Light Gray
          card: '#FFFFFF',    // White
        },
        text: {
          primary: '#ededed', // Charcoal Gray
          secondary: '#e1d9cf', // Medium Gray
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
