import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import revenue from './store/revenue'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    revenue
  }
})

export default store
