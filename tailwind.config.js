/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shipment-bg": "url('/src/assets/Images/shipment-bg.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
