import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters.js'
import actions from './actions.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    user
  }
})
