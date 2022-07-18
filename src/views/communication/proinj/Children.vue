<template>
  <p>子,name is: {{ user.name }}</p>
  <Grand />
</template>

<script setup>
import { inject } from 'vue'
import Grand from './Grand.vue'

const user = inject('user')
</script>
