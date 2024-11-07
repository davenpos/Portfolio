const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'middle': 'calc(50% - 6rem)'
      }
    },
  },
  plugins: [
    plugin(function({addComponents}) {
      addComponents({
        '.hide-scrollbars': {
          'overflow-x': 'auto',
          'overflow-y': 'hidden',
          'white-space': 'nowrap',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'touch-action': 'pan-x',
          '&::-webkit-scrollbar': { 'display': 'none' }
        }
      })
    })
  ],
}

