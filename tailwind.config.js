/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1B3D", // Dark Blue
        secondary: "#D4AF37", // Gold
        light: "#F8F9FA", // Off-white
        dark: "#1A1A1A", // Dark
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}