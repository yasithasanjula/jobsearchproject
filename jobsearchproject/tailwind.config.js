/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        'blueColor' : '#2a68ff',
        'grayIsh' : '#f1f4f8',
        'cardShadow' : '#F7F8F9',
        'textcolor' : '#252b36',
      }
    },
  },
  plugins: [],
}

