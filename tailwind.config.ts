import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tech: {
          indigo: "#6366F1",
          blue: "#60a5fa",
          purple: "#a78bfa",
          cyan: "#22d3ee",
          teal: "#2dd4bf",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'tech-sm': '0 0 5px rgba(99, 102, 241, 0.2)',
        'tech-md': '0 0 10px rgba(99, 102, 241, 0.3)',
        'tech-lg': '0 0 20px rgba(99, 102, 241, 0.4)',
        'tech-inner': 'inset 0 0 5px rgba(99, 102, 241, 0.2)',
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #6366F1, #60a5fa)',
        'tech-radial': 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)',
        'tech-glow': 'linear-gradient(90deg, rgba(99, 102, 241, 0), rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-tech": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        "pulse-slow": {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.3' },
        },
        "glow-tech": {
          '0%, 100%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' },
        },
        "float-tech": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-tech": "pulse-tech 3s infinite ease-in-out",
        "pulse-slow": "pulse-slow 5s infinite ease-in-out",
        "glow-tech": "glow-tech 3s infinite ease-in-out",
        "float-tech": "float-tech 6s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
