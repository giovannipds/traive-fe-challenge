/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
};
