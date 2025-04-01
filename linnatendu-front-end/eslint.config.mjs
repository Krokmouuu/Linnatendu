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
    // Vos règles personnalisées
    rules: {
      "react/no-unescaped-entities": "off", // Désactive la règle pour les apostrophes
      "@next/next/no-img-element": "off", // Désactive la règle pour les balises img
    },
  },
];

export default eslintConfig;
