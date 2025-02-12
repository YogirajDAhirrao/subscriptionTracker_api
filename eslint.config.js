import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Enable Node.js globals (includes `process`)
        ...globals.browser, // Keep browser globals if needed
      },
    },
  },
  pluginJs.configs.recommended,
];
