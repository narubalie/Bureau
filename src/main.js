import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import InstantSearch from 'vue-instantsearch'

import 'normalize.css/normalize.css'

import {
  CssGrid,
  CssGridItem,
  ViewportListener
} from 'vue-css-grid'

// Your main grid component, it declares the layout
Vue.component('css-grid', CssGrid)

// A grid item to use inside the grid component
Vue.component('css-grid-item', CssGridItem)

// Optional component to listen to viewport width and height changes
Vue.component('viewport-listener', ViewportListener)

Vue.config.productionTip = false

Vue.use(InstantSearch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
