/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dosis: ["Dosis", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#CD8004",
        "primary-1": "#1ebe67",
      },
    },
  },
  plugins: [],
};
