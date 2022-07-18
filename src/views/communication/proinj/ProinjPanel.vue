<template>
  <h3>provide/inject,祖先向下级传递参数，无论层级多深，都可以传递</h3>
  <Children />
</template>

<script setup>
import { reactive, provide } from 'vue'
import Children from './Children.vue'

const user = reactive({
  name: 'falcon',
  age: 20
})
provide('user', user)
</script>
