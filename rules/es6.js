module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'generators': true
    }
  },
  'plugins': [
    'import'
  ],
  'rules': {
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 2,
    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    'import/imports-first': [2, ''],
    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 2,
    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 2,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }],
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
