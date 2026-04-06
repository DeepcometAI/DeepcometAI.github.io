// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  // Static site generation for GitHub Pages
  nitro: {
    preset: 'github-pages'
  },

  // Set base URL if deploying to a sub-path like https://username.github.io/repo-name/
  // Change 'deepcomet-nuxt' to your actual GitHub repo name
  // If deploying to username.github.io (root), set this to '/'
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Deepcomet AI: Strategic Interactive Report',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    exposeConfig: false,
    viewer: false
  }
})