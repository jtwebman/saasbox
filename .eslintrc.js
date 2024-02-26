module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2023: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
  },
  rules: {
    'no-console': 'error',
  },
};
