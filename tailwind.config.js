/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Refined Premium Palette
                primary: {
                    DEFAULT: '#7F1D1D', // Sophisticated Deep Maroon
                    light: '#991B1B',
                    dark: '#450a0a',
                },
                accent: {
                    DEFAULT: '#0F172A', // Deep Navy/Slate (matches the Hero background)
                    light: '#1E293B',
                },
                gold: {
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#F59E0B', // Metallic Gold
                    600: '#D97706',
                },
                slate: {
                    950: '#020617', // The "Luxury Black" used in the Hero
                }
            },
            fontFamily: {
                // Essential for the premium "editorial" look
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'premium-gradient': 'linear-gradient(to right, #FFFFFF, #E2E8F0, #94A3B8)',
            }
        },
    },
    plugins: [],
}