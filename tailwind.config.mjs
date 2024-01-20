/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0fdf5',
          '100': '#dcfce8',
          '200': '#bbf7d1',
          '300': '#86efad',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803c',
          '800': '#166533',
          '900': '#14532b',
          '950': '#052e14',
        },
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#22c55e',    // Changed to your brand's primary color
          secondary: '#22c55e',  // Changed to your brand's secondary color
          accent: '#22c55e',     // Changed to your brand's accent color
          neutral: '#333333',    // Remains the same
          'base-100': '#FFFFFF', // Remains the same
          info: '#22c55e',       // Remains the same
          success: '#00fabe',    // Remains the same
          warning: '#eab308',    // Remains the same
          error: '#ef4444'       // Remains the same
        }
      }
    ]
  },
	plugins: [require("daisyui")],
}
