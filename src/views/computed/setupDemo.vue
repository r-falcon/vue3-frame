<template>
  <div>
    <h1>setup语法糖</h1>
    <div>firstName:<el-input v-model="firstName" /></div>
    <div>lastName:<el-input v-model="lastName" /></div>
    <div>fullName:<el-input v-model="fullName" /></div>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed } from 'vue'
const name = reactive({
  firstName: '',
  lastName: '',
  fullName: ''
})
// const fullName = computed(() => {
//   return name.firstName + " " + name.lastName;
// });
name.fullName = computed({
  get() {
    return name.firstName + ' ' + name.lastName
  },
  set(value) {
    let nameList = value.split(' ')
    name.firstName = nameList[0]
    name.lastName = nameList[1]
  }
})

// const { firstName, lastName } = toRefs(name);
const { firstName, lastName, fullName } = toRefs(name)
</script>
