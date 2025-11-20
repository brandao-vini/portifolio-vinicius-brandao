/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- ISSO É OBRIGATÓRIO PARA O SWITCH FUNCIONAR!
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or remove this file and use the default configuration in `src/`
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}