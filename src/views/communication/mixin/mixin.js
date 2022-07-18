import { ref } from 'vue'

const count = ref(20)
const name = ref('falcon')

const addCount = () => count.value++
const subCount = () => count.value--

export default {
  count,
  name,
  addCount,
  subCount
}
