export default {
  name: 'Имплантология',
  data: [
    {
      isActive: true,
      billedServices: [{
        art: 'Т0001',
        name: 'Осмотр после имплантации',
        price: '500.00'
      }]
    }, {
      id: 34000,
      category: 'Операции',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    }, {
      id: 35000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      description: 'без стоимости анестезии, шовных материалов и восстановления костного деффекта',
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    }, {
      id: 36000,
      category: 'Наложение швов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }
  ]
}
