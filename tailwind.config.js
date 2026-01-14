/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        softGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          "50%": { boxShadow: "0 10px 30px rgba(0,0,0,0.08)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both",
        "fade-in": "fadeIn 600ms ease-out both",
        "slide-in-left": "slideInLeft 800ms ease-out both",
        "slide-in-up": "slideInUp 700ms ease-out both",
        "scale-in": "scaleIn 600ms ease-out both",
        "soft-glow": "softGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

