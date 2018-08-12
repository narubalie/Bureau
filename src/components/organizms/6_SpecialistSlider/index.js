export default {
  name: 'specialistSlider',
  data () {
    return {
      doctors: [{
        id: 1000,
        name: 'Великолепная Дарья',
        type: 'Стоматолог',
        isActive: true,
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-11.png')
      },
      {
        id: 2000,
        name: 'Длиннофамильная Анна',
        type: 'Стоматолог',
        isActive: true,
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-12.png')
      },
      {
        id: 3000,
        name: 'Кроткая Семирамида',
        isActive: true,
        type: 'Стоматолог',
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-13.png')
      },
      {
        id: 4000,
        name: 'Актуальная Елена',
        isActive: true,
        type: 'Стоматолог',
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-14.png')
      },
      {
        id: 5000,
        name: 'Селезнёва Сабрина',
        isActive: true,
        type: 'Стоматолог',
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-15.png')
      }]
    }
  }
}
