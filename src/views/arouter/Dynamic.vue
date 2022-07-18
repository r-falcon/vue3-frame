<template>
  <h3>接受动态参数</h3>
  <p>id: {{ route.params?.id }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
