import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

export default new Router({
  components: {
    store
  },
  routes: [{
    path: '/',
    name: 'main',
    component: resolve => require(['../components/views/mainpage.vue'], resolve)
  },
  {
    path: '/Servises',
    name: 'Servises'
  },
  {
    path: '/Specialists',
    name: 'Specialists'
  },
  {
    path: '/Prices',
    name: 'Prices'
  },
  {
    path: '/Contacts',
    name: 'Contacts'
  }
  ]
})
