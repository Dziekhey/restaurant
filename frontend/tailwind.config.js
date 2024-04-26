/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#3C2A0C',
        dark: '#536d1b',
        light: '#bda915',
        warning: '#bda915',
      }
    },
  },
  plugins: [],
}