/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // TODO: Add comprenhensive color structure (primary & secondary). Example below
        // primary: '#ff3366',
        // secondary: {
        //   100: '#f0f0f0',
        //   200: '#d9d9d9',
        //   300: '#b3b3b3',
        // Add your custom colors here
        'dark-blue': '#0C2D42',
        'blue': '#178BC8',
        'dark-grey':'#413D3D',
        'grey': '#9E9C98',
        'light-grey':'#EEEEEE',
        'light-fucsia':'#AD62D1',
        },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}
