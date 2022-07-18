<template>
  <h3>
    通过ref获取指定的DOM元素或组件，结合defineExpose暴露出来的属性和方法实现通信
  </h3>
  <p>title is : {{ title }}</p>
  <Children ref="child" />
  <el-button @click="add">count++</el-button>
  <el-button @click="sub">count--</el-button>
  <el-button @click="receive">receive</el-button>
</template>

<script setup>
import { ref } from 'vue'
import Children from './Children.vue'

const child = ref(null)
const title = ref('')
const add = () => child.value.add()
const sub = () => child.value.sub()
const receive = () => (title.value = child.value.msg)
</script>
