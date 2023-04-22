/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryDark: '#282c34',
      },
      fontFamily: {
        
      },
      borderRadius: {
        borderCustom: '0 700px 700px 0'
      }
    },
  },
  plugins: [],
}

