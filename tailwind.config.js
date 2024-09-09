/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ['Lato', 'sans-serif',],
      'Josefin': ['Josefin Sans', 'sans-serif',],
    },
    extend: {
      colors: {
        beige: '#f5deb3',
        // Add other custom colors here
      },
    },
  },
  plugins: [
    
  ],
}


