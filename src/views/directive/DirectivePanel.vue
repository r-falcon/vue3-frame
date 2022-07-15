<template>
  <div>
    <h3>vue3自定义指令</h3>
    <input type="text" v-focus />
  </div>
</template>

<script setup>
/**
 * 自定义指令
 *    全局自定义指令
 *    局部自定义指令
 */
const vFocus = {
  mounted: el => el.focus()
}
</script>
