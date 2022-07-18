<template>
  <h3>
    v-bind的优先级问题：vue3[就近原则]vue2[单独声明优先]，并且重复定义会发出警示：Duplicate
    attribute 'disabled'.
  </h3>
  <!-- false -->
  <!-- <input type="text" value="测试数据" v-bind:disabled="false" :disabled="disabled" /> -->
  <!-- true -->
  <!-- <input type="text" value="测试数据" :disabled="disabled" v-bind:disabled="false" /> -->
</template>

<script setup>
// import { ref } from "vue";
// const disabled = ref(true);
</script>
