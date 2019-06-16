import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test/:id',
      name: 'HelloWorld',
      component: Test
    },
    {
      path: '/test/:id/name/:userName',
      name: 'HelloWorld',
      component: Test
    }
  ]
})
