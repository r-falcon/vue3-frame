<template>
  <p>brother2 接受事件</p>
  <p>title is : {{ title }}</p>
  <p>user is , name:{{ name }}, age:{{ age }}</p>
</template>

<script setup>
import mybus from './bus.js'
import { ref, reactive, toRefs } from 'vue'

const title = ref('')
const user = reactive({
  name: '',
  age: null
})
mybus.on('title', data => (title.value = data.title))
mybus.on('user', data => {
  user.name = data.user.name
  user.age = data.user.age
})
// 移除
// mybus.off("title");
// mybus.off("user");
// mybus.all.clear();
const { name, age } = toRefs(user)
</script>
