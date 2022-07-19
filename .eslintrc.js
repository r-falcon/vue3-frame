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
    // 组件中没有根元素时报错
    'vue/no-multiple-template-root': 'off',
    // 'v-model' directives require no argument.
    'vue/no-v-model-argument': 'off'
  }
}
