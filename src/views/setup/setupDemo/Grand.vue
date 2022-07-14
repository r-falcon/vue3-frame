<template>
  <div>
    <h2>孙接受</h2>
    <p>age : {{ age }}</p>
    <el-button type="primary" @click="handleChange">age++</el-button>
  </div>
</template>

<script setup>
defineProps({
  age: {
    type: Number,
    default: () => 0
  }
})
const emits = defineEmits(['setAge'])

const handleChange = () => {
  emits('setAge')
}
</script>
