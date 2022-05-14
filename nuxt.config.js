export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tugas_akhir_sekolah_beta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},

      { rel: 'stylesheet', href: '/ext-assets/vendor/bootstrap/css/bootstrap.min.css'},

      { rel: 'stylesheet', href: '/ext-assets/assets/css/templatemo-chain-app-dev.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin: "anonymous"},
      { rel: 'stylesheet', href: '/ext-assets/assets/css/animated.css'},
      { rel: 'stylesheet', href: '/ext-assets/assets/css/owl.css'},
    ],
    script: [
      {src: '/ext-assets/vendor/jquery/jquery.min.js'},
      {src: '/ext-assets/vendor/bootstrap/js/bootstrap.bundle.min.js'},
      {src: '/ext-assets/assets/js/owl-carousel.js'},
      {src: '/ext-assets/assets/js/animation.js'},
      {src: '/ext-assets/assets/js/imagesloaded.js'},
      {src: '/ext-assets/assets/js/popup.js'},
      {src: '/ext-assets/assets/js/custom.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api-mobilespecs.azharimm.site',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 3512
  }
}
