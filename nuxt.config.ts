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
    '@nuxt/content'
  ],
   content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
const config = {
  /* other configs omitted */
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/google-fonts'
  ],
  vite: {
    /* options for vite */
    vue: {
      /* options for vite-plugin-vue2 */
    },
  }
}

