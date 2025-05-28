// tailwind.config.js
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // or your custom themes
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
  },
};
