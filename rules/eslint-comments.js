module.exports = {
  rules: {
    // requires a `eslint-enable` comment for every `eslint-disable` comment
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/disable-enable-pair.md
    'eslint-comments/disable-enable-pair': 'warn',
    // disallows duplicate `eslint-disable` comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-duplicate-disable.md
    'eslint-comments/no-duplicate-disable': 'error',
    // disallows `eslint-disable` comments without rule names
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md
    'eslint-comments/no-unlimited-disable': 'error',
    // disallows unused `eslint-disable` comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md
    'eslint-comments/no-unused-disable': 'error',
    // disallows unused `eslint-enable` comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-enable.md
    'eslint-comments/no-unused-enable': 'error',
  },
}
