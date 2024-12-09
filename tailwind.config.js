module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111826",
        secondary: "##20448C",
        neutral: "#142240",
        accent: "#59D9C1",
        dark: {
          DEFAULT: "#262626",
          deep: "#0D0D0D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
