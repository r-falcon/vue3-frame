<template>
  <h3>孙组件，接受数据为，age:{{ age }}</h3>
  <el-button type="primary" @click="handleTrans"
    >传递"hello world"给父组件</el-button
  >
</template>

<script setup>
defineProps({
  age: {
    type: Number,
    default: () => 0
  }
})

const emit = defineEmits(['getValue'])
const handleTrans = () => emit('getValue', 'hello world')
</script>
