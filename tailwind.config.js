module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'body-dark': '#1C1C1C',
        'primary-green': '#62DB54',
        'primary-blue': '#09ACF5',
        'gray-dark': '#2D2D2D',
        'c-gray': {
          DEFAULT: '#C1C1C1',
          900: '#2D2D2D',
          800: '#1A1A1A',
          700: '#909090',
          600: '#00000034',
          500: '#0000002E',
          400: '#00000019',
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '12px',
      },
    },
    fontFamily: {
      'azeret': ['Azeret Mono'],
    },
    screens: {
      // 'ssm': '414px',
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1296px', // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}