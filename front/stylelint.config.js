module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // [既存プロジェクトをStylelint v14にアップグレードするときに注意すべき点 – ブログの設置](https://flex-box.net/stylelint-v14/)
    'selector-class-pattern': null,
  },
}
