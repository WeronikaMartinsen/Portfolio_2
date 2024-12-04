module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2D4C9",
        secondary: "#F2F2F2",
        neutral: "#737373",
        dark: {
          DEFAULT: "#262626",
          deep: "#0D0D0D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
