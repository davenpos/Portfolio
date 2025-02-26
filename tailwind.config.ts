import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        middle: "calc(50% - 6rem)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".hide-scrollbars": {
          "overflow-x": "auto",
          "overflow-y": "hidden",
          "white-space": "nowrap",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "touch-action": "pan-x",
          "&::-webkit-scrollbar": { display: "none" },
        },
      })
    }),
  ],
}

export default config