/* eslint-disable */

module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
  ],
  root: true,
  ignorePatterns: ['dist', 'docker', 'node_modules', 'openshift', 'public', 'tmp', 'vite.config.ts', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sort-keys-fix',
    'typescript-sort-keys',
    'no-type-assertion',
    // HINT: prettier must be the last plugin to work
    'prettier',
  ],
  rules: {
    camelcase: 'warn',
    curly: 'error',
    'import/no-unused-modules': [
      'error',
      {
        missingExports: true,
        src: ['.'],
        unusedExports: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
          orderImportKind: 'desc',
        },
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-type-assertion/no-type-assertion': 'error',
    'prettier/prettier': 'error',
    // Required to fix sort-keys automatically, since this is not done by default.
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
