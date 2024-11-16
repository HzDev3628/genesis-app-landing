import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1440px',
        xl: '1120px',
      },
    },
    screens: {
      tablet: '725px',
      "small-laptop": '1000px',
      laptop: '1440px',
    },
    borderRadius: {
      20: '20px',
      16: '16px',
      12: '12px',
      8: '8px',
      4: '4px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'grey-100': 'var(--grey-100)',
        'grey-500': 'var(--grey-500)',
        'grey-600': 'var(--grey-600)',
        50: 'var(--50)',
        100: 'var(--100)',
        200: 'var(--200)',
        300: 'var(--300)',
        400: 'var(--400)',
        500: 'var(--500)',
      },
      animation: {
        cloud: 'cloud 64s ease-in-out infinite',
      },
      keyframes: {
        cloud: {
          '0%, 100%': {
            transform: 'translateX(0px)',
          },
          '50%': {
            transform: 'translateX(500px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
