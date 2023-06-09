/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '88': '22rem',
        '104': '26rem'
      },
      colors: {
        primaryDark: '#282c34'
      },
      fontFamily: {

      },
      borderRadius: {
        borderCustom: '0 700px 700px 0'
      },
    }
  },
  darkMode: 'class',
  plugins: [],
}

