/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: '#F9FAFB', 200: '#E8E8E8', 300: '#D1D1D1', 400: '#B8B8B8', 500: '#9F9F9F', 600: '#7A7A7A', 700: '#616161', 800: '#3D3D3D', 900: '#1C1C1E'},
        textPrimary: {100: '#FFF9E6', 200: '#FFF1CC', 300: '#FFE599', 400: '#FFD966', 500: '#FFCC33', 500: '#FFCC33', 700: '#FFBF00', 800: '#E6A800', 900: '#B38F00'}
      },
      maxWidth: {
        '1/2': '50%',
        '2/3': '66.667%',
        '1/4': '25%'
      },
      height: {
        'half-screen': "50vh"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
}

