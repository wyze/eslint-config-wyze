module.exports = {
  extends: [
    'eslint-config-airbnb',
    './base',
    './rules/react'
  ].map(require.resolve)
};
