<template>
  <div>
    <h3>子组件</h3>
    <!-- 默认插槽 -->
    <slot>默认插槽</slot>
    <!-- 具名插槽 -->
    <slot name="nameSlot"></slot>
    <!-- 作用域插槽 -->
    <slot :data="user" name="propsSlot"></slot>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'falcon',
  age: 20
})
</script>
