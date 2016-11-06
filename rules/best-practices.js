module.exports = {
  rules: {
    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'error',
    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': [ 'error',
      'callback',
      'cb',
      'data',
      'e',
      'err',
    ],
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',
  },
}
