/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#09C0F9',
          50: '#E5F8FF',
          100: '#CCF1FF',
          200: '#99E3FF',
          300: '#66D5FF',
          400: '#33C7FF',
          500: '#09C0F9',
          600: '#0EA5E9',
          700: '#0284C7',
          800: '#0369A1',
          900: '#0C4A6E',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
}
