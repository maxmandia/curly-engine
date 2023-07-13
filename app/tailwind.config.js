/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".remove-icon": {
            "::-webkit-calendar-picker-indicator": {
              display: "none",
            },
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".remove-icon": {
            "::-webkit-calendar-picker-indicator": {
              display: "none",
            },
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
