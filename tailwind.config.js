/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-black": "#111315",
        "theme-orange": "linear-gradient(90.66deg, #e07344 0%, #e09844 100%)",
      },
    },
    fontFamily: {
      body: ["Manrope"],
    },
  },
  plugins: [],
};
