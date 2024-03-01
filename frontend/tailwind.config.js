/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4CAF50",
        secondary: "#795548",
        brandBlue:"#2196F3",
        brandYellow:"#FFD700",
        brandWhite:"#eeeeee"
      },
      container:{
        center:"true",
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}