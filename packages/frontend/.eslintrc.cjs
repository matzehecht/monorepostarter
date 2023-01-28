/* eslint-disable */

module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
  ],
  plugins: [
    'jsx-a11y',
    'react-hooks',
    // HINT: prettier must be the last plugin to work
    'prettier',
  ],
  rules: {
    'react/display-name': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
