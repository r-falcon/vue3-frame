<template>
  <div>
    <h1>普通用法</h1>
    <h3>ref</h3>
    <p>name : {{ name }}</p>
    <p>info, title: {{ info.title }}, lesson: {{ info.lesson }}</p>
    <el-button @click="handleRefChange">ref change</el-button>
    <h3>reactive</h3>
    <p>happy : {{ happyRef }}</p>
    <p>
      use, name: {{ nickname }}, age: {{ age }}, hobbies: {{ hobbies }}, job :
      {{ job }}
    </p>
    <el-button @click="handleReactiveChange">reactive change</el-button>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    /**
     * ref
     *    基本类型生成RefImpl实例；复合类型生成Proxy实例
     *    基本类型通过es5的Object.defineProperty()劫持；复合类型使用es6的Proxy代理整个对象拦截各种变化
     *    js中修改通过.value调用，html中渲染直接使用
     */
    const name = ref('falcon')
    const info = ref({
      title: 'love and peace',
      lesson: 12
    })
    const handleRefChange = () => {
      name.value = name.value + ' L'
      info.value.title = info.value.title + ' M'
      info.value.lesson++
    }

    /**
     * reactive
     *    只能定义对象类型的数据，通过Proxy监听变化
     * toRef()、toRefs()、unref()
     *    toRef() 单个转化为响应式
     *    toRefs() 多个转化为响应式
     *    unref() 是 val = isRef(val) ? val.value : val 的语法糖；如果参数是一个 ref 则返回它的 value，否则返回参数本身
     */
    const multiple = reactive({
      morning: 'morning',
      happy: 'happy'
    })
    const user = reactive({
      nickname: 'alice',
      age: 21,
      hobbies: ['vue', 'vuex'],
      job: {
        work: 'IT',
        money: 2000
      }
    })
    const handleReactiveChange = () => {
      multiple.morning = 'evening'
      multiple.happy = 'sad'

      user.nickname = user.nickname + ' O'
      user.age++
      user.hobbies.push('new hobby')
      user.job.new = 'new attrs'
      user.job.work = 'not fine'
      user.job.money = 'too low'
    }

    return {
      name,
      info,
      handleRefChange,

      happyRef: toRef(multiple, 'happy'),
      ...toRefs(user),
      handleReactiveChange
    }
  }
}
</script>
