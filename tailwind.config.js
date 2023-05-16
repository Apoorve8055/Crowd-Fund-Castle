/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      light: {
        backgroundColor: "#fff",
        cardBgColor: "#f9f9fa",
        primaryTextColor: "#333",
        secondaryTextColor: "#666",
      },
      dark: {
        backgroundColor: "#13131a",
        cardBgColor: "#1c1c24",
        primaryTextColor: "#fff",
        secondaryTextColor: "#808191",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
