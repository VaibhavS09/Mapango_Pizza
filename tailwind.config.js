/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      colors: {
        brand: {
          50: '#fff8f0',
          100: '#ffeed6',
          200: '#ffd9a8',
          300: '#ffbe70',
          400: '#ff9838',
          500: '#ff7714',
          600: '#f05e08',
          700: '#c74708',
          800: '#9e390f',
          900: '#7f310f',
        },
        charcoal: {
          50: '#f6f5f3',
          100: '#e9e6e1',
          200: '#d1ccc3',
          300: '#b0a89b',
          400: '#8a8071',
          500: '#6c6354',
          600: '#544b3e',
          700: '#3e362c',
          800: '#2a241d',
          900: '#1a1611',
        },
        cream: '#fdf8f1',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 119, 20, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 119, 20, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
