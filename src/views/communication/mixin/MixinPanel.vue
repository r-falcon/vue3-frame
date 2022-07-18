<template>
  <h3>vue3中使用混入</h3>
  <p>name is:{{ name }}, count is:{{ count }}</p>
  <el-button @click="addCount">count++</el-button>
  <el-button @click="subCount">count--</el-button>
</template>

<script setup>
import mixins from './mixin.js'

const { count, name, addCount, subCount } = mixins
</script>
