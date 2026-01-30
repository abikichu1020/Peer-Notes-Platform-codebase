/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(240, 5.9%, 10%)",
          foreground: "hsl(240, 5%, 95%)",
        },
        secondary: {
          DEFAULT: "hsl(240, 4.8%, 95.9%)",
          foreground: "hsl(240, 5.9%, 10%)",
        },
      },
    },
  },
  plugins: [],
}