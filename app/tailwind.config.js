/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "user-shadow": "0px 1px 8px 0px rgba(213, 213, 213, 0.50)",
      },
      screens: {
        sm: { max: "725px" },
      },
      colors: {
        "ritten-blue": "var(--ritten-blue)",
        "modal-bg": "var(--modal-bg)",
      },
      fontFamily: {
        circular: ["circular", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
