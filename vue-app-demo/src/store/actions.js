import types from './types.js'

const actions = {
  incrementAsync ({ commit, state }) {
    // 异步操作
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    p.then(() => {
      commit(types.INCREMENT)
    }).catch(() => {
      console.log('异步操作')
    })
  },
  decrementAsync ({ commit, state }) {
    // 异步操作
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    p.then(() => {
      commit(types.DECREMENT)
    }).catch(() => {
      console.log('异步操作')
    })
  }
}

export default actions
