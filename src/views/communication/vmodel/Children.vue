<template>
  <p>title is : {{ props.title }}</p>
  <el-button @click="handleChange">change title</el-button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  }
})

// 【注】update:*是Vue中的固定写法，*表示props中的某个属性名。
const emit = defineEmits(['update:title'])
const handleChange = () => emit('update:title', props.title + ' M')
</script>
