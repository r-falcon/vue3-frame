<template>
  <div class="main_box">
    <div class="left_box"><Nav /></div>
    <div class="right_box"><router-view /></div>
  </div>
</template>

<script setup>
import Nav from './Nav.vue'
</script>

<style lang="scss">
.main_box {
  display: flex;

  .left_box {
    width: 300px;
    border-right: 1px solid #f2f2f2;
  }

  .right_box {
    flex: 1;
    padding: 10px;
  }
}
</style>
