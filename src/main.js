import { createApp } from 'vue'
import App from './App.vue'
// element-plus全局导入
// import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';
// 路由
import router from './router'
// 状态库
import store from './store'

const app = createApp(App)

// 全局自定义指令的定义
// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus()
//   }
// })

// app.use(ElementPlus);
app.use(router)
app.use(store)
app.mount('#app')
