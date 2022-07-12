<template>
  <div>
    <h1>setup语法糖</h1>
    <h3>ref</h3>
    <p>name : {{ name }}</p>
    <p>info, title: {{ info.title }}, lesson: {{ info.lesson }}</p>
    <el-button @click="handleRefChange">ref change</el-button>

    <h3>reactive</h3>
    <p>happy : {{ happyRef }}</p>
    <p>
      use, name: {{ nickname }}, age: {{ age }}, hobbies: {{ hobbies }}, job :
      {{ job }}
    </p>
    <el-button @click="handleReactiveChange">reactive change</el-button>
  </div>
</template>

<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'

const name = ref('falcon')
const info = ref({
  title: 'love and peace',
  lesson: 12
})
const handleRefChange = () => {
  name.value = name.value + ' L'
  info.value.title = info.value.title + ' M'
  info.value.lesson++
}

const multiple = reactive({
  morning: 'morning',
  happy: 'happy'
})
const user = reactive({
  nickname: 'alice',
  age: 21,
  hobbies: ['vue', 'vuex'],
  job: {
    work: 'IT',
    money: 2000
  }
})
// toRef toRefs
const happyRef = toRef(multiple, 'happy')
// 可以通过解构的方式二次细分
const { nickname, age, hobbies, job } = toRefs(user)
const handleReactiveChange = () => {
  multiple.morning = 'evening'
  multiple.happy = 'sad'

  user.nickname = user.nickname + ' O'
  user.age++
  user.hobbies.push('new hobby')
  user.job.new = 'new attrs'
  user.job.work = 'not fine'
  user.job.money = 'too low'
}
</script>
