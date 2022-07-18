<template>
  <h3>接受params参数</h3>
  <p>name: {{ route.params?.name }}</p>
  <p>age: {{ route.params?.age }}</p>
  <p>sex: {{ route.params?.sex }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
