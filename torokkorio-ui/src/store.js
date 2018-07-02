import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    money: 0
  },
  mutations: {
    calc (state) {
      state.money = state.money * 1.08
    }
  }
})

export default store
