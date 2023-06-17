import { mode } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Poppins: true,
      Inter: true,
    },
  },
})