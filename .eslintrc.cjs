module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: ["node_modules/", ".next/", "build-tmp/", "next-env.d.ts"],
  rules: {
    // TypeScript handles unused variable checking; ESLint rule is redundant and noisy.
    "no-unused-vars": "off",
    // The new JSX transform (React 17+) does not require React in scope for JSX.
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // TypeScript already enforces no-unused-vars via strict mode.
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
