require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-next-tick': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'style', 'script'],
    }],
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always'],
    camelcase: 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    indent: ['error', 2, { CallExpression: { arguments: 'first' }, SwitchCase: 1 }],
    'no-return-assign': ['error', 'except-parens'],
    eqeqeq: 'off',
  },
};
