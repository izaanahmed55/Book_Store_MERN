/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#14b8a6",
        "light-blue": "#ccfbf1"
      }
    },
  },
  plugins: [],
}