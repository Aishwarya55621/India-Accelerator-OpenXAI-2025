/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 🌈 Custom Colors for Earth Simulation Themes
      colors: {
        'earth-blue': '#1e40af',
        'toxic-green': '#16a34a',
        'pollution-red': '#dc2626',
        'ice-blue': '#0ea5e9',
        'desert-yellow': '#ca8a04',
      },

      // ✨ Custom Animations
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      // 🎥 Keyframes for Custom Effects
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },

      // ✍️ Font Family Extension
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // ✅ Now Tailwind `font-sans` uses Poppins
      },
    },
  },
  plugins: [],
}
