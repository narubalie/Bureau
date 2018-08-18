import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routerConfig from './router'
import storeConfig from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'

// import {
//   yandexMap,
//   YmapPlugin,
//   ymapMarker
// } from 'vue-yandex-maps'

import YmapPlugin from 'vue-yandex-maps'

import App from './App'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(YmapPlugin)

// Vue.use(YmapPlugin)
// Vue.use(yandexMap)
// Vue.use(ymapMarker)

const router = new VueRouter(routerConfig)
const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
