module.exports = {
  /**
  * Override rules to support `eslint-plugin-jsx-a11y`@^3.0.0
  * until `eslint-config-airbnb` is updated.
  */
  rules: {
    // Enforce that anchors have content
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': [ 'error', {
      components: [ '' ],
    }],
    // disallow href "#"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
    'jsx-a11y/href-no-hash': [ 'error', {
      components: [ 'a' ],
    }],
    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': [ 'error', {
      components: [ 'label' ],
    }],
    // ensure <hX> tags have content and are not aria-hidden
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': [ 'error', {
      components: [ '' ],
    }],
  },
}
