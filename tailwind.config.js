/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'available-color': '#305856',
        primary: '#7c6aff',
        'primary-blur': 'rgba(124, 106, 255, 0.2)',
        secondary: '#06b6d4',
        'secondary-blur': '#282828',
        paragraph: '#758193',
        bg: '#0f0f1a',
        'head-bg': '#0a0a10',
        'card-bg': '#13131f',
        light: '#fff',
        'header-bg': 'rgba(10, 10, 15, 0.95)',
        'border-color': '#24242d',
        dark: '#000',
      },
      transitionDuration: {
        'trans': '300ms',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'to-down': {
          '0%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(6px)' },
        },
        moveDot: {
          '0%': { right: '-6px' },
          '50%': { right: '80px' },
          '100%': { right: '-6px' },
        },
        available: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            'box-shadow': '0 0 0 0 #305856',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1.1)',
            'box-shadow': '0 0 0 10px transparent',
          }
        },
        pop: {
          'from': { transform: 'scale(0.85)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite alternate',
        'to-down': 'to-down 0.5s ease infinite alternate',
        moveDot: 'moveDot 2s infinite ease-in-out',
        available: 'available 1s ease-in-out infinite alternate',
        pop: 'pop 0.3s ease forwards',
      }
    },
  },
  plugins: [],
}
