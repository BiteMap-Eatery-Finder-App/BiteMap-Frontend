/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mulish: ["Mulish", "sans-serif"],
      },
      colors:{
        lightRed: "#ea4335",
        darkRed: "#a60d0d",
        lightGray: "#dcdde1",
        darkGray: "#353b48",
        white:"#F5F6FA",
        yellow:"#fbc531",
        lightYellow:"#fdedc1",
        darkGreen: "#037971",
        gray: "#7f8fa6",
        cardWhite: "#FEFEFF"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },

    },
  },
  plugins: [],
}

