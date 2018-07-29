export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [{
        art: 'Т0001',
        name: 'Консультация врача-стоматолога-терапевта и оформление консультативного заключения',
        price: '500.00'
      },
      {
        art: 'Т0002',
        name: 'Электроодонтометрия',
        price: '65.00'
      },
      {
        art: 'Т0003',
        name: 'Обработка кариозной полости',
        price: '750.00'
      },
      {
        art: 'Т0004',
        name: 'Наложение коффердама',
        price: '450.00'
      },
      {
        art: 'Т0005',
        name: 'Остановка кровотечения',
        price: '160.00'
      },
      {
        art: 'Т0006',
        name: 'Наложение лечебной повязки',
        price: '300.00'
      }]
    },
    {
      id: 5000,
      category: 'Лечение кариеса',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      },
      {
        key: 'Т0008',
        name: 'Постановка пломбы химического отверждения по поводу кариеса 1-2 пов.',
        price: '1000.00'
      },
      {
        key: 'Т0009',
        name: 'Постановка пломбы из стеклоиономерного цемента светового отверждения по поводу кариеса 1-2 пов.',
        price: '1500.00'
      },
      {
        key: 'Т0010',
        name: 'Постановка пломбы светового отверждения из материала группы 1-ой категории по поводу кариеса 1-2 пов.',
        price: '1180.00'
      },
      {
        key: 'Т0011',
        name: 'Постановка пломбы светового отверждения "Сэндвич-техника" по поводу кариеса 1-2 пов.',
        price: '2300.00'
      }]
    },
    {
      id: 6000,
      category: 'Лечение пульпита',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0013',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0014',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0015',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0016',
        name: 'Услуга',
        price: '250.00'
      }]
    },
    {
      id: 7000,
      category: 'Лечение периодонтита',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    },
    {
      id: 8000,
      category: 'Распломбировка каналов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    },
    {
      id: 9000,
      category: 'Дополнительная работа с каналами',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0026',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0027',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0028',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0029',
        name: 'Услуга',
        price: '250.00'
      },
      {
        art: 'Т0038',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0039',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0040',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 10000,
      category: 'Штифты',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 11000,
      category: 'Наложение лечебной прокладки',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0013',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0014',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0015',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0016',
        name: 'Услуга',
        price: '250.00'
      }]
    }, {
      id: 12000,
      category: 'Наложение девитализирующей пасты',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0026',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0027',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0028',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0029',
        name: 'Услуга',
        price: '250.00'
      },
      {
        art: 'Т0038',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0039',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0040',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 13000,
      category: 'Постановка временной пломбы',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 14000,
      category: 'Постановка пломбы на дополнительную поверхность',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0026',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0027',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0028',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0029',
        name: 'Услуга',
        price: '250.00'
      },
      {
        art: 'Т0038',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0039',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0040',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 15000,
      category: 'Эстетико-функциональное восстановление зубов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 16000,
      category: 'Восстановление аппроксимальной стенки зуба',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 17000,
      category: 'Лечение дисколорита',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 18000,
      category: 'Реминерализирующая терапия',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 19000,
      category: 'Герметизация зубов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 20000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }
  ],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
