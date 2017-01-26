module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  // Use recommend ESLint config
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  // Add some rules of our own
  "rules": {
    "indent": ["error", 2], // Two spaces for indent
    "curly": ["error", "all"], // All require curly braces, even for one line bodies
    "no-template-curly-in-string": "error", // Guard against accidentally using quotes instead of backticks when writing template strings
    "array-callback-return": "error", // Enforce returning from array functions (map, filter, etc)
    "no-eval": "error",
    "no-param-reassign": "error", // Don't allow reassigning function param variables
    "strict": ["error", "global"], // Enforce 'use strict' statements. Use global because browserify/webpack will wrap each module in a function anyway
    "eol-last": ["error", "always"], // Enforce empty last line. See http://stackoverflow.com/a/729795/4887407
    "react/prop-types": "warn", // Only warn about missing prop type validation
    "react/display-name": "off" // We don't care about displayNames because the build step adds them
  },
  // Add some environments
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }
}
