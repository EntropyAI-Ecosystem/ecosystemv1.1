/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#FFD700',
          goldLight: '#FDB931',
          goldDark: '#B8860B'
        },
        accent: {
          blue: '#000080',
          red: '#8B0000'
        }
      },
      boxShadow: {
        gold: '0 0 20px rgba(255,215,0,0.2)',
        'gold-lg': '0 0 30px rgba(255,215,0,0.3)',
        'gold-xl': '0 0 40px rgba(255,215,0,0.4)'
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-gold': {
          '0%, 100%': {
            opacity: 1,
            boxShadow: '0 0 20px rgba(255,215,0,0.2)'
          },
          '50%': {
            opacity: .5,
            boxShadow: '0 0 30px rgba(255,215,0,0.4)'
          }
        }
      }
    },
  },
  plugins: [],
};