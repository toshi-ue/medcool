module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: [],
  // add your custom rules here
  rules: {
    // TODO: 設定を見直す
    // https://forum.vuejs.org/t/do-i-need-to-give-a-multiword-component-name-if-im-using-single-page-components/120419
    'vue/multi-word-component-names': 'off',
    // '@typescript-eslint/explicit-function-return-type': ['error'],
    // 'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 'space-before-function-paren': ['error']
    // [既存のNuxtプロジェクトにESLintを導入する方法 | tns-blog](https://tns-blog.com/312)
    'space-before-function-paren': 0,
    // https://www.codegrepper.com/code-examples/whatever/ESLint%3A+Cannot+read+property+%27loc%27+of+undefined+Occurred+while
    '@typescript-eslint/indent': ['error', 2]
  }
}
