<template>
  <h3>不同类型的传参方式</h3>
  <el-button type="primary" @click="TransByQuery">通过query传参</el-button>
  <el-button type="primary" @click="TransByParams">通过params传参</el-button>
  <el-button type="primary" @click="TransByDynamic">动态传递参数</el-button>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

/**
 * query vs params
 *    query传参配置path，params传参配置name，且params中配置path无效
 *    query传参显示在地址栏，params传参不会
 *    query传参刷新页面数据不会消息，params传参刷新页面消失
 *    params可以使用动态参数，动态参数会显示在地址栏中，且刷新页面数据不会消失
 */

const queryParams = reactive({
  name: 'falcon',
  age: 20,
  sex: 'female'
})
const id = ref('happy-20220718')

const router = useRouter()

// 通过query的时候path定义为path
const TransByQuery = () => {
  router.push({
    path: '/queryDemo',
    query: queryParams
  })
}

// 通过params时path定义为name，不然会报错，获取不到参数： Path "/paramsDemo" was passed with params but they will be ignored. Use a named route alongside params instead.
// 【注】name为路由中定义的name属性值，严格区分大小写
const TransByParams = () => {
  router.push({
    name: 'ParamsDemo',
    params: queryParams
  })
}

// 动态传递参数
const TransByDynamic = () => {
  router.push({
    name: 'Dynamic',
    params: { id: id.value }
  })
  // 路由跳转
  // router.go(1); //前进
  // router.go(-1); //后退
  // router.go(0); //刷新
}
</script>
