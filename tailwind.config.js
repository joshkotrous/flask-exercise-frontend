// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/components/**/*.{html,js,jsx}",
//     "./src/pages/**/*.{html,js,jsx}",
//     "./index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
