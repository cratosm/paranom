/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /bg-(red|green|blue)-(100|200|300|500)/,
        },
    ],
    plugins: [],
}

