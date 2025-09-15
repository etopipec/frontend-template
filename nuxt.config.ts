import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
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
  },

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
    components: {
      prefix: 'Pv',
    }
  }
});