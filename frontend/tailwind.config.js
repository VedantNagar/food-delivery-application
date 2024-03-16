/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "fudo-red": "#EB5757",
                "fudo-red-light": "#f0eded",
            },
            fontFamily: {
                poppins: ["Poppins"],
            },
            width: {
                customVW: "85vw",
            },
            screens: {
                iPhone11: "375px",
            },
        },
    },
    plugins: [],
};
