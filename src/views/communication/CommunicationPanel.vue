<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="props/emits" name="first">
        <Props />
      </el-tab-pane>
      <el-tab-pane label="attrs传递" name="second">
        <Attrs />
      </el-tab-pane>
      <el-tab-pane label="v-model双向绑定" name="third">
        <Vmodel />
      </el-tab-pane>
      <el-tab-pane label="ref/expose" name="forth">
        <Ref />
      </el-tab-pane>
      <el-tab-pane label="provide/inject" name="fifth">
        <Proinj />
      </el-tab-pane>
      <el-tab-pane label="组合式函数/[mixin混入]" name="sixth">
        <Mixin />
      </el-tab-pane>
      <el-tab-pane label="mitt跨组件通信" name="seventh">
        <Mitt />
      </el-tab-pane>
      <el-tab-pane label="状态管理库pinia" name="eighth">
        <Pinia />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Props from './props'
import Attrs from './attrs'
import Vmodel from './vmodel'
import Ref from './ref'
import Proinj from './proinj'
import Mixin from './mixin'
import Mitt from './mitt'
import Pinia from './pinia'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
