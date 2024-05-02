module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  // endOfLine: 'auto',
  options:{
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      }
    ]
  }
};
