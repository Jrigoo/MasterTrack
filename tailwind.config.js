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
    },
  },
  plugins: [],
};
