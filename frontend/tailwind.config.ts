import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#09090B",
        card: "#18181B",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FAFAFA",
        },
        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
        foreground: "#FAFAFA",
        muted: {
          DEFAULT: "#A1A1AA",
          foreground: "#A1A1AA",
        },
        border: "rgba(250, 250, 250, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0,0,0,0.4)",
        glow: "0 0 40px -8px rgba(99, 102, 241, 0.45)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(250,250,250,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,250,0.04) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
