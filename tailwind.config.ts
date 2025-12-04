import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#016a4e',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#c8daa9',
          foreground: '#016a4e'
        },
        accent: {
          DEFAULT: '#ec8579',
          foreground: '#ffffff'
        },
        background: '#e7efe1',
        surface: '#ffffff',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
