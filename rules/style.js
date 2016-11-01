module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [ 2, 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': [ 2, 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    // allow/disallow an empty newline after var statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/newline-after-var.md
    'newline-after-var': [ 2, 'always' ],
    // Require newline before return statement
    // https://github.com/eslint/eslint/tree/master/docs/rules/newline-before-return.md
    'newline-before-return': 2,
    // disallow multiple empty lines and only one newline at the end
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multiple-empty-lines.md
    'no-multiple-empty-lines': [ 2, { max: 2, maxBOF: 0, maxEOF: 1 }],
    // require or disallow use of semicolons instead of ASI
    // I use Babel, it takes care of this for me
    semi: [ 2, 'never' ],
    // require or disallow spaces inside parentheses
    // disabled, because this rule is strange
    // TODO: write and implement a better rule
    'space-in-parens': 0,
  },
}
