<template>
  <h3>子组件，接受的数据为，name:{{ name }}</h3>
  <Grand v-bind="$attrs" />
</template>

<script setup>
import Grand from './Grand.vue'

defineProps({
  name: {
    type: String,
    default: () => ''
  }
})
</script>
