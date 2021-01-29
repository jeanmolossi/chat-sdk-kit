module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      {
        extension: ['.ts', '.js'],
      },
    ],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],

    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
        newlinesBetween: 'never',
        groups: [
          '/^@nest/',
          'module',
          '/^@/application/',
          '/^@/infrastructure/',
          '/^@/core/',
          ['parent', 'sibling'],
          'index',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        extension: ['.ts', '.js'],
      },
    },
    typescript: {},
  },
};
