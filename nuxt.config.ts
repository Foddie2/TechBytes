// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: [
    { src: "@/plugins/aos", mode: "client"},
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    // "nuxt-newsletter",
    "nuxt-purgecss",



  //Sending mails configs
  //  '@nuxtjs/axios',
    ['nuxt-mailer', {
      message: {
        to: 'bensonagala@live.com',
      },
     smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'username',
          pass: 'password'
        },
      },
    }], 
  ],
   content: {
    // https://content.nuxtjs.org/api/configuration
  },

  runtimeConfig: {
    mailer: {
      host: process.env.NUXT_MAILER_HOST,
      port: process.env.NUXT_MAILER_PORT,
      user: process.env.NUXT_MAILER_USER,
      password: process.env.NUXT_MAILER_PASSWORD,
    },
  },
})
