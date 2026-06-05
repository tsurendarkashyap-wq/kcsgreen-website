import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kcsGreen: '#187342',
        kcsOrange: '#f49a23',
        kcsDark: '#0f2f28'
      },
      boxShadow: { soft: '0 20px 60px rgba(15,47,40,.12)' }
    }
  },
  plugins: []
};
export default config;
