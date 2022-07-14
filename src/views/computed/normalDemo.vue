<template>
  <div>
    <h1>普通用法</h1>
    <div>firstName:<el-input v-model="firstName" /></div>
    <div>lastName:<el-input v-model="lastName" /></div>
    <div>fullName:<el-input v-model="fullName" /></div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'

export default {
  setup() {
    /**
     * computed
     *  默认只改变数据的值，如果想改变后的值具有响应性，利用其set()方法
     *  vue3.x中移除过滤器，不再支持，建议使用computed去代替
     */
    const name = reactive({
      firstName: '',
      lastName: '',
      fullName: ''
    })

    // 计算属性fullName
    /**
     * 这样得到的fullName，想要修改时，后台警告：Write operation failed: computed value is readonly
     * 如果有修改fullName的需求，通过set()方法
     */
    // const fullName = computed(() => {
    //   return name.firstName + " " + name.lastName;
    // });

    name.fullName = computed({
      get() {
        return name.firstName + ' ' + name.lastName
      },
      set(value) {
        let nameList = value.split(' ')
        name.firstName = nameList[0]
        name.lastName = nameList[1]
      }
    })

    return {
      ...toRefs(name)
      // fullName,
    }
  }
}
</script>
