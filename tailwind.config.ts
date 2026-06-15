import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        kcsDark: '#10231f',
        kcsGreen: '#0f7a3b',
        kcsOrange: '#f6a21a',
      },

      boxShadow: {
        soft: '0 20px 60px rgba(15,47,40,.12)',
      },
    },
  },

  plugins: [],
};

export default config;
