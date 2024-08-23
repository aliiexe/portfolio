/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(0%)' },  
          '50%': { transform: 'translateY(-126%)' },
          '75%': { transform: 'translateY(-126%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slide: 'slide 10s cubic-bezier(0.175, 0.885, 0.335, 1.135) infinite',
      },
      width: {
        '100': '700px',
      },
    },
    colors : {
      portfolio: {
        100: '#D3D3D3',
        200: '#ffffff',
        300: '#818181',
        400: '#343434',
        500: '#F24E1E',
        600: '#1ABCFE',
        700: '#252525',
        800: '#343434',
        900: '#1a202c',
      },
    },
  },
  plugins: [],
}

