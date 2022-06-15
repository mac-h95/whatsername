module.exports = {
  content: ['./pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fff8fe',
          200: '#fff2fd',
          300: '#ffebfd',
          400: '#ffe5fc',
          500: '#ffdefb',
          600: '#ccb2c9',
          700: '#998597',
          800: '#665964',
          900: '#332c32'
        },
        foreground: {
          100: '#ffffff',
          200: '#fefefe',
          300: '#fefefe',
          400: '#fdfdfd',
          500: '#fdfdfd',
          600: '#cacaca',
          700: '#989898',
          800: '#656565',
          900: '#333333'
        },
        background: {
          100: '#d2d1d1',
          200: '#a4a3a4',
          300: '#777476',
          400: '#494649',
          500: '#1c181b',
          600: '#161316',
          700: '#110e10',
          800: '#0b0a0b',
          900: '#060505'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
