module.exports = {
  "env": {
      "browser": true,
  },
  "extends": ['airbnb-typescript'],
  "parserOptions": {
    project: './tsconfig.json',
  },
  "ignorePatterns": [
      ".eslintrc"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "max-len": [1, 120, 4],
    "import/prefer-default-export": 0,
  },
};
