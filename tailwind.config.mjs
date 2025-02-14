/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Lora", "serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/background.jpg')",
        "bg": "url('/coner.png')",
        "background-bg": "url('/background-bg.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
