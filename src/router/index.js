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
    }, {
      path: '/News',
      name: 'News',
      component: resolve => require(['../components/views/news.vue'], resolve)
    }, {
      path: '/Replies',
      name: 'Replies',
      component: resolve => require(['../components/views/replies.vue'], resolve)
    }, {
      path: '/Vacancies',
      name: 'Vacancies',
      component: resolve => require(['../components/views/vacancies.vue'], resolve)
    }, {
      path: '/Quality',
      name: 'Quality',
      component: resolve => require(['../components/views/quality.vue'], resolve)
    }, {
      path: '/Organizations',
      name: 'Organizations',
      component: resolve => require(['../components/views/organizations.vue'], resolve)
    }
  ]
}
