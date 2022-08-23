export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lin-nuxt-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content:'ie=edge'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/aiq8g-3kinx-001.ico' },
      // ====== FontAwesome css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/fonts/fontawesome/css/all.min.css"},
      // ====== Flaticon css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/fonts/flaticon/flaticon.css"},
      // ====== Bootstrap css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/bootstrap/css/bootstrap.min.css"},
      // ====== magnific-popup css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/magnific-popup/dist/magnific-popup.css"},
      // ====== Slick-popup css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/slick/slick.css"},
      // ====== Jquery UI css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/jquery-ui/jquery-ui.min.css"},
      // ====== Nice Select css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/nice-select/css/nice-select.css"},
      // ====== Animate css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/vendor/animate.css"},
      // ====== Default css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/css/default.css"},
      // ====== Style css ======
      { rel:"stylesheet", type:'text/css', href:"/assets/css/style.css"},
    ],
    script:[
      // ====== Jquery js ======
      { src:"/assets/vendor/jquery-3.6.0.min.js", body: true},
      // ====== Bootstrap js ======
      { src:"/assets/vendor/popper/popper.min.js", body: true},
      // ====== Bootstrap js ======
      { src:"/assets/vendor/bootstrap/js/bootstrap.min.js", body: true},
      // ====== Slick js ======
      { src:"/assets/vendor/slick/slick.min.js", body: true},
      // ====== Magnific js ======
      { src:"/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js", body: true},
      // ====== Isotope js ======
      { src:"/assets/vendor/isotope.min.js", body: true},
      // ====== Imagesloaded js ======
      { src:"/assets/vendor/imagesloaded.min.js", body: true},
      // ====== Counterup js ======
      { src:"/assets/vendor/jquery.counterup.min.js", body: true},
      // ====== Waypoints js ======
      { src:"/assets/vendor/jquery.waypoints.js", body: true},
      // ====== Nice-select js ======
      { src:"/assets/vendor/nice-select/js/jquery.nice-select.min.js", body: true},
      // ====== jquery UI js ======
      { src:"/assets/vendor/jquery-ui/jquery-ui.min.js", body: true},
      // ====== donutty js ======
      { src:"/assets/vendor/donutty-jquery.min.js", body: true},
      // ====== WOW js ======
      { src:"/assets/vendor/wow.min.js", body: true},
      // ====== Main js ======
      { src:"/assets/js/theme.js", body: true},
    ]
  },
  app:{
    script:[
      { src:"/assets/vendor/jquery-3.6.0.min.js" }
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
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
