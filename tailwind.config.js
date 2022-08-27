/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shipment-bg": "url('/src/assets/Images/shipment-bg.jpg')",
        "rope-as-bg": "url('/src/assets/Images/rope.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
