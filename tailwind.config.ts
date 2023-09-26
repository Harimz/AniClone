import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "blue-lg": "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
      },
      colors: {
        darkBg: "#0B1622",
        darkPurple: "#2B2D42",
        gray: {
          50: "#EDF1F5B3",
          100: "#EDF1F5",
          125: "#ecf6fe",
          150: "#ADC0D2",
          200: "#C9D7E3",
          300: "#BCBEDC",
          400: "#A0B1C5",
          425: "#7C899A",
          450: "#647380",
          500: "#516170",
          600: "#748899",
        },
        blue: {
          100: "#ACD5F2",
          150: "#3DB4F2",
          175: "#02A9FF",
          200: "#3577FF",
          300: "#152232",
          400: "#151F2E",
          500: "#0a1625",
          600: "#11161D",
          700: "#0B1622B3",
        },
        red: {
          100: "#FEF0F0",
          200: "#F56C6C",
          300: "#EC294B",
        },
        lightGreen: {
          100: "#68D639",
        },
        purple: {
          100: "#9256F3",
        },
        pink: {
          100: "#F779A4",
          200: "#E85D75",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
