// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Define a custom font family named 'allura'
          // 'Allura' must exactly match the font name from the Google Fonts import
          allura: ['Allura', 'cursive'],
        },
      },
    },
    plugins: [],
  }