// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    // "nuxt-newsletter",


  //Sending mails configs
   '@nuxtjs/axios',
   ['nuxt-mail', {
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
  }
})
