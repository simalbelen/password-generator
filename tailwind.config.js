const { nextui } = require('@nextui-org/react')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffd8be',
                secondary: '#ffeedd',
                primaryNight: '#9381ff',
                secondaryNight: '#b8b8ff',
            },
            fontFamily: {
                sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
