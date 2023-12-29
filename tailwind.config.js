/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      azo: ["Azo Sans Uber W01 Regular"],
      montserrat: ["Montserrat"],
    },
  },
  plugins: [require("daisyui")],
};
