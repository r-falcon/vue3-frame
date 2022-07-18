<template>
  <h3>attrs,传递子组件中没有被props定义的属性，传递父组件中传递过来的方法</h3>
  <h3>父组件，接受的数据为，receiveValue: {{ receiveValue }}</h3>
  <Children :name="name" :age="age" @getValue="getValue" />
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Children from './Children.vue'

const user = reactive({
  name: 'falcon',
  age: 20,
  receiveValue: ''
})
const getValue = value => (user.receiveValue = value)
const { name, age, receiveValue } = toRefs(user)
</script>
