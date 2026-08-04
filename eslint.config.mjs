import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // French copy uses many natural apostrophes (l'appel, d'urgence, s'allume, etc.)
      // that JSX would otherwise flag. Disable the rule since the text is safe.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
