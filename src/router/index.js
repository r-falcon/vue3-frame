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
