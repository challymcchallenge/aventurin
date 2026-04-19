/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f2f7f2',
          100: '#e0ede0',
          200: '#c2dbc3',
          300: '#98c09a',
          400: '#689f6b',
          500: '#458149',
          600: '#346638',
          700: '#2b522e',
          800: '#244227',
          900: '#1e3621',
          950: '#0f1f12',
        },
        earth: {
          50:  '#faf6f0',
          100: '#f2e9db',
          200: '#e3d0b5',
          300: '#d1b289',
          400: '#bf9060',
          500: '#b07a47',
          600: '#966340',
          700: '#7c4f37',
          800: '#674232',
          900: '#56382c',
          950: '#2e1c16',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
