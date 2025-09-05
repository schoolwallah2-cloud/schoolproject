/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'premium': {
          'navy': '#1a1f36',
          'gold': '#d4af37',
          'cream': '#faf8f5',
          'charcoal': '#2c2c2c',
          'silver': '#8b9dc3',
          'accent': '#c9a96e',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #1a1f36 0%, #2c2c2c 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #c9a96e 100%)',
      }
    },
  },
  plugins: [],
};
