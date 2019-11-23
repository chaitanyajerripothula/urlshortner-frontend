module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    'airbnb',
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier"
  ],
  rules: {
    // "prettier/prettier": ["error"],
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"],
    "no-underscore-dangle":["off"],
    "react/no-string-refs":["off"],
    "react/prop-types":["off"],
    "react/destructuring-assignment": [0, "always"],
    "import/prefer-default-export":["off"]
  },
};
