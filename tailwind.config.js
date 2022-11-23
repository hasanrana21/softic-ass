/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#f7b939",
        "primary-2": "#d40511",
        "primary-3": "#363636",
      },
    },
  },
  plugins: [],
};
