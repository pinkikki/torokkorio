<template>
  <div class="grid-container fluid">
    <div class="grid-y medium-grid-frame">
      <appheader/>
      <router-view/>
      <button @click.prevent="fetch()">fetch</button>
    </div>
  </div>
</template>

<script>
import appheader from './views/ApplicationHeader'
import axios from 'axios'

export default {
  components: {
    appheader
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
