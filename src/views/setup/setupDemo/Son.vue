<template>
  <div>
    <h2>子接受</h2>
    <slot>插槽部分</slot>
    <p>name:{{ name }}, count:{{ count }}</p>
    <el-button type="primary" @click="handleChange">count++</el-button>
    <Grand v-bind="$attrs" />
  </div>
</template>

<script setup>
import { ref, useSlots, useAttrs } from 'vue'
import Grand from './Grand.vue'

/**
 * setup语法糖
 *  defineProps
 *  defineEmits
 *  defineExpose
 *  useSlots
 *  useAttrs
 */

defineProps({
  name: {
    type: String,
    default: () => ''
  },
  count: {
    type: Number,
    default: () => 0
  }
})

const emits = defineEmits(['setCount'])

const handleChange = () => {
  emits('setCount')
}

// 接受父组件传递过来的插槽信息
console.log('setup slots', useSlots().default())

// 接受没有被props声明且传递过来的属性和方法
console.log('setup attrs', useAttrs())

// 子组件暴露属性和方法
const demo = ref('ref attrs')
const exposeMethod = () => {
  return 'expose methods'
}
defineExpose({
  demo,
  exposeMethod
})
</script>
