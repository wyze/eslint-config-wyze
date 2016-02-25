module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'always', {
      'objectsInArrays': false,
      'arraysInArrays': false
    }],
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': [2, 80, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],
    // require or disallow use of semicolons instead of ASI
    // I use Babel, it takes care of this for me
    'semi': [2, 'never'],
    // space around the keywords.
    // http://github.com/eslint/eslint/blob/master/docs/rules/keyword-spacing.md
    'keyword-spacing': [2, {
      'before': true,
      'after': true,
      'overrides': {
        'case': { 'after': true },
        'return': { 'after': true },
        'throw': { 'after': true }
      }
    }],
    // require or disallow spaces inside parentheses
    // disabled, because this rule is strange
    // TODO: write and implement a better rule
    'space-in-parens': 0
  }
};
