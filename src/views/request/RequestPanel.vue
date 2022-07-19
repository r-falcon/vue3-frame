<template>
  <div>
    <el-button @click="requestRes1">发起请求-封装</el-button>
    <el-button @click="requestRes2">发起请求-不封装</el-button>
  </div>
</template>

<script setup>
import { Login } from '@/api'
import { reactive } from 'vue'
import axios from 'axios'

const loginForm = reactive({
  username: 'admin',
  password: 123456
})

const requestRes1 = async () => {
  let result = await Login(loginForm)
  console.log(result)
}

const requestRes2 = async () => {
  let result = await axios({
    method: 'get',
    url: 'https://swapi.dev/api/people'
  })
  console.log(result)
}
</script>
