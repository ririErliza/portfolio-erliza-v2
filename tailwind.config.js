/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 18s linear infinite',
        'spin-med': 'spin 8s linear infinite',
      },
    },
 
  },
  plugins: [],
}
