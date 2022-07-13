<template>
  <div>
    <h1>setup语法糖</h1>
    <div ref="box">这是box的内容</div>
    <p>data, name:{{ name }} , age:{{ age }}</p>
    <el-button @click="handleUpdate">update</el-button>
    <p>count is : {{ count }}</p>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  watch
} from 'vue'

console.log('1.开始创建')
const box = ref(null)
const count = ref(0)
const data = reactive({
  name: 'falcon',
  age: 20
})
// const timer = setInterval(() => {
//   count.value++;
// }, 1000);

onBeforeMount(() => {
  console.log(box.value) //null
  console.log('2.挂载之前执行')
})

onMounted(() => {
  console.log(box.value) //<div></div>
  console.log('3.挂载之后执行')
})

// 两处data相同，检测不到更新前后的变化，可以借助watch实现
onBeforeUpdate(() => {
  console.log(data.age)
  console.log('4.更新之前执行')
})

onUpdated(() => {
  console.log(data.age)
  console.log('5.更新之后执行')
})

onBeforeUnmount(() => {
  // clearInterval(timer);
  console.log('6.卸载之前执行')
})

watch(
  () => data.age,
  (oldValue, newValue) => {
    // 可以检测到data更新前后的变化
    console.log(newValue, oldValue)
  }
)

const handleUpdate = () => {
  data.age++
}

const { name, age } = toRefs(data)
</script>
