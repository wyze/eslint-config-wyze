module.exports = {
  rules: {
    // same as comma-dangle from ESLint
    // https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
    'flowtype/delimiter-dangle': [ 'error', 'always-multiline' ],
    // disallow duplicate keys in types
    // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': 'error',
    // better to be specific, but only warn
    // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': 'warn',
    // only use commas in object types
    // https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
    'flowtype/object-type-delimiter': [ 'error', 'comma' ],
    // type all the functions!
    // https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
    'flowtype/require-parameter-type': 'error',
    // just warn about missing return types
    // https://github.com/gajus/eslint-plugin-flowtype#require-return-type
    'flowtype/require-return-type': 'warn',
    // warn when a file isn't typed
    // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'warn',
    // ew, semicolons
    // https://github.com/gajus/eslint-plugin-flowtype#semi
    'flowtype/semi': [ 'error', 'never' ],
    // enforce type names to begin with uppercase letter
    // https://github.com/gajus/eslint-plugin-flowtype#type-id-match
    'flowtype/type-id-match': [ 'error', '^[A-Z].*$' ],
  },
}
