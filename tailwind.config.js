import daisyui from "daisyui"; // Importing daisyUI plugin

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all React files in the src folder
    "./public/index.html", // Includes the index.html file
  ],
  theme: {
    extend: {
      colors: {},
      container: {},
    },
  },
  darkMode: "class",
  plugins: [
    daisyui(), // DaisyUI plugin for ready-to-use components
  ],
};
