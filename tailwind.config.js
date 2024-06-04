/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@grampro/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-light": "url('/hero_light.webp')",
        "hero-dark": "url('/hero_dark.webp')",
      },
    },
  },
  plugins: [],
};
