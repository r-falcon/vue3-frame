<template>
  <div>
    <h2>子接受</h2>
    <slot>插槽部分</slot>
    <p>name : {{ nameRef }}, count:{{ countRef }}</p>
    <button type="primary" @click="handleChange">count++</button>
    <Grand v-bind="$attrs" />
  </div>
</template>

<script>
import { ref, toRef } from 'vue'
import Grand from './Grand.vue'

export default {
  components: {
    Grand
  },
  props: {
    name: {
      type: String,
      default: () => ''
    },
    count: {
      type: Number,
      default: () => 0
    }
  },
  emits: ['setCount'],
  setup(props, context) {
    // 这样直接对props解构会使其失去响应性,使用toRefs，toRef完成
    // const { name, count } = props;
    // 接受父组件传递过来的插槽信息
    console.log(context.slots.default())
    // 接受没有被props声明且传递过来的属性和方法
    // 【注】vue3 中将$attrs和$listeners合并
    console.log(context.attrs)

    const handleChange = () => {
      // context.emit 事件派发，可以调用父组件的方法
      context.emit('setCount')
    }

    // 子组件暴露属性和方法
    const demo = ref('ref attrs')
    const exposeMethod = () => {
      return 'expose method'
    }
    context.expose({
      demo,
      exposeMethod
    })

    return {
      nameRef: toRef(props, 'name'),
      countRef: toRef(props, 'count'),
      handleChange
    }
  }
}
</script>
