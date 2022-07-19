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
  },
  // 本地运行配置，反向代理配置
  server: {
    // 项目启动时，在浏览器自动打开
    // open: true,
    // host: '0.0.0.0',
    // port: 3000,
    // https: false, // 是否开启https
    cors: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888/api/', //要跨域访问的地址
        changeOrigin: true, //允许跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
