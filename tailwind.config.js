/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-pink': '#ff00ff',
        'neon-yellow': '#ffd700',
        'walmart-blue': '#0071ce',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%, 100%': {
            'text-shadow': '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff',
          },
          '50%': {
            'text-shadow': '0 0 20px #00f3ff, 0 0 30px #00f3ff, 0 0 40px #00f3ff',
          },
        },
      },
    },
  },
  plugins: [],
};