module.exports = {
    env: {
      browser: false,
      es6: true,
      node: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
      'plugin:@typescript-eslint/recommended',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['jest'],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
  };
