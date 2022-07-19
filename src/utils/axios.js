import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

var instance = axios.create({
  // 统一接口域名
  baseURL: '/api',
  // 设置超时
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8;'
  }
})
let loading
let requestCount = 0
// 显示loading
const showLoading = () => {
  if (requestCount == 0 && !loading) {
    loading = ElLoading.service({
      text: 'Loading...',
      background: 'rgba(0,0,0,0.7)',
      spinner: 'el-icon-loading'
    })
  }
  requestCount++
}
// 隐藏loading
const hideLoading = () => {
  requestCount--
  if (requestCount == 0) {
    loading.close()
  }
}

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = window.localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    if (config.method == 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    hideLoading()
    return response.data
  },
  error => {
    if (error.response && error.response.status) {
      const status = error.response.status
      let message
      switch (status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '请求错误'
          break
        case 404:
          message = '请求地址出错'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误!'
          break
        case 501:
          message = '服务未实现!'
          break
        case 502:
          message = '网关错误!'
          break
        case 503:
          message = '服务不可用!'
          break
        case 504:
          message = '网关超时!'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          message = '请求失败'
      }
      ElMessage.error(message)
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default instance
