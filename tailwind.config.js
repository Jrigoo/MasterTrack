module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#003453",
        blanco: "#EDFBFF",
        naranja: "#E39E21",
        aiesec: "#037ef3",
      },
      boxShadow: {
        default: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      dropShadow: {
        text: "0px 1px 10px rgba(0, 39, 90, 0.3)",
      },
      screens: {
        xs: "440px",
        sm: "550px",
      },
      keyframes: {
        intro: {
          "0%": { transform: "scale(0.94)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        intro: "intro ease-in 1s",
      },
    },
  },
  plugins: [],
};
