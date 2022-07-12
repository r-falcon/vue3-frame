import { createApp } from 'vue';
import App from './App.vue';
// element-plus全局导入
// import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';
// 路由
import router from './router';

const app = createApp(App);
// app.use(ElementPlus);
app.use(router);
app.mount('#app');
