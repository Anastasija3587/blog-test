module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-console': 1,
    'linebreak-style': ['error', 'unix'],
    'jsx-a11y/no-onchange': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/destructuring-assignment': [2, 'always', { ignoreClassFields: true }],
  },
};
