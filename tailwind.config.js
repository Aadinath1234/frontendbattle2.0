// import daisyui from "daisyui"; // Importing daisyUI plugin

// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Includes all React files in the src folder
//     "./public/index.html", // Includes the index.html file
//   ],
//   theme: {
//     extend: {
//       colors: {},
//       container: {},
//     },
//   },
//   darkMode: "class",
//   plugins: [
//     daisyui(), // DaisyUI plugin for ready-to-use components
//   ],
// };




import daisyui from 'daisyui';
import themes from 'daisyui/theme/object';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {},
      container: {},
    },
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [daisyui],// Use the plugin, don't call it!
  daisyui: {
    themes:["light", "dark"],
    darkTheme: "dark"
  },

};
