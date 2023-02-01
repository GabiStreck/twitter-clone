// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/strapi'
    ],
    runtimeConfig: {
        public: {
            strapi: {
                url: process.env.STRAPI_URL || 'http://localhost:1337' // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
            },
        }
    },
})