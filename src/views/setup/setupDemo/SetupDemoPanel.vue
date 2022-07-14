<template>
  <div>
    <h1>setup语法糖</h1>
    <Son
      ref="sonRef"
      :count="count"
      :name="name"
      :age="age"
      @setCount="addCount"
      @setAge="addAge"
    >
      <template #default>父组件插槽中的内容</template>
    </Son>
    <el-button style="margin: 10px 0" @click="handleReactive"
      >父组件接收子暴露的属性和方法</el-button
    >
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import Son from './Son.vue'

const count = ref(0)
const addCount = () => count.value++

const user = reactive({
  name: 'falcon',
  age: 20
})
const addAge = () => user.age++
const { name, age } = toRefs(user)

const sonRef = ref(null)
const handleReactive = () => {
  console.log(
    'attrs: ',
    sonRef.value.demo,
    'methods: ',
    sonRef.value.exposeMethod()
  )
}
</script>
