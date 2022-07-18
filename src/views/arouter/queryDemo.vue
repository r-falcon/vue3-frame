<template>
  <h3>接受query参数</h3>
  <p>name: {{ route.query?.name }}</p>
  <p>age: {{ route.query?.age }}</p>
  <p>sex: {{ route.query?.sex }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
