# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 全部加载(element-plus)

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

## 按需自动加载

- 按需自动加载 UI 组件： npm i unplugin-vue-components -D
- 按需自动加载 api 组件：npm i -D unplugin-auto-import

```js
// vite.config.js
// ui组件按需加载；api组件库按需加载
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    })
  ]
})
```

## 依赖路径配置，【注】引用文件的时候一定要加后缀名

```js
// 配置依赖路径
const path = require('path')
export default defineConfig({
  // 配置路径名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'vites',
        replacement: path.resolve(__dirname, 'src/view')
      }
    ]
  }
})

// 引用的时候
import HelloWorld from 'components/HelloWorld.vue'
```

## scss 预处理器,scss,less 预处理器直接安装使用，无需配置

- npm i sass -D

## 配置 vue-router

- npm i vue-router -D

```js
// router/index.js
import * as vueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home.vue')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routes
})

export default router
```

```vue
<!-- App.vue -->
<template>
  <router-view />
</template>
```

## Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范

### 代码检查工具-Eslint

- `npm i eslint -D`
- `npx eslint --init`
  To check syntax and find problems
  JavaScript modules (import/export)
  ...

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
```

### 代码风格工具-Prettier

- `npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

```js
// 修改 .eslintrc.js
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
    'vue/multi-word-component-names': 'off'
  }
}
```

```js
// 创建 .prettierrc
{
  "semi": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

### Git 提交规范

#### 安装 husky

- `npm i husky --save-dev`

```json
// package.json中添加脚本
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

- 执行脚本 prepare 命令自动创建.husky 目录，并指定该目录为 git hooks 所在目录
- `npx husky add .husky/pre-commit "npm run lint"`

```
<!-- pre-commit脚本 -->
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

- `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

```
<!-- commit-msg脚本 -->
#!/bin/sh

"$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

#### 安装 lint-stated

- `npm i lint-staged --save-dev`

```json
// package.json 文件中配置 lint 命令
{
  "scripts": {
    "lint": "lint-staged"
  }
}
```

- 在 package.json 或者 lint-staged.config.js 文件中配置

```json
// package.json
"lint-staged": {
    "src/**/*.{js,vue}": ["prettier --write","esslint --cache --fix","git add"]
}
```

```js
// lint-staged.config.js
"use strict";
module.exports = {
    ignore: ["package-lock.json", "CHANGELOG.md"],
    linters: {
        "*.ts": ["prettier --write", "eslint --fix", "git add"],
        "*.js": ["prettier --write", "eslint --cache --fix", "git add"],
        "*.vue": ["prettier --write", "eslint --cache --fix", "git add"],
        "*.{json,md,yml,css}": ["prettier --write", "git add"]
}
```

#### 定制提交规范

```js
npm install --save-dev @commitlint/config-conventional @commitlint/cli

// 生成配置文件commitlint.config.js，当然也可以是 .commitlintrc.js
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

```js
// commitlint.config.js文件配置
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      /**
       * upd：更新某功能（不是 feat, 不是 fix）
       * feat：新功能（feature）
       * fix：修补bug
       * docs：文档（documentation）
       * style： 格式（不影响代码运行的变动）
       * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
       * test：增加测试
       * chore：构建过程或辅助工具的变动
       */
      ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
```

- git 提交进行校验配置完成
