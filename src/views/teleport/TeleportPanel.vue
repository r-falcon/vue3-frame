<template>
  <h3>Teleport，瞬移组件，能将我们的元素移动到DOM中vue app之外的其他位置</h3>
  <div id="teleport-target"></div>
  <el-button type="primary" @click="showToast">打开弹框</el-button>
  <!-- 
      teleport
        希望在组件内使用dialog
        希望渲染的DOM结构不嵌套在组件的DOM结构中
     -->
  <teleport to="#teleport-target">
    <div
      v-if="visible"
      style="
        width: 260px;
        height: 120px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      "
    >
      I hope you can happy to live every day
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const showToast = () => {
  visible.value = true
}
</script>
