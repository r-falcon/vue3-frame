<template>
  <h3>
    父组件传值，子组件通过props接受，想要改变数值，子组件通过emit调用父组件中的方法
  </h3>
  <Children :count="count" :name="name" :age="age" @add="add" @sub="sub" />
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import Children from './Children.vue'

const count = ref(0)
const user = reactive({
  name: 'falcon',
  age: 20
})
const add = () => count.value++
const sub = () => count.value--
const { name, age } = toRefs(user)
</script>
