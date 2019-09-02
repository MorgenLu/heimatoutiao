import axios from 'axios'
// 处理axios拦截器 请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function () {})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(response)
  return response.data ? response.data : {}
}, function () {})

export default axios
