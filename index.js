module.exports = {
  extends: [
    // Explicitly not load `airbnb/rules/react-a11y` until it uses
    // eslint-plugin-jsx-a11y@^3.0.0
    'airbnb-base',
    'airbnb-base/rules/strict',
    'airbnb/rules/react',
    'wyze/base',
    'wyze/rules/react',
    'wyze/rules/jsx-a11y',
  ],
}
