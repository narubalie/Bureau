export default {
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['../components/views/mainpage.vue'], resolve)
    }, {
      path: '/Servises',
      name: 'Servises'
    }, {
      path: '/Specialists',
      name: 'Specialists'
    }, {
      path: '/Prices',
      name: 'Prices'
    }, {
      path: '/Contacts',
      name: 'Contacts'
    }
  ]
}
