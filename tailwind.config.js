/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#4B0D37",
        "brand-red": "#EF4353",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Nunito Sans", "sans-serif"],
        nunito: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};