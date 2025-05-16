/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0f0a1a',
          light: '#1a1030',
        },
        secondary: {
          DEFAULT: '#1a1030',
          dark: '#0f0a1a',
        },
        accent: {
          DEFAULT: '#7a4dff',
          hover: '#6a3dff',
        },
        textPrimary: '#e0e0e0',
        textSecondary: '#8b9cad',
        rarity: {
          common: '#8b9cad',
          rare: '#4d8bff',
          epic: '#9c27b0',
          legendary: '#ff9800',
        },
      },
      boxShadow: {
        achievement: '0 10px 20px rgba(122, 77, 255, 0.3)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        rotate: 'rotate 12s linear infinite',
        slideUp: 'slideUp 0.3s ease forwards',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary) 0%, var(--tw-colors-secondary) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(122, 77, 255, 0.1) 0%, rgba(31, 14, 71, 0.5) 100%)',
      },
    },
  },
  plugins: [],
};