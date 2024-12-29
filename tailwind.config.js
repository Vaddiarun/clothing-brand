/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%': {
            top: '0',
            left: '0',
            width: '0',
            height: '0',
          },
          '25%': {
            top: '0',
            left: '0',
            width: '100%',
            height: '0',
          },
          '50%': {
            top: '0',
            left: '100%',
            width: '0',
            height: '100%',
          },
          '75%': {
            top: '100%',
            left: '0',
            width: '100%',
            height: '0',
          },
          '100%': {
            top: '0',
            left: '0',
            width: '0',
            height: '0',
          },
        },
      },
      animation: {
        bubble: 'bubble 4s infinite linear',
      },
    },
  },
  plugins: [],
};
  