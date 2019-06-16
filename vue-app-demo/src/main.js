import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// element - 注册
Vue.use(ElementUI)
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
