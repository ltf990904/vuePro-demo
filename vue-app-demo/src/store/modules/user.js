/**
 * 用户模块
 */

import types from '../types.js'

const state = {
  count: 1
}

var getters = {
  count (state) {
    return state.count
  }
}

const actions = {
  increment ({ commit, state }) {
    // 提交一个名为increment的变化，名称可自定义，可以认为是类型名
    commit(types.INCREMENT)
  },
  decrement ({ commit, state }) {
    if (state.count > 1) {
      commit(types.DECREMENT)
    }
  }
}

const mutations = {
  [types.INCREMENT] (state) { // ES6中中括号里表示 变量
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
