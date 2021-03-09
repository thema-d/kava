// const theme = require("@tailwindcss/postcss7-compat/stubs/defaultConfig.stub");
// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-primary": "var(--ff-337-b-primary)",
        "dark-primary": "var(--dark-pink)"
      }
    }
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
