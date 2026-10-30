module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  extends: ["eslint:recommended"],
  ignorePatterns: ["node_modules/", ".next/", "build-tmp/", "next-env.d.ts"],
  overrides: [{ files: ["*.ts", "*.tsx"], rules: { "no-unused-vars": "off" } }],
};
