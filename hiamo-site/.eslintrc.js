module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `airbnb`,
  globals: {
    document: false,
    expect: false,
    test: false
  },
  rules: {
    'react/forbid-prop-types': [error, { forbid: [any] }],
    'react/require-default-props': [error, { ignoreFunctionalComponents: true }],
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': off,
    'no-unused-expressions': off,
    'babel/no-unused-expressions': error,
    'global-require': off,
    'no-console': off,
    'import/no-extraneous-dependencies': off,
    'import/extensions': off,
    'import/no-unresolved': off,
    'jsx-a11y/href-no-hash': off,
    'jsx-a11y/img-has-alt': off,
    'comma-dangle': off,
    'no-underscore-dangle': [error, { allow: [_root] }],
    'import/prefer-default-export': off,
    'promise/prefer-await-to-then': error,
    'promise/prefer-await-to-callbacks': error,
    'arrow-parens': [error, as-needed, { requireForBlockBody: true }],
    'react/jsx-props-no-spreading': [error, { html: ignore }]
  },
  env: {
    browser: true
  }
}