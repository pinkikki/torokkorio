<template>
  <div>
    <p>Monetization</p>
    <button @click.prevent="fetch()">fetch</button>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    methods: {
      fetch() {
        axios.get("http://localhost:5000").then((response) => {
          console.log(response.data);
          alert(response.data);
        }).catch((error) => {
          console.log(error.data);
          alert(error.data);
        });
      }
    }
  }
</script>