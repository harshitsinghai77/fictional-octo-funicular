module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "575px" },
        sm: { min: "575px", max: "767px" },
        md: { min: "767px", max: "1023px" },
        lg: { min: "1023px", max: "1279px" },
        xl: { min: "1279px", max: "1535px" },
        "2xl": { min: "1536px" },
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
