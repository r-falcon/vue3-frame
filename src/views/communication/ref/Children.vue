<template>
  <p>count is: {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(20)
const msg = ref('good idea')
const add = () => count.value++
const sub = () => count.value--

defineExpose({
  msg,
  add,
  sub
})
</script>
