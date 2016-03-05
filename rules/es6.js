module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'generators': true
    }
  },
  'plugins': [
    'wyze'
  ],
  'rules': {
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 0,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [2, 'never'],
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    // disabled in favor of `wyze/sort-imports`
    'sort-imports': 0
  }
};
