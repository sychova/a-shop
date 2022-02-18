module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  overrides: [
    {
      files: ['tests/**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
  },
}
