import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#161616",
          soft: "#212121",
          muted: "#2c2c2c",
        },
        cream: {
          DEFAULT: "#f8f0ea",
          soft: "#fbf6f2",
          muted: "#efe1d5",
        },
        orange: {
          50: "#fff1ea",
          100: "#ffdece",
          200: "#ffb894",
          300: "#ff8f5c",
          400: "#ff6f33",
          500: "#ff5011",
          600: "#e8420a",
          700: "#c13407",
          800: "#9a2a08",
          900: "#7a230b",
        },
        violet: {
          50: "#f4f1fd",
          100: "#e7e0fb",
          200: "#d3c5f6",
          300: "#b7a0ef",
          400: "#a794d6",
          500: "#8a6ee6",
          600: "#7f5cf9",
          700: "#6a42dc",
          800: "#5635b0",
          900: "#452c8c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "splash-gradient": "linear-gradient(135deg, #ff5011 0%, #7f5cf9 100%)",
        "splash-gradient-soft":
          "radial-gradient(120% 120% at 20% 10%, rgba(255,80,17,0.16) 0%, rgba(127,92,249,0.12) 45%, rgba(248,240,234,0) 75%)",
        "ink-fade": "linear-gradient(180deg, rgba(22,22,22,0) 0%, #161616 100%)",
        "cream-fade": "linear-gradient(180deg, rgba(248,240,234,0) 0%, #f8f0ea 100%)",
        "pattern-blobs": "url('/brand/pattern-blobs.png')",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(22,16,10,0.12)",
        "glow-orange": "0 0 40px rgba(255,80,17,0.35)",
        "glow-violet": "0 0 40px rgba(127,92,249,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        ripple: "ripple 3s ease-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
