module.exports = {
  presets: ["next/babel"],
  plugins: [
    "inline-react-svg",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@kfc": "./src/shared",
          "@ui": "./src/ui",
          "@scenes": "./src/scenes",
          "@constants": "./src/constants",
          "@legacy-components": "./components",
          "@legacy-state": "./state",
          "@legacy-utils": "./utils",
        },
      },
    ],
  ],
};
