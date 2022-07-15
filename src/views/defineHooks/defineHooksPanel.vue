<template>
  <div>
    <p>count : {{ count }}</p>
    <p>multiple : {{ multiple }}</p>
    <el-button @click="handleIncrease">count++</el-button>
    <el-button @click="handleDecrease">decrease</el-button>
    <el-button @click="handleReset">reset</el-button>
  </div>
</template>

<script>
import useCount from '@/hooks/useCount'

export default {
  setup() {
    /**
     * 自定义Hooks/可组合函数（mixin的替代方案）
     * 传统的mixin是通过this来调用属性和方法，vue3中this指向undefined
     * 命名：
     *    约定用驼峰命名，且以“use”开头
     * 传入参数：
     *    尽管响应性不依赖ref,组合式函数仍可接受ref参数；[unref妙用：是ref，返回其.value值；不是ref，直接返回]
     *    如果你的组合式函数在接收 ref 为参数时会产生响应式 effect，请确保使用 watch() 显式地监听此 ref，或者在 watchEffect() 中调用 unref() 来进行正确的追踪
     * 返回值：
     *    ref对象，因为这样函数组件在解构时仍可保持响应性（reactive会使其失去响应性）
     *    希望以对象的形式返回状态，用reactive包裹
     * 副作用：
     *    在函数式组合api中可以添加副作用[DOM事件或请求数据]，注意在onMounted()使用，在onBeforeUnMount中销毁
     */

    /**
     * 传统mixin的痛点：
     *    命名冲突
     *    不清楚property的来源
     *    隐式的跨mixin交流（多个mixin依赖共享的键名，使得其隐式地耦合在一起）
     *    可重用性有限（不能向mixin中传递任何参数来改变其逻辑）
     */
    const { count, multiple, increase, decrease, reset } = useCount(10)

    const handleIncrease = () => increase()
    const handleDecrease = () => decrease()
    const handleReset = () => reset()

    return {
      count,
      multiple,
      handleIncrease,
      handleDecrease,
      handleReset
    }
  }
}
</script>
