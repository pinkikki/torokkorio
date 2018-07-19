export default {
  state: {
    item: '',
    price: 0
  },
  actions: {
    save ({ commit }) {
      // ここでサーバの記録APIを実行する
      commit('clear')
    },
    setItem ({ commit }, item) {
      commit('setItem', { item })
    },
    setPrice ({ commit }, price) {
      commit('setPrice', { price })
    }

  },
  mutations: {
    setItem (state, payload) {
      state.item = payload.item
    },
    setPrice (state, payload) {
      state.price = payload.price
    },
    clear (state) {
      state.item = ''
      state.price = 0
    }
  }
}
