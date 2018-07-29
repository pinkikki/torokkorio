import axios from 'axios'

export default {
  state: {
    item: '',
    price: 0
  },
  actions: {
    save ({ commit, state }) {
      axios
        .post('http://localhost:5000/create', { 'name': state.item, 'amount': state.price })
        .then(
          (response) => {
            commit('clear')
          }
        ).catch(
          (error) => {
            console.log(error.data)
          }
        )
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
