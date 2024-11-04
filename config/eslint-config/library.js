/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@edmaralencar/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}