import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldTeal: "#038C7F",
        softAqu: "#A9D9D0",
        warmSand: "#F2E7DC",
        onyxBlack: "#0D0D0D",
        coralRed: "#FF6B6B",
        pureWhite: "#FFFFFF",
        danger: "#FF6B6B",
        darkDanger: "#FF4F4F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
