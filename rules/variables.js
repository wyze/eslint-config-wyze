module.exports = {
  rules: {
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',
    // disallow use of variables before they are defined
    'no-use-before-define': [ 'error', 'nofunc' ],
  },
}
