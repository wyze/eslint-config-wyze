module.exports = {
  extends: [
    'airbnb/base',
    'plugin:wyze/recommended',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/style.js'
  ],
  parser: 'babel-eslint'
};
