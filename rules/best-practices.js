module.exports = {
  'rules': {
    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': [2,
      'callback',
      'cb',
      'data',
      'e',
      'err'
    ],
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2
  }
};
