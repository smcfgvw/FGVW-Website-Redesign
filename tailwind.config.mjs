/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f4f9f0',
          100: '#e5f1db',
          200: '#cce3b8',
          300: '#a8cf88',
          400: '#80b85e',
          500: '#5d9645',
          600: '#4a7c34',
          700: '#3a6228',
          800: '#2a461c',
          900: '#1a2e12',
        },
        earth: {
          50:  '#fbf8f1',
          100: '#f5edd8',
          200: '#ecdbb0',
          300: '#dfc07e',
          400: '#cfa55a',
          500: '#b08840',
          600: '#966e32',
          700: '#785426',
          800: '#573c1c',
          900: '#352410',
        },
        cream: {
          50:  '#fefcf8',
          100: '#faf8f4',
          200: '#f5f0e8',
          300: '#ede4d2',
          400: '#e0d0b8',
          500: '#ccba98',
        },
        // Bluebell / lilac — after Hyacinthoides non-scripta, the woodland bluebell
        bluebell: {
          50:  '#f6f3fb',
          100: '#ede8f7',
          200: '#d8ceee',
          300: '#b9a9e2',
          400: '#9880d0',
          500: '#7d62bc',   // close to actual bluebell flower
          600: '#6549a6',
          700: '#513889',
          800: '#3c2868',
          900: '#261a46',
        },
        // Green Fair accent palette
        fair: {
          50:  '#f7fcea',
          100: '#edf6cc',
          200: '#d6eb96',
          300: '#b5d85a',
          400: '#93c226',
          500: '#6ea016',
          600: '#557f10',
          700: '#3f6010',
          800: '#2d4510',
          900: '#1e2e0a',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Lora"', 'Georgia', 'serif'],
        sans:    ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1208',
            fontFamily: '"Lora", Georgia, serif',
            h1: { fontFamily: '"Cormorant Garamond", Georgia, serif' },
            h2: { fontFamily: '"Cormorant Garamond", Georgia, serif' },
            h3: { fontFamily: '"Cormorant Garamond", Georgia, serif' },
            a: { color: '#3a6a2c' },
          },
        },
      },
    },
  },
  plugins: [],
};
