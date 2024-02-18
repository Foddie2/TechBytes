// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  typescript: {
    typeCheck: true
  }, 


  css: ['~/assets/css/main.css'],
  plugins: [
    { 
      src: "@/plugins/aos", 
      mode: "client"
    },
  ],
  devServerHandlers: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: 
  ["@nuxt/content","nuxt-purgecss","@nuxt/image","@vite-pwa/nuxt", // "nuxt-newsletter",

  //Sending mails configs
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
  }], "@nuxtjs/tailwindcss"],
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