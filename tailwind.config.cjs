/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4038DB",
                primaryDark: "#332dad",
                darkText: "#313132",
                lightText: "#717171",
                background: "#F5F3FF",
                lightBorder: "#DADADA",
            },
        },
    },
    plugins: [],
};

module.exports = config;
