// doc: [Setup | Vetur](https://vuejs.github.io/vetur/guide/setup.html#advanced)
// [VS Code Remote Container で Veture 拡張機能を使おうとすると現れるエラー2つに対処しました – oki2a24](https://oki2a24.com/2021/04/29/vs-code-remote-container-veture-settings-error/)
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    // [Vetur error 2300 duplicate identifier '(missing)' ( Javascript, Typescript ) | howtofix.io](https://howtofix.io/vetur-error-2300-duplicate-identifier-missing-id730888)
    'vetur.experimental.templateInterpolationService': false
  },
  projects: [{
    globalComponents: [
      './front/src/components/**/*.vue'
    ],
    package: './front/package.json',
    root: './',
    // snippetFolder: './.vscode/vetur/snippets',
    tsconfig: './front/tsconfig.json',
  }],
}
