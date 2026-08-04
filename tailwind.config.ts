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
          DEFAULT: "#0a0b0d",
          soft: "#14161a",
          muted: "#1e2126",
        },
        paper: {
          DEFAULT: "#ffffff",
          soft: "#f7f8f9",
          muted: "#eef0f2",
        },
        heal: {
          50: "#eafff3",
          100: "#ccffe1",
          200: "#9bffc8",
          300: "#5cf4a8",
          400: "#2be186",
          500: "#0fc46e",
          600: "#08a35b",
          700: "#0a814c",
          800: "#0d653f",
          900: "#0c5236",
        },
        splash: {
          50: "#eaf4ff",
          100: "#cfe6ff",
          200: "#a3cfff",
          300: "#6fb1ff",
          400: "#428fff",
          500: "#226dff",
          600: "#154fed",
          700: "#123ec0",
          800: "#153798",
          900: "#16327a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "heal-splash": "linear-gradient(135deg, #0fc46e 0%, #226dff 100%)",
        "heal-splash-soft":
          "radial-gradient(120% 120% at 20% 10%, rgba(15,196,110,0.18) 0%, rgba(34,109,255,0.12) 45%, rgba(10,11,13,0) 75%)",
        "ink-fade": "linear-gradient(180deg, rgba(10,11,13,0) 0%, #0a0b0d 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.12)",
        "glow-heal": "0 0 40px rgba(15,196,110,0.35)",
        "glow-splash": "0 0 40px rgba(34,109,255,0.35)",
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
