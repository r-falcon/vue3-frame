<template>
  <div>
    <h3>vue3中的异步组件</h3>
    <AsyncDemo />
    <AnotherAsyncDemo />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const time = (t, callback = () => {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve()
    }, t)
  })
}

// 无配置的异步组件加载
const AsyncDemo = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    ;(async function () {
      try {
        await time(2000)
        const res = await import('./NoSettingDemo.vue')
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })()
  })
})

// 有配置的异步组件加载
const AnotherAsyncDemo = defineAsyncComponent({
  loader: () => {
    return new Promise(resolve => {
      ;(async function () {
        await time(3000)
        const res = await import('./SettingDemo.vue')
        resolve(res)
      })()
    })
  },
  loadingComponent: import('./loadingComponent.vue'),
  errorComponent: import('./errorComponent.vue'),
  delay: 0,
  timeout: 5000
})
</script>
