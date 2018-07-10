<template>
  <div class="grid-container fluid">
    <div class="grid-y medium-grid-frame">
      <header/>
      <router-view/>
    </div>
    <p>Monetization</p>
    <button @click.prevent="fetch()">fetch</button>
  </div>
</template>

<script>
import header from './views/Header'
import axios from 'axios'

export default {
  components: {
    header
  },
  methods: {
    fetch () {
      axios.get('http://localhost:5000').then((response) => {
        console.log(response.data)
        console.log(this.$store.state.money)
        this.$store.commit('calc')
        console.log(this.$store.state.money)
      }).catch((error) => {
        console.log(error.data)
      })
    }
  }
}
</script>
