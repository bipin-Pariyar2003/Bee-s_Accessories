// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is critical
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
