import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        chula: ["var(--chula-font)", ...fontFamily.sans],
      },
      colors: {
        lightPink: "#FFE6F0",
        pink: "#CD8EA6",
        gray: "#B0B0B0",
      },
    },
  },
  plugins: [],
} satisfies Config;
