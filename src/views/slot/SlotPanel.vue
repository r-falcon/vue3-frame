<template>
  <h3>vue3插槽</h3>
  <Son>
    <template #default>
      <div>这是默认插槽的内容</div>
    </template>

    <template #nameSlot>
      <div>这是具名插槽的内容</div>
    </template>

    <template #propsSlot="scope">
      <div>name:{{ scope.data.name }},age:{{ scope.data.age }}</div>
    </template>
  </Son>
</template>

<script setup>
import Son from './Son.vue'
</script>
