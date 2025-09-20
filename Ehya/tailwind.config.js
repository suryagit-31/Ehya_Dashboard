/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skycustom: "#24CEED",
        ocean: "#01B8D9",
        light: "#EFFBFF",
        title: "#034D82",
        headerdown: "#00A8DB",
        headerup: "#27C0EF",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
