<template>
  <h3>状态管理库pinia</h3>
  <p>userInfo: {{ store.userInfo }}</p>
  <el-button @click="handleUpdate">update</el-button>
  <!-- <p>num: {{ store.getNum }}</p> -->
  <!-- 解构出来的数值,操作时num不具有响应性;通过storeToRefs包裹，num具有相应性 -->
  <p>num: {{ num }}</p>
  <p>double: {{ store.double }}</p>
  <p>pow: {{ store.pow }}</p>
  <el-button @click="handleAdd">num++</el-button>
  <!-- 解构出来的数值,操作时具有响应性 -->
  <p>a: {{ obj.a }}</p>
  <el-button @click="handleA">a++</el-button>
  <p>count: {{ store.getCount }}</p>
  <el-button @click="addC">count++</el-button>
  <el-button @click="subC">count--</el-button>
</template>

<script setup>
/**
 * Vuex：
 *    State(存储全局状态)
 *    Getters(类似computed，根据state派生数据，具有缓存性)
 *    Mutations(同步)
 *    Actions(异步)
 * Pinia：
 *    State(存储全局状态)
 *    Getters(类似computed，根据state派生数据，具有缓存性)
 *    Actions(同步异步均支持)
 */
/**
 * 数据持久化解决方案：pinia-plugin-persist，默认存储在sessionStorage中
 */
/**
 * 数据解构使其失去响应性：解决-storeToRefs
 *    解构属性为基本类型，不具有响应性；引用类型，具有响应性
 *
 */
import { userStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const store = userStore()
const handleUpdate = () => {
  store.setUserInfo({
    name: 'falcon',
    age: 20,
    sex: 'female'
  })
}
const handleAdd = () => store.addNum()
const addC = () => store.addCount()
const subC = () => store.subCount()
// const { num } = store;
const { obj } = store
const handleA = () => store.addA()
const { num } = storeToRefs(store)
</script>
