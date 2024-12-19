/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif", "serif"],
      },
      colors: {
        customPink: "#F2B3CA",
        customLightBlue: "#818eff",
        customBluePurple: "#4c5fd5",
        customOrange: "#F2AE30",
        customBlack: "#0D0D0D",
        customBlackLight: "#2e2f30",
        customFlowerBlue: "#DADBF1",
        customSteelBlue: "#b3b8ee",
        customBeige: "#E3DBD5",
        customBlue: "#4C5FD5",
        customGray: "#C9D5D3",
        customLightBlueTwo: "#DADBF1",
      },
    },
  },
  plugins: [],
};
