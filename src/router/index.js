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
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('vites/teleport')
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('vites/suspense')
  },
  {
    path: '/defineHooks',
    name: 'DefineHooks',
    component: () => import('vites/defineHooks')
  },
  {
    path: '/async',
    name: 'AsyncPanel',
    component: () => import('vites/async')
  },
  {
    path: '/slot',
    name: 'SlotPanel',
    component: () => import('vites/slot')
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('vites/directive')
  },
  {
    path: '/vmodel',
    name: 'Vmodel',
    component: () => import('vites/vmodel')
  },
  {
    path: '/vforvif',
    name: 'VforVif',
    component: () => import('vites/vforvif')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routes
})

export default router
