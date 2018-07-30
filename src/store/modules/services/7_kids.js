export default {
  name: 'Детская стоматология',
  data: [
    {
      id: 37000,
      category: 'Лечение временных зубов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 38000,
      category: 'Лечение кариеса временных зубов в 1 посещение',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      description: 'без стоимости анестезии, шовных материалов и восстановления костного деффекта',
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 39000,
      category: 'Лечение пульпита временных зубов в 3 посещения',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 40000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 41000,
      category: 'Удаление временного зуба',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 42000,
      category: 'Реминализирующая терапия',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }
  ]
}
