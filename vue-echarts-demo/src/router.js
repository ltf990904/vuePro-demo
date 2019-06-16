import Vue from 'vue'
import Router from 'vue-router'
import echarts from './views/echarts'
import echartspie from './views/Diagram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/echarts'
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/echartspie',
      name: 'echartspie',
      component: echartspie
    }
  ]
})
