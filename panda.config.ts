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
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
