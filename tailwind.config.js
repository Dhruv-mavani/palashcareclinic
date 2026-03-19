/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#991B1B', // Maroon
                accent: '#1E3A8A',  // Navy Blue
                secondary: '#D97706', // Gold
                main: '#1F2937',
                soft: '#F9FAFB',
            }
        },
    },
    plugins: [],
}