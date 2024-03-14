const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#46cf76",
          50: "#c9f3c7",
          100: "#a5ebad",
          200: "#77e091",
          300: "#4dc86c",
          400: "#2db14b",
          500: "#46cf76",
          600: "#3fb968",
          700: "#37a95a",
          800: "#2f9b4c",
          900: "#278d3f",
        },
      },
      spacing: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
}
