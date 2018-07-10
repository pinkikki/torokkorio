import Vue from 'vue'
import App from './App'
import store from './store.js'
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<app/>'
})
