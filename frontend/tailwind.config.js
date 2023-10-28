/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                joti: ["Joti One", "cursive"],
                jost: ["Jost", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
