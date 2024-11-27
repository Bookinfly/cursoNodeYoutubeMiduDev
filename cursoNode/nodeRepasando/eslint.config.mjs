import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "module" // Cambiar a "module" si usas import/export
    },
    rules: {
      // Añadimos reglas adicionales según lo que quieras lintar
      "no-unused-vars": "warn", // Detecta variables no utilizadas
      "no-undef": "warn", // Detecta variables no definidas
      "eqeqeq": "warn", // Advierte sobre el uso de == en lugar de ===
      "no-console": "warn", // Advierte sobre el uso de console.log
      "semi": ["warn", "always"], // Requiere punto y coma al final de las sentencias
      "quotes": ["warn", "single"], // Prefiere comillas simples para las cadenas
      // Se pueden añadir muchas más reglas según tus necesidades
    }
  },
  { 
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node } 
    } 
  },
  pluginJs.configs.recommended, // Utiliza las reglas recomendadas
];
