/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ironman: ['"Iron Man"', 'sans-serif'], // Add your custom font here
        IRONMAN:['IRON MAN','serif'],
        FingerPaint:['Finger Paint','sans-serif']
      },
      scrollBehavior: ['smooth'],
      screens: {
        xs: "480px", // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}