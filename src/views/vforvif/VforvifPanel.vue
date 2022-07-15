<template>
  <div>
    <h3>vue3中v-for和v-if一起使用v-if的优先级较高；与vue2相反</h3>
    <!-- 一起使用不会报错，但是会有警告：This 'v-if' should be moved to the wrapper element. -->
    <!-- 将v-if提出来，被外层div包裹 -->
    <div v-if="flag">
      <div v-for="item in dataList" :key="item.id">
        {{ item.id }} - {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const flag = ref(false)
const dataList = reactive([
  { id: 1, label: 'list-01' },
  { id: 2, label: 'list-02' },
  { id: 3, label: 'list-03' },
  { id: 4, label: 'list-04' },
  { id: 5, label: 'list-05' }
])
</script>
