import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
      },
      sourceType: "script" // This tells ESLint functions are global
    },
    rules: {
      "no-unused-vars": "off", // Since your HTML calls these, the linter can't track them
      "no-undef": "off"        // Useful for older libraries like md5
    }
  },
  {
    ignores: ["**/md5.js"] // This completely skips the library that's causing errors
  }
];