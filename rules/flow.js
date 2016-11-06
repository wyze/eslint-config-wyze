module.exports = {
  rules: {
    // same as comma-dangle from ESLint
    // https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
    'flowtype/delimiter-dangle': [ 2, 'always-multiline' ],
    // disallow duplicate keys in types
    // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': 2,
    // better to be specific, but only warn
    // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': 1,
    // only use commas in object types
    // https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
    'flowtype/object-type-delimiter': [ 2, 'comma' ],
    // type all the functions!
    // https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
    'flowtype/require-parameter-type': 2,
    // just warn about missing return types
    // https://github.com/gajus/eslint-plugin-flowtype#require-return-type
    'flowtype/require-return-type': 1,
    // warn when a file isn't typed
    // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 1,
    // ew, semicolons
    // https://github.com/gajus/eslint-plugin-flowtype#semi
    'flowtype/semi': [ 2, 'never' ],
    // enforce type names to begin with uppercase letter
    // https://github.com/gajus/eslint-plugin-flowtype#type-id-match
    'flowtype/type-id-match': [ 2, '^[A-Z].*$' ],
  },
}
