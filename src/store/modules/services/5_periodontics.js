export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [{
        art: 'Т0001',
        name: 'Консультация врача-стоматолога-терапевта и оформление консультативного заключения',
        price: '500.00'
      }]
    }, {
      id: 27000,
      category: 'Консервативное лечение',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 28000,
      category: 'Операции',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      description: 'без стоимости анестезии, шовных материалов и восстановления костного деффекта',
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 29000,
      category: 'Наложение швов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 30000,
      category: 'Восстановление костного дефекта',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 31000,
      category: 'Шинирование',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 32000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 33000,
      category: 'Лечение слизистой оболочки полости рта',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }
  ],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
