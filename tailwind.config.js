/** @type {import('tailwindcss').Config} */
module.exports = {
  //  app\(stack)\_layout.tsx

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{js,jsx,ts,tsx}",
    "app/**/**/*.{js,jsx,ts,tsx}",
    "app/**/**/**/*.{js,jsx,ts,tsx}",
    "app/**/**/**/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
    "components/**/**/*.{js,jsx,ts,tsx}",
    "components/**/**/**/*.{js,jsx,ts,tsx}",
    "components/**/**/**/**/*.{js,jsx,ts,tsx}",
    "components/**/**/**/**/**/*.{js,jsx,ts,tsx}",
    "components/**/**/**/**/**/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "#161622",
        primary : "#6141E1",
        secondary: "#1f1f30",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
        9: "9 9 0%",
        10: "10 10 0%",
        11: "11 11 0%",
        12: "12 12 0%",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

