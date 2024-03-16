module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],

    "no-undef": "off",
		"no-shadow": "off",
		"no-restricted-syntax": "off",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-useless-constructor": "off",
    "no-empty-function": [
      "error",
      {
        allow: ["constructors", "methods", "asyncMethods"],
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["info", "warn", "error"],
      },
    ],
    "max-len": "off",

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
		"import/no-unresolved": "off",

		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
  },
};
