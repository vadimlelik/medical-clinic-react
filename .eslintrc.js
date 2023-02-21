module.exports = {
  env: {
    browser: true, es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'], ecmaVersion: 'latest', sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'

  }
}
