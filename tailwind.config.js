/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        anime1: {
          from: { transform: "translate(55%,-15%)" },
          to: { transform: "translate(0%,10%)" },
        },
        anime2: {
          from: { transform: "translate(5%,-3%)" },
          to: { transform: "translate(-20%,30%)" },
        },
        'moving-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        }
      },
      animation: {
        anime1: "anime1 4s linear infinite alternate",
        anime2: "anime2 4s linear infinite alternate",
        'moving-text': 'moving-text 10s linear infinite'
      },
    },
  },
  plugins: [],
};
