// eslint-disable-next-line nuxt/no-cjs-in-config
import path from 'path'

export default {
  devServerHandlers: [],
  target: 'static',
  router: {
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active'
  },

  loading: {
    color: 'blue',
    height: '5px'
  },
  // loading: '@/components/LoadingBar.vue',

  // env: {
  //   DB_HOST: process.env.DB_HOST
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiURL: process.env.API_URL,
    imageURL: process.env.IMAGE_URL || 'https://nuxtjs.org',
    xenditPublicKey: process.env.XENDIT_PUBLIC_KEY,
    xenditAmount: process.env.XENDIT_AMOUNT,
    socketioURL: process.env.SOCKET_IO_URL
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PKPA - Pendidikan Khusus Profesi Advocat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   src: 'https://js.xendit.co/v1/xendit.min.js'
      // },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'normalize.css/normalize.css',
    '~assets/css/tailwind.css',
    '~assets/css/main.css',
    '~assets/css/my-style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/TiptapVuetify', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/hotjar.js', mode: 'client' },
    { src: '~/plugins/socket.js' },
    { src: '~/plugins/vue-html2pdf', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
    // 'nuxt-purgecss'
  ],
  moment: {
    defaultLocale: 'id',
    locales: ['id']
  },
  vuetify: {
    /* module options */
    treeShake: true,
    customVariables: ['~/assets/scss/variables.scss']
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  // purgeCSS: {
  //   whitelist: ['v-application', 'v-application--wrap'],
  //   whitelistPatterns: [/^v-((?!application).)*$/, /^theme--*/, /.*-transition/],
  //   whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/]
  // },

  googleFonts: {
    download: true,
    overwriting: true,
    families: {
      Quicksand: true,
      'Josefin+Sans': true,
      'Open Sans': {
        wght: [400, 500, 600, 700]
      },
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400, 600],
        ital: [100]
      }
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/tailwindcss',
    'vue-sweetalert2/nuxt',
    'cookie-universal-nuxt',
    // 'nuxt-socket-io',
    'nuxt-highcharts'
  ],
  highcharts: {
    /* module options */
    exporting: true
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  // io: {
  //   // module options
  //   sockets: [{
  //     name: 'main',
  //     url: process.env.SOCKET_IO_URL,
  //     default: true
  //   }],
  //   server: {
  //     cors: { origin: '*' }
  //   }
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'PKPA Online',
      author: 'Inkortech'
    },
    manifest: {
      name: 'LMS PKPA ADR Online',
      short_name: 'LMS PKPA',
      lang: 'en',
      workboxOptions: {
        exclude: ['_redirects']
      }
    },
    icon: {
      source: 'static/icon-alt.png',
      filename: 'icon-alt.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules', 'vuetify/lib', 'tiptap-vuetify']
    // postcss: {
    //   plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {}
    //   }
    // }

    // postcss: {
    //   plugins: {
    //     'postcss-import': {},
    //     tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
    //     'postcss-nested': {}
    //   }
    // },
    // preset: {
    //   stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    // },
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       tailwindConfig: {
    //         test: /tailwind\.config/,
    //         chunks: 'all',
    //         priority: 10,
    //         name: true
    //       }
    //     }
    //   }
    // }
  },

  // axios: {
  //   baseURL: 'http://wp-pkpa.local/api'
  // },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 60, // 1800, // 30 menit
          required: true,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'data.token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  experimental: {
    watcher: "chokidar",
  },
}
