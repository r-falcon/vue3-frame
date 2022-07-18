<template>
  <h3>子组件, name is:{{ name }}, age is:{{ age }}, count is:{{ count }}</h3>
  <el-button @click="add">count++</el-button>
  <el-button @click="sub">count--</el-button>
</template>

<script setup>
// 无setup
// export default {
//   props: {
//     name: {
//       type: String,
//       default: () => "",
//     },
//     age: {
//       type: Number,
//       default: () => 0,
//     },
//   },
// };

// 有setup
defineProps({
  name: {
    type: String,
    default: () => ''
  },
  age: {
    type: Number,
    default: () => 0
  },
  count: {
    type: Number,
    default: () => 0
  }
})

const emits = defineEmits(['add', 'sub'])
const add = () => emits('add')
const sub = () => emits('sub')
</script>
