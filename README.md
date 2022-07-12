# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 全部加载(element-plus)

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
```

## 按需自动加载

- 按需自动加载 UI 组件： npm i unplugin-vue-components -D
- 按需自动加载 api 组件：npm i -D unplugin-auto-import

```js
// vite.config.js
// ui组件按需加载；api组件库按需加载
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
});
```

## 依赖路径配置，【注】引用文件的时候一定要加后缀名

```js
// 配置依赖路径
const path = require('path');
export default defineConfig({
  // 配置路径名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'vites',
        replacement: path.resolve(__dirname, 'src/view'),
      },
    ],
  },
});

// 引用的时候
import HelloWorld from 'components/HelloWorld.vue';
```

## scss 预处理器,scss,less 预处理器直接安装使用，无需配置

- npm i sass -D

## 配置 vue-router

- npm i vue-router -D

```js
// router/index.js
import * as vueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routes,
});

export default router;
```

```vue
<!-- App.vue -->
<template>
  <router-view />
</template>
```

## Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范
