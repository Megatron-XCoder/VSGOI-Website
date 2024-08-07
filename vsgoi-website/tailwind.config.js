/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'school-image': "url('background.jpg')",
        'signup-image': "url('SignupPageBackground.jpg')",
        'signin-image': "url('VSGOI Building.jpg')",
      }
    },
  },
  plugins: [],
}