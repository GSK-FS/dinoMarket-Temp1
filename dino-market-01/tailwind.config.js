/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      
      'phone': '640px',
      // => @media (min-width: 640px) {}

      'tablet': '1024px',
      // => @media (min-width: 1040px) {}

      'laptop': '1280px',
      // => @media (min-width: 1280px) {}

      'desktop': '1380px',
      // => @media (min-width: 1380px) {}
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
