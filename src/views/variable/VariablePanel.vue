<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="普通用法" name="first">
        <Normal />
      </el-tab-pane>
      <el-tab-pane label="setup语法糖" name="second">
        <Suger />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Normal from './normalDemo.vue'
import Suger from './setupDemo.vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
