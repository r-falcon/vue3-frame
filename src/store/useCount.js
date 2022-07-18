import { defineStore } from 'pinia'

export const userCount = defineStore({
  id: 'userCount', //命名，唯一，必须
  state: () => {
    return {
      count: 2
    }
  },
  actions: {
    add() {
      this.count++
    },
    sub() {
      this.count--
    }
  }
})
