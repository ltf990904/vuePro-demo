/**
 * vuex配置：store.js
 **/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1、定义属性(数据)
var state = {
  count: 1
}

// 2、定义gettters获取属性：在App.vue中使用 辅助函数 访问 vuex 组件中数据调用此函数
var getters = {
  count (state) {
    return state.count
  }
}

// 3、定义actions提交变化：其他组件中调用的方法()
const actions = {
  increment ({ commit, state }) { // context包含属性（函数）：commit，dispatch,state
    if (state.count < 10) { // 当count数值小于10才会提交改变(大于10就不增加了)
      commit('increment')
    }
    // 1、commit提交改变（不能直接修改数据）
    // 2、commit中的参数 'increment' 是自定义的，可以认为是类型名
    // 3、commit提交的改变会给 mutations
  },

  /** 定义异步操作 **/
  incrementAsyn ({ commit, state }) {
    var p = new Promise((resolve, reject) => { // 异步操作
      setTimeout(() => {
        resolve()
      }, 500)
    })
    p.then(() => { // 上面执行完成后才执行 p.then()
      commit('increment')
    }).catch(() => { // 异常处理
      console.log('异步操作失败')
    })
  }
}

// 4、定义mutations定义变化,处理状态（数据的改变）
const mutations = {
  increment (state) {
    state.count++
  }
}

// 创建一个store对象（对象里定义需要导出的变量）
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

// 导出store对象
export default store
