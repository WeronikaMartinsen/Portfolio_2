module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E3C34",
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
