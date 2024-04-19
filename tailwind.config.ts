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
      },
    },
  },
  plugins: [],
} satisfies Config;
