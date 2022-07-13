import * as vueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('vites/Home.vue')
  },
  {
    path: '/variable',
    name: 'Variable',
    component: () => import('vites/variable')
  },
  {
    path: '/lifecircle',
    name: 'LifeCircle',
    component: () => import('vites/lifecircle')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('vites/watch')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routes
})

export default router
