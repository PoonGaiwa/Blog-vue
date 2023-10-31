import axios from 'axios'
import store from 'store'
import base from '@/config/base.config'
const { BASE_URL, TOKENNAME, TIMEOUT } = base

axios.defaults.baseURL = BASE_URL
const service = axios.create({
  timeout: TIMEOUT
})


// 请求拦截
service.interceptors.request.use(async (config) => {
  let token = store.get(TOKENNAME)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截
service.interceptors.response.use((response) => {
  return response.data
}, (err) => {
  return Promise.reject(err)
})

export default service