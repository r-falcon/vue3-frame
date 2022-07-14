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
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('vites/computed')
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('vites/setup')
  },
  {
    path: '/fragment',
    name: 'Fragment',
    component: () => import('vites/fragment')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routes
})

export default router
