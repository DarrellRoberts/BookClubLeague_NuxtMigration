// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    rules: {
      eqeqeq: ["error", "always"],
      quotes: ["error", "single"],
      "eol-last": ["error", "always"],
      indent: 2,
      "no-extra-semi": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-redeclare": "error",
      "no-trailing-spaces": "error",
      "no-useless-escape": "error",
      "space-in-parens": "error",
      "vars-on-top": "error",
      "prefer-const": "error",
      "template-curly-spacing": "error",
      "quote-props": ["error", "as-needed"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "key-spacing": ["error", { mode: "strict" }],
      // 'html/indent': ['error', 2]
    },
  }
);
