import { defineStore } from 'pinia'
import { userCount } from './useCount'

const cstore = userCount()
export const userStore = defineStore({
  id: 'userInfo', //命名，唯一，必须
  state: () => {
    return {
      userInfo: {},
      num: 2,
      obj: {
        a: 1,
        b: 2
      }
    }
  },
  actions: {
    setUserInfo(data) {
      this.userInfo = data
    },
    addNum() {
      this.num++
    },
    addA() {
      this.obj.a++
    },
    addCount() {
      cstore.add()
    },
    subCount() {
      cstore.sub()
    }
  },
  getters: {
    getNum(state) {
      return state.num
    },
    double(state) {
      return state.num * 2
    },
    pow(state) {
      return state.num ** 2
    },
    getCount() {
      return cstore.count
    }
  }
})
