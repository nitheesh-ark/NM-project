/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        quiztheme: {
          "primary": "#7C3AED",   // Purple (main)
          "secondary": "#F472B6", // Pink
          "accent": "#22D3EE",    // Cyan
          "neutral": "#1E293B",   // Slate
          "base-100": "#FFFFFF",  // Background
          "info": "#3B82F6",      // Blue
          "success": "#10B981",   // Green
          "warning": "#F59E0B",   // Yellow
          "error": "#EF4444",     // Red
        },
      },
      "light", // fallback theme
    ],
  },
  plugins: [require("daisyui")],
};
