export default {
  server: {
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniko',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Медицинский центр Данико предоставляет услуги по консультации врачей, стационарном лечении и специализированном оборудовании',
      },
    ],
    link: [
      {
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/yandexMap.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  axios: {
    baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000',
    browserBaseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000',
  },

  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
