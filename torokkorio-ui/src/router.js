import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Revenue from './views/Revenue.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/revenue', component: Revenue }
  ]
})

export default router
