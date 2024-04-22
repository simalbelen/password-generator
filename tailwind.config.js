const { nextui } = require('@nextui-org/react')

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
                secondaryNight: 'b8b8ff',
            },
            backgroundImage: {
                background_menu:
                    "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/background_img.avif')",
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
