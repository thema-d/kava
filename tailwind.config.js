// const theme = require("@tailwindcss/postcss7-compat/stubs/defaultConfig.stub");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      borderStyle: ["hover", "group-focus"],
      borderWidth: ["hover", "group-focus"],
      cursor: ["hover"],
      display: ["group-hover"]
    }
  },
  plugins: []
};
