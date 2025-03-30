import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{tsx,jsx,ts,js}",
    "./src/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}",
    "./listagens/**/*.{tsx,jsx,ts,js}", // Adicione este caminho se necessário
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
      },
    },
  },
  plugins: [],
};

export default config;
