import { ref, computed } from 'vue'

const useCount = (initValue = 1) => {
  const count = ref(initValue)

  const increase = delta => {
    if (typeof delta !== 'undefined') {
      count.value += delta
    } else {
      count.value++
    }
  }

  const multiple = computed(() => count.value * 2)

  const decrease = delta => {
    if (typeof delta !== 'undefined') {
      count.value -= delta
    } else {
      count.value--
    }
  }

  const reset = () => (count.value = initValue)

  return {
    count,
    increase,
    multiple,
    decrease,
    reset
  }
}

export default useCount
