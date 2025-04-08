/** @type {import('tailwindcss').Config} */
import Form from "@tailwindcss/forms";
import Typography from "@tailwindcss/typography";
module.exports= {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [Form, Typography],
};
