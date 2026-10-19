// tailwind.config.ts
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Deep black-zinc
        foreground: "#fafafa",
        primary: {
          DEFAULT: "#3b82f6", // Professional Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#27272a", // Zinc-800
        },
      },
    },
  },
  plugins: [],
};
export default config;