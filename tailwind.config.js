/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF6B00',
                    'orange-hover': '#E65E00',
                },
                base: {
                    charcoal: '#121212',
                    'charcoal-light': '#1E1E1E',
                    white: '#ffffff',
                    'off-white': '#F4F4F4',
                    cream: '#F9F9F7',
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
                solaiman: ['SolaimanLipi', 'sans-serif'],
            },
            spacing: {
                container: '1200px',
                section: '6rem',
            },
            borderRadius: {
                card: '16px',
            }
        },
    },
    plugins: [],
}
