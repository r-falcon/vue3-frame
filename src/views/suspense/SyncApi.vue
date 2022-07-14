<template>
  <div>
    <h3>异步请求组件</h3>
    <div v-for="(people, index) in peoples.results" :key="index">
      {{ people.name }} {{ people.birth_year }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const peoples = ref({
  results: []
})
const headers = { 'Content-Type': 'application/json' }
const fetchPeoples = await fetch('https://swapi.dev/api/people', {
  headers
})
peoples.value = await fetchPeoples.json()
</script>
