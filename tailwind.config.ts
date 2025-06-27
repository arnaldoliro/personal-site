import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)'],
      },
    },
  },
}