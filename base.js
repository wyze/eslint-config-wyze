module.exports = {
  extends: [
    'airbnb/base',
    'plugin:wyze/recommended',
    'wyze/rules/best-practices',
    'wyze/rules/es6',
    'wyze/rules/import',
    'wyze/rules/legacy',
    'wyze/rules/style',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    'import',
    'wyze',
  ],
}
