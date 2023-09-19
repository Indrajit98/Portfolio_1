/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'themeColor': "#000000",
      'white': '#ffffff',
      'buttonColor':'#2e303d',
      'bgProject':'#1d232a',

    },
    extend: {},
  },
  plugins: [require("daisyui")],

};
