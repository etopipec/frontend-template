// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss'
  ],

  srcDir: 'src/',
  
  alias: {
    '@app': './src/app',
    '@widgets': './src/widgets',
    '@features': './src/features',
    '@entities': './src/entities',
    '@shared': './src/shared'
  },

  css: [
    '@/app/styles/tailwind.css',
    '@/app/styles/global.css',
  ],

  tailwindcss: {
    cssPath: '@/app/styles/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
  }
});