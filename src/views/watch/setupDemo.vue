<template>
  <div>
    <h1>setup语法糖</h1>
    <h2>Ref</h2>
    <p>title:{{ title }}</p>
    <p>lesson:{{ lesson }}</p>
    <p>user, name:{{ user.name }}, age:{{ user.age }}</p>
    <el-button @click="handleRefChange">ref change</el-button>
    <p>
      job, occupation:{{ occupation }}, salary:{{ salary }}, content, paper:{{
        content.paper
      }},pencil:{{ content.pencil }}
    </p>
    <p>detail: {{ detail.page }}</p>
    <el-button @click="handleReactiveChange">reactive change</el-button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, watch, watchEffect } from 'vue'

const title = ref('hello world')
const lesson = ref(1)
const user = ref({
  name: 'falcon',
  age: 20
})
const handleRefChange = () => {
  title.value += ' M'
  lesson.value++
  user.value.name += ' T'
  user.value.age++
}

const job = reactive({
  occupation: 'IT',
  salary: 3000,
  content: {
    paper: 20,
    pencil: 16,
    level: {
      star: 5
    }
  }
})
const detail = reactive({
  id: 1,
  page: 2
})
// const job = shallowReactive({
//   occupation: "IT",
//   salary: 3000,
//   content: {
//     paper: 20,
//     pencil: 16,
//     level: {
//       star: 5,
//     },
//   },
// });
const handleReactiveChange = () => {
  job.occupation += ' P'
  job.salary += 1000
  job.content.paper++
  job.content.pencil += 10
  job.content.level.star++
  detail.page++
}

// ref-监听一个
watch(title, (newVal, oldVal) => {
  console.log('ref一个参数变化', oldVal, newVal)
})
// ref-监听两个
// watch([title, lesson], (newVal, oldVal) => {
//   console.log("ref多个参数变化", oldVal, newVal);
// });
// ref-监听对象,user.value整体监听不到，但是监听具体属性的值可以;立即监听immediate；深度监听，监听第二层以下deep
// watch(
//   () => user.value.age,
//   (newVal, oldVal) => {
//     console.log("ref对象变化", oldVal, newVal);
//   },
//   { immediate: true },
//   { deep: true }
// );

// reactive-监听一个
// watch(
//   () => job.occupation,
//   (newVal, oldVal) => {
//     console.log("reactive一个参数变化", oldVal, newVal);
//   }
// );
// reactive-监听两个
// watch([() => job.occupation, () => job.salary], (newVal, oldVal) => {
//   console.log("reactive多个参数变化", oldVal, newVal);
// });
// reactive-监听对象
// watch(
//   () => job.content,
//   (newVal, oldVal) => {
//     // 开启深度监听才能监听到对象的变化
//     console.log("reactive对象变化", oldVal, newVal);
//   },
//   { deep: true }
// );
// watch(
//   () => job.content.level,
//   (newVal, oldVal) => {
//     console.log("reactive对象变化", oldVal, newVal);
//   },
//   { deep: true }
// );
// watch(
//   () => detail,
//   (newVal, oldVal) => {
//     // 只有添加深度监听，才能检测到对象值的变化
//     console.log("reactive对象变化", oldVal, newVal);
//   },
//   { deep: true }
// );

/**
 * watchEffect
 *    立即执行一次，自动收集依赖变更时执行一次，类似computed
 * 副作用：
 *    DOM挂载或者更新之前会触发
 *    涉及到DOM操作和ref获取，放到mounted周期
 *
 */
watchEffect(() => {
  console.log(title.value)
  console.log(job.content.pencil)
})

/**
 * 停止侦听
 *    组件创建的watch侦听，默认会在组件销毁时自动停止
 *    如果想提前终止侦听
 */
// const stopWatch = watch(
//   () => job.content.pencil,
//   (newValue, oldValue) => {
//     // 过3s后便不再进行监听
//     console.log("监听属性值变化，3s有效", newValue, oldValue);
//   },
//   { deep: true }
// );
// setTimeout(() => {
//   stopWatch();
// }, 3000);
// const stopWatchEffect = watchEffect(() => {
//   /*... */
// });
// setTimeout(() => {
//   stopWatchEffect();
// }, 3000);
const { occupation, salary, content } = toRefs(job)
</script>
