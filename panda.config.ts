import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    color: "gray.900",
    boxSizing: "border-box",
    scrollbarGutter: "always",
  },
  body: {
    width: "calc(100vw-16px)",
    lineHeight: 1.6,
  },
});

export default defineConfig({
  //presets
  presets: ["@pandacss/preset-panda"],

  //watch
  watch: true,
  jsxFramework: "react",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  //Global style
  globalCss,

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        sectionDefaultBg: {
          value: "#f9f9f9",
          description: "Color for section bg",
        },
        cardBody: {
          value: "#a3a3a3",
          description: "Color for icon card body",
        },
        cardIconSVG: {
          value: "#2b973d",
          description: "Color for svg icon",
        },
      },
    },
    extend: {
      breakpoints: {
        mobile: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
