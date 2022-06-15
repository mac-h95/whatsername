module.exports = {
  content: ['./pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#FFDEFB',
        foreground: '#FDFDFD',
        background: '#1C181B'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
