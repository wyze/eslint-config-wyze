module.exports = {
  rules: {
    // require parens in arrow function arguments
    'arrow-parens': [ 'error', 'as-needed' ],
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [ 'error', 'never' ],
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    // disabled in favor of `wyze/sort-imports`
    'sort-imports': 'off',
  },
}
