/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    boxShadow: {
      'purple-glow': '0 4px 10px rgba(168,85,247,0.6)',
    },
  },
},
  plugins: [],
}

