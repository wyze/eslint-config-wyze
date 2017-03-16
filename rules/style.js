module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [ 'error', 'always' ],
    // allow/disallow an empty newline after var statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/newline-after-var.md
    'newline-after-var': [ 'error', 'always' ],
    // Require newline before return statement
    // https://github.com/eslint/eslint/tree/master/docs/rules/newline-before-return.md
    'newline-before-return': 'error',
    // disallow multiple empty lines and only one newline at the end
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multiple-empty-lines.md
    'no-multiple-empty-lines': [ 'error', { max: 2, maxBOF: 0, maxEOF: 1 } ],
    // require or disallow use of semicolons instead of ASI
    // I use Babel, it takes care of this for me
    semi: [ 'error', 'never' ],
    // require or disallow spaces inside parentheses
    // disabled, because this rule is strange
    // TODO: write and implement a better rule
    'space-in-parens': 'off',
  },
}
