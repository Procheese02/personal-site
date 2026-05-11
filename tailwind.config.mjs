/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090f',
        panel: '#0d111c',
        line: 'rgba(148, 163, 184, 0.18)',
        cyan: '#22d3ee',
        violet: '#a78bfa',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(34, 211, 238, 0.16)',
      },
    },
  },
  plugins: [],
};
