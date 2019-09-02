import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import axios from './utils/axios.config'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
Vue.use(ElementUI)
Vue.use(Component)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
