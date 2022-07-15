<template>
  <div>
    <h3>vue3中v-model的应用</h3>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <Son v-model:name="name" v-model:age="age" />
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Son from './Son.vue'

const user = reactive({
  name: 'falcon',
  age: '20'
})
const { name, age } = toRefs(user)
</script>
