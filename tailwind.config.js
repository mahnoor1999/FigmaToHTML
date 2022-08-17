const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    colors: {
      purple: {
        100: "#CFB3FF",
        200: "#B28AF8",
        300: "#956AE1;",
      },
      gray: {
        50: "#f0f0f0",
        100: "#8B8399",
        200: "#51495F",
      },
      white: colors.white,
      transparent: "transparent",
      current: colors.current,
    },
  },
  plugins: [],
};
