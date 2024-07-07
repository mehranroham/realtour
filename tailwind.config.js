/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#070F2B',
        secondary: '#1B1A55',
        light: '#535C91',
        lighter: '#9290C3',
      },
      fontFamily: {
        'Dana-Medium': 'Dana-Medium',
        'Dana-Regular': 'Dana-Regular',
        'Dana-Bold': 'Dana-Bold',
        'Dana-Light': 'Dana-Light',
        'Morabba-Medium': 'Morabba-Medium',
        'Morabba-Bold': 'Morabba-Bold',
        'Morabba-Regular': 'Morabba-Regular',
        'Morabba-Light': 'Morabba-Light',
        'Poppins-Medium': 'Poppins-Medium',
        'Poppins-Regular': 'Poppins-Regular',
        'Poppins-Bold': 'Poppins-Bold',
        'Poppins-Light': 'Poppins-Light',
        'IRANSansX-Medium': 'IRANSansX-Medium',
        'IRANSansX-Regular': 'IRANSansX-Regular',
        'IRANSansX-Bold': 'IRANSansX-Bold',
        'IRANSansX-Light': 'IRANSansX-Light',
      },
    },
  },
  plugins: [],
};
