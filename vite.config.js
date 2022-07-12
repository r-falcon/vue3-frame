import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ui组件按需加载；api组件库按需加载
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
// 配置依赖路径
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动按需导入
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    })
  ],
  server: {
    // 项目启动时，在浏览器自动打开
    // open: true,
    // host: '0.0.0.0',
    // port: 3000,
    // https: false, // 是否开启https
  },
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
        replacement: path.resolve(__dirname, 'src/views')
      }
    ]
  }
})
