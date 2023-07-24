/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "hsl(230, 35%, 7%)",
      white: "hsl(231, 77%, 90%)",
      "light-blue": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: "Barlow",
      "sans-cond": "Barlow Condensed",
      serif: "Bellefair",
    },
    fontSize: {
      900: "var(--fs-900)",
      800: "var(--fs-800)",
      700: "var(--fs-700)",
      600: "var(--fs-600)",
      500: "var(--fs-500)",
      400: "var(--fs-400)",
      300: "var(--fs-300)",
      200: "var(--fs-200)",
    },
    letterSpacing: {
      wide: "2.35",
      wider: "2.7px",
      widest: "4.75px",
    },
    extend: {},
  },
  plugins: [],
};
