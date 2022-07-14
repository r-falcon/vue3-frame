module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    // 报错：Component name "Home" should always be multi-word.
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
}
