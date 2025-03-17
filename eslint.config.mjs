import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginNext from "eslint-plugin-next";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1) Base config for JS/TS files
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      // Auto-detect React version
      react: {
        version: "detect",
      },
    },
  },

  // 2) ESLint’s recommended config
  pluginJs.configs.recommended,

  // 3) React plugin (flat config version)
  pluginReact.configs.flat.recommended,

  // 4) Next.js recommended + core-web-vitals
  pluginNext.configs.recommended,
  pluginNext.configs["core-web-vitals"],
];

