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
      sun: "#ffeb3b",
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
      DM: ["DM Sans"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: {
        "85vh": "calc(100vh - 15vh)",
        "90vh": "calc(100vh - 10vh)",
      },
      boxShadow: {
        custom: "0px 0px 16px rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      },
    },
  },
  plugins: [],
};
