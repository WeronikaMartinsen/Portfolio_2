module.exports = {
  content: [
    "./index.html", // Include HTML if applicable
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
