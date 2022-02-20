module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [],
  // add your custom rules here
  rules: {
    // TODO: 設定を見直す
    // https://forum.vuejs.org/t/do-i-need-to-give-a-multiword-component-name-if-im-using-single-page-components/120419
    'vue/multi-word-component-names': 'off',
    // 'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 'space-before-function-paren': ['error']
    // [既存のNuxtプロジェクトにESLintを導入する方法 | tns-blog](https://tns-blog.com/312)
    'space-before-function-paren': 0,
    // 'no-unused-vars': 'warn',
    'no-console': 'off',
  },
}
