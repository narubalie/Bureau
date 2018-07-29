export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [{
        art: 'Т0001',
        name: 'Консультация врача-стоматолога-хирурга и оформление консультативного заключения',
        price: '270.00'
      }]
    },
    {
      id: 26000,
      category: 'Отбеливание зубов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      description: 'без стоимости анестезии, шовных материалов и восстановления костного дефекта',
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
