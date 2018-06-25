import Vue from 'vue'
import App from './App'
import store from './store.js'

new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<app/>',
})