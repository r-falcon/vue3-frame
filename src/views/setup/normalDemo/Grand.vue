<template>
  <div>
    <h2>孙接受</h2>
    <p>age:{{ age }}</p>
    <el-button type="primary" @click="handleChange">age++</el-button>
  </div>
</template>

<script>
import { toRef } from 'vue'

export default {
  props: {
    age: {
      type: Number,
      default: () => 0
    }
  },
  emits: ['setAge'],
  setup(props, context) {
    const handleChange = () => {
      context.emit('setAge')
    }

    return {
      ageRef: toRef(props, 'age'),
      handleChange
    }
  }
}
</script>
