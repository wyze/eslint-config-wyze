module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'wyze/rules/flow',
  ],
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
  ],
  rules: {
    // We disable this so we can import types and non-types from the same file.
    // The `eslint-plugin-import` rule handles this for us as well.
    'no-duplicate-imports': 'off',
  },
}
