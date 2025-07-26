import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C0392B', // NBP 메인 레드
        'secondary': '#34495E', // 다크 블루 그레이  
        'accent': '#CC8800', // 골드 오렌지
        'cta': '#FF6600', // 강렬한 오렌지 (CTA)
        'text-primary': '#333333',
        'text-secondary': '#999999',
        'background': '#F8F8F8',
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        emerald: colors.emerald,
        teal: colors.teal,
      },
      fontFamily: {
        heading: ['Poppins', 'Outfit', 'sans-serif'],
        body: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
