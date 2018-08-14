export default {
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['../components/views/mainpage.vue'], resolve)
    }, {
      path: '/Services',
      name: 'Services',
      component: resolve => require(['../components/views/servicePage.vue'], resolve)
    }, {
      path: '/Specialists',
      name: 'Specialists',
      component: resolve => require(['../components/views/specialists.vue'], resolve)
    }, {
      path: '/Specialist',
      name: 'Specialist',
      component: resolve => require(['../components/views/specialist.vue'], resolve)
    }, {
      path: '/Prices',
      name: 'PricePage',
      component: resolve => require(['../components/views/pricePage.vue'], resolve)
    }, {
      path: '/Contacts',
      name: 'Contacts',
      component: resolve => require(['../components/views/contacts.vue'], resolve)
    }
  ]
}
