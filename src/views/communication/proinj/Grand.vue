<template>
  <p>孙,age is: {{ user.age }}</p>
</template>

<script setup>
import { inject } from 'vue'

const user = inject('user')
</script>
