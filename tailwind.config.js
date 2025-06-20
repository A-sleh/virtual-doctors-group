/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : "jit" ,
  darkMode : 'class' ,
  content: ["./*.html","./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #1579e5"
      }
    },
  },
  plugins: [],
}

