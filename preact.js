module.exports = {
  extends: [
    'wyze',
    'wyze/rules/preact',
  ],
  settings: {
    react: {
      createClass: 'h',
      pragma: 'preact',
      version: '6.0',
    },
  },
}
