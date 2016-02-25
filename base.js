module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './rules/best-practices',
    './rules/es6',
    './rules/style'
  ].map(require.resolve),
  parser: 'babel-eslint'
};
