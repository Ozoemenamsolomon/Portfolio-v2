import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soo-blue': '#3f73a7',
        'soo-dark-blue': '#233e63',
        'soo-light-blue': '#5a8fc2',
        'btn-colour': '#ffffff',
      },
      backgroundImage: {
        'soo-gradient': 'linear-gradient(135deg, #3f73a7 0%, #233e63 100%)',
      },
    },
  },
  plugins: [],
}
export default config
