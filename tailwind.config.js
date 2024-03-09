/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPageBg: "url('./assets/mainPageBg.png')",
        contactPageBg: "url('./assets/contactpagebg.jpg')",
      },
      colors: {
        bgColor: "#e9e7e2",
        white: "#f9f9f9",
        black: "#070707",
        mossySage: "#A8AD8E",
        slateShadow: "#434839",
        earthyOlive: "#7C8366",
        goldenAmber: "#DBB575",
        veryLightGreen: "#d7dbce",
      },
    },
    fontFamily: {
      garamond: ["Cormorant Garamond", "serif"],
      manrope: ["Manrope", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sulfates: ["SULFATES", "sans-serif"],
    },
  },
  plugins: [],
};
