<template>
  <div>
    <h1>普通用法</h1>
    <!-- 父组件中修改count的值，相应的props也会更新 -->
    <el-button type="primary" @click="addCount">父count++</el-button>
    <Son
      ref="sonRef"
      :count="count"
      :name="name"
      :age="age"
      @setCount="addCount"
      @setAge="addAge"
    >
      <template #default>父组件的插槽内容</template>
    </Son>
    <el-button style="margin: 10px 0" @click="handleReactive"
      >接受子组件暴露的属性和方法</el-button
    >
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Son from './Son.vue'

export default {
  components: {
    Son
  },
  setup() {
    /**
     * composition api
     *  定义的变量和方法都要return出去，否则无法使用
     *  setup()在beboreCreate和created两个生命周期之前执行,所以不能使用this，指向undefined
     *  接受两个参数：props context
     */
    /**
     * props
     *  props是响应的，传入新的props会更新
     *  使用es6解构props会失去其响应性
     *  保持props的响应性，可以使用toRefs解构
     *  当获取可选的prop的时候，toRefs[多个变为响应式]可能无效，需要使用toRef[单个变为响应式]
     */
    /**
     * context
     *  普通的JavaScript对象，暴露了其他可能在setup用有用的值(attrs\slots.default()\emit\expose)
     */
    const count = ref(0)
    const addCount = function () {
      count.value++
    }

    const user = reactive({
      name: 'falcon',
      age: 20
    })
    const addAge = function () {
      user.age++
    }

    // 父组件接收子暴露的属性和方法
    const sonRef = ref(null)
    const handleReactive = () => {
      console.log(
        'attrs: ',
        sonRef.value.demo,
        'methods: ',
        sonRef.value.exposeMethod()
      )
    }

    return {
      count,
      addCount,

      ...toRefs(user),
      addAge,

      sonRef,
      handleReactive
    }
  }
}
</script>
