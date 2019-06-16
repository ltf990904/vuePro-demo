const getters = {
  isEvenOrOdd (state) {
    // user模块中的count
    return state.user.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default getters
