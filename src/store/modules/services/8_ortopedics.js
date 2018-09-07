export default {
  name: 'Ортопедия',
  data: [
    {
      id: 43000,
      category: 'Лечение временных зубов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 44000,
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
      id: 45000,
      category: 'Лечение пульпита временных зубов в 3 посещения',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 46000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 47000,
      category: 'Удаление временного зуба',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 48000,
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
