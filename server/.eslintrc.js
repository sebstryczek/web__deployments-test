module.exports = {
    "env": {
        "node": true,
    },
    "extends": ['airbnb-typescript'],
    "parserOptions": {
        "project": "./tsconfig.json",
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "ignorePatterns": [
        ".eslintrc"
    ],
};
