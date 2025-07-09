/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': {opacity: '0',
            transform: 'translateY(2rem)' },
            '100%': {opacity: '1', 
            transform: 'translateY(0)' },
        },
        animation: {
          'fade-up': 'fade-up 0.8s ease-out forwards',
        },
      }
    }
  },
  plugins: [],
}

