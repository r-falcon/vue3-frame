<template>
  <h3>
    在异步加载请求网络数据的时候，使用suspense组件，可以很好的实现loading效果
  </h3>
  <p>#default,初始化模板组件；#fallback，异步请求中处理的UI</p>

  <Suspense>
    <template #default>
      <SyncApi />
    </template>
    <template #fallback>
      <h3 style="color: blue">数组加载中...</h3>
    </template>
  </Suspense>
</template>

<script setup>
import SyncApi from './SyncApi.vue'
</script>
