/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'ts': '0.625rem',
        '3.5xl': '2rem',
      },
      lineHeight: {
        '4.1': '1.0625rem',
      },
      spacing: {
        '1.1': '0.3125rem',
        '8.1': '2.1875rem',
      },
      outlineOffset: {
        '3': '3px',
      },
      borderRadius: {
        'xs': '0.3125rem',
      },
      colors: {
        'alabaster': {
          '50': '#FAFAFA',
          '75': '#F5F5F5',
          '100': '#EFEFEF',
          '200': '#DCDCDC',
          '300': '#BDBDBD',
          '700': '#4F4F4F',
          '950': '#262626',
        },
        'biloba': {
          '50': '#F5F3FF',
          '100': '#ECE8FF',
          '200': '#DAD5FF',
          '300': '#B5A6FF',
          '700': '#5200FF',
          '900': '#3A03AF',
          '950': '#210077',
        },
        'tomato': {
          '600': '#FF0000',
        },
        'crusta': {
          '600': '#FF5C00',
        },
        'chateau': {
          '600': '#00AA58',
        },
      },
    },
  },
  plugins: [],
}

