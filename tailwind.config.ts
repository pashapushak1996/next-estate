import type { Config } from 'tailwindcss';

const generateSafelist = ()=>{
  const colors = ['white','yellow-400','red-500','sky-500','red-500','gray-800'];

  const classList:string[] = [];

  colors.forEach(color=>{
    classList.push(`fill-${color}`);
    classList.push(`hover:fill-${color}`);
  })

  return classList;
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist:generateSafelist(),
  plugins: [],
}
export default config
