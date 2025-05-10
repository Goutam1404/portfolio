/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#1a1a1a",
        textLight: "#f4f4f5",
        accentStart: "#3b82f6", // Blue
        accentEnd: "#8b5cf6", // Violet
        glass: "rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        crystal: "linear-gradient(145deg, #0d0d0d, #1a1a1a)",
        "gradient-border": "linear-gradient(to right, #3b82f6, #8b5cf6)",
      },
      textColor: {
        gradient:
          "text-transparent bg-clip-text bg-gradient-to-r from-accentStart to-accentEnd",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
      },
      keyframes: {
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        bounceInSlow: {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "60%": {
            opacity: 1,
            transform: "translateX(-10px)",
          },
          "80%": {
            transform: "translateX(5px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveStars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-1000px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        float: "subtleFloat 3s ease-in-out infinite",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        moveStars: "moveStars 60s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        bounceInSlow: 'bounceInSlow 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
