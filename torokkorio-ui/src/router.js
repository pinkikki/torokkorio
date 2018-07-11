import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './views/ApplicationHeader.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/header', component: Header}
  ]
})

export default router