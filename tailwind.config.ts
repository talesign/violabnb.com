import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      pastel: {
        orange: "#F9F2E7",
        red: "#FCEBE6",
        green: "#EDF5E6",
        blue: "#E8F7F7",
        purple: "#FAF0F8",
        yellow: "#F7F4DF",
      },
      full: {
        "100": "#FA003F",
        "200": "#CF4D6F",
      },
      grayscale: {
        "50": "rgb(248, 248, 248)",
        "100": "rgb(240, 240, 240)",
        "200": "rgb(225, 225, 225)",
        "300": "rgb(205, 205, 205)",
        "400": "rgb(174, 174, 174)",
        "500": "rgb(145, 145, 145)",
        "600": "rgb(118, 118, 118)",
        "700": "rgb(94, 94, 94)",
        "800": "rgb(75, 75, 75)",
        "900": "rgb(61, 61, 61)",
        "950": "rgb(34, 34, 34)",
      },
      gray: {
        "50": "rgb(249, 248, 248)",
        "100": "rgb(242, 240, 239)",
        "200": "rgb(229, 224, 223)",
        "300": "rgb(212, 203, 202)",
        "400": "rgb(185, 171, 169)",
        "500": "rgb(160, 141, 138)",
        "600": "rgb(135, 113, 109)",
        "700": "rgb(108, 90, 87)",
        "800": "rgb(86, 72, 70)",
        "900": "rgb(70, 59, 57)",
        "950": "rgb(39, 33, 32)",
      },
    },
    extend: {
      backgroundImage: {
        home: "url('/images/test.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
