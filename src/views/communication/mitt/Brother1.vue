<template>
  <p>brother1 发送事件</p>
  <el-button @click="handleClick">发送事件</el-button>
</template>

<script setup>
import mybus from './bus.js'
const handleClick = () => {
  mybus.emit('title', { title: 'hello world' })
  mybus.emit('user', { user: { name: 'falcon', age: 20 } })
}
</script>
