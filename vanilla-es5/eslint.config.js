import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["./src/*.js", "**/*.js"], languageOptions: { 
      ecmaVersion: 5,
      sourceType: "commonjs" 
    },
    rules: {
      "no-var": "off",
      "prefer-const": "off",
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { 
      ecmaVersion: 5,
      globals: globals.browser 
    } 
  },
]);
