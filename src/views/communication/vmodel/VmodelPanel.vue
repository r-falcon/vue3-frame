<template>
  <h3>vue3中将 v-model 和 .sync 修饰符合并</h3>
  <Children v-model:title="title" />
</template>

<script setup>
import { ref } from 'vue'
import Children from './Children.vue'

const title = ref('falcon')
</script>
