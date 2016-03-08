module.exports = {
  extends: [
    'airbnb/base',
    'plugin:wyze/recommended',
    'wyze/rules/best-practices',
    'wyze/rules/es6',
    'wyze/rules/style'
  ],
  parser: 'babel-eslint',
  plugins: [
    'wyze'
  ]
};
