/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f6fb',
          100: '#ececf7',
          500: '#5146e5',
          600: '#4338ca',
          700: '#312e81'
        },
        ink: '#0f172a',
        sand: '#faf7f2',
        gold: '#d4a94d'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15,23,42,.08)'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    },
  },
  plugins: [],
};
