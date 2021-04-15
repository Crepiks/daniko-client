import Vue from 'vue'
import YandexMap from 'vue-yandex-maps'

const settings = {
  apiKey: '1663fba3-2889-4f83-ad0a-974c34d39d9b',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YandexMap, settings)
