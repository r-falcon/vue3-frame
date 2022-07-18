<template>
  <p>鼠标移动位置：{{ x }},{{ y }}</p>
  <p>系统是否是深色模式：{{ isDark }}</p>
  <p>本地存储：name: {{ store.name }}, age: {{ store.age }}</p>
</template>

<script setup>
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'

// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red'
})
</script>
